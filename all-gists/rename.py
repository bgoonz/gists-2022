#!/usr/bin/env python
import os
import shutil

# -- set the (absolute) path to the targeted folder below
dr = "./*"
# -- set the path to the textfiles below
ren = "description.txt"

renlist = [cpl for cpl in [l.split() for l in open(ren).readlines()] if cpl]
currnames = [r[1] for r in renlist]

for root, dirs, files in os.walk(dr, topdown=False):
    for dr in dirs:
        try:
            # look up the name, pass if not in the list
            i = currnames.index(dr)
        except ValueError:
            pass
        else:
            newname = renlist[i][0]
            shutil.move(root + "/" + dr, root + "/" + newname)
