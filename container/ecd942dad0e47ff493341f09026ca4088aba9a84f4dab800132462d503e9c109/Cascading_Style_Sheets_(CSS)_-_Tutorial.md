
# Cascading Style Sheets (CSS) - Tutorial

> ## Excerpt
> 'Cascading Style Sheets' (CSS) allow you to define styles, layouts and spacing separate from the content which should be styled.
The CSS information is typically contained in an external file.
Other code, e.g., an HTML page, can reference to the CSS file for its layout information.
For example you define in an external file the fonts and colors used for certain elements.

---
> This article explains how to use CSS for styling HTML pages.

## [](https://www.vogella.com/tutorials/CSS/article.html#cascading-style-sheets-css)[1\. Cascading Style Sheets (CSS)](https://www.vogella.com/tutorials/CSS/article.html#cascading-style-sheets-css)

### [](https://www.vogella.com/tutorials/CSS/article.html#cssintro_introd)[1.1. What is CSS?](https://www.vogella.com/tutorials/CSS/article.html#cssintro_introd)

'Cascading Style Sheets' (CSS) allow you to define styles, layouts and spacing separate from the content which should be styled. The CSS information is typically contained in an external file. Other code, e.g., an HTML page, can reference to the CSS file for its layout information. For example you define in an external file the fonts and colors used for certain elements.

CSS is defined as a standard. Currently the versions _CSS 2.1_ and _CSS 3_ are most widely used.

### [](https://www.vogella.com/tutorials/CSS/article.html#cssintro_selectors)[1.2. CSS selectors and style rules](https://www.vogella.com/tutorials/CSS/article.html#cssintro_selectors)

The CSS standard defines _selectors_ and _style rules_. The syntax is defined as follows:

selector { property:value; }

