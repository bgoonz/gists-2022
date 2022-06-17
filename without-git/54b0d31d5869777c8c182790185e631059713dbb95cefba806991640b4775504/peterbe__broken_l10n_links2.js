const fs = require("fs");
const path = require("path");

const cheerio = require("./build/monkeypatched-cheerio");
const { VALID_LOCALES } = require("./libs/constants");

const VALID_LOCALES_KEYS_SET = new Set(
  Array.from(VALID_LOCALES.keys()).map((x) => x.toLowerCase())
);

function* walker(root) {
  const files = fs.readdirSync(root);
  for (const name of files) {
    const filepath = path.join(root, name);
    const isDirectory = fs.statSync(filepath).isDirectory();
    if (isDirectory) {
      yield* walker(filepath);
    } else {
      yield filepath;
    }
  }
}

const FIXABLE_ALIASES = new Map();
for (const locale of VALID_LOCALES.keys()) {
  if (locale.includes("-")) {
    FIXABLE_ALIASES.set(locale.replace("-", "_").toLowerCase(), locale);
  } else {
    FIXABLE_ALIASES.set(`${locale}-${locale}`.toLowerCase(), locale);
  }
}

// Custom ones (order matters)
FIXABLE_ALIASES.set("en", "en-US");
FIXABLE_ALIASES.set("bn-bd", "bn");
FIXABLE_ALIASES.set("ja-jp", "ja");
FIXABLE_ALIASES.set("pt", "pt-PT");
FIXABLE_ALIASES.set("cn", "zh-CN");
FIXABLE_ALIASES.set("zh", "zh-TW");
// console.log(FIXABLE_ALIASES);

const badLocales = new Map();
const badLocaleLCs = new Map();
const fixableLocaleLCs = new Map();
function check(pathname) {
  const locale = pathname.split("/")[1];
  const localeLC = locale.toLowerCase();
  if (VALID_LOCALES_KEYS_SET.has(localeLC)) return;
  if (locale === ".." || locale === "") return;
  // Trouble makers ahead
  // console.log("TROUBLE", { locale });

  if (!badLocales.has(locale)) badLocales.set(locale, 0);
  badLocales.set(locale, badLocales.get(locale) + 1);

  if (!badLocaleLCs.has(localeLC)) badLocaleLCs.set(localeLC, 0);
  badLocaleLCs.set(localeLC, badLocaleLCs.get(localeLC) + 1);

  if (FIXABLE_ALIASES.has(localeLC)) {
    // console.log(`FIXABLE ${locale} -> ${FIXABLE_ALIASES.get(localeLC)}`);
    if (!fixableLocaleLCs.has(localeLC)) fixableLocaleLCs.set(localeLC, 0);
    fixableLocaleLCs.set(localeLC, fixableLocaleLCs.get(localeLC) + 1);
  }
}

function checkAll(locale, lastOne = false) {
  const dir = "client/build/" + locale.toLowerCase();
  const paths = Array.from(walker(dir));
  let docs = 0;
  for (const filepath of paths) {
    if (
      path.basename(filepath) === "index.html" &&
      !filepath.includes("_samples_")
    ) {
      const $ = cheerio.load(fs.readFileSync(filepath, "utf-8"));
      docs++;
      $("article a[href]").each((i, element) => {
        const href = $(element).attr("href");
        if (
          href &&
          href.startsWith("/") &&
          href.includes("/docs/") &&
          !href.startsWith("/docs/")
        ) {
          check(href);
        }
      });
    }
  }
  console.log(`${docs.toLocaleString()} in ${dir}`);
}

for (const locale of VALID_LOCALES.keys()) {
  checkAll(locale);
}
// checkAll("zh-TW");
// checkAll("en-US");
// checkAll("zh-CN");
// checkAll("fr");
// checkAll("bn");
// checkAll("ru");
// console.log(badLocales);
// console.log(badLocaleLCs);
console.log("\n");
const flat = Array.from(badLocaleLCs.entries());
flat.sort((a, b) => b[1] - a[1]);
// console.log(flat);
// console.log(fixableLocaleLCs);
console.log("\n");

console.log("COUNT   FAILURE   FIXABLE     HOPELESS");
for (const [failure, count] of flat) {
  const fixable = fixableLocaleLCs.get(failure) || 0;
  const hopeless = count - fixable;
  const p = ((100 * fixable) / count).toFixed(0);
  const parts = [
    `${count.toLocaleString()}`.padEnd(8),
    failure.padEnd(10),
    !fixable
      ? "0".padEnd(12)
      : `${fixable.toLocaleString()} (${p}%)`.padEnd(12),
    hopeless.toLocaleString(),
  ];
  console.log(parts.join(""));
}
