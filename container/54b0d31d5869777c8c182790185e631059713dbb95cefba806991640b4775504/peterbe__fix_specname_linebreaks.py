import re
from pathlib import Path

def replacer(match):
    return f"'{match.groups()[0]} "

FIXES = 0
for file in Path('files/en-us/web/api').rglob('index.html'):
    lines = []
    with open(file) as f:
        for line in f:
            lines.append(line)

    content = ''.join(lines)

    changed = False
    new_content = ''
    # new_lines = []
    for line in lines:
        if 'SpecName' in line:
            c = line.count("'")
            if c % 2:
                new_content = re.sub("'([\w: ]+)\n\s+", replacer, content)
                break

        # new_lines.append(line)

    if new_content:
        with open(file, 'w')  as f:
            f.write(new_content)
        print(f"http://localhost:3000/{str(file).replace('/index.html', '').replace('files/en-us/', 'en-US/docs/')}")
        FIXES += 1

        if FIXES > 10:
            print("STOP!")
            break
