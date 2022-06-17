import json
from pathlib import Path
from collections import defaultdict

counts = defaultdict(int)

def walk(root:Path):
    for thing in root.iterdir():
        if thing.is_dir():
            walk(thing)
        elif thing.name == 'index.json':
            with open(thing) as f:
                doc = json.load(f)['doc']
                flaws = doc.get('flaws') or {}
                for flawgroup in flaws:
                    if flawgroup == 'macros':
                        for macroflaw in flaws[flawgroup]:
                            group = f"macros__{macroflaw['name']}"
                            counts[group] += 1
                    else:
                        counts[flawgroup] += 1



walk(Path('client/build/en-us/docs/'))

# flat = sorted[(v,k) for k,v in counts.items()]
# from pprint import pprint
# pprint(counts)
for flaw in sorted(counts):
    print(flaw.ljust(35), f'{counts[flaw]:,}')
