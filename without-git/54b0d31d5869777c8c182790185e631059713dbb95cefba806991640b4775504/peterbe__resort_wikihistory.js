const fs = require("fs");
const all = JSON.parse(fs.readFileSync("files/en-us/_wikihistory.json"));

const sorted = Object.fromEntries(
  Object.keys(all)
    .sort()
    .map((key) => {
      return [key, all[key]];
    })
);

fs.writeFileSync(
  "/tmp/_wikihistory.json",
  JSON.stringify(sorted, null, 2) + "\n",
  "utf-8"
);
