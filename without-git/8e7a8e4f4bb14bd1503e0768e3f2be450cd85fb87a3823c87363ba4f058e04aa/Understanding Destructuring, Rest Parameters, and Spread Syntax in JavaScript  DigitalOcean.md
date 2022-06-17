_The author selected the [COVID-19 Relief Fund](https://www.brightfunds.org/funds/write-for-donations-covid-19-relief-fund) to receive a donation as part of the [Write for DOnations](https://do.co/w4do-cta) program._

### Introduction

Many new features for working with [arrays](https://www.digitalocean.com/community/tutorials/understanding-arrays-in-javascript) and [objects](https://www.digitalocean.com/community/tutorials/understanding-objects-in-javascript) have been made available to the [JavaScript](https://www.digitalocean.com/community/tutorial_series/how-to-code-in-javascript) language since the [2015 Edition](http://www.ecma-international.org/ecma-262/6.0/) of the ECMAScript specification. A few of the notable ones that you will learn in this article are _destructuring_, _rest parameters_, and _spread_ syntax. These features provide more direct ways of accessing the members of an array or an object, and can make working with these data structures quicker and more succinct.

Many other languages do not have corresponding syntax for destructuring, rest parameters, and spread, so these features may have a learning curve both for new JavaScript developers and those coming from another language. In this article, you will learn how to destructure objects and arrays, how to use the spread operator to unpack objects and arrays, and how to use rest parameters in function calls.

## Destructuring

_Destructuring assignment_ is a syntax that allows you to assign object properties or array items as variables. This can greatly reduce the lines of code necessary to manipulate data in these structures. There are two types of destructuring: Object destructuring and Array destructuring.

### Object Destructuring

Object destructuring allows you to create new [variables](https://www.digitalocean.com/community/tutorials/understanding-variables-scope-hoisting-in-javascript#understanding-variables) using an object property as the value.

Consider this example, an object that represents a note with an `id`, `title`, and `date`:

Traditionally, if you wanted to create a new variable for each property, you would have to assign each variable individually, with a lot of repetition:

With object destructuring, this can all be done in one line. By surrounding each variable in curly brackets `{}`, JavaScript will create new variables from each property with the same name:

Now, [`console.log()`](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-developer-console#working-in-the-console) the new variables:

You will get the original property values as output:

```
Output1
My first note
01/01/1970
```

**Note:** Destructuring an object does not modify the original object. You could still call the original `note` with all its entries intact.  

The default assignment for object destructuring creates new variables with the same name as the object property. If you do not want the new variable to have the same name as the property name, you also have the option of renaming the new variable by using a colon (`:`) to decide a new name, as seen with `noteId` in the following:

Log the new variable `noteId` to the console:

You will receive the following output:

```
Output1
```

You can also destructure nested object values. For example, update the `note` object to have a nested `author` object:

Now you can destructure `note`, then destructure once again to create variables from the `author` properties:

Next, log the new variables `firstName` and `lastName` using [template literals](https://www.digitalocean.com/community/tutorials/how-to-work-with-strings-in-javascript#string-concatenation):

This will give the following output:

```
OutputSherlock Holmes
```

Note that in this example, though you have access to the contents of the `author` object, the `author` object itself is not accessible. In order to access an object as well as its nested values, you would have to declare them separately:

This code will output the `author` object:

```
Output{firstName: "Sherlock", lastName: "Holmes"}
```

Destructuring an object is not only useful for reducing the amount of code that you have to write; it also allows you to target your access to the properties you care about.

Finally, destructuring can be used to access the object properties of primitive values. For example, [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) is a global object for strings, and has a `length` property:

This will find the inherent length property of a string and set it equal to the `length` variable. Log `length` to see if this worked:

You will get the following output:

```
Output8
```

The string `A string` was implicitly converted into an object here to retrieve the `length` property.

### Array Destructuring

Array destructuring allows you to create new variables using an array item as a value. Consider this example, an array with the various parts of a date:

Arrays in JavaScript are guaranteed to preserve their order, so in this case the first index will always be a year, the second will be the month, and so on. Knowing this, you can create variables from the items in the array:

But doing this manually can take up a lot of space in your code. With array destructuring, you can unpack the values from the array in order and assign them to their own variables, like so:

Now log the new variables:

You will get the following output:

```
Output1970
12
01
```

Values can be skipped by leaving the destructuring syntax blank between commas:

Running this will give the value of `year` and `day`:

```
Output1970
01
```

Nested arrays can also be destructured. First, create a nested array:

Then destructure that array and log the new variables:

You will receive the following output:

```
Output1 2 3 4 5
```

Destructuring syntax can be applied to destructure the parameters in a function. To test this out, you will destructure the `keys` and `values` out of [`Object.entries()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries).

First, declare the `note` object:

Given this object, you could list the key-value pairs by destructuring arguments as they are passed to the [`forEach()` method](https://www.digitalocean.com/community/tutorials/how-to-use-array-methods-in-javascript-iteration-methods#foreach()):

Or you could accomplish the same thing using a [`for` loop](https://www.digitalocean.com/community/tutorials/how-to-construct-for-loops-in-javascript):

Either way, you will receive the following:

```
Outputid: 1
title: My first note
date: 01/01/1970
```

Object destructuring and array destructuring can be combined in a single destructuring assignment. [Default parameters](https://www.digitalocean.com/community/tutorials/understanding-default-parameters-in-javascript) can also be used with destructuring, as seen in this example that sets the default date to [`new Date()`](https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript#the-date-object).

First, declare the `note` object:

Then destructure the object, while also setting a new `date` variable with the default of `new Date()`:

`console.log(date)` will then give output similar to the following:

```
OutputFri May 08 2020 23:53:49 GMT-0500 (Central Daylight Time)
```

As shown in this section, the destructuring assignment syntax adds a lot of flexibility to JavaScript and allows you to write more succinct code. In the next section, you will see how spread syntax can be used to expand data structures into their constituent data entries.

## Spread

_Spread_ syntax (`...`) is another helpful addition to JavaScript for working with arrays, objects, and function calls. Spread allows objects and iterables (such as arrays) to be unpacked, or expanded, which can be used to make shallow copies of data structures to increase the ease of data manipulation.

### Spread with Arrays

Spread can simplify common tasks with arrays. For example, let’s say you have two arrays and want to combine them:

Originally you would use [`concat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) to concatenate the two arrays:

Now you can also use spread to unpack the arrays into a new array:

Running this would give the following:

```
Output["hammer", "screwdriver", "wrench", "saw"]
```

This can be particularly helpful with immutability. For example, you might be working with an app that has `users` stored in an array of objects:

You could use `push` to modify the existing array and add a new user, which would be the mutable option:

But this changes the `user` array, which we might want to preserve.

Spread allows you to create a new array from the existing one and add a new item to the end:

Now the new array, `updatedUsers`, has the new user, but the original `users` array remains unchanged:

```
Output[{id: 1, name: "Ben"}
 {id: 2, name: "Leslie"}]

[{id: 1, name: "Ben"}
 {id: 2, name: "Leslie"}
 {id: 3, name: "Ron"}]
```

Creating copies of data instead of changing existing data can help prevent unexpected changes. In JavaScript, when you create an object or array and assign it to another variable, you are not actually creating a new object—you are passing a reference.

Take this example, in which an array is created and assigned to another variable:

Removing the last item of the second Array will modify the first one:

This will give the output:

```
Output["one", "two"]
```

Spread allows you to make a shallow copy of an array or object, meaning that any top level properties will be cloned, but nested objects will still be passed by reference. For simple arrays or objects, a shallow copy may be all you need.

If you write the same example code but copy the array with spread, the original array will no longer be modified:

The following will be logged to the console:

```
Output["one", "two", "three"]
```

Spread can also be used to convert a [set](https://www.digitalocean.com/community/tutorials/understanding-map-and-set-objects-in-javascript), or any other [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#Iterable_examples) to an Array.

Create a new set and add some entries to it:

Next, use the spread operator with `set` and log the results:

This will give the following:

```
Output["octopus", "starfish", "whale"]
```

This can also be useful for creating an array from a string:

This will give an array with each character as an item in the array:

```
Output["h", "e", "l", "l", "o"]
```

### Spread with Objects

When working with objects, spread can be used to copy and update objects.

Originally, [`Object.assign()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) was used to copy an object:

The `secondObject` will now be a clone of the `originalObject`.

This is simplified with the spread syntax—you can shallow copy an object by spreading it into a new one:

This will result in the following:

```
Output{enabled: true, darkMode: false}
```

Just like with arrays, this will only create a shallow copy, and nested objects will still be passed by reference.

Adding or modifying properties on an existing object in an immutable fashion is simplified with spread. In this example, the `isLoggedIn` property is added to the `user` object:

THis will output the following:

```
Output{id: 3, name: "Ron", isLoggedIn: true}
```

One important thing to note with updating objects via spread is that any nested object will have to be spread as well. For example, let’s say that in the `user` object there is a nested `organization` object:

If you tried to add a new item to `organization`, it would overwrite the existing fields:

This would result in the following:

```
Outputid: 3
name: "Ron"
organization: {position: "Director"}
```

If mutability is not an issue, the field could be updated directly:

But since we are seeking an immutable solution, we can spread the inner object to retain the existing properties:

This will give the following:

```
Outputid: 3
name: "Ron"
organization: {name: "Parks & Recreation", city: "Pawnee", position: "Director"}
```

### Spread with Function Calls

Spread can also be used with arguments in function calls.

As an example, here is a `multiply` function that takes three parameters and multiplies them:

Normally, you would pass three values individually as arguments to the function call, like so:

This would give the following:

```
Output6
```

However, if all the values you want to pass to the function already exist in an array, the spread syntax allows you to use each item in an array as an argument:

This will give the same result:

```
Output6
```

**Note:** Without spread, this can be accomplished by using `apply()`:

This will give:

```
Output6
```

Now that you have seen how spread can shorten your code, you can take a look at a different use of the `...` syntax: rest parameters.

## Rest Parameters

The last feature you will learn in this article is the _rest parameter_ syntax. The syntax appears the same as spread (`...`) but has the opposite effect. Instead of unpacking an array or object into individual values, the rest syntax will create an array of an indefinite number of arguments.

In the function `restTest` for example, if we wanted `args` to be an array composed of an indefinite number of arguments, we could have the following:

All the arguments passed to the `restTest` function are now available in the `args` array:

```
Output[1, 2, 3, 4, 5, 6]
```

Rest syntax can be used as the only parameter or as the last parameter in the list. If used as the only parameter, it will gather all arguments, but if it’s at the end of a list, it will gather every argument that is remaining, as seen in this example:

This will take the first two arguments individually, then group the rest into an array:

```
Output1
2
[3, 4, 5, 6]
```

In older code, the `arguments` variable could be used to gather all the arguments passed through to a function:

This would give the following output:

```
Output1Arguments(3) ["how", "many", "arguments"]
```

However, this has a few disadvantages. First, the `arguments` variable cannot be used with arrow functions.

This would yield an error:

```
OutputUncaught ReferenceError: arguments is not defined
```

Additionally, `arguments` is not a true array and cannot use methods like [`map` and `filter`](https://www.digitalocean.com/community/tutorials/how-to-use-array-methods-in-javascript-iteration-methods#map()) without first being converted to an array. It also will collect all arguments passed instead of just the rest of the arguments, as seen in the `restTest(one, two, ...args)` example.

Rest can be used when destructuring arrays as well:

This will give:

```
Outputhammer
["screwdriver", "wrench"]
```

Rest can also be used when destructuring objects:

Giving the following output:

```
Outputtrue
{id: 1, name: "Ben"}
```

In this way, rest syntax provides efficient methods for gathering an indeterminate amount of items.

## Conclusion

In this article, you learned about destructuring, spread syntax, and rest parameters. In summary:

-   Destructuring is used to create varibles from array items or object properties.
-   Spread syntax is used to unpack iterables such as arrays, objects, and function calls.
-   Rest parameter syntax will create an array from an indefinite number of values.

Destructuring, rest parameters, and spread syntax are useful features in JavaScript that help keep your code succinct and clean.

If you would like to see destructuring in action, take a look at [How To Customize React Components with Props](https://www.digitalocean.com/community/tutorials/how-to-customize-react-components-with-props#step-2-%E2%80%94-building-dynamic-components-with-props), which uses this syntax to destructure data and pass it to custom front-end components. If you’d like to learn more about JavaScript, return to our [How To Code in JavaScript series page](https://www.digitalocean.com/community/tutorial_series/how-to-code-in-javascript).