A selector can be one of a predefined identifier(, e.g., H1), a class name (e.g. .myclass) or an identifier (e.g. #myuniqueid).

In CSS an identifier is supposed to be unique across all of the elements in a page (or window in our case) while a class can be assigned to several elements.

For example the following CSS file defines the size and color of the 'h1' tag.

h1 { color:red; font-size:48px; }

### [](https://www.vogella.com/tutorials/CSS/article.html#cssintro_pseudoclasses)[1.3. CSS pseudo classes](https://www.vogella.com/tutorials/CSS/article.html#cssintro_pseudoclasses)

_CSS pseudo classes_ are used to qualify attributes of selectors. For example you can select an visited link in HTML and style is differently.

## [](https://www.vogella.com/tutorials/CSS/article.html#css_firstexercise)[2\. Exercise: Style a HTML page with CSS](https://www.vogella.com/tutorials/CSS/article.html#css_firstexercise)

In the following you create a local html page and style it with CSS. Create a new directory and create the following file called 'styles.css'.

```
/* this is a comment */
/* we style only the h1 element*/

h1 {
    border-style:solid none solid solid;
    color:red;
}
```

In the same directory define the following HTML file. This file defines that it uses the 'styles.css' style sheet file from the same same directory.

```
<!DOCTYPE html>
<html>
 <head>
  <title>An HTML5 Document</title>
  <link href="styles.css" rel="stylesheet" type="text/css">
 </head>
 <body>
  <h1>Your first HTML5 page</h1>
  <p>This is a <a href="http://www.vogella.com">link</a> to another webpage</p>
  <!-- this is a comment -->
 </body>
</html>
```

## [](https://www.vogella.com/tutorials/CSS/article.html#cssusage_div)[3\. HTML container via id and class](https://www.vogella.com/tutorials/CSS/article.html#cssusage_div)

HTML allows to define sections via 'div' containers. These 'div' containers can be used to style parts of the HTML document differently. For this purpose you can identify the div containers via `id` or `class` attributes.

While id and class generate the same output, an id must be unique in the HTML document while the class attribute can be defined for several HTML elements in a page. CSS allows to style these elements via special selectors.

The following rule applies:

Table 1. Styling div containers  

Definition

CSS selection rule

<div id="myid">Content</div>

#myid {css rules….}

<div class="myclass">Content</div>

.myclass {css rules…}

The following example demonstrate both usages. Create the file _stylesdiv.css_

```
/* this is a comment */
/* we style only the h1 element*/

#number1 {
    color:red;
}

#number2 {
    color:blue;
}

.class1 {
    font-weight: bold;
}

.class2{
    font-weight: normal;
    color: green;
}
```

Create the following HTML file to use the style sheet.

```
<!DOCTYPE html>
<html>
 <head>
  <title>An HTML5 Document</title>
  <link href="stylesdiv.css" rel="stylesheet" type="text/css">
 </head>
 <body>
  <div id="number1"> Some Text </div>
  <div id="number2"> Another Text</div>
  <div class="class1"> Styling with classes </div>
  <div class="class2"> Another class </div>
 </body>
</html>
```

You can also select by position in the HTML document. For example 'td a' only selects links which are within a table row.

You can also use other attributes for example the following will define certain styling for links which have been visited or over which the mouse hovers. They will identify if you have a link already visited or if the mouse hovers over a link and will change the display of the link accordingly.

```
a:visited {color:grey}
a:hover {text-decoraton:underline}
```

## [](https://www.vogella.com/tutorials/CSS/article.html#css_includes)[4\. CSS includes](https://www.vogella.com/tutorials/CSS/article.html#css_includes)

A CSS file can import other CSS files via the '@import' statement. It must be the first rule in the style sheet using the '@import' statement.

```
@import "mystyle.css";
@import url("mystyle.css");
```

If you want to import a css file from a html file it is better to use the following statement:

```
<link rel="stylesheet" href="include.css">
```

and not

```
@import "mystyle.css";
@import url("mystyle.css");
```

## [](https://www.vogella.com/tutorials/CSS/article.html#boxmodel)[5\. Margins and padding](https://www.vogella.com/tutorials/CSS/article.html#boxmodel)

### [](https://www.vogella.com/tutorials/CSS/article.html#boxmodel_margins)[5.1. Margins](https://www.vogella.com/tutorials/CSS/article.html#boxmodel_margins)

A block element can be thought of as a box which contains something. This box has a border to other elements and you can influence the distance to other elements via the 'margin' and 'padding' settings.

Margin defines the outer distance of other elements. You can set values for top, right, bottom and left.

![Displaying the CSS margin settings](https://www.vogella.com/tutorials/CSS/img/css-margins.png)

You can define the margins for a box individually or combine them into one statement.

```
body {
    margin-top: 10px;
    margin-right: 120px;
    margin-bottom: 20px;
    margin-left: 8px;
}
```

```
body {
    margin: 10px 120px 20px 8px;
}
```

### [](https://www.vogella.com/tutorials/CSS/article.html#boxmodel_padding)[5.2. Padding](https://www.vogella.com/tutorials/CSS/article.html#boxmodel_padding)

Padding defines the inner distance of elements to the end of the box.

```
<!DOCTYPE html>
<html>
 <head>
  <title>Margin, padding test</title>
  <link href="styles.css" rel="stylesheet" type="text/css">
 </head>

 <body>
  <p id="test">Your first HTML5 page</p>
 </body>
</html>
```

```
#test {
    width: 200px;
    height: 60px;
    padding: 10px;
    border: 5px dotted blue;
    margin: 5px, 10px, 20px, 30px;
}
```

The total size of the HTML box is defined by the initial size of the box, plus the margins and the padding and a border, if defined.

## [](https://www.vogella.com/tutorials/CSS/article.html#cssposition)[6\. Positioning HTML elements with CSS](https://www.vogella.com/tutorials/CSS/article.html#cssposition)

CSS allows to setup element with fixed, relate and absolute positions. Relative is the standard and will change the distribution of the different text containers based on the available space.

Frequently you want to make sure that you boxes stay on a specific place. You can use postion:absolute for this. A block element with this style will be removed from the normal flow of the HTML page and will have a fixed space. For example:

```
<!DOCTYPE html>
<html>
<head>
<title>An HTML5 Document</title>
<style type="text/css">
#center {
    position: absolute;
    width: 200px;
    left: 400px;
    background-color: green;
}
#left {
    position: absolute;
    width: 200px;
    background-color: blue;
    top:200px;
}
#right {
    position: absolute;
    background-color: red;
    left: 200px;
    width: 200px;
}
</style>
</head>
<body>
<h1>HTML5 with CSS positioning</h1>
<p id="center">Center fixed box</p>
<p id="left">Left fixed box</p>
<p id="right">Right fixed box</p>

</body>
</html>
```

If you want to have a element always on a certain position you can use the fixed position and will not move even if you scroll down the HTML page.

```
<!DOCTYPE html>
<html>
<head>
<title>An HTML5 Document</title>
<style type="text/css">
p.position_fixed {
    position: fixed;
    top: 200px;
    right: 5px;
}
</style>
</head>
<body>
<h1>HTML5 with CSS positioning</h1>
<p class="position_fixed"><a href="http://www.twitter.com/vogella">Follow
vogella on twitter</a></p>
<p>lots of information here</p>
<p>lots of information here</p>
<p>lots of information here</p>
<p>lots of information here</p>
<p>lots of information here</p>
<p>lots of information here</p>
<p>lots of information here</p>
<p>lots of information here</p>
<p>lots of information here</p>
<p>lots of information here</p>
<p>lots of information here</p>
<p>lots of information here</p>
<p>lots of information here</p>
<p>lots of information here</p>
<p>lots of information here</p>
<p>lots of information here</p>

</body>
</html>
```

## [](https://www.vogella.com/tutorials/CSS/article.html#csslayout)[7\. CSS based layout](https://www.vogella.com/tutorials/CSS/article.html#csslayout)

You can use HTML div container and CSS to layout your webpage.

Your example the following webpage uses div container.

```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html>
<head>
<title>This is a tile</title>
<link href="styleslayout.css" rel="stylesheet" type="text/css">
</head>
<body>
<div id="header">Header Section</div>
<div id="leftcol">Left Section</div>
<div id="rightcol">Right Section</div>
<div id="content">Content Section</div>
<div id="footer">Footer Section</div>
</body>
</html>
```

```
<style type ="text/css">

body {
    margin: 0px;
    padding: 0px;
}

#header {
    background: #aba;
    width: 100%;
}

#leftcol {
    background: #aaa;
    float: left;
    width: 20%;
    height: 500px;
}

#rightcol {
    background: #aaa;
    float: right;
    width: 20%;
    height: 500px;
}

#content {
    background: #eee;
    float: left;
    width: 59%;
    height: 500px;
}

#footer {
    background: #aba;
    clear: both;
    width: 100%;
}
</style>
```

This result in the following layout.

![layout10](https://www.vogella.com/tutorials/CSS/img/layout10.gif)

Via CSS you can use media queries to define CSS settings based on certain criteria. A common use case is to have different CSS based styling for devices with only limited pixels and other designs for larger screens.

For example the following CSS defines a fixed position for a search box. If the screen has a maximum width of 750 or less different styling is used.

```
#searchfixed {
    position: fixed;
    top: 8px;
    right: 200px;
    z-index: 4;
    width:200px;
}

#searchwrapper{
    width:100%;
    height:40px;
    position:relative;
}

#search_field {
    margin-left:40px;
    height:20px;
    width:150px;
    border:none;
    background-color:#fcfcfc;
    border-radius:5px;
    -moz-border-radius:5px;
    -webkit-border-radius:5px;
    padding-left: 5px;
}

#search_button {
    position:absolute;
    top:3px;
    right:15px;
}

@media screen and (max-width: 750px) {

    #topnav {
        height: 80px;
    }

    #topnav ul {
        width: 100%;
    }

    #logo {
        top: 30px !important;
    }

    #searchfixed {
        top: 45px !important;
        left: 0;
        right: auto !important;
    }

    #search_button {
        right: 45px !important;
    }

    #search_field {
        margin-left: 0.55em;
    }

    #container, #trainingcontainer {
        margin: 90px auto !important;
    }

}
```

## [](https://www.vogella.com/tutorials/CSS/article.html#size)[9\. Defining size](https://www.vogella.com/tutorials/CSS/article.html#size)

The most consist way to define size is the unit 'em' which is a relative unit to the font-size. 1em is as large as the font-size. You can use 1em for defining the space between words (word-spacing), or letters (letter-spacing) or to define the line height (line-height) of an HTML element. text-indent allows you to define the intent of the first line of a paragraph. text-indent: -1em put the first line a bit before the rest of the text.

## [](https://www.vogella.com/tutorials/CSS/article.html#text)[10\. Alignment and Text transformations](https://www.vogella.com/tutorials/CSS/article.html#text)

Via text-align you can define how your content (not only text) should be aligned. text-transform allows to transform the text to upper, lower case or to capitalize the first letter.

```
text-transform:uppercase;
text-transform:lowercase;
text-transform:capitalize;

text-align:left;
text-align:right;
text-align:center;
text-align:justify;
```

## [](https://www.vogella.com/tutorials/CSS/article.html#css_version)[11\. Versioning of CSS](https://www.vogella.com/tutorials/CSS/article.html#css_version)

The versioning of css files is not mandatory, but it could be very useful to force the browser to load a changed css file instead of using the CSS caching.

To achieve this just add `?version=1.1` at the end of the css file name when referencing to the file.

So instead of calling a css file like this:

https://www.vogella.com/css/companyfooter.css

you should replace it with

https://www.vogella.com/css/companyfooter.css?version=1.1

The wording after the '?' has no relevance and can be chosen freely. With this solution your css changes are immediately visible and you do not need to refresh your browser with CTRL F5 until you see them. Additionally the name of the css file keeps the same which saves you a global search and replace.

## [](https://www.vogella.com/tutorials/CSS/article.html#eclipse_editor)[12\. CSS editor usage in Eclipse](https://www.vogella.com/tutorials/CSS/article.html#eclipse_editor)

Eclipse has an integrated CSS editor which by default supports CSS2. In order to see the new CSS3 properties you must activate this feature.

You can activate it per file, Dynamic Web Project or Static Web Project, but not for other types of Projects. It is also not available as a workspace-wide preference.

First just make sure you have installed the Web Package of Eclipse. Otherwise you wont see the Web Content Settings in the Properties page. In Eclipse go to Help → Install New Software … → select your Eclipse release software site → select the Web Package → Press Next >

![Install Web Package for Eclipse](https://www.vogella.com/tutorials/CSS/img/install_web.png)

After the installation perform the following steps:

-   Select a CSS file, Dynamic Web Project or Static Web Project and right-click on it
    
-   Click on Properties
    
-   Select the Web Content Settings
    
-   Set the CSS Profile value to "CSS3: Cascading Style Sheets, level 3"
    
-   Click the OK button
    

![CSS3 Profile](https://www.vogella.com/tutorials/CSS/img/css3_profile.png)

This guide applies for Eclipse releases up to Mars. With Neon M6 the default css profile will be set to CSS3.
