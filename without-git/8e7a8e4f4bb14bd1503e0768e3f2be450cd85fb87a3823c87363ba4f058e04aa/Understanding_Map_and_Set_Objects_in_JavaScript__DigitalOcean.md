_The author selected the [Open Internet/Free Speech Fund](https://www.brightfunds.org/open-internet-free-speech) to receive a donation as part of the [Write for DOnations](https://do.co/w4do-cta) program._

In JavaScript, developers often spend a lot of time deciding the correct data structure to use. This is because choosing the correct data structure can make it easier to manipulate that data later on, saving time and making code easier to comprehend. The two predominant data structures for storing collections of data are [Objects](https://www.digitalocean.com/community/tutorials/understanding-objects-in-javascript) and [Arrays](https://www.digitalocean.com/community/tutorials/understanding-arrays-in-javascript) (a type of object). Developers use Objects to store key/value pairs and Arrays to store indexed lists. However, to give developers more flexibility, the ECMAScript 2015 specification introduced two new types of iterable objects: _Maps_, which are ordered collections of key/value pairs, and _Sets_, which are collections of unique values.

In this article, you will go over the Map and Set objects, what makes them similar or different to Objects and Arrays, the properties and methods available to them, and examples of some practical uses.

## Maps

A Map is a collection of key/value pairs that can use any [data type](https://www.digitalocean.com/community/tutorials/understanding-data-types-in-javascript) as a key and can maintain the order of its entries. Maps have elements of both Objects (a unique key/value pair collection) and Arrays (an ordered collection), but are more similar to Objects conceptually. This is because, although the size and order of entries is preserved like an Array, the entries themselves are key/value pairs like Objects.

Maps can be initialized with the `new Map()` syntax:

This gives us an empty Map:

```
OutputMap(0) {}
```

### Adding Values to a Map

You can add values to a map with the `set()` method. The first argument will be the key, and the second argument will be the value.

The following adds three key/value pairs to `map`:

Here we begin to see how Maps have elements of both Objects and Arrays. Like an Array, we have a zero-indexed collection, and we can also see how many items are in the Map by default. Maps use the `=>` syntax to signify key/value pairs as `key => value`:

```
OutputMap(3)
0: {"firstName" => "Luke"}
1: {"lastName" => "Skywalker"}
2: {"occupation" => "Jedi Knight"}
```

This example looks similar to a regular object with string-based keys, but we can use any data type as a key with Maps.

In addition to manually setting values on a Map, we can also initialize a Map with values already. We do this using an Array of Arrays containing two elements that are each key/value pairs, which looks like this:

Using the following syntax, we can recreate the same Map:

**Note:** This example uses _trailing commas_, also referred to as _dangling commas_. This is a JavaScript formatting practice in which the final item in a series when declaring a collection of data has a comma at the end. Though this formatting choice can be used for cleaner diffs and easier code manipulation, whether to use it or not is a matter of preference. For more information on trailing commas, see this [Trailing Comma article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas) from the MDN web docs.  

Incidentally, this syntax is the same as the result of calling [`Object.entries()`](https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript#objectentries()) on an Object. This provides a ready-made way to convert an Object to a Map, as shown in the following code block:

Alternatively, you can turn a Map back into an Object or an Array with a single line of code.

The following converts a Map to an Object:

This will result in the following value of `obj`:

```
Output{firstName: "Luke", lastName: "Skywalker", occupation: "Jedi Knight"}
```

Now, let’s convert a Map to an Array:

This will result in the following Array for `arr`:

```
Output[ ['firstName', 'Luke'],
  ['lastName', 'Skywalker'],
  ['occupation', 'Jedi Knight'] ]
```

### Map Keys

Maps accept any data type as a key, and do not allow duplicate key values. We can demonstrate this by creating a map and using non-string values as keys, as well as setting two values to the same key.

First, let’s initialize a map with non-string keys:

This example will override the first key of `1` with the subsequent one, and it will treat `'1'` the string and `1` the number as unique keys:

```
Output0: {"1" => "String one"}
1: {1 => "Number one"}
2: {true => "A Boolean"}
```

Although it is a common belief that a regular JavaScript Object can already handle Numbers, booleans, and other primitive data types as keys, this is actually not the case, because Objects change all keys to strings.

As an example, initialize an object with a numerical key and compare the value for a numerical `1` key and a stringified `"1"` key:

This is why if you attempt to use an Object as a key, it will print out the string `object Object` instead.

As an example, create an Object and then use it as the key of another Object:

This will yield the following:

```
Output{[object Object]: "What will happen?"}
```

This is not the case with Map. Try creating an Object and setting it as the key of a Map:

The `key` of the Map element is now the object we created.

```
Outputkey: {foo: "bar"}
value: "What will happen?"
```

There is one important thing to note about using an Object or Array as a key: the Map is using the reference to the Object to compare equality, not the literal value of the Object. In JavaScript `{} === {}` returns `false`, because the two Objects are not the same two Objects, despite having the same (empty) value.

That means that adding two unique Objects with the same value will create a Map with two entries:

This will yield the following:

```
OutputMap(2) {{…} => "One", {…} => "Two"}
```

But using the same Object reference twice will create a Map with one entry.

Which will result in the following:

```
OutputMap(1) {{…} => "Two"}
```

The second `set()` is updating the same exact key as the first, so we end up with a Map that only has one value.

### Getting and Deleting Items from a Map

One of the disadvantages of working with Objects is that it can be difficult to enumerate them, or work with all the keys or values. The Map structure, by contrast, has a lot of built-in properties that make working with their elements more direct.

We can initialize a new Map to demonstrate the following methods and properties: `delete()`, `has()`, `get()`, and `size`.

Use the `has()` method to check for the existence of an item in a map. `has()` will return a Boolean.

Use the `get()` method to retrieve a value by key.

One particular benefit Maps have over Objects is that you can find the size of a Map at any time, like you can with an Array. You can get the count of items in a Map with the `size` property. This involves fewer steps than converting an Object to an Array to find the length.

Use the `delete()` method to remove an item from a Map by key. The method will return a Boolean—`true` if an item existed and was deleted, and `false` if it did not match any item.

This will result in the following Map:

```
OutputMap(3) {"animal" => "otter", "shape" => "triangle", "country" => "Bulgaria"}
```

Finally, a Map can be cleared of all values with `map.clear()`.

This will yield:

```
OutputMap(0) {}
```

### Keys, Values, and Entries for Maps

Objects can retrieve keys, values, and entries by using the properties of the `Object` constructor. Maps, on the other hand, have prototype methods that allow us to get the keys, values, and entries of the Map instance directly.

The `keys()`, `values()`, and `entries()` methods all return a `MapIterator`, which is similar to an Array in that you can use `for...of` to loop through the values.

Here is another example of a Map, which we can use to demonstrate these methods:

The `keys()` method returns the keys:

```
OutputMapIterator {1970, 1980, 1990}
```

The `values()` method returns the values:

```
OutputMapIterator {"bell bottoms", "leg warmers", "flannel"}
```

The `entries()` method returns an array of key/value pairs:

```
OutputMapIterator {1970 => "bell bottoms", 1980 => "leg warmers", 1990 => "flannel"}
```

### Iteration with Map

Map has a built-in `forEach` method, similar to an Array, for built-in iteration. However, there is a bit of a difference in what they iterate over. The callback of a Map’s `forEach` iterates through the `value`, `key`, and `map` itself, while the Array version iterates through the `item`, `index`, and `array` itself.

This is a big advantage for Maps over Objects, as Objects need to be converted with `keys()`, `values()`, or `entries()`, and there is not a simple way to retrieve the properties of an Object without converting it.

To demonstrate this, let’s iterate through our Map and log the key/value pairs to the console:

This will give:

```
Output1970: bell bottoms
1980: leg warmers
1990: flannel
```

Since a `for...of` loop iterates over iterables like Map and Array, we can get the exact same result by destructuring the array of Map items:

### Map Properties and Methods

The following table shows a list of Map properties and methods for quick reference:

Properties/Methods

Description

Returns

[`set(key, value)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set)

Appends a key/value pair to a Map

`Map` Object

[`delete(key)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete)

Removes a key/value pair from a Map by key

Boolean

[`get(key)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get)

Returns a value by key

value

[`has(key)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has)

Checks for the presence of an element in a Map by key

Boolean

[`clear()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear)

Removes all items from a Map

N/A

[`keys()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys)

Returns all keys in a Map

`MapIterator` object

[`values()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values)

Returns all values in a Map

`MapIterator` object

[`entries()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries)

Returns all keys and values in a Map as `[key, value]`

`MapIterator` object

[`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach)

Iterates through the Map in insertion order

N/A

[`size`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size)

Returns the number of items in a Map

Number

### When to Use Map

Summing up, Maps are similar to Objects in that they hold key/value pairs, but Maps have several advantages over objects:

-   **Size** - Maps have a `size` property, whereas Objects do not have a built-in way to retrieve their size.
-   **Iteration** - Maps are directly iterable, whereas Objects are not.
-   **Flexibility** - Maps can have any data type (primitive or Object) as the key to a value, while Objects can only have strings.
-   **Ordered** - Maps retain their insertion order, whereas objects do not have a guaranteed order.

Due to these factors, Maps are a powerful data structure to consider. However, Objects haves some important advantages as well:

-   **JSON** - Objects work flawlessly with `JSON.parse()` and `JSON.stringify()`, two essential functions for working with [JSON](https://www.digitalocean.com/community/tutorials/how-to-work-with-json-in-javascript), a common data format that many REST APIs deal with.
-   **Working with a single element** - Working with a known value in an Object, you can access it directly with the key without the need to use a method, such as Map’s `get()`.

This list will help you decide if a Map or Object is the right data structure for your use case.

## Set

A Set is a collection of unique values. Unlike a Map, a Set is conceptually more similar to an Array than an Object, since it is a list of values and not key/value pairs. However, Set is not a replacement for Arrays, but rather a supplement for providing additional support for working with duplicated data.

You can initialize Sets with the `new Set()` syntax.

This gives us an empty Set:

```
OutputSet(0) {}
```

Items can be added to a Set with the `add()` method. (This is not to be confused with the `set()` method available to Map, although they are similar.)

Since Sets can only contain unique values, any attempt to add a value that already exists will be ignored.

**Note**: The same equality comparison that applies to Map keys applies to Set items. Two objects that have the same value but do not share the same reference will not be considered equal.  

You can also initialize Sets with an Array of values. If there are duplicate values in the array, they will be removed from the Set.

```
OutputSet(3) {"Beethoven", "Mozart", "Chopin"}
```

Conversely, a Set can be converted into an Array with one line of code:

```
Output(3) ["Beethoven", "Mozart", "Chopin"]
```

Set has many of the same methods and properties as Map, including `delete()`, `has()`, `clear()`, and `size`.

Note that Set does not have a way to access a value by a key or index, like `Map.get(key)` or `arr[index]`.

### Keys, Values, and Entries for Sets

Map and Set both have `keys()`, `values()`, and `entries()` methods that return an Iterator. However, while each one of these methods have a distinct purpose in Map, Sets do not have keys, and therefore keys are an alias for values. This means that `keys()` and `values()` will both return the same Iterator, and `entries()` will return the value twice. It makes the most sense to only use `values()` with Set, as the other two methods exist for consistency and cross-compatibility with Map.

```
OutputSetIterator {1, 2, 3}
```

### Iteration with Set

Like Map, Set has a built-in `forEach()` method. Since Sets don’t have keys, the first and second parameter of the `forEach()` callback return the same value, so there is no use case for it outside of compatibility with Map. The parameters of `forEach()` are `(value, key, set)`.

Both `forEach()` and `for...of` can be used on Set. First, let’s look at `forEach()` iteration:

Then we can write the `for...of` version:

Both of these strategies will yield the following:

```
Outputhi
hello
good day
```

### Set Properties and Methods

The following table shows a list of Set properties and methods for quick reference:

Properties/Methods

Description

Returns

[`add(value)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add)

Appends a new item to a Set

`Set` Object

[`delete(value)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/delete)

Removes the specified item from a Set

Boolean

[`has()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has)

Checks for the presence of an item in a Set

Boolean

[`clear()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear)

Removes all items from a Set

N/A

[`keys()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/values)

Returns all values in a Set (same as `values()`)

`SetIterator` object

[`values()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/values)

Returns all values in a Set (same as `keys()`)

`SetIterator` object

[`entries()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/entries)

Returns all values in a Set as `[value, value]`

`SetIterator` object

[`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach)

Iterates through the Set in insertion order

N/A

[`size`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size)

Returns the number of items in a Set

Number

### When to Use Set

Set is a useful addition to your JavaScript toolkit, particularly for working with duplicate values in data.

In a single line, we can create a new Array without duplicate values from an Array that has duplicate values.

This will give:

```
Output(3) [1, 2, 3]
```

Set can be used for finding the union, intersection, and difference between two sets of data. However, Arrays have a significant advantage over Sets for additional manipulation of the data due to the `sort()`, `map()`, `filter()`, and `reduce()` methods, as well as direct compatibility with `JSON` methods.

## Conclusion

In this article, you learned that a Map is a collection of ordered key/value pairs, and that a Set is a collection of unique values. Both of these data structures add additional capabilities to JavaScript and simplify common tasks such as finding the length of a key/value pair collection and removing duplicate items from a data set, respectively. On the other hand, Objects and Arrays have been traditionally used for data storage and manipulation in JavaScript, and have direct compatibility with JSON, which continues to make them the most essential data structures, especially for working with REST APIs. Maps and Sets are primarily useful as supporting data structures for Objects and Arrays.

If you would like to learn more about JavaScript, check out the homepage for our [How To Code in JavaScript series](https://www.digitalocean.com/community/tutorial_series/how-to-code-in-javascript), or browse our [How to Code in Node.js series](https://www.digitalocean.com/community/tutorial_series/how-to-code-in-node-js) for articles on back-end development.