# How rsync works

(source: https://sites.google.com/site/rsync2u/home/rsync-tutorial/how-rsync-works3)

~/demo1$rsync is efficient. The first time rsync is run, destination is created and the full source is copied to destination. Thereafter, only changes in source are copied to destination. If the --link-dest option is used, unchanged files are hard linked to the previous backup.

A hard link is a pointer to a file. Hard links have the advantage of using very little memory. There is an illustrated explanation of hard links on http://blog.interlinked.org/tutorials/rsync_time_machine.html > scroll down to “Hard-Links”.

Here is how the "rsync --link-dest=DIR" algorithm creates files in destination:

    if destination does not exists,
        create destination

    if DIR exists (where DIR is the previous backup),
        compare source to DIR
        hard link unchanged files to DIR
        copy changed files from source
    else
        copy all files from source

By default, rsync does not compressed files. Restoring files is as simple as a cp command.

rsync syntax

The syntax for making a local backup is:

    rsync [OPTION...] SOURCE... [DESTINATION]

OPTION
This tutorial will use the -ain options. Here are the option definitions from the rsync man page:

    -a, --archive mode; equivalent to -rlptgoD
        -r        recursive
        -l        preserve links
        -p        preserve permissions
        -t        preserve times
        -g        preserve group
        -o        preserve owner
        -D        preserve device files, special files
    -i, --itemize-changes   output a change-summary for all updates
    -n, --dry-run           perform a trial run with no changes made
    --link-dest=DIR         hardlink to files in DIR when unchanged

SOURCE
Source is the directory that is backed up. At least one source is required. A trailing slash on a source path means "copy the contents of this directory". Without a trailing slash it means "copy the directory".

DESTINATION
Destination is the directory that source is copied to. Trailing slash on the destination directory doesn't matter.

Setup source directory for example 1

The tutorial example uses a small directory. Create a demo1 directory in your home directory:

    user> mkdir demo1

Change to the newly created rsync directory:

    user> cd demo1

Create the source directory:

    ~/demo1$ mkdir source

Now populate the source directory with files:

    touch source/fileA source/fileB

Your source directory should look like this:

    ~/demo1$ ls -AFR source
    source:
    fileA  fileB

In the following example, all commands are from the rsync directory.

Example 1 "link-dest"

This example makes an initial backup, and then makes a second backup (analogous to making full backup and then an incremental backup). Make sure that destinations are removed:

    ~/demo1$ rm -r dest0 dest1 dest2

Run rsync to make the initial backup (dest1):

    demo1> rsync -ai --link-dest=../dest0 source dest1
    --link-dest arg does not exist: ../dest0
    cd+++++++++ source/
    >f+++++++++ source/fileA
    >f+++++++++ source/fileB

Display the results:

    ~/demo1$ ls -l source/
    -rw-r--r-- 1 wolf wolf 0 2010-02-26 20:00 fileA
    -rw-r--r-- 1 wolf wolf 0 2010-02-26 20:00 fileB

    ~/demo1$ ls -l dest1/source/
    -rw-r--r-- 2 wolf wolf 0 2010-02-26 20:00 fileA
    -rw-r--r-- 1 wolf wolf 0 2010-02-26 20:00 fileB

Tracing the "rsync --link-dest=DIR" algorithm at the top of this page we see what happened. Since the dest1 directory did not exist, rsync created it. Since dest0 did not exist, rsync copied all source files to dest1.

On the second backup, we will show that only changed files are copied destination. Use the touch command to change the modification time of a source file:

    ~/demo1$ touch source/fileB

Run rsync to create a new destination (dest2), refer link-dest to the previous destination (dest1), and backup to the new destination (dest2):

    ~/demo1$ rsync -ai --link-dest=../dest1 source dest2
    >f..t...... source/fileB

Display the results:

    ~/demo1$ ls -l source/
    -rw-r--r-- 1 wolf wolf 0 2010-02-26 20:00 fileA
    -rw-r--r-- 1 wolf wolf 0 2010-02-26 20:03 fileB

    ~/demo1$ ls -l dest1/source/
    -rw-r--r-- 2 wolf wolf 0 2010-02-26 20:00 fileA
    -rw-r--r-- 1 wolf wolf 0 2010-02-26 20:00 fileB

    ~/demo1$ ls -l dest2/source/
    -rw-r--r-- 2 wolf wolf 0 2010-02-26 20:00 fileA
    -rw-r--r-- 1 wolf wolf 0 2010-02-26 20:03 fileB

Tracing the "rsync --link-dest=DIR" algorithm at the top of this page, we see what happened. Since the dest2 directory did not exist, rsync created it. Since dest1 exited, dest1 was compared to source.

Since fileB changed, dest2/source/fileB was copied from source. This can be verified by observing the modification time.

Since fileA has not changed, dest2/source/fileA was hard linked from dest1/source/fileA. dest1/source/fileA and dest2/source/fileA actually point to the same file. This can be proven by updating a modification time:

    ~/demo1$ touch dest1/source/fileA

Now verify that both fileAs have the same modification time:

    ~/demo1$ ls -l dest1/source/fileA
    -rw-r--r-- 2 wolf wolf 0 2010-02-26 20:06 dest1/source/fileA
    ~/demo1$ ls -l dest2/source/fileA
    -rw-r--r-- 2 wolf wolf 0 2010-02-26 20:06 dest2/source/fileA

dest1/source/fileA and dest2/source/fileA share the same modification time because they are hard links to the same file.

# The "exclude-from" and "recursive" options

(source: https://sites.google.com/site/rsync2u/home/rsync-tutorial/the-exclude-from-option)

Rsync can recursively traverse the source directory and copy every file in source to destination. But there might be some junk (temp files, trash, and web-browser caches) that you rather not copy.

Excludes prevent rsync from backing up junk. The rsync --exclude-from option is similar to the one in GNU tar. Here is the option definition from the rsync man page:

    --exclude-from=FILE     read exclude patterns from FILE

## The"exclude-from" file

The exclude file is a list of directory and file names to be excluded from the rsync destination e.g.

    + /source1/.fileA
    - /source1/.*
    - /source1/junk/

The format of the exclude file is one pattern per line. The pattern can be a literal string, wildcard, or character range.

In UNIX, hidden files start with a dot (.fileA is a hidden file), and _ is a wildcard (._ means all hidden files).

A leading "+" means include the pattern. A leading "-" means exclude the pattern.

A path with a leading-slash must start with the source directory name (not the entire path).

Trailing slash is a directory (not a file). No trailing slash can be a directory or a file.

Lines in an exclude file are read verbatim. One frequent error is leaving some extra whitespace after a file name.

## The "exclude-from" and "recursive" options

This tutorial uses the --recursive (-r) option (which is implied by -a). The default behavior of recursion is to traverse every branch of each source directory from the top down. Here is an example usage:

    rsync -ain --exclude-from=exclude source1 dest

The following is a description of how rsync excludes or includes names, where “name” is the name of a file or folder.

For each name visited during the traversal of the source directory, rsync reads the list of patterns in the exclude file. rsync reads the list top down, and the first matching pattern is acted on:

- if it is a "-" pattern, then the name is excluded;
- if it is a "+" pattern, then the name is included;
- if no matching pattern is found, then the name is included;
- if a directory name is excluded, that branch is skipped;
- if a directory name is included, the branch is traversed.

The order of the patterns matters, as the following examples illustrate.

## Setup source1 directory for examples 2 & 3

The tutorial examples use a small directory. Create the demo2 directory in your home directory:

    user> mkdir demo2

Change to the rsync directory:

    user> cd demo2

Create the source1 directory:

    ~/demo2$ mkdir source1 source1/junk source1/junk/keep

Now populate the source1 directory with files:

    ~/demo2$ touch source1/.fileA source1/.fileB source1/file \
    source1/junk/file source1/junk/keep/fileX source1/junk/keep/fileY

Your source directory should look like this:

    ~/demo2$ ls source1 -AFR
    source1:
    file  .fileA  .fileB  junk/

    source1/junk:
    file  keep/

    source1/junk/keep:
    fileX  fileY

In the following examples, all commands are from the rsync directory.

## Example 2 "exclude-from" file

This example shows why the order of patterns matters. Save the following text as rsync/exclude:

    + /source1/.fileA
    - /source1/.*
    - /source1/junk/

Assign permissions to the exclude file:

    ~/demo2$ chmod 755 exclude

Make sure that destination is removed:

    ~/demo2$ rm -r dest

Run rsync with the --exclude-from option:

    ~/demo2$ rsync -ain --exclude-from=exclude source1 dest
    cd+++++++++ source1/
    >f+++++++++ source1/.fileA
    >f+++++++++ source1/file

rsync read the exclude list top down. As expected, .fileA was backed up, and all other hidden files (.fileB) were skipped.

Now move the “- /source1/.\*” line to the top of the exclude file and save:

    -  /source1/.*
    + /source1/.fileA
    - /source1/junk/

Run rsync again:

    ~/demo2$ rsync -ain --exclude-from=exclude source1 dest
    cd+++++++++ source1/
    >f+++++++++ source1/file

This time .fileA did not get backed up. Here is what happened: rsync traversed the source1 directory. When it visited .fileA, rsync read the exclude file top down, and acted on the first matching pattern. The first matching pattern was "- /source1/.\*", so .fileA was excluded. Order of exclude files matters because rsync reads the exclude file top down.

## Example 3 "exclude-from" file

In this example we exclude an entire junk directory, except for one file.

Replace the contents of the exclude file with following lines and save:

    + /source1/junk/keep/
    + /source1/junk/keep/fileX
    - /source1/junk/*
    - /source1/junk/keep/*

The exclude file's strategy is to enter all the directories leading to fileX, and skip all the unwanted junk files and directories not leading to fileX. To see how this works, trace the exclude file against the "rsync --recursive --exclude-from=FILE" algorithm near the top of this page.

Run rsync:

    ~/demo2$ rsync -ain --exclude-from=exclude source1 dest
    cd+++++++++ source1/
    >f+++++++++ source1/.fileA
    >f+++++++++ source1/.fileB
    >f+++++++++ source1/file
    cd+++++++++ source1/junk/
    cd+++++++++ source1/junk/keep/
    >f+++++++++ source1/junk/keep/fileX

As planned, fileX is the only file in the junk directory that was backed up.

A common error is to forget specific include/exclude rules for all the parent directories that need to be visited. For example, this exclude file will not backup fileX:

    + /source1/junk/keep/this/fileX
    - /source1/junk/

    ~/demo2$ sync -ain --exclude-from=exclude source1 dest
    cd+++++++++ source1/
    >f+++++++++ source1/.fileA
    >f+++++++++ source1/.fileB
    >f+++++++++ source1/file

Here is what happened: rsync traversed the source1 directory. When it visited junk/, rsync read the exclude file top down, and acted on the first matching pattern. The first matching pattern was "- /source1/junk/", so entire junk directory was excluded.

exclude-file suggestions

Consider the following items for your --exclude-from file:

    #configuration files (Ubuntu 9.04)
    + /user/.config/
    + /user/.gnome2/

    #desktop (Ubuntu 9.04)
    - /user/Desktop/
    - /user/examples.desktop

    #firefox bookmarks, where "xxxxxxxx" represents a random string of 8 characters.
    #http://support.mozilla.com/en-US/kb/Backing+up+your+information#Locate_your_profile_folder
    + /user/.mozilla/firefox/
    + /user/.mozilla/firefox/xxxxxxxx.default/
    + /user/.mozilla/firefox/xxxxxxxx.default/bookmarkbackups/
    - /user/.mozilla/*
    - /user/.mozilla/firefox/*
    - /user/.mozilla/firefox/xxxxxxxx.default/*

    #hidden files
    - .*

    #temporary files
    - *.tmp
    - *.temp

# Example rsync2u job file

(source: https://sites.google.com/site/rsync2u/home/example-job-file)

When rsync2u runs, it reads rsync parameters from a job file. The job file format is 1 description and 3 assignments (options, sources, and destination_path). Here is an example job file:

    # Print brief description of job (optional)
    echo "job: example backup 1"

    # Set rsync options.  Put exclude-from FILE in single quotes (').
    options="-rltxin --exclude-from='FILE'"

    # Set sources, one line per source,
    # each source in single quotes (') followed by one space and escape ( \).
    sources="\
    '/home/user/rsync/source1' \
    '/home/user/rsync/source2' \
    "

    # Set destination_path
    destination_path="/media/USBDRIVE/backups/"
