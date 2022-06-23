const { Document } = require("./content");

function f1(options) {
  let count = 0;
  for (const filePath of Document.findAll0(options).iter({ pathOnly: true })) {
    count += 1;
  }
  return count;
}
function f2(options) {
  let count = 0;
  for (const filePath of Document.findAll(options).iter({ pathOnly: true })) {
    count += 1;
  }
  return count;
}

const allOptions = [];
allOptions.push({});
allOptions.push({
  folderSearch: "web/html/element/a",
});
allOptions.push({
  locales: new Map([["fr", true]]),
});
allOptions.push({
  files: new Set([
    "/Users/peterbe/dev/MOZILLA/MDN/content/files/en-us/glossary/argument/index.html",
    "en-us/webassembly/text_format_to_wasm/index.html",
  ]),
});
for (const options of allOptions) {
  console.log("OPTIONS:", options);
  console.time("findAll ");
  var r1 = f1(options);
  console.timeEnd("findAll ");
  console.time("findAll2");
  var r2 = f2(options);
  console.timeEnd("findAll2");
  console.assert(r1 === r2);
  console.log("");
}
