

There are basically two ways of accomplishing this. In an async environment you'll notice that there are two kinds of loops: serial and parallel. A serial loop waits for one iteration to complete before it moves onto the next iteration - this guarantees that every iteration of the loop completes in order. In a parallel loop, all the iterations are started at the same time, and one may complete before another, however, it is much faster than a serial loop. So in this case, it's probably better to use a parallel loop because it doesn't matter what order the walk completes in, just as long as it completes and returns the results (unless you want them in order).

A parallel loop would look like this:

```
var fs = require('fs');
var path = require('path');
var walk = function(dir, done) {
  var results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    var pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function(file) {
      file = path.resolve(dir, file);
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

```

A serial loop would look like this:

```
var fs = require('fs');
var path = require('path');
var walk = function(dir, done) {
  var results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    var i = 0;
    (function next() {
      var file = list[i++];
      if (!file) return done(null, results);
      file = path.resolve(dir, file);
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err, res) {
            results = results.concat(res);
            next();
          });
        } else {
          results.push(file);
          next();
        }
      });
    })();
  });
};

```

And to test it out on your home directory (WARNING: the results list will be huge if you have a lot of stuff in your home directory):

```
walk(process.env.HOME, function(err, results) {
  if (err) throw err;
  console.log(results);
});

```

EDIT: Improved examples.