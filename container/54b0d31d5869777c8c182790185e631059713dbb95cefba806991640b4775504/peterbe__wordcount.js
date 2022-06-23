const fs = require("fs");
const path = require("path");
const cheerio = require("./build/monkeypatched-cheerio");

const DOCS = 100;

function* walker(root) {
  const files = fs.readdirSync(root);
  for (const name of files) {
    const filepath = path.join(root, name);
    const stat = fs.statSync(filepath);
    const isDirectory = fs.statSync(filepath).isDirectory();
    if (isDirectory) {
      yield* walker(filepath);
    } else {
      yield [filepath, stat];
    }
  }
}

const dir = "client/build/en-us/docs";
const popular = [];
for (const [filepath] of walker(dir)) {
  if (path.basename(filepath) === "index.json") {
    const { doc } = JSON.parse(fs.readFileSync(filepath));
    if (doc.popularity > 0) {
      popular.push({
        popularity: doc.popularity,
        sidebarHTML: doc.sidebarHTML,
        mdn_url: doc.mdn_url,
        bodyHTML: doc.body
          .filter((section) => section.type === "prose")
          .map((section) => {
            const { value } = section;
            if (value.title) {
              return `<h2>${value.title}</h2>\n${value.content}`;
            }
            return value.content;
          })
          .join("\n"),
      });
    }
  }
}
popular.sort((a, b) => b.popularity - a.popularity);
let charCount = 0;
let wordCount = 0;
popular.slice(0, DOCS).forEach((doc) => {
  console.log(doc.popularity, doc.mdn_url);
  // console.log(doc);
  const $ = cheerio.load(`<div id="_body">${doc.bodyHTML}</div>`);
  $("pre").remove();
  const text = $.text();
  wordCount += text.split(" ").length;
  charCount += text.replace(/\s+/g, "").length;
});
console.log(`TOP ${DOCS} DOCUMENTS...`);
console.log("WORDS", wordCount.toLocaleString());
console.log("CHARS", charCount.toLocaleString());
console.log("~WORDS PER DOC", (wordCount / DOCS).toFixed(0));
console.log("~CHARS PER DOC", (charCount / DOCS).toFixed(0));
