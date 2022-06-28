from pathlib import Path
import re

fixes = []


class Stop(Exception):
    """exit early"""


regex = re.compile(r'class="external"\s*')


def replacer(match):
    # print(match)
    return ""
    return match.group().lower()


NEEDLE = """
<p class="hidden">The compatibility table in this page is generated from structured data. If you'd like to contribute to the data, please check out <a href="https://github.com/mdn/browser-compat-data">https://github.com/mdn/browser-compat-data</a> and send us a pull request.</p>
"""


def fix(path):
    if len(fixes) > 10:
        raise Stop

    changes = 0
    new_content = ""
    with open(path) as f:
        content = f.read()
        if NEEDLE in content:
            new_content = content.replace(NEEDLE, "")

    if new_content:
        print("CHANGE", path)
        with open(path, "w") as f:
            f.write(new_content)
        fixes.append(path)


def walk(root: Path):
    for thing in root.iterdir():
        if thing.is_dir():
            walk(thing)
        elif thing.name == "index.html":
            fix(thing)


try:
    walk(Path("files/en-us/web/http"))
except Stop:
    print("MAX REACHED!")
print(len(fixes))
