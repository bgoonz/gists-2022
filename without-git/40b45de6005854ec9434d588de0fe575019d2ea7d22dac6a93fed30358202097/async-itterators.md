What are Async Iterators? [Permalink](https://qwtel.com/posts/software/async-generators-in-the-wild/?referrer=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F5827612%2Fnode-js-fs-readdir-recursive-directory-search%2F45130990%2345130990#what-are-async-iterators)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Async iterators are an upcoming feature of JavaScript that fills an important language gap: What happens when you combine an [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) with a [generator function](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/function*)?

Async functions return promises, generator functions return iterators, so what does an async generator function return? An iterator of promises!

An async generator function is declared with both the `async` and `function*` keywords:

```
const timeout = t => new Promise(r => setTimeout(r, t));

async function* foo() {
  yield 1
  await timeout(1000);
  yield 2;
  await timeout(1000);
  yield 3;
}

```

Sweet! So how can we use for something... useful?

Recursively Reading All Files From a Directory [Permalink](https://qwtel.com/posts/software/async-generators-in-the-wild/?referrer=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F5827612%2Fnode-js-fs-readdir-recursive-directory-search%2F45130990%2345130990#recursively-reading-all-files-from-a-directory)
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Conceptually, all the files in a directory are iterable. However, in order to find them we'll have to perform asynchronous operations on the file system. Unless we want to do all the work upfront, we're better off with an async iterator that returns a result whenever the necessary async operations complete.

The implementation below works in node 11+ without any additional flags:

```
const { resolve } = require('path');
const { readdir, stat } = require('fs').promises;

async function* getFiles(rootPath) {
  const fileNames = await readdir(rootPath);
  for (const fileName of fileNames) {
    const path = resolve(rootPath, fileName);
    if ((await stat(path)).isDirectory()) {
      yield* getFiles(path);
    } else {
      yield path;
    }
  }
}

```

Similar to normal generator functions, we can use the `yield*` keyword to defer to another (async) generator, enabling an elegant, recursive implementation of recursive directory search.

It's efficient in the sense that it only looks as far into the directory as you ask it to. Unlike observables, async iterators are pull-based and only run when the `next` method on the underlying async iterator is called.

Consuming Async Iterators [Permalink](https://qwtel.com/posts/software/async-generators-in-the-wild/?referrer=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F5827612%2Fnode-js-fs-readdir-recursive-directory-search%2F45130990%2345130990#consuming-async-iterators)
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

A somewhat awkward way of using async iterators --- but without special language features --- is like this:

```
function forAwait(asyncIter, f) {
  asyncIter.next().then(({ done, value }) => {
    if (done) return;
    f(value);
    forAwait(asyncIter, f);
  });
}

forAwait(getFiles('.'), x => console.log(x));

```

As we can see, async iterators *really are* just iterators that return promises.

While researching this post, I was surprised to find out that the above code will not exceed the call stack limit, suggesting that modern JavaScript engines support tail recursions!?

However, the *idiomatic* way of consuming async iterators is via the new `for-await-of` loop. The following code produces the same result as the code above:

```
for await (const x of getFiles('.')) console.log(x);

```

In order for `for await` to work, it has to be wrapped inside an async function, i.e. `(async () => { /* ... */ })()`. When trying this out in the node REPL, note that `for await` is not covered by the `--experimental-repl-await` flag, so the IIAFE is still necessary.

We can upgrade our `forAwait` function to become sort of an asynchronous reduce:

```
async function reduce(asyncIter, f, init) {
  let res = init;
  for await (const x of asyncIter) {
    res = f(res, x);
  }
  return res;
}

```

With our new reduce function, we can "consume" an entire async iterator and push the results into an array:

```
const toArray = iter => reduce(iter, (a, x) => (a.push(x), a), []);

const files = await toArray(getFiles('.'));

```

This is similar to a traditional `getFiles` function that crawls an entire directory and returns all the files in a promise (see [my original answer on StackOverflow).

Stream-Like Processing [Permalink](https://qwtel.com/posts/software/async-generators-in-the-wild/?referrer=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F5827612%2Fnode-js-fs-readdir-recursive-directory-search%2F45130990%2345130990#stream-like-processing)
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

If we're about to process the files in some way, why wait until we've crawled the entire directory before we continue? With async iterables we can run code as soon as the results come in:

```
// Turn each file name into an object with a `name` property
async function* toObj(filesIter) {
  for await (const name of filesIter) yield { name };
}

// Add the file size (which is another async operation)
async function* addFileSize(objIter) {
  for await (const obj of objIter) {
    const size = (await stat(obj.name)).size;
    yield { ...obj, size };
  }
}

// Compose functions
const processed = addFileSize(toObj(getFiles('.')))

// Pull values from the pipeline
for await (const { name, size } of processed) {
  console.log(`${name} (${size} bytes)`);
}

```

To be fair, the code above is not very real-worldy. Also, the `a(b(c()))`-style function wrapping is not very readable. Hopefully either a [function bind operator](https://github.com/tc39/proposal-bind-operator) or a [pipe operator](https://github.com/tc39/proposal-pipeline-operator) is going to make this more practial in the future.

For now, this is how async iterators can be processed and combined to form new async iterators. It is similar to how stream processing works. In fact, both node and [browser streams](https://jakearchibald.com/2017/async-iterators-and-generators/) (are about to) implement the async iterator interface so they can be consumed in this way.