const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const enUS = new Set();

function walkAndLog(root) {
  fs.readdirSync(root).forEach((file) => {
    let filepath = path.join(root, file);
    if (fs.statSync(filepath).isDirectory()) {
      walkAndLog(filepath);
    } else if (filepath.endsWith("index.yaml")) {
      const metadata = yaml.safeLoad(fs.readFileSync(filepath));
      enUS.add(metadata.slug);
      // enUS[metadata.slug]
      // if (locale !== metadata.locale.toLowerCase()) {
      //   throw new Error(filepath);
      // }
    }
  });
}

let noParent = 0;
function walk(root, locale) {
  fs.readdirSync(root).forEach((file) => {
    let filepath = path.join(root, file);
    if (fs.statSync(filepath).isDirectory()) {
      walk(filepath, locale);
    } else if (filepath.endsWith("index.yaml")) {
      const metadata = yaml.safeLoad(fs.readFileSync(filepath));
      if (locale !== metadata.locale.toLowerCase()) {
        throw new Error(filepath);
      }
      if (metadata.locale.toLowerCase() !== "en-us") {
        if (!metadata.parent && !enUS.has(metadata.slug)) {
          console.warn(filepath, "doesn't have a parent");
          noParent++;
        }
      }
    }
  });
}

let ROOT = "content/files";

walkAndLog(path.join(ROOT, "en-us"));

const locales = fs.readdirSync(ROOT);
console.log(locales);
for (let locale of locales) {
  walk(path.join(ROOT, locale), locale);
}

console.log(`non-en-US Documents without a parent: ${noParent}`);
