
# What is JSON? - Tutorial

> ## Excerpt
> JSON (JavaScript Object Notation) is an independent data exchange format designed for representing simple data structures.
JSON is limited to text and numeric values.
Binary values are not supported.

---
> JSON. This article explains JSON, the JavaScript Object Notification.

## [](https://www.vogella.com/tutorials/JSON/article.html#jsonoverview)[1\. Using JSON](https://www.vogella.com/tutorials/JSON/article.html#jsonoverview)

### [](https://www.vogella.com/tutorials/JSON/article.html#what-is-json)[1.1. What is Json?](https://www.vogella.com/tutorials/JSON/article.html#what-is-json)

JSON (JavaScript Object Notation) is an independent data exchange format designed for representing simple data structures. JSON is limited to text and numeric values. Binary values are not supported.

JSON was originally derived as a subset of the JavaScript Specification (ECME-Script) and it is therefore directly supported in JavaScript.

Data structures in JSON are based on key / value pairs. The key is a string, the value can be a numerical value, a boolean value (true or false) or an object.

While undefined by the standard you should avoid using duplicate key names. Most JSON frameworks will override duplicate keys with the last value.

### [](https://www.vogella.com/tutorials/JSON/article.html#json_example)[1.2. JSON example](https://www.vogella.com/tutorials/JSON/article.html#json_example)

An JSON object is a set of key / value pairs which starts with "{" and ends with "}".

```
{
  "firstName": "Lars",
  "lastName": "Vogel",
  "address": {
    "street": "Examplestr.",
    "number": "31"
  }
}
```

Lists are one or more values surrounded by \[\] and separated by ",".

```
[
  {
    "firstName": "Lars",
    "lastName": "Vogel",
    "address": {
      "street": "Examplestr.",
      "number": "31"
    }
  },
  {
    "firstName": "Jack",
    "lastName": "Hack",
    "address": {
      "street": "Examplestr.",
      "number": "31"
    }
  }
]
```

## [](https://www.vogella.com/tutorials/JSON/article.html#json_javascript)[2\. Java Script](https://www.vogella.com/tutorials/JSON/article.html#json_javascript)

The following is an example of an JSON object and its usage in JavaScript. You evaluate the JSON via the function eval and can then assign it to an object. This object can then be used in your JavaScript source code.

```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<body>
<script type="text/javascript">
<!--Evaluate the object and assign to variables -->
var user = {
  "firstName": "Lars",
  "lastName": "Vogel",
  "address": {
    "street": "Examplestr.",
    "number": "31"
  }
}
<!--Use the object-->
alert(user.firstName + ' lives in street ' + user.address.street);
document.writeln(user.firstName + ' ' +user.lastName);
</script>
</body>
</html>
```
