var csso = require("csso");
var node_sass = require("node-sass");
var sass = require("sass");
var scss_filename = "/Users/peterbe/yari/client/src/kumastyles/react-mdn.scss";

var fsize = (b) => `${(b / 1024.0).toFixed(0)}kb`;

function run(name, func) {
  var t0 = new Date();
  func.render({ file: scss_filename }, function (err, result) {
    var t1 = new Date();
    console.assert(!err, err);
    var css = result.css.toString();
    var minifiedCss = csso.minify(css).css;
    console.log(
      name,
      `took ${t1 - t0}ms`,
      "result",
      fsize(css.length),
      fsize(minifiedCss.length)
    );
  });
}

// run("node-sass", node_sass);
run("sass", sass);
