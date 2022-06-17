257

[](https://stackoverflow.com/posts/45130990/timeline)

This one uses the maximum amount of new, buzzwordy features available in node 8, including Promises, util/promisify, destructuring, async-await, map+reduce and more, making your co-workers scratch their heads as they try to figure out what is going on.

Node 8+
-------

No external dependencies.

```
const { promisify } = require('util');
const { resolve } = require('path');
const fs = require('fs');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(subdirs.map(async (subdir) => {
    const res = resolve(dir, subdir);
    return (await stat(res)).isDirectory() ? getFiles(res) : res;
  }));
  return files.reduce((a, f) => a.concat(f), []);
}

```

### Usage

```
getFiles(__dirname)
  .then(files => console.log(files))
  .catch(e => console.error(e));

```

Node 10.10+
-----------

Updated for node 10+ with even more whizbang:

```
const { resolve } = require('path');
const { readdir } = require('fs').promises;

async function getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(dirents.map((dirent) => {
    const res = resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  }));
  return Array.prototype.concat(...files);
}

```

Note that starting with node 11.15.0 you can use `files.flat()` instead of `Array.prototype.concat(...files)` to flatten the files array.

Node 11+
--------

If you want to blow everybody's head up completely, you can use the following version using *async iterators*. In addition to being really cool, it also allows consumers to pull results one-at-a-time, making it better suited for really large directories.

```
const { resolve } = require('path');
const { readdir } = require('fs').promises;

async function* getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
}

```

Usage has changed because the return type is now an async iterator instead of a promise

```
;(async () => {
  for await (const f of getFiles('.')) {
    console.log(f);
  }
})()
```