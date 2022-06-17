# Principles of writing consistent, idiomatic JavaScript

## General principles

* All code in any code-base should look like a single person typed it, no matter how many people contributed.
* The following outlines the practices that I seek to adhere to in all code that I originally author.

> "Part of being a good steward to a successful project is realizing that writing code for yourself is a Bad Idea™. If thousands of people are using your code, then write your code for maximum clarity, not your personal preference of how to get clever within the spec." - Idan Gazit


## Idiomatic style manifesto

* [Whitespace](#whitespace)
* [Syntax](#syntax)
* [Type Checking (Courtesy jQuery Core Style Guidelines)](#type)
* [Conditional Evaluation](#cond)
* [Practical Style](#practical)
* [Naming](#naming)
* [Misc](#misc)
* [Native & Host Objects](#native)
* [Comments](#comments)
* [One Language Code](#language)

### 1. Whitespace<a name="whitespace"></a>

Consistency always wins.

The whitespace rules are set forth as a recommendation with a simpler, higher purpose: consistency. It's important to note that formatting preferences, such as "inner whitespace" should be considered optional, but only one style should exist across the entire source of your project.

1. _Never_ mix spaces and tabs for indentation.
2. Choose between soft indents (spaces) or real tabs. Stick to your choice without fail. (Preference: spaces)
3. Choose the number of characters used per indentation level. (Perference: 4 spaces)
4. Configure your editor to "show invisibles". This will allow you to:
    - Enforced consistency.
    - Eliminating end of line whitespace.
    - Eliminating blank line whitespace.
    - Create commits and diffs that are easier to read.

Another option is to set your `.gitconfig` to treat certain non-conforming whitespace as an error.

### 2. Syntax<a name="syntax"></a>

#### A. Parens, braces, linebreaks

```javascript
// Use whitespace to promote readability

if ( condition ) {
    // statements
}

while ( condition ) {
    // statements
}

var i;
var length = 100;

for ( i = 0; i < length; i++ ) {
    // statements
}

var prop;

for ( prop in object ) {
    // statements
}

if ( true ) {
    // statements
}
else {
    // statements
}
```

#### B. Assignments, declarations, functions (named, expression, constructor)

```javascript
// Variables
// Multiple `var` statements are easier to maintain
// Read more: http://benalman.com/news/2012/05/multiple-var-statements-javascript

var foo = 'bar';
var num = 1;
var undef;

// Literal notations
var array = [];
var object = {};


// var statements should always be in the beginning of their respective scope (function).
// Same goes for const and let from ECMAScript 6.

function foo() {
    var bar = '';
    var qux;

    // all statements after the variables declarations.
}
```

```javascript
// Named function declaration
function foo( arg1, argN ) {

}

// Usage
foo( arg1, argN );

// Named function declaration
function square( number ) {
    return number * number;
}

// Usage
square( 10 );

// Really contrived continuation passing style
function square( number, callback ) {
    callback( number * number );
}

square( 10, function( square ) {
    // callback statements
});


// Function expression
var square = function( number ) {
    // Return something valuable and relevant
    return number * number;
};

// Function expression with identifier
// This preferred form has the added value of being
// able to call itself and have an identity in stack traces:
var factorial = function factorial( number ) {
    if ( number < 2 ) {
        return 1;
    }

    return number * factorial( number - 1 );
};

// Constructor declaration
function FooBar( options ) {
    this.options = options;
}

// Usage
var fooBar = new FooBar({ a: 'alpha' });

fooBar.options;
// { a: 'alpha' }
```

#### C. Exceptions and slight deviations

```javascript
// Functions with callbacks
foo(function() {
    // Note there is no extra space between the first paren
    // of the executing function call and the word "function"
});

// Function accepting an array, no space
foo([ 'alpha', 'beta' ]);

// Function accepting an object, no space
foo({
    a: 'alpha',
    b: 'beta'
});

// Single argument string literal, no space
foo('bar');

// Inner grouping parens, no space
if ( !('foo' in obj) ) {
    // statements
}
```

#### D. Quotes

Whether you prefer single or double shouldn't matter, there is no difference in how JavaScript parses them. What **ABSOLUTELY MUST** be enforced is consistency. **Never mix quotes in the same project. Pick one style and stick with it.**

#### E. End of lines and empty lines

Whitespace can ruin diffs and make changesets impossible to read. Consider incorporating a pre-commit hook that removes end-of-line whitespace and blanks spaces on empty lines automatically.

### 3. Type checking (courtesy jQuery core style guidelines)<a name="type"></a>

#### A. Actual types

String:

`typeof variable === 'string'`

Number:

`typeof variable === 'number'`

Boolean:

`typeof variable === 'boolean'`

Object:

`typeof variable === 'object'`

Array:

`Array.isArray( arrayLikeObject )` // wherever possible

Node:

`elem.nodeType === 1`

null:

`variable === null`

null or undefined:

`variable == null`

undefined:

```javascript
// global variables:
typeof variable === 'undefined'

// local variables:
variable === undefined
```

Properties:

```javascript
object.prop === undefined
object.hasOwnProperty( prop )
'prop' in object
```

#### B. Coerced types

Consider the implications of the following...

Given this HTML:

```html
<input type="text" id="foo-input" value="1">
```

```javascript
// 3.B.1.1

// `foo` has been declared with the value `0` and its type is `number`
var foo = 0;

// typeof foo;
// "number"
...

// Somewhere later in your code, you need to update `foo`
// with a new value derived from an input element

foo = document.getElementById('foo-input').value;

// If you were to test `typeof foo` now, the result would be `string`
// This means that if you had logic that tested `foo` like:

if ( foo === 1 ) {
    importantTask();
}

// `importantTask()` would never be evaluated, even though `foo` has a value of "1"


// 3.B.1.2

// You can preempt issues by using smart coercion with unary + or - operators:

foo = +document.getElementById('foo-input').value;
//    ^ unary + operator will convert its right side operand to a number

// typeof foo;
// "number"

if ( foo === 1 ) {
    importantTask();
}

// `importantTask()` will be called
```

Here are some common cases along with coercions:

```javascript
// 3.B.2.1

var number = 1;
var string = '1';
var bool = false;

number;
// 1

number + '';
// "1"

string;
// "1"

+string;
// 1

+string++;
// 1

string;
// 2

bool;
// false

+bool;
// 0

bool + '';
// "false"
```

```javascript
// 3.B.2.2

var number = 1;
var string = '1';
var bool = true;

string === number;
// false

string === number + '';
// true

+string === number;
// true

bool === number;
// false

+bool === number;
// true

bool === string;
// false

bool === !!string;
// true
```

```javascript
// 3.B.2.3

var array = [ 'a', 'b', 'c' ];

!!~array.indexOf('a');
// true

!!~array.indexOf('b');
// true

!!~array.indexOf('c');
// true

!!~array.indexOf('d');
// false

// Note that the above should be considered "unnecessarily clever"
// Prefer the obvious approach of comparing the returned value of
// indexOf, like:

if ( array.indexOf('a') >= 0 ) {
    // ...
}
```

```javascript
// 3.B.2.3

var num = 2.5;

parseInt( num, 10 );

// is the same as...

~~num;

num >> 0;

num >>> 0;

// All result in 2


// Keep in mind however, that negative numbers will be treated differently...

var neg = -2.5;

parseInt( neg, 10 );

// is the same as...

~~neg;

neg >> 0;

// All result in -2
// However...

neg >>> 0;

// Will result in 4294967294
```


### 4. Conditional evaluation<a name="cond"></a>

```javascript
// 4.1.1
// When only evaluating that an array has length,
// instead of this:
if ( array.length > 0 ) ...

// ...evaluate truthiness, like this:
if ( array.length ) ...


// 4.1.2
// When only evaluating that an array is empty,
// instead of this:
if ( array.length === 0 ) ...

// ...evaluate truthiness, like this:
if ( !array.length ) ...


// 4.1.3
// When only evaluating that a string is not empty,
// instead of this:
if ( string !== '' ) ...

// ...evaluate truthiness, like this:
if ( string ) ...


// 4.1.4
// When only evaluating that a string _is_ empty,
// instead of this:
if ( string === '' ) ...

// ...evaluate falsy-ness, like this:
if ( !string ) ...


// 4.1.5
// When only evaluating that a reference is true,
// instead of this:
if ( foo === true ) ...

// ...evaluate like you mean it, take advantage of built in capabilities:
if ( foo ) ...


// 4.1.6
// When evaluating that a reference is false,
// instead of this:
if ( foo === false ) ...

// ...use negation to coerce a true evaluation
if ( !foo ) ...

// ...Be careful, this will also match: 0, "", null, undefined, NaN
// If you _MUST_ test for a boolean false, then use
if ( foo === false ) ...


// 4.1.7
// When only evaluating a ref that might be null or undefined, but NOT false, "" or 0,
// instead of this:
if ( foo === null || foo === undefined ) ...

// ...take advantage of == type coercion, like this:
if ( foo == null ) ...

// Remember, using == will match a `null` to BOTH `null` and `undefined`
// but not `false`, '' or 0
null == undefined
```

ALWAYS evaluate for the best, most accurate result - the above is a guideline, not a dogma.

```javascript
// 4.2.1
// Type coercion and evaluation notes

// Prefer `===` over `==` (unless the case requires loose type evaluation)

// === does not coerce type, which means that:

'1' === 1;
// false

// == does coerce type, which means that:

'1' == 1;
// true


// 4.2.2
// Booleans, Truthies & Falsies

// Booleans:
true, false

// Truthy:
'foo', 1

// Falsy:
'', 0, null, undefined, NaN, void 0
```


### 5. Practical Style<a name="practical"></a>

```javascript
// 5.1.1
// A Practical Module

(function( global ) {
    var Module = (function() {
        var data = 'secret';

        return {
            // This is some boolean property
            bool: true,
            // Some string value
            string: 'a string',
            // An array property
            array: [ 1, 2, 3, 4 ],
            // An object property
            object: {
                lang: 'en-us'
            },
            getData: function() {
                // get the current value of `data`
                return data;
            },
            setData: function( value ) {
                // set the value of `data` and return it
                return ( data = value );
            }
        };
    }());

    // Other things might happen here

    // expose our module to the global object
    global.Module = Module;

}( this ));
```

```javascript
// 5.2.1
// A Practical Constructor

(function( global ) {

    function Ctor( foo ) {
        this.foo = foo;
        return this;
    }

    Ctor.prototype.getFoo = function() {
        return this.foo;
    };

    Ctor.prototype.setFoo = function( val ) {
        return ( this.foo = val );
    };

    // To call constructor's without `new`, you might do this:
    var ctor = function( foo ) {
        return new Ctor( foo );
    };

    // expose our constructor to the global object
    global.ctor = ctor;

}( this ));
```

### 6. Naming<a name="naming"></a>

You are not a human code compiler/compressor, so don't try to be one.

Use thoughtful naming and a readable structure.

```javascript
// 6.1.1
// Example of code with good names

function query( selector ) {
    return document.querySelectorAll( selector );
}

var idx;
var elements = [];
var matches = query('#foo');
var length = matches.length;

for( idx = 0; idx < length; idx++ ){
    elements.push( matches[ idx ] );
}
```

A few additional naming pointers:

```javascript
// 6.2.1
// Naming strings

`dog` is a string

// 6.2.2
// Naming arrays

`dogs` is an array of `dog` strings

// 6.2.3
// Naming functions, objects, instances, etc

camelCase; function and var declarations

// 6.2.4
// Naming constructors, prototypes, etc.

PascalCase; constructor function

// 6.2.5
// Naming regular expressions

rDesc = //;

// 6.2.6
// From the Google Closure Library Style Guide

functionNamesLikeThis;
variableNamesLikeThis;
ConstructorNamesLikeThis;
EnumNamesLikeThis;
methodNamesLikeThis;
SYMBOLIC_CONSTANTS_LIKE_THIS;
```

### 7. Misc<a name="misc"></a>

This section will serve to illustrate ideas and concepts that should not be considered dogma, but instead exists to encourage questioning practices in an attempt to find better ways to do common JavaScript programming tasks.

#### A. Using `switch` should be avoided, modern method tracing will blacklist functions with switch statements

There seems to be drastic improvements to the execution of `switch` statements in latest releases of Firefox and Chrome.
http://jsperf.com/switch-vs-object-literal-vs-module

Notable improvements can be witnesses here as well:
https://github.com/rwldrn/idiomatic.js/issues/13

```javascript
// 7.A.1.1
// A better approach than switch statements would be to use an object literal or even a module:

var switchObj = {
    alpha: function() {
        // statements
        // a return
    },
    beta: function() {
        // statements
        // a return
    },
    _default: function() {
        // statements
        // a return
    }
};

var switchModule = (function () {
    return {
        alpha: function() {
            // statements
            // a return
        },
        beta: function() {
            // statements
            // a return
        },
        _default: function() {
            // statements
            // a return
        }
    };
}());


// 7.A.2.1
// If `foo` is a property of `switchObj` or `switchModule`, execute as a method...

( Object.hasOwnProperty.call( switchObj, foo ) && switchObj[ foo ] || switchObj._default )( args );

( Object.hasOwnProperty.call( switchObj, foo ) && switchModule[ foo ] || switchModule._default )( args );

// If you know and trust the value of `foo`, you could even omit the OR check
// leaving only the execution:

switchObj[ foo ]( args );

switchModule[ foo ]( args );


// This pattern also promotes code reusability.
```

#### B. Early returns promote code readability with negligible performance difference

```javascript
// 7.B.1.1
function returnEarly( foo ) {
    if ( foo ) {
        return 'foo';
    }
    return 'quux';
}
```


### 8. Native & host objects<a name="native"></a>

The basic principle here is:

**Don't do stupid shit and everything will be ok.**

To reinforce this concept, please watch the following presentation:

http://blip.tv/jsconf/jsconf2011-andrew-dupont-everything-is-permitted-extending-built-ins-5211542
)[“Everything is Permitted: Extending Built-ins”]( by Andrew Dupont (JSConf2011, Portland, Oregon)


### 9. Comments<a name="comments"></a>

* Single line above the code that is subject
* Multiline is good
* End of line comments are prohibited!
* JSDoc style is good, but requires a significant time investment


### 10. One language code<a name="language"></a>

Programs should be written in one language, whatever that language may be, as dictated by the maintainer or maintainers.


## Important, non-idiomatic resources

### Code quality: tooling and linting

 * [jsPerf](http://jsperf.com/)
 * [jsFiddle](http://jsfiddle.net/)
 * [jsbin](http://jsbin.com/)
 * [JavaScript Lint (JSL)](http://javascriptlint.com/)
 * [jshint](http://jshint.com/)
 * [jslint](http://jslint.org/)

[Leveraging Code Quality Tools by Anton Kovalyov](http://anton.kovalyov.net/slides/gothamjs/)

### Education

 * [Baseline For Front End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/)
 * [Eloquent JavaScript](http://eloquentjavascript.net/)
 * [JavaScript, JavaScript](http://javascriptweblog.wordpress.com/)
 * [Adventures in JavaScript Development](http://rmurphey.com/)
 * [Perfection Kills](http://perfectionkills.com/)
 * [Douglas Crockford's Site](http://www.crockford.com)
 * [JS Assessment](https://github.com/rmurphey/js-assessment)

[http://es5.github.com/](http://es5.github.com/)

### Build & deployment process

Projects should always attempt to include some generic means by which source can be linted, tested and compressed in preparation for production use. For this task, [grunt](https://github.com/cowboy/grunt) by Ben Alman is an excellent tool.

### Test facility

Projects _must_ include some form of unit, reference, implementation or functional testing. Use case demos DO NOT QUALIFY as "tests". The following is a list of potential test frameworks.

 * [QUnit](http://github.com/jquery/qunit)
 * [Jasmine](https://github.com/pivotal/jasmine)
 * [Vows](https://github.com/cloudhead/vows)
 * [Mocha](https://github.com/visionmedia/mocha)
 * [Hiro](http://hirojs.com/)
 * [JsTestDriver](https://code.google.com/p/js-test-driver/)
 * [Buster.js](http://busterjs.org/)


## Original contributors

* Rick Waldron [@rwaldron](http://twitter.com/rwaldron), [github](https://github.com/rwldrn)
* Mathias Bynens [@mathias](http://twitter.com/mathias), [github](https://github.com/mathiasbynens)
* Schalk Neethling [@ossreleasefeed](http://twitter.com/ossreleasefeed), [github](https://github.com/ossreleasefeed/)
* Kit Cambridge  [@kitcambridge](http://twitter.com/kitcambridge), [github](https://github.com/kitcambridge)
* Raynos  [github](https://github.com/Raynos)
* Matias Arriola [@MatiasArriola](https://twitter.com/MatiasArriola), [github](https://github.com/MatiasArriola/)
* Idan Gazit [@idangazit](http://twitter.com/idangazit), [github](https://github.com/idangazit)
* Leo Balter [@leobalter](http://twitter.com/leobalter), [github](https://github.com/leobalter)
* Breno Oliveira [@garu_rj](http://twitter.com/garu_rj), [github](https://github.com/garu)
* Leo Beto Souza [@leobetosouza](http://twitter.com/leobetosouza), [github](https://github.com/leobetosouza)
* Ryuichi Okumura [@okuryu](http://twitter.com/okuryu), [github](https://github.com/okuryu)
* EngForDev [engfordev](http://www.opentutorials.org/course/167/1363)
    * Hwan Min Hong
    * MinTaek Kwon [@leoinsight](http://twitter.com/leoinsight)
    * Tw Shim [@marocchino](http://twitter.com/marocchino), [github](https://github.com/marocchino)
    * Nassol Kim [@nassol99](http://twitter.com/nassol99), [github](https://github.com/nassol)
    * Juntai Park [@rkJun](http://twitter.com/rkJun), [github](https://github.com/rkJun)
    * Minkyu Shim
    * Gangmin Won
    * Justin Yoo [@justinchronicle](http://twitter.com/justinchronicle)
    * Daeyup Lee