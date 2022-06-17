
# Introduction to HTML - Tutorial

> ## Excerpt
> HTML (Hypertext Markup Language) is a standard to describe the
content of webpages. HTML pages are
text files which typically end
with the ".html" extension.
HTML is a markup language.

---
> HTML5. This article gives an overview of HTML5 (Hypertext Markup Language Version 5).

## [](https://www.vogella.com/tutorials/HTML/article.html#html_overview)[1\. HTML5](https://www.vogella.com/tutorials/HTML/article.html#html_overview)

### [](https://www.vogella.com/tutorials/HTML/article.html#overview_what)[1.1. What is HTML?](https://www.vogella.com/tutorials/HTML/article.html#overview_what)

HTML (Hypertext Markup Language) is a standard to describe the content of webpages. HTML pages are text files which typically end with the ".html" extension. HTML is a _markup language_.

The current version of HTML is HTML5. HTML5 supports XML syntax. This tutorial uses the HTML5 XML syntax.

In HTML you describe the content in pure text, by defining text as headings, paragraphs, lists, etc. A tag is a text surrounded by angle brackets. Tags usually have a beginning and end and contain other text between the start and end tag. The normal content of the webpage is placed between the <body> </body> tags, the <head> </head> tag contains general information about the webpage.

### [](https://www.vogella.com/tutorials/HTML/article.html#overview_css)[1.2. CSS](https://www.vogella.com/tutorials/HTML/article.html#overview_css)

