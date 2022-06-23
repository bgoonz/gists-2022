[JS CODE STYLE](https://jstherightway.org/#js-code-style)
=========================================================

### CONVENTIONS

As every language, JavaScript has many code style guides. Maybe the most used and recommended is the [Google Code Style Guide for JavaScript](https://google.github.io/styleguide/javascriptguide.xml), but we recommend you read [Idiomatic.js](https://github.com/rwldrn/idiomatic.js/).

### LINTING

Nowadays the best tool for linting your JavaScript code is [JSHint](http://www.jshint.com/). We recommend that whenever possible you verify your code style and patterns with a Lint tool.

[THE GOOD PARTS](https://jstherightway.org/#the-good-parts)
===========================================================

### OBJECT ORIENTED

JavaScript has strong object-oriented programming capabilities, even though some debates have taken place due to the differences in object-oriented JavaScript compared to other languages.

Source: [Introduction to Object-Oriented JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)

### ANONYMOUS FUNCTIONS

Anonymous functions are functions that are dynamically declared at runtime. They're called anonymous functions because they aren't given a name in the same way as normal functions.

Source: [JavaScript anonymous functions](http://helephant.com/2008/08/23/javascript-anonymous-functions/)

### FUNCTIONS AS FIRST-CLASS OBJECTS

Functions in JavaScript are first class objects. This means that JavaScript functions are just a special type of object that can do all the things that regular objects can do.

Source: [Functions are first class objects in JavaScript](http://helephant.com/2008/08/19/functions-are-first-class-objects-in-javascript/)

### LOOSE TYPING

For many front-end developers, JavaScript was their first taste of a scripting and/or interpretive language. To these developers, the concept and implications of loosely typed variables may be second nature. However, the explosive growth in demand for modern web applications has resulted in a growing number of back-end developers that have had to dip their feet into the pool of client-side technologies. Many of these developers are coming from a background of strongly typed languages, such as C# or Java, and are unfamiliar with both the freedom and the potential pitfalls involved in working with loosely typed variables.

Source: [Understanding Loose Typing in JavaScript](http://blog.jeremymartin.name/2008/03/understanding-loose-typing-in.html)

### SCOPING AND HOISTING

Scoping: In JavaScript, functions are our *de facto* scope delimiters for declaring vars, which means that usual blocks from loops and conditionals (such as if, for, while, switch and try) DON'T delimit scope, unlike most other languages. Therefore, those blocks will share the same scope as the function which contains them. This way, it might be dangerous to declare vars inside blocks as it would seem the var belongs to that block only.

Hoisting: On runtime, all var and function declarations are moved to the beginning of each function (its scope) - this is known as Hoisting. Having said so, it is a good practice to declare all the vars altogether on the first line, in order to avoid false expectations with a var that got declared late but happened to hold a value before - this is a common problem for programmers coming from languages with block scope.

Source: [JavaScript Scoping and Hoisting](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)

### FUNCTION BINDING

Function binding is most probably the least of your concerns when beginning with JavaScript, but when you realize that you need a solution to the problem of how to keep the context of this within another function, then you might realize that what you actually need is Function.prototype.bind().

Source: [Understanding JavaScript's Function.prototype.bind](http://coding.smashingmagazine.com/2014/01/23/understanding-javascript-function-prototype-bind/)

### CLOSURE FUNCTION

Closures are functions that refer to independent (free) variables. In other words, the function defined in the closure 'remembers' the environment in which it was created in. It is an important concept to understand as it can be useful during development, like emulating private methods. It can also help to learn how to avoid common mistakes, like creating closures in loops.

Source: [MDN - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures/)

### STRICT MODE

ECMAScript 5's strict mode is a way to opt in to a restricted variant of JavaScript. Strict mode isn't just a subset: it intentionally has different semantics from normal code. Browsers not supporting strict mode will run strict mode code with different behavior from browsers that do, so don't rely on strict mode without feature-testing for support for the relevant aspects of strict mode. Strict mode code and non-strict mode code can coexist, so scripts can opt into strict mode incrementally.

Source: [MDN - Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode/)

### IMMEDIATELY-INVOKED FUNCTION EXPRESSION (IIFE)

An immediately-invoked function expression is a pattern which produces a lexical scope using JavaScript's function scoping. Immediately-invoked function expressions can be used to avoid variable hoisting from within blocks, protect against polluting the global environment and simultaneously allow public access to methods while retaining privacy for variables defined within the function.

*This pattern has been referred to as a self-executing anonymous function, but [@cowboy](http://twitter.com/cowboy) (Ben Alman) introduced the term IIFE as a more semantically accurate term for the pattern*.

Source: [Immediately-Invoked Function Expression (IIFE)](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)

[MUST SEE](https://jstherightway.org/#must-see)
===============================================

##### ARINDAM PAUL - JAVASCRIPT VM INTERNALS, EVENTLOOP, ASYNC AND SCOPECHAINS

[PATTERNS](https://jstherightway.org/#patterns)
===============================================

### DESCRIPTION

While JavaScript contains design patterns that are exclusive to the language, many classical design patterns can also be implemented.

A good way to learn about these is [Addy Osmani](https://twitter.com/addyosmani)'s open source book [Learning JavaScript Design Patterns](http://addyosmani.com/resources/essentialjsdesignpatterns/book/), and the links below are (in the majority) based on it.

### DESIGN PATTERNS

-   [Factory](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#factorypatternjavascript)
-   [Prototype](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#prototypepatternjavascript)
-   [Mixin](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#mixinpatternjavascript)
-   [Singleton](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript)

Creational Design Patterns

-   [Adapter](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#wrapperpatternjquery)
-   [Bridge](http://www.joezimjs.com/javascript/javascript-design-patterns-bridge/)
-   [Composite](http://www.joezimjs.com/javascript/javascript-design-patterns-composite/)
-   [Decorator](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#decoratorpatternjavascript)
-   [Facade](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#facadepatternjavascript)
-   [Flyweight](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailflyweight)
-   [Module](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript)
-   [Proxy](http://www.joezimjs.com/javascript/javascript-design-patterns-proxy/)
-   [Revealing Module](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript)

Structural Design Patterns

-   [Chain of Responsibility](http://www.joezimjs.com/javascript/javascript-design-patterns-chain-of-responsibility/)
-   [Command](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#commandpatternjavascript)
-   [Mediator](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#mediatorpatternjavascript)
-   [Observer](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript)

Behavioral Design Patterns

### MV* PATTERNS

There are some implementations of the traditional MVC Pattern and its variations in JavaScript.

-   [MVC Pattern](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailmvc)
-   [MVP Pattern](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailmvp)
-   [MVVM Pattern](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailmvvm)

[TESTING TOOLS](https://jstherightway.org/#testing-tools)
=========================================================

### DESCRIPTION

Various libraries and frameworks to do tests in JavaScript.

### LINKS

-   [Mocha](http://mochajs.org/)

Maintained by [TJ Holowaychuk](https://github.com/visionmedia)

-   [QUnit](http://qunitjs.com/)

Maintained by [jQuery](https://github.com/jquery)

-   [Jasmine](https://github.com/pivotal/jasmine)

Maintained by [Pivotal Labs](https://github.com/pivotal/jasmine)

-   [Karma](http://karma-runner.github.io/)

Maintained by the team behind AngularJS. Mostly by [Vojta Jina](https://github.com/vojtajina)

-   [Intern](http://theintern.io/)

Maintained by [Sitepen](http://www.sitepen.com/)

-   [Istanbul](http://gotwarlost.github.io/istanbul)

A JavaScript code coverage tool written in JavaScript, maintained by [Krishnan Anantheswaran](https://github.com/gotwarlost)

-   [Sinon.JS](http://sinonjs.org/)

Standalone test spies, stubs and mocks for JavaScript. No dependencies, works with any unit testing framework. Created by [Sinon.JS community](https://github.com/cjohansen/Sinon.JS)

-   [DexterJS](https://github.com/leobalter/DexterJS)

A test helper to mock functions and the XHR object, maintained by [Leo Balter](http://leobalter.github.io/)

-   [AVA](https://github.com/sindresorhus/ava)

Test runner with asynchronous tests, maintained by [Sindre Sorhus](https://twitter.com/sindresorhus)

-   [Jest](https://github.com/facebook/jest)

Painless JavaScript Testing, maintained by [Facebook](https://github.com/facebook)

[FRAMEWORKS](https://jstherightway.org/#frameworks)
===================================================

### GENERAL PURPOSE

-   [jQuery](http://jquery.com/)

jQuery is a fast, small, and feature-rich JavaScript library. Built by [John Resig](https://twitter.com/jeresig).

-   [YUI](http://yuilibrary.com/)

Built by Yahoo!, YUI is a free, open source JavaScript and CSS library for building richly interactive web applications. [New development has stopped since August 29th, 2014](http://yahooeng.tumblr.com/).

-   [ZeptoJS](http://zeptojs.com/)

Zepto is a minimalist JavaScript library for modern browsers with a largely jQuery-compatible API. If you use jQuery, you already know how to use Zepto.

-   [Dojo Toolkit](http://dojotoolkit.org/)

Dojo is a free, open-source JavaScript toolkit for building high performance web applications. Project sponsors include IBM and SitePen.

-   [Underscore.js](http://underscorejs.org/)

Underscore.js is a JavaScript library that provides a whole mess of useful functional programming helpers without extending any built-in objects.

### MV*

-   [Backbone.js](http://backbonejs.org/)

Very popular JavaScript client-side framework, built by [@jashkenas](http://twitter.com/jashkenas).

-   [Ember.js](http://emberjs.com/)

Built by [@wycats](http://twitter.com/wycats), jQuery and Ruby on Rails core developer.

-   [Knockout.js](http://knockoutjs.com/)

Simplify dynamic JavaScript UIs by applying the Model-View-View Model (MVVM).

-   [Angular.js](http://angularjs.org/)

Built by Google, Angular.js is like a polyfill for the future of HTML.

-   [Angular](https://angular.io/)

One framework.Mobile & desktop. One way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.

-   [Cappuccino](http://cappuccino.org/)

Cappuccino is an open-source framework that makes it easy to build desktop-caliber applications that run in a web browser.

-   [JavaScript MVC](http://javascriptmvc.com/)

JavaScriptMVC is an open-source framework containing the best ideas in jQuery development.

-   [Meteor](https://www.meteor.com/)

Meteor is an open-source platform for building top-quality web apps in a fraction of the time, whether you're an expert developer or just getting started.

-   [Spice.js](http://spicejs.github.io/spicejs/)

Spice is a super minimal (< 3k) and flexible MVC framework for javascript. Spice was built to be easily added to any existent application and play well with other technologies such as jQuery, pjax, turbolinks, node or whatever else you are using.

-   [Riot.js](http://www.riotjs.com/)

Riot is an incredibly fast, powerful yet tiny client side (MV*) library for building large scale web applications. Despite the small size all the building blocks are there: a template engine, router, event library and a strict MVP pattern to keep things organized.

-   [CanJS](http://canjs.com/)

CanJS is a JavaScript framework that makes developing complex applications simple and fast. Easy-to-learn, small, and unassuming of your application structure, but with modern features like custom tags and 2-way binding.

### LIBRARY

-   [React](http://facebook.github.io/react)

Built by Facebook. React is a JavaScript library for creating user interfaces by Facebook and Instagram. Many people choose to think of React as the V in MVC.

-   [Vue.js](http://www.vuejs.org/)

Is an MVVM library providing two-way data binding, HTML extended behaviour (through directives) and reactive components. By using native add-ons a developer can also have routing, AJAX, a Flux-like state management, form validation and more. Provides a helpful Chrome extension to inspect components built with Vue.

-   [Handlebars](http://handlebarsjs.com/)

Handlebars provides the power necessary to let you build semantic templates effectively with no frustration.

-   [Dust.js](http://linkedin.github.io/dustjs)

Asynchronous templates for the browser and node.js.

### ANIMATION

-   [GSAP](http://greensock.com/)

GSAP is the fastest full-featured scripted animation tool on the planet. It's even faster than CSS3 animations and transitions in many cases.

-   [Velocity.js](http://julian.com/research/velocity/)

Velocity is an animation engine with the same API as jQuery's $.animate().

-   [Bounce.js](http://bouncejs.com/)

Bounce.js is a tool and JS library that lets you create beautiful CSS3 powered animations.

-   [TweenJS](http://www.createjs.com/tweenjs)

A simple but powerful JavaScript library for tweening and animating HTML5 and JavaScript properties.

-   [Move.js](http://visionmedia.github.io/move.js/)

Move.js is a small JavaScript library making CSS3 backed animation extremely simple and elegant.

-   [Snap.svg](http://snapsvg.io/)

SVG is an excellent way to create interactive, resolution-independent vector graphics that will look great on any size screen.

-   [Rekapi](http://rekapi.com/)

Rekapi is a library for making canvas and DOM animations with JavaScript, as well as CSS @keyframe animations for modern browsers.

-   [Favico.js](http://lab.ejci.net/favico.js/)

Make use of your favicon with badges, images or videos.

-   [Textillate.js](http://jschr.github.io/textillate/)

Textillate.js combines some awesome libraries to provide a ease-to-use plugin for applying CSS3 animations to any text.

-   [Motio](http://darsa.in/motio/)

Motio is a small JavaScript library for simple but powerful sprite based animations and panning.

-   [Anima.js](http://lvivski.com/anima/)

With Anima it's easy to animate over a hundred objects at a time. Each item can have it's mass and viscosity to emulate reallife objects!

[GAME ENGINES](https://jstherightway.org/#game-engines)
=======================================================

-   [MelonJS](http://melonjs.org/)

MelonJS is a free, light-weight HTML5 game engine. The engine integrates the tiled map format making level design easier.

-   [ImpactJS](http://impactjs.com/)

ImpactJS is one of the more tested-and-true HTML5 game engines with the initial release all the way back at the end of 2010. It is very well maintained and updated, and has a good-sized community backing it. There exists plenty of documentation - even two books on the subject of creating games with the engine.

-   [LimeJS](http://limejs.com/)

LimeJS is a HTML5 game framework for building fast, native-experience games for all modern touchscreens and desktop browsers.

-   [Crafty](http://craftyjs.com/)

Crafty is a game engine that dates back to late 2010. Crafty makes it really easy to get started making JavaScript games.

-   [Cocos2d-HTML5](http://www.cocos2d-x.org/wiki/Cocos2d-html5)

Cocos2d-html5 is an open-source web 2D game framework, released under MIT License. It is a HTML5 version of Cocos2d-x project. The focus for Cocos2d-html5 development is around making Cocos2d cross platforms between browsers and native application.

-   [Phaser](http://phaser.io/)

Phaser is based heavily on [Flixel](http://www.flixel.org/). It is maintained by Richard Davey ([Photon Storm](http://www.photonstorm.com/)) who has been very active in the HTML5 community for years.

-   [Goo](http://www.goocreate.com/learn)

Goo is a 3D JavaScript gaming engine entirely built on WebGL/HTML5

-   [LycheeJS](http://lycheejs.org/)

LycheeJS is a JavaScript Game library that offers a complete solution for prototyping and deployment of HTML5 Canvas, WebGL or native OpenGL(ES) based games inside the Web Browser or native environments.

-   [Quintus](http://html5quintus.com/)

Quintus is an HTML5 game engine designed to be modular and lightweight, with a concise JavaScript-friendly syntax.

-   [KiwiJS](http://www.kiwijs.org/)

Kiwi.js is a fun and friendly Open Source HTML5 Game Engine. Some people call it the WordPress of HTML5 game engines

-   [PandaJS](http://www.pandajs.net/)

Panda.js is a HTML5 game engine for mobile and desktop with Canvas and WebGL rendering.

-   [Rot.js](https://github.com/ondras/rot.js)

Rot.js is a set of JavaScript libraries, designed to help with a roguelike development in browser environment.

-   [Isogenic](http://www.isogenicengine.com/)

Isogenic is an advanced game engine that provides the most advanced networking and realtime multiplayer functionality available in any HTML 5 game engine. The system is based on entity streaming and includes powerful simulation options and client-side entity interpolation from delta updates.

-   [WhitestormJS](https://github.com/WhitestormJS/whitestorm.js)

Super-fast 3D framework for Web Applications & Games. Based on Three.js. Includes integrated physics support and ReactJS integration.

[NEWS](https://jstherightway.org/#news)
=======================================

### WEBSITES

[JavaScript.com](http://javascript.com/)

[Echo JS](http://www.echojs.com/)

[The Treehouse Show](http://teamtreehouse.com/library/the-treehouse-show)

[/r/javascript on Reddit](http://www.reddit.com/r/javascript)

[Open Web Platform Daily Digest](http://webplatformdaily.org/)

[Badass JavaScript](http://badassjs.com/)

[AngularJS Daily](http://paper.li/gwinnem/1390553142)

### NEWSLETTER

[JavaScript Weekly](http://javascriptweekly.com/)

[A Drip of JavaScript](http://designpepper.com/a-drip-of-javascript)

[Ember Weekly](http://emberweekly.com/)

[Node Weekly](http://nodeweekly.com/)

[Meteor Weekly](http://meteorhacks.com/meteor-weekly)

[Grunt Weekly](https://twitter.com/gruntweekly)

[Gamedev.js Weekly](http://weekly.gamedevjs.com/)

[HTML5 Weekly](http://html5weekly.com/)

[UDGWebDev Weekly](http://udgwebdev.com/newsletter)

[The React Newsletter](http://theproblemsolver.nl/TheReactNewsletter/Subscribe)

[READING](https://jstherightway.org/#reading)
=============================================

### ARTICLES

-   [Understanding JavaScript OOP](http://robotlolita.github.io/2011/10/09/understanding-javascript-oop.html)

by [Quildreen Motta](https://github.com/robotlolita)

-   [Understanding "Prototypes" in JavaScript](http://yehudakatz.com/2011/08/12/understanding-prototypes-in-JavaScript)

by [Yehuda Katz](https://github.com/wycats)

-   [Prototypes and Inheritance in JavaScript](http://msdn.microsoft.com/en-us/magazine/ff852808.aspx)

by [Scott Allen](http://odetocode.com/blogs/scott)

-   [Partial Application in JavaScript](http://benalman.com/news/2012/09/partial-application-in-javascript)

by [Ben Alman](http://github.com/cowboy)

-   [Getting Over jQuery](http://blog.ponyfoo.com/2013/07/09/getting-over-jquery)

by [Nico Bevacqua](http://github.com/bevacqua)

-   [A Dive Into Plain JavaScript](http://blog.adtile.me/2014/01/16/a-dive-into-plain-javascript)

by [Viljami S.](https://twitter.com/viljamis)

-   [A Deeper Look at Objects in JavaScript](http://www.kirupa.com/html5/a_deeper_look_at_objects_in_javascript.htm)

by [Kirupa Chinnathambi](https://twitter.com/kirupa)

-   [Introduction to Easing in JavaScript](http://www.kirupa.com/html5/introduction_to_easing_in_javascript.htm)

by [Kirupa Chinnathambi](https://twitter.com/kirupa)

-   [How to Learn JavaScript Properly](http://javascriptissexy.com/how-to-learn-javascript-properly)

by [JavaScript Is Sexy](http://twitter.com/jsissexy)

-   [How to Start with JavaScript](http://jugoncalv.es/blog/javascript/how-to-start-with-javascript)

by [Ju Gonçalves](http://twitter.com/junspector)

### BOOKS

-   [Eloquent JavaScript](http://eloquentjavascript.net/)

by [Marijn Haverbeke](http://marijnhaverbeke.nl/)

-   [JavaScript: The Definitive Guide](http://www.amazon.com/JavaScript-Definitive-Guide-Activate-Guides/dp/0596805527)

by [David Flanagan](http://www.amazon.com/David-Flanagan/e/B000APEZR4/ref=ntt_athr_dp_pel_pop_1)

-   [JavaScript: The Good Parts](http://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742)

by [Douglas Crockford](http://www.amazon.com/Douglas-Crockford/e/B002N3VYB6/ref=ntt_athr_dp_pel_1)

-   [JavaScript Patterns](http://www.amazon.com/JavaScript-Patterns-Stoyan-Stefanov/dp/0596806752)

by [Stoyan Stefanov](http://www.amazon.com/Stoyan-Stefanov/e/B002BLXYIG/ref=ntt_athr_dp_pel_1)

-   [JavaScript Testing Recipes](http://jstesting.jcoglan.com/)

by [James Coglan](http://jcoglan.com/)

-   [Professional JavaScript for Web Developers](http://www.amazon.com/dp/1118026691/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=253J6SW0KPB7J&coliid=IC7UM9W2VVSHL)

by [Nicholas C. Zakas](http://www.amazon.com/Nicholas-C.-Zakas/e/B001IGUTOC/ref=ntt_athr_dp_pel_1)

-   [High Performance JavaScript](http://www.amazon.com/Performance-JavaScript-Faster-Application-Interfaces/dp/059680279X)

by [Nicholas C. Zakas](http://www.amazon.com/Nicholas-C.-Zakas/e/B001IGUTOC/ref=ntt_athr_dp_pel_1)

-   [Human JavaScript](http://humanjavascript.com/)

by [Henrik Joreteg](http://joreteg.com/)

-   [Object Oriented JavaScript](http://www.amazon.com/Object-Oriented-JavaScript-high-quality-applications-libraries/dp/1847194141)

by [Stoyan Stefanov](http://www.amazon.com/Stoyan-Stefanov/e/B002BLXYIG/ref=ntt_athr_dp_pel_1)

-   [Pro JavaScript Design Patterns](http://www.amazon.com/Pro-JavaScript-Design-Patterns-Object-Oriented/dp/159059908X)

by [Dustin Diaz](https://twitter.com/ded)

-   [Learning JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

by [Addy Osmani](http://twitter.com/addyosmani)

-   [Secrets of the JavaScript Ninja](http://jsninja.com/)

by [John Resig](http://ejohn.org/)

-   [JavaScript Application Design](http://bevacqua.io/bf)

by [Nicolas Bevacqua](http://blog.ponyfoo.com/)

-   [Speaking JavaScript](http://speakingjs.com/)

by [Axel Rauschmayer](http://www.rauschma.de/)

-   [Test-Driven JavaScript Development](http://tddjs.com/)

by [Christian Johansen](http://cjohansen.no/)

-   [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)

by [Kyle Simpson](https://github.com/getify)

-   [You Might Not Need jQuery](http://youmightnotneedjquery.com/)

by [Ryan Burgess](http://twitter.com/burgessdryan)

-   [JavaScript Garden](http://bonsaiden.github.io/JavaScript-Garden/)

by [Ivo Wetzel](https://blog.grandcentrix.net/)

-   [Effective JavaScript](http://effectivejs.com/)

by [David Herman](http://calculist.org/)

-   [Functional JavaScript](http://functionaljavascript.com/)

by [Michael Fogus](http://blog.fogus.me/)

-   [JavaScript Allongé](https://leanpub.com/javascriptallongesix)

by [Reginald Braithwaite](http://raganwald.com/)

-   [Exploring ES6](http://exploringjs.com/es6/)

by [Axel Rauschmayer](http://www.rauschma.de/)

-   [JSBooks](http://jsbooks.revolunet.com/)