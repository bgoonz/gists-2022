_You are reading part 1 of 2. See also part 2: [Maintaining JavaScript applications in the long term](https://9elements.com/blog/maintaining-javascript-applications-in-the-long-term/)_

At [our agency](https://9elements.com/), a client project typically lasts a couple of months. From the first client contact and the design phase to the implementation and the initial launch, a project roughly takes half a year. But sometimes we develop and maintain a particular software over the course of several years.

For example, we started [GED VIZ](https://viz.ged-project.de/) for the Bertelsmann Foundation in 2012, released it in 2013 and added new features and data every few years. In 2016 we turned the core visualization into a reusable library, refactoring it significantly. The flow data visualization engine is still used today by the European Central Bank (ECB). Another long-lived project is the [OECD Data Portal](https://data.oecd.org/) front-end: We started the implementation in 2014, and we are still expanding the codebase.

After the main development phase, we apply fixes and add new features. Typically there is no budget for a major refactoring or even a rewrite. Therefore, in some projects I am stuck with the code I wrote 4-6 years ago and the library stack that was in vogue back then.

## Small improvements instead of big rewrites

Both projects mentioned are sizable client-side JavaScript applications. Nowadays, you find only few blog posts on maintaining an existing JavaScript codebase over years. You will find plenty of posts though on rewriting your front-end with whatever JavaScript framework is popular right now.

![Satirical book cover: Rewriting Your Front End Every Six Weeks by @ThePracticalDev](https://9elements.com/blog/content/images/rewriting-frontend.jpg)

[@ThePracticalDev](https://twitter.com/ThePracticalDev/status/715623065078644738)

Migrating to a new set of libraries and tools is a substantial investment that may pay off soon. It may ease the maintenance. It may reduce the cost of change. It allows to iterate faster and to implement new features more quickly. It may reduce errors, improve the robustness and the performance. Eventually, such an investment may reduce the total cost of ownership.

But when a client cannot make this investment, we look for ways how to gradually improve the existing codebase.

## Learning from long-term projects

For some web developers, being stuck with an existing codebase is a nightmare. They use the word “legacy” in a derogatory way for code that they have not written recently.

For me, the opposite is true. Maintaining a project’s code over a couple of years taught me more about software development than multiple short-lived, fire-and-forget projects.

Most importantly, it confronts me with code that I have written years ago. Decisions I have made years ago have consequences on the whole system today. Decisions I make today determine the fate of the system in the long term.

Often I am wondering: what would I do different today? What needs to be improved? Like every developer, I sometimes have the urge to destroy everything and build it from scratch.

But most of the time, the issues I have with existing code are more subtle: Today, I would write the same logic but with a different structure. Let me show you the main structural issues that I found in my JavaScript code.

## Avoid complex structures

By “complex” I do not simply mean large. Every non-trivial project has lots of logic in it. Lots of cases to consider and to test. Different data to process.

Complexity comes from interweaving different concerns. One cannot avoid that entirely, but I have learned to [separate the concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) first and then to bring them back in a controlled way.

Let us have a look at simple and complex structures in JavaScript.

### Functions

The simplest reusable piece of JavaScript code is a function. In particular, a _[pure function](https://medium.com/@jamesjefferyuk/javascript-what-are-pure-functions-4d4d5392d49c)_ that gets some input and produces a result (the return value). The function gets all required data explicitly as parameters. It does not change the input data or other context data. Such a function is easy to write, easy to test, easy to document, and easy to reason about.

Writing good JavaScript does not require high-level design patterns necessarily. First and foremost, it requires the skill to use the most basic technique in a clever and beneficial way: structuring your program with functions that [do one thing right](https://en.wikipedia.org/wiki/Single_responsibility_principle). Then composing low-level functions to higher-level functions.

Functions in JavaScript are full-fledged values, also called first-class objects. As a multi-paradigmatic language, JavaScript allows powerful functional programming patterns. I have only scratched the surface of functional programming with JavaScript in my career, but understanding the basics already helps to write simpler programs.

### Objects

The next complex structure is an object. In its simplest form, an object maps strings to arbitrary values, devoid of logic. But it can also contain logic: Functions become _methods_ when attached to an object.

```
const cat = {
  name: 'Maru',
  meow() {
    window.alert(`${this.name} says MEOW`);
  }
};
cat.meow();
```

Objects in JavaScript are ubiquitous and versatile. An object can be used as a bag of parameters with several handler functions attached. An object can group associated values but also structure a program. For example, you can put several similar functions on one object and let them operate on the same data.

### Classes

The most complex structure in JavaScript is a class. It is a blueprint for objects and, at the same time, a factory of such objects. It mixes prototypal inheritance with the creation of objects. It interweaves logic (functions) with data (instance properties). Sometimes there are properties on the constructor function, called “static” properties. Patterns like “singleton” overload a class with even more logic.

Classes are a familiar tool in object-oriented languages but they require knowledge of design patterns and experience in object modeling. Especially in JavaScript, they are hard to manage: Building inheritance chains, [object composition](https://en.wikipedia.org/wiki/Composition_over_inheritance), applying mixins, super calls, dealing with instance properties, getters & setters, method binding, encapsulation, etc. Neither does ECMAScript provide standard solutions for common OOP concepts nor has the community agreed on best practices regarding the use of classes.

Classes are appropriate if they have one defined purpose. I have learned to avoid adding more concerns to a class. For example, [stateful React components](https://reactjs.org/docs/state-and-lifecycle.html) are typically declared as classes. This makes sense for the particular problem domain. They have one clear purpose: Grouping the props, the state and a couple of functions that operate on both. In the center of the class lies the `render` function.

I stopped enriching these classes with more, loosely related logic. It is worth noting that the React team is slowly moving away from classes to [stateful functional components](https://reactjs.org/docs/hooks-intro.html).

Likewise, [component classes in Angular](https://angular.io/guide/architecture-components) are an intersection of several concerns: Metadata fields applied using the `@Component()` decorator. Constructor-based dependency injection. State as instance properties (inputs, outputs as well as custom public and private properties). Such classes are not simple or single-purpose at all. They are manageable as long as they only contain the required Angular-specific logic.

### Choosing structures

Over the years, I have come to these guidelines:

1.  Use the most straightforward, most flexible and versatile structure: a function. If possible, let it be a pure function.
2.  Avoid mixing data and logic in an object if possible.
3.  Avoid using classes if possible. If you use them, let them do one thing.

Most JavaScript frameworks come with their own way to structure code. In component-based UI frameworks like React and Angular, components are typically objects or classes. It is easy to choose composition over inheritance: Just create a new lightweight component class to separate the concern.

That does not mean that one needs to stick to these structures to model the business logic. Better put this logic into functions and separate them from the UI framework. This allows to evolve the framework code and the business logic separately.

## Modules, plenty of them

Managing the dependencies between JavaScript files and external libraries used to be a mess. At 9elements, we were early adopters of CommonJS or AMD modules. Later the community settled on standard [ECMAScript 6 modules](http://exploringjs.com/es6/ch_modules.html).

Modules became an essential code structure in JavaScript. It depends on the usage whether they bring simplicity or complexity.

My use of modules has changed over time. I used to create pretty large files with multiple exports. Alternatively, the single export was a giant object of grouping a bunch of constants and functions. Today I try to create small, flat modules with one export or just a few exports. This results in one file per function, one file per class and so on. A file `foo.js` would look like this:

```
export default function foo(...) {...}
```

If you prefer named exports over default exports:

```
export function foo(…) {…}
```

This makes individual functions easier to reference and easier to reuse. In my experience, lots of small files do not come with a significant cost. They allow to navigate in the code more easily. Also the dependencies of a particular piece of code are declared more efficiently.

## Avoid creating untyped objects

One of the best features of JavaScript is the object literal. It allows you to create an object quickly with arbitrary properties. We have already seen an example above:

```
const cat = {
  name: 'Maru',
  meow() {
    window.alert(`${this.name} says MEOW`);
  }
};
```

The JavaScript object notation is so simple and expressive that it was turned into an independent data format that is ubiquitous today: JSON. But over the course of the ECMAScript versions, the object literal gained more and more features that exceeded its original purpose. New ECMAScript features like [Object Rest/Spread](https://github.com/tc39/proposal-object-rest-spread) allow to create and mix objects more freely.

In a small codebase, creating objects on the fly is a productivity feature. In a large codebase though, object literals become a liability. In my opinion, objects with arbitrary properties should not exist in such projects.

The problem is not the object literal itself. The problem are objects that do not adhere to a central type definition. They are often the source of runtime errors: Properties may exist or not, may have a certain type or not. The object may have all required properties, but also more. By reading the code, you cannot tell which properties an object will have at runtime.

JavaScript does not have type definitions, but there are several ways to create objects in a more controlled way. For example, a function can be used to create all objects that look alike. The function ensures that the required properties are present and valid or have a default value. Another way is to use a class that creates dead-simple [value objects](https://en.wikipedia.org/wiki/Value_object).

Likewise, a function can check at runtime whether an argument is usable. It may check the type explicitly using `typeof`, `instanceof`, `Number.isNaN` etc. or implicitly using [duck typing](https://en.wikipedia.org/wiki/Duck_typing).

A more thorough solution is to enrich JavaScript with type definitions, like TypeScript or Flow. In TypeScript for example, you start by defining interfaces for important data models. Functions declare the type of their parameters and return values. The TypeScript compiler ensures only the permitted type is passed – given all calls are accessible to the compiler.

## Robust code

These guidelines concern the overall structure of the code. There are many more techniques and practices I have learned over the years working on large JavaScript projects. Most affect the robustness of JavaScript applications: Understanding how JavaScript programs can fail and how to prevent it. I have compiled these techniques in a _free online book_:

**[Robust Client-Side JavaScript – A Developer’s Guide](https://molily.de/robust-javascript/)**

If you enjoyed reading this article, you might also be interested in the follow-up article:

**[Maintaining JavaScript applications in the long term](https://9elements.com/blog/maintaining-javascript-applications-in-the-long-term/)**

## Acknowledgments

Thanks to [Susanne Nähler](https://dribbble.com/LittleSue), designer at 9elements, for creating the teaser illustration.

### [**We're open for business so feel free to contact us for your next project.**](https://9elements.com/contact)