HTML by ifself does not define a lot of display options. You use [CSS](https://www.vogella.com/tutorials/CSS/article.html) to define how HTML element should be displayed.

### [](https://www.vogella.com/tutorials/HTML/article.html#overview_structure)[1.3. A structured example](https://www.vogella.com/tutorials/HTML/article.html#overview_structure)

HTML5 introduced several new ways of classifying content of the webpage, e.g., <nav> </nav> for the navigation part of the page, <article> to represent an independent article,<aside> </aside> to represent a sidebar with related information.<footer> </footer> for a footer in the HTML page and <address> </address> for the contact information of the author.

The following displays an example which uses these new elements. Most browser will not change the display based on them but you can use [CSS](https://www.vogella.com/tutorials/CSS/article.html) to select these elements and style them accordingly.

```
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8">
  <title>An HTML5 Document
 </head>
 <body>
  <h1>Your first HTML5 page</h1>
  <header>
  <nav>
    <a href="http://www.vogella.com">Home</a>
    <a href="https://www.vogella.com/eclipse.html">Eclipse Tutorials</a>
  </nav>
  </header>
   <article>
    <section>
         <p>This is a <a href="http://www.vogella.com">link</a> to another webpage</p>
    </section>
  </article>
  <aside> Stuff which is on the side.</aside>
  <details> Details can be <mark> hidden </mark>.  </details>
 <footer> Footer.</footer>

 </body>
</html>
```

## [](https://www.vogella.com/tutorials/HTML/article.html#htmlelements)[2\. HTML Standard Elements](https://www.vogella.com/tutorials/HTML/article.html#htmlelements)

The following defines standard HTML elements. If you want to try out these elements, take the example of your first webpage and place the new tags between the <body> </body> tag. Save your file and re-load your browser to see the result.

### [](https://www.vogella.com/tutorials/HTML/article.html#htmlelements_blocks)[2.1. Blocks and structural elements](https://www.vogella.com/tutorials/HTML/article.html#htmlelements_blocks)

<p> </p> describes a paragraph and <h1> </h1> a headline. You have six headlines available from <h1> </h1> to <h6> </h6>.

<br/> describes a line break. Please note that this tag is directly closed via the slash at the end. <br> </br> is incorrect. <hr/> inserts a line into the text.

### [](https://www.vogella.com/tutorials/HTML/article.html#htmlelements_tags)[2.2. HTML Links](https://www.vogella.com/tutorials/HTML/article.html#htmlelements_tags)

The following describes a link in HTML. The attribute "href" defines the target of the link. A link can be absolute or relativ to the existing webpage.

```
<!-- this is an absolute link -->
<a href="http://www.vogella.com"> Java and Eclipse Tutorials </a>

<!-- this is a relativ link to a page in the same directory-->
<a href="anotherwebpage.html"> Java and Eclipse Tutorials </a>

<!-- this is the same as above-->
<a href="/anotherwebpage.html"> Java and Eclipse Tutorials </a>

<!-- this is a relativ link to a page on a higher directory-->
<a href="../page2.html"> Java and Eclipse Tutorials </a>

<!-- This will define a invisible anchor in your document which you can jump to-->
<a name="top"> This is the place to jump to  </a>

<!-- if you click this link you will jump to your anchor-->
<a href="#top"> To the Top </a>
```

The following listing contains a link which displays a image.

```
<a href="www.vogella.com">
    <img src="https://www.vogella.com/img/common/LarsVogelAbout.jpg"  alt="Lars Vogel Picture"/>
</a>
```

The following example shows how to create a link for an email.

```
<a href="mailto:foo@bar.com?Subject=Support%20request">
    Contact us via email
</a>
```

### [](https://www.vogella.com/tutorials/HTML/article.html#htmlelements_list)[2.3. Lists](https://www.vogella.com/tutorials/HTML/article.html#htmlelements_list)

HTML supports ordered and unordered lists.

```
This is an ordered list.

<ol>
<li>Java</li>
<li>C++</li>
<li>.NET</li>
</ol>

This is unordered list

<ul>
<li>Java</li>
<li>C++</li>
<li>.NET</li>
</ul>
```

### [](https://www.vogella.com/tutorials/HTML/article.html#htmlelements_table)[2.4. Tables](https://www.vogella.com/tutorials/HTML/article.html#htmlelements_table)

```
<table>
<tr>
<th>Header 1</th>
<th>Header 2</th>
<th>Header 3</th>
</tr>
<tr>
<th>Java</th>
<td>C++</td>
<td>.NET</td>
</tr>
<tr>
<th>Hundefutter</th>
<td>Dogfog</td>
<td>Something</td>
</tr>
</table>
```

### [](https://www.vogella.com/tutorials/HTML/article.html#htmlelements_image)[2.5. Image](https://www.vogella.com/tutorials/HTML/article.html#htmlelements_image)

Images should have the "alt" tag defined and can optionally definde a width and a height.

```
<p>
<img src="https://www.vogella.com/img/common/LarsVogelAbout.jpg"  alt="Lars Vogel Picture"/>
</p>
```

### [](https://www.vogella.com/tutorials/HTML/article.html#htmlelements_specialsigns)[2.6. Special signs](https://www.vogella.com/tutorials/HTML/article.html#htmlelements_specialsigns)

Use the following special signs to display them in your webpage.

Table 1. Special signs  

Sign

HTML representation

Remark

Whitespace (" ")

<

<

\>

\>

&

&

©

©

## [](https://www.vogella.com/tutorials/HTML/article.html#htmlincludes)[3\. HTML includes](https://www.vogella.com/tutorials/HTML/article.html#htmlincludes)

It is possible to include HTML elements into an HTML document.

```
<head>
  <link rel="import" href="/path/to/imports/stufftoinclude.html">
</head>
```

## [](https://www.vogella.com/tutorials/HTML/article.html#forms)[4\. Forms](https://www.vogella.com/tutorials/HTML/article.html#forms)

Forms are used to capture input from the user. The input of a form is usually receive by a server side program which will receive the input from the form and can then process the data. In the <input> tag you define via the "type" attribute defines the expected type. HTML5 defines lots of possible types, unfortunately currently most of them are not supported by most browsers. If a browser does not recognize a certain type it will assume text. So it is save to use the types. Here is a form with some input fields.

```
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8">
  <title>A form
 </head>
 <body>
 <form action="http://vogellatodo.appspot.com/save.php" method="post">

 <!-- Simple text field -->
 <label for="text">Name </label>
 <input type="text" name="input"/>
 <br/>

  <!-- Textarea -->
 <label for="textarea">Description </label>
 <textarea  name="area" cols="50" rows="5">Type your comment here</textarea>
 <br/>

 <!-- Two checkboxes -->
 <label for="checkbox1">Linux </label>
 <input type="checkbox" name="checkbox1" value= "1"/>
 <br/>

 <label for="checkbox2">Windows </label>
 <input type="checkbox" name="checkbox2" value= "2" checked="checked"/>
 <br/>

 <!-- Radiobutton -->
 <label for="r1"> Linux </label>
 <input type="radio" name="radio" value= "r1"/>
 <br/>

 <label for="r2">Windows </label>
 <input type="radio" name="radio" value= "r2" checked="checked"/>
 <br/>

  <!-- Select Options -->
 <select name="Browser">
 <option selected="selected"> Firefox </option>
 <option> Internet Explorer</option>
 <option>Chrome </option>
 </select>
  <br/>


 <input type="submit" name="submit" value="Send Request"/>
 </form>
 </body>
</html>
```

## [](https://www.vogella.com/tutorials/HTML/article.html#canvas)[5\. Canvas](https://www.vogella.com/tutorials/HTML/article.html#canvas)

HTML5 introduces the <canvas> </canvas> element which is a black element on which you can draw in real time via JavaScript. Canvas has the advantages that as it is part of the HTML specification all browser will support it directly without the need to install a plugin. Currently canvas only supports 2D rendering but 3D rendering is planned for the future.

Create for example the following page which draws on the canvas a rectangle.

```
<!DOCTYPE html>
<html>
  <head>
    <title>Canvas Example
  </head>

<script>
window.onload = function () {
   var canvas = document.getElementById('mycanvas');
    if (canvas.getContext){
      var ctx = canvas.getContext('2d');
      ctx.fillStyle = "rgb(100,200,200)";
      ctx.fillRect (10, 10, 80, 80);
   }
}
</script>
<style>
</style>
</head>

<body>
<canvas id="mycanvas" width="600" height="600">
   Your browser doesn't support canvas
</canvas>
</body>
</html>
</html>
```

## [](https://www.vogella.com/tutorials/HTML/article.html#geolocation)[7\. Geolocation](https://www.vogella.com/tutorials/HTML/article.html#geolocation)

HTML5 supports a geolocation API. For example you can read your currently geolocation and display this postion on a google map via the following code HTML page.

```
<html>
<head>
<script type="text/javascript">
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            alert("Latitude: " + position.coords.latitude);
            alert("Longitude: ' + position.coords.longitude);
        });
      navigator.geolocation.getCurrentPosition(function(position) {
        document.location.href =
          "http://maps.google.com/maps?q="
          + position.coords.latitude + ",+"
          + position.coords.longitude
          + "+(My%20position)&iwloc=A&hl=en";
      });
    }
  </script>
</head>
<body>
</body>
</html>
```

## [](https://www.vogella.com/tutorials/HTML/article.html#localstorage)[8\. Local storage](https://www.vogella.com/tutorials/HTML/article.html#localstorage)

HTML5 supports local storage of data to work offline. Currently you find:

-   Web storage/ Local storage: key / Value storage, supported by most recent browsers, no transactions
    
-   WEb SQL Database: Full database in the browser
    
-   IndexedDB: Similar to Web storage but you can index on certain fields
    
-   File API: Allows to store files on the local file system
    

## [](https://www.vogella.com/tutorials/HTML/article.html#xhtml)[9\. XHTML](https://www.vogella.com/tutorials/HTML/article.html#xhtml)

XHTML is similar to HTML but much stricter. XHTML defines the following strict requirements:

-   Write all code in lowercase letters
    
-   Encase all attribute values in double quotes
    
-   Each tag must have an end specified. This is normally done with an ending tag, but a special case allows for non-content tags.
    
-   Each HTML files must define its doctype
    
-   All attribute values must be in double quotes
    
-   Each tag must have an end specified.
    

In HTML5 the MIME-type determines if the HTLM is strict XML or standard HTML. A document served as "text/html" must be a HTML document, and a document served with an XML MIME type such as "application/xhtml+xml" must conform to the requirements of HML.
