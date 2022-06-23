require("dotenv").config();
const { promisify } = require("util");
const mysql = require("mysql");

const pool = mysql.createPool(process.env.DATABASE_URL);

const query = promisify(pool.query).bind(pool);

const MIN_DISTANCE_SECONDS = 60 * 60; // 1h

function reduceEdits(dateSequence) {
  const checked = [];
  let previous = null;
  for (const d of dateSequence) {
    if (!previous) {
      checked.push(d);
      previous = d;
      continue;
    }
    var diffSeconds = (previous.getTime() - d.getTime()) / 1000;
    // console.log([d, previous, diffSeconds]);
    if (diffSeconds > MIN_DISTANCE_SECONDS) {
      checked.push(d);
    }
    previous = d;
  }
  return checked;
}

// var dates = [
//   new Date("2020-10-28T02:10:58.853Z"),
//   new Date("2020-10-28T02:05:12.997Z"),
//   new Date("2020-10-28T01:55:13.047Z"),
//   new Date("2020-10-28T01:53:45.184Z"),
//   new Date("2020-10-28T01:42:23.825Z"),
//   new Date("2020-10-28T01:40:14.712Z"),
//   new Date("2020-10-28T01:30:19.645Z"),
//   new Date("2020-10-28T00:06:00.195Z"),
//   new Date("2020-10-27T23:58:32.009Z"),
//   new Date("2020-10-27T23:49:52.733Z"),
//   new Date("2020-10-27T23:30:07.707Z"),
// ];
// console.log(dates);
// console.log(reduceEdits(dates));

async function main() {
  try {
    const r = await query(
      `
    select r.created, d.locale, r.creator_id
    FROM wiki_revision r
    INNER JOIN wiki_document d ON r.document_id = d.id
    where r.created > '2020-08-31'
    order by r.created desc
    `.trim()
      // queryArgs
    );
    let day = null;
    let previousDay = null;
    let edits = {};
    for (let { created, creator_id, locale, document_id } of r) {
      created = new Date(created);
      day = `${created.getFullYear()}/${zfill(created.getMonth() + 1)}/${zfill(
        created.getDate()
      )}`;

      if (day !== previousDay) {
        // console.log("-------------------------------------------------------");
        // console.log(previousDay);
        // console.log(edits);
        if (previousDay) {
          add(previousDay, edits);
        }
        // console.log("\n");
        edits = {};
      }

      // console.log({ created, creator_id, locale });
      if (!edits[locale]) {
        edits[locale] = {};
      }
      if (!edits[locale][creator_id]) {
        edits[locale][creator_id] = [];
      }
      edits[locale][creator_id].push(created);

      // console.log(edits);

      previousDay = day;
    }
    reportGroups();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
}

const groups = new Map();
const distinctLocales = new Set();
function add(dateStr, edits) {
  if (!groups.has(dateStr)) {
    groups.set(dateStr, new Map());
  }
  for (const [locale, docEdits] of Object.entries(edits)) {
    distinctLocales.add(locale);
    let countEdits = 0;
    let countUsers = 0;
    for (const createds of Object.values(docEdits)) {
      // console.log(dateStr, locale, createds, reduceEdits(createds));
      countEdits += reduceEdits(createds).length;
    }
    groups.get(dateStr).set(locale, countEdits);
  }
}

function reportGroups() {
  let locales = [...distinctLocales];
  const sumByLocale = {};
  for (const locale of locales) {
    sumByLocale[locale] = 0;
  }
  for (const localeMap of groups.values()) {
    for (const [k, v] of localeMap) {
      sumByLocale[k] += v;
    }
  }
  locales.sort((a, b) => {
    return sumByLocale[b] - sumByLocale[a];
  });

  const dates = [...groups.keys()].reverse();

  const topLocales = locales.slice(0, 15);
  console.log(" ".padEnd(12), topLocales.map((x) => x.padEnd(6)).join(" "));
  for (const date of dates) {
    console.log(
      date.padEnd(12),
      topLocales
        .map((x) => `${groups.get(date).get(x) || 0}`.padEnd(6))
        .join(" ")
    );
  }
}

function zfill(d) {
  return `${d}`.padStart(2, "0");
}
main();
