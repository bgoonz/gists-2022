import sys
from pathlib import Path
from collections import defaultdict

macros_used = defaultdict(int)

with open(sys.argv[1]) as f:
    for line in f:
        macro_name = line.split("|")[0]
        macros_used[macro_name] += 1

macros_possible = {
    x.name.lower().rsplit(".", 1)[0]: x
    for x in Path("kumascript/macros").iterdir()
    if x.name.endswith(".ejs")
}

flat = sorted([(macros_used.get(x) or -1, x) for x in macros_possible], reverse=True)
# from pprint import pprint
# pprint(macros_used)
# from pprint import pprint
# pprint(macros_possible)

print("MOST POPULAR...")
for used, name in flat:
    if used > 0:
        print(f"{name:<30} {used:,}")
print("\n")


deletable = len([x for x, y in flat if x <= 0])
print(f"{deletable} DELETE WORTHY (never used)")
for used, name in flat:
    if used <= 0:
        print(macros_possible[name])
