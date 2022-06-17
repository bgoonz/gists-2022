Bash Sort Files Alphabetically
------------------------------

There are tons of ways to sort files in Linux, but let's get down to the most common way, sorting files alphabetically.

Launch your terminal and run the `" target="_blank" rel="noreferrer noopener">ls -l` command below to get a list of files in a directory in ascending order. The `-l` flag tells the `ls` command to print the returned output in a long list format.

```
ls -l
```

![Bash Sort to Sort Files Alphabetically ](https://adamtheautomator.com/wp-content/uploads/2021/09/image-234.png)

Bash Sort to Sort Files Alphabetically

> *By default, the `ls` command lists files in ascending order. To reverse the sorting order, pass the `-r` flag to the `ls -l` command, like this: `ls -lr`. Passing the `-r` flag to the `ls -l` command applies to other examples in this tutorial.*

Using Bash Sort to Order Files by Size
--------------------------------------

Instead of sorting files alphabetically, you may want to sort files by file size. Sorting files by size is handy when prioritizing seeing either the smallest or largest files in a list.

To sort files by size, pass the `-S` flag to tell the `ls` command to sort the list of files by file size.

Run the command below to list files (`ls`) sorted by file size in a long list format (`-lS`).

```
ls -lS
```

Below, you can see the command sorted the files by size in descending order (biggest to smallest in size).

> *To reverse the sorting order (smallest to biggest), add the `-r` flag, like this: `ls -lSr`*

![Sorting Files by Size](https://adamtheautomator.com/wp-content/uploads/2021/09/image-235.png)

Sorting Files by Size

Sort Files by Modification Time via Bash Sort
---------------------------------------------

Moving forward from sorting files by size, you might encounter a use case where you need to sort files by the time they were modified. For example, you forgot the name of the file you created, and you only remember the time you last modified the file.

Run the command below where the `-t` parameter tells the `ls` command to sort the files by modification time.

```
ls -lt
```

![Sorting Files in a Directory by Modification Time](https://adamtheautomator.com/wp-content/uploads/2021/09/image-236.png)

Sorting Files in a Directory by Modification Time

Sorting Files by File Extension
-------------------------------

When you're looking for a file with a particular file type, sorting files by file extension is the ideal solution.

Execute the command below to list files (`ls`) in the working directory and sort based on their extensions (`-lX`).

```
ls -lX
```

Notice below that the command sorted the files with the same extension in ascending order based on their names.

![Sorting Files by File Extension](https://adamtheautomator.com/wp-content/uploads/2021/09/image-237.png)

Sorting Files by File Extension

Sorting Contents in a Text File
-------------------------------

By now, you have learned various methods to sort the files in a directory. Shifting your focus from the `ls` command, try running the `sort` command. The `sort` command sorts file contents depending on the flag you'll be adding. But first, you need a file with contents you'll modify.

Run the command below to create a text file named *~/data/fruits.txt* that contains names of fruits. The `-e` flag enables interpretation of backslash to write each word on a new line (`\n`).

```
echo -e "apple \nmango \nwatermelon \ncherry \norange \nbanana" > fruits.txt
```

Now run the command below to `sort` each word in `fruits.txt`.

```
sort fruits.txt
```

Below, you can see the file's contents are sorted in ascending order.

![Sorting File's Content Alphabetically in Ascending Order](https://adamtheautomator.com/wp-content/uploads/2021/09/image-238.png)

Sorting File's Content Alphabetically in Ascending Order

> *Without any flags, the `sort` command sorts the file contents in ascending order by default. To reverse the sorting order, add the `-r` flag to the sort command, like this: `sort -r fruits.txt`. Sorting in reverse order by adding the `-r` flag applies to other examples in this tutorial.*

Sorting a List of Numbers in a Text File
----------------------------------------

The command to sort numbers is similar to sorting texts in a file, but you'll be adding the `-n` flag instead. Let's create a file first to demonstrate how to sort numerically a file's content.

Run the command below to create a file named *~/data/scores.txt* that contains random numbers, each in a new line.

```
echo -e "45 \n69 \n52 \n21 \n3 \n5 \n78" > scores.txt
```

Now run the command below to `sort` the numbers (`-n`) in the *~/data/scores.txt* file.

```
sort -n scores.txt
```

You can see below, the numbers listed in lines starting from smallest to the biggest number.

![Sorting Numbers in a File](https://adamtheautomator.com/wp-content/uploads/2021/09/image-239.png)

Sorting Numbers in a File

Sorting a List of Version Numbers in a Text File
------------------------------------------------

Perhaps you have a list of version numbers in a text file you want to sort. If so, adding the `--version-sort` option will do the trick.

To demonstrate how the `--version-sort` option works, create a text file first.

Run the command below to create a text file named *`~/data/versions.txt`* with random version numbers listed, each on a new line (`\n`).

```
echo -e "1.0.0.1 \n 6.2.1.0 \n4.0.0.2" > versions.txt
```

Now run the command below to `sort` the version numbers (`--version-sort`) in the `versions.txt` file. The `--field-separator` option tells the `sort` command that the numbers in each version are separated by a dot (`.`). You can change the field separator to any character that separates the numbers on the versions listed in your text file.

```
sort --version-sort --field-separator=. versions.txt
```

![Sorting Version Numbers from a Text File](https://adamtheautomator.com/wp-content/uploads/2021/09/image-240.png)

Sorting Version Numbers from a Text File

Bash Sort to Find and Sort Files via File Extension
---------------------------------------------------

You've been running single commands (either `ls` or `sort`) in the previous examples. But in programming, you may often need to use two or more commands together. How? By [pipelining](https://www.gnu.org/software/bash/manual/html_node/Pipelines.html) one command to another.

Run the command below to `find` all markdown files (`-iname "*.md"`) in the working directory (`.`), and sort them in alphabetically descending order (`sort -r`). Try finding and sorting other files by changing `"*.md"` to another file extension.

Related:[How to Find Files with Dozens of Criteria with the Bash Find Command](https://adamtheautomator.com/how-to-find-files-with-dozens-of-criteria-with-the-bash-find-command/)

```
find . -iname "*.md" | sort -r
```

![Finding and Listing Files in Alphabetically Descending Order](https://adamtheautomator.com/wp-content/uploads/2021/09/image-241.png)

Finding and Listing Files in Alphabetically Descending Order

> *If you prefer to save the sorted output to a text file instead of standard output on the console, add the `--output` option, like this: `find . -iname "*.md" | sort -r --output=sorted.txt`. The `--output` option tells the `sort` command to create an output file for the sorted list of files.*