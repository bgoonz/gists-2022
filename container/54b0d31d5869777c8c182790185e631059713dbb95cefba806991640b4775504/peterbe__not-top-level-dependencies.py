import re
import json
from pathlib import Path

with open("package.json") as f:
    package_json = json.load(f)


def add(file, mut):
    with open(file) as f:
        for line in f:
            for match in re.findall("from '(.*?)'", line):
                if match.startswith("."):
                    continue
                if match in ["path", "fs", "os", "url", "zlib"]:
                    continue
                mut.append(match)


def walk(root, mut, extensions=None):
    extensions = extensions or ["js", "mjs"]
    for extension in extensions:
        for file in root.rglob(f"*.{extension}"):
            # print(file)
            add(file, mut)


finds = []
walk(Path("lib"), finds)
walk(Path("tests"), finds)
walk(Path(".github/actions-scripts"), finds)
walk(Path("middleware"), finds)
walk(Path("components"), finds, ["ts", "tsx"])
add(Path("server.mjs"), finds)

found = set(finds)
specified = set(package_json["dependencies"].keys()) | set(
    package_json["devDependencies"].keys()
)

ignore = set(
    [
        "nodemon",
        "jest",
        "eslint",
        "prettier",
        "rimraf",
        "cross-env",
        "start-server-and-test",
        "husky",
        "typescript",
        "@typescript-eslint/parser",
        "@primer/css",
        "eslint-config-prettier",
        "commander",
        "eslint-config-standard",
        "eslint-plugin-promise",
        "eslint-plugin-node",
    ]
)


for suspect in specified - found - ignore:
    if suspect.startswith("@types/"):
        continue
    if [x for x in found if x.startswith(suspect + "/")]:
        # e.g. `highlight.js/lib/languages/erb` ~= `highlight.js`
        continue
    print("SUSPECT!", suspect)
