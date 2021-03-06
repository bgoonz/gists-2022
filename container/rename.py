import os
import shutil
from os.path import *  # just to avoid typing "os.path." everywhere

# I am using abspath() here to get the absolute path to the folder.
folder = abspath(input("Enter the main folder: "))

# index through all elements in the main folder that are directories
for subfolder in os.listdir(folder):
    abs_subfolder = join(folder, subfolder)  # get the folder's absolute path
    if not isdir(abs_subfolder):
        continue  # go to the next element because this one wasn't a folder

    # index through all the files in this subfolder
    for file in os.listdir(abs_subfolder):
        # get the extension of the file to move
        extension = ".txt"

        new_file_path = abs_subfolder + "." + extension

        # move the file to its parent directory, and change its name
        shutil.move(join(abs_subfolder, file), new_file_path)

    # delete the directory the files were in
    # you can comment the next line if you don't want that to happen
    # os.rmdir(abs_subfolder)
