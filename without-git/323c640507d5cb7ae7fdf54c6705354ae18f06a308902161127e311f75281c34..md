Cleaning up your asynchronous code with `await`
-----------------------------------------------

REPLs have traditionally had a difficult time allowing you to interact with asynchronous code since they encourage a coding style where you evaluate expressions and use those results in the next field. But if you are using promises or callbacks, this breaks down because these results exist only in the callback, not the next line:

In RunKit, you can use top-level `await` to get the same behavior of synchronous code.

Now we can treat this code as synchronous, despite the fact that the code is still executing asynchronously.

Let's look how. It helps to have a more complex example, where we need to do a few asynchronous operations in sequence. You can see how `await`, promises and callbacks achieve the same results, but the `await` style works better in a REPL:

-   await
-   promises
-   callbacks

Here, we use `await` on lines 4 and 8, and the results from each request remain in scope.

Remember, `await` expects a `promise` so you can either write your own or use one of the many libraries that natively supports promises, and npm is full of packages that add promise support to existing libraries. Here are a few of our favorites:

-   [fs-promise](https://npm.runkit.com/fs-promise) - promise based filesystem api
-   [request-promise](https://npm.runkit.com/request-promise) - a wrapper around "request" for http stuff
-   [glob-promise](https://npm.runkit.com/glob-promise) - glob style filesystem queries
-   [bluebird](https://npm.runkit.com/bluebird) - general promise library with lots of utilities

### Further Reading

-   [ES7 Async/Await presented at Brookyln.js](http://rossboucher.com/await)
-   [Babel.js](https://babeljs.io/)
-   [ECMAScript's Proposal for async/await](https://github.com/lukehoban/ecmascript-asyncawait/)
-   [ES Meeting Notes discussing on async/await](https://esdiscuss.org/notes/2014-01-30#async-await)
-   [Does async/await Solve a Real Problem?](https://esdiscuss.org/topic/does-async-await-solve-a-real-problem)
-   [The Long Road to async/await in JavaScript](https://thomashunter.name/blog/the-long-road-to-asyncawait-in-javascript/)
-   [async/await: The Hero JavaScript Deserved](https://www.twilio.com/blog/2015/10/asyncawait-the-hero-javascript-deserved.html)