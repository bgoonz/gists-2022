# Description

This simple script will take a picture of a whiteboard and use parts of the ImageMagick library with sane defaults to clean it up tremendously.

The script is here: 

	#!/bin/bash
	convert $1 -morphology Convolve DoG:15,100,0 -negate -normalize -blur 0x1 -channel RBG -level 60%,91%,0.1 $2

# Results

Here are some of the input images:

![](http://i.imgur.com/27aDJ6b.jpg)

![](http://i.imgur.com/LaRWFT4.jpg)

And here are the results:

![](http://i.imgur.com/xMxM8P2.png)

![](http://i.imgur.com/E3XoM3e.png)

# Usage

Assuming it's saved as a file named `whiteboardClean.sh`, the command is `./whiteboardClean.sh {name of input file} {name of file to output to}`.

Here's an example:

	./whiteboardClean.sh example1.jpg output1.png

# How I Came Up With This

I was doing a lot work with whiteboards and I'd been taking pictures of them to document what had been written. I wanted a more clean version of the pictures though, something that captured the essence of what a whiteboard image showed. 

Eventually I found [this excellent guide to cleaning up whiteboard photos using GIMP.](http://matthew.mceachen.us/blog/how-to-clean-up-photos-of-whiteboards-with-gimp-403.html) However, I found I wanted more automation. So, I spent a few hours yesterday figuring out how to do the same thing using ImageMagick from the command line and made this script.
