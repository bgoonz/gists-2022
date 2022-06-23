from pathlib import Path
import shutil

destination = Path('symlinks')
if destination.exists():
    shutil.rmtree(destination)

destination.mkdir()


import time

root = Path('remotefiles')

def run(directory):
    copied = []
    for thing in directory.iterdir():
        if thing.is_dir():
            copied.extend(run(thing))
        else:
            dest = destination / thing.relative_to(root)
            dest.parent.mkdir(parents=True, exist_ok=True)
            #shutil.copyfile(thing, dest)
            #thing.symlink_to(dest)
            dest.symlink_to(thing)
            copied.append(thing.stat().st_size)

    return copied


t0 = time.time()
copied = run(root)
t1 = time.time()

print("TOOK", t1 - t0)
print("# FILES", len(copied))
