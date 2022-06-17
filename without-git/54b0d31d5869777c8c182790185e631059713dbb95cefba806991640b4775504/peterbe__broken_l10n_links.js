const fs = require("fs");
const path = require("path");
const cheerio = require("./build/monkeypatched-cheerio");

const zlib = require("zlib");
const readline = require("readline");

let lineReader = (fname) =>
  readline.createInterface({
    input: fs.createReadStream(fname).pipe(zlib.createGunzip()),
  });

function* walker(root) {
  const files = fs.readdirSync(root);
  for (const name of files) {
    const filepath = path.join(root, name);
    // const stat = fs.statSync(filepath);
    const isDirectory = fs.statSync(filepath).isDirectory();
    if (isDirectory) {
      yield* walker(filepath);
    } else {
      yield filepath;
    }
  }
}

// This is ASYNC
const sitemaps = new Map();
const paths = Array.from(walker("./client/build/sitemaps"));
// console.log(paths);
paths.forEach((filepath, i) => {
  if (filepath.endsWith(".xml.gz")) {
    const locale = filepath.split("/")[3];
    sitemaps.set(locale, new Set());
    // console.log(filepath);
    // sitemaps.set(locale, new Set());
    lineReader(filepath)
      .on("line", (line) => {
        [...line.matchAll(/<loc>(.*?)<\/loc>/g)].forEach((m) => {
          const url = new URL(m[1]);
          // console.log(url.pathname);
          sitemaps.get(locale).add(url.pathname);
        });
      })
      .on("close", () => {
        // console.log("Finished", locale, i, i === paths.length - 1);
        checkAll(locale, i === paths.length - 1);
      });
  }
});

const badLocales = new Set();
const badLocaleLCs = new Set();
function check(pathname) {
  const locale = pathname.split("/")[1];
  const localeLC = locale.toLowerCase();
  const set = sitemaps.get(localeLC);
  if (!set) {
    if (localeLC === "..") return false;
    if (!badLocales.has(locale)) {
      badLocales.add(locale);
      badLocaleLCs.add(localeLC);
      // console.log(pathname);
      console.warn("No sitemap for:", { localeLC, locale });
    }

    // throw new Error(`No sitemap for ${localeLC}`);
    return false;
  }
  return set.has(pathname);
}

function checkAll(locale, lastOne = false) {
  const dir = "client/build/" + locale;
  const checked = new Map();
  const paths = Array.from(walker(dir));
  for (const filepath of paths) {
    if (path.basename(filepath) === "index.html") {
      const $ = cheerio.load(fs.readFileSync(filepath, "utf-8"));
      // const $article = $("#wikiArticle");
      // console.log(filepath);
      $("#wikiArticle a[href]").each((i, element) => {
        const href = $(element).attr("href");
        if (
          href &&
          href.startsWith("/") &&
          href.includes("/docs/") &&
          !href.startsWith("/docs/")
        ) {
          if (!checked.has(href)) {
            checked.set(href, check(href));
          }
          // if (checked.get(href)) console.log(href, checked.get(href));
        }
      });
    }
  }
  if (lastOne) {
    console.log("All sitemaps parsed and all checks complete!");
    console.log("ALL bad locales (independent of case):");
    const list = Array.from(badLocaleLCs).sort();
    console.log(JSON.stringify(list, undefined, 2));
    console.log();
  }
}
