A Collection of my most useful Gist Entries
===========================================

This list is in no particular order!

------------------------------------------------------------------------

### A Collection of my most useful Gist Entries

**This list is in no particular order!**

<a href="https://bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…</em>bgoonz-blog.netlify.app</a><a href="https://bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Ubuntu Setup:

### Markdown Notes Template:

### Jquery Cheat Sheet:

### Useful Bash Commands:

### Python Cheat Sheet:

### Html Cheat Sheet:

### Git Cheat Sheet:

### Deploy React App To Heroku:

### Bash Aliases:

### JS Cheat Sheet:

### CSS Cheat Sheet:

#### If you found this guide helpful feel free to checkout my github/gists where I host similar content:

<a href="https://gist.github.com/bgoonz" class="markup--anchor markup--p-anchor">bgoonz’s gists · GitHub</a>

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz"><strong>bgoonz — Overview</strong><br />
<em>Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python | React | Node.js | Express | Sequelize…</em>github.com</a><a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

Or Checkout my personal Resource Site:

<a href="https://bgoonz-blog.netlify.app/" class="markup--anchor markup--p-anchor">https://bgoonz-blog.netlify.app/</a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [March 6, 2021](https://medium.com/p/f4314f3ba3ab).

<a href="https://medium.com/@bryanguner/a-collection-of-my-most-useful-gist-entries-f4314f3ba3ab" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.

A Comprehensive Deep Dive into React
====================================

An in-depth look into the world of React.

------------------------------------------------------------------------

### React in Depth: A Comprehensive Guide

#### A deep dive into the world of React.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*LnugLVhKbiGfSSHr" alt="Photo by Ferenc Almasi on Unsplash" class="graf-image" /><figcaption>Photo by <a href="https://unsplash.com/@flowforfrank?utm_source=medium&amp;utm_medium=referral" class="markup--anchor markup--figure-anchor">Ferenc Almasi</a> on <a href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral" class="markup--anchor markup--figure-anchor">Unsplash</a></figcaption></figure><a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b"><strong>ALLOFMYOTHERARTICLES</strong><br />
bryanguner.medium.com</a><a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

### Random Things to Remember

-   <span id="1e39">Using `()` implictly returns components.</span>
-   <span id="a547">Role of `index.js` is to *render* your application.</span>
-   <span id="c38f">The reference to `root` comes from a div in the body of your public HTML file.</span>
-   <span id="a364">State of a component is simply a regular JS Object.</span>
-   <span id="d64b">Class Components require `render()` method to return JSX.</span>
-   <span id="fa3d">Functional Components directly return JSX.</span>
-   <span id="4928">`Class` is `className` in React.</span>
-   <span id="e51a">When parsing for an integer just chain `Number.parseInt("123")`</span>
-   <span id="2924">Use ternary operator if you want to make a conditional inside a fragment.</span>

<!-- -->

    { x === y ? <div>Naisu</div> : <div>Not Naisu</div>; }

-   <span id="ccda">Purpose of `React.Fragment` is to allow you to create groups of children without adding an extra dom element.</span>

------------------------------------------------------------------------

### Front-End History

-   <span id="904c">React makes it easier for you to make front-end elements. A front-end timeline</span>
-   <span id="646a">Some noteworthy front end libraries that have been used in the past few years:</span>
-   <span id="febf">2005: Script.aculo.us</span>
-   <span id="d5ae">2005: Dojo</span>
-   <span id="0657">2006: YUI</span>
-   <span id="c1f9">2010: Knockout</span>
-   <span id="e742">2011: AngularJS</span>
-   <span id="ed7b">2012: Elm</span>
-   <span id="06e4">2013: React (Considered the standard front-end library)</span>
-   <span id="4ff0">React manages the creation and updating of DOM nodes in your Web page.</span>
-   <span id="53cd">All it does is dynamically render stuff into your DOM.</span>
-   <span id="c393">What it doesn’t do:</span>
-   <span id="3088">Ajax</span>
-   <span id="54ee">Services</span>
-   <span id="5e4a">Local Storage</span>
-   <span id="a437">Provide a CSS framework</span>
-   <span id="06e5">React is unopinionated</span>
-   <span id="721c">Just contains a few rules for developers to follow, and it just works.</span>
-   <span id="e2c0">JSX : Javascript Extension is a language invented to help write React Applications (looks like a mixture of JS and HTML)</span>
-   <span id="916b">Here is an overview of the difference between rendering out vanilla JS to create elements, and JSX:</span>

<!-- -->

    fetch("https://example.com/api/people")
      .then((response) => response.json())
      .then((people) => {
        const html = "<ul>";
        for (let person of data.people) {
          html += `<li>${person.lastName}, ${person.firstName}</li>`;
        }
        html += "</ul>";
        document.querySelector("#people-list").innerHTML = html;
      });

    function PeopleList(props) {
      return (
        <ul>
          $
          {props.people.map((person) => (
            <li>
              {person.lastName}, {person.firstName}
            </li>
          ))}
        </ul>
      );
    }
    const peopleListElement = document.querySelector("#people-list");
    fetch("https://example.com/api/people")
      .then((response) => response.json())
      .then((people) => {
        const props = { people };
        ReactDOM.render(<PeopleList props={props} />, peopleListElement);
      });

-   <span id="7ea4">This may seem like a lot of code but when you end up building many components, it becomes nice to put each of those functions/classes into their own files to organize your code. Using tools with React</span>
-   <span id="e220">`React DevTools` : New tool in your browser to see ow React is working in the browser</span>
-   <span id="9051">`create-react-app` : Extensible command-line tool to help generate standard React applications.</span>
-   <span id="af96">`Webpack` : In between tool for dealing with the extra build step involved.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*LHVHf7SPZ1t0UVAj" class="graf-image" /></figure>-   <span id="e0ad">HMR : (Hot Module Replacement) When you make changes to your source code the changes are delivered in real-time.</span>
-   <span id="923a">React Developers created something called `Flux Architecture` to moderate how their web page consumes and modifies data received from back-end API's.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*wR-lbD4zf45-IHoQ" class="graf-image" /></figure>-   <span id="b16e">Choosing React</span>
-   <span id="eefd">Basically, React is super important to learn and master.</span>

------------------------------------------------------------------------

### React Concepts and Features

There are many benefits to using React over just Vanilla JavaScript.

-   <span id="8107">`Modularity`</span>
-   <span id="15ac">To avoid the mess of many event listeners and template strings, React gives you the benefit of a lot of modularity.</span>
-   <span id="c1c5">`Easy to start`</span>
-   <span id="90ce">No specials tools are needed to use Basic React.</span>
-   <span id="9ec9">You can start working directly with `createElement` method in React.</span>
-   <span id="dd3c">`Declarative Programming`</span>
-   <span id="d3e6">React is declarative in nature, utilizing either it’s built-in createElement method or the higher-level language known as JSX.</span>
-   <span id="ba8b">`Reusability`</span>
-   <span id="a3c2">Create elements that can be re-used over and over. One-flow of data</span>
-   <span id="27d2">React apps are built as a combination of parent and child components.</span>
-   <span id="6da8">Parents can have one or more child components, all children have parents.</span>
-   <span id="26d8">Data is never passed from child to the parent.</span>
-   <span id="86be">`Virtual DOM` : React provides a Virtual DOM that acts as an agent between the real DOM and the developer to help debug, maintain, and provide general use.</span>
-   <span id="6747">Due to this usage, React handles web pages much more intelligently; making it one of the speediest Front End Libraries available.</span>

### ES6 Refresher

Exporting one item per file

-   <span id="5538">Use `export default` statement in ES6 to export an item. ES6</span>

<!-- -->

    export default class Wallet {
      // ...
    }
    // sayHello will not be exported
    function sayHello() {
      console.log("Hello!");
    }

CommonJS (Equivalent)

    class Wallet {
      // ...
    }
    // sayHello will not be exported
    function sayHello() {
      console.log("Hello!");
    }
    module.exports = Wallet;

Exporting multiple items per file

-   <span id="9a6e">Use just thw `export` keyword (without default) to export multiple items per file. ES6 (Better to export them individually like this, rather than bunching them all into an object)</span>

<!-- -->

    export class Wallet {
      // ...
    }
    export function sayHello() {
      console.log("Hello!");
    }
    export const sayHi = () => {
      console.log("Hi!");
    };
    class Wallet {
      // ...
    }
    function sayHello() {
      console.log("Hello!");
    }
    const sayHi = () => {
      console.log("Hi!");
    };
    export { Wallet, sayHello, sayHi };

CommonJS (Equivalent)

    class Wallet {
      // ...
    }
    function sayHello() {
      console.log("Hello!");
    }
    const sayHi = () => {
      console.log("Hi!");
    };
    module.exports = {
      Wallet,
      sayHello,
      sayHi,
    };

Importing with ES6 vs CommonJS

<figure><img src="https://cdn-images-1.medium.com/max/800/0*7EZESKf0XPbncXAY" class="graf-image" /></figure>-   <span id="18b1">Import statements in ES6 modules must always be at the top of the file, because all imports must occur before the rest of the file’s code runs. ES6</span>

<!-- -->

    import { Wallet } from "./wallet";
    import * as fs from "fs";
    const wallet = new Wallet();

CommonJS

    let { Wallet } = require("./wallet");
    const wallet = new Wallet();
    let fs = require("fs");

Unnamed default imports

-   <span id="75e2">You can name unnamed items exported with export default any name when you import them.</span>

<!-- -->

    // exporting
    export default class Wallet {
      // ...
    }
    // importing
    import Money from "wallet.js";
    const wallet = new Money();

-   <span id="5042">Just remember if you use `export` instead of `export default` then your import is already named and cannot be renamed.</span>

<!-- -->

    // exporting
    export class Wallet {
      // ...
    }
    // importing
    import { Wallet } from "wallet.js";
    const wallet = new Wallet();

Aliasing imports

-   <span id="3535">Use as asterisk to import an entire module’s contents.</span>
-   <span id="3f1c">Keep in mind you must use an `as` keyword to refer to it later.</span>

<!-- -->

    // export
    export function sayHello() {
      console.log("Hello!");
    }
    export const sayHi = () => {
      console.log("Hi!");
    };
    //import
    import * as Greetings from "greetings.js";
    Greetings.sayHello(); // Hello!
    Greetings.sayHi(); // Hi!

-   <span id="bfbc">You can also name identically named functions or items from different files.</span>

<!-- -->

    import { Wallet as W1 } from "./wallet1";
    import { Wallet as W2 } from "./wallet2";
    const w1 = new W1();
    const w2 = new W2();

Browser support for ES6 Modules

-   <span id="69b4">ES6 Modules can only be used when a JS file is specified as a module. `<script type="module" src="./wallet.js"></script>`</span>
-   <span id="4f5c">You can get browser support for ES6 modules by adding module into your script tag.</span>

------------------------------------------------------------------------

### Notes

### JSX In Depth

-   <span id="2a0d">Remember that JSX is just syntactic sugar for the built in `React.createElement(component, props, ...children)`</span>
-   <span id="1532">React Library must always be in scope from your JSX code.</span>
-   <span id="72b2">Use Dot Notation for JSX Type</span>
-   <span id="0cbc">User-Defined Components Must Be Capitalized `<Foo />` vs `<div>`</span>
-   <span id="553a">Cannot use a general expression as the React element type. (`Incorrect`)</span>

<!-- -->

    function Story(props) {
      // Wrong! JSX type can't be an expression.
        return <components[props.storyType] story={props.story} />;
      };

(`Corrected`)

    function Story(props) {
      // Correct! JSX type can be a capitalized variable.
      const SpecificStory = components[props.storyType];
      return <SpecificStory story={props.story} />;
    }

Props in JSX

-   <span id="e549">Several ways to specify props in JSX.</span>
-   <span id="257d">`Javascript Expressions as Props`</span>

<!-- -->

    <MyComponent foo={1 + 2 + 3 + 4} />

-   <span id="57f8">`String Literals`</span>

<!-- -->

    <MyComponent message="hello world" /> <MyComponent message={'hello world'} /> <MyComponent message="&lt;3" /> <MyComponent message={'❤'} />

-   <span id="48df">`Props Default to “True”`</span>

<!-- -->

    <MyTextBox autocomplete /> <MyTextBox autocomplete={true} />

-   <span id="2072">`Spread Attributes`</span>

<!-- -->

    function App1() { return <Greeting firstName="Ben" lastName="Hector" />; } function App2() { const props = { firstName: "Ben", lastName: "Hector" }; return <Greeting {…props} />; }

Children in JSX

-   <span id="2238">`props.children` : The content between opening and closing tag. JavaScript Expressions as Children</span>

<!-- -->

    function Item(props) {
      return <li>{props.message}</li>;
    }
    function TodoList() {
      const todos = ["finish doc", "submit pr", "nag dan to review"];
      return (
        <ul>
          {todos.map((message) => (
            <Item key={message} message={message} />
          ))}
        </ul>
      );
    }

Functions as Children

-   <span id="bf0a">`props.children` works like any other prop, meaning it can pass any sort of data.</span>

<!-- -->

    // Calls the children callback numTimes to produce a repeated component
    function Repeat(props) {
      let items = [];
      for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
      }
      return <div>{items}</div>;
    }
    function ListOfTenThings() {
      return (
        <Repeat numTimes={10}>
          {(index) => <div key={index}>This is item {index} in the list</div>}
        </Repeat>
      );
    }

Booleans, Null, and Undefined Are Ignored

-   <span id="7017">`false`, `null`, `undefined`, and `true` are all valid children.</span>
-   <span id="5af2">They will not render.</span>
-   <span id="10dc">You can use these to conditionally render items.</span>

<!-- -->

    <div>
      {showHeader && <Header />}
      <Content />
    </div>

-   <span id="fa28">In this example, the component will only render if `showHeader` evals to True.</span>

<!-- -->

    // Before work-around
    <div>
      {props.messages.length &&
        <MessageList messages={props.messages} />
      }
    </div>
    // After work-around
    <div>
      {props.messages.length > 0 &&
        <MessageList messages={props.messages} />
      }
    </div>

-   <span id="3701">Note that certain falsy values such as zero will still be rendered by React, you can work around this by ensuring situations like the above eval. into a boolean.</span>
-   <span id="9586">In the times you want booleans to be rendered out, simply convert it into a string first.</span>

<!-- -->

    <div>My JavaScript variable is {String(myVariable)}.</div>

### Reconciliation

The Diffing Algorithm

-   <span id="76c4">`Diffing` : When the state of a component changes React creates a new virtual DOM tree.</span>
-   <span id="9a73">Elements of Different Types</span>
-   <span id="d680">Every time the root elements have different types, React tears down the old tree and builds the new tree from scratch.</span>
-   <span id="84a6">DOM Elements Of the Same Type</span>
-   <span id="4b94">When comparing two DOM elements of the same type, React keeps the same underlying DOM node and only updates the changes attributes.</span>

<!-- -->

    <div className=”before” title=”stuff” /> <div className=”after” title=”stuff” />

    <div style={{ color: “red”, fontWeight: “bold” }} /> <div style={{color: ‘green’, fontWeight: ‘bold’}} />

-   <span id="0a0c">Component Elements Of The Same Type</span>
-   <span id="cf3a">When components update, instances will remain the same, so that state maintains across renders.</span>
-   <span id="b8ab">React will only update the props, to match the new element.</span>
-   <span id="82f3">Recursing On Children</span>
-   <span id="4a59">React will iterate both lists of children and generate a mutation whenever there’s a difference.</span>
-   <span id="74a8">This is why we use `keys`.</span>
-   <span id="381c">Makes it easier for React to match children in the original tree with children in the subsequent tree.</span>
-   <span id="f1f5">Tradeoffs</span>
-   <span id="e98a">Important to remember that reconciliation algorithm is an *implementation detail*.</span>
-   <span id="7f57">Re-rendering only to apply the differences following the rules stated in the previous sections.</span>

### Typechecking With PropTypes

-   <span id="0bc0">As your application grows, you can use React’s `typechecking` to catch bugs.</span>
-   <span id="638c">`propTypes` is a special property to run typechecking.</span>
-   <span id="e725">exports range of built in validators to ensure your received data is valid.</span>
-   <span id="f590">propTypes is only checked in development mode.</span>

<!-- -->

    import PropTypes from "prop-types";
    class Greeting extends React.Component {
      render() {
        return <h1>Hello, {this.props.name}</h1>;
      }
    }
    Greeting.propTypes = {
      name: PropTypes.string,
    };

Requiring Single Child

-   <span id="e2db">Use `PropTypes.element` to specify only a single child can be passed to a component as children.</span>

<!-- -->

    import PropTypes from "prop-types";
    class MyComponent extends React.Component {
      render() {
        // This must be exactly one element or it will warn.
        const children = this.props.children;
        return <div>{children}</div>;
      }
    }
    MyComponent.propTypes = {
      children: PropTypes.element.isRequired,
    };

Default Prop Values

-   <span id="7d3d">Use `defaultProps` to assign default values for props.</span>

<!-- -->

    class Greeting extends React.Component {
      render() {
        return <h1>Hello, {this.props.name}</h1>;
      }
    }
    // Specifies the default values for props:
    Greeting.defaultProps = {
      name: "Stranger",
    };
    // Renders "Hello, Stranger":
    ReactDOM.render(<Greeting />, document.getElementById("example"));

    class Greeting extends React.Component {
      static defaultProps = {
        name: 'stranger'
      }
      render() {
        return (
          <div>Hello, {this.props.name}</div>
        )
      }

------------------------------------------------------------------------

### Notes

### React Router Introduction

-   <span id="48a7">`React Router` is the answer for rendering different components for different pages.</span>
-   <span id="78b3">A front-end library that allows you to control which components to display using the browser location.</span>
-   <span id="aa2a">`Client-side Routing` Getting started with routing</span>
-   <span id="0940">Install React Router with:</span>
-   <span id="742a">npm install — save react-router-dom@⁵.1.2</span>
-   <span id="f07f">Import `Browser Router` from package.</span>
-   <span id="9e4e">import { BrowserRouter } from “react-router-dom”;</span>
-   <span id="cb01">`BrowserRouter` is the primary component of the router that wraps your route hierarchy.</span>
-   <span id="adfa">Wrap it around components.</span>
-   <span id="0276">Creates a `React Context` that passes routing information down to all its descendant components.</span>
-   <span id="dd45">You can also use `HashRouter`, where it would generate a hash before the endpoint. Creating frontend routes</span>
-   <span id="37c2">React Router helps your app render specific components based on the URL.</span>
-   <span id="54c4">The most common component is `<Route>`</span>
-   <span id="500a">Wrapped around another component, causing the comp. to only render if the a certain URL is matched.</span>
-   <span id="5a94">`Props` : path, component, exact, and \[render\]</span>
-   <span id="9f06">Browser Router can only have a single child component.</span>
-   <span id="6305">The Browser Router wraps all routes within a parent div element.</span>

<!-- -->

    const Root = () => {
      const users = {
        1: { name: "Andrew" },
        2: { name: "Raymond" },
      };
      return (
        <BrowserRouter>
          <div>
            <h1>Hi, I'm Root!</h1>
            <Route exact path="/" component={App} />
            <Route path="/hello" render={() => <h1>Hello!</h1>} />
            <Route path="/users" render={() => <Users users={users} />} />
          </div>
        </BrowserRouter>
      );
    };

-   <span id="c057">component</span>
-   <span id="2dcc">Indicates component to render.</span>
-   <span id="740c">path</span>
-   <span id="3030">Indicates path to render a specific component.</span>
-   <span id="0741">exact</span>
-   <span id="52cb">Tells route to not pattern match and only render a certain route exclusively to it’s associated component.</span>
-   <span id="cb93">render</span>
-   <span id="c702">Optional prop that takes in a function to be called.</span>
-   <span id="594b">Causes extra work for React.</span>
-   <span id="5320">Preferred for inline rendering of simple functional components.</span>
-   <span id="0d3e">Difference between `component` and `render` is that component returns new JSX that be re-mounted, but render returns the JSX that will be mounted only once.</span>
-   <span id="4a08">// This inline rendering will work, but is unnecessarily slow. &lt;Route path=”/hello” component={() =&gt; &lt;h1&gt;Hello!&lt;/h1&gt;} /&gt; // This is the preferred way for inline rendering. &lt;Route path=”/hello” render={() =&gt; &lt;h1&gt;Hello!&lt;/h1&gt;} /&gt;</span>
-   <span id="a2d3">Also useful if you need to pass in specific props to a component.</span>
-   <span id="e09f">// \`users\` to be passed as a prop: const users = { 1: { name: “Andrew” }, 2: { name: “Raymond” }, }; &lt;Route path=”/users” render={() =&gt; &lt;Users users={users} /&gt;} /&gt;;</span>

Route path params

-   <span id="3d09">Your component’s props can hold information about URL’s parameters.</span>
-   <span id="52f3">Will match segments starting at `:` to the next `/`, `?`, `#`.</span>

<!-- -->

    <Route
      path="/users/:userId"
      render={(props) => <Profile users={users} {...props} />}
    />

-   <span id="f2b4">`{...props}` spreads out the router's props.</span>
-   <span id="1edb">`props.match.params` is used to access the match prop's parameters.</span>
-   <span id="b6a9">Useful keys on the `match` object:</span>
-   <span id="290f">`isExact` : boolean that tells you whether or not the URL exactly matches the path.</span>
-   <span id="27ea">`url` : the currentURL</span>
-   <span id="b979">`path` : Route path it matched against (w/o wildcards)</span>
-   <span id="6c59">`params` : Matches for the individual wildcard segments.</span>

------------------------------------------------------------------------

### Navigation

React Router Navigation

-   <span id="a548">`Link`, `NavLink`, `Redirect`, `history` props of React Router are used to help your user navigate routes. Adding links for navigation</span>
-   <span id="643f">Issues on-click navigation event to a route defined in app.</span>
-   <span id="949d">Usage renders an anchor tag with a correctly set `href` attribute.</span>

<!-- -->

    import { BrowserRouter, Route, Link } from "react-router-dom";

-   <span id="b5a5">`Link` takes two properties: `to` and `onClick`.</span>
-   <span id="995b">`to` : route location that points to an absolute path.</span>
-   <span id="978c">`onClick` : clickHandler.</span>
-   <span id="b8c0">`NavLink` works just like `Link` but has a bit of extra functionality.</span>
-   <span id="6334">Adds extra styling, when the path it links to matches the current path.</span>
-   <span id="07b8">As it’s name suggests, it is used to Nav Bars.</span>
-   <span id="8a33">Takes three props:</span>
-   <span id="e501">`activeClassName` : allows you to set a CSS class name for styling. (default set to 'active')</span>
-   <span id="81da">`activeStyle` : style object that is applied inline when it's `to` prop. matches the current URL.</span>
-   <span id="8c71">`exact` prop is a boolean that defaults to false; you can set it to true to apply requirement of an exact URL match.</span>
-   <span id="755b">exact can also be used as a flag instead of a reg. property value.</span>
-   <span id="dd12">benefit of adding this is so that you don’t trigger other matches. Switching between routes</span>
-   <span id="4fb6">`<Switch>` : Component allows you to only render one route even if several match the current URL.</span>
-   <span id="7be7">You may nest as many routes as you wish but only the first match of the current URL will be rendered.</span>
-   <span id="3f8a">Very useful if we want a default component to render if none of our routes match.</span>

<!-- -->

    <Switch>
      <Route path="some/url" component={SomeComponent} />
      <Route path="some/other/url" component={OtherComponent} />
      <Route component={DefaultComponent} />
    </Switch>

-   <span id="b901">`DefaultComponent` will only render if none of the other URLs match up.</span>
-   <span id="21a3">`<Redirect>` : Helps redirect users.</span>
-   <span id="ee88">Only takes a single prop: `to`.</span>

<!-- -->

    <Route
      exact
      path="/"
      render={() => (this.props.currentUser ? <Home /> : <Redirect to="/login" />)}
    />

History

-   <span id="6456">`History` allows you to update the URL programmatically.</span>
-   <span id="bac6">Contains two useful methods:</span>
-   <span id="9b00">`push` : Adds a new URL to the end of the history stack.</span>
-   <span id="d539">`replace` : Replaces the current URL on the history stack, so the back button won't take you to it.</span>

<!-- -->

    // Pushing a new URL (and adding to the end of history stack):
    const handleClick = () => this.props.history.push("/some/url");
    // Replacing the current URL (won't be tracked in history stack):
    const redirect = () => this.props.history.replace("/some/other/url");

------------------------------------------------------------------------

### Nested Routes

Why nested routes?

-   <span id="6403">Create routes that tunnel into main components vs getting rendered on the main page as it’s own thing. What are nested routes?</span>

<!-- -->

    const Profile = (props) => {
      // Custom call to database to fetch a user by a user ID.
      const user = fetchUser(props.match.params.userId);
      const { name, id } = user;
      return (
        <div>
          <h1>Welcome to the profile of {name}!</h1>
          <Link to={`/users/${id}/posts`}>{name}'s Posts</Link>
          <Link to={`/users/${id}/photos`}>{name}'s Photos</Link>
          <Route path="/users/:userId/posts" component={UserPosts} />
          <Route path="/users/:userId/photos" component={UserPhotos} />
        </div>
      );
    };

Alt. version using `props.match`

    // Destructure `match` prop
    const Profile = ({ match: { url, path, params }) => {
      // Custom call to database to fetch a user by a user ID.
      const user = fetchUser(params.userId);
      const { name, id } = user;
      return (
        <div>
          <h1>Welcome to the profile of {name}!</h1>
          <Link to={`${url}/posts`}>{name}'s Posts</Link>
          <Link to={`${url}/photos`}>{name}'s Photos</Link>
          <Route path={`${path}/posts`} component={UserPosts} />
          <Route path={`${path}/photos`} component={UserPhotos} />
        </div>}
      );
    };

-   <span id="03fb">As you can see above, our end URL isn’t even defined until we apply those flexible values in.</span>

------------------------------------------------------------------------

### React Builds

-   <span id="0fae">`Build` : Process of converting code into something that can actually execute or run on the target platform.</span>
-   <span id="6fdb">In regards to React, the minimum a build should do is convert JSX to something that browsers can understand. Reviewing common terminology</span>
-   <span id="779d">`Linting` : Process of using a tool to analyze your code to catch common errors, bugs, inconsistencies etc...</span>
-   <span id="f1e5">`Transpilation` : Process of converting source code, like JS, from one version to another.</span>
-   <span id="9f9f">`Minification` : Process of removing all unnecessary characters in your code.</span>
-   <span id="57df">`Bundling` : Process of combining multiple code files into a single file.</span>
-   <span id="d052">`Tree Shaking` : Process of removing unused or dead code from your application before it's bundled. Configuration or code?</span>
-   <span id="ce13">`Configuration` allows developers to create build tasks by declaring either JSON, XML, or YAML without explicitly writing every step in the process.</span>
-   <span id="16a6">`Coding` or `Scripting` simply requires code. Babel and webpack (yes, that's intentionally a lowercase 'w')</span>
-   <span id="4363">`Babel` : Code Transpiler that allows you to use all of the latest features and syntax wihtout worrying about what browsers support what.</span>
-   <span id="804b">`webpack` : Allows developers to use JS modules w/o requiring users to use a browser that natively supports ES modules.</span>
-   <span id="77f2">Create React App uses webpack and Babel under the hood to build applications. The Create React App build process</span>
-   <span id="222f">What happens when you run `npm start`:</span>

1.  <span id="d245">.env variables are loaded.</span>
2.  <span id="6209">list of browsers to support are checked.</span>
3.  <span id="1c34">config’d HTTP port checked for availability.</span>
4.  <span id="950b">application compiler is configured and created.</span>
5.  <span id="8e30">`webpack-dev-starter` is started</span>
6.  <span id="48cc">`webpack-dev-starter` compiles app.</span>
7.  <span id="68ad">`index.html` is loaded into browser</span>
8.  <span id="e670">file watcher is started to watch for changes. Ejecting</span>

-   <span id="428b">There is a script in Create React App called `eject` that allows you to 'eject' your application and expose all the hidden stuff. Preparing to deploy a React application for production</span>
-   <span id="eb79">Defining Env Variables</span>

<!-- -->

    REACT_APP_FOO: some value
    REACT_APP_BAR: another value

    console.log(process.env.REACT_APP_FOO);

    Can be referenced in your index.html like so: <title>%REACT_APP_BAR%</title>

Configuring the supported browsers

    {
      "browserslist": {
        "production": [
          ">0.2%",
          "not dead",
          "not op_mini all"
        ],
        "development": [
          "last 1 chrome version",
          "last 1 firefox version",
          "last 1 safari version"
        ]
      }
    }

-   <span id="8a03">If you specify older browsers it will affect how your code get’s transpiled. Creating a production build</span>
-   <span id="fee3">Run `npm run build` to create a production build.</span>
-   <span id="bdaf">Bundles React in production mode and optimizes the build for the best performance.</span>

------------------------------------------------------------------------

### Notes

### Introduction to React

-   <span id="7224">Simply a nice library that turns data into DOM.</span>
-   <span id="a9de">`Tree Diffing` : Fast comparison and patching of data by comparing the current virtual DOM and new virtual DOM - updating only the pieces that change.</span>
-   <span id="1bbc">`It's just a tree with some fancy diffing`</span>

------------------------------------------------------------------------

### Create Element

From JavaScript To DOM

-   <span id="cae8">The `React.createElement` function has the following form:</span>

<!-- -->

    React.createElement(type, [props], [...children]);

-   <span id="1688">`Type` : Type of element to create, i.e. a string for an HTML element or a reference to a function or class that is a React component.</span>
-   <span id="3249">`Props` : Object that contains data to render the element.</span>
-   <span id="56ab">`Children` : Children of the elemet, as many as you want. Creating elements</span>
-   <span id="ee64">Our rendering goal:</span>

<!-- -->

    <ul>
      <li class="selected">
        <a href="/pets">Pets</a>
      </li>
      <li>
        <a href="/owners">Owners</a>
      </li>
    </ul>

-   <span id="eb8b">There are five tags to create:</span>
-   <span id="ea28">One `ul`</span>
-   <span id="a4ba">Two `li`</span>
-   <span id="de01">Two `a`</span>
-   <span id="90b5">There are certain attributes we want to appear in the DOM for these tags as well:</span>
-   <span id="dab5">Each `li` has a `class` (or `className` in React)</span>
-   <span id="e88e">Both `a` ele's have `href` attributes</span>
-   <span id="fd8c">Also keep in mind the parent child relationships happening between the tags.</span>
-   <span id="9893">`ul` is the parent of both `li`</span>
-   <span id="eafa">Each `li` has an `a` element as a child</span>
-   <span id="84cc">Each `a` has a `text content` child</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*8ls0PmtREELbf5Wm" class="graf-image" /></figure>React.createElement(
      "ul",
      null,
      React.createElement(
        "li",
        { className: "selected" },
        React.createElement("a", { href: "/pets" }, "Pets")
      ),
      React.createElement(
        "li",
        null,
        React.createElement("a", { href: "/owners" }, "Owners")
      )
    );

Converting to virtual DOM

-   <span id="e7d4">After you set up your `React.createElement`, you use `React.render` to take the value returned from cE and a DOM node to insert into the conversion of the real DOM.</span>

<!-- -->

    // Put the element tree in a variable
    const navList = React.createElement(
      "ul",
      null,
      React.createElement(
        "li",
        { className: "selected" },
        React.createElement("a", { href: "/pets" }, "Pets")
      ),
      React.createElement(
        "li",
        null,
        React.createElement("a", { href: "/owners" }, "Owners")
      )
    );
    // Get a DOM node for React to render to
    const mainElement = document.querySelector("main");
    // Give React the element tree and the target
    ReactDOM.render(navList, mainElement);

-   <span id="2cbc">JS Code =&gt; Virtual DOM =&gt; Real Dom Updates</span>
-   <span id="25d5">If you call React.render a second or multiple times it just checks the existing Virtual DOM and it knows which smaller areas to change. Thinking in Components</span>
-   <span id="fe61">Components are pieces of reusable front-end pieces.</span>
-   <span id="bffa">Components should be Single Responsibility Principle compliant.</span>

------------------------------------------------------------------------

### Create Element

`React.createElement Demo`

-   <span id="a288">Can import non-local dependencies with `import 'package-link'`</span>

<!-- -->

    const App = () => React.createElement("h1", null, "Hello, Programmers!");
    const target = document.querySelector("main");
    const app = React.createElement(App, null);
    // Give React the element tree and the target
    ReactDOM.render(app, target);

-   <span id="0693">Remember when importing modules from other files you have to denote the file type in the import statement. HTML Original</span>

<!-- -->

    <section class="clue">
      <h1 class="clue__title">Clue$ 268530</h1>
      <div class="clue__question">
          2009: I dreamed a Dream
      </div>
      <div class="clue__category">
          <<unparsed>>
      </div>
      <div class="clue__amount">
          $800
      </div>
    </section>

React Version

    const Clue = () =>
      React.createElement(
        "section",
        { className: "clue" },
        React.createElement("h1", { className: "clue__title" }, "Title"),
        React.createElement("div", { className: "clue__question" }, "?"),
        React.createElement("div", { className: "clue__category" }, "Category"),
        React.createElement("div", { className: "clue__amount" }, "$800")
      );

-   <span id="f587">Because `class` is a reserved keyword in JS, in React we can use `className` to assign a class to an element.</span>
-   <span id="4d51">Remember the data that goes into createElement: element type, data to pass into the element, and then children.</span>
-   <span id="8199">`props` : Properties;</span>
-   <span id="6b53">To handle certain values that are initially undefined, we can use `defaultProps`.</span>

<!-- -->

    Clue.defaultProps = {
      category: {},
    };

-   <span id="4abe">You can change in the devTools Network tab the internet speed to check for values that may be undefined to hangle with defaultProps.</span>
-   <span id="79e3">If we fetch multiple pieces of data, we can render many things by using `map`.</span>
-   <span id="06f2">You need to assign a unique key to each of the clues.</span>
-   <span id="c12e">We need to keep track of them individually so that React can easily refer to a specific one if there is an issue. `clue => { key:clue.id, ...clue }`</span>

<!-- -->

    const App = (props) =>
      React.createElement(
        "h1",
        null,
        props.clues.map((clue) =>
          React.createElement(Clue, { key: clue.id, ...clue })
        )
      );
    export default App;

-   <span id="1dd5">Note: JSX is preferred over React.createElement;</span>

------------------------------------------------------------------------

### Notes from Hello Programmer Exercise

-   <span id="1fb8">When you import modules from websites they must have CORs activated.</span>
-   <span id="1ef6">These import statements, import `global variables`.</span>
-   <span id="6613">When we want to move our code into production we need to change the imports into the production minified versions.</span>

<!-- -->

    import "https://unpkg.com/react@16/umd/react.production.min.js";
    import "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js";

-   <span id="0046">While we will never actually be creating full apps with just React.createElement =&gt; it is the enginer that is running under the hood!</span>

<!-- -->

    import "https://unpkg.com/react@16/umd/react.development.js";
    import "https://unpkg.com/react-dom@16/umd/react-dom.development.js";
    const Links = () =>
      React.createElement(
        "ul",
        { id: "nav-links" },
        React.createElement(
          "li",
          { className: "is-selected" },
          React.createElement("a", { href: "http://appacademy.io" }, "App Academy")
        ),
        React.createElement(
          "li",
          null,
          React.createElement("a", { href: "https://aaonline.io" }, "a/A Open")
        )
      );
    // Set up React Element: Type, Imported Data, Child (Child is Text in this Scenario)
    // HelloWorld is a function based component
    const HelloWorld = () => React.createElement("h1", null, "Hello, Programmers");
    const AllTogether = () =>
      React.createElement(
        "div",
        null,
        React.createElement(HelloWorld, null),
        React.createElement(Links, null)
      );
    // Target the Element to append new Ele
    const target = document.querySelector("main");
    // Assign your 'App' to your created Elements
    // We are creating an element from the HelloWorld function.
    const app = React.createElement(AllTogether, null);
    // Render from the Virtual Dom to the Actual Dom
    ReactDOM.render(app, target);

------------------------------------------------------------------------

### Introduction to JSX

-   <span id="a5ee">`JSX` : Javascript Extension, a new language created by React developers to have an easier way of interacting with the React API. How to use JSX</span>
-   <span id="24bf">We will use `babel` to convert version of modern JS into an older version of JS. React Create Element</span>

<!-- -->

    const ExampleComponent = (props) =>
      React.createElement(
        React.Fragment,
        null,
        React.createElement("h1", null, "Hello!"),
        React.createElement("img", { src: "https://via.placeholder.com/150" }),
        React.createElement("a", { href: props.searchUrl }, props.searchText)
      );

JSX Version

    const ExampleComponent = (props) => (
      <React.Fragment>
        <h1>Hello!</h1>
        <img src="https://via.placeholder.com/150" />
        <a href={props.searchUrl}>{props.searchText}</a>
      </React.Fragment>
    );

-   <span id="b00d">Keep in mind that self closing tags in React must have a `forward slash` to close it.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*NNxuFMF-sOL8Wvdl" class="graf-image" /></figure>-   <span id="346d">Properties and Data</span>

<!-- -->

    <img src="https://via.placeholder.com/150" />;
    // becomes..
    React.createElement("img", { src: "https://via.placeholder.com/150" });
    // if we want to pass in data vs just a string literal
    <a href={props.searchUrl}>{props.searchText}</a>;
    // so it becomes..
    React.createElement("a", { href: props.searchUrl }, props.searchText);
    // if you want the text search uppercase..
    <a href={props.searchUrl}>{props.searchText.toUpperCase()}</a>;

-   <span id="467c">Comments in JSX have the following syntax:</span>

<!-- -->

    <div>
      <h2>This is JSX</h2>
      {/* This is a comment in JSX */}
    </div>

-   <span id="8cb8">`Property Names`:</span>
-   <span id="837b">`checked` : Attribute of input components such as checkbox or radio, use it to set whether the component is checked or not.</span>
-   <span id="aec0">`className` : Used to specify a CSS class.</span>
-   <span id="2f92">`dangerouslySetInnerHTML` : React's equivalent of innerHTML because it is risky to cross-site scripting attacks.</span>
-   <span id="3eab">`htmlFor` : Because `for` is protected keyword, React elements use this instead.</span>
-   <span id="9194">`onChange` : Event fired whenever a form field is changed.</span>
-   <span id="014a">`style` : Accepts a JS object with camelCase properties rather than a CSS string.</span>
-   <span id="76d8">`value` : Supported by Input, Select, and TextArea components; use it to set the value of the component.</span>
-   <span id="22c2">Note: React uses camel-case!!! The JSX semicolon gotcha</span>

<!-- -->

    function App() {
      return (
        <div>
          <h1>Hello!</h1>
          <div>Welcome to JSX.</div>
        </div>
      );
    }

create Element equivalent

    is equivalent to
    function App() {
      return (
        React.createElement(
          'div',
          null,
          React.createElement('h1', null, 'Hello!'),
          React.createElement('div', null, 'Welcome to JSX.'),
        )
      );
    }

-   <span id="dbc1">We wrap what want to return in parenthesis so JS doesn’t auto add semi-colons after every line and run the code incorrectly.</span>
-   <span id="62c0">Just remember if you decided to use the return keyword in a function to ‘return some JSX’, then make sure you wrap the JSX in parenthesis.</span>

------------------------------------------------------------------------

`npx create-react-app my-app`

-   <span id="8ad9">Single line used to initiate a React application.</span>
-   <span id="3cb1">React has a great toolchain where you can see changes live as you’re editing your application.</span>
-   <span id="c1d0">React errors will be rendered directly onto the browser window.</span>
-   <span id="1365">A downside is that it installs a lot of bloat files.</span>
-   <span id="aaed">Examples of React create Element and JSX equivalent</span>

<!-- -->

    React.createElement(
      "a",
      {
        className: "active",
        href: "https://appacademy.io",
      },
      "App Academy"
    );
    // JSX Version
    <a className="active" href="https://appacademy.io">
      App Academy
    </a>;

    React.createElement(
      OwnerDetails,
      {
        owner: props.data.owner,
        number: props.index + 1,
      },
      props.name
    );
    // JSX Version
    <OwnerDetails owner={props.data.owner} number={props.index + 1}>
      {props.name}
    </OwnerDetails>;

More Complex JSX Example

    const BookPanel = (props) => {
      <section className="book" id={`book-${props.id}`}>
        <h1 className="book__title">{props.title}</h1>
        <img src={props.coverUrl} />
        <div className="book__desc">{props.description}</div>
      </section>;
    };

------------------------------------------------------------------------

### Notes

### Using Custom CRA Templates

Using a Custom Template `npx create-react-app my-app --template @appacademy/simple`

-   <span id="9607">Keep in mind that using `create-react-app` automatically initializes a git repository for you!</span>
-   <span id="f0fe">App Academy custom template for creating a react app.</span>
-   <span id="1b4e">If using the default react create project you can delete the following files:</span>
-   <span id="ef1c">favicon.ico</span>
-   <span id="627b">robots.txt</span>
-   <span id="3b34">logo192.png</span>
-   <span id="9b50">logo512.png</span>
-   <span id="8101">manifest.json</span>
-   <span id="77db">You can also simplify the `html` file into:</span>

<!-- -->

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>React App</title>
      </head>
      <body>
        <div id="root"></div>
      </body>
    </html>

Simplifying the src folder

-   <span id="ac69">Remove: App.css App.test.js logo.svg serviceWorker.js setupTests.js</span>
-   <span id="064f">Update the Following Files:</span>

<!-- -->

    // ./src/App.js
    import React from "react";
    function App() {
      return <h1>Hello world!</h1>;
    }
    export default App;
    ``;

    // ./src/index.js
    import React from "react";
    import ReactDOM from "react-dom";
    import "./index.css";
    import App from "./App";
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById("root")
    );

------------------------------------------------------------------------

### React Class Components

Class Components

-   <span id="b5e6">You can write React components using ES2015 Classes: Function Component</span>

<!-- -->

    // ./src/Message.js
    import React from "react";
    const Message = (props) => {
      return <div>{props.text}</div>;
    };
    export default Message;

ES2015 Version

    // ./src/Message.js
    import React from "react";
    class Message extends React.Component {
      render() {
        return <div>{this.props.text}</div>;
      }
    }
    export default Message;

-   <span id="ae33">We can access props within a `class component` by using `this.props`</span>
-   <span id="0b60">Keep in mind Class Components are used just like function components.</span>

<!-- -->

    // ./src/index.js
    import React from "react";
    import ReactDOM from "react-dom";
    import Message from "./Message";
    ReactDOM.render(
      <React.StrictMode>
        <Message text="Hello world!" />
      </React.StrictMode>,
      document.getElementById("root")
    );

Setting and accessing props

    class Message extends React.Component {
      constructor(props) {
        super(props);
        // TODO Initialize state, etc.
      }
      render() {
        return <div>{this.props.text}</div>;
      }
    }

-   <span id="cd5a">If we define a constructor method in our Class Component, we have to define the `super` method with `props` passed through it.</span>
-   <span id="8bf7">Side Note: Before React used ES2015 Classes, it used `React.createclass` function, if you ever need to use this antiquated method make sure you install a module called `create-react-class` Stateful components</span>
-   <span id="4b12">One of the major reasons why you would choose to use a Class Component over a Function Component is to add and manage local or internal state to your component.</span>
-   <span id="8e82">Second of the major reasons is to be able to use a Class Component’s lifecycle methods. What is state?</span>
-   <span id="7fab">Props are data that are provided by the consumer or caller of the component.</span>
-   <span id="98f4">Not meant to be changed by a component.</span>
-   <span id="c6a9">State is data that is `internal` to the component.</span>
-   <span id="3e89">Intended to be updated or mutated. When to use state</span>
-   <span id="c03f">*Only Use State when it is absolutely necessary*</span>
-   <span id="204b">If the data never changes, or if it’s needed through an entire application use props instead.</span>
-   <span id="0b53">State is more often used when creating components that retrieve data from APIs or render forms.</span>
-   <span id="1b6b">The general rule of thumb: If a component doesn’t need to use state or lifecyle methods, it should be prioritized as a `function component`.</span>
-   <span id="d708">Functional:Stateless || Class:Stateful Initializing state</span>
-   <span id="e5d5">Use a class constructor method to initialize `this.state` object. // Application Entry Point</span>

<!-- -->

    // ./src/index.js
    import React from 'react'
    import ReactDOM from 'react-dom';
    import RandomQuote from './RandomQuote';
    ReactDOM.render(
      <React.StrictMode>
        <RandomQuote />
      </React.StrictMode>
      document.getElementById('root');
    )

// Class Component: RandomQuote

    import React from "react";
    class RandomQuote extends React.Component {
      constructor() {
        super();
        const quotes = [
          "May the Force be with you.",
          "There's no place like home.",
          "I'm the king of the world!",
          "My mama always said life was like a box of chocolates.",
          "I'll be back.",
        ];
        this.state = {
          quotes,
          currentQuoteIndex: this.getRandomInt(quotes.length);
        }
      }
      getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      render() {
        return (
          <div>
            <h2>Random Quote</h2>
            <p>{this.state.quotes[this.state.currentQuoteIndex]}</p>
          </div>
        )
      }
    }
    export default RandomQuote;

Updating State

-   <span id="3fdc">Let’s say we want to update our state with a new quote.</span>
-   <span id="eddc">We can set up event listeners in React similarly to how we did them before.</span>
-   <span id="106c">&lt;button type=”button” onClick={this.changeQuote}&gt; Change Quote &lt;/button&gt;</span>
-   <span id="a77a">`onClick` is the event listener.</span>
-   <span id="f406">`{this.changeQuote}` is the event handler method.</span>
-   <span id="7dca">Our Class Component File should now look like this with the new additions:</span>

<!-- -->

    import React from "react";
    class RandomQuote extends React.Component {
      constructor() {
        super();
        const quotes = [
          "May the Force be with you.",
          "There's no place like home.",
          "I'm the king of the world!",
          "My mama always said life was like a box of chocolates.",
          "I'll be back.",
        ];
        this.state = {
          quotes,
          currentQuoteIndex: this.getRandomInt(quotes.length);
        }
      }
      changeQuote = () => {
        const newIndex = this.getRandomInt(this.state.quotes.length);
        // Setting the 'new state' of currentQuoteIndex state property
        // to newly generated random index #.
        this.setState({
          currentQuoteIndex: newIndex;
        })
      }
      getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      render() {
        return (
          <div>
            <h2>Random Quote</h2>
            <p>{this.state.quotes[this.state.currentQuoteIndex]}</p>
            <button type="button" onClick={this.changeQuote}>
              Change Quote
            </button>
          </div>
        )
      }
    }
    export default RandomQuote;

Don’t modify state directly

-   <span id="ca27">It is important to `never` modify your state directly!</span>
-   <span id="780d">ALWAYS use `this.setState` method to update state.</span>
-   <span id="1581">This is because when you only use this.state to re-assign, no re-rendering will occur =&gt; leaving our component out of sync. Properly updating state from the previous state</span>
-   <span id="dc5a">In our current example, the way we have `changeQuote` set up leaves us with occasionally producing the same index twice in a row.</span>
-   <span id="0bff">One solution is to design a loop but keep in mind that state updates are handled asynchronously in React (your current value is not guaranteed to be the latest)</span>
-   <span id="39f9">A safe method is to pass an anonymous method to `this.setState` (instead of an object literal) Previous</span>

<!-- -->

    changeQuote = () => {
        const newIndex = this.getRandomInt(this.state.quotes.length);
        this.setState({
          currentQuoteIndex: newIndex;
        })
      }

Passing w/ Anon Method

    changeQuote = () => {
      this.setState((state, props) => {
        const { quotes, currentQuoteIndex } = state;
        let newIndex = -1;
        do {
          newIndex = this.getRandomInt(quote.length);
        } while (newIndex === currentQuoteIndex);
        return {
          currentQuoteIndex: newIndex,
        };
      });
    };

Providing default values for props

-   <span id="7e8c">In our current example, we pass in a static array of predefined quotes in our constructor.</span>
-   <span id="3e8f">The way it is set up right now leaves our list of quotes unchanged after initialization.</span>
-   <span id="add0">We can make quotes more dynamic by replacing our static array with a `props` argument passed into `super`.</span>
-   <span id="53d6">constructor(props) { super(props); }</span>
-   <span id="918a">We can now move our quotes array to our application entry point and pass it in as a prop. // Application Entry Point</span>

<!-- -->

    // ./src/index.js
    import React from 'react'
    import ReactDOM from 'react-dom';
    import RandomQuote from './RandomQuote';
    // Re-assign our array here and pass it in as a prop in Render.
    const quotes = [
          "May the Force be with you.",
          "There's no place like home.",
          "I'm the king of the world!",
          "My mama always said life was like a box of chocolates.",
          "I'll be back.",
          "This way I can define more quotes",
        ];
    ReactDOM.render(
      <React.StrictMode>
        <RandomQuote quotes={quotes}/>
      </React.StrictMode>
      document.getElementById('root');
    )

-   <span id="a0bb">One thing to note about this workaround is that the caller of the component *must* set the quotes prop or the component will throw an error =&gt; so use `defaultProps`!</span>

<!-- -->

    // At the bottom of RandomQuote.js...
    RandomQuote.defaultProps = {
      quotes: [
        "May the Force be with you.",
        "There's no place like home.",
        "I'm the king of the world!",
        "My mama always said life was like a box of chocolates.",
        "I'll be back.",
        "This way I can define more quotes",
      ],
    };

-   <span id="c575">A good safety net in case the consumer/caller doesn’t provide a value for the quotes array.</span>
-   <span id="3be6">We can even remove it from our index.js now and an error will not be thrown.</span>

------------------------------------------------------------------------

### Handling Events

-   <span id="a82e">To add an event listener to an element, just define a method to handle the event and associate that method with the element event you are listening for. Example</span>

<!-- -->

    import React from "react";
    class AlertButton extends React.Component {
      showAlert = () => {
        window.alert("Button Clicked!");
      };
      render() {
        return (
          <button type="button" onClick={this.showAlert}>
            Submit
          </button>
        );
      }
    }

-   <span id="a852">Note that when refering the handler method in onClick we’re not invoking showAlert simply just passing a reference. Preventing default behavior</span>
-   <span id="5cb0">HTML Elements in the browser often have a lot of default behavior.</span>
-   <span id="df4d">I.E. Clicking on an `<a>` element navigates so a resource denoted by `<href>` property.</span>
-   <span id="952c">Here is an example of where using `e.preventDefault()` could come in handy.</span>

<!-- -->

    import React from "react";
    class NoDefaultSubmitForm extends React.Component {
      submitForm = (e) => {
        e.preventDefault();
        window.alert("Handling form submission...");
      };
      render() {
        return (
        <form onSubmit={this.submitForm}>
          <button>Submit</button>
        </form>;
        )}
    }

-   <span id="b149">The button contained within the form will end up refreshing the page before `this.submitForm` method can be completed.</span>
-   <span id="a034">We can stick an `e.preventDefault()` into the actual method to get around this problem.</span>
-   <span id="004a">`e` : Parameter that references a `Synthetic Event` object type. Using `this` in event handlers</span>

<!-- -->

    // ./src/AlertButton.js
    import React from "react";
    class AlertButton extends React.Component {
      showAlert = () => {
        window.alert("Button clicked!");
        console.log(this);
      };
      render() {
        return (
          <button type="button" onClick={this.showAlert}>
            Click Me
          </button>
        );
      }
    }
    export default AlertButton;

-   <span id="3c8f">When we console log `this` we see the AlertButton object.</span>
-   <span id="42a0">If we were to write the showAlert method with a regular class method like:</span>

<!-- -->

    showAlert() {
      console.log(this);
    }

-   <span id="c081">We would get `undefined` =&gt; remember that fat arrow binds to the current context! Reviewing class methods and the `this` keyword</span>
-   <span id="e98e">Let’s refresh on binding.</span>

<!-- -->

    class Boyfriend {
      constructor() {
        this.name = "Momato Riruru";
      }
      displayName() {
        console.log(this.name);
      }
    }
    const Ming = new Boyfriend();
    Ming.displayName(); // => Momato Riruru
    const displayAgain = Ming.displayName;
    displayAgain(); // => Result in a Type Error: Cannot read property 'name' of undefined.

-   <span id="fb85">The first time we use our `displayMethod` call, it is called directly on the instance of the boyfriend class, which is why `Momato Riruru` was printed out.</span>
-   <span id="3a9b">The second time it was called, the ref of the method is stored as a variable and method is called on that variable instead of the instance; resulting in a type error (it has lost it’s context)</span>
-   <span id="0a2c">Remember we can use the `bind` method to rebind context!</span>
-   <span id="d6d9">We can refactor to get the second call working like this:</span>
-   <span id="7ead">const displayAgain = Ming.displayName.bind(Ming); displayAgain(); // =&gt; Now Momato Riruru will be printed out.</span>
-   <span id="a8b0">To continue using function declarations vs fat arrow we can assign context in a constructor within a class component.</span>

<!-- -->

    import React from "react";
    class AlertButton extends React.Component {
      constructor() {
        super();
        this.showAlert = this.showAlert.bind(this); // binding context
      }
      showAlert() {
        console.log(this);
      }
      render() {
        return (
          <button type="button" onClick={this.showAlert}>
            Submit
          </button>
        );
      }
    }
    export default AlertButton;

-   <span id="a4e6">`Experimental Syntax` : Syntax that has been proposed to add to ECMAScript but hasn't officially been added to the language specification yet.</span>
-   <span id="801d">It’s good to pick one approach and use it consistently, either:</span>

1.  <span id="2e3e">Class Properties & Arrow Functions</span>
2.  <span id="cc27">Bind Method & This Keyword The `SyntheticEvent` object</span>

-   <span id="f177">Synthetic Event Objects: Cross Browser wrappeds around the browser’s native event.</span>
-   <span id="418f">Includes the use of stopPropagation() and preventDefault();</span>
-   <span id="b94f">Attributes of the Synthetic Event Object:Attributesboolean bubblesboolean cancelableDOMEventTarget currentTargetboolean defaultPreventednumber eventPhaseboolean isTrustedDOMEvent nativeEventvoid preventDefault()boolean isDefaultPrevented()void stopPropagation()boolean isPropagationStopped()void persist()DOMEventTarget targetnumber timeStampstring type</span>
-   <span id="7484">`nativeEvent` : property defined in a synthetic event object that gives you access to the underlying native browser event (rarely used!)</span>

------------------------------------------------------------------------

### Forms in React

*Exercise being done in a separate file* Random Notes

-   <span id="45ec">`onChange` : detects when a value of an input element changes.</span>
-   <span id="9ca4">Assigning `onChange` to our input fields makes our component's state update in real time during user input.</span>
-   <span id="eb83">Dont forget to add `preventDefault` onto form submissions to deal with the default behavior of the browser refreshing the page!</span>
-   <span id="c413">`submittedOn: new Date(),` Can be added to a form, most likely will persist into a DB.</span>
-   <span id="b97f">Controlled Components</span>
-   <span id="ac48">We use the `onChange` event handlers on form fields to keep our component's state as the `"one source of truth"`</span>
-   <span id="4685">Adding an `onChange` event handler to every single input can massively bloat your code.</span>
-   <span id="448c">Try assiging it to it’s own method to apply everywhere.</span>
-   <span id="f229">`textarea` is handled differently in react: it takes in a value property to handle what the inner text will be.</span>

<!-- -->

    // ./src/ContactUs.js
    import React from "react";
    class ContactUs extends React.Component {
      constructor() {
        super();
        this.state = {
          name: "",
          email: "",
          phone: "",
          phoneType: "",
          comments: "",
          validationErrors: [],
        };
      }
      onChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
      };
      // Vanilla JS Function for validating inputs
      validate(name, email) {
        const validationErrors = [];
        if (!name) {
          validationErrors.push("Please provide a Name");
        }
        if (!email) {
          validationErrors.push("Please provide an Email");
        }
        return validationErrors;
      }
      onSubmit = (e) => {
        // Prevent the default form behavior
        // so the page doesn't reload.
        e.preventDefault();
        // Retrieve the contact us information from state.
        const { name, email, phone, phoneType, comments } = this.state;
        // Get Validation Errors - proceeding destructuring values from this.state.
        const validationErrors = this.validate(name, email);
        // If we have errors...
        if (validationErrors.length > 0) {
          this.setState({ validationErrors });
        } else {
          // Proceed normally
          // Create a new object for the contact us information.
          const contactUsInformation = {
            name,
            email,
            phone,
            phoneType,
            comments,
            submittedOn: new Date(),
          };
          console.log(contactUsInformation);
          // Reset the form state.
          this.setState({
            name: "",
            email: "",
            phone: "",
            phoneType: "",
            comments: "",
            validationErrors: [],
          });
        }
      };
      render() {
        const { name, email, phone, phoneType, comments, validationErrors } =
          this.state;
        return (
          <div>
            <h2>Contact Us</h2>
            {validationErrors.length > 0 && (
              <div>
                The following errors were found:
                <ul>
                  {validationErrors.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            <form onSubmit={this.onSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={this.onChange}
                  value={name}
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  onChange={this.onChange}
                  value={email}
                />
              </div>
              <div>
                <label htmlFor="phone">Phone:</label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  onChange={this.onChange}
                  value={phone}
                />
                <select name="phoneType" onChange={this.onChange} value={phoneType}>
                  <option value="">Select a phone type...</option>
                  {this.props.phoneTypes.map((phoneType) => (
                    <option key={phoneType}>{phoneType}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="comments">Comments:</label>
                <textarea
                  id="comments"
                  name="comments"
                  onChange={this.onChange}
                  value={comments}
                />
              </div>
              <div>
                <button>Submit</button>
              </div>
            </form>
          </div>
        );
      }
    }
    ContactUs.defaultProps = {
      phoneTypes: ["Home", "Work", "Mobile"],
    };
    export default ContactUs;

-   <span id="a2da">We can use validation libraries like `validate` to make our validation functions more complex.</span>

<!-- -->

    import isEmail from "validator/es/lib/isEmail";
      validate(name, email) {
        const validationErrors = [];
        if (!name) {
          validationErrors.push("Please provide a Name");
        }
        if (!email) {
          validationErrors.push("Please provide an Email");
        } else if (!isEmail(email)) {
          validationErrors.push("Please provide a valid Email");
        }
        return validationErrors;
      }

Note About Client-side vs server-side validation

-   <span id="5808">Server-side validation is not optional.</span>
-   <span id="3bb8">Tech-savvy users can manipulate client-side validations.</span>
-   <span id="311f">Sometimes the ‘best approach’ is to skip implementing validations on the client-side and rely completely on the server-side validation.</span>

------------------------------------------------------------------------

### Component Lifecycle

<figure><img src="https://cdn-images-1.medium.com/max/800/0*c24XQBvqBBg0Eztz" class="graf-image" /></figure>-   <span id="e1d9">Component Lifecycle is simply a way of describing the key moments in the lifetime of a component.</span>

1.  <span id="8e64">Loading (Mounting)</span>
2.  <span id="7e94">Updating</span>
3.  <span id="2cd3">Unloading (Unmounting) The lifecycle of a React component</span>

-   <span id="7740">Each `Class Component` has several `lifecycle methods` that you can add to run code at specific times.</span>
-   <span id="e7d0">`componentDidMount` : Method called after your component has been added to the component tree.</span>
-   <span id="6d92">`componentDidUpdate` : Method called after your component has been updated.</span>
-   <span id="9ee2">`componentWillUnmount` : Method called just before your component is removed from the component tree.</span>
-   <span id="7bd8">`Mounting`</span>

1.  <span id="6f9e">`constructor` method is called</span>
2.  <span id="e9c7">`render` method is called</span>
3.  <span id="eef3">React updates the `DOM`</span>
4.  <span id="19bb">`componentDidMount` is called</span>

-   <span id="85f1">`Updating`</span>
-   <span id="94f5">When component receives new `props`</span>

1.  <span id="e635">`render` method is called</span>
2.  <span id="70f9">React updates the `DOM`</span>
3.  <span id="9507">`componentDidUpdate` is called</span>

-   <span id="b00a">When `setState` is called</span>

1.  <span id="6864">`render` method is called</span>
2.  <span id="e13b">React updates the `DOM`</span>
3.  <span id="c459">`componentDidUpdate` is called</span>

-   <span id="bfdd">`Unmounting`</span>
-   <span id="10c1">The moment before a class component is removed from the component tree:</span>
-   <span id="c214">`componentDidMount` will be called. Avoiding the legacy lifecycle methods</span>
-   <span id="d438">Occasionally you will encounter some deprecated lifecycle methods:</span>
-   <span id="1f6b">UNSAFE\_componentWillMount</span>
-   <span id="48ac">UNSAFE\_componentWillReceiveProps</span>
-   <span id="df27">UNSAFE\_componentWillUpdate</span>
-   <span id="af07">Just know they will be removed soon from React’s API, peace. Using the class component lifecycle methods *Exercise done in sep. directory*</span>
-   <span id="344c">Assorted Notes:</span>
-   <span id="d6b1">Common Use for `componentDidMount` lifecycle method is for fetching data from an API.</span>

------------------------------------------------------------------------

—

### Notes

### React Context

-   <span id="e968">You can use `React Context` to pass data through a component tree without having to manually thread props.</span>
-   <span id="89d9">Convenient way to share & update `global data`. Creating a Context</span>

<!-- -->

    // PupContext.js
    import { createContext } from "react";
    const PupContext = createContext();
    export default PupContext;

-   <span id="a8bf">We use `React.createContext` to create context.</span>
-   <span id="98b9">Keep in mind if you invoke this method with aruguments, those arguments will be set as default context. Adding a Provider to the App component</span>
-   <span id="a919">In order to pass context over to child components we need to wrap them in a provider component.</span>
-   <span id="9afc">The provider component takes in a value property that points to the information that needs to be passed to the children.</span>

<!-- -->

    <MyContext.Provider value={/* some value */}>
      <ChildComponent />
    </MyContext.Provider>

Setting up a Consumer

    <MyContext.Consumer>
      {(value) => <Component value={value} />}
    </MyContext.Consumer>

-   <span id="2693">Keep in mind that `Context.Consumer` expects a function as a child.</span>
-   <span id="19fc">The function has a value prop passed in from `Context.Provider`</span>

------------------------------------------------------------------------

### Notes

### Redux Explained

-   <span id="eab4">JS Framework for managing the frontend state of a web application.</span>
-   <span id="3c8b">Gives us ability to store information in an organized manner in a web app and quickly retrieve that information from anywhere in the app.</span>
-   <span id="695d">`Redux`</span>
-   <span id="00d5">Client Side Data Management</span>
-   <span id="dd41">Controls “Frontend State”</span>
-   <span id="d828">NOT Your Database</span>
-   <span id="855a">NOT Component State</span>
-   <span id="4c1a">Just used for managing Data</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*N7KFfhOZZ7UrY8s4" class="graf-image" /></figure>-   <span id="04c0">Visual of how an app without React manages it’s data.</span>
-   <span id="bae2">A lot of prop threading happening.</span>
-   <span id="989f">Data stored in a sep. location — `global data`. The Anatomy of Redux</span>
-   <span id="cd66">`Store`</span>
-   <span id="9453">Holds the Frontend State</span>
-   <span id="cea4">Provides an API for the Frontend State</span>
-   <span id="c653">`Action`</span>
-   <span id="7fb4">POJOs</span>
-   <span id="69a1">Outline Changes to Frontend State</span>
-   <span id="1a0a">`Reducers`</span>
-   <span id="a372">Functions</span>
-   <span id="8bb8">Make Changes to Frontend State Where did Redux come from?</span>
-   <span id="6d0b">There are three central philosophies of Redux:</span>

1.  <span id="12ac">`A Single Source of Truth` : state is stored in a POJO</span>
2.  <span id="d178">`State is Read Only` : State is immutable, modified by dispatching actions.</span>
3.  <span id="51c5">`Changes are Made with Pure Functions` : Reducers that receive the actions and return updated state are pure functions of the old state and action. When is it appropriate to use Redux?</span>

-   <span id="117f">When doing a project with simpler global state requirements, it may be better to choose React’s Context API over Redux.</span>
-   <span id="5d3d">Redux offers more flexibility and support for middleware along with richer developer tools. Vocabulary</span>
-   <span id="1ceb">`State`</span>
-   <span id="49e7">*Redux is a State Manager*</span>
-   <span id="5018">State is all the information stored by that program at a particular point in time.</span>
-   <span id="8fdb">Redux’s main job is to store the state and make it directly available to your entire app.</span>
-   <span id="8bbd">`Store`</span>
-   <span id="f027">*Redux stores state in a single store*.</span>
-   <span id="c97e">Redux store is a single JS object with a couple of methods (not a class!)</span>
-   <span id="199d">Methods include: `getState`, `dispatch(action)`, and `subscribe(listener)`</span>
-   <span id="8bcf">`Actions`</span>
-   <span id="2049">*Redux store is updated by dispatching actions*</span>
-   <span id="cbac">Action is just a POJO that includes a mandatory `type` property.</span>
-   <span id="f2d5">Contain info to update the store.</span>
-   <span id="1bd9">We dispatch actions in response to User actions or AJAX requests.</span>
-   <span id="1b78">`Pure Functions`</span>
-   <span id="c436">*Redux Reducers are Pure Functions*</span>
-   <span id="e204">Functions are pure when their behavior depends only on it’s arguments as has no side effects.</span>
-   <span id="450b">Simply takes in an argument and outputs a value.</span>
-   <span id="e146">`Reducer`</span>
-   <span id="9721">*Redux handles actions using reducers*</span>
-   <span id="c312">A function that is called each time an action is dispatched.</span>
-   <span id="84d8">Takes in an `action` and `current state`</span>
-   <span id="90a3">Required to be pure functions so their behavior is predictable.</span>
-   <span id="5c36">`Middleware`</span>
-   <span id="6b22">*Customize response to dispatch actions by using Middleware*</span>
-   <span id="9287">Middleware is an optional component of Redus that allows custom responses to dispatched actions.</span>
-   <span id="f953">Most common use is to dispatch async requests to a server.</span>
-   <span id="773e">`Time Traveling Dev Tools`</span>
-   <span id="d703">*Redux can time travel wow*</span>
-   <span id="7187">Time travel refers to Redux’s ability to revert to a previous state because reducers are all pure functions.</span>
-   <span id="ada3">`Thunks`</span>
-   <span id="ee0f">*Convenient format for taking async actions in Redux*</span>
-   <span id="586e">General concept in CS referring to a function who’s primary purpose is to call another function.</span>
-   <span id="6f45">Most commonly used to make async API requests.</span>

------------------------------------------------------------------------

### Flux and Redux

What is Flux?

-   <span id="06d1">Front-end application architecutre.</span>
-   <span id="8311">A pattern in which to structure an application.</span>
-   <span id="05e6">Unidirectional Data Flow — offers more predictability.</span>
-   <span id="751c">`Actions` : Begins the data flow of data, simple object that contains a type; type indicates the type of change to be performed.</span>
-   <span id="e8e7">`Dispatcher` : Mechanism for distributing actions to the store.</span>
-   <span id="af4f">`Store` : The entire state of the application, responsible for updating the state of your app.</span>
-   <span id="d7ff">`View` : Unit of code that's responsible for rendering the user interface. Used to re-render the application when actions and changes occur.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*ywV6dO4a4QcGJxK5" class="graf-image" /></figure>-   <span id="af94">Redux</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Nd73GjTY1PVQtjtQ" class="graf-image" /></figure>-   <span id="dc16">Library that facilitates the implementation of Flux.</span>
-   <span id="623a">Redux Three Principles</span>
-   <span id="2ac6">`Single Source of Truth`</span>
-   <span id="a2b9">`State is Read-Only`</span>
-   <span id="897b">`Only Pure Functions Change State`</span>

------------------------------------------------------------------------

### Store

-   <span id="cd1e">Simply an object that holds the application state wrapped in an API.</span>
-   <span id="f57c">`Three methods`:</span>
-   <span id="354c">`getState()` : Returns the store's current state.</span>
-   <span id="537c">`dispatch(action)` : Passes an action into the store's reducer to tell it what info to update.</span>
-   <span id="4539">`subscribe(callback)` : Registers a callback to be triggered whenever the store updates. Updating the Store</span>

<!-- -->

    store.dispatch(action);
    // Add Orange Action
    const addOrange = {
      type: "ADD_FRUIT",
      fruit: "orange",
    };
    // Reducer for Orange Action
    const fruitReducer = (state = [], action) => {
      switch (action.type) {
        case "ADD_FRUIT":
          return [...state, action.fruit];
        default:
          return state;
      }
    };
    // Run the Dispatch
    console.log(store.getState()); // []
    store.dispatch(addOrange);
    console.log(store.getState()); // [ 'orange' ]

Subscribing to the store

-   <span id="1a02">Whenever a store process a dispatch(), it triggers all its subscribers.</span>
-   <span id="e667">`Subscribers` : callbacks that can be added to the store via subscribe().</span>

<!-- -->

    const display = () => {
      console.log(store.getState());
    };
    const unsubscribeDisplay = store.subscribe(display);
    store.dispatch(addOrange); // [ 'orange', 'orange' ]
    // display will no longer be invoked after store.dispatch()
    unsubscribeDisplay();
    store.dispatch(addOrange); // no output

Reviewing a simple example

    // app.js
    const { createStore } = require("redux");
    // Define the store's reducer.
    const fruitReducer = (state = [], action) => {
      switch (action.type) {
        case "ADD_FRUIT":
          return [...state, action.fruit];
        default:
          return state;
      }
    };
    // Create the store.
    const store = createStore(fruitReducer);
    // Define an 'ADD_FRUIT' action for adding an orange to the store.
    const addOrange = {
      type: "ADD_FRUIT",
      fruit: "orange",
    };
    // Log to the console the store's state before and after
    // dispatching the 'ADD_FRUIT' action.
    console.log(store.getState()); // []
    store.dispatch(addOrange);
    console.log(store.getState()); // [ 'orange' ]
    // Define and register a callback to listen for store updates
    // and console log the store's state.
    const display = () => {
      console.log(store.getState());
    };
    const unsubscribeDisplay = store.subscribe(display);
    // Dispatch the 'ADD_FRUIT' action. This time the `display` callback
    // will be called by the store when its state is updated.
    store.dispatch(addOrange); // [ 'orange', 'orange' ]
    // Unsubscribe the `display` callback to stop listening for store updates.
    unsubscribeDisplay();
    // Dispatch the 'ADD_FRUIT' action one more time
    // to confirm that the `display` method won't be called
    // when the store state is updated.
    store.dispatch(addOrange); // no output

### Reducers

-   <span id="98f3">Reducer function receives the current `state` and `action`, updates the state appropriately based on the `action.type` and returns the following state.</span>
-   <span id="4cee">You can bundles different action types and ensuing logic by using a switch/case statement.</span>

<!-- -->

    const fruitReducer = (state = [], action) => {
      switch (action.type) {
        case "ADD_FRUIT":
          return [...state, action.fruit];
        case "ADD_FRUITS":
          return [...state, ...action.fruits];
        case "SELL_FRUIT":
          const index = state.indexOf(action.fruit);
          if (index !== -1) {
            // remove first instance of action.fruit
            return [...state.slice(0, index), ...state.slice(index + 1)];
          }
          return state; // if action.fruit is not in state, return previous state
        case "SELL_OUT":
          return [];
        default:
          return state;
      }
    };

Reviewing how Array\#slice works

    const fruits = ["apple", "apple", "orange", "banana", "watermelon"];
    // The index of the 'orange' element is 2.
    const index = fruits.indexOf("orange");
    // `...fruits.slice(0, index)` returns the array ['apple', 'apple']
    // `...fruits.slice(index + 1)` returns the array ['banana', 'watermelon']
    // The spread syntax combines the two array slices into the array
    // ['apple', 'apple', 'banana', 'watermelon']
    const newFruits = [...fruits.slice(0, index), ...fruits.slice(index + 1)];

-   <span id="f322">Approach that can be used to remove an element without mutating the original array. Avoiding state mutations</span>
-   <span id="f862">Your reducer must always return a new object if the state changes. GOOD</span>

<!-- -->

    const goodReducer = (state = { count: 0 }, action) => {
      switch (action.type) {
        case "INCREMENT_COUNTER":
          const nextState = Object.assign({}, state);
          nextState.count++;
          return nextState;
        default:
          return state;
      }
    };

BAD

    const badReducer = (state = { count: 0 }, action) => {
      switch (action.type) {
        case "INCREMENT_COUNTER":
          state.count++;
          return state;
        default:
          return state;
      }
    };

------------------------------------------------------------------------

### Actions

-   <span id="64b4">Actions are the only way to trigger changes to the store’s state. Using action creators</span>

<!-- -->

    const addOrange = {
      type: "ADD_FRUIT",
      fruit: "orange",
    };
    store.dispatch(addOrange);
    console.log(store.getState()); // [ 'orange' ]

-   <span id="c39d">fruit is the `payload key` and orange is the `state data`</span>
-   <span id="43e2">`Action Creators` : Functions created from extrapolating the creation of an action object.</span>

<!-- -->

    const addFruit = (fruit) => ({
      type: "ADD_FRUIT",
      fruit,
    });

-   <span id="11fd">Use parenthesis for implicit return value.</span>
-   <span id="eea8">We can now add whatever fruit we’d like.</span>

<!-- -->

    store.dispatch(addFruit("apple"));
    store.dispatch(addFruit("strawberry"));
    store.dispatch(addFruit("lychee"));
    console.log(store.getState()); // [ 'orange', 'apple', 'strawberry', 'lychee' ]

Preventing typos in action type string literals

    const ADD_FRUIT = "ADD_FRUIT";
    const ADD_FRUITS = "ADD_FRUITS";
    const SELL_FRUIT = "SELL_FRUIT";
    const SELL_OUT = "SELL_OUT";
    const addFruit = (fruit) => ({
      type: ADD_FRUIT,
      fruit,
    });
    const addFruits = (fruits) => ({
      type: ADD_FRUITS,
      fruits,
    });
    const sellFruit = (fruit) => ({
      type: SELL_FRUIT,
      fruit,
    });
    const sellOut = () => ({
      type: SELL_OUT,
    });

-   <span id="ae86">Using constant variables helps reduce simple typos in a reducer’s case clauses.</span>

------------------------------------------------------------------------

### Debugging Arrow Functions

-   <span id="43c6">It is important to learn how to use debugger statements with arrow functions to effectively debug Redux cycle. Understanding the limitations of implicit return values</span>

<!-- -->

    const addFruit = (fruit) => {
      return {
        type: "ADD_FRUIT",
        fruit,
      };
    };
    const addFruit = (fruit) => {
      debugger;
      return {
        type: "ADD_FRUIT",
        fruit,
      };
    };

-   <span id="2806">You must use explicit return statement arrow function to use a debugger.</span>

------------------------------------------------------------------------

### React Router Introduction

Now that you know how to render components in a React app, how do you handle rendering different components for different website pages? React Router is the answer!

Think of how you have created server-side routes in Express. Take the following URL and server-side route. Notice how the `/users/:userId` path corresponds with the `http://localhost:3000/users/2` URL to render a specific HTML page.

    // http://localhost:3000/users/2
    app.get('/users/:userId', (req, res) => {
      res.render('userProfile.pug');
    });

In the default React setup, you lose the ability to create routes in the same manner as in Express. This is what React Router aims to solve!

<a href="https://github.com/ReactTraining/react-router" class="markup--anchor markup--p-anchor">React Router</a> is a frontend routing library that allows you to control which components to display using the browser location. A user can also copy and paste a URL and email it to a friend or link to it from their own website.

When you finish this article, you should be able to use the following from the `react-router-dom` library:

-   <span id="e5d3">`<BrowserRouter>` to provide your application access to the `react-router-dom` library; and</span>
-   <span id="e1cd">`<Route>` to connect specific URL paths to specific components you want rendered; and</span>
-   <span id="bf15">`<Switch>` to wrap several `Route` elements, rendering only one even if several match the current URL; and</span>
-   <span id="0318">React Router’s `match` prop to access route path parameters.</span>

### Getting started with routing

Since you are writing single page apps, you don’t want to refresh the page each time you change the browser location. Instead, you want to update the browser location and your app’s response using JavaScript. This is known as client-side routing. You are using React, so you will use React Router to do this.

Create a simple react project template:

    npx create-react-app my-app --template @appacademy/simple

Then install React Router:

    npm install --save react-router-dom@^5.1.2

Now import `BrowserRouter` from `react-router-dom` in your entry file:

    import { BrowserRouter } from 'react-router-dom`;

### BrowserRouter

`BrowserRouter` is the primary component of the router that wraps your route hierarchy. It creates a React context that passes routing information down to all its descendent components. For example, if you want to give `<App>` and all its children components access to React Router, you would wrap `<App>` like so:

    // ./src/index.js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { BrowserRouter } from 'react-router-dom';
    import App from './App';

    const Root = () => {
      return (
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
    };

    ReactDOM.render(
      <React.StrictMode>
        <Root />
      </React.StrictMode>,
      document.getElementById('root'),
    );

Now you can route the rendering of certain components to certain URLs (i.e `https://www.website.com/profile`<a href="https://www.website.com/profile%29." class="markup--anchor markup--p-anchor">).</a>

### HashRouter

Alternatively, you could import and use `HashRouter` from `react-router-dom`. Links for applications that use `<HashRouter>` would look like `https://www.website.com/#/profile` (with an `#` between the domain and path).

You’ll focus on using the `<BrowserRouter>`.

### Creating frontend routes

React Router helps your React application render specific components based on the URL. The React Router component you’ll use most often is `<Route>`.

The `<Route>` component is used to wrap another component, causing that component to only be rendered if a certain URL is matched. The behavior of the `<Route>` component is controlled by the following props: `path`, `component`, `exact`, and `render` (optional).

Create a simple `Users` component that returns `<h1>This is the users index!</h1>`. Now let's refactor your `index.js` file so that you can create your routes within the component:

    // ./src/index.js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { BrowserRouter, Route } from 'react-router-dom';
    import App from './App';
    import Users from './Users';

    const Root = () => {
      return (
        <BrowserRouter>
          <div>
            {/* TODO: Routes */}
          </div>
        </BrowserRouter>
      );
    };

    ReactDOM.render(
      <React.StrictMode>
        <Root />
      </React.StrictMode>,
      document.getElementById('root'),
    );

Note that `BrowserRouter` can only have a single child component, so the snippet above wraps all routes within parent a `<div>` element. Now let's create some routes!

### component

Begin with the `component` prop. This prop takes a reference to the component to be rendered. Let's render your `App` component:

    const Root = () => {
      return (
        <BrowserRouter>
          <div>
            <Route component={App} />
          </div>
        </BrowserRouter>
      );
    };

Now you’ll need to connect a path to the component!

### path

The wrapped component will only be rendered when the path is matched. The path matches the URL when it matches some initial portion of the URL. For example, a path of `/` would match both of the following URLs: `/` and `/users`. (Because `/users` begins with a `/` it matches the path `/`)

    <Route path='/' component={App} />
    <Route path='/users' component={Users} />

Take a moment to navigate to `http://localhost:3000/users` to see how both the `App` component and `Users` component are rendering.

### exact

If this `exact` flag is set, the path will only match when it exactly matches the URL. Then browsing to the `/users` path would no longer match `/` and only the `Users` component will be rendered (instead of both the `App` component and `Users` component).

    <Route exact path='/' component={App} />
    <Route path='/users' component={Users} />

### render

This is an optional prop that takes in a function to be called. The function will be called when the path matches. The function’s return value is rendered. You could also define a functional component inside the `component` prop, but this results in extra, unnecessary work for React. The `render` prop is preferred for inline rendering of simple functional components.

The difference between using `component` and `render` is that `component` returns new JSX to be re-mounted every time the route renders, while `render` simply returns to JSX what will be mounted once and re-rendered. For any given route, you should only use either the `component` prop, or the `render` prop. If both are supplied, only the `component` prop will be used.

    // This inline rendering will work, but is unnecessarily slow.
    <Route path="/hello" component={() => <h1>Hello!</h1>} />

    // This is the preferred way for inline rendering.
    <Route path="/hello" render={() => <h1>Hello!</h1>} />

It can be helpful to use `render` instead of `component` in your `<Route>` when you need to pass props into the rendered component. For example, imagine that you needed to pass the `users` object as a prop to your `Users` component. Then you could pass in props from `Root` to `Users` by returning the `Users` component like so:

    // `users` to be passed as a prop:
    const users = {
      1: { name: 'Andrew' },
      2: { name: 'Raymond' }
    };

    <Route path="/users" render={() => <Users users={users} />} />

As a reminder, `BrowserRouter` can only have a single child component. That's why you have wrapped all your routes within parent a `<div>` element.

    const Root = () => {
      const users = {
        1: { name: 'Andrew' },
        2: { name: 'Raymond' }
      };

      return (
        <BrowserRouter>
          <div>
            <h1>Hi, I'm Root!</h1>
            <Route exact path="/" component={App} />
            <Route path="/hello" render={() => <h1>Hello!</h1>} />
            <Route path="/users" render={() => <Users users={users} />} />
          </div>
        </BrowserRouter>
      );
    };

With this `Root` component, you will always render the `<h1>Hi, I'm Root!</h1>`, regardless of the path. Because of the first `<Route>`, you will only render the `App` component if the path exactly matches `/`. Because of the second `<Route>`, you will only render the `Users` component if the path matches `/users`.

### Route path params

A component’s props can also hold information about a URL’s parameters. The router will match route segments starting at `:` up to the next `/`, `?`, or `#`. Those matched values are then passed to components via their props. Such segments are *wildcard* values that make up your route parameters.

For example, take the route below:

    <Route path="/users/:userId"
           render={(props) => <Profile users={users} {...props} />} />

The router would break down the full `/users/:userId/photos` path to two parts: `/users`, `:userId`.

The `Profile` component's props would have access to the `:userId` part of the `http://localhost:3000/users/:userId/photos` URL through the `props` with router parameter information. You would access the the `match` prop's parameters (`props.match.params`). If you are using the `render` prop of the `Route` component, make sure to spread the props back into the component if you want it to know about the "match" parameters.

    // Route's `render` prop allows you to pass the `users`
    // prop and spread the router `props`.
    render={(props) => <Profile users={users} {...props} />}

The `params` object would then have a property of `userId` which would hold the value of the `:userId` *wildcard* value. Let's render the `userId` parameter in a user profile component. Take a moment to create a `Profile.js` file with the following code:

    // ./src/Profile.js
    import React from "react";

    const Profile = (props) => (
      <div>
        The user's id is {props.match.params.userId}.
      </div>
    );

    export default Profile;

Notice how it uses the `match` prop to access the `:userId` parameter from the URL. You can use this wildcard to make and AJAX call to fetch the user information from the database and render the return data in the `Profile` component. Recall that your `Profile` component was rendered at the path `/users/:userId`. Thus you can use your `userId` parameters from `match.params` to fetch a specific user:

    // ./src/Profile.js
    import React from "react";

    const Profile = ({ users, match: { params } }) => {

      // In a real-world scenario, you'd make a call to an API to fetch the user,
      // instead of passing down and keying into a `users` prop.
      const user = users[params.userId];

      return (
        <div>
          The user's id is {params.userId} and the user's name is {user.name}.
        </div>
      );
    };

    export default Profile;

### Match

Now that you’ve seen your React Router’s `match` prop in action, let's go over more about <a href="https://reacttraining.com/react-router/web/api/Route/route-props" class="markup--anchor markup--p-anchor">route props</a>! React Router passes information to the components as route props, accessible to all components with access to the React Router. The three props it makes available are `location`, `match` and `history`. You've learned about `props.match.params`, but now let's review the other properties of the `match` prop!

This is an object that contains important information about how the current URL matches the route path. Here are some of the more useful keys on the `match` object:

-   <span id="1d2c">`isExact`: a boolean that tells you whether or not the URL exactly matches the path</span>
-   <span id="b558">`url`: the current URL</span>
-   <span id="ab28">`path`: the route path it matched against (without wildcards filled in)</span>
-   <span id="be5b">`params`: the matches for the individual wildcard segments, nested under their names</span>

When you use React Router, the browser `location` and `history` are a part of the state of your app. You can store information about which component should be displayed, which user profile you are currently viewing, or any other piece of state, in the browser location. You can then access that information from anywhere your Router props are passed to in your app.

Now that you’ve learned about parameters and route props, let’s revisit your `Root` component to add an `exact` flag to your `/users` route so that it does not render with your `/users/:userId` route. Your component should look something like this:

    const Root = () => {
      const users = {
        1: { name: 'Andrew' },
        2: { name: 'Raymond' }
      };

      return (
        <BrowserRouter>
          <h1>Hi, I'm Root!</h1>
          <div>
            <Route exact path="/" component={App} />
            <Route path="/hello" render={() => <h1>Hello!</h1>} />

            {/* Render the `Users` page if no ID is included. */}
            <Route exact path="/users" render={() => <Users users={users} />} />

            {/* Otherwise, render the profile page for that userId. */}
            <Route path="/users/:userId" component={(props) => <Profile users={users} {...props} />} />
          </div>
        </BrowserRouter>
      );
    };

### What you learned

In this article, you learned how to:

-   <span id="92fc">Use components from the React Router library; and</span>
-   <span id="19b5">Create routes to render specific components; and</span>
-   <span id="fc9d">Manage the order of rendered routes; and</span>
-   <span id="3281">Use the `exact` flag to ensure that a specific path renders a specific component; and</span>
-   <span id="3949">Use the React Router `match` prop to access Router params.</span>

------------------------------------------------------------------------

### React Router Navigation

Now that you know how to create front-end routes with React Router, you’ll need to implement a way for your users to navigate the routes! This is what using React Router’s `Link`, `NavLink`, `Redirect`, and `history` prop can help you do.

In this article, you’ll be working off of the demo project you built in the React Router Intro reading. When you finish this article, you should be able to use the following components from the `react-router-dom` library:

-   <span id="76bc">`<Link>` or `<NavLink>` to create links with absolute paths to routes in your application (like "/users/1"); and,</span>
-   <span id="cdc2">`<Redirect>` to redirect a user to another path (i.e. a login page when the user is not logged in); and</span>
-   <span id="d8a7">React Router’s `history` prop to update a browser's URL programmatically.</span>

### Adding links for navigation

React Router’s `<Link>` is one way to simplify navigation around your app. It issues an on-click navigation event to a route defined in your app's router. Using `<Link>` renders an anchor tag with a correctly set `href` attribute.

### Link

To use it, update your imports from the `react-router-dom` package to include `Link`:

    import { BrowserRouter, Route, Link } from 'react-router-dom';

Note that `<Link>` can take two props: `to` and `onClick`.

The `to` prop is a route location description that points to an absolute path, (i.e. `/users`). Add the following `Link` components in your `index.js` file above your routes:

    <Link to="/">App</Link>
    <Link to="/users">Users</Link>
    <Link to="/users/1">Andrew's Profile</Link>

The `onClick` prop is just like any other JSX click handler. You can write a function that takes in an `event` and handles it. Add the following `Link` before your routes and the following click handler function within your `Root` component:

    // Link with onClick prop
    <Link to="/" onClick={handleClick}>App with click handler</Link>

    // Click handler function
    const handleClick = () => {
      console.log('Thanks for clicking!')
    };

Now, test your routes and links! If you inspect the page, you’ll see that your links are now rendered as `<a>` elements. Notice that clicking the `App with click handler` link logs a message in your console while directing your browser to render the `App` component.

### NavLink

The `<NavLink>` works just like a `<Link>`, but with a little extra functionality. It has the ability to add extra styling when the path it links to matches the current path. This makes it an ideal choice for a navigation bar, hence the name. This styling can be controlled by three extra props: `activeClassName`, `activeStyle`, and `exact`. To begin using `NavLink`, update your imports from the `react-router-dom` package:

    import { BrowserRouter, Route, NavLink } from 'react-router-dom';

The `activeClassName` prop of the `NavLink` component allows you to set a CSS class name for styling the `NavLink` when its route is active. By default, the `activeClassName` is already set to `active`. This means that you simply need to add an `.active` class to your CSS file to add active styling to your link. A `NavLink` will be active if its `to` prop path matches the current URL.

Let’s change your “Users”, “Hello”, and “Andrew’s Profile” links to be different colors and have a larger font size when active.

    <NavLink to="/">App</NavLink>
    <NavLink activeClassName="red" to="/users">Users</NavLink>
    <NavLink activeClassName="blue" to="/hello">Hello</NavLink>
    <NavLink activeClassName="green" to="/users/1">Andrew's Profile</NavLink>
    <NavLink to="/" onClick={handleClick}>App with click handler</NavLink>

For example, this is what the rendered HTML `<a>` tag would look like when when the browser is navigated to the `/` path or the `/users` path:

    <!-- Navigated to the / path (the activeClassName
         prop is set to active by default) -->
    <a href="/" class="active">App</a>

    <!-- NOT navigated to the `/` path -->
    <a href="/">App</a>

    <!-- Navigated to the /users path (the activeClassName
         prop is manually set to red) -->
    <a href="/users" class="red">Users</a>

    <!-- NOT navigated to the `/users` path -->
    <a href="/users">Users</a>

Import `NavLink` into your `index.js` file and take a moment to update all your `Link` elements to `NavLink` elements. Set an `activeClassName` prop to an `active` class. Add the following `.active` class to your `index.css` file:

    .active {
      font-weight: bold;
    }

    .red {
      color: red;
      font-size: 30px;
    }

    .blue {
      color: blue;
      font-size: 30px;
    }

    .green {
      color: green;
      font-size: 30px;
    }

Test your styled links! Notice how the `App` and `App with click handler` links are always bolded. This is because all of your links include the `/` path, meaning that the link to `/` will be active when browsing to `/users` and `/users/1` because of how `users` and `users/1` are both prefaced by a `/`.

The `activeStyle` prop is a style object that will be applied inline to the `NavLink` when its `to` prop matches the current URL. Add the following `activeStyle` to your `App` link and comment out the `.active` class in your CSS file.

    <NavLink to="/" activeStyle={{ fontWeight: "bold" }}>App</NavLink>

The following html is rendered when at the `/` path:

    <a href="/" style="font-weight:bold;" class="active">App</a>

Notice how your `App with click handler` is not bolded anymore. This is because the default `active` class being applied does not have any CSS stylings set to the class. Uncomment your `.active` class in your CSS file to bring back bolding to this NavLink.

The `exact` prop is a boolean that defaults to `false`. If set to `true`, then the `activeStyle` and `activeClassName` props will only be applied when the current URL exactly matches the `to` prop. Update your `App` and `App with click handler` links with an `exact` prop set. Just like in your routes, you can use the `exact` flag instead of `exact={true}`.

    <NavLink to="/" exact={true} activeStyle={{ fontWeight: "bold" }}>App</NavLink>
    <NavLink to="/" exact onClick={handleClick}>App with click handler</NavLink>

Now your `App` and `App with click handler` links will only be bolded when you have navigated precisely to the `/` path.

### Switching between routes

You came across styling issues when the `/users` and `/users/1` paths matched the `/` path. Routing can have this issue as well. This is why you need to control the switching between routes.

React Router’s `<Switch>` component allows you to only render one `<Route>` even if several match the current URL. You can nest as many `Route`s as you wish between the opening and closing `Switch` tags, but only the first one that matches the current URL will be rendered.

This is particularly useful if you want a default component that will only render if none of our other routes match. View the example below. Without the Switch, `DefaultComponent` would always render. Since there isn't set a path in the `DefaultComponent` route, it will simply use the default path of `/`. Now the `DefaultComponent` will only render when neither of the preceding routes match.

    <Switch>
      <Route path="some/url" component={SomeComponent} />
      <Route path="some/other/url" component={OtherComponent} />
      <Route component={DefaultComponent} />
    </Switch>

Import `Switch` from `react-router-dom` and add `<Switch>` tags around your routes to take care of ordering and switching between your routes! Begin by adding the following route to the bottom of your routes to render that a `404: Page not found` message:

    <Route render={() => <h1>404: Page not found</h1>} />

This is what your `Root` component should look like at this point:

    const Root = () => {
      const users = [
        { name: 'andrew' },
        { name: 'raymond' }
      ];

      const handleClick = () => {
        console.log('Thanks for clicking!')
      };

      return (
        <BrowserRouter>
          <h1>Hi, I'm Root!</h1>

          <div>
            <NavLink to="/" exact={true} activeStyle={{ fontWeight: "bold" }}>App</NavLink>
            <NavLink activeClassName="red" to="/users">Users</NavLink>
            <NavLink activeClassName="blue" to="/hello">Hello</NavLink>
            <NavLink activeClassName="green" to="/users/1">Andrew's Profile</NavLink>
            <NavLink to="/" exact onClick={handleClick}>App with click handler</NavLink>

            <Switch>
              <Route path="/users/:userId" component={(props) => <Profile users={users} {...props} />} />
              <Route exact path="/users" render={() => <Users users={users} />} />
              <Route path="/hello" render={() => <h1>Hello!</h1>} />
              <Route exact path="/" component={App} />
              <Route render={() => <h1>404: Page not found</h1>} />
            </Switch>
          </div>
        </BrowserRouter>
      );
    };

Now you have control over the precedence of rendered components! Try navigating to `http://localhost:3000/asdf` or any other route you have not defined. The `<h1>404: Page not found</h1>` JSX of the last `<Route>` will be rendered whenever the browser attempts to visit an undefined route.

### Redirecting users

But what if you want to redirect users to a login page when they aren’t logged in? The `<Redirect>` component from React Router helps you redirect users!

The component takes only one prop: `to`. When it renders, it replaces the current URL with the value of its `to` prop. Typically you conditionally render `<Redirect>` to redirect the user away from some page you don't want them to visit. The example below checks whether there is a defined `currentUser` prop. If so, the `<Route>` will render the `Home` component. Otherwise, it will redirect the user to the `/login` path.

    <Route
      exact path="/"
      render={() => (this.props.currentUser ? <Home /> : <Redirect to="/login" />)}
    />

Note: you will learn how to use a more flexible auth pattern — don’t directly imitate this example.

### History

You know how to redirect users with a `<Redirect>` component, but what if you need to redirect users programmatically? You've learned about the React Router's `match` prop, but now let's go over another one of the <a href="https://reacttraining.com/react-router/web/api/Route/route-props" class="markup--anchor markup--p-anchor">route props</a>: `history`!

    // Pushing a new URL (and adding to the end of history stack):
    const handleClick = () => this.props.history.push('/some/url');

    // Replacing the current URL (won't be tracked in history stack):
    const redirect = () => this.props.history.replace('/some/other/url');

This prop lets you update the URL programmatically. For example, suppose you want to push a new URL when the user clicks a button. It has two useful methods:

-   <span id="31f3">`push` - This adds a new URL to the end of the history stack. That means that clicking the back button will take the browser to the previous URL. Note that pushing the same URL multiple times in a row will have no effect; the URL will still only show up on the stack once. In development mode, pushing the same URL twice in a row will generate a console warning. This warning is disabled in production mode.</span>
-   <span id="90c1">`replace` - This replaces the current URL on the history stack, so the back button won't take you to it. For example:</span>

### What you learned

In this article, you learned how to:

-   <span id="169b">Create navigation links for your route paths; and</span>
-   <span id="d108">Redirect users through using the `<Redirect>` component; and</span>
-   <span id="d090">Update a browser’s URL programmatically by using React Router’s `history` prop.</span>

------------------------------------------------------------------------

### React Router Nested Routes

Now you know how to create front-end routes and add navigation with React Router. When initializing Express projects, you declare static routes. Static routes are routes that are declared when an application is initialized. When using React Router in your application’s initialization, you can declare dynamic routes. React Router introduces dynamic routing, where your routes are created as your application is rendering. This allows you to create nested routes within components!

In this article, let’s dive into <a href="https://reacttraining.com/react-router/core/guides/philosophy/nested-routes" class="markup--anchor markup--p-anchor">nested routes</a>! When you finish the article, you should:

-   <span id="38ee">Describe what nested routes are; and</span>
-   <span id="0559">Be able to use React Router to create and navigate nested routes; and</span>
-   <span id="ce4a">Know how to use the React Router `match` prop to generate links and routes.</span>

### Why nested routes?

Let’s begin with why you might need nested routes. As you remember, you are using React to create a single-page application. This means that you’ll be organizing your application into different components and sub-components.

For example, imagine creating a simple front-end application with three main pages: a home welcome page (path of `/`), a users index page (path of `/users`), and user profile pages (path of `/users/:userId`). Now imagine if every user had links to separate `posts` and `photos` pages.

You can create those routes and links within the user profile component, instead of creating the routes and links where the main routes are defined.

### What are nested routes?

Now let’s dive into a user profile component to understand what are nested routes! Imagine you have a route in your application’s entry file to each user’s profile like so:

    <Route path="/users/:userId" component={Profile} />

This means that upon navigating to `http://localhost:3000/users/1`, you would render the following `Profile` component and the `userId` parameter within `props.match.params` would have the value of `"1"`.

    const Profile = (props) => {
      // Custom call to database to fetch a user by a user ID.
      const user = fetchUser(props.match.params.userId);
      const { name, id } = user;

      return (
        <div>
          <h1>Welcome to the profile of {name}!</h1>

          {/* Links to a specific user's posts and photos */}
          <Link to={`/users/${id}/posts`}>{name}'s Posts</Link>
          <Link to={`/users/${id}/photos`}>{name}'s Photos</Link>

          {/* Routes to a specific user's posts and photos */}
          <Route path='/users/:userId/posts' component={UserPosts} />
          <Route path='/users/:userId/photos' component={UserPhotos} />
        </div>
      );
    };

Since this route is not created until the `Profile` component is rendered, you are dynamically creating your nested `/users/:userId/posts` and `/users/:userId/photos` routes. Remember that your `match` prop also has other helpful properties. You can use `match.url` instead of `/users/${id}` in your profile links. You can also use `match.path` instead of `/users/:userId` in your profile routes. Remember that you can destructure `url`, `path`, and `params` from your `match` prop!

    // Destructure `match` prop
    const Profile = ({ match: { url, path, params }) => {

      // Custom call to database to fetch a user by a user ID.
      const user = fetchUser(params.userId);
      const { name, id } = user;

      return (
        <div>
          <h1>Welcome to the profile of {name}!</h1>

          {/* Replaced `/users/${id}` URL with `props.match.url` */}
          <Link to={`${url}/posts`}>{name}'s Posts</Link>
          <Link to={`${url}/photos`}>{name}'s Photos</Link>

          {/* Replaced `/users/:userId` path with `props.match.path` */}
          <Route path={`${path}/posts`} component={UserPosts} />
          <Route path={`${path}/photos`} component={UserPhotos} />
        </div>}
      );
    };

In tomorrow’s project, you’ll build a rainbow of routes as well as define nested routes. In the future, you may choose to implement nested routes to keep your application’s routes organized within related components.

### What you learned

In this article, you learned:

-   <span id="2378">What nested routes are; and</span>
-   <span id="e072">About creating and navigating nested routes with React Router; and</span>
-   <span id="c8b8">How to use the React Router props to generate nested links and routes.</span>

------------------------------------------------------------------------

### React Builds

A “build” is the process of converting code into something that can actually execute or run on the target platform. A “front-end build” is a process of preparing a front-end or client-side application for the browser.

With React applications, that means (at a minimum) converting JSX to something that browsers can actually understand. When using Create React App, the build process is automatically configured to do that and a lot more.

When you finish this article, you should be able to:

-   <span id="2448">Describe what front-end builds are and why they’re needed;</span>
-   <span id="efab">Describe at a high level what happens in a Create React App when you run `npm start`; and</span>
-   <span id="502f">Prepare to deploy a React application into a production environment.</span>

### Understanding front-end builds

The need for front-end builds predates React. Over the years, developers have found it helpful to extend the lowest common denominator version of JavaScript and CSS that they could use.

Sometimes developers extend JavaScript and CSS with something like <a href="https://www.typescriptlang.org/" class="markup--anchor markup--p-anchor">TypeScript</a> or <a href="https://sass-lang.com/" class="markup--anchor markup--p-anchor">Sass</a>. Using these non-standard languages and syntaxes require you to use a build process to convert your code into standard JavaScript and CSS that can actually run in the browser.

Browser-based applications also require a fair amount of optimization to deliver the best, or at least acceptable, experience to end users. Front-end build processes could be configured to lint code, run unit tests, optimize images, minify and bundle code, and more — all automatically at the press of a button (i.e. running a command at the terminal).

### JavaScript versions and the growth of front-end builds

Developers are generally an impatient lot. When new features are added to JavaScript, we don’t like to wait for browsers to widely support those features before we start to use them in our code. And we *really* don’t like when we have to support older, legacy versions of browsers.

In recent years, JavaScript has been updated on a yearly basis and browser vendors do a decent job of updating their browsers to support the new features as they’re added to the language. Years ago though, there was an infamous delay between versions 5 and 6 of JavaScript. It took *years* before ES6 (or ES2015 as it eventually was renamed to) to officially be completed and even longer before browsers supported all of its features.

In the period of time before ES2015 was broadly supported by browsers, developers used front-end builds to convert or *transpile* ES2015 features and syntax to an older version of the language that was more broadly supported by browsers (typically ES5). The transpilation from ES2015/ES6 down to ES5 was one of the major drivers for developers to add front-end builds to their client-side projects.

### Reviewing common terminology

When learning about front-end or React builds, you’ll encounter a lot of terminology that you may or may not be familiar with. Here’s some of the terminology that you’ll likely encounter:

Linting is process of using a tool to analyze your code to catch common programming errors, bugs, stylistic inconsistencies, and suspicious coding patterns. <a href="https://eslint.org/" class="markup--anchor markup--p-anchor">ESLint</a> is a popular JavaScript linting tool.

Transpilation is the process of converting source code, like JavaScript, from one version to another version. Usually this means converting newer versions of JavaScript, <a href="https://www.ecma-international.org/ecma-262/10.0/index.html" class="markup--anchor markup--p-anchor">ES2019</a> or <a href="https://tc39.es/ecma262/" class="markup--anchor markup--p-anchor">ES2021</a>, to a version that’s more widely supported by browsers, like <a href="http://www.ecma-international.org/ecma-262/6.0/" class="markup--anchor markup--p-anchor">ES2015</a>, or even <a href="https://www.ecma-international.org/ecma-262/5.1/" class="markup--anchor markup--p-anchor">ES5</a> or <a href="https://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf" class="markup--anchor markup--p-anchor">ES3</a> (if you need to support the browser that your parents or grandparents use).

Minification is the process of removing all unnecessary characters in your code (e.g. white space characters, new line characters, comments) to produce an overall smaller file. Minification tools will often also rename identifers in your code (i.e. parameter and variable names) in the quest for smaller and smaller file sizes. Source maps can also be generated to allow debugging tools to cross reference between minified code and the original source code.

Bundling is the process of combining multiple code files into a single file. Creating a bundle (or a handful of bundles) reduces the number of requests that a client needs to make to the server.

Tree shaking is the process of removing unused (or dead) code from your application before it’s bundled. Tree shaking external dependencies can sometimes have a dramatic positive impact on overall bundled file sizes.

### Configuration or code?

Front-end build tools have come and gone over the years; sometimes very quickly, which helped bring about the phenomenon known as <a href="https://sdtimes.com/softwaredev/is-the-javascript-fatigue-real/" class="markup--anchor markup--p-anchor">JavaScript fatigue</a>.

Configuration based tools allow you to create your build tasks by declaring (usually using JSON, XML, or YAML) what you want to be done, without explicitly writing every step in the process. In contrast, coding or scripting based tools allow you to, well, write code to create your build tasks. Configuration based tools *can* sometimes feel simpler to use while giving up some control (at least initially) while coding based tools *can* feel more familiar and predictable (since you’re describing tasks procedurally). Every generalization is false though (including this one), so there are plenty of exceptions.

<a href="https://gruntjs.com/" class="markup--anchor markup--p-anchor">Grunt</a> is a JSON configuration based task runner that can be used to orchestrate the various tasks that make up your front-end build. Grunt was very quickly supplanted by <a href="https://gulpjs.com/" class="markup--anchor markup--p-anchor">Gulp</a>, which allowed developers to write JavaScript to define front-end build tasks. After Gulp, the front-end tooling landscape became a bit more muddled. Some developers preferred the simplicity of using <a href="https://docs.npmjs.com/misc/scripts" class="markup--anchor markup--p-anchor">npm scripts</a> to define build tasks while others preferred the power of configuration based bundlers like <a href="https://webpack.js.org/" class="markup--anchor markup--p-anchor">webpack</a>.

### Babel and webpack (yes, that’s intentionally a lowercase ‘w’)

As front-end or client-side applications grew in complexity, developers found themselves wanting to leverage more advanced JavaScript features and newer syntax like classes, arrow functions, destructuring, async/await, etc. Using a code transpiler, like <a href="https://babeljs.io/" class="markup--anchor markup--p-anchor">Babel</a>, allows you to use all of the latest and greatest features and syntax without worrying about what browsers support what.

Module loaders and bundlers, like <a href="https://webpack.js.org/" class="markup--anchor markup--p-anchor">webpack</a>, also allowed developers to use JavaScript modules without requiring users to use a browser that natively supports ES modules. Also, module bundling (along with minification and tree-shaking) helps to reduce the bandwidth that’s required to deliver the assets for your application to the client.

\[Create React App\]\[cra\] uses webpack (along with Babel) under the covers to build your React applications. Even if you’re not using Create React App, webpack and Babel are still very popular choices for building React applications.

### Pulling back the covers (a bit) on the Create React App build process

Running an application created by Create React App using `npm start` can feel magical. Some stuff happens in the terminal and your application opens into your default browser. Even better, when you make changes to your application, your changes will (usually) automatically appear in the browser!

### The Create React App build process

At a high level, here’s what happens when you run `npm start`:

-   <span id="2808">Environment variables are loaded (more about this in a bit);</span>
-   <span id="f272">The list of browsers to support are checked (more about this too in a bit);</span>
-   <span id="71b2">The configured HTTP port is checked to ensure that it’s available;</span>
-   <span id="f826">The application compiler is configured and created;</span>
-   <span id="c605">`webpack-dev-server` is started;</span>
-   <span id="a696">`webpack-dev-server` compiles your application;</span>
-   <span id="c66e">The `index.html` file is loaded into the browser; and</span>
-   <span id="6add">A file watcher is started to watch your files, waiting for changes.</span>

### Ejecting

Create React App provides a script that you can run to “eject” your application from the Create React App tooling. When you eject your application, all of the hidden stuff is exposed so that you can review and customize it.

> *The need to customize Create React App rarely happens. Also, don’t eject an actual project as it’s a one-way trip! Once a Create React App project has been ejected, there’s no going back (though you could always undo the ejection process by reverting to an earlier commit if you’re using source control).*

To eject your application from Create React App, run the command `npm run eject`. You'll be prompted if you want to continue; type "y" to continue with the ejection process. Once the ejection process has completed, you can review the files that were previously hidden from you.

In the `package.json` file, you'll see the following npm scripts:

    {
      "scripts": {
        "start": "node scripts/start.js",
        "build": "node scripts/build.js",
        "test": "node scripts/test.js"
      }
    }

You can open the `./scripts/start.js` file to see the code that's executed when you run `npm start`.

If you’re curious about the webpack configuration, you can open and review the `./config/webpack.config.js`.

### Preparing to deploy a React application for production

Before you deploy your application to production, you’ll want to make sure that you’ve replaced static values in your code with environment variables and considered what browsers you need to support.

### Defining environment variables

Create React App supports defining environment variables in an `.env` file. To define an environment variable, add an `.env` file to your project and define one or more variables that start with the prefix `REACT_APP_`:

    REACT_APP_FOO: some value
    REACT_APP_BAR: another value

Environment variables can be used in code like this:

    console.log(process.env.REACT_APP_FOO);

You can also reference environment variables in your `index.html` like this:

    <title>%REACT_APP_BAR%</title>

> *Important: Environment variables are embedded into your HTML, CSS, and JavaScript bundles during the build process. Because of this, it’s* very important *to not store any secrets, like API keys, in your environment variables as anyone can view your bundled code in the browser by inspecting your files.*

### Configuring the supported browsers

In your project’s `package.json` file, you can see the list of targeted browsers:

    {
      "browserslist": {
        "production": [
          ">0.2%",
          "not dead",
          "not op_mini all"
        ],
        "development": [
          "last 1 chrome version",
          "last 1 firefox version",
          "last 1 safari version"
        ]
      }
    }

Adjusting these targets affect how your code will be transpiled. Specifying older browser versions will result in your code being transpiled to older versions of JavaScript in order to be compatible with the specified browser versions. The `production` list specifies the browsers to target when creating a production build and the `development` list specifics the browsers to target when running the application using `npm start`.

The <a href="https://browserl.ist/" class="markup--anchor markup--p-anchor">browserl.ist</a> website can be used to see the browsers supported by your configured `browserslist`.

### Creating a production build

To create a production build, run the command `npm run build`. The production build process bundles React in production mode and optimizes the build for the best performance. When the command completes, you'll find your production ready files in the `build` folder.

Now your application is ready to be deployed!

> *For more information about how to deploy a Create React App project into production, see* <a href="https://facebook.github.io/create-react-app/docs/deployment" class="markup--anchor markup--blockquote-anchor"><em>this page</em></a> *in the official documentation.*

### What you learned

In this article, you learned how to:

-   <span id="1ff3">Describe what front-end builds are and why they’re needed;</span>
-   <span id="1fc3">Describe at a high level what happens in a Create React App when you run `npm start`; and</span>
-   <span id="6adc">Prepare to deploy a React application into a production environment.</span>

------------------------------------------------------------------------

### React Router Documentation

Now that you’ve had an introduction to React Router, feel free to explore the official documentation to learn more! As you become a full-fledged software engineer, remember that documentation is your friend. You can take a brief overview for now, as the documentation might include a lot of information at first. The more you learn about React, the more you should revisit the official documentation and learn!

### Setting up React Router

-   <span id="bfa4"><a href="https://reacttraining.com/react-router/web/guides/quick-start" class="markup--anchor markup--li-anchor">React Router Quick Start</a></span>
-   <span id="b0cb"><a href="https://reacttraining.com/react-router/web/api/HashRouter" class="markup--anchor markup--li-anchor">HashRouter</a></span>
-   <span id="f48b"><a href="https://reacttraining.com/react-router/web/api/BrowserRouter" class="markup--anchor markup--li-anchor">BrowserRouter</a></span>

### Routes and Links

-   <span id="72bd"><a href="https://reacttraining.com/react-router/web/api/Route" class="markup--anchor markup--li-anchor">Route</a></span>
-   <span id="e256"><a href="https://reacttraining.com/react-router/web/api/Link" class="markup--anchor markup--li-anchor">Link</a></span>
-   <span id="1d9d"><a href="https://reacttraining.com/react-router/web/api/NavLink" class="markup--anchor markup--li-anchor">NavLink</a></span>

### Switch and Redirect

-   <span id="5240"><a href="https://reacttraining.com/react-router/web/api/Switch" class="markup--anchor markup--li-anchor">Switch</a></span>
-   <span id="b405"><a href="https://reacttraining.com/react-router/web/api/Redirect" class="markup--anchor markup--li-anchor">Redirect</a></span>

### React Router Params (ownProps)

-   <span id="e0d6"><a href="https://reacttraining.com/react-router/web/api/history" class="markup--anchor markup--li-anchor">props.history</a></span>
-   <span id="5f4a"><a href="https://reacttraining.com/react-router/web/api/location" class="markup--anchor markup--li-anchor">props.location</a></span>
-   <span id="bd15"><a href="https://reacttraining.com/react-router/web/api/match" class="markup--anchor markup--li-anchor">props.match</a></span>

------------------------------------------------------------------------

### Rainbow Routes Project

Today you’re going to get our first experience using React Router. The goal is to create a basic app that displays the colors of the rainbow. This rainbow, however, has something special about it — some of the colors are nested within others.

### Phase 0: Setup

Begin by creating a new React project:

    npx create-react-app rainbow-routes --template @appacademy/simple

Now you’ll remove all the contents of your `src` and all the contents from your `public` directory to build the application architecture from scratch! After you have deleted all your files within the directories, create a new `index.html` file in your `public` folder. Use the `html:5` emmet shortcut to generate an HTML template. Title your page "Rainbow Routes" and create a `div` with an `id` of `root` in your DOM's `<body>` element. Create an `index.css` file in your `src` directory with the following code. Now let's create your entry file!

    h4 {
      color: darkblue;
      cursor: pointer;
    }

    h4:hover {
      text-decoration: underline;
    }

    #rainbow {
      position: absolute;
      top: 0;
      left: 300px;
    }

    h3 {
      position: absolute;
      top: 1px;
    }

    .red {
      background-color: red;
      width: 100px;
      height: 100px;
    }

    .orange {
      background-color: orange;
      width: 100px;
      height: 50px;
    }

    .yellow {
      background-color: yellow;
      width: 100px;
      height: 50px;
    }

    .green {
      background-color: green;
      width: 100px;
      height: 100px;
    }

    .blue {
      background-color: blue;
      width: 100px;
      height: 100px;
    }

    .indigo {
      background-color: mediumslateblue;
      width: 100px;
      height: 50px;
    }

    .violet {
      background-color: darkviolet;
      width: 100px;
      height: 100px;
    }

    a {
      display: block;
      margin-bottom: 10px;
    }

Create an `index.js` entry file in the `src` directory. At the top of the file, make sure to import `React` from the `react` package and `ReactDOM` from the `react-dom` package. Make sure to also import your the `index.css` file you just created! This will take care of styling your *rainbow routes*.

Now you can use the `ReactDOM.render()` method to render a `<Root />` component instead of the DOM element with an `id` of `root`. Lastly, wrap your render function with a `DOMContentLoaded` event listener, like so:

    document.addEventListener('DOMContentLoaded', () => {
      ReactDOM.render(
        <Root />,
        document.getElementById('root'),
      );
    });

Let’s create your `Root` component right in your entry file! Your `Root` component will take care of applying your `BrowserRouter` to the application. Applying the `BrowserRouter` to your `Root` component allows all the child components rendering within `<BrowserRouter>` tags to use and access the `Route`, `Link`, and `NavLink` components within the `react-router-dom` package.

    const Root = () => (
      // TODO: Apply BrowserRouter
      // TODO: Render rainbow
    );

Install the `react-router-dom` package:

    npm install react-router-dom@^5.0.0

Now import `BrowserRouter` from the `react-router-dom` package, like so:

    import { BrowserRouter } from 'react-router-dom';

You’re going to be rendering a lot of components, so let’s keep your `src` directory organized by creating a `components` directory within. Within your new `./src/components` directory, create a `Rainbow.js` file for your `Rainbow` component with the following code:

    // ./src/components/Rainbow.js
    import React from 'react';
    import { Route, Link, NavLink } from 'react-router-dom';

    const Rainbow = () => (
      <div>
        <h1>Rainbow Router!</h1>
        {/* Your links should go here */}

        <div id="rainbow">
          {/* Your routes should go here */}
        </div>
      </div>
    );

    export default Rainbow;

Your `Rainbow` component will act as the home page or default path (`/`) of your application. Import the `Rainbow` component into your entry file and have your `Root` component render `<Rainbow />` wrapped within `<BrowserRouter>` tags, like so:

    const Root = () => (
      <BrowserRouter>
        <Rainbow />
      </BrowserRouter>
    );

Within your `Rainbow` component, you'll be rendering `<NavLink>` and `<Route>` components to add different navigation paths to different components. Let's create all the components you will render!

Create files for the following components in your `./src/components` directory:

-   <span id="1c8e">`Red`</span>
-   <span id="a8dd">`Blue`</span>
-   <span id="6ca3">`Green`</span>
-   <span id="8e44">`Indigo`</span>
-   <span id="f8f2">`Orange`</span>
-   <span id="0f47">`Violet`</span>
-   <span id="8a89">`Yellow`</span>

Your `Red` and `Blue` components will look something like this:

    import React from 'react';
    import { Route, Link, NavLink } from 'react-router-dom';

    const Color = () => (
      <div>
        <h2 className="color">Color</h2>
        {/* Links here */}

        {/* Routes here */}
      </div>
    );

    export default Color;

Your `Green`, `Indigo`, `Orange`, `Violet`, and `Yellow` components will look something like this:

    import React from 'react';

    const Color = () => (
      <div>
        <h3 className="color">Color</h3>
      </div>
    );

    export default Color;

Now start your server and verify you can see the “Rainbow Router!” header from your `Rainbow` component. Currently there is no functionality. Let's fix that!

### Phase 1: Routes

As a reminder, wrapping the `Rainbow` component in `<BrowserRouter>` tags makes the router available to all descendent React Router components. Now open the `Rainbow.js` file. You're going to render some of your color components from here. Ultimately you want your routes to look like this.

URLComponents`/Rainbow/redRainbow -> Red/red/orangeRainbow -> Red -> Orange/red/yellowRainbow -> Red -> Yellow/greenRainbow -> Green/blueRainbow -> Blue/blue/indigoRainbow -> Blue -> Indigo/violetRainbow -> Violet`

This means that the `Red`, `Green`, `Blue`, and `Violet` components need to render in the `Rainbow` component, but only when you are at the corresponding URL. You'll do this with `Route` components. Begin by importing the `Red`, `Green`, `Blue`, and `Violet` components into your `Rainbow.js` file. Then add the necessary `Route` components inside the `div` with `id="rainbow"` in the `Rainbow` component. For example to render the `Red` component with the `/red` path, you would use the following `Route` component:

    <Route path="/red" component={Red} />

Test that your code works! Manually type in each URL you just created, and you should see the color component pop up. Remember, these are React Routes, so the paths you created will come after the `/`. For example, your default rainbow route will look like `http://localhost:3000/` while your red route will look like `http://localhost:3000/red`<a href="http://localhost:3000/red." class="markup--anchor markup--p-anchor">.</a>

You want to nest the `Orange` and `Yellow` components inside the `Red` component, and the `Indigo` component inside the `Blue` component. Remember to import your components to use them in a `Route` tag. You'll have to go add the corresponding `Route` tags to the `Red.js` and `Blue.js` files. Make sure to use the correct nested paths, such as `"/red/orange"` for the orange `Route`.

### Phase 2: Links

Manually navigating to our newly created routes is tiresome, so let’s add functionality to take care of this process for us. React Router provides the `Link` and `NavLink` components for this purpose.

Add `Link`s to the paths `/red`, `/green`, `/blue`, and `/violet` in the `Rainbow` component. For example, your red link should look like

    <Link to="/red">Red</NavLink>

When you are at `blue` you want to be able to get to `/blue/indigo`, and then back to `/blue`. Add the corresponding `Link`s to the `Blue` component like this:

    <Link to='/blue' >Blue only</Link>
    <Link to='/blue/indigo' >Add indigo</Link>

Similarly, add `Link`s to `/red`, `/red/orange` and `/red/yellow` to the `Red` component. Test all your links. Navigation is so much easier now!

### Phase 3: NavLinks

It would be nice if our links gave us some indication of which route you were at. Fortunately, React Router has a special component for that very purpose: `NavLink`. NavLinks get an extra CSS class when their `to` prop matches the current URL. By default this class is called `active`.

Go ahead and switch all your `Link`s to `NavLink`s. If you open the app you won't see any change yet. That's because you haven't added any special styling to the `active` class. Go ahead and open the `index.css` file. Create an `.active` class and add the line `font-weight: 700`. Now your active links will be bold. Isn't that nice!

The only problem is that now the `Blue only` link is active even when the path is `/blue/indigo`. That doesn't make a lot of sense. Let's add the `exact` flag to that link so it will only be active when its `to` exactly matches the current path. Now it should look like:

    <NavLink exact to="/blue">
      Blue only
    </NavLink>

Do the same for the `Red only` link. Everything should be working now.

### Phase 4 — Changing NavLink’s Active Class

You’ve already set up `NavLink` to bold the link text using the `.active` class in `src/index.css`. But what if you wanted this class to be something else? For instance, what if you want your main color links (Red, Green, Blue, Violet) to be styled differently when active than your sub-route links (Red Only, Add Orange, Add Yellow, etc.).

You can set the class that React Router sets to an active `NavLink` by adding the `activeClassName` prop.

For instance, when we are at a route matching the below `NavLink`'s `to` prop, the component will have a class of `.parent-active` applied:

    <NavLink to="/blue" activeClassName="parent-active" >
      Blue
    </NavLink>

This allows much more flexibility to style an active `NavLink`!

Using the example above, add an `activeClassName` prop to each of your `NavLink`s in `src/components/Rainbow.js`. Now, add some CSS styling for that class in your `src/index.css` to distinguish your main and your sub-route links.

Compare your work to the solution and make sure the behavior is the same. Time to celebrate! ✨ 🌈 ✨

You can also learn more about using the React Router at <a href="https://reacttraining.com/react-router/web/guides/quick-start" class="markup--anchor markup--p-anchor">reacttraining.com</a>!

------------------------------------------------------------------------

### Exploring React Builds Project

In this project, you’ll use Create React App to create a simple React application. You’ll experiment with some of the features that Create React App provides and deploy a production build of your application to a standalone Express application.

### Phase 0: Setup

Begin by using the <a href="https://github.com/facebook/create-react-app" class="markup--anchor markup--p-anchor">create-react-app</a> package to create a React application:

    npx create-react-app exploring-react-builds --template @appacademy/simple

> *Remember that using the* `create-react-app` *command initializes your project as a Git repository. If you use the* `ls -a` *to view the hidden files in your project, you'll see the *`.git` *file.*

Update the `App` component:

-   <span id="9186">Wrap the `<h1>` element with a `<div>` element; and</span>
-   <span id="5e97">Change the `<h1>` element content to something like "Exploring React Builds".</span>

<!-- -->

    // ./src/App.js

    import React from 'react';

    function App() {
      return (
        <div>
          <h1>Exploring React Builds</h1>
        </div>
      );
    }

    export default App;

### Phase 1: Using CSS modules

You’ve already seen an example of using the `import` keyword to import a stylesheet into a module so that it'll be included in your application build. That's the technique being used to include the global `index.css` stylesheet:

    // ./src/index.js

    import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import App from './App';

    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );

You can also leverage <a href="https://github.com/css-modules/css-modules" class="markup--anchor markup--p-anchor">CSS modules</a> in your Create React App projects. CSS Modules scope stylesheet class names so that they are unique to a specific React component. This allows you to create class names without having to worry if they might collide with class names used in another component.

Add a new `css-modules` folder to the `src` folder. Within that folder, add the following files:

-   <span id="2912">`HeadingA.js`</span>
-   <span id="3aa3">`HeadingA.module.css`</span>
-   <span id="2ea3">`HeadingB.js`</span>
-   <span id="ca2b">`HeadingB.module.css`</span>

Then update the contents of each file to the following:

    // ./src/css-modules/HeadingA.js

    import React from 'react';
    import styles from './HeadingA.module.css';

    function HeadingA() {
      return (
        <h1 className={styles.heading}>Heading A</h1>
      );
    }

    export default HeadingA;

    /* ./src/css-modules/HeadingA.module.css */

    .heading {
      color: green;
    }

    // ./src/css-modules/HeadingB.js

    import React from 'react';
    import styles from './HeadingB.module.css';

    function HeadingB() {
      return (
        <h1 className={styles.heading}>Heading B</h1>
      );
    }

    export default HeadingB;

    /* ./src/css-modules/HeadingB.module.css */

    .heading {
      color: red;
    }

Notice how the `.heading` CSS class name is being used within each component to set the color of the `<h1>` element. For the `HeadingA` component, the color is `green`, and for the `HeadingB` component, the color is `red`. Using the file naming convention `[name].module.css` let's Create React App know that we want these stylesheets to be processed as CSS Modules. Using CSS Modules allows the `.heading` class name to be reused across components without any issue.

To see this feature in action, update your `App` component to render both of your new components:

    import React from 'react';
    import HeadingA from './css-modules/HeadingA';
    import HeadingB from './css-modules/HeadingB';

    function App() {
      return (
        <div>
          <h1>Exploring React Builds</h1>
          <HeadingA />
          <HeadingB />
        </div>
      );
    }

    export default App;

Then run your application (`npm start`) to see "Heading A" and "Heading B" displayed respectively in green and red. If you use the browser's developer tools to inspect "Heading A", you'll see that the `.heading` class name has been modified so that it's unique to the `HeadingA` component:

CSS Modules is an example of how a front-end build process can be used to modify code to enable a feature that’s not natively supported by browsers.

### Phase 2: Using an image in a component

Create React App configures webpack with support for loading images (as well as CSS, fonts, and other file types). What this means, for you as the developer, is that you can add an image file to your project, import it directly into a module, and render it in a React component.

Download any image of off the Web or <a href="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/react-redux/topics/react-builds/assets/react-builds-cat.png" class="markup--anchor markup--p-anchor">click here</a> to download the below image.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*233dNJ6vfgAmEVCD" class="graf-image" /></figure>Then within the `src` folder add a new folder named `image`. Within that folder add a new component file named `Image.js`. Also add your downloaded image file to the `image` folder (so it's a sibling to the `Image.js` file).

Update the contents of the `Image.js` file to this:

    // ./src/image/Image.js

    import React from 'react';
    import cat from './react-builds-cat.png';

    console.log(cat); // /static/media/react-builds-cat.45f7f4d2.png

    function Image() {
      // Import result is the URL of your image.
      return <img src={cat} alt="images/images/Cat" />;
    }

    export default Image;

You can import an image into a component using the `import` keyword. This tells webpack to include the image in the build. Notice that when you import an image into a module, you'll get a path to the image's location within the build. You can use this path to set the `src` attribute on an `<img>` element.

> *Be sure to update the image* `import` *statement to the correct file name if you're using your own image!*

Now update the `App` component to import and render the `Image` component:

    // ./src/App.js

    import React from 'react';
    import HeadingA from './css-modules/HeadingA';
    import HeadingB from './css-modules/HeadingB';
    import Image from './image/Image';

    function App() {
      return (
        <div>
          <h1>Exploring React Builds</h1>
          <HeadingA />
          <HeadingB />
          <Image />
        </div>
      );
    }

    export default App;

If you run your application (`npm start`) you'll see your image displayed on the page! You can also open your browser's developer tools and view the "Sources" for the current page. If you can expand the `localhost:3000` &gt; `static` &gt; `media` node on the left, you can see the image file that webpack copied to your build.

### Images in stylesheets

You can also reference images in your CSS files too. Add a CSS file named `Image.css` to the `./src/image` folder and update its contents to this:

    /* ./src/image/Image.css */

    .cat {
      background-image: url(./react-builds-cat.png);
      width: 400px;
      height: 400px;
    }

Then update the `Image` component to this:

    // ./src/image/Image.js

    import React from 'react';
    import './Image.css';
    import cat from './react-builds-cat.png';

    console.log(cat); // /static/media/react-builds-cat.45f7f4d2.png

    function Image() {
      return (
        <div>
          {/* Import result is the URL of your image. */}
          <img src={cat} alt="Cat" />
          <div className='cat'></div>
        </div>
      );
    }

    export default Image;

Now you’ll see the image displayed twice on the page!

### Phase 3: Updating the supported browsers (and its affect on code transpilation)

Earlier you learned about the `browerslist` setting in the `package.json` file and now adjusting these targets affect how your code will be transpiled:

    {
      "browserslist": {
        "production": [
          ">0.2%",
          "not dead",
          "not op_mini all"
        ],
        "development": [
          "last 1 chrome version",
          "last 1 firefox version",
          "last 1 safari version"
        ]
      }
    }

The `production` list specifies the browsers to target when creating a production build and the `development` list specifics the browsers to target when running the application using `npm start`. Currently, you're targeting relatively recent versions of the major browsers when creating a development build. Targeting older browser versions results in your code being transpiled to an older version of JavaScript.

To experiment with this configuration option, let’s add a class component to the project. Add a new folder named `class-component` to the `src` folder. Within that folder, add a file named `ClassComponent.js` containing the following code:

    // ./src/class-component/ClassComponent.js

    import React from 'react';

    class ClassComponent extends React.Component {
      render() {
        return (
          <h1>Class Component</h1>
        );
      }
    }

    export default ClassComponent;

Don’t forget to update your `App` component to render the new component:

    // ./src/App.js

    import React from 'react';
    import HeadingA from './css-modules/HeadingA';
    import HeadingB from './css-modules/HeadingB';
    import Image from './image/Image';
    import ClassComponent from './class-component/ClassComponent';

    function App() {
      return (
        <div>
          <h1>Exploring React Builds</h1>
          <HeadingA />
          <HeadingB />
          <Image />
          <ClassComponent />
        </div>
      );
    }

    export default App;

Now run your application using `npm start`. Open your browser's developer tools and view the "Sources" for the current page. Expand the `localhost:3000` &gt; `static` &gt; `js` node on the left and select the `main.chunk.js` file. Press `CMD+F` on macOS or `CTRL+F` on Windows to search the file for "Class Component". Here's what the transpiled code looks like for the `ClassComponent` class:

    class ClassComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
      render() {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7,
            columnNumber: 7
          }
        }, "Class Component");
      }
    }

> *Have you wondered yet why you need to use the developer tools to view the bundles generated by Create React App? Remember that when you run* `npm start`*, Create React App builds your application using* `webpack-dev-server`*. To keep things as performant as possible, the bundles generated by* `webpack-dev-server` *are stored in memory instead of writing them to the file system.*

The JSX in the component’s `render` method has been converted to JavaScript but the `ClassComponent` ES2015 class is left alone. This makes sense though as JSX isn't natively supported by any browser while ES2015 classes have been natively supported by browsers for awhile now.

But what if you need to target a version of a browser that doesn’t support ES2015 classes? You can use the <a href="https://caniuse.com/#feat=es6-class" class="markup--anchor markup--p-anchor">“Can I use…”</a> website to see when browsers started supporting ES2105 (or ES6) classes. Starting with version 49, Chrome natively supported classes. But imagine that you need to support Chrome going back to version 30, a version of Chrome that doesn’t support classes.

Change the `browserslist.development` property in the `package.json` file to this:

    {
      "browserslist": {
        "production": [
          ">0.2%",
          "not dead",
          "not op_mini all"
        ],
        "development": [
          "chrome >= 30",
          "last 1 firefox version",
          "last 1 safari version"
        ]
      }
    }

The query `chrome >= 30` specifies that you want to target Chrome version 30 or newer.

> *The* <a href="https://browserl.ist/" class="markup--anchor markup--blockquote-anchor"><em>browserl.ist</em></a> *website can be used to see the browsers supported by your configured* `browserslist`*.*

Stop your application if it’s currently running. Delete the `./node_modules/.cache` folder and run `npm start` again. Then view the `main.chunk.js` bundle again in the developer tools:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*TKBUkpbL5aSm5PTQ" class="graf-image" /></figure>Now your ES2015 class component is being converted to a constructor function! Here’s the transpiled code for reference:

    var ClassComponent = /*#__PURE__*/function (_React$Component) {
      Object(_Users_jameschurchill_Documents_GitHub_Modular_Curriculum_content_react_redux_topics_react_builds_projects_exploring_react_builds_solution_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ClassComponent, _React$Component);

      var _super = Object(_Users_jameschurchill_Documents_GitHub_Modular_Curriculum_content_react_redux_topics_react_builds_projects_exploring_react_builds_solution_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(ClassComponent);

      function ClassComponent() {
        Object(_Users_jameschurchill_Documents_GitHub_Modular_Curriculum_content_react_redux_topics_react_builds_projects_exploring_react_builds_solution_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ClassComponent);

        return _super.apply(this, arguments);
      }

      Object(_Users_jameschurchill_Documents_GitHub_Modular_Curriculum_content_react_redux_topics_react_builds_projects_exploring_react_builds_solution_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ClassComponent, [{
        key: "render",
        value: function render() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 7,
              columnNumber: 7
            }
          }, "Class Component");
        }
      }]);

      return ClassComponent;
    }(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Luckily it’s very rare that you’ll need to read the code in your generated bundles. webpack, by default, is configured to generate sourcemaps. Sourcemaps are a mapping of the code in a generated file, like a bundle file, to the original source code. This gives you access to your original source code in the browser’s developer tools:

You can even set a breakpoint in your source within the developer tools to stop execution on a specific line of code!

### Phase 4: Adding environment variables

Earlier you learned that Create React App supports defining environment variables in an `.env` file. This gives you a convenient way to avoid hard coding values that vary across environments.

Let’s experiment with this feature so that you can see how the Create React App build process embeds environment variables into your HTML, CSS, and JavaScript bundles.

Add an `.env` file to the root of your Create React App project. Define an environment variable named `REACT_APP_TITLE`:

    REACT_APP_TITLE=Exploring React Builds

Remember that environment variables need to be prefixed with `REACT_APP_` for Create React App to process them. After defining your environment variable, you can refer to it within JSX using an expression and `process.env`:

    // ./src/App.js

    import React from 'react';
    import HeadingA from './css-modules/HeadingA';
    import HeadingB from './css-modules/HeadingB';
    import Image from './image/Image';
    import ClassComponent from './class-component/ClassComponent';

    function App() {
      return (
        <div>
          <h1>{process.env.REACT_APP_TITLE}</h1>
          <HeadingA />
          <HeadingB />
          <Image />
          <ClassComponent />
        </div>
      );
    }

    export default App;

Environment variables can also be referred to in regular JavaScript code:

    console.log(process.env.REACT_APP_TITLE);

You can also reference environment variables in your `./public/index.html` file like this:

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>%REACT_APP_TITLE%</title>
      </head>
      <body>
        <div id="root"></div>
      </body>
    </html>

Run your application again using `npm start`. Open your browser's developer tools and view the "Sources" for the current page. Expand the `localhost:3000` node on the left and select `(index)`. Notice that the text `%REACT_APP_TITLE%` within the `<title>` element has been converted to the text literal `Exploring React Builds`:

If you expand the `localhost:3000` &gt; `static` &gt; `js` node on the left and select the `main.chunk.js` file, you can see how the `App` component's JSX has been converted to JavaScript:

Here’s a closer look at the relevant `React.createElement` method call:

    /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 7
        }
      }, "Exploring React Builds")

Again, notice how the environment variable has been replaced with a text literal. This has important security implications for you to consider. Because environment variables are embedded into your HTML, CSS, and JavaScript bundles during the build process, it’s *very important* to not store any secrets, like API keys, in your environment variables. Remember, anyone can view your bundled code in the browser by inspecting your files!

### Phase 5: Deploying a production build

In the last phase of this project, let’s add routing to the React application, create a production build, and deploy the build to an Express application!

### Adding routing

To add React Router to the application, start by installing the `react-router-dom` npm package:

    npm install react-router-dom@^5.0.0

Then update the `App` component to this code:

    // ./src/App.js

    import React from 'react';
    import {
      BrowserRouter,
      Switch,
      Route,
      Link
    } from 'react-router-dom';
    import HeadingA from './css-modules/HeadingA';
    import HeadingB from './css-modules/HeadingB';
    import Image from './image/Image';
    import ClassComponent from './class-component/ClassComponent';

    function App() {
      return (
        <BrowserRouter>
          <div>
            <h1>{process.env.REACT_APP_TITLE}</h1>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/image">Image</Link>
                </li>
                <li>
                  <Link to="/class-component">Class Component</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/image">
                <Image />
              </Route>
              <Route path="/class-component">
                <ClassComponent />
              </Route>
              <Route path="/">
                <HeadingA />
                <HeadingB />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      );
    }

    export default App;

Be sure to run and test your application to ensure that the defined routes work as expected:

-   <span id="151a">`/` - Should display the `HeadingA` and `HeadingB` components;</span>
-   <span id="1e2b">`/image` - Should display the `Image` component; and</span>
-   <span id="7f3a">`/class-component` - Should display the `ClassComponent` component.</span>

### Creating a production build

To create a production build, run the command `npm run build` from the root of your project. The output in the terminal should look something like this:

    > solution@0.1.0 build [absolute path to your project]
    > react-scripts build

    Creating an optimized production build...
    Compiled successfully.

    File sizes after gzip:

      47.83 KB  build/static/js/2.722c16c4.chunk.js
      773 B     build/static/js/runtime-main.b7d1e5ee.js
      745 B     build/static/js/main.12299197.chunk.js
      197 B     build/static/css/main.e9a0d1f8.chunk.css

    The project was built assuming it is hosted at /.
    You can control this with the homepage field in your package.json.

    The build folder is ready to be deployed.
    You may serve it with a static server:

      npm install -g serve
      serve -s build

    Find out more about deployment here:

      bit.ly/CRA-deploy

Ignore the comments about using `serve` to deploy your application (i.e. `npm install -g serve` and `serve -s build`). In the next step, you'll create a simple Express application to server your React application.

### Serving a React application using Express

Create a new folder for your Express application outside of the Create React App project folder.

> *For example, from the root of your project, use* `cd ..` *to go up a level and then create a new folder named* `express-server` *by running the command* `mkdir express-server`*. This makes the* `express-server` *folder a sibling to your Create React App project folder.*

Browse into the `express-server` folder and initialize it to use npm (i.e. `npm init -y`). Then install Express by running the command `npm install express@^4.0.0`.

App a file named `app.js` with the following contents:

    // ./app.js

    const express = require('express');
    const path = require('path');

    const app = express();

    app.use(express.static(path.join(__dirname, 'public')));

    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });

    const port = 9000;

    app.listen(port, () => console.log(`Listening on port ${port}...`));

This simple Express application will:

-   <span id="31ba">Attempt to match incoming requests to static files located in the `public` folder; and</span>
-   <span id="16e6">If a matching static file isn’t found, then the `./public/index.html` file will be served for all other requests.</span>

Now add a folder named `public` to the root of your Express project. Copy the files from the `build` folder in your Create React App project to the `public` folder in the Express application project. Then run your application using the command `node app.js`.

Open a browser and browse to the URL `http://localhost:9000/`. You should see your React application served from your Express application! Be sure to click the navigation links to verify that all of your configured routes work as expected.

Also, because you configured Express to serve the `./public/index.html` file for any request that doesn't match a static file, you can "deep link" to any of your React application's routes:

-   <span id="58e7"><a href="http://localhost:9000/image" class="markup--anchor markup--li-anchor">http://localhost:9000/image</a></span>
-   <span id="3fa9"><a href="http://localhost:9000/class-component" class="markup--anchor markup--li-anchor">http://localhost:9000/class-component</a></span>

*More content at* <a href="http://plainenglish.io/" class="markup--anchor markup--p-anchor"><strong><em>plainenglish.io</em></strong></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [July 15, 2021](https://medium.com/p/1965dcde8d4f).

<a href="https://medium.com/@bryanguner/react-in-depth-1965dcde8d4f" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.

A Quick Guide to Big-O Notation, Memoization, Tabulation, and Sorting Algorithms by Example
===========================================================================================

Curating Complexity: A Guide to Big-O Notation

------------------------------------------------------------------------

### A Quick Guide to Big-O Notation, Memoization, Tabulation, and Sorting Algorithms by Example

<figure><img src="https://cdn-images-1.medium.com/max/800/0*yjlSk3T9c2_14in1.png" class="graf-image" /></figure>***Curating Complexity: A Guide to Big-O Notation***

<a href="https://replit.com/@bgoonz/Medium-article-comp-complex" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://replit.com/@bgoonz/Medium-article-comp-complex"><strong>Medium-article-comp-complex</strong><br />
<em>A Node.js repl by bgoonz</em>replit.com</a><a href="https://replit.com/@bgoonz/Medium-article-comp-complex" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

-   <span id="b70f">Why is looking at runtime not a reliable method of calculating time complexity?</span>
-   <span id="2b21">Not all computers are made equal( some may be stronger and therefore boost our runtime speed )</span>
-   <span id="1e1a">How many background processes ran concurrently with our program that was being tested?</span>
-   <span id="1cad">We also need to ask if our code remains performant if we increase the size of the input.</span>
-   <span id="3cb7">The real question we need to answering is: `How does our performance scale?`.</span>

### big ‘O’ notation

-   <span id="9b21">Big O Notation is a tool for describing the efficiency of algorithms with respect to the size of the input arguments.</span>
-   <span id="c0e6">Since we use mathematical functions in Big-O, there are a few big picture ideas that we’ll want to keep in mind:</span>
-   <span id="2e86">The function should be defined by the size of the input.</span>
-   <span id="07b0">`Smaller` Big O is better (lower time complexity)</span>
-   <span id="f1b0">Big O is used to describe the worst case scenario.</span>
-   <span id="e11f">Big O is simplified to show only its most dominant mathematical term.</span>

### Simplifying Math Terms

-   <span id="64a4">We can use the following rules to simplify the our Big O functions:</span>
-   <span id="a2c2">`Simplify Products` : If the function is a product of many terms, we drop the terms that don't depend on n.</span>
-   <span id="b058">`Simplify Sums` : If the function is a sum of many terms, we drop the non-dominant terms.</span>
-   <span id="eb32">`n` : size of the input</span>
-   <span id="c042">`T(f)` : unsimplified math function</span>
-   <span id="7b41">`O(f)` : simplified math function.</span>

`Putting it all together`

<figure><img src="https://cdn-images-1.medium.com/max/800/1*TT8uuv1x3nmGUw5rvtoZ8A.png" class="graf-image" /></figure>-   <span id="d18b">First we apply the product rule to drop all constants.</span>
-   <span id="4335">Then we apply the sum rule to select the single most dominant term.</span>

------------------------------------------------------------------------

### Complexity Classes

Common Complexity Classes

#### There are 7 major classes in Time Complexity

<figure><img src="https://cdn-images-1.medium.com/max/800/1*6zKhmJoHkvDbrd8jfUDf3A.png" class="graf-image" /></figure>#### `O(1) Constant`

> **The algorithm takes roughly the same number of steps for any input size.**

#### `O(log(n)) Logarithmic`

> **In most cases our hidden base of Logarithmic time is 2, log complexity algorithm’s will typically display ‘halving’ the size of the input (like binary search!)**

#### `O(n) Linear`

> **Linear algorithm’s will access each item of the input “once”.**

### `O(nlog(n)) Log Linear Time`

> **Combination of linear and logarithmic behavior, we will see features from both classes.**

> Algorithm’s that are log-linear will use **both recursion AND iteration.**

### `O(nc) Polynomial`

> **C is a fixed constant.**

### `O(c^n) Exponential`

> **C is now the number of recursive calls made in each stack frame.**

> **Algorithm’s with exponential time are VERY SLOW.**

------------------------------------------------------------------------

### Memoization

-   <span id="b3b0">Memoization : a design pattern used to reduce the overall number of calculations that can occur in algorithms that use recursive strategies to solve.</span>
-   <span id="2583">MZ stores the results of the sub-problems in some other data structure, so that we can avoid duplicate calculations and only ‘solve’ each problem once.</span>
-   <span id="65c9">Two features that comprise memoization:</span>

1.  <span id="b2d2">FUNCTION MUST BE RECURSIVE.</span>
2.  <span id="91a3">Our additional Data Structure is usually an object (we refer to it as our memo… or sometimes cache!)</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*4U79jBMjU2wKE_tyYcD_3A.png" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/1*Qh42KZgcCxmVt6WrTasCVw.png" class="graf-image" /></figure>### Memoizing Factorial

Our memo object is *mapping* out our arguments of factorial to it’s return value.

-   <span id="854a">Keep in mind we didn’t improve the speed of our algorithm.</span>

### Memoizing Fibonacci

<figure><img src="https://cdn-images-1.medium.com/max/800/0*2XaPj7UGKZYFjYhb" class="graf-image" /></figure>-   <span id="5be6">Our time complexity for Fibonacci goes from O(2^n) to O(n) after applying memoization.</span>

### The Memoization Formula

> *Rules:*

1.  <span id="b3f0">*Write the unoptimized brute force recursion (make sure it works);*</span>
2.  <span id="b36e">*Add memo object as an additional argument .*</span>
3.  <span id="f81f">*Add a base case condition that returns the stored value if the function’s argument is in the memo.*</span>
4.  <span id="1b0f">*Before returning the result of the recursive case, store it in the memo as a value and make the function’s argument it’s key.*</span>

#### Things to remember

1.  <span id="bc4a">*When solving DP problems with Memoization, it is helpful to draw out the visual tree first.*</span>
2.  <span id="7bb1">*When you notice duplicate sub-tree’s that means we can memoize.*</span>

------------------------------------------------------------------------

### Tabulation

#### Tabulation Strategy

> Use When:

-   <span id="f5b0">**The function is iterative and not recursive.**</span>
-   <span id="015c">*The accompanying DS is usually an array.*</span>

#### Steps for tabulation

-   <span id="8918">*Create a table array based off the size of the input.*</span>
-   <span id="b4e7">*Initialize some values in the table to ‘answer’ the trivially small subproblem.*</span>
-   <span id="072e">*Iterate through the array and fill in the remaining entries.*</span>
-   <span id="192e">*Your final answer is usually the last entry in the table.*</span>

------------------------------------------------------------------------

### Memo and Tab Demo with Fibonacci

> *Normal Recursive Fibonacci*

    function fibonacci(n) {
      if (n <= 2) return 1;
      return fibonacci(n - 1) + fibonacci(n - 2);
    }

> *Memoization Fibonacci 1*

> *Memoization Fibonacci 2*

> *Tabulated Fibonacci*

### Example of Linear Search

-   <span id="84b2">*Worst Case Scenario: The term does not even exist in the array.*</span>
-   <span id="30dc">*Meaning: If it doesn’t exist then our for loop would run until the end therefore making our time complexity O(n).*</span>

------------------------------------------------------------------------

### Sorting Algorithms

### Bubble Sort

`Time Complexity`: Quadratic O(n^2)

-   <span id="ce1e">The inner for-loop contributes to O(n), however in a worst case scenario the while loop will need to run n times before bringing all n elements to their final resting spot.</span>

`Space Complexity`: O(1)

-   <span id="664f">Bubble Sort will always use the same amount of memory regardless of n.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Ck9aeGY-d5tbz7dT" class="graf-image" /></figure>-   <span id="4115">The first major sorting algorithm one learns in introductory programming courses.</span>
-   <span id="ecd4">Gives an intro on how to convert unsorted data into sorted data.</span>

> It’s almost never used in production code because:

-   <span id="3cb1">*It’s not efficient*</span>
-   <span id="4eac">*It’s not commonly used*</span>
-   <span id="d730">*There is stigma attached to it*</span>
-   <span id="8da7">`Bubbling Up`* : Term that infers that an item is in motion, moving in some direction, and has some final resting destination.*</span>
-   <span id="8447">*Bubble sort, sorts an array of integers by bubbling the largest integer to the top.*</span>

<!-- -->

-   <span id="dcd2">*Worst Case & Best Case are always the same because it makes nested loops.*</span>
-   <span id="9a6a">*Double for loops are polynomial time complexity or more specifically in this case Quadratic (Big O) of: O(n²)*</span>

### Selection Sort

`Time Complexity`: Quadratic O(n^2)

-   <span id="646d">Our outer loop will contribute O(n) while the inner loop will contribute O(n / 2) on average. Because our loops are nested we will get O(n²);</span>

`Space Complexity`: O(1)

-   <span id="45ae">Selection Sort will always use the same amount of memory regardless of n.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*AByxtBjFrPVVYmyu" class="graf-image" /></figure>-   <span id="c618">Selection sort organizes the smallest elements to the start of the array.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*GeYNxlRcbt2cf0rY" class="graf-image" /></figure>Summary of how Selection Sort should work:

1.  <span id="2277">*Set MIN to location 0*</span>
2.  <span id="c76c">*Search the minimum element in the list.*</span>
3.  <span id="79d3">*Swap with value at location Min*</span>
4.  <span id="4ede">*Increment Min to point to next element.*</span>
5.  <span id="a649">*Repeat until list is sorted.*</span>

### Insertion Sort

`Time Complexity`: Quadratic O(n^2)

-   <span id="95ea">Our outer loop will contribute O(n) while the inner loop will contribute O(n / 2) on average. Because our loops are nested we will get O(n²);</span>

`Space Complexity`: O(n)

-   <span id="f6fa">Because we are creating a subArray for each element in the original input, our Space Comlexity becomes linear.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*gbNU6wrszGPrfAZG" class="graf-image" /></figure>### Merge Sort

`Time Complexity`: Log Linear O(nlog(n))

-   <span id="44b2">Since our array gets split in half every single time we contribute O(log(n)). The while loop contained in our helper merge function contributes O(n) therefore our time complexity is O(nlog(n)); `Space Complexity`: O(n)</span>
-   <span id="9a83">We are linear O(n) time because we are creating subArrays.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*GeU8YwwCoK8GiSTD" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*IxqGb72XDVDeeiMl" class="graf-image" /></figure>### Example of Merge Sort

<figure><img src="https://cdn-images-1.medium.com/max/800/0*HMCR--9niDt5zY6M" class="graf-image" /></figure>-   <span id="48b4">**Merge sort is O(nlog(n)) time.**</span>
-   <span id="c598">*We need a function for merging and a function for sorting.*</span>

> Steps:

1.  <span id="213f">*If there is only one element in the list, it is already sorted; return the array.*</span>
2.  <span id="6214">*Otherwise, divide the list recursively into two halves until it can no longer be divided.*</span>
3.  <span id="3cc8">*Merge the smallest lists into new list in a sorted order.*</span>

### Quick Sort

`Time Complexity`: Quadratic O(n^2)

-   <span id="8e34">Even though the average time complexity O(nLog(n)), the worst case scenario is always quadratic.</span>

`Space Complexity`: O(n)

-   <span id="626b">Our space complexity is linear O(n) because of the partition arrays we create.</span>
-   <span id="7e3a">QS is another Divide and Conquer strategy.</span>
-   <span id="233d">Some key ideas to keep in mind:</span>
-   <span id="1173">It is easy to sort elements of an array relative to a particular target value.</span>
-   <span id="8634">An array of 0 or 1 elements is already trivially sorted.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*WLl_HpdBGXYx284T" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*-LyHJXGPTYsWLDZf" class="graf-image" /></figure>### Binary Search

`Time Complexity`: Log Time O(log(n))

`Space Complexity`: O(1)

<figure><img src="https://cdn-images-1.medium.com/max/800/0*-naVYGTXzE2Yoali" class="graf-image" /></figure>*Recursive Solution*

> *Min Max Solution*

-   <span id="6fb1">*Must be conducted on a sorted array.*</span>
-   <span id="383b">*Binary search is logarithmic time, not exponential b/c n is cut down by two, not growing.*</span>
-   <span id="c940">*Binary Search is part of Divide and Conquer.*</span>

### Insertion Sort

-   <span id="26b7">**Works by building a larger and larger sorted region at the left-most end of the array.**</span>

> Steps:

1.  <span id="8c1f">*If it is the first element, and it is already sorted; return 1.*</span>
2.  <span id="1451">*Pick next element.*</span>
3.  <span id="0f8b">*Compare with all elements in the sorted sub list*</span>
4.  <span id="4d78">*Shift all the elements in the sorted sub list that is greater than the value to be sorted.*</span>
5.  <span id="9131">*Insert the value*</span>
6.  <span id="6c8a">*Repeat until list is sorted.*</span>

### If you found this guide helpful feel free to checkout my GitHub/gists where I host similar content:

<a href="https://gist.github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://gist.github.com/bgoonz"><strong>bgoonz’s gists</strong><br />
<em>Instantly share code, notes, and snippets. Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python |…</em>gist.github.com</a><a href="https://gist.github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz"><strong>bgoonz — Overview</strong><br />
<em>Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python | React | Node.js | Express | Sequelize…</em>github.com</a><a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Or Checkout my personal Resource Site:

<a href="https://bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…</em>bgoonz-blog.netlify.app</a><a href="https://bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*VCmj_H9AHs41oC9Yx1hZFQ.png" class="graf-image" /></figure>### Discover More:

<a href="https://bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…</em>bgoonz-blog.netlify.app</a><a href="https://bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [February 27, 2021](https://medium.com/p/803ff193c522).

<a href="https://medium.com/@bryanguner/a-quick-guide-to-big-o-notation-memoization-tabulation-and-sorting-algorithms-by-example-803ff193c522" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.

A Very Quick Guide To Calculating Big O Computational Complexity
================================================================

Big O: big picture, broad strokes, not details

------------------------------------------------------------------------

### A Very Quick Guide To Calculating Big O Computational Complexity

**Big O**: big picture, broad strokes, not details

For a more complete guide… checkout :

<a href="https://medium.com/star-gazers/a-quick-guide-to-big-o-notation-memoization-tabulation-and-sorting-algorithms-by-example-803ff193c522" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/star-gazers/a-quick-guide-to-big-o-notation-memoization-tabulation-and-sorting-algorithms-by-example-803ff193c522"><strong>A Quick Guide to Big-O Notation, Memoization, Tabulation, and Sorting Algorithms by Example</strong><br />
<em>Curating Complexity: A Guide to Big-O Notation</em>medium.com</a><a href="https://medium.com/star-gazers/a-quick-guide-to-big-o-notation-memoization-tabulation-and-sorting-algorithms-by-example-803ff193c522" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*lte81mEvgEPYXodB.png" class="graf-image" /></figure>-   <span id="28b6">way we analyze how efficient algorithms are without getting too mired in details</span>
-   <span id="4141">can model how much time any function will take given `n` inputs</span>
-   <span id="9479">interested in order of magnitude of number of the exact figure</span>
-   <span id="8fe1">O absorbs all fluff and n = biggest term</span>
-   <span id="a9c8">Big O of `3x^2 +x + 1` = `O(n^2)`</span>

### Time Complexity

no loops or exit & return = O(1)

0 nested loops = `O(n)`  
1 nested loops = `O(n^2)`  
2 nested loops = `O(n^3)`  
3 nested loops = `O(n^4)`

**recursive**: as you add more terms, increase in time as you add input diminishes  
**recursion**: when you define something in terms of itself, a function that calls itself

-   <span id="f455">used because of ability to maintain state at diffferent levels of recursion</span>
-   <span id="f168">inherently carries large footprint</span>
-   <span id="5510">every time function called, you add call to stack</span>

**iterative**: use loops instead of recursion (preferred)  
- favor readability over performance

`O(n log(n))` & `O(log(n))`: dividing/halving

-   <span id="4f7e">if code employs recursion/divide-and-conquer strategy</span>
-   <span id="d1cc">what power do i need to power my base to get n</span>

### Time Definitions

-   <span id="9aad">**constant**: does not scale with input, will take same amount of time</span>
-   <span id="3a19">for any input size n, constant time performs same number of operations every time</span>
-   <span id="bf51">**logarithmic**: increases number of operations it performs as logarithmic function of input size n</span>
-   <span id="93d5">function log n grows very slowly, so as n gets longer, number of operations the algorithm needs to perform doesn’t increase very much</span>
-   <span id="a2cf">halving</span>
-   <span id="46c0">**linear**: increases number of operations it performs as linear function of input size n</span>
-   <span id="5f16">number of additional operations needed to perform grows in direct proportion to increase in input size n</span>
-   <span id="ab93">**log-linear**: increases number of operations it performs as log-linear function of input size n</span>
-   <span id="0459">looking over every element and doing work on each one</span>
-   <span id="bd8a">**quadratic**: increases number of operations it performs as quadratic function of input size n</span>
-   <span id="dc41">**exponential**: increases number of operations it performs as exponential function of input size n</span>
-   <span id="71fc">number of nested loops increases as function of n</span>
-   <span id="8253">**polynomial**: as size of input increases, runtime/space used will grow at a faster rate</span>
-   <span id="8827">**factorial**: as size of input increases, runtime/space used will grow astronomically even with relatively small inputs</span>
-   <span id="040c">**rate of growth**: how fast a function grows with input size</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*5t2u8n1uKhioIzZIXX2zbg.png" class="graf-image" /></figure>### Space Complexity

-   <span id="403b">How does the space usage scale/change as input gets very large?</span>
-   <span id="5f20">What auxiliary space does your algorithm use or is it in place (constant)?</span>
-   <span id="b207">Runtime stack space counts as part of space complexity unless told otherwise.</span>

### Sorting Algorithms

<figure><img src="https://cdn-images-1.medium.com/max/800/1*HhXmG2cNdg8y4ZCCQGTyuQ.png" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/1*ULeXxVCDkF73GwhsxyM_2g.png" class="graf-image" /></figure>### Data Structures

<figure><img src="https://cdn-images-1.medium.com/max/1200/1*hkZWlUgFyOSaLD5Uskv0tQ.png" class="graf-image" /></figure>

<figure><img src="https://cdn-images-1.medium.com/max/2560/1*COjzunj0-FsMJ0d7v7Z-6g.png" class="graf-image" /></figure>

For similar content check out my GitHub:

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz"><strong>bgoonz - Overview</strong><br />
<em>Web Developer, Electrical Engineer https://bryanguner.medium.com/ https://portfolio42.netlify.app/…</em>github.com</a><a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [May 19, 2021](https://medium.com/p/eb1557e85fa3).

<a href="https://medium.com/@bryanguner/a-very-quick-guide-to-calculating-big-o-computational-complexity-eb1557e85fa3" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.

A list of all of my articles to link to future posts
====================================================

You should probably skip this one… seriously it’s just for internal use!

------------------------------------------------------------------------

### All Of My Medium Stories

<figure><img src="https://cdn-images-1.medium.com/max/800/1*yZ41P3YdMYMiyFPAPrzyGw.gif" class="graf-image" /></figure>

------------------------------------------------------------------------

### This is another backup of all of them!

<a href="https://golden-lobe-519.notion.site/Medium-7b5b9bd642344d60afe3f03fe6431952" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://golden-lobe-519.notion.site/Medium-7b5b9bd642344d60afe3f03fe6431952"><strong>All OF MEDIUM ARTICLES</strong><br />
<em>2021-02-27_A-Quick-Guide-to-Big-O-Notation--Memoization--Tabulation--and-Sorting-Algorithms-by-Example-803ff193c522…</em>golden-lobe-519.notion.site</a><a href="https://golden-lobe-519.notion.site/Medium-7b5b9bd642344d60afe3f03fe6431952" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

------------------------------------------------------------------------

<a href="https://medium.com/webdevhub/notes-i-wish-i-had-when-i-started-learning-python-16ce4244be12" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/webdevhub/notes-i-wish-i-had-when-i-started-learning-python-16ce4244be12"><strong>Notes I Wish I Had When I Started Learning Python</strong><br />
<em>Plus resources for learning data structures and algorithms in python at the bottom of this article!</em>medium.com</a><a href="https://medium.com/webdevhub/notes-i-wish-i-had-when-i-started-learning-python-16ce4244be12" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/awesome-list-of-github-repositories-f1c433e32b17" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/awesome-list-of-github-repositories-f1c433e32b17"><strong>Awesome List Of Github Repositories</strong><br />
<em>Platforms</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/awesome-list-of-github-repositories-f1c433e32b17" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/my-personal-arsenal-of-convenience-scripts-3c7869fdae53" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/my-personal-arsenal-of-convenience-scripts-3c7869fdae53"><strong>My Personal Arsenal Of Convenience Scripts</strong><br />
<em>At the bottom the following commands are listed as a markdown file and embed in this article as a github gist.</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/my-personal-arsenal-of-convenience-scripts-3c7869fdae53" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/adding-css-to-your-html-3a17ba25ba82" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/adding-css-to-your-html-3a17ba25ba82"><strong>Adding CSS To Your HTML</strong><br />
<em>For beginners … very picture heavy since CSS is such a visual discipline!</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/adding-css-to-your-html-3a17ba25ba82" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/most-common-javascript-errors-311ea1356a3d" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/most-common-javascript-errors-311ea1356a3d"><strong>Most Common Javascript Errors</strong><br />
<em>Written in quiz format</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/most-common-javascript-errors-311ea1356a3d" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/super-simple-intro-to-react-5c78e4207b7f" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/super-simple-intro-to-react-5c78e4207b7f"><strong>Super Simple Intro To React</strong><br />
<em>This is a basic introduction for those who feel overwhelmed by the vast microcosm that is the React ecosystem!</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/super-simple-intro-to-react-5c78e4207b7f" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/codex/react-state-d8e0fc340714" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/codex/react-state-d8e0fc340714"><strong>React State</strong><br />
<em>Demystified</em>medium.com</a><a href="https://medium.com/codex/react-state-d8e0fc340714" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/awesome-web-development-youtube-video-archive-792a25839143" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/awesome-web-development-youtube-video-archive-792a25839143"><strong>Awesome Web Development Youtube Video Archive</strong><br />
<em>This is going to be a running list of youtube videos and channels that I discover as I learn web development. It will…</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/awesome-web-development-youtube-video-archive-792a25839143" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://levelup.gitconnected.com/beginner-python-problems-solutions-dd631e9c3a9f" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://levelup.gitconnected.com/beginner-python-problems-solutions-dd631e9c3a9f"><strong>Python Problems &amp; Solutions For Beginners</strong><br />
<em>Introduction to python taught through example problems. Solutions are included in embedded repl.it at the bottom of…</em>levelup.gitconnected.com</a><a href="https://levelup.gitconnected.com/beginner-python-problems-solutions-dd631e9c3a9f" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/codex/fundamental-concepts-in-javascript-8e093a665b04" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/codex/fundamental-concepts-in-javascript-8e093a665b04"><strong>Fundamental Concepts In Javascript</strong><br />
<em>This is the stuff that comes up on interviews…</em>medium.com</a><a href="https://medium.com/codex/fundamental-concepts-in-javascript-8e093a665b04" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/bash-proficiency-in-under-15-minutes-3ec9d4e2e65" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/bash-proficiency-in-under-15-minutes-3ec9d4e2e65"><strong>Bash Proficiency In Under 15 Minutes</strong><br />
<em>Cheat sheet and in-depth explanations located below main article contents… The UNIX shell program interprets user…</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/bash-proficiency-in-under-15-minutes-3ec9d4e2e65" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/analytics-vidhya/mini-review-of-sql-for-postgresql-w-node-express-f34676f3802b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/analytics-vidhya/mini-review-of-sql-for-postgresql-w-node-express-f34676f3802b"><strong>Mini Review Of SQL For PostgreSQL W Node &amp; Express</strong><br />
<em>What is a Query?</em>medium.com</a><a href="https://medium.com/analytics-vidhya/mini-review-of-sql-for-postgresql-w-node-express-f34676f3802b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/all-the-things-you-can-embed-in-a-medium-article-b03a85c65d86" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/all-the-things-you-can-embed-in-a-medium-article-b03a85c65d86"><strong>All The Things You Can Embed In A Medium Article</strong><br />
<em>I have this innate desire to make everything available all in one place and it’s usually an unnecessary waste of time……</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/all-the-things-you-can-embed-in-a-medium-article-b03a85c65d86" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/front-end-behavioral-interview-bf5c079f7461" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/front-end-behavioral-interview-bf5c079f7461"><strong>Front End Behavioral Interview</strong><br />
<em>Web Developer Job Interview Questions</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/front-end-behavioral-interview-bf5c079f7461" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/codex/prerequisites-to-writing-express-apis-75e3267b284a" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/codex/prerequisites-to-writing-express-apis-75e3267b284a"><strong>The ExpressJS Way To Write APIs</strong><br />
<em>This article will cover the basics of express from the perspective of a beginner without concerning its self with the…</em>medium.com</a><a href="https://medium.com/codex/prerequisites-to-writing-express-apis-75e3267b284a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/analytics-vidhya/heroku-deploy-guides-cheatsheet-compilation-b2897b69ce02" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/analytics-vidhya/heroku-deploy-guides-cheatsheet-compilation-b2897b69ce02"><strong>Heroku Deploy Guides &amp; Cheatsheet Compilation</strong><br />
<em>Heroku lets you deploy, run and manage applications written in Ruby, Node.js, Java, Python, Clojure, Scala, Go and PHP…</em>medium.com</a><a href="https://medium.com/analytics-vidhya/heroku-deploy-guides-cheatsheet-compilation-b2897b69ce02" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.plainenglish.io/react-in-depth-1965dcde8d4f" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.plainenglish.io/react-in-depth-1965dcde8d4f"><strong>A Comprehensive Deep Dive into React</strong><br />
<em>An in-depth look into the world of React.</em>javascript.plainenglish.io</a><a href="https://javascript.plainenglish.io/react-in-depth-1965dcde8d4f" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/take-a-look-at-the-big-picture-b69e0999a380" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/take-a-look-at-the-big-picture-b69e0999a380"><strong>Web Development Resource List #4</strong><br />
<em>Update:</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/take-a-look-at-the-big-picture-b69e0999a380" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/bash-d3077114aea7" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/bash-d3077114aea7"><strong>BASH CHEAT SHEET</strong><br />
<em>My Bash Cheatsheet Index:</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/bash-d3077114aea7" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/heroku-cheat-sheet-6107ce6ba52b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/heroku-cheat-sheet-6107ce6ba52b"><strong>Heroku Cheat Sheet</strong><br />
<em>a cheatsheet for using heroku-cli</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/heroku-cheat-sheet-6107ce6ba52b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/prerequisites-to-writing-express-apis-75e3267b284a" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/prerequisites-to-writing-express-apis-75e3267b284a"><strong>The ExpressJS Way To Write APIs</strong><br />
<em>This article will cover the basics of express from the perspective of a beginner without concerning it’s self with the…</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/prerequisites-to-writing-express-apis-75e3267b284a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/heroku-deploy-guides-cheatsheet-compilation-b2897b69ce02" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/heroku-deploy-guides-cheatsheet-compilation-b2897b69ce02"><strong>Heroku Deploy Guides &amp; Cheatsheet Compilation</strong><br />
<em>Heroku lets you deploy, run and manage applications written in Ruby, Node.js, Java, Python, Clojure, Scala, Go and PHP…</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/heroku-deploy-guides-cheatsheet-compilation-b2897b69ce02" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.plainenglish.io/react-in-depth-1965dcde8d4f" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.plainenglish.io/react-in-depth-1965dcde8d4f"><strong>A Comprehensive Deep Dive into React</strong><br />
<em>An in-depth look into the world of React.</em>javascript.plainenglish.io</a><a href="https://javascript.plainenglish.io/react-in-depth-1965dcde8d4f" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/take-a-look-at-the-big-picture-b69e0999a380" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/take-a-look-at-the-big-picture-b69e0999a380"><strong>Web Development Resource List #4</strong><br />
<em>Update:</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/take-a-look-at-the-big-picture-b69e0999a380" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/bash-d3077114aea7" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/bash-d3077114aea7"><strong>BASH CHEAT SHEET</strong><br />
<em>My Bash Cheatsheet Index:</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/bash-d3077114aea7" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/heroku-cheat-sheet-6107ce6ba52b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/heroku-cheat-sheet-6107ce6ba52b"><strong>Heroku Cheat Sheet</strong><br />
<em>a cheatsheet for using heroku-cli</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/heroku-cheat-sheet-6107ce6ba52b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/web-developers-technical-glossary-2066beae5e96" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/web-developers-technical-glossary-2066beae5e96"><strong>Web Developer’s Technical Glossary</strong><br />
<em>This will be a running list as I make updates!</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/web-developers-technical-glossary-2066beae5e96" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://medium.com/codex/postgresql-in-43-commands-or-less-19fba3e37110" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/codex/postgresql-in-43-commands-or-less-19fba3e37110"><strong>PostgreSQL In 43 Commands Or Less</strong><br />
<em>In database jargon, PostgreSQL uses a client/server model. A PostgreSQL session consists of the following cooperating…</em>medium.com</a><a href="https://medium.com/codex/postgresql-in-43-commands-or-less-19fba3e37110" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/geekculture/why-jamstack-rocks-666114722f35" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/geekculture/why-jamstack-rocks-666114722f35"><strong>Why Jamstack Rocks🤘😎🤙</strong><br />
<em>JAMstack websites don’t use the microservices architecture, but they go for the micro frontends architecture. Each…</em>medium.com</a><a href="https://medium.com/geekculture/why-jamstack-rocks-666114722f35" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/what-are-bash-aliases-and-why-should-you-be-using-them-30a6cfafdfeb" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/what-are-bash-aliases-and-why-should-you-be-using-them-30a6cfafdfeb"><strong>What Are Bash Aliases And Why Should You Be Using Them!</strong><br />
<em>A Bash alias is a method of supplementing or overriding Bash commands with new ones. Bash aliases make it easy for…</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/what-are-bash-aliases-and-why-should-you-be-using-them-30a6cfafdfeb" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://medium.com/geekculture/life-saving-bash-scripts-part-2-b40c8ee22682" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/geekculture/life-saving-bash-scripts-part-2-b40c8ee22682"><strong>Life Saving Bash Scripts Part 2</strong><br />
<em>I am not saying they’re in any way special compared with other bash scripts… but when I consider that you can never…</em>medium.com</a><a href="https://medium.com/geekculture/life-saving-bash-scripts-part-2-b40c8ee22682" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/analytics-vidhya/job-boards-and-the-hunt-8cbfefefbb33" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/analytics-vidhya/job-boards-and-the-hunt-8cbfefefbb33"><strong>Job Boards and The Hunt</strong><br />
<em>I can’t imagine the kind of masochism it would take to enjoy the act of posting and daily maintenance on a job…</em>medium.com</a><a href="https://medium.com/analytics-vidhya/job-boards-and-the-hunt-8cbfefefbb33" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/absolutely-everything-you-could-need-to-know-about-how-javascript-works-633549469528" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/absolutely-everything-you-could-need-to-know-about-how-javascript-works-633549469528"><strong>Absolutely Everything You Could Need To Know About How JavaScript Works.</strong><br />
<em>Seriously… this list is utterly exhaustive it covers more core concepts than I can hold the names of in working memory…</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/absolutely-everything-you-could-need-to-know-about-how-javascript-works-633549469528" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/react-tutorial-from-basics-647ba595e607" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/react-tutorial-from-basics-647ba595e607"><strong>Basic React Tutorial</strong><br />
<em>Random Things to Remember</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/react-tutorial-from-basics-647ba595e607" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/fundamental-concepts-in-react-that-will-probably-come-up-on-an-interview-5495b6421287" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/fundamental-concepts-in-react-that-will-probably-come-up-on-an-interview-5495b6421287"><strong>Fundamental Concepts In React That Will Probably Come Up On An Interview</strong><br />
<em>Incomplete Article</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/fundamental-concepts-in-react-that-will-probably-come-up-on-an-interview-5495b6421287" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/geekculture/the-penultimate-web-developers-cheat-sheet-a02a423139a4" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/geekculture/the-penultimate-web-developers-cheat-sheet-a02a423139a4"><strong>The Penultimate Web Developer’s Cheat Sheet</strong><br />
<em>I am literally just going to combine a fair number of my Cheat Sheets in no particular order.</em>medium.com</a><a href="https://medium.com/geekculture/the-penultimate-web-developers-cheat-sheet-a02a423139a4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/geekculture/bash-commands-that-save-time-920fb6ab9d0a" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/geekculture/bash-commands-that-save-time-920fb6ab9d0a"><strong>Bash Commands That Save Me Time and Frustration</strong><br />
<em>Here’s a list of bash commands that stand between me and insanity.</em>medium.com</a><a href="https://medium.com/geekculture/bash-commands-that-save-time-920fb6ab9d0a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/quick-web-developers-website-checklist-a-list-of-tools-for-improvement-9a52e11c8ee1" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/quick-web-developers-website-checklist-a-list-of-tools-for-improvement-9a52e11c8ee1"><strong>Quick Web Developers Website Checklist &amp; A List Of Tools For Improvement</strong><br />
<em>A set of questions you should use before handing off your application to the client.</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/quick-web-developers-website-checklist-a-list-of-tools-for-improvement-9a52e11c8ee1" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.plainenglish.io/react-md-cbaafb31765d" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.plainenglish.io/react-md-cbaafb31765d"><strong>10 Essential React Interview Questions For Aspiring Frontend Developers</strong><br />
<em>Comprehensive React Cheatsheet included at the bottom of this article!</em>javascript.plainenglish.io</a><a href="https://javascript.plainenglish.io/react-md-cbaafb31765d" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://levelup.gitconnected.com/long-list-of-invaluable-nodejs-resources-6a793ae1ce6" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://levelup.gitconnected.com/long-list-of-invaluable-nodejs-resources-6a793ae1ce6"><strong>Long List Of Invaluable NodeJS Resources</strong><br />
<em>Disclaimer: I know that I did not create this list all on my own… I can’t recall or track down the original list if you…</em>levelup.gitconnected.com</a><a href="https://levelup.gitconnected.com/long-list-of-invaluable-nodejs-resources-6a793ae1ce6" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/open-ended-frontend-interview-questions-you-should-answer-before-your-next-interview-7c9722712521" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/open-ended-frontend-interview-questions-you-should-answer-before-your-next-interview-7c9722712521"><strong>Open Ended Frontend Interview Questions You Should Answer Before Your Next Interview</strong><br />
<em>Explain event delegation.</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/open-ended-frontend-interview-questions-you-should-answer-before-your-next-interview-7c9722712521" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/data-structures-under-the-hood-660256c2e4e3" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/data-structures-under-the-hood-660256c2e4e3"><strong>Data Structures… Under The Hood</strong><br />
<em>Data Structures Reference</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/data-structures-under-the-hood-660256c2e4e3" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/geekculture/web-development-interview-resource-list-88fce9876261" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/geekculture/web-development-interview-resource-list-88fce9876261"><strong>Web Development Interview Resource List</strong><br />
<em>Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it…</em>medium.com</a><a href="https://medium.com/geekculture/web-development-interview-resource-list-88fce9876261" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/geekculture/beginners-guide-to-python-e5a59b5bb64d" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/geekculture/beginners-guide-to-python-e5a59b5bb64d"><strong>Beginners Guide To Python</strong><br />
<em>My favorite language for maintainability is Python. It has simple, clean syntax, object encapsulation, good library…</em>medium.com</a><a href="https://medium.com/geekculture/beginners-guide-to-python-e5a59b5bb64d" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/data-structures-algorithms-resource-list-part-1-8bad647a8ad8" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/data-structures-algorithms-resource-list-part-1-8bad647a8ad8"><strong>Data Structures &amp; Algorithms Resource List Part 1</strong><br />
<em>Guess the author of the following quotes:</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/data-structures-algorithms-resource-list-part-1-8bad647a8ad8" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.plainenglish.io/memoization-86685d811182" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.plainenglish.io/memoization-86685d811182"><strong>What is Memoization?</strong><br />
<em>And why this programming paradigm shouldn’t make you cringe.</em>javascript.plainenglish.io</a><a href="https://javascript.plainenglish.io/memoization-86685d811182" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/css-interview-prep-quiz-6e3e4de7ca53" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/css-interview-prep-quiz-6e3e4de7ca53"><strong>CSS Interview Prep Quiz</strong><br />
<em>Plus Css Cheat Sheet (82 questions total)</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/css-interview-prep-quiz-6e3e4de7ca53" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/geekculture/verbal-technical-interview-questions-about-graph-data-structures-fc6b1afbd8be" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/geekculture/verbal-technical-interview-questions-about-graph-data-structures-fc6b1afbd8be"><strong>Graph Data Structure Interview Questions At A Glance</strong><br />
<em>Because they’re just about the most important data structure there is.</em>medium.com</a><a href="https://medium.com/geekculture/verbal-technical-interview-questions-about-graph-data-structures-fc6b1afbd8be" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/geekculture/object-methods-4066ed24b214" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/geekculture/object-methods-4066ed24b214"><strong>Object Methods</strong><br />
<em>Iterating Through Objects</em>medium.com</a><a href="https://medium.com/geekculture/object-methods-4066ed24b214" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://levelup.gitconnected.com/github-repositories-that-will-teach-you-how-to-code-for-free-ad0ecf59d89e" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://levelup.gitconnected.com/github-repositories-that-will-teach-you-how-to-code-for-free-ad0ecf59d89e"><strong>Github Repositories That Will Teach You How To Code For Free!</strong><br />
<em>30-seconds/30-seconds-of-code</em>levelup.gitconnected.com</a><a href="https://levelup.gitconnected.com/github-repositories-that-will-teach-you-how-to-code-for-free-ad0ecf59d89e" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/resources-by-programming-language-399d9f9ef520" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/resources-by-programming-language-399d9f9ef520"><strong>Resources By Programming Language</strong><br />
<em>Here’s a list of programming resources sorted by programming language.</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/resources-by-programming-language-399d9f9ef520" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://medium.com/codex/scope-closures-context-in-javascript-f126f1523104" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/codex/scope-closures-context-in-javascript-f126f1523104"><strong>Breaking Down Scope, Context, And Closure In JavaScript In Simple Terms.</strong><br />
<em>“JavaScript’s global scope is like a public toilet. You can’t avoid going in there, but try to limit your contact with…</em>medium.com</a><a href="https://medium.com/codex/scope-closures-context-in-javascript-f126f1523104" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/codex/these-are-a-few-of-my-favorite-things-82e8b6e61879" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/codex/these-are-a-few-of-my-favorite-things-82e8b6e61879"><strong>These Are A Few Of My Favorite Things</strong><br />
<em>A web development student’s declassified school survival guide.</em>medium.com</a><a href="https://medium.com/codex/these-are-a-few-of-my-favorite-things-82e8b6e61879" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/codex/objects-in-javascript-b212486dade6" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/codex/objects-in-javascript-b212486dade6"><strong>Objects In JavaScript</strong><br />
<em>The object is a data structure that stores other data, similar to how an array stores elements.</em>medium.com</a><a href="https://medium.com/codex/objects-in-javascript-b212486dade6" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/fundamental-javascript-concepts-you-should-understand-81c4d839b827" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/fundamental-javascript-concepts-you-should-understand-81c4d839b827"><strong>Fundamental Javascript Concepts You Should Understand</strong><br />
<em>Plain Old JS Object Lesson Concepts</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/fundamental-javascript-concepts-you-should-understand-81c4d839b827" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/mutability-and-reference-vs-privative-types-in-javascript-5294422db4b0" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/mutability-and-reference-vs-privative-types-in-javascript-5294422db4b0"><strong>Mutability And Reference VS Privative Types in JavaScript</strong><br />
<em>Mutability &amp;&amp; Primitive &amp;&amp; Reference Examples</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/mutability-and-reference-vs-privative-types-in-javascript-5294422db4b0" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.plainenglish.io/array-callback-methods-implemented-with-for-loops-d08875df6777" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.plainenglish.io/array-callback-methods-implemented-with-for-loops-d08875df6777"><strong>Array Callback Methods Implemented With For Loops</strong><br />
<em>How to implement array callback methods in JavaScript</em>javascript.plainenglish.io</a><a href="https://javascript.plainenglish.io/array-callback-methods-implemented-with-for-loops-d08875df6777" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/introductory-react-part-2-cda01615a186" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/introductory-react-part-2-cda01615a186"><strong>Beginner’s Guide To React Part 2</strong><br />
<em>As I learn to build web applications in React I will blog about it in this series in an attempt to capture the…</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/introductory-react-part-2-cda01615a186" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/a-very-quick-guide-to-calculating-big-o-computational-complexity-eb1557e85fa3" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/a-very-quick-guide-to-calculating-big-o-computational-complexity-eb1557e85fa3"><strong>A Very Quick Guide To Calculating Big O Computational Complexity</strong><br />
<em>Big O: big picture, broad strokes, not details</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/a-very-quick-guide-to-calculating-big-o-computational-complexity-eb1557e85fa3" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.plainenglish.io/introduction-to-react-for-complete-beginners-8021738aa1ad" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.plainenglish.io/introduction-to-react-for-complete-beginners-8021738aa1ad"><strong>Introduction to React for Complete Beginners</strong><br />
<em>All of the code examples below will be included a second time at the bottom of this article as an embedded gist.</em>javascript.plainenglish.io</a><a href="https://javascript.plainenglish.io/introduction-to-react-for-complete-beginners-8021738aa1ad" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.plainenglish.io/scheduling-settimeout-and-setinterval-fcb2f40d16f7" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.plainenglish.io/scheduling-settimeout-and-setinterval-fcb2f40d16f7"><strong>Scheduling: setTimeout and setInterval</strong><br />
<em>We may decide to execute a function not right now, but at a later time. That’s called “scheduling a call”.</em>javascript.plainenglish.io</a><a href="https://javascript.plainenglish.io/scheduling-settimeout-and-setinterval-fcb2f40d16f7" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/css-animations-d196a20099a5" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/css-animations-d196a20099a5"><strong>LocalStorage VS SessionStorage</strong><br />
<em>Web storage objects localStorage and sessionStorage allow to save key/value pairs in the browser.</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/css-animations-d196a20099a5" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://levelup.gitconnected.com/these-are-the-bash-shell-commands-that-stand-between-me-and-insanity-984865ba5d1b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://levelup.gitconnected.com/these-are-the-bash-shell-commands-that-stand-between-me-and-insanity-984865ba5d1b"><strong>These Are The Bash Shell Commands That Stand Between Me And Insanity</strong><br />
<em>I will not profess to be a bash shell wizard… but I have managed to scour some pretty helpful little scripts from Stack…</em>levelup.gitconnected.com</a><a href="https://levelup.gitconnected.com/these-are-the-bash-shell-commands-that-stand-between-me-and-insanity-984865ba5d1b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/how-to-implement-native-es6-data-structures-using-arrays-objects-ce953b9f6a07" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/how-to-implement-native-es6-data-structures-using-arrays-objects-ce953b9f6a07"><strong>How To Implement Native(ES6) Data Structures Using Arrays &amp; Objects</strong><br />
<em>Smart data structures and dumb code works better than the other way around -“Eric S. Raymond”</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/how-to-implement-native-es6-data-structures-using-arrays-objects-ce953b9f6a07" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/codex/objects-in-javascript-cc578a781e1d" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/codex/objects-in-javascript-cc578a781e1d"><strong>Objects in Javascript</strong><br />
<em>Codepen with examples for you to practice with below!</em>medium.com</a><a href="https://medium.com/codex/objects-in-javascript-cc578a781e1d" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.plainenglish.io/absolute-beginners-guide-to-javascript-part-1-e222d166b6e1" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.plainenglish.io/absolute-beginners-guide-to-javascript-part-1-e222d166b6e1"><strong>The Beginner’s Guide To JavaScript</strong><br />
<em>Part 1</em>javascript.plainenglish.io</a><a href="https://javascript.plainenglish.io/absolute-beginners-guide-to-javascript-part-1-e222d166b6e1" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/star-gazers/web-developer-resource-list-part-4-fd686892b9eb" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/star-gazers/web-developer-resource-list-part-4-fd686892b9eb"><strong>Web Developer Resource List Part 4</strong><br />
<em>A all encompassing list of tools and resources for web developers</em>medium.com</a><a href="https://medium.com/star-gazers/web-developer-resource-list-part-4-fd686892b9eb" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/codex/vscode-extensions-specifically-for-javascript-development-ea91305cbd4a" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/codex/vscode-extensions-specifically-for-javascript-development-ea91305cbd4a"><strong>VSCode Extensions Specifically for JavaScript Development</strong><br />
<em>VSCode Extensions that are indispensable in JavaScript development</em>medium.com</a><a href="https://medium.com/codex/vscode-extensions-specifically-for-javascript-development-ea91305cbd4a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b"><strong>A list of all of my articles to link to future posts</strong><br />
<em>You should probably skip this one… seriously it’s just for internal use!</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://javascript.plainenglish.io/lists-stacks-and-queues-in-javascript-88466fae0fbb" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.plainenglish.io/lists-stacks-and-queues-in-javascript-88466fae0fbb"><strong>Fundamental Data Structures in JavaScript</strong><br />
<em>A simple to follow guide to Lists Stacks and Queues, with animated gifs, diagrams, and code examples!</em>javascript.plainenglish.io</a><a href="https://javascript.plainenglish.io/lists-stacks-and-queues-in-javascript-88466fae0fbb" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/web-development-resources-part-3-f862ceb2b82a" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/web-development-resources-part-3-f862ceb2b82a"><strong>Web Development Resources Part 3</strong><br />
<em>I’m the psychological equivalent of a physical hoarder only instead of empty soda cans and dead racoons it’s lists of…</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/web-development-resources-part-3-f862ceb2b82a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/codex/web-development-interview-part-3-826ae81a9107" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/codex/web-development-interview-part-3-826ae81a9107"><strong>Web Development Interview Part 3💻</strong><br />
<em>This installment is going to be the least technically demanding thus far however these questions are a more realistic…</em>medium.com</a><a href="https://medium.com/codex/web-development-interview-part-3-826ae81a9107" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/the-best-cloud-based-code-playgrounds-of-2021-part-1-cdae9448db24" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/the-best-cloud-based-code-playgrounds-of-2021-part-1-cdae9448db24"><strong>The Best Cloud-Based Code Playgrounds of 2021 (Part 1)</strong><br />
<em>A plethora of front-end code playgrounds have appeared over the years. They offer a convenient way to experiment with…</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/the-best-cloud-based-code-playgrounds-of-2021-part-1-cdae9448db24" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/codex/front-end-interview-questions-part-2-86ddc0e91443" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/codex/front-end-interview-questions-part-2-86ddc0e91443"><strong>Front End Interview Questions Part 2</strong><br />
<em>These will focus more on vocabulary and concepts than the application driven approach in my last post!</em>medium.com</a><a href="https://medium.com/codex/front-end-interview-questions-part-2-86ddc0e91443" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/star-gazers/web-developer-resource-list-part-2-9c5cb56ab263" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/star-gazers/web-developer-resource-list-part-2-9c5cb56ab263"><strong>Web Developer Resource List Part 2</strong><br />
<em>Because I compile these things compulsively anyway…</em>medium.com</a><a href="https://medium.com/star-gazers/web-developer-resource-list-part-2-9c5cb56ab263" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://levelup.gitconnected.com/http-basics-8f02a96a834a" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://levelup.gitconnected.com/http-basics-8f02a96a834a"><strong>HTTP Basics</strong><br />
<em>“If you want to build a ship, don’t drum up the men and women to gather wood, divide the work, and give orders…</em>levelup.gitconnected.com</a><a href="https://levelup.gitconnected.com/http-basics-8f02a96a834a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.plainenglish.io/javascript-frameworks-libraries-35931e187a35" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.plainenglish.io/javascript-frameworks-libraries-35931e187a35"><strong>JavaScript Frameworks &amp; Libraries</strong><br />
<em>My Awesome JavaScript List Part 2</em>javascript.plainenglish.io</a><a href="https://javascript.plainenglish.io/javascript-frameworks-libraries-35931e187a35" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.plainenglish.io/my-take-on-awesome-javascript-243255451e74" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.plainenglish.io/my-take-on-awesome-javascript-243255451e74"><strong>My ‘awesome’ list of JavaScript resources</strong><br />
<em>Everyone’s seen the ‘Awesome’ lists on GitHub… and they are indeed awesome… so today I am going to attempt to curate my…</em>javascript.plainenglish.io</a><a href="https://javascript.plainenglish.io/my-take-on-awesome-javascript-243255451e74" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://levelup.gitconnected.com/everything-you-need-to-get-started-with-vscode-extensions-resources-b9f4c8d91931" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://levelup.gitconnected.com/everything-you-need-to-get-started-with-vscode-extensions-resources-b9f4c8d91931"><strong>Everything You Need to Get Started With VSCode + Extensions &amp; Resources</strong><br />
<em>Commands:</em>levelup.gitconnected.com</a><a href="https://levelup.gitconnected.com/everything-you-need-to-get-started-with-vscode-extensions-resources-b9f4c8d91931" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://levelup.gitconnected.com/my-favorite-vscode-themes-9bab65af3f0f" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://levelup.gitconnected.com/my-favorite-vscode-themes-9bab65af3f0f"><strong>My Favorite VSCode <em>Themes</em></strong><br />
Themeslevelup.gitconnected.com</a><a href="https://levelup.gitconnected.com/my-favorite-vscode-themes-9bab65af3f0f" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://levelup.gitconnected.com/object-oriented-programming-in-javascript-d45007d06333" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://levelup.gitconnected.com/object-oriented-programming-in-javascript-d45007d06333"><strong>Object Oriented Programming in JavaScript</strong><br />
<em>Object-Oriented Programming</em>levelup.gitconnected.com</a><a href="https://levelup.gitconnected.com/object-oriented-programming-in-javascript-d45007d06333" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/codex/javascript-rotate-array-problemwalkthrough-31deb19ebba1" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/codex/javascript-rotate-array-problemwalkthrough-31deb19ebba1"><strong>JavaScript Rotate (Array) ProblemWalkthrough</strong><br />
<em>Explanation for Rotate Right</em>medium.com</a><a href="https://medium.com/codex/javascript-rotate-array-problemwalkthrough-31deb19ebba1" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://levelup.gitconnected.com/super-simple-intro-to-html-651d695f9bc" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://levelup.gitconnected.com/super-simple-intro-to-html-651d695f9bc"><strong>Super Simple Intro To HTML</strong><br />
<em>What is HTML, CSS &amp; JS and why do we need all three?</em>levelup.gitconnected.com</a><a href="https://levelup.gitconnected.com/super-simple-intro-to-html-651d695f9bc" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/codex/everything-you-need-to-know-about-relational-databases-sql-postgresql-and-sequelize-to-build-8acb68284a98" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/codex/everything-you-need-to-know-about-relational-databases-sql-postgresql-and-sequelize-to-build-8acb68284a98"><strong>Everything You Need To Know About Relational Databases, SQL, PostgreSQL and Sequelize To Build…</strong><br />
<em>For Front end developers who like myself struggle with making the jump to fullstack.</em>medium.com</a><a href="https://medium.com/codex/everything-you-need-to-know-about-relational-databases-sql-postgresql-and-sequelize-to-build-8acb68284a98" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://levelup.gitconnected.com/understanding-git-a-beginners-guide-containing-cheat-sheets-resources-b50c9c01a107" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://levelup.gitconnected.com/understanding-git-a-beginners-guide-containing-cheat-sheets-resources-b50c9c01a107"><strong>Understanding Git (A Beginners Guide Containing Cheat Sheets &amp; Resources)</strong><br />
<em>Basic Git Work Flow.</em>levelup.gitconnected.com</a><a href="https://levelup.gitconnected.com/understanding-git-a-beginners-guide-containing-cheat-sheets-resources-b50c9c01a107" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.plainenglish.io/complete-javascript-reference-guide-64306cd6b0db" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.plainenglish.io/complete-javascript-reference-guide-64306cd6b0db"><strong>The Complete JavaScript Reference Guide</strong><br />
<em>You will want to bookmark this</em>javascript.plainenglish.io</a><a href="https://javascript.plainenglish.io/complete-javascript-reference-guide-64306cd6b0db" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/geekculture/modules-in-javascript-a55333e35978" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/geekculture/modules-in-javascript-a55333e35978"><strong>Modules in Javascript</strong><br />
<em>Differences between Node.js and browsers</em>medium.com</a><a href="https://medium.com/geekculture/modules-in-javascript-a55333e35978" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://levelup.gitconnected.com/an-introduction-to-markdown-bonus-markdown-templates-included-3497ce56de3" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://levelup.gitconnected.com/an-introduction-to-markdown-bonus-markdown-templates-included-3497ce56de3"><strong>An Introduction to Markdown (Bonus Markdown Templates Included)</strong><br />
<em>Basic Syntax Guide</em>levelup.gitconnected.com</a><a href="https://levelup.gitconnected.com/an-introduction-to-markdown-bonus-markdown-templates-included-3497ce56de3" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://levelup.gitconnected.com/web-dev-resources-ec1975773d7d" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://levelup.gitconnected.com/web-dev-resources-ec1975773d7d"><strong>Web Dev Resources</strong><br />
<em>Web Development</em>levelup.gitconnected.com</a><a href="https://levelup.gitconnected.com/web-dev-resources-ec1975773d7d" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/codex/regular-expressions-4d8fb3eb146b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/codex/regular-expressions-4d8fb3eb146b"><strong>Regular Expressions</strong><br />
<em>description:</em>medium.com</a><a href="https://medium.com/codex/regular-expressions-4d8fb3eb146b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/geekculture/writing-files-using-python-d46b4851366f" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/geekculture/writing-files-using-python-d46b4851366f"><strong>Writing Files Using Python</strong><br />
<em>Basics of Writing Files in Python<br />
The common methods to operate with files are open() to open a file,</em>medium.com</a><a href="https://medium.com/geekculture/writing-files-using-python-d46b4851366f" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/a-collection-of-my-most-useful-gist-entries-f4314f3ba3ab" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/a-collection-of-my-most-useful-gist-entries-f4314f3ba3ab"><strong>A Collection of my most useful Gist Entries</strong><br />
<em>This list is in no particular order!</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/a-collection-of-my-most-useful-gist-entries-f4314f3ba3ab" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://javascript.plainenglish.io/learn-css-so-that-your-site-doesnt-look-like-garbage-938871b4521a" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.plainenglish.io/learn-css-so-that-your-site-doesnt-look-like-garbage-938871b4521a"><strong>Learn CSS So That Your Site Doesn’t Look Like Garbage</strong><br />
<em>CSS Selectors</em>javascript.plainenglish.io</a><a href="https://javascript.plainenglish.io/learn-css-so-that-your-site-doesnt-look-like-garbage-938871b4521a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/postgresql-setup-for-windows-wsl-ubuntu-801672ab7089" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/postgresql-setup-for-windows-wsl-ubuntu-801672ab7089"><strong>PostgreSQL Setup For Windows &amp; WSL/Ubuntu</strong><br />
<em>If you follow this guide to a tee… you will install PostgreSQL itself on your Windows installation. Then, you will…</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/postgresql-setup-for-windows-wsl-ubuntu-801672ab7089" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/emmet-cheat-sheet-24758e628d37" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/emmet-cheat-sheet-24758e628d37"><strong>Emmet Cheat Sheet</strong><br />
<em>EMMET</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/emmet-cheat-sheet-24758e628d37" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/git-tricks-57e8d0292285" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/git-tricks-57e8d0292285"><strong>Git-Tricks</strong><br />
<em>Refs</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/git-tricks-57e8d0292285" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://levelup.gitconnected.com/python-study-guide-for-a-native-javascript-developer-5cfdf3d2bdfb" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://levelup.gitconnected.com/python-study-guide-for-a-native-javascript-developer-5cfdf3d2bdfb"><strong>Python Study Guide for a JavaScript Programmer</strong><br />
<em>A guide to commands in Python from what you know in JavaScript</em>levelup.gitconnected.com</a><a href="https://levelup.gitconnected.com/python-study-guide-for-a-native-javascript-developer-5cfdf3d2bdfb" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/fetch-quick-sheet-8872650742b4" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/fetch-quick-sheet-8872650742b4"><strong><em>Fetch</em> Quick Sheet</strong><br />
Fetchbryanguner.medium.com</a><a href="https://bryanguner.medium.com/fetch-quick-sheet-8872650742b4" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/express-quick-sheet-8f93762c59ca" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/express-quick-sheet-8f93762c59ca"><strong>Express Quick Sheet</strong><br />
<em>Settings</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/express-quick-sheet-8f93762c59ca" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://medium.com/codex/fundamental-data-structures-in-javascript-8f9f709c15b4" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/codex/fundamental-data-structures-in-javascript-8f9f709c15b4"><strong>Fundamental Data Structures In JavaScript</strong><br />
<em>Data structures in JavaScript</em>medium.com</a><a href="https://medium.com/codex/fundamental-data-structures-in-javascript-8f9f709c15b4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/deploy-react-app-to-heroku-using-postgres-express-70b7ea807986" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/deploy-react-app-to-heroku-using-postgres-express-70b7ea807986"><strong>Deploy React App To Heroku Using Postgres &amp; Express</strong><br />
<em>Heroku is an web application that makes deploying applications easy for a beginner.</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/deploy-react-app-to-heroku-using-postgres-express-70b7ea807986" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://medium.com/codex/postgresql-cheat-sheet-718b813d3e31" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/codex/postgresql-cheat-sheet-718b813d3e31"><strong>Postgresql Cheat Sheet</strong><br />
<em>PostgreSQL commands</em>medium.com</a><a href="https://medium.com/codex/postgresql-cheat-sheet-718b813d3e31" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/star-gazers/a-quick-guide-to-big-o-notation-memoization-tabulation-and-sorting-algorithms-by-example-803ff193c522" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/star-gazers/a-quick-guide-to-big-o-notation-memoization-tabulation-and-sorting-algorithms-by-example-803ff193c522"><strong>A Quick Guide to Big-O Notation, Memoization, Tabulation, and Sorting Algorithms by Example</strong><br />
<em>Curating Complexity: A Guide to Big-O Notation</em>medium.com</a><a href="https://medium.com/star-gazers/a-quick-guide-to-big-o-notation-memoization-tabulation-and-sorting-algorithms-by-example-803ff193c522" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://levelup.gitconnected.com/basic-web-development-environment-setup-9f36c3f15afe" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://levelup.gitconnected.com/basic-web-development-environment-setup-9f36c3f15afe"><strong>Basic Web Development Environment Setup</strong><br />
<em>Windows Subsystem for Linux (WSL) and Ubuntu</em>levelup.gitconnected.com</a><a href="https://levelup.gitconnected.com/basic-web-development-environment-setup-9f36c3f15afe" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [March 22, 2021](https://medium.com/p/1f6f88ebdf5b).

<a href="https://medium.com/@bryanguner/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.

Absolutely Everything You Could Need To Know About How JavaScript Works.
========================================================================

Seriously… this list is utterly exhaustive it covers more core concepts than I can hold the names of in working memory on a very good day.

------------------------------------------------------------------------

### Absolutely Everything You Could Need To Know About How JavaScript Works.

#### Seriously… this list is utterly exhaustive it covers more core concepts than I can hold the names of in working memory on a very good day.

#### But first a little bit of mildly shameful self promotion:

> (self promotion ends after the line denoted by a bunch of pictures of my dog🐕 )

> (Followed by a brief introduction to JavaScript for beginners)

> (Finally the main content / resources / imbedded YouTube links)

<figure><img src="https://cdn-images-1.medium.com/max/800/0*huxNcspoDvOfqxvn.gif" class="graf-image" /></figure>### My Blog:

### Discover More:

<a href="https://bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…</em>bgoonz-blog.netlify.app</a><a href="https://bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<figure><img src="https://cdn-images-1.medium.com/max/600/1*_J5NcnQmHmPDBvZodMmyaA.png" class="graf-image" /></figure>***This is a work in progress and may be broken or hosted elsewhere at some time in the future.***

Related posts:

<a href="https://dev.to/bgoonz/js-modules-4c4d" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/bgoonz/js-modules-4c4d"><strong>JS Modules</strong><br />
<em>A module is a reusable piece of code that encapsulates implementation details and exposes a public API so it can be…</em>dev.to</a><a href="https://dev.to/bgoonz/js-modules-4c4d" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/bgoonz/closures-in-javascript-1moc" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/bgoonz/closures-in-javascript-1moc"><strong>Closures In JavaScript</strong><br />
<em>Answer A closure is a function defined inside another function and has access to its lexical scope even when it is…</em>dev.to</a><a href="https://dev.to/bgoonz/closures-in-javascript-1moc" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b"><strong>A list of all of my articles to link to future posts</strong><br />
bryanguner.medium.com</a><a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://javascript.plainenglish.io/complete-javascript-reference-guide-64306cd6b0db" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.plainenglish.io/complete-javascript-reference-guide-64306cd6b0db"><strong>The Complete JavaScript Reference Guide</strong><br />
<em>You will want to bookmark this</em>javascript.plainenglish.io</a><a href="https://javascript.plainenglish.io/complete-javascript-reference-guide-64306cd6b0db" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<figure><img src="https://cdn-images-1.medium.com/max/2560/1*2FC8D_rbP4cT3jukydhtkg.png" class="graf-image" /></figure>

### The Beginner’s Guide To JavaScript

> This is a quick intro for complete beginners … skip below for more advanced content and resources! (below the next photo montage of my dog)

### Skip The Following **↓** To Get To Main Content!!

<figure><img src="https://cdn-images-1.medium.com/max/600/1*HCYn5Uz_jZ6uRjgp_NA5Yw.png" class="graf-image" /></figure>**If you wanna skip this section you’ll find the main content about 10% of the way down the page… it will look like this:**

<figure><img src="https://cdn-images-1.medium.com/max/600/0*iHxLNzz1MOZACC5u.png" class="graf-image" /></figure>### The Number Data Type

The **number** data type in JS is used to represent any numerical  
values, including integers and decimal numbers. **Basic Arithmetic Operators** are the symbols that perform particular operations.

-   <span id="205d">**+** (addition)</span>
-   <span id="1df4">**-** (subtraction)</span>
-   <span id="f17b">**asterisk** (multiplication)</span>
-   <span id="ed52">**/** (division)</span>
-   <span id="d3a6">**%** (modulo)</span>

JS evaluates more complex expressions using the general math order of  
operations aka PEMDAS.

-   <span id="4923">**PEMDAS** : Parentheses, Exponents, Multiplication, Division, Modulo, Addition, Subtraction.</span>
-   <span id="e245">*To force a specific order of operation, use the group operator ( ) around a part of the expression.*</span>

**Modulo** : Very useful operation to check divisibility of numbers,  
check for even & odd, whether a number is prime, and much more!  
*(Discrete Math concept, circular problems can be solved with modulo)*

-   <span id="9608">Whenever you have a smaller number % a larger number, the answer will just be the initial small number.</span>
-   <span id="3b00">`console.log(7 % 10); // => 7;`</span>

### The String Data Type

The **string** data type is a primitive data type that used to represent  
textual data.

-   <span id="792d">can be wrapped by either **single** or **double** quotation marks, *best to choose one and stick with it for consistency*.</span>
-   <span id="4f91">If your string contains quotation marks inside, can layer single or double quotation marks to allow it to work.</span>

<!-- -->

    "That's a great string"; (valid)
    'Shakespeare wrote, "To be or not to be"'; (valid)
    'That's a bad string'; (invalid)

-   <span id="a54b">Alt. way to add other quotes within strings is to use template literals.</span>

### `This is a template literal`

`${function} // use ${} to invoke functions within.`

> **.length** : property that can be appended to data to return the length.

> empty strings have a length of zero.

> **indices** : indexes of data that begin at 0, can call upon index by using the bracket notation \[ \].

    console.log("bootcamp"[0]); // => "b"
    console.log("bootcamp"[10]); // => "undefined"
    console.log("boots"[1 * 2]); // => "o"
    console.log("boots"["boot".length - 1]); // => "t"

-   <span id="bcc3">we can pass expressions through the brackets as well since JS always evaluates expressions first.</span>
-   <span id="f60b">The index of the last character of a string is always one less than it’s length.</span>
-   <span id="5329">**indexOf()** : method used to find the first index of a given character within a string.</span>
-   <span id="6813">`console.log("bagel".indexOf("b")); // => 0 console.log("bagel".indexOf("z")); // => -1`</span>
-   <span id="262e">**if the character inside the indexOf() search does not exist in the string, the output will be -1.**</span>
-   <span id="0646">the indexOf() search will return the first instanced index of the the char in the string.</span>
-   <span id="15e0">**concatenate** : word to describe joining strings together into a single string.</span>

### The Boolean Data Type

The **Boolean** data type is the simplest data type since there are only  
two values: **true** and **false**.

-   <span id="62d6">**Logical Operators** (Boolean Operators) are used to establish logic in our code.</span>
-   <span id="bae2">**!** (not) : reverses a Boolean value.</span>

`console.log(!true); // => false console.log(!!false); // => false`

-   <span id="71d9">**&&** (and) **Truth Table**</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Y4qzqSB0C-9AmtXf.png" class="graf-image" /></figure>-   <span id="c706">**Logical Order of Operations** : JS will evaluate !, then &&, then ||.</span>
-   <span id="1e21">**De Morgan’s Law** : Common mistake in Boolean logic is incorrectly distributing ! across parentheses.</span>
-   <span id="2e3e">`!(A || B) === !A && !B; !(A && B) === !A || !B;`</span>
-   <span id="350f">In summary, to correctly distribute ! across parentheses we must also flip the operation within.</span>

### Comparison Operators

All comparison operators will result in a Boolean output.

**The relative comparators**

-   <span id="0d1c">**&gt;** (greater than)</span>
-   <span id="77dd">**&lt;** (less than)</span>
-   <span id="2041">**&gt;=** (greater than or equal to)</span>
-   <span id="55fd">**&lt;=** (less than or equal to)</span>
-   <span id="1b7c">**===** (equal to)</span>
-   <span id="09a6">**!==** (not equal to)</span>

> Fun Fact: “a” &lt; “b” is considered valid JS Code because string  
> comparisons are compared lexicographically (meaning dictionary order),  
> so “a” is less than “b” because it appears earlier!

> If there is ever a standstill comparison of two string  
> lexicographically (i.e. app vs apple) the comparison will deem the  
> shorter string lesser.

**Difference between == and ===**

-   <span id="3fec">**===** : Strict Equality, will only return true if the two comparisons are entirely the same.</span>
-   <span id="224d">**==** : Loose Equality, will return true even if the values are of a different type, due to coercion. (Avoid using this)</span>

### Variables

Variables are used to store information to be referenced and manipulated  
in a program.

-   <span id="e084">We initialize a variable by using the **let** keyword and a **=** single equals sign (assignment operator).</span>
-   <span id="92ec">`let bootcamp = "Lambda"; console.log(bootcamp); // "Lambda"`</span>
-   <span id="f5af">JS variable names can contain any alphanumeric characters,  
    underscores, or dollar signs (cannot being with a number).</span>
-   <span id="5288">If you do not declare a value for a variable, undefined is  
    automatically set.</span>
-   <span id="5f49">`let bootcamp; console.log(bootcamp); // undefined`</span>
-   <span id="ea4b">We can change the value of a previously declared variable (let, not  
    const) by re-assigning it another value.</span>
-   <span id="ef75">**let** is the updated version of **var**; there are some  
    differences in terms of hoisting and global/block scope — will be  
    covered later in the course (common interview question!)</span>

**Assignment Shorthand**

    let num = 0;num += 10; // same as num = num + 10num -= 2; // same as num = num - 2num /= 4; // same as num = num / 4num *= 7; // same as num = num * 7

-   <span id="7ff5">In general, any nonsensical arithmetic will result in **NaN** ; usually operations that include undefined.</span>
-   <span id="2798">**declaration** : process of simply introducing a variable name.</span>
-   <span id="ad51">**initialization** : process of both declaring and assigning a variable on the same line.</span>

### Functions

A function is a procedure of code that will run when called. Functions  
are used so that we do not have to rewrite code to do the same thing  
over and over. (Think of them as ‘subprograms’)

-   <span id="01bb">**Function Declaration** : Process when we first initially write our function.</span>
-   <span id="963b">Includes three things:</span>
-   <span id="32df">Name of the function.</span>
-   <span id="7930">A list of *parameters* ()</span>
-   <span id="145e">The code to execute {}</span>
-   <span id="37c0">**Function Calls** : We can call upon our function whenever and wherever\* we want. (\*wherever is only after the initial declaration)</span>
-   <span id="f3cc">JS evaluates code top down, left to right.</span>
-   <span id="cf9c">When we execute a declared function later on in our program we refer to this as **invoking** our function.</span>
-   <span id="4374">Every function in JS returns undefined unless otherwise specified.</span>
-   <span id="3bb7">When we hit a **return** statement in a function we immediately exit the function and return to where we called the function.</span>
-   <span id="0ce8">When naming functions in JS always use camelCase and name it something appropriate. &gt; Great code reads like English and almost explains itself. Think: Elegant, readable, and maintainable!</span>

### Parameters and Arguments

-   <span id="38d3">**Parameters** : Comma separated variables specified as part of a function’s declaration.</span>
-   <span id="ecef">**Arguments** : Values passed to the function when it is invoked.</span>
-   <span id="a836">*If the number of arguments passed during a function invocation is different than the number of parameters listed, it will still work.*</span>
-   <span id="a53a">However, is there are not enough arguments provided for parameters our function will likely yield **Nan**.</span>

------------------------------------------------------------------------

<figure><img src="https://cdn-images-1.medium.com/max/2560/1*2FC8D_rbP4cT3jukydhtkg.png" class="graf-image" /></figure>

> END OF INTRO FOR BEGINNERS (MAIN ARTICLE BELOW)

### ↓↓**Absolutely Everything You Could Need To Know About JavaScript**↓↓

<figure><img src="https://cdn-images-1.medium.com/max/800/0*fOaTsnCJCYc3wD4x" class="graf-image" /></figure><a href="https://github.com/leonardomso/33-js-concepts#20-pure-functions-side-effects-and-state-mutation" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/leonardomso/33-js-concepts#20-pure-functions-side-effects-and-state-mutation"><strong>leonardomso/33-js-concepts</strong><br />
<em>This repository was created with the intention of helping developers master their concepts in JavaScript. It is not a…</em>github.com</a><a href="https://github.com/leonardomso/33-js-concepts#20-pure-functions-side-effects-and-state-mutation" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developer.mozilla.org/en-US/docs/Glossary/Call_stack" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Glossary/Call_stack"><strong>Call stack - MDN Web Docs Glossary: Definitions of Web-related terms | MDN</strong><br />
<em>A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Glossary/Call_stack" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec"><strong>Understanding Javascript Function Executions — Call Stack, Event Loop , Tasks &amp; more</strong><br />
<em>Web developers or Front end engineers, as that’s what we like to be called, nowadays do everything right from acting as…</em>medium.com</a><a href="https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/understanding-the-javascript-call-stack-861e41ae61d4" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/understanding-the-javascript-call-stack-861e41ae61d4"><strong>Understanding the JavaScript call stack</strong><br />
<em>The JavaScript engine (which is found in a hosting environment like the browser), is a single-threaded interpreter…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/understanding-the-javascript-call-stack-861e41ae61d4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://web.archive.org/web/20180701233338/https://www.valentinog.com/blog/js-execution-context-call-stack/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://web.archive.org/web/20180701233338/https://www.valentinog.com/blog/js-execution-context-call-stack/"><strong>Javascript: What Is The Execution Context? What Is The Call Stack?</strong><br />
<em>What is the Execution Context in Javascript? I bet you don't know the answer. What are the most basic components of a…</em>web.archive.org</a><a href="https://web.archive.org/web/20180701233338/https://www.valentinog.com/blog/js-execution-context-call-stack/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*b31hiO4ynbDLRrXWEFF4aQ.png" class="graf-image" /></figure><a href="https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0"><strong>Understanding Execution Context and Execution Stack in Javascript</strong><br />
<em>Understanding execution context and stack to become a better Javascript developer.</em>blog.bitsrc.io</a><a href="https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf"><strong>How JavaScript works: an overview of the engine, the runtime, and the call stack</strong><br />
<em>As JavaScript is getting more and more popular, teams are leveraging its support on many levels in their stack …</em>blog.sessionstack.com</a><a href="https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/codex/scope-closures-context-in-javascript-f126f1523104" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/codex/scope-closures-context-in-javascript-f126f1523104"><strong>Breaking Down Scope, Context, And Closure In JavaScript In Simple Terms.</strong><br />
<em>“JavaScript’s global scope is like a public toilet. You can’t avoid going in there, but try to limit your contact with…</em>medium.com</a><a href="https://medium.com/codex/scope-closures-context-in-javascript-f126f1523104" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://tylermcginnis.com/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://tylermcginnis.com/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/"><strong>The Ultimate Guide to Hoisting, Scopes, and Closures in JavaScript - ui.dev</strong><br />
<em>It may seem surprising, but in my opinion the most important and fundamental concept to understanding the JavaScript…</em>tylermcginnis.com</a><a href="https://tylermcginnis.com/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/bipinrajbhar/how-javascript-works-under-the-hood-an-overview-of-javascript-engine-heap-and-call-stack-1j5o" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/bipinrajbhar/how-javascript-works-under-the-hood-an-overview-of-javascript-engine-heap-and-call-stack-1j5o"><strong>How JavaScript Works: An Overview of JavaScript Engine, Heap, and Call Stack</strong><br />
<em>Hello everyone 👋, I hope you are doing great. So, today you are going to learn An Overview of JavaScript Engine, Heap…</em>dev.to</a><a href="https://dev.to/bipinrajbhar/how-javascript-works-under-the-hood-an-overview-of-javascript-engine-heap-and-call-stack-1j5o" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/codex/fundamental-data-structures-in-javascript-8f9f709c15b4" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/codex/fundamental-data-structures-in-javascript-8f9f709c15b4"><strong>Fundamental Data Structures In JavaScript</strong><br />
<em>Data structures in JavaScript</em>medium.com</a><a href="https://medium.com/codex/fundamental-data-structures-in-javascript-8f9f709c15b4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

Here’s a live code editor where you can mess with any of the examples…

<span class="graf-dropCap">H</span>ere’s a live code editor where you can mess with any of the examples…

#### Coding practice

-   <span id="824c"><a href="https://leetcode.com/" class="markup--anchor markup--li-anchor">LeetCode</a></span>
-   <span id="a528"><a href="https://www.interviewbit.com/" class="markup--anchor markup--li-anchor">InterviewBit</a></span>
-   <span id="fa41"><a href="https://codility.com/" class="markup--anchor markup--li-anchor">Codility</a></span>
-   <span id="6c61"><a href="https://www.hackerrank.com/" class="markup--anchor markup--li-anchor">HackerRank</a></span>
-   <span id="dff6"><a href="https://projecteuler.net/" class="markup--anchor markup--li-anchor">Project Euler</a></span>
-   <span id="b2dd"><a href="https://spoj.com/" class="markup--anchor markup--li-anchor">Spoj</a></span>
-   <span id="c8e8"><a href="https://code.google.com/codejam/contests.html" class="markup--anchor markup--li-anchor">Google Code Jam practice problems</a></span>
-   <span id="e8bb"><a href="https://www.hackerearth.com/" class="markup--anchor markup--li-anchor">HackerEarth</a></span>
-   <span id="e803"><a href="https://www.topcoder.com/" class="markup--anchor markup--li-anchor">Top Coder</a></span>
-   <span id="294e"><a href="https://www.codechef.com/" class="markup--anchor markup--li-anchor">CodeChef</a></span>
-   <span id="9c05"><a href="https://www.codewars.com/" class="markup--anchor markup--li-anchor">Codewars</a></span>
-   <span id="356e"><a href="https://codesignal.com/" class="markup--anchor markup--li-anchor">CodeSignal</a></span>
-   <span id="2d20"><a href="http://codekata.com/" class="markup--anchor markup--li-anchor">CodeKata</a></span>
-   <span id="d3bf"><a href="https://www.firecode.io/" class="markup--anchor markup--li-anchor">Firecode</a></span>

### Dependent on data

> *Something that data structure and algorithms have in common when talking about time complexity is that they are both dealing with data. When you deal with data you become dependent on them and as a result the time complexity is also dependent of the data that you received. To solve this problem we talk about 3 different time complexity.*

-   <span id="bc8d">**The best-case complexity: when the data looks the best**</span>
-   <span id="8b06">**The worst-case complexity: when the data looks the worst**</span>
-   <span id="881c">**The average-case complexity: when the data looks average**</span>

### Big O notation

The complexity is usually expressed with the Big O notation. The wikipedia page about this subject is pretty complex but you can find here a good summary of the different complexity for the most famous data structures and sorting algorithms.

### The Array data structure

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Qk3UYgeqXamRrFLR.gif" class="graf-image" /></figure>### Definition

An Array data structure, or simply an Array, is a data structure consisting of a collection of elements (values or variables), each identified by at least one array index or key. The simplest type of data structure is a linear array, also called one-dimensional array. From Wikipedia

Arrays are among the oldest and most important data structures and are used by every program. They are also used to implement many other data structures.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Primitive_values" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Primitive_values"><strong>JavaScript data types and data structures - JavaScript | MDN</strong><br />
<em>Programming languages all have built-in data structures, but these often differ from one language to another. This…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Primitive_values" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://2ality.com/2012/04/number-encoding.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://2ality.com/2012/04/number-encoding.html"><strong>How numbers are encoded in JavaScript</strong><br />
<em>Edit description</em>2ality.com</a><a href="http://2ality.com/2012/04/number-encoding.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/angular-in-depth/javascripts-number-type-8d59199db1b6" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/angular-in-depth/javascripts-number-type-8d59199db1b6"><strong>Here is what you need to know about JavaScript’s Number type</strong><br />
<em>Why 0.1+0.2 IS NOT equal to 0.3 and 9007199254740992 IS equal to 9007199254740993</em>medium.com</a><a href="https://medium.com/angular-in-depth/javascripts-number-type-8d59199db1b6" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.chewxy.com/2014/02/24/what-every-javascript-developer-should-know-about-floating-point-numbers/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.chewxy.com/2014/02/24/what-every-javascript-developer-should-know-about-floating-point-numbers/"><strong>What Every JavaScript Developer Should Know About Floating Point Numbers</strong><br />
<em>After I gave my talk on JavaScript (really, I was there trying to shamelessly plug my book - Underhanded JavaScript and…</em>blog.chewxy.com</a><a href="https://blog.chewxy.com/2014/02/24/what-every-javascript-developer-should-know-about-floating-point-numbers/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/"><strong>The Secret Life of JavaScript Primitives</strong><br />
<em>You may not know it but, in JavaScript, whenever you interact with string, number or boolean primitives you enter a…</em>javascriptweblog.wordpress.com</a><a href="https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### <a href="https://javascript.info/primitives-methods#a-primitive-as-an-object" class="markup--anchor markup--h3-anchor">A primitive as an object</a>

Here’s the paradox faced by the creator of JavaScript:

-   <span id="95d1">There are many things one would want to do with a primitive like a string or a number. It would be great to access them using methods.</span>
-   <span id="10fe">Primitives must be as fast and lightweight as possible.</span>

The solution looks a little bit awkward, but here it is:

1.  <span id="4506">Primitives are still primitive. A single value, as desired.</span>
2.  <span id="7880">The language allows access to methods and properties of strings, numbers, booleans and symbols.</span>
3.  <span id="be72">In order for that to work, a special “object wrapper” that provides the extra functionality is created, and then is destroyed.</span>

The “object wrappers” are different for each primitive type and are called: `String`, `Number`, `Boolean` and `Symbol`. Thus, they provide different sets of methods.

For instance, there exists a string method <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase" class="markup--anchor markup--p-anchor">str.toUpperCase()</a> that returns a capitalized `str`.

Here’s how it works:

    let str = "Hello";

    alert( str.toUpperCase() ); // HELLO

Simple, right? Here’s what actually happens in `str.toUpperCase()`:

1.  <span id="5a30">The string `str` is a primitive. So in the moment of accessing its property, a special object is created that knows the value of the string, and has useful methods, like `toUpperCase()`.</span>
2.  <span id="7659">That method runs and returns a new string (shown by `alert`).</span>
3.  <span id="8c3f">The special object is destroyed, leaving the primitive `str` alone.</span>

So primitives can provide methods, but they still remain lightweight.

The JavaScript engine highly optimizes this process. It may even skip the creation of the extra object at all. But it must still adhere to the specification and behave as if it creates one.

<a href="https://flow.org/en/docs/types/primitives/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://flow.org/en/docs/types/primitives/"><strong>Primitive Types | Flow</strong><br />
<em>JavaScript has a number of different primitive types ( MDN): The primitive types appear in the language as either…</em>flow.org</a><a href="https://flow.org/en/docs/types/primitives/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/d4nyll/not-everything-in-javascript-is-an-object" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/d4nyll/not-everything-in-javascript-is-an-object"><strong>(Not) Everything in JavaScript is an Object</strong><br />
<em>This was originally published on The Brewing Press For those who just wants the answers, feel free to jump to the…</em>dev.to</a><a href="https://dev.to/d4nyll/not-everything-in-javascript-is-an-object" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/codex/objects-in-javascript-b212486dade6" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/codex/objects-in-javascript-b212486dade6"><strong>Objects In JavaScript</strong><br />
<em>The object is a data structure that stores other data, similar to how an array stores elements.</em>medium.com</a><a href="https://medium.com/codex/objects-in-javascript-b212486dade6" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.bitsrc.io/diving-deeper-in-javascripts-objects-318b1e13dc12" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.bitsrc.io/diving-deeper-in-javascripts-objects-318b1e13dc12"><strong>Diving Deeper in JavaScripts Objects</strong><br />
<em>A Closer Look at JavaScript Object Descriptors</em>blog.bitsrc.io</a><a href="https://blog.bitsrc.io/diving-deeper-in-javascripts-objects-318b1e13dc12" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@bolajiayodeji/the-differences-between-object-freeze-vs-const-in-javascript-4eacea534d7c" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@bolajiayodeji/the-differences-between-object-freeze-vs-const-in-javascript-4eacea534d7c"><strong>The differences between Object.freeze() vs Const in JavaScript</strong><br />
<em>ES6 has brought several new features and methods into JavaScript since its release. These features have better improved…</em>medium.com</a><a href="https://medium.com/@bolajiayodeji/the-differences-between-object-freeze-vs-const-in-javascript-4eacea534d7c" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0"><strong>Explaining Value vs. Reference in Javascript</strong><br />
<em>A simple look at computer memory explains what’s happening</em>codeburst.io</a><a href="https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### DOES IT MUTATE:

<a href="https://doesitmutate.xyz/" class="markup--anchor markup--p-anchor">LINK….</a>

### <a href="https://doesitmutate.xyz/concat" class="markup--anchor markup--h3-anchor">.concat</a>

no mutation

### Description

The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

    Array.prototype.concat ( [ item1 [ , item2 [ , … ] ] ] )

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat"><strong>Array.prototype.concat() - JavaScript | MDN</strong><br />
<em>The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Example

    var array1 = ['a', 'b', 'c'];
    var array2 = ['d', 'e', 'f'];

    console.log(array1.concat(array2));
    // expected output: Array ["a", "b", "c", "d", "e", "f"]

#### <a href="https://doesitmutate.xyz/copywithin" class="markup--anchor markup--h4-anchor">.copyWithin()</a>

**mutates**

### Description

The copyWithin() method shallow copies part of an array to another location in the same array and returns it, without modifying its size.

    arr.copyWithin(target)
    arr.copyWithin(target, start)
    arr.copyWithin(target, start, end)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin"><strong>Array.prototype.copyWithin() - JavaScript | MDN</strong><br />
<em>The copyWithin() method shallow copies part of an array to another location in the same array and returns it without…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

### Example

    var array1 = ['a', 'b', 'c', 'd', 'e'];

    // copy to index 0 the element at index 3
    console.log(array1.copyWithin(0, 3, 4));
    // expected output: Array ["d", "b", "c", "d", "e"]

    // copy to index 1 all elements from index 3 to the end
    console.log(array1.copyWithin(1, 3));
    // expected output: Array ["d", "d", "e", "d", "e"]

### <a href="https://doesitmutate.xyz/entries" class="markup--anchor markup--h3-anchor">.entries()</a>

#### no mutation

### Description

The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

    a.entries()

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries"><strong>Array.prototype.entries() - JavaScript | MDN</strong><br />
<em>The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Example

    var array1 = ['a', 'b', 'c'];

    var iterator1 = array1.entries();

    console.log(iterator1.next().value);
    // expected output: Array [0, "a"]

    console.log(iterator1.next().value);
    // expected output: Array [1, "b"]

### <a href="https://doesitmutate.xyz/every" class="markup--anchor markup--h3-anchor">.every</a>

#### no mutation

### Description

The every() method tests whether all elements in the array pass the test implemented by the provided function.

    Array.prototype.every ( callbackfn [ , thisArg ] )

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every"><strong>Array.prototype.every() - JavaScript | MDN</strong><br />
<em>The every() method tests whether all elements in the array pass the test implemented by the provided function. It…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Example

    function isBelowThreshold(currentValue) {
      return currentValue < 40;
    }

    var array1 = [1, 30, 39, 29, 10, 13];

    console.log(array1.every(isBelowThreshold));
    // expected output: true

### <a href="https://doesitmutate.xyz/fill" class="markup--anchor markup--h3-anchor">.fill()</a>

#### mutates

### Description

The fill() method fills all the elements of an array from a start index to an end index with a static value.

    arr.fill(value)
    arr.fill(value, start)
    arr.fill(value, start, end)

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill"><strong>Array.prototype.fill() - JavaScript | MDN</strong><br />
<em>The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Example :

    var array1 = [1, 2, 3, 4];

    // fill with 0 from position 2 until position 4
    console.log(array1.fill(0, 2, 4));
    // expected output: [1, 2, 0, 0]

    // fill with 5 from position 1
    console.log(array1.fill(5, 1));
    // expected output: [1, 5, 5, 5]

    console.log(array1.fill(6));
    // expected output: [6, 6, 6, 6]

### <a href="https://doesitmutate.xyz/filter" class="markup--anchor markup--h3-anchor">.filter</a>

#### no mutation

### Description

The filter() method creates a new array with all elements that pass the test implemented by the provided function.

    Array.prototype.filter ( callbackfn [ , thisArg ] )

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"><strong>Array.prototype.filter() - JavaScript | MDN</strong><br />
<em>The method creates a new array with all elements that pass the test implemented by the provided function. Function is a…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Example

    var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    const result = words.filter(word => word.length > 6);

    console.log(result);
    // expected output: Array ["exuberant", "destruction", "present"]

### <a href="https://doesitmutate.xyz/find" class="markup--anchor markup--h3-anchor">.find()</a>

no mutation

### Description

The find() method returns a value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

    arr.find(callback[, thisArg])

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find"><strong>Array.prototype.find() - JavaScript | MDN</strong><br />
<em>The find() method returns the value of the first element in the provided array that satisfies the provided testing…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Example

    var array1 = [5, 12, 8, 130, 44];

    var found = array1.find(function(element) {
      return element > 10;
    });

    console.log(found);
    // expected output: 12

<a href="https://medium.com/@_benaston/lesson-1b-javascript-fundamentals-380f601ba851" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@_benaston/lesson-1b-javascript-fundamentals-380f601ba851"><strong>Value types, reference types and scope in JavaScript</strong><br />
<em>There are only two things fundamental to JavaScript: objects and functions.</em>medium.com</a><a href="https://medium.com/@_benaston/lesson-1b-javascript-fundamentals-380f601ba851" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/dailyjs/back-to-roots-javascript-value-vs-reference-8fb69d587a18" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/dailyjs/back-to-roots-javascript-value-vs-reference-8fb69d587a18"><strong>Back to roots: JavaScript Value vs Reference</strong><br />
<em>Let’s look at the concept of Value vs Reference. Every JavaScript developer should know this topic as it’s often the…</em>medium.com</a><a href="https://medium.com/dailyjs/back-to-roots-javascript-value-vs-reference-8fb69d587a18" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/grasp-by-value-and-by-reference-in-javascript-7ed75efa1293" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/grasp-by-value-and-by-reference-in-javascript-7ed75efa1293"><strong>Grasp “By Value” and “By Reference” in JavaScript</strong><br />
<em>And learn why it’s crucial to know the difference</em>hackernoon.com</a><a href="https://hackernoon.com/grasp-by-value-and-by-reference-in-javascript-7ed75efa1293" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/javascript-reference-and-copy-variables-b0103074fdf0" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/javascript-reference-and-copy-variables-b0103074fdf0"><strong>JavaScript Reference and Copy Variables | Hacker Noon</strong><br />
<em>Each programming language has its own peculiarities (and JavaScript has a lot), and today I'm going to talk about…</em>hackernoon.com</a><a href="https://hackernoon.com/javascript-reference-and-copy-variables-b0103074fdf0" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://www.javascripttutorial.net/javascript-primitive-vs-reference-values/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://www.javascripttutorial.net/javascript-primitive-vs-reference-values/"><strong>JavaScript Primitive vs. Reference Values</strong><br />
<em>Summary: in this tutorial, you will learn the differences between primitive and reference values. In JavaScript, a…</em>www.javascripttutorial.net</a><a href="http://www.javascripttutorial.net/javascript-primitive-vs-reference-values/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://stackoverflow.com/questions/6605640/javascript-by-reference-vs-by-value" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://stackoverflow.com/questions/6605640/javascript-by-reference-vs-by-value"><strong>JavaScript by reference vs. by value</strong><br />
<em>I'm looking for some good comprehensive reading material on when JavaScript passes something by value and when by…</em>stackoverflow.com</a><a href="https://stackoverflow.com/questions/6605640/javascript-by-reference-vs-by-value" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/mostlyfocusedmike/javascript-interview-prep-primitive-vs-reference-types-3o4f" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/mostlyfocusedmike/javascript-interview-prep-primitive-vs-reference-types-3o4f"><strong>JavaScript Interview Prep: Primitive vs. Reference Types</strong><br />
<em>original article In a JavaScript interview, they might ask if you understand the difference between primitive and…</em>dev.to</a><a href="https://dev.to/mostlyfocusedmike/javascript-interview-prep-primitive-vs-reference-types-3o4f" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/promhize/what-you-need-to-know-about-javascripts-implicit-coercion-e23" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/promhize/what-you-need-to-know-about-javascripts-implicit-coercion-e23"><strong>What you need to know about Javascript's Implicit Coercion</strong><br />
<em>Javascript's implicit coercion simply refers to Javascript attempting to coerce an unexpected value type to the…</em>dev.to</a><a href="https://dev.to/promhize/what-you-need-to-know-about-javascripts-implicit-coercion-e23" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/js-type-coercion-explained-27ba3d9a2839" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/js-type-coercion-explained-27ba3d9a2839"><strong>JavaScript type coercion explained</strong><br />
<em>Know your engines</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/js-type-coercion-explained-27ba3d9a2839" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/javascript-coercion-explained-545c895213d3" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/javascript-coercion-explained-545c895213d3"><strong>Javascript Coercion Explained</strong><br />
<em>Along with some practical examples</em>hackernoon.com</a><a href="https://hackernoon.com/javascript-coercion-explained-545c895213d3" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://stackoverflow.com/questions/19915688/what-exactly-is-type-coercion-in-javascript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://stackoverflow.com/questions/19915688/what-exactly-is-type-coercion-in-javascript"><strong>What exactly is Type Coercion in Javascript?</strong><br />
<em>Let's start with a short intro to type systems which I think will help you understand the general idea of type…</em>stackoverflow.com</a><a href="https://stackoverflow.com/questions/19915688/what-exactly-is-type-coercion-in-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://thedevs.network/blog/type-coercion-in-javascript-and-why-everyone-gets-it-wrong" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://thedevs.network/blog/type-coercion-in-javascript-and-why-everyone-gets-it-wrong"><strong>https://thedevs.network/</strong><br />
<em>Weak dynamic typing is arguably one of those things everybody likes to pick at about JavaScript. For an elegant dynamic…</em>thedevs.network</a><a href="https://thedevs.network/blog/type-coercion-in-javascript-and-why-everyone-gets-it-wrong" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/getify/You-Dont-Know-JS/tree/1st-ed" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/getify/You-Dont-Know-JS/tree/1st-ed"><strong>getify/You-Dont-Know-JS</strong><br />
<em>A book series on JavaScript. @YDKJS on twitter. Contribute to getify/You-Dont-Know-JS development by creating an…</em>github.com</a><a href="https://github.com/getify/You-Dont-Know-JS/tree/1st-ed" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a"><strong>JavaScript — Double Equals vs. Triple Equals</strong><br />
<em>Learn equality in JavaScript in 3 minutes</em>codeburst.io</a><a href="https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bytearcher.com/articles/equality-comparison-operator-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bytearcher.com/articles/equality-comparison-operator-javascript/"><strong>Should I use === or == equality comparison operator in JavaScript?</strong><br />
<em>You know there are two different equality comparison operators in JavaScript: the === and == operators, or the triple…</em>bytearcher.com</a><a href="https://bytearcher.com/articles/equality-comparison-operator-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.codementor.io/javascript/tutorial/double-equals-and-coercion-in-javascript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.codementor.io/javascript/tutorial/double-equals-and-coercion-in-javascript"><strong>== vs === JavaScript: Double Equals and Coercion | Codementor</strong><br />
<em>The == (double equals or loose equality) operator is an interesting operator. Many avoid it because they don't know how…</em>www.codementor.io</a><a href="https://www.codementor.io/javascript/tutorial/double-equals-and-coercion-in-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.impressivewebs.com/why-use-triple-equals-javascipt/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.impressivewebs.com/why-use-triple-equals-javascipt/"><strong>Why Use the Triple-Equals Operator in JavaScript? - Impressive Webs</strong><br />
<em>"Determining whether two variables are equivalent is one of the most important operations in programming." That's…</em>www.impressivewebs.com</a><a href="https://www.impressivewebs.com/why-use-triple-equals-javascipt/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.oreilly.com/learning/what-is-the-difference-between-and-in-javascript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.oreilly.com/learning/what-is-the-difference-between-and-in-javascript"><strong>What is the difference between == and === in JavaScript?</strong><br />
<em>On the surface == and === appear to be functionally the same, so why bother typing an extra character? In this video…</em>www.oreilly.com</a><a href="https://www.oreilly.com/learning/what-is-the-difference-between-and-in-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://stackoverflow.com/questions/3787901/why-javascripts-typeof-always-return-object" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://stackoverflow.com/questions/3787901/why-javascripts-typeof-always-return-object"><strong>Why javascript's typeof always return "object"?</strong><br />
<em>To add in with the others, typeof returns both objects and primitives. There are 5 primitive types in javascript…</em>stackoverflow.com</a><a href="https://stackoverflow.com/questions/3787901/why-javascripts-typeof-always-return-object" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://tobyho.com/2011/01/28/checking-types-in-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://tobyho.com/2011/01/28/checking-types-in-javascript/"><strong>Checking Types in Javascript</strong><br />
<em>Have you ever wondered: what is the correct way to check if a Javascript variable is an Array? Do a Google search and…</em>tobyho.com</a><a href="http://tobyho.com/2011/01/28/checking-types-in-javascript/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://webbjocke.com/javascript-check-data-types/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://webbjocke.com/javascript-check-data-types/"><strong>How to better check data types in javascript - Webbjocke</strong><br />
<em>To check what data type something has in javascript is not always the easiest. The language itself provides an operator…</em>webbjocke.com</a><a href="https://webbjocke.com/javascript-check-data-types/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://tomeraberba.ch/html/post/checking-for-the-absence-of-a-value-in-javascript.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://tomeraberba.ch/html/post/checking-for-the-absence-of-a-value-in-javascript.html"><strong>Tomer Aberbach | Checking for the Absence of a Value in JavaScript</strong><br />
<em>When I first started learning JavaScript I was confused by the seemingly endless ways developers check for the absence…</em>tomeraberba.ch</a><a href="https://tomeraberba.ch/html/post/checking-for-the-absence-of-a-value-in-javascript.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/scope-closures" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/scope-closures"><strong>getify/You-Dont-Know-JS</strong><br />
<em>A book series on JavaScript. @YDKJS on twitter. Contribute to getify/You-Dont-Know-JS development by creating an…</em>github.com</a><a href="https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/scope-closures" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/javascript-functions-understanding-the-basics-207dbf42ed99" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/javascript-functions-understanding-the-basics-207dbf42ed99"><strong>JavaScript Functions — Understanding The Basics</strong><br />
<em>Explore Functions in JavaScript — declaration, expressions, invocation, and more.</em>codeburst.io</a><a href="https://codeburst.io/javascript-functions-understanding-the-basics-207dbf42ed99" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://www.deadcoderising.com/2017-04-11-es6-var-let-and-const-the-battle-between-function-scope-and-block-scope/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://www.deadcoderising.com/2017-04-11-es6-var-let-and-const-the-battle-between-function-scope-and-block-scope/"><strong>ES6: var, let and const - The battle between function scope and block scope</strong><br />
<em>In the pre-ES6 era, there was only one way of declaring variables in JavaScript - being the usage of var. var has…</em>www.deadcoderising.com</a><a href="http://www.deadcoderising.com/2017-04-11-es6-var-let-and-const-the-battle-between-function-scope-and-block-scope/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://adripofjavascript.com/blog/drips/emulating-block-scope-in-javascript.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://adripofjavascript.com/blog/drips/emulating-block-scope-in-javascript.html"><strong>Emulating Block Scope in JavaScript</strong><br />
<em>While there are many issues that trip up developers coming from other languages, variable scoping may be number one…</em>adripofjavascript.com</a><a href="http://adripofjavascript.com/blog/drips/emulating-block-scope-in-javascript.html" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://josephcardillo.medium.com/the-difference-between-function-and-block-scope-in-javascript-4296b2322abe" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://josephcardillo.medium.com/the-difference-between-function-and-block-scope-in-javascript-4296b2322abe"><strong>The Difference Between Function and Block Scope in JavaScript</strong><br />
<em>Back to the basics with the var, let and const variables</em>josephcardillo.medium.com</a><a href="https://josephcardillo.medium.com/the-difference-between-function-and-block-scope-in-javascript-4296b2322abe" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://edgecoders.com/function-scopes-and-block-scopes-in-javascript-25bbd7f293d7" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://edgecoders.com/function-scopes-and-block-scopes-in-javascript-25bbd7f293d7"><strong>Function scopes and block scopes in JavaScript</strong><br />
<em>Is the following line a valid line of JavaScript code?</em>edgecoders.com</a><a href="https://edgecoders.com/function-scopes-and-block-scopes-in-javascript-25bbd7f293d7" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://ryanmorr.com/understanding-scope-and-context-in-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://ryanmorr.com/understanding-scope-and-context-in-javascript/"><strong>Understanding Scope and Context in JavaScript</strong><br />
<em>Understanding Scope and Context in JavaScript August 16, 2013 JavaScript JavaScript's implementation of scope and…</em>ryanmorr.com</a><a href="http://ryanmorr.com/understanding-scope-and-context-in-javascript/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://css-tricks.com/javascript-scope-closures/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://css-tricks.com/javascript-scope-closures/"><strong>JavaScript Scope and Closures</strong><br />
<em>Scopes and closures are important in JavaScript. But, they were confusing for me when I first started. Here's an…</em>css-tricks.com</a><a href="https://css-tricks.com/javascript-scope-closures/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developer.telerik.com/topics/web-development/understanding-scope-in-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.telerik.com/topics/web-development/understanding-scope-in-javascript/"><strong>Understanding Scope in JavaScript - Telerik Blogs</strong><br />
<em>Scope is an important, yet ambiguous concept in JavaScript. Used correctly, it allows you to leverage good design…</em>developer.telerik.com</a><a href="https://developer.telerik.com/topics/web-development/understanding-scope-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://speakingjs.com/es5/ch16.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://speakingjs.com/es5/ch16.html"><strong>Chapter 16. Variables: Scopes, Environments, and Closures</strong><br />
<em>Chapter 16. Variables: Scopes, Environments, and Closures This chapter first explains how to use variables and then…</em>speakingjs.com</a><a href="http://speakingjs.com/es5/ch16.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://scotch.io/tutorials/understanding-scope-in-javascript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://scotch.io/tutorials/understanding-scope-in-javascript"><strong>Understanding Scope in JavaScript</strong><br />
<em>JavaScript has a feature called Scope. Though the concept of scope is not that easy to understand for many new…</em>scotch.io</a><a href="https://scotch.io/tutorials/understanding-scope-in-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/when-to-use-a-function-declarations-vs-a-function-expression-70f15152a0a0" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/when-to-use-a-function-declarations-vs-a-function-expression-70f15152a0a0"><strong>When to use a function declaration vs. a function expression</strong><br />
<em>The differences between them and when to use one or the other.</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/when-to-use-a-function-declarations-vs-a-function-expression-70f15152a0a0" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/alexandrafren/a-javascript-fundamentals-cheat-sheet-scope-context-and-this-28ai" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/alexandrafren/a-javascript-fundamentals-cheat-sheet-scope-context-and-this-28ai"><strong>A JavaScript Fundamentals Cheat Sheet: Scope, Context, and "this"</strong><br />
<em>Scope Scope refers to where a variable can be accessed within a program. Some variables can be accessed from anywhere…</em>dev.to</a><a href="https://dev.to/alexandrafren/a-javascript-fundamentals-cheat-sheet-scope-context-and-this-28ai" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.sitepoint.com/function-expressions-vs-declarations/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.sitepoint.com/function-expressions-vs-declarations/"><strong>Quick Tip: Function Expressions vs Function Declarations - SitePoint</strong><br />
<em>This article was peer reviewed by Jeff Mott. Thanks to all of SitePoint's peer reviewers for making SitePoint content…</em>www.sitepoint.com</a><a href="https://www.sitepoint.com/function-expressions-vs-declarations/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@raviroshan.talk/javascript-function-declaration-vs-expression-f5873b8c7b38" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@raviroshan.talk/javascript-function-declaration-vs-expression-f5873b8c7b38"><strong>JavaScript Function — Declaration vs Expression</strong><br />
<em>Functions are considered as First Class citizen in JavaScript and it is really important to be clear with the concept…</em>medium.com</a><a href="https://medium.com/@raviroshan.talk/javascript-function-declaration-vs-expression-f5873b8c7b38" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@mandeep1012/function-declarations-vs-function-expressions-b43646042052" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@mandeep1012/function-declarations-vs-function-expressions-b43646042052"><strong>Function Declarations vs. Function Expressions</strong><br />
<em>What is Function Statement/Declarations in JavaScript?</em>medium.com</a><a href="https://medium.com/@mandeep1012/function-declarations-vs-function-expressions-b43646042052" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/"><strong>Function Declarations vs. Function Expressions</strong><br />
<em>Lets start with a short quiz. What is alerted in each case?: Question 1: Question 2: Question 3: Question 4: If you…</em>javascriptweblog.wordpress.com</a><a href="https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://vvkchandra.medium.com/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://vvkchandra.medium.com/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6"><strong>Essential JavaScript: Mastering Immediately-invoked Function Expressions</strong><br />
<em>Understanding functions inside out and then learning how to exploit them to write modern, clean JavaScript code is a…</em>vvkchandra.medium.com</a><a href="https://vvkchandra.medium.com/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://hashnode.com/post/do-es6-modules-make-the-case-of-iifes-obsolete-civ96wet80scqgc538un20es0" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hashnode.com/post/do-es6-modules-make-the-case-of-iifes-obsolete-civ96wet80scqgc538un20es0"><strong>Do ES6 Modules make the case of IIFEs obsolete? - Hashnode</strong><br />
<em>IIFE was one of the most used patterns in the ES5 standard, as functions were the only way to declare a scoped block of…</em>hashnode.com</a><a href="https://hashnode.com/post/do-es6-modules-make-the-case-of-iifes-obsolete-civ96wet80scqgc538un20es0" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/"><strong>A 10 minute primer to JavaScript modules, module formats, module loaders and module bundlers</strong><br />
<em>Modern JavaScript development can be overwhelming. When working on a project, you may wonder why all the modern…</em>www.jvandemo.com</a><a href="https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://exploringjs.com/es6/ch_modules.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://exploringjs.com/es6/ch_modules.html"><strong>16. Modules</strong><br />
<em>Edit description</em>exploringjs.com</a><a href="http://exploringjs.com/es6/ch_modules.html" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/"><strong>ES modules: A cartoon deep-dive - Mozilla Hacks - the Web developer blog</strong><br />
<em>ES modules bring an official, standardized module system to JavaScript. With the release of Firefox 60 in May, all…</em>hacks.mozilla.org</a><a href="https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.sitepoint.com/understanding-es6-modules/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.sitepoint.com/understanding-es6-modules/"><strong>Understanding ES6 Modules - SitePoint</strong><br />
<em>Almost every language has a concept of modules - a way to include functionality declared in one file within another…</em>www.sitepoint.com</a><a href="https://www.sitepoint.com/understanding-es6-modules/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.cloud66.com/an-overview-of-es6-modules-in-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.cloud66.com/an-overview-of-es6-modules-in-javascript/"><strong>An overview of ES6 Modules in JavaScript</strong><br />
<em>Introduction Until recently if you wanted to take full advantage of modules in JavaScript you needed to make use of…</em>blog.cloud66.com</a><a href="https://blog.cloud66.com/an-overview-of-es6-modules-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://ponyfoo.com/articles/es6-modules-in-depth" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://ponyfoo.com/articles/es6-modules-in-depth"><strong>ES6 Modules in Depth</strong><br />
<em>Welcome back to ES6 - "Oh, good. It's not another article about Unicode" - in Depth series. If you've never been around…</em>ponyfoo.com</a><a href="https://ponyfoo.com/articles/es6-modules-in-depth" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/dailyjs/es6-modules-node-js-and-the-michael-jackson-solution-828dc244b8b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/dailyjs/es6-modules-node-js-and-the-michael-jackson-solution-828dc244b8b"><strong>ES6 modules, Node.js and the Michael Jackson Solution</strong><br />
<em>JavaScript’s never had a standard way to import and export functionality from a source file to another. Well, it has…</em>medium.com</a><a href="https://medium.com/dailyjs/es6-modules-node-js-and-the-michael-jackson-solution-828dc244b8b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc"><strong>JavaScript Modules: A Beginner’s Guide</strong><br />
<em>If you’re a newcomer to JavaScript, jargon like “module bundlers vs. module loaders,” “Webpack vs. Browserify” and “AMD…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developers.google.com/web/fundamentals/primers/modules" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developers.google.com/web/fundamentals/primers/modules"><strong>JavaScript modules</strong><br />
<em>This article explains how to use JavaScript modules, how to deploy them responsibly, and how the Chrome team is working…</em>developers.google.com</a><a href="https://developers.google.com/web/fundamentals/primers/modules" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/bhagatparwinder/iife-immediately-invoked-function-expressions-49c5" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/bhagatparwinder/iife-immediately-invoked-function-expressions-49c5"><strong>IIFE: Immediately Invoked Function Expressions</strong><br />
<em>IIFE is a function that is declared and invoked at the same time. You create them by using anonymous functions and…</em>dev.to</a><a href="https://dev.to/bhagatparwinder/iife-immediately-invoked-function-expressions-49c5" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/front-end-weekly/javascript-event-loop-explained-4cd26af121d4" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/front-end-weekly/javascript-event-loop-explained-4cd26af121d4"><strong>JavaScript Event Loop Explained</strong><br />
<em>“How is JavaScript asynchronous and single-threaded ?” The short answer is that JavaScript language is single-threaded…</em>medium.com</a><a href="https://medium.com/front-end-weekly/javascript-event-loop-explained-4cd26af121d4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.carbonfive.com/2013/10/27/the-javascript-event-loop-explained/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.carbonfive.com/2013/10/27/the-javascript-event-loop-explained/"><strong>The JavaScript Event Loop: Explained</strong><br />
<em>With JavaScript approaching near-ubiquity as the scripting language of the web browser, it benefits you to have a basic…</em>blog.carbonfive.com</a><a href="https://blog.carbonfive.com/2013/10/27/the-javascript-event-loop-explained/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/understanding-js-the-event-loop-959beae3ac40" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/understanding-js-the-event-loop-959beae3ac40"><strong>Understanding JS: The Event Loop</strong><br />
<em>Due to the amazing quantity of libraries, tools and all kinds of things that make your development easier, a lot of…</em>hackernoon.com</a><a href="https://hackernoon.com/understanding-js-the-event-loop-959beae3ac40" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.zeolearn.com/magazine/understanding-the-javascript-event-loop" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.zeolearn.com/magazine/understanding-the-javascript-event-loop"><strong>Understanding the JavaScript event loop</strong><br />
<em>If you are someone who has heard about the terms event loop, callback queue, concurrency model and call stack but…</em>www.zeolearn.com</a><a href="https://www.zeolearn.com/magazine/understanding-the-javascript-event-loop" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://code.likeagirl.io/what-the-heck-is-event-loop-1e414fccef49" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://code.likeagirl.io/what-the-heck-is-event-loop-1e414fccef49"><strong>Event loop in javascript</strong><br />
<em>If you love javascript you’ve need to learn this. One of the deeper aspects of JavaScript is it’s Event Loop. Its…</em>code.likeagirl.io</a><a href="https://code.likeagirl.io/what-the-heck-is-event-loop-1e414fccef49" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://flaviocopes.com/javascript-event-loop/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://flaviocopes.com/javascript-event-loop/"><strong>The JavaScript Event Loop</strong><br />
<em>The Event Loop is one of the most important aspects to understand about JavaScript. I've programmed for years with…</em>flaviocopes.com</a><a href="https://flaviocopes.com/javascript-event-loop/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5"><strong>How JavaScript works: Event loop and the rise of Async programming + 5 ways to better coding with…</strong><br />
<em>Welcome to post # 4 of the series dedicated to exploring JavaScript and its building components. In the process of…</em>blog.sessionstack.com</a><a href="https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/"><strong>Tasks, microtasks, queues and schedules</strong><br />
<em>Edit description</em>jakearchibald.com</a><a href="https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/presto412/visualising-the-javascript-event-loop-with-a-pizza-restaurant-analogy-47a8" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/presto412/visualising-the-javascript-event-loop-with-a-pizza-restaurant-analogy-47a8"><strong>Visualising the JavaScript Event Loop with a Pizza Restaurant analogy</strong><br />
<em>Consider a pizza restaurant. There are two types of orders that we currently have from a single customer - one is an…</em>dev.to</a><a href="https://dev.to/presto412/visualising-the-javascript-event-loop-with-a-pizza-restaurant-analogy-47a8" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif"><strong>✨♻️ JavaScript Visualized: Event Loop</strong><br />
<em>Oh boi the event loop. It's one of those things that every JavaScript developer has to deal with in one way or another…</em>dev.to</a><a href="https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.info/settimeout-setinterval" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.info/settimeout-setinterval"><strong>Scheduling: setTimeout and setInterval</strong><br />
<em>Edit description</em>javascript.info</a><a href="https://javascript.info/settimeout-setinterval" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/akanksha_9560/why-not-to-use-setinterval--2na9" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/akanksha_9560/why-not-to-use-setinterval--2na9"><strong>Why not to use setInterval</strong><br />
<em>Recently, I came across a requirement where I had to call a function repeatedly after specific time interval, like…</em>dev.to</a><a href="https://dev.to/akanksha_9560/why-not-to-use-setinterval--2na9" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://develoger.com/settimeout-vs-setinterval-cff85142555b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://develoger.com/settimeout-vs-setinterval-cff85142555b"><strong>setTimeout VS setInterval</strong><br />
<em>Intro</em>develoger.com</a><a href="https://develoger.com/settimeout-vs-setinterval-cff85142555b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://css-tricks.com/using-requestanimationframe/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://css-tricks.com/using-requestanimationframe/"><strong>Using requestAnimationFrame</strong><br />
<em>There used to be just one way to do a timed loop in JavaScript: setInterval(). If you needed to repeat something pretty…</em>css-tricks.com</a><a href="https://css-tricks.com/using-requestanimationframe/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://www.javascriptkit.com/javatutors/requestanimationframe.shtml" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://www.javascriptkit.com/javatutors/requestanimationframe.shtml"><strong>Understanding JavaScript's requestAnimationFrame() method for smooth animations</strong><br />
<em>Updated: Nov 1st, 2017 The modern web of today is filled with sights to behold on every page, where menus slide in and…</em>www.javascriptkit.com</a><a href="http://www.javascriptkit.com/javatutors/requestanimationframe.shtml" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.amitmerchant.com/Handling-Time-Intervals-In-Javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.amitmerchant.com/Handling-Time-Intervals-In-Javascript/"><strong>Handling time intervals in JavaScript</strong><br />
<em>While working on an Electron app Pomolectron, I needed to handle different time intervals through setInterval()…</em>www.amitmerchant.com</a><a href="https://www.amitmerchant.com/Handling-Time-Intervals-In-Javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://www.softwaremag.com/javascript-engines/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://www.softwaremag.com/javascript-engines/"><strong>JavaScript Engines -</strong><br />
<em>By Jen Looper Writing code for the Web sometimes feels a little magical in that developers write a sequence of…</em>www.softwaremag.com</a><a href="http://www.softwaremag.com/javascript-engines/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/understanding-the-core-of-nodejs-the-powerful-chrome-v8-engine-79e7eb8af964" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/understanding-the-core-of-nodejs-the-powerful-chrome-v8-engine-79e7eb8af964"><strong>Understanding How the Chrome V8 Engine Translates JavaScript into Machine Code</strong><br />
<em>Before diving deep into the core of Chrome’s V8, first, let’s get our fundamentals down. All of our systems consist of…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/understanding-the-core-of-nodejs-the-powerful-chrome-v8-engine-79e7eb8af964" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/dailyjs/understanding-v8s-bytecode-317d46c94775" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/dailyjs/understanding-v8s-bytecode-317d46c94775"><strong>Understanding V8’s Bytecode</strong><br />
<em>V8 is Google’s open source JavaScript engine. Chrome, Node.js, and many other applications use V8. This article…</em>medium.com</a><a href="https://medium.com/dailyjs/understanding-v8s-bytecode-317d46c94775" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.mediacurrent.com/blog/brief-history-googles-v8-javascript-engine/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.mediacurrent.com/blog/brief-history-googles-v8-javascript-engine/"><strong>A Brief History of Google's V8 JavaScript Engine</strong><br />
<em>Javascript has a reputation in developer circles as a terrible language. It's classless, loosely typed, and plagued by…</em>www.mediacurrent.com</a><a href="https://www.mediacurrent.com/blog/brief-history-googles-v8-javascript-engine/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/javascript-essentials-why-you-should-know-how-the-engine-works-c2cc0d321553" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/javascript-essentials-why-you-should-know-how-the-engine-works-c2cc0d321553"><strong>JavaScript essentials: why you should know how the engine works</strong><br />
<em>This article is also available in Spanish.</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/javascript-essentials-why-you-should-know-how-the-engine-works-c2cc0d321553" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://mathiasbynens.be/notes/shapes-ics" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://mathiasbynens.be/notes/shapes-ics"><strong>JavaScript engine fundamentals: Shapes and Inline Caches</strong><br />
<em>This article describes some key fundamentals that are common to all JavaScript engines - and not just V8, the engine…</em>mathiasbynens.be</a><a href="https://mathiasbynens.be/notes/shapes-ics" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://mathiasbynens.be/notes/prototypes" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://mathiasbynens.be/notes/prototypes"><strong>JavaScript engine fundamentals: optimizing prototypes</strong><br />
<em>This article describes some key fundamentals that are common to all JavaScript engines - and not just V8, the engine…</em>mathiasbynens.be</a><a href="https://mathiasbynens.be/notes/prototypes" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://v8.dev/blog/elements-kinds" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://v8.dev/blog/elements-kinds"><strong>Elements kinds in V8</strong><br />
<em>Note: If you prefer watching a presentation over reading articles, then enjoy the video below! JavaScript objects can…</em>v8.dev</a><a href="https://v8.dev/blog/elements-kinds" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/programming-with-js-bitwise-operations-393eb0745dc4" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/programming-with-js-bitwise-operations-393eb0745dc4"><strong>Programming with JS: Bitwise Operations</strong><br />
<em>In this series of articles we take a look at different Computer Science topics from the prism of JavaScript. We’ve…</em>hackernoon.com</a><a href="https://hackernoon.com/programming-with-js-bitwise-operations-393eb0745dc4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/using-javascript-bitwise-operators-in-real-life-f551a731ff5" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/using-javascript-bitwise-operators-in-real-life-f551a731ff5"><strong>Using JavaScript’s Bitwise Operators in Real Life</strong><br />
<em>Let’s pretend we’re machine code programmers!</em>codeburst.io</a><a href="https://codeburst.io/using-javascript-bitwise-operators-in-real-life-f551a731ff5" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.w3resource.com/javascript/operators/bitwise-operator.php" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.w3resource.com/javascript/operators/bitwise-operator.php"><strong>JavaScript Bitwise Operators - w3resource</strong><br />
<em>Bitwise operators perform an operation on the bitwise (0,1) representation of their arguments, rather than as decimal…</em>www.w3resource.com</a><a href="https://www.w3resource.com/javascript/operators/bitwise-operator.php" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/bother7-blog/bitwise-operators-in-javascript-65c4c69be0d3" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/bother7-blog/bitwise-operators-in-javascript-65c4c69be0d3"><strong>Bitwise Operators in Javascript</strong><br />
<em>So far the two programming languages we have worked with are Ruby and Javascript. There are many differences between…</em>medium.com</a><a href="https://medium.com/bother7-blog/bitwise-operators-in-javascript-65c4c69be0d3" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/techtrument/a-comprehensive-primer-on-binary-computation-and-bitwise-operators-in-javascript-81acf8341f04" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/techtrument/a-comprehensive-primer-on-binary-computation-and-bitwise-operators-in-javascript-81acf8341f04"><strong>A Comprehensive Primer on Binary Computation and Bitwise Operators in Javascript</strong><br />
<em>Bitwise operators, though they take a few minutes to learn, are a fun way to make your code more space and…</em>medium.com</a><a href="https://medium.com/techtrument/a-comprehensive-primer-on-binary-computation-and-bitwise-operators-in-javascript-81acf8341f04" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.quora.com/How-can-I-understand-Bitwise-operation-in-JavaScript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.quora.com/How-can-I-understand-Bitwise-operation-in-JavaScript"><strong>How can I understand Bitwise operation in JavaScript?</strong><br />
<em>Answer: Okay, I was going to just write that bitwise operations in JavaScript are the same as in every other language…</em>www.quora.com</a><a href="https://www.quora.com/How-can-I-understand-Bitwise-operation-in-JavaScript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://eloquentjavascript.net/14_dom.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://eloquentjavascript.net/14_dom.html"><strong>The Document Object Model :: Eloquent JavaScript</strong><br />
<em>Too bad! Same old story! Once you've finished building your house you notice you've accidentally learned something that…</em>eloquentjavascript.net</a><a href="https://eloquentjavascript.net/14_dom.html" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://www.digitalocean.com/community/tutorials/introduction-to-the-dom" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.digitalocean.com/community/tutorials/introduction-to-the-dom"><strong>How To Understand and Modify the DOM in JavaScript | DigitalOcean</strong><br />
<em>The Document Object Model, usually referred to as the DOM, is an essential part of making websites interactive. It is…</em>www.digitalocean.com</a><a href="https://www.digitalocean.com/community/tutorials/introduction-to-the-dom" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/whats-the-document-object-model-and-why-you-should-know-how-to-use-it-1a2d0bc5429d" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/whats-the-document-object-model-and-why-you-should-know-how-to-use-it-1a2d0bc5429d"><strong>What’s the Document Object Model, and why you should know how to use it.</strong><br />
<em>So, you’ve studied HTML, you’ve created your first tags, learned about CSS, made beautiful forms, amazing buttons…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/whats-the-document-object-model-and-why-you-should-know-how-to-use-it-1a2d0bc5429d" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.guru99.com/how-to-use-dom-and-events-in-javascript.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.guru99.com/how-to-use-dom-and-events-in-javascript.html"><strong>JavaScript DOM Tutorial with Example</strong><br />
<em>Details JavaScript can access all the elements in a webpage making use of Document Object Model (DOM). In fact, the web…</em>www.guru99.com</a><a href="https://www.guru99.com/how-to-use-dom-and-events-in-javascript.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://css-tricks.com/dom/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://css-tricks.com/dom/"><strong>What is the DOM?</strong><br />
<em>A reader recently wrote in asking me what the DOM was. They said they've heard it mentioned and alluded to, but aren't…</em>css-tricks.com</a><a href="https://css-tricks.com/dom/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://zellwk.com/blog/dom-traversals/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://zellwk.com/blog/dom-traversals/"><strong>Traversing the DOM with JavaScript</strong><br />
<em>A good JavaScript developer needs to know how to traverse the DOM-it's the act of selecting an element from another…</em>zellwk.com</a><a href="https://zellwk.com/blog/dom-traversals/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.info/dom-nodes" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.info/dom-nodes"><strong>DOM tree</strong><br />
<em>The backbone of an HTML document is tags. According to the Document Object Model (DOM), every HTML tag is an object…</em>javascript.info</a><a href="https://javascript.info/dom-nodes" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.plainenglish.io/how-to-traverse-the-dom-in-javascript-d6555c335b4e" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.plainenglish.io/how-to-traverse-the-dom-in-javascript-d6555c335b4e"><strong>How to traverse the DOM in JavaScript</strong><br />
<em>Learn how to navigate your way through the DOM tree.</em>javascript.plainenglish.io</a><a href="https://javascript.plainenglish.io/how-to-traverse-the-dom-in-javascript-d6555c335b4e" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction"><strong>Render-tree Construction, Layout, and Paint | Web Fundamentals</strong><br />
<em>The CSSOM and DOM trees are combined into a render tree, which is then used to compute the layout of each visible…</em>developers.google.com</a><a href="https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bitsofco.de/what-exactly-is-the-dom/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bitsofco.de/what-exactly-is-the-dom/"><strong>What, exactly, is the DOM?</strong><br />
<em>The Document Object Model, or the "DOM", is an interface to web pages. It is essentially an API to the page, allowing…</em>bitsofco.de</a><a href="https://bitsofco.de/what-exactly-is-the-dom/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/bouhm/a-vanilla-js-guide-on-mastering-the-dom-3l9b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/bouhm/a-vanilla-js-guide-on-mastering-the-dom-3l9b"><strong>A Vanilla JS Guide On Mastering the DOM</strong><br />
<em>Note: The contents of this post are intended to be introductory and does not include use of any libraries like jQuery…</em>dev.to</a><a href="https://dev.to/bouhm/a-vanilla-js-guide-on-mastering-the-dom-3l9b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript"><strong>How To Use Classes in JavaScript | DigitalOcean</strong><br />
<em>JavaScript is a prototype-based language, and every object in JavaScript has a hidden internal property called…</em>www.digitalocean.com</a><a href="https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/tech-tajawal/javascript-classes-under-the-hood-6b26d2667677" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/tech-tajawal/javascript-classes-under-the-hood-6b26d2667677"><strong>Javascript Classes — Under The Hood</strong><br />
<em>Javascript classes are nothing but a syntactic sugar over existing prototype based inheritance and constructor…</em>medium.com</a><a href="https://medium.com/tech-tajawal/javascript-classes-under-the-hood-6b26d2667677" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.javascriptjanuary.com/blog/es6-classes" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.javascriptjanuary.com/blog/es6-classes"><strong>ES6 Classes - JavaScript January</strong><br />
<em>Object-Oriented Programming (OOP) can be a great way to organize your projects. Introduced with ES6, the javascript…</em>www.javascriptjanuary.com</a><a href="https://www.javascriptjanuary.com/blog/es6-classes" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://scotch.io/tutorials/better-javascript-with-es6-pt-ii-a-deep-dive-into-classes" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://scotch.io/tutorials/better-javascript-with-es6-pt-ii-a-deep-dive-into-classes"><strong>Better JavaScript with ES6, Pt. II: A Deep Dive into Classes</strong><br />
<em>Out with the Old, In with the new Let's be clear about one thing from the start: Under the hood, ES6 classes are not…</em>scotch.io</a><a href="https://scotch.io/tutorials/better-javascript-with-es6-pt-ii-a-deep-dive-into-classes" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/front-end-weekly/understand-the-factory-design-pattern-in-plain-javascript-20b348c832bd" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/front-end-weekly/understand-the-factory-design-pattern-in-plain-javascript-20b348c832bd"><strong>Understand the Factory Design Pattern in plain javascript</strong><br />
<em>The simplest way to understand Factory Design Pattern</em>medium.com</a><a href="https://medium.com/front-end-weekly/understand-the-factory-design-pattern-in-plain-javascript-20b348c832bd" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://atendesigngroup.com/blog/factory-functions-javascript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://atendesigngroup.com/blog/factory-functions-javascript"><strong>Factory Functions in JavaScript | Aten Design Group</strong><br />
<em>As we move from an age of jQuery plugins and script drop-ins to a world of CommonJS and modular architectures it's…</em>atendesigngroup.com</a><a href="https://atendesigngroup.com/blog/factory-functions-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@SntsDev/the-factory-pattern-in-js-es6-78f0afad17e9" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@SntsDev/the-factory-pattern-in-js-es6-78f0afad17e9"><strong>The Factory Pattern in JS ES6</strong><br />
<em>I’m trying to get the most out of all the new things in ES6 (ES2015). And I’m writing a new library where I need a…</em>medium.com</a><a href="https://medium.com/@SntsDev/the-factory-pattern-in-js-es6-78f0afad17e9" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/class-vs-factory-function-exploring-the-way-forward-73258b6a8d15" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/class-vs-factory-function-exploring-the-way-forward-73258b6a8d15"><strong>Class vs Factory function: exploring the way forward</strong><br />
<em>ECMAScript 2015 (aka ES6) comes with the class syntax, so now we have two competing patterns for creating objects. In…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/class-vs-factory-function-exploring-the-way-forward-73258b6a8d15" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@robertgrosse/how-es6-classes-really-work-and-how-to-build-your-own-fd6085eb326a" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@robertgrosse/how-es6-classes-really-work-and-how-to-build-your-own-fd6085eb326a"><strong>How ES6 classes really work and how to build your own</strong><br />
<em>The 6th edition of ECMAScript (or ES6 for short) revolutionized the language, adding many new features, including…</em>medium.com</a><a href="https://medium.com/@robertgrosse/how-es6-classes-really-work-and-how-to-build-your-own-fd6085eb326a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://jordankasper.com/understanding-super-in-javascript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://jordankasper.com/understanding-super-in-javascript"><strong>Understanding `super` in JavaScript</strong><br />
<em>With the adoption of ES6/2015 by nearly all browsers (with one notable exception), developers have access to the new…</em>jordankasper.com</a><a href="https://jordankasper.com/understanding-super-in-javascript" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://dev.to/lawrence_eagles/an-easy-guide-to-understanding-classes-in-javascript-3bcm" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/lawrence_eagles/an-easy-guide-to-understanding-classes-in-javascript-3bcm"><strong>An Easy Guide To Understanding Classes In JavaScript</strong><br />
<em>1. An Introduction To Classes In JavaScript In the previous article in this series we looked at function constructors…</em>dev.to</a><a href="https://dev.to/lawrence_eagles/an-easy-guide-to-understanding-classes-in-javascript-3bcm" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call"><strong>Function.prototype.call() - JavaScript | MDN</strong><br />
<em>The value to use as this when calling . Note: In certain cases, may not be the actual value seen by the method. If the…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind"><strong>Function.prototype.bind() - JavaScript | MDN</strong><br />
<em>The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply"><strong>Function.prototype.apply() - JavaScript | MDN</strong><br />
<em>The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://levelup.gitconnected.com/grokking-call-apply-and-bind-methods-in-javascript-392351a4be8b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://levelup.gitconnected.com/grokking-call-apply-and-bind-methods-in-javascript-392351a4be8b"><strong>Grokking call(), apply() and bind() methods in JavaScript</strong><br />
<em>These are very important for every aspiring JavaScript Developer, these are used in almost every JavaScript Library or…</em>levelup.gitconnected.com</a><a href="https://levelup.gitconnected.com/grokking-call-apply-and-bind-methods-in-javascript-392351a4be8b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.codementor.io/niladrisekhardutta/how-to-call-apply-and-bind-in-javascript-8i1jca6jp" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.codementor.io/niladrisekhardutta/how-to-call-apply-and-bind-in-javascript-8i1jca6jp"><strong>How-to: call() , apply() and bind() in JavaScript | Codementor</strong><br />
<em>In this post, we will be discussing the difference between call(), apply(), and bind() methods of JavaScript functions…</em>www.codementor.io</a><a href="https://www.codementor.io/niladrisekhardutta/how-to-call-apply-and-bind-in-javascript-8i1jca6jp" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/"><strong>JavaScript's Apply, Call, and Bind Methods are Essential for JavaScript Professionals</strong><br />
<em>Prerequisite: - Understand JavaScript's "this" With Ease, and Master It. - JavaScript Objects - Understand JavaScript…</em>javascriptissexy.com</a><a href="http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://tylermcginnis.com/this-keyword-call-apply-bind-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://tylermcginnis.com/this-keyword-call-apply-bind-javascript/"><strong>Understanding the "this" keyword, call, apply, and bind in JavaScript - ui.dev</strong><br />
<em>Before diving into the specifics of the this keyword in JavaScript, it's important to take a step back and first look…</em>tylermcginnis.com</a><a href="https://tylermcginnis.com/this-keyword-call-apply-bind-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb"><strong>Javascript: call(), apply() and bind()</strong><br />
<em>“this” refresher</em>medium.com</a><a href="https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@ivansifrim/the-differences-between-call-apply-bind-276724bb825b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@ivansifrim/the-differences-between-call-apply-bind-276724bb825b"><strong>The difference between call / apply / bind</strong><br />
<em>JavaScript is a dynamic language, and is flexible enough to let you do things like multiple inheritance. That’s when an…</em>medium.com</a><a href="https://medium.com/@ivansifrim/the-differences-between-call-apply-bind-276724bb825b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/ritik_dev_js/what-the-hack-is-call-apply-bind-in-javascript-11ce" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/ritik_dev_js/what-the-hack-is-call-apply-bind-in-javascript-11ce"><strong>What the hack is call, apply, bind in JavaScript</strong><br />
<em>Before start looking into call, apply, bind you should understand - how does "this" keyword works in JavaScript. In…</em>dev.to</a><a href="https://dev.to/ritik_dev_js/what-the-hack-is-call-apply-bind-in-javascript-11ce" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://thenewstack.io/mastering-javascript-callbacks-bind-apply-call/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://thenewstack.io/mastering-javascript-callbacks-bind-apply-call/"><strong>Mastering 'this' in JavaScript: Callbacks and bind(), apply(), call() - The New Stack</strong><br />
<em>In Part One of our tutorial on mastering the 'this' keyword in JavaScript, we looked at why the concept of 'this' can…</em>thenewstack.io</a><a href="https://thenewstack.io/mastering-javascript-callbacks-bind-apply-call/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/kbk0125/javascripts-apply-call-and-bind-explained-by-hosting-a-cookout-32jo" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/kbk0125/javascripts-apply-call-and-bind-explained-by-hosting-a-cookout-32jo"><strong>JavaScript's apply, call, and bind explained by hosting a cookout</strong><br />
<em>If you have ever been in charge of operating the grill at a family event or party, then you can understand apply, call…</em>dev.to</a><a href="https://dev.to/kbk0125/javascripts-apply-call-and-bind-explained-by-hosting-a-cookout-32jo" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.eigenx.com/blog/https/mediumcom/eigen-x/how-and-when-to-use-bind-call-and-apply-in-javascript-77b6f42898fb" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.eigenx.com/blog/https/mediumcom/eigen-x/how-and-when-to-use-bind-call-and-apply-in-javascript-77b6f42898fb"><strong>How AND When to use bind, call, and apply in Javascript - Eigen X</strong><br />
<em>In order for you to fully understand bind, call, and apply you have to understand the Javascript concept of this …</em>www.eigenx.com</a><a href="https://www.eigenx.com/blog/https/mediumcom/eigen-x/how-and-when-to-use-bind-call-and-apply-in-javascript-77b6f42898fb" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.hacksparrow.com/javascript-bind-vs-apply-and-call.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.hacksparrow.com/javascript-bind-vs-apply-and-call.html"><strong>JavaScript: bind() vs apply() and call()</strong><br />
<em>var fruit = { name: 'Apple' }; and this function: function showDetails(size, price) { console.log(this.name + ' ' +…</em>www.hacksparrow.com</a><a href="https://www.hacksparrow.com/javascript-bind-vs-apply-and-call.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/ycmjason/let-me-explain-to-you-what-is-this-javascript-44ja" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/ycmjason/let-me-explain-to-you-what-is-this-javascript-44ja"><strong>Let me explain to you what is `this`. (Javascript)</strong><br />
<em>Original post: https://www.ycmjason.com/blog/2018/06/15.html this article assumes 'use strict' in all context this…</em>dev.to</a><a href="https://dev.to/ycmjason/let-me-explain-to-you-what-is-this-javascript-44ja" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://betterprogramming.pub/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://betterprogramming.pub/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8"><strong>Understanding the “this” Keyword in JavaScript</strong><br />
<em>How the value of “this” is assigned in different scenarios</em>betterprogramming.pub</a><a href="https://betterprogramming.pub/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/how-to-understand-the-keyword-this-and-context-in-javascript-cd624c6b74b8" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/how-to-understand-the-keyword-this-and-context-in-javascript-cd624c6b74b8"><strong>How to understand the keyword this and context in JavaScript</strong><br />
<em>As mentioned in one of my earlier articles, mastering JavaScript fully can be a lengthy journey. You may have come…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/how-to-understand-the-keyword-this-and-context-in-javascript-cd624c6b74b8" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/_hridaysharma/what-the-heck-is-this-in-javascript-37n1" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/_hridaysharma/what-the-heck-is-this-in-javascript-37n1"><strong>What is "this" in Javascript ?</strong><br />
<em>While learning JavaScript there are many roadblocks like closures, asynchronous programming, this keywords, etc. These…</em>dev.to</a><a href="https://dev.to/_hridaysharma/what-the-heck-is-this-in-javascript-37n1" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/steelvoltage/this-and-bind-in-javascript-2pam" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/steelvoltage/this-and-bind-in-javascript-2pam"><strong>This and Bind In Javascript</strong><br />
<em>If you're learning Javascript, you'll no doubt run into the this keyword early on. At first, it appears quite simple…</em>dev.to</a><a href="https://dev.to/steelvoltage/this-and-bind-in-javascript-2pam" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/canderson93/3-techniques-for-maintaining-your-sanity-using-this-in-javascript-3idf" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/canderson93/3-techniques-for-maintaining-your-sanity-using-this-in-javascript-3idf"><strong>3 Techniques for Maintaining Your Sanity Using "This" in JavaScript</strong><br />
<em>Of JavaScript's many confusing aspects, the keyword this can be one of the most complicated -- Here's a joke about the…</em>dev.to</a><a href="https://dev.to/canderson93/3-techniques-for-maintaining-your-sanity-using-this-in-javascript-3idf" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/aakashsr/mastering-the-javascript-this-keyword-4pfa" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/aakashsr/mastering-the-javascript-this-keyword-4pfa"><strong>Mastering the JavaScript "this" Keyword</strong><br />
<em>The this keyword is a very important concept in JavaScript, and also a particularly confusing one to both new…</em>dev.to</a><a href="https://dev.to/aakashsr/mastering-the-javascript-this-keyword-4pfa" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/sargalias/this-binding-in-javascript-4-new-binding-2p1n" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/sargalias/this-binding-in-javascript-4-new-binding-2p1n"><strong>This binding in JavaScript - 4. New binding</strong><br />
<em>This post ( This binding in JavaScript - 4. New binding) was originally published on Sargalias. In this series we talk…</em>dev.to</a><a href="https://dev.to/sargalias/this-binding-in-javascript-4-new-binding-2p1n" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/thatgalnatalie/a-quick-intro-to-this-in-javascript-2mhp" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/thatgalnatalie/a-quick-intro-to-this-in-javascript-2mhp"><strong>A quick intro to 'this' in JavaScript</strong><br />
<em>Probably one of the most confusing aspects of JavaScript is finding out what 'this' means. In this post, I will try to…</em>dev.to</a><a href="https://dev.to/thatgalnatalie/a-quick-intro-to-this-in-javascript-2mhp" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/cat__logic/explaining-javascript-this-to-my-cat-1kig" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/cat__logic/explaining-javascript-this-to-my-cat-1kig"><strong>Explaining JavaScript 'this' to my cat</strong><br />
<em>My cat is not very good at JavaScript (also at many other things), so today I will try to explain this keyword to him…</em>dev.to</a><a href="https://dev.to/cat__logic/explaining-javascript-this-to-my-cat-1kig" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/developerkaren/a-conversation-with-the-this-keyword-in-javascript-3j6g" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/developerkaren/a-conversation-with-the-this-keyword-in-javascript-3j6g"><strong>A conversation with the 'this' keyword in Javascript</strong><br />
<em>'This' is one of the most confusing concepts in Javascript. Here's the sad news. It is just as important to understand…</em>dev.to</a><a href="https://dev.to/developerkaren/a-conversation-with-the-this-keyword-in-javascript-3j6g" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://jscurious.com/what-are-call-apply-and-bind-in-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://jscurious.com/what-are-call-apply-and-bind-in-javascript/"><strong>What are call(), apply() and bind() in JavaScript - JS Curious</strong><br />
<em>In JavaScript this refers to the owner object. If you want to attach some extra properties to a function, then you can…</em>jscurious.com</a><a href="https://jscurious.com/what-are-call-apply-and-bind-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/nerd-for-tech/understanding-this-binding-in-javascript-86687397c76d" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/nerd-for-tech/understanding-this-binding-in-javascript-86687397c76d"><strong>Understanding “this” binding in Javascript</strong><br />
<em>In order to understand “this” keyword clearly, we need to go through of how the execution context works at first. Every…</em>medium.com</a><a href="https://medium.com/nerd-for-tech/understanding-this-binding-in-javascript-86687397c76d" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://codeburst.io/javascript-for-beginners-the-new-operator-cee35beb669e" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/javascript-for-beginners-the-new-operator-cee35beb669e"><strong>JavaScript For Beginners: the ‘new’ operator</strong><br />
<em>Preface</em>codeburst.io</a><a href="https://codeburst.io/javascript-for-beginners-the-new-operator-cee35beb669e" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/demystifying-javascripts-new-keyword-874df126184c" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/demystifying-javascripts-new-keyword-874df126184c"><strong>Let’s demystify JavaScript’s ‘new’ keyword</strong><br />
<em>Over the weekend, I completed Will Sentance’s JavaScript: The Hard Parts. It might not sound like the most glorious way…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/demystifying-javascripts-new-keyword-874df126184c" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.info/constructor-new" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.info/constructor-new"><strong>Constructor, operator "new"</strong><br />
<em>The regular {...} syntax allows to create one object. But often we need to create many similar objects, like multiple…</em>javascript.info</a><a href="https://javascript.info/constructor-new" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://css-tricks.com/understanding-javascript-constructors/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://css-tricks.com/understanding-javascript-constructors/"><strong>Understanding JavaScript Constructors</strong><br />
<em>The following is a guest post by Faraz Kelhini. Some of this stuff is out of my comfort zone, so I asked Kyle Simpson…</em>css-tricks.com</a><a href="https://css-tricks.com/understanding-javascript-constructors/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://2ality.com/2017/08/type-right.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://2ality.com/2017/08/type-right.html"><strong>Beyond `typeof` and `instanceof`: simplifying dynamic type checks</strong><br />
<em>This blog post describes a technique for making instanceof applicable to more values (on the right-hand side)…</em>2ality.com</a><a href="http://2ality.com/2017/08/type-right.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://appendto.com/2016/10/what-is-the-instanceof-operator-in-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://appendto.com/2016/10/what-is-the-instanceof-operator-in-javascript/"><strong>What Is the Instanceof Operator in JavaScript?</strong><br />
<em>Learn more about What Is the Instanceof Operator in JavaScript? from DevelopIntelligence. Your trusted developer…</em>appendto.com</a><a href="https://appendto.com/2016/10/what-is-the-instanceof-operator-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascriptrefined.io/function-and-object-instances-of-each-other-1e1095d5faac" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascriptrefined.io/function-and-object-instances-of-each-other-1e1095d5faac"><strong>Function and Object, instances of each other</strong><br />
<em>Explaining why Function is an instance of Object, and why Object is an instance of Function</em>javascriptrefined.io</a><a href="https://javascriptrefined.io/function-and-object-instances-of-each-other-1e1095d5faac" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"><strong>Inheritance and the prototype chain - JavaScript | MDN</strong><br />
<em>JavaScript is a bit confusing for developers experienced in class-based languages (like Java or C++), as it is dynamic…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@parsyval/javascript-prototype-vs-class-a7015d5473b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@parsyval/javascript-prototype-vs-class-a7015d5473b"><strong>Javascript : Prototype vs Class</strong><br />
<em>Let’s see how classes in JS are not what you think they are.</em>medium.com</a><a href="https://medium.com/@parsyval/javascript-prototype-vs-class-a7015d5473b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/javascript-prototype-cb29d82b8809" class="markup--anchor markup--p-anchor">https://codeburst.io/javascript-prototype-cb29d82b8809</a>

<a href="https://www.codementor.io/sandeepranjan2007/prototype-in-javascipt-knbve0lqo" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.codementor.io/sandeepranjan2007/prototype-in-javascipt-knbve0lqo"><strong>Prototype in Javascript | Codementor</strong><br />
<em>By default every function has a property name as prototype which is EMPTY ( by default). We can add properties and…</em>www.codementor.io</a><a href="https://www.codementor.io/sandeepranjan2007/prototype-in-javascipt-knbve0lqo" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://betterprogramming.pub/prototypes-in-javascript-5bba2990e04b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://betterprogramming.pub/prototypes-in-javascript-5bba2990e04b"><strong>Prototypes in JavaScript</strong><br />
<em>In this post, we will discuss what are prototypes in JavaScript, how they help JavaScript in achieving the concepts of…</em>betterprogramming.pub</a><a href="https://betterprogramming.pub/prototypes-in-javascript-5bba2990e04b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/prototype-in-js-busted-5547ec68872" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/prototype-in-js-busted-5547ec68872"><strong>Prototype in JavaScript: it’s quirky, but here’s how it works</strong><br />
<em>The following four lines are enough to confuse most JavaScript developers:</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/prototype-in-js-busted-5547ec68872" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/understanding-javascript-prototype-and-inheritance-d55a9a23bde2" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/understanding-javascript-prototype-and-inheritance-d55a9a23bde2"><strong>Understanding JavaScript: Prototype and Inheritance</strong><br />
<em>Due to the amazing quantity of libraries, tools and all kinds of things that make your development easier, a lot of…</em>hackernoon.com</a><a href="https://hackernoon.com/understanding-javascript-prototype-and-inheritance-d55a9a23bde2" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/_hridaysharma/understanding-classes-es5-and-prototypal-inheritance-in-javascript-n8d" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/_hridaysharma/understanding-classes-es5-and-prototypal-inheritance-in-javascript-n8d"><strong>Understanding Classes (ES5) and Prototypal Inheritance in JavaScript</strong><br />
<em>In a nutshell the above snippet creates a Person class that can have multiple instances. By convention functional…</em>dev.to</a><a href="https://dev.to/_hridaysharma/understanding-classes-es5-and-prototypal-inheritance-in-javascript-n8d" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/varundey/prototype-proto-and-prototypal-inheritance-in-javascript-2inl" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/varundey/prototype-proto-and-prototypal-inheritance-in-javascript-2inl"><strong>prototype, __proto__ and Prototypal inheritance in JavaScript</strong><br />
<em>This post was originally published on my website If you have spent some time with JavaScript, chances are that you have…</em>dev.to</a><a href="https://dev.to/varundey/prototype-proto-and-prototypal-inheritance-in-javascript-2inl" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.info/prototype-inheritance" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.info/prototype-inheritance"><strong>Prototypal inheritance</strong><br />
<em>In programming, we often want to take something and extend it. For instance, we have a user object with its properties…</em>javascript.info</a><a href="https://javascript.info/prototype-inheritance" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript"><strong>How To Work with Prototypes and Inheritance in JavaScript | DigitalOcean</strong><br />
<em>JavaScript is a prototype-based language, meaning object properties and methods can be shared through generalized…</em>www.digitalocean.com</a><a href="https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/master-javascript-prototypes-inheritance-d0a9a5a75c4e" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/master-javascript-prototypes-inheritance-d0a9a5a75c4e"><strong>Master JavaScript Prototypes &amp; <em>Inheritance</em></strong><br />
Inheritancecodeburst.io</a><a href="https://codeburst.io/master-javascript-prototypes-inheritance-d0a9a5a75c4e" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/understanding-prototypal-inheritance-in-javascript-with-css-93b2fcda75e4" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/understanding-prototypal-inheritance-in-javascript-with-css-93b2fcda75e4"><strong>JavaScript’s Prototypal Inheritance Explained Using CSS</strong><br />
<em>Prototypal inheritance is arguably the least understood aspect of JavaScript. Well the good news is that if you…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/understanding-prototypal-inheritance-in-javascript-with-css-93b2fcda75e4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://scotch.io/tutorials/demystifying-es6-classes-and-prototypal-inheritance" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://scotch.io/tutorials/demystifying-es6-classes-and-prototypal-inheritance"><strong>Demystifying ES6 Classes And Prototypal Inheritance</strong><br />
<em>In the early history of the JavaScript language, a cloud of animosity formed over the lack of a proper syntax for…</em>scotch.io</a><a href="https://scotch.io/tutorials/demystifying-es6-classes-and-prototypal-inheritance" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/danny/intro-to-prototypal-inheritance---js-9di" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/danny/intro-to-prototypal-inheritance---js-9di"><strong>Intro To Prototypal Inheritance - JS</strong><br />
<em>In this article I will try to give an introduction to protypal inheritance. As an "optional" pre-requisite, you can…</em>dev.to</a><a href="https://dev.to/danny/intro-to-prototypal-inheritance---js-9di" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/varche/let-s-build-prototypal-inheritance-in-js-56mm" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/varche/let-s-build-prototypal-inheritance-in-js-56mm"><strong>Let's Build Prototypal Inheritance in JS</strong><br />
<em>The idea for this post is pretty simple. I want to some extent build and with that, illustrate how prototypes work in…</em>dev.to</a><a href="https://dev.to/varche/let-s-build-prototypal-inheritance-in-js-56mm" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/attacomsian/objects-prototypes-and-classes-in-javascript-3i9b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/attacomsian/objects-prototypes-and-classes-in-javascript-3i9b"><strong>Objects, Prototypes and Classes in JavaScript</strong><br />
<em>JavaScript is based on a simple object-oriented programming model with objects being a fundamental part of the…</em>dev.to</a><a href="https://dev.to/attacomsian/objects-prototypes-and-classes-in-javascript-3i9b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/ladybenko/the-magical-world-of-javascript-prototypes-1mhg" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/ladybenko/the-magical-world-of-javascript-prototypes-1mhg"><strong>The magical world of JavaScript prototypes</strong><br />
<em>How many times have we heard "JavaScript is not an Object-Oriented language, it's Prototype-oriented"? It turns out…</em>dev.to</a><a href="https://dev.to/ladybenko/the-magical-world-of-javascript-prototypes-1mhg" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/lawrence_eagles/understanding-prototypal-inheritance-in-javascript-4f31#chp-4" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/lawrence_eagles/understanding-prototypal-inheritance-in-javascript-4f31#chp-4"><strong>Understanding Prototypal Inheritance In JavaScript</strong><br />
<em>What Is Object-oriented Programming (OOP) Classical vs Prototypal Inheritance The Prototype Object And The Prototype…</em>dev.to</a><a href="https://dev.to/lawrence_eagles/understanding-prototypal-inheritance-in-javascript-4f31#chp-4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create"><strong>Object.create() - JavaScript | MDN</strong><br />
<em>The Object.create() method creates a new object, using an existing object as the prototype of the newly created object…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"><strong>Object.assign() - JavaScript | MDN</strong><br />
<em>The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@happymishra66/object-create-in-javascript-fa8674df6ed2" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@happymishra66/object-create-in-javascript-fa8674df6ed2"><strong>Object.create in JavaScript</strong><br />
<em>The Object.create method is one of the methods to create a new object in JavaScript.</em>medium.com</a><a href="https://medium.com/@happymishra66/object-create-in-javascript-fa8674df6ed2" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.htmlgoodies.com/beyond/javascript/object.create-the-new-way-to-create-objects-in-javascript.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.htmlgoodies.com/beyond/javascript/object.create-the-new-way-to-create-objects-in-javascript.html"><strong>Javascript Objects | A New Way to Create Objects | HTML Goodies</strong><br />
<em>There are a lot of ways to create Objects in JavaScript, perhaps even more to integrate inheritance into them. Just…</em>www.htmlgoodies.com</a><a href="https://www.htmlgoodies.com/beyond/javascript/object.create-the-new-way-to-create-objects-in-javascript.html" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="http://adripofjavascript.com/blog/drips/basic-inheritance-with-object-create.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://adripofjavascript.com/blog/drips/basic-inheritance-with-object-create.html"><strong>Basic Inheritance with Object.create</strong><br />
<em>A few issues back we looked at how to implement basic inheritance with constructors. In this issue, we'll look at how…</em>adripofjavascript.com</a><a href="http://adripofjavascript.com/blog/drips/basic-inheritance-with-object-create.html" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://www.geeksforgeeks.org/object-create-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.geeksforgeeks.org/object-create-javascript/"><strong>Object.create( ) In JavaScript - GeeksforGeeks</strong><br />
<em>Object and Object Constructors in JavaScript? In the living world of object-oriented programming we already know the…</em>www.geeksforgeeks.org</a><a href="https://www.geeksforgeeks.org/object-create-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@jonathanvox01/understanding-the-difference-between-object-create-and-the-new-operator-b2a2f4749358" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@jonathanvox01/understanding-the-difference-between-object-create-and-the-new-operator-b2a2f4749358"><strong>Understanding the difference between Object.create() and the new operator.</strong><br />
<em>Why is it important to know the difference?</em>medium.com</a><a href="https://medium.com/@jonathanvox01/understanding-the-difference-between-object-create-and-the-new-operator-b2a2f4749358" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://www.sitepoint.com/javascript-object-creation-patterns-best-practises/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.sitepoint.com/javascript-object-creation-patterns-best-practises/"><strong>JavaScript Object Creation: Patterns and Best Practices - SitePoint</strong><br />
<em>Jeff Mott guides you through a step-by-step approach to JavaScript object creation - from object literals to factory…</em>www.sitepoint.com</a><a href="https://www.sitepoint.com/javascript-object-creation-patterns-best-practises/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://alligator.io/js/dealing-with-objects/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://alligator.io/js/dealing-with-objects/"><strong>Dealing With Objects in JavaScript With Object.assign, Object.keys and hasOwnProperty |…</strong><br />
<em>This post is a sort of grab bag to help you explore a few very useful methods to help you manage your objects in…</em>alligator.io</a><a href="https://alligator.io/js/dealing-with-objects/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://scotch.io/bar-talk/copying-objects-in-javascript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://scotch.io/bar-talk/copying-objects-in-javascript"><strong>Copying Objects in JavaScript | DigitalOcean</strong><br />
<em>Objects are the fundamental blocks of JavaScript. An object is a collection of properties, and a property is an…</em>scotch.io</a><a href="https://scotch.io/bar-talk/copying-objects-in-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/javascript-object-assign-bc9696dcbb6e" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/javascript-object-assign-bc9696dcbb6e"><strong>JavaScript: Object.assign()</strong><br />
<em>Veja nesse artigo como utilizar o Object.assign() do ECMAScript 6</em>codeburst.io</a><a href="https://codeburst.io/javascript-object-assign-bc9696dcbb6e" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://flaviocopes.com/how-to-clone-javascript-object/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://flaviocopes.com/how-to-clone-javascript-object/"><strong>How to deep clone a JavaScript object</strong><br />
<em>Copying objects in JavaScript can be tricky. Some ways perform a shallow copy, which is the default behavior in most of…</em>flaviocopes.com</a><a href="https://flaviocopes.com/how-to-clone-javascript-object/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/vzing/object-create-when-and-why-to-use-20m9" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/vzing/object-create-when-and-why-to-use-20m9"><strong>Object.create(): When and Why to Use</strong><br />
<em>Object.create() is a method available on all JavaScript objects. It takes two arguments: the object you want to copy…</em>dev.to</a><a href="https://dev.to/vzing/object-create-when-and-why-to-use-20m9" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@bojangbusiness/javascript-functional-programming-map-filter-and-reduce-846ff9ba492d" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@bojangbusiness/javascript-functional-programming-map-filter-and-reduce-846ff9ba492d"><strong>JavaScript Functional Programming — map, filter and reduce</strong><br />
<em>Even if you don’t know what functional programming is you’ve probably been using map, filter and reduce just because…</em>medium.com</a><a href="https://medium.com/@bojangbusiness/javascript-functional-programming-map-filter-and-reduce-846ff9ba492d" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@joomiguelcunha/learn-map-filter-and-reduce-in-javascript-ea59009593c4" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@joomiguelcunha/learn-map-filter-and-reduce-in-javascript-ea59009593c4"><strong>Learn map, filter and reduce in Javascript</strong><br />
<em>The perfect toolset for your venture in Functional Programming</em>medium.com</a><a href="https://medium.com/@joomiguelcunha/learn-map-filter-and-reduce-in-javascript-ea59009593c4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://danmartensen.svbtle.com/javascripts-map-reduce-and-filter" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://danmartensen.svbtle.com/javascripts-map-reduce-and-filter"><strong>JavaScript's Map, Reduce, and Filter * Dan Martensen</strong><br />
<em>As engineers we build and manipulate arrays holding numbers, strings, booleans and objects almost everyday. We use them…</em>danmartensen.svbtle.com</a><a href="https://danmartensen.svbtle.com/javascripts-map-reduce-and-filter" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://code.tutsplus.com/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://code.tutsplus.com/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209"><strong>How to Use Map, Filter, and Reduce in JavaScript</strong><br />
<em>Functional programming has been making quite a splash in the development world these days. And for good reason…</em>code.tutsplus.com</a><a href="https://code.tutsplus.com/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/javascript-learn-to-chain-map-filter-and-reduce-acd2d0562cd4" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/javascript-learn-to-chain-map-filter-and-reduce-acd2d0562cd4"><strong>JavaScript — Learn to Chain Map, Filter, and Reduce</strong><br />
<em>Learn how to chain map, filter, and reduce in JavaScript</em>codeburst.io</a><a href="https://codeburst.io/javascript-learn-to-chain-map-filter-and-reduce-acd2d0562cd4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/understanding-map-filter-and-reduce-in-javascript-5df1c7eee464" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/understanding-map-filter-and-reduce-in-javascript-5df1c7eee464"><strong>Understanding map, filter and reduce in Javascript</strong><br />
<em>When working on Javascript projects you inevitably come across situations where you have to do some data manipulation…</em>hackernoon.com</a><a href="https://hackernoon.com/understanding-map-filter-and-reduce-in-javascript-5df1c7eee464" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/functional-programming-in-js-map-filter-reduce-pt-5-308a205fdd5f" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/functional-programming-in-js-map-filter-reduce-pt-5-308a205fdd5f"><strong>Functional Programming in JS: map, filter, reduce (Pt. 5)</strong><br />
<em>Note: This is part of the “Javascript and Functional Programming” series on learning functional programming techniques…</em>hackernoon.com</a><a href="https://hackernoon.com/functional-programming-in-js-map-filter-reduce-pt-5-308a205fdd5f" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://wsvincent.com/functional-javascript-map-filter-reduce/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://wsvincent.com/functional-javascript-map-filter-reduce/"><strong>JavaScript: Map, Filter, Reduce</strong><br />
<em>JavaScript's built-in map, filter, and reduce array methods are invaluable to a modern JavaScript developer. First…</em>wsvincent.com</a><a href="https://wsvincent.com/functional-javascript-map-filter-reduce/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/"><strong>JavaScript Arrow Functions: Fat and Concise Syntax in ES6</strong><br />
<em>In this article, you'll learn all about JavaScript's arrow function syntax - including some of the gotchas you need to…</em>www.sitepoint.com</a><a href="https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/javascript-arrow-functions-for-beginners-926947fc0cdc" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/javascript-arrow-functions-for-beginners-926947fc0cdc"><strong>JavaScript: Arrow Functions for Beginners</strong><br />
<em>Last week I published this post on the keyword this for beginners. One of the topics that wasn’t covered in that…</em>codeburst.io</a><a href="https://codeburst.io/javascript-arrow-functions-for-beginners-926947fc0cdc" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26"><strong>When (and why) you should use ES6 arrow functions — and when you shouldn’t</strong><br />
<em>Arrow functions (also called “fat arrow functions”) are undoubtedly one of the more popular features of ES6. They…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/javascript-learn-understand-arrow-functions-fe2083533946" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/javascript-learn-understand-arrow-functions-fe2083533946"><strong>JavaScript — Learn &amp; Understand Arrow Functions</strong><br />
<em>A beginners guide to Arrow Functions in JavaScript</em>codeburst.io</a><a href="https://codeburst.io/javascript-learn-understand-arrow-functions-fe2083533946" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/podiihq/javascript-arrow-functions-27d4c3334b83" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/podiihq/javascript-arrow-functions-27d4c3334b83"><strong>(JavaScript )=&gt; Arrow functions</strong><br />
<em>This post is meant to summarise some of the things someone new to JavaScript and arrow functions needs to know. I do…</em>medium.com</a><a href="https://medium.com/podiihq/javascript-arrow-functions-27d4c3334b83" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://andepaulj.medium.com/javascript-reduce-79aab078da23" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://andepaulj.medium.com/javascript-reduce-79aab078da23"><strong>Javascript.reduce()</strong><br />
<em>The Mutli-Tool of JS</em>andepaulj.medium.com</a><a href="https://andepaulj.medium.com/javascript-reduce-79aab078da23" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://gofore.com/en/why-you-should-replace-foreach/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://gofore.com/en/why-you-should-replace-foreach/"><strong>Why you should replace forEach with map and filter in JavaScript - Gofore</strong><br />
<em>TL;DR Prefer map and filter over forEach when you need to copy an array or part of it to a new one. One of the best…</em>gofore.com</a><a href="https://gofore.com/en/why-you-should-replace-foreach/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d"><strong>Simplify your JavaScript – Use .map(), .reduce(), and .filter()</strong><br />
<em>If you haven’t heard of .map(), .reduce(), and .filter() in JavaScript, you might want to learn to use it!</em>medium.com</a><a href="https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.codeanalogies.com/2018/07/24/javascripts-reduce-method-explained-by-going-on-a-diet/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.codeanalogies.com/2018/07/24/javascripts-reduce-method-explained-by-going-on-a-diet/"><strong>JavaScript's Reduce Method Explained By Going On a Diet</strong><br />
<em>The reduce method in JavaScript gives you a simple way to take an array of values and combine them into one value, or…</em>blog.codeanalogies.com</a><a href="https://blog.codeanalogies.com/2018/07/24/javascripts-reduce-method-explained-by-going-on-a-diet/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@amiratak88/difference-between-map-filter-and-reduce-in-javascript-822ff79d5160" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@amiratak88/difference-between-map-filter-and-reduce-in-javascript-822ff79d5160"><strong>Difference between map, filter and reduce in JavaScript</strong><br />
<em>I’ve seen a lot of JS beginners struggle when using map, filter or reduce and don’t know the different use cases of…</em>medium.com</a><a href="https://medium.com/@amiratak88/difference-between-map-filter-and-reduce-in-javascript-822ff79d5160" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://hackernoon.com/map-filter-reduce-ebbed4be4201" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/map-filter-reduce-ebbed4be4201"><strong>Map⇄Filter⇄Reduce↻ | Hacker Noon</strong><br />
<em>Share it on LinkedIn! Due to that reason we were introduced with these three higher order functions, namely 🗺️Map…</em>hackernoon.com</a><a href="https://hackernoon.com/map-filter-reduce-ebbed4be4201" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/finding-your-way-with-map-aecb8ca038f6" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/finding-your-way-with-map-aecb8ca038f6"><strong>Finding Your Way With .Map()</strong><br />
<em>At the end of the article is a CodePen that demonstrates the concepts presented here.</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/finding-your-way-with-map-aecb8ca038f6" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/how-to-write-your-own-map-filter-and-reduce-functions-in-javascript-ab1e35679d26" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/how-to-write-your-own-map-filter-and-reduce-functions-in-javascript-ab1e35679d26"><strong>How to write your own map, filter and reduce functions in JavaScript</strong><br />
<em>A sneak peek into functional programming and higher order functions in Javascript.</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/how-to-write-your-own-map-filter-and-reduce-functions-in-javascript-ab1e35679d26" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.freecodecamp.org/news/manipulating-arrays-in-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.freecodecamp.org/news/manipulating-arrays-in-javascript/"><strong>How to Manipulate Arrays in JavaScript</strong><br />
<em>An important part of any programming language. Most times we need to do several operations on arrays, hence this…</em>www.freecodecamp.org</a><a href="https://www.freecodecamp.org/news/manipulating-arrays-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/pickleat/map-filter-and-reduce-2efb" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/pickleat/map-filter-and-reduce-2efb"><strong>.map(), .filter(), and .reduce()</strong><br />
<em>Originally posted on my blog For the last several weeks I've been applying for jobs. Sadly, the startup I was working…</em>dev.to</a><a href="https://dev.to/pickleat/map-filter-and-reduce-2efb" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://jstutorial.medium.com/map-filter-and-reduce-animated-7fe391a35a47" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://jstutorial.medium.com/map-filter-and-reduce-animated-7fe391a35a47"><strong>Map, Filter and Reduce – Animated</strong><br />
<em>Map, filter and reduce have been around for a long time. They are often seen as part of Functional Programming style.</em>jstutorial.medium.com</a><a href="https://jstutorial.medium.com/map-filter-and-reduce-animated-7fe391a35a47" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/uptheirons78/map-filter-reduce-and-others-arrays-iterators-you-must-know-to-become-an-algorithms-wizard-4209" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/uptheirons78/map-filter-reduce-and-others-arrays-iterators-you-must-know-to-become-an-algorithms-wizard-4209"><strong>Map, Filter, Reduce and others Arrays Iterators You Must Know to Become an Algorithms Wizard</strong><br />
<em>In this article we are going to take a close look at some arrays iterators like , , or others methods that use…</em>dev.to</a><a href="https://dev.to/uptheirons78/map-filter-reduce-and-others-arrays-iterators-you-must-know-to-become-an-algorithms-wizard-4209" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://betterprogramming.pub/how-to-javascripts-map-vs-filter-vs-reduce-80d87a5a0a24" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://betterprogramming.pub/how-to-javascripts-map-vs-filter-vs-reduce-80d87a5a0a24"><strong>How to Use JavaScript’s .map, .filter, and .reduce</strong><br />
<em>How to use these three useful JavaScript functions</em>betterprogramming.pub</a><a href="https://betterprogramming.pub/how-to-javascripts-map-vs-filter-vs-reduce-80d87a5a0a24" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://towardsdatascience.com/javascript-performance-test-for-vs-for-each-vs-map-reduce-filter-find-32c1113f19d7" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://towardsdatascience.com/javascript-performance-test-for-vs-for-each-vs-map-reduce-filter-find-32c1113f19d7"><strong>Javascript performance test - for vs for each vs (map, reduce, filter, find).</strong><br />
<em>We all know that for loop are faster than for each or javascript function since under the hood of javascript functions…</em>towardsdatascience.com</a><a href="https://towardsdatascience.com/javascript-performance-test-for-vs-for-each-vs-map-reduce-filter-find-32c1113f19d7" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.plainenglish.io/using-map-filter-and-reduce-properly-50e07f80c8b2" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.plainenglish.io/using-map-filter-and-reduce-properly-50e07f80c8b2"><strong>Using .map(), .filter() and .reduce() properly 👩🏽‍💻</strong><br />
<em>Map, reduce, and filter are all array methods in JavaScript. Each one will iterate over an array and perform a…</em>javascript.plainenglish.io</a><a href="https://javascript.plainenglish.io/using-map-filter-and-reduce-properly-50e07f80c8b2" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/javascript-and-functional-programming-pt-3-pure-functions-d572bb52e21c" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/javascript-and-functional-programming-pt-3-pure-functions-d572bb52e21c"><strong>Javascript and Functional Programming — Pt. 3: Pure Functions</strong><br />
<em>Purity</em>hackernoon.com</a><a href="https://hackernoon.com/javascript-and-functional-programming-pt-3-pure-functions-d572bb52e21c" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976"><strong>Master the JavaScript Interview: What is a Pure Function?</strong><br />
<em>Pure functions are essential for a variety of purposes, including functional programming, reliable concurrency, and…</em>medium.com</a><a href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@jamesjefferyuk/javascript-what-are-pure-functions-4d4d5392d49c" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@jamesjefferyuk/javascript-what-are-pure-functions-4d4d5392d49c"><strong>JavaScript: What Are Pure Functions And Why Use Them?</strong><br />
<em>The first time I heard the term “Pure Function” I was confused. What was wrong with a regular function? Why does it…</em>medium.com</a><a href="https://medium.com/@jamesjefferyuk/javascript-what-are-pure-functions-4d4d5392d49c" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="http://www.nicoespeon.com/en/2015/01/pure-functions-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://www.nicoespeon.com/en/2015/01/pure-functions-javascript/"><strong>Pure functions in JavaScript</strong><br />
<em>A pure function doesn't depend on and doesn't modify the states of variables out of its scope. Concretely, that means a…</em>www.nicoespeon.com</a><a href="http://www.nicoespeon.com/en/2015/01/pure-functions-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.sitepoint.com/functional-programming-pure-functions/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.sitepoint.com/functional-programming-pure-functions/"><strong>Functional Programming: Pure Functions - SitePoint</strong><br />
<em>This is the second part of a two part series on functional programming in Ruby. Before we explored immutable values…</em>www.sitepoint.com</a><a href="https://www.sitepoint.com/functional-programming-pure-functions/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://appdividend.com/2017/04/10/pure-functions-in-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://appdividend.com/2017/04/10/pure-functions-in-javascript/"><strong>Pure Functions In Javascript</strong><br />
<em>Pure functions in Javascript are kind of Functions where the return value is determined by its parameter passed at call…</em>appdividend.com</a><a href="https://appdividend.com/2017/04/10/pure-functions-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://alistapart.com/article/making-your-javascript-pure" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://alistapart.com/article/making-your-javascript-pure"><strong>Making your JavaScript Pure</strong><br />
<em>Once your website or application goes past a small number of lines, it will inevitably contain bugs of some sort. This…</em>alistapart.com</a><a href="https://alistapart.com/article/making-your-javascript-pure" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@fknussel/arrays-objects-and-mutations-6b23348b54aa" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@fknussel/arrays-objects-and-mutations-6b23348b54aa"><strong>Arrays, Objects and Mutations</strong><br />
<em>Here are some thoughts on how to avoid mutations when working with arrays and objects in JavaScript by treating them as…</em>medium.com</a><a href="https://medium.com/@fknussel/arrays-objects-and-mutations-6b23348b54aa" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/dailyjs/the-state-of-immutability-169d2cd11310" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/dailyjs/the-state-of-immutability-169d2cd11310"><strong>The State of Immutability</strong><br />
<em>Immutability is a hot subject in modern JavaScript. The reason why this topic is so popular now is of course the…</em>medium.com</a><a href="https://medium.com/dailyjs/the-state-of-immutability-169d2cd11310" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://jrsinclair.com/articles/2018/how-to-deal-with-dirty-side-effects-in-your-pure-functional-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://jrsinclair.com/articles/2018/how-to-deal-with-dirty-side-effects-in-your-pure-functional-javascript/"><strong>How to deal with dirty side effects in your pure functional JavaScript</strong><br />
<em>If you start learning about functional programming, it won't be long before you come across the idea of pure functions…</em>jrsinclair.com</a><a href="https://jrsinclair.com/articles/2018/how-to-deal-with-dirty-side-effects-in-your-pure-functional-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://davidwalsh.name/preventing-sideeffects-javascript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://davidwalsh.name/preventing-sideeffects-javascript"><strong>Preventing Side Effects in JavaScript</strong><br />
<em>JavaScript is very dynamic these days but I still see a lot of legacy code, whether it be for optimal backward…</em>davidwalsh.name</a><a href="https://davidwalsh.name/preventing-sideeffects-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://scotch.io/tutorials/wielding-pure-functions-in-javascript-and-function-composition" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://scotch.io/tutorials/wielding-pure-functions-in-javascript-and-function-composition"><strong>Wielding Pure Functions in JavaScript and Function Composition</strong><br />
<em>Today, I'd like to share some thoughts on two fundamental concepts in functional programming: Pure functions and…</em>scotch.io</a><a href="https://scotch.io/tutorials/wielding-pure-functions-in-javascript-and-function-composition" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://wsvincent.com/javascript-pure-functions/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://wsvincent.com/javascript-pure-functions/"><strong>JavaScript: Pure Functions</strong><br />
<em>Pure functions are fundamental to functional programming, concurrency, writing testable code, and having deterministic…</em>wsvincent.com</a><a href="https://wsvincent.com/javascript-pure-functions/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://hackernoon.com/functional-programming-paradigms-in-modern-javascript-pure-functions-797d9abbee1" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/functional-programming-paradigms-in-modern-javascript-pure-functions-797d9abbee1"><strong>Functional programming paradigms in modern JavaScript: Pure functions</strong><br />
<em>JavaScript is one of the most popular programming languages out there. It runs in the browser, on desktop, on mobile…</em>hackernoon.com</a><a href="https://hackernoon.com/functional-programming-paradigms-in-modern-javascript-pure-functions-797d9abbee1" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.bitsrc.io/understanding-javascript-mutation-and-pure-functions-7231cc2180d3" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.bitsrc.io/understanding-javascript-mutation-and-pure-functions-7231cc2180d3"><strong>Understanding Javascript Mutation and Pure Functions</strong><br />
<em>Boost your app performance by better understanding Mutation and Pure Functions in JS</em>blog.bitsrc.io</a><a href="https://blog.bitsrc.io/understanding-javascript-mutation-and-pure-functions-7231cc2180d3" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bluepnume.medium.com/functional-ish-javascript-205c05d0ed08" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bluepnume.medium.com/functional-ish-javascript-205c05d0ed08"><strong>Functional-ish JavaScript</strong><br />
<em>Functional programming is a great discipline to learn and apply when writing JavaScript. Writing stateless, idempotent…</em>bluepnume.medium.com</a><a href="https://bluepnume.medium.com/functional-ish-javascript-205c05d0ed08" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events"><strong>Introduction to events - Learn web development | MDN</strong><br />
<em>Events are actions or occurrences that happen in the system you are programming, which the system tells you about so…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.info/bubbling-and-capturing" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.info/bubbling-and-capturing"><strong>Bubbling and capturing</strong><br />
<em>Let's start with an example. This handler is assigned to , but also runs if you click any nested tag like or : Isn't it…</em>javascript.info</a><a href="https://javascript.info/bubbling-and-capturing" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.youtube.com/watch?v=Jh_Uzqzz_wM" class="markup--anchor markup--p-anchor">https://www.youtube.com/watch?v=Jh_Uzqzz_wM</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures" class="markup--anchor markup--p-anchor">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures</a>  
<a href="https://javascript.info/closure" class="markup--anchor markup--p-anchor">https://javascript.info/closure</a>

<a href="https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8"><strong>I never understood JavaScript closures</strong><br />
<em>Until someone explained it to me like this …</em>medium.com</a><a href="https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://javascriptissexy.com/understand-javascript-closures-with-ease/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://javascriptissexy.com/understand-javascript-closures-with-ease/"><strong>Understand JavaScript Closures With Ease</strong><br />
<em>Closures allow JavaScript programmers to write better code. Creative, expressive, and concise. We frequently use…</em>javascriptissexy.com</a><a href="http://javascriptissexy.com/understand-javascript-closures-with-ease/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/understanding-javascript-closures-da6aab330302" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/understanding-javascript-closures-da6aab330302"><strong>Understanding JavaScript Closures</strong><br />
<em>When you’re first learning JavaScript, terms like “closures” may make the language appear mystical and hard to…</em>codeburst.io</a><a href="https://codeburst.io/understanding-javascript-closures-da6aab330302" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/understand-closures-in-javascript-d07852fa51e7" class="markup--anchor markup--p-anchor">https://codeburst.io/understand-closures-in-javascript-d07852fa51e7</a>

<a href="https://medium.freecodecamp.org/javascript-closures-simplified-d0d23fa06ba4" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/javascript-closures-simplified-d0d23fa06ba4"><strong>A simple guide to help you understand closures in JavaScript</strong><br />
<em>Closures in JavaScript are one of those concepts that many struggle to get their heads around. In the following…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/javascript-closures-simplified-d0d23fa06ba4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://scotch.io/tutorials/understanding-javascript-closures-a-practical-approach" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://scotch.io/tutorials/understanding-javascript-closures-a-practical-approach"><strong>Understanding JavaScript Closures: A Practical Approach</strong><br />
<em>Learning a new language involves a series of steps, whereas its mastery is a product of patience, practice, mistakes…</em>scotch.io</a><a href="https://scotch.io/tutorials/understanding-javascript-closures-a-practical-approach" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/understanding-javascript-closures-4188edf5ea1b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/understanding-javascript-closures-4188edf5ea1b"><strong>Understanding JavaScript: Closures</strong><br />
<em>Why learn JavaScript in depth?</em>hackernoon.com</a><a href="https://hackernoon.com/understanding-javascript-closures-4188edf5ea1b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/how-to-use-javascript-closures-with-confidence-85cd1f841a6b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/how-to-use-javascript-closures-with-confidence-85cd1f841a6b"><strong>How to use JavaScript closures with confidence</strong><br />
<em>Using closures will be a piece of (chocolate) cake</em>hackernoon.com</a><a href="https://hackernoon.com/how-to-use-javascript-closures-with-confidence-85cd1f841a6b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://howchoo.com/g/mge2mji2mtq/javascript-closures-by-example" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://howchoo.com/g/mge2mji2mtq/javascript-closures-by-example"><strong>JavaScript Closures by Example</strong><br />
<em>At some point you may have run into a problem when executing functions from within a for loop. The first time it…</em>howchoo.com</a><a href="https://howchoo.com/g/mge2mji2mtq/javascript-closures-by-example" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/javascript-closures-and-scope-3784c75b9290" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/javascript-closures-and-scope-3784c75b9290"><strong>JavaScript — Closures and Scope</strong><br />
<em>Looking at JavaScript today, it can be scary as a beginner. People talk about watching out for all the little quirks or…</em>codeburst.io</a><a href="https://codeburst.io/javascript-closures-and-scope-3784c75b9290" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/discover-the-power-of-closures-in-javascript-5c472a7765d7" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/discover-the-power-of-closures-in-javascript-5c472a7765d7"><strong>Discover the power of closures in JavaScript</strong><br />
<em>Discover Functional JavaScript was named one of the best new Functional Programming books by BookAuthority! A closure…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/discover-the-power-of-closures-in-javascript-5c472a7765d7" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://code.likeagirl.io/simplified-javascript-getting-started-with-closures-f40f65317d00" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://code.likeagirl.io/simplified-javascript-getting-started-with-closures-f40f65317d00"><strong>Simplified JavaScript: Getting Started with Closures</strong><br />
<em>Eric Elliot, in his Medium article Master the JavaScript Interview: What is a Closure?, explains that when he…</em>code.likeagirl.io</a><a href="https://code.likeagirl.io/simplified-javascript-getting-started-with-closures-f40f65317d00" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://reallifejs.com/the-meat/getting-closure/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://reallifejs.com/the-meat/getting-closure/"><strong>Javascript Closures 101 - Explaining how closures work</strong><br />
<em>So, "closures", right? That's a fun one that tends to cause confusion all around. It's pretty much a given that at some…</em>reallifejs.com</a><a href="http://reallifejs.com/the-meat/getting-closure/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://dev.to/ritik_dev_js/what-the-hack-is-closure-currying-and-iife-in-javascript-32m9" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/ritik_dev_js/what-the-hack-is-closure-currying-and-iife-in-javascript-32m9"><strong>Closure, Currying and IIFE in JavaScript</strong><br />
<em>These are some of the concepts of JavaScript where everyone struggle in beginning. Lets try to simplify them bit by…</em>dev.to</a><a href="https://dev.to/ritik_dev_js/what-the-hack-is-closure-currying-and-iife-in-javascript-32m9" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.bitsrc.io/a-beginners-guide-to-closures-in-javascript-97d372284dda" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.bitsrc.io/a-beginners-guide-to-closures-in-javascript-97d372284dda"><strong>Understanding Closures in JavaScript</strong><br />
<em>Learn How Closures Really Work in JavaScript: hands-on guide</em>blog.bitsrc.io</a><a href="https://blog.bitsrc.io/a-beginners-guide-to-closures-in-javascript-97d372284dda" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/a-basic-guide-to-closures-in-javascript-9fc8b7e3463e" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/a-basic-guide-to-closures-in-javascript-9fc8b7e3463e"><strong>A basic guide to Closures in JavaScript</strong><br />
<em>The Closure is a collection of all variables in scope at the time of function creation. To use closure create a…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/a-basic-guide-to-closures-in-javascript-9fc8b7e3463e" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/steelvoltage/closures-using-memoization-3597" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/steelvoltage/closures-using-memoization-3597"><strong>Closures: Using Memoization</strong><br />
<em>One of the core tenets of Functional Programming is that a function should return the same value if given the same…</em>dev.to</a><a href="https://dev.to/steelvoltage/closures-using-memoization-3597" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://betterprogramming.pub/a-brief-introduction-to-closures-and-lexical-scoping-in-javascript-8a5866496232" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://betterprogramming.pub/a-brief-introduction-to-closures-and-lexical-scoping-in-javascript-8a5866496232"><strong>A Brief Introduction to Closures and Lexical Scoping in JavaScript</strong><br />
<em>“Writing in ECMAScript language without understanding closure is like writing Java without understanding classes”</em>betterprogramming.pub</a><a href="https://betterprogramming.pub/a-brief-introduction-to-closures-and-lexical-scoping-in-javascript-8a5866496232" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/stereobooster/demystify-closures-5g42" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/stereobooster/demystify-closures-5g42"><strong>Demystify Closures</strong><br />
<em>In the previous post we implemented functions, but not about closures. Let's fix this. Without closures following code…</em>dev.to</a><a href="https://dev.to/stereobooster/demystify-closures-5g42" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/boywithsilverwings/scopes-and-closures-javascript-concepts-4dfj" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/boywithsilverwings/scopes-and-closures-javascript-concepts-4dfj"><strong>Scope - JavaScript Concepts</strong><br />
<em>This is part of a series where I try to explain through each of 33 JS Concepts. Originally written on my blog with…</em>dev.to</a><a href="https://dev.to/boywithsilverwings/scopes-and-closures-javascript-concepts-4dfj" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/mattpopovich/understanding-closures-in-javascript-3k0d" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/mattpopovich/understanding-closures-in-javascript-3k0d"><strong>Understanding Closures in JavaScript</strong><br />
<em>When you declare a function inside another function, a closure is the new environment created by combining the inner…</em>dev.to</a><a href="https://dev.to/mattpopovich/understanding-closures-in-javascript-3k0d" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://whatthefuck.is/closure" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://whatthefuck.is/closure"><strong>What the fuck is a closure? ・ Dan's JavaScript Glossary</strong><br />
<em>Closures are confusing because they are an "invisible" concept. When you use an object, a variable, or a function, you…</em>whatthefuck.is</a><a href="https://whatthefuck.is/closure" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://dev.to/brandonleboeuf/closure-in-javascript-49n7" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/brandonleboeuf/closure-in-javascript-49n7"><strong>Closures in JavaScript can...</strong><br />
<em>I gain more understanding of a topic when I get to talk/write about it... much to my wife's horror as she has zero…</em>dev.to</a><a href="https://dev.to/brandonleboeuf/closure-in-javascript-49n7" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.youtube.com/watch?v=1JsJx1x35c0" class="markup--anchor markup--p-anchor">https://www.youtube.com/watch?v=1JsJx1x35c0</a>

<a href="https://eloquentjavascript.net/05_higher_order.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://eloquentjavascript.net/05_higher_order.html"><strong>Higher-Order Functions :: Eloquent JavaScript</strong><br />
<em>Tzu-li and Tzu-ssu were boasting about the size of their latest programs. 'Two-hundred thousand lines,' said Tzu-li…</em>eloquentjavascript.net</a><a href="https://eloquentjavascript.net/05_higher_order.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.sitepoint.com/higher-order-functions-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.sitepoint.com/higher-order-functions-javascript/"><strong>Higher-Order Functions in JavaScript - SitePoint</strong><br />
<em>Continuing his look at functional programming in JavaScript, M. David Green examines higher-order functions and how…</em>www.sitepoint.com</a><a href="https://www.sitepoint.com/higher-order-functions-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/higher-order-functions-in-javascript-d9101f9cf528" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/higher-order-functions-in-javascript-d9101f9cf528"><strong>Higher Order Functions: Using Filter, Map and Reduce for More Maintainable Code</strong><br />
<em>Higher order functions can help you to step up your JavaScript game by making your code more declarative. That is…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/higher-order-functions-in-javascript-d9101f9cf528" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/effective-functional-javascript-first-class-and-higher-order-functions-713fde8df50a" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/effective-functional-javascript-first-class-and-higher-order-functions-713fde8df50a"><strong>First-class and Higher Order Functions: Effective Functional JavaScript</strong><br />
<em>Functions: the killer JavaScript feature we never talk about.</em>hackernoon.com</a><a href="https://hackernoon.com/effective-functional-javascript-first-class-and-higher-order-functions-713fde8df50a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.lullabot.com/articles/higher-order-functions-in-javascript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.lullabot.com/articles/higher-order-functions-in-javascript"><strong>Higher Order Functions in JavaScript</strong><br />
<em>Higher-order functions can be intimidating at first, but they're not that hard to learn. A higher-order function is…</em>www.lullabot.com</a><a href="https://www.lullabot.com/articles/higher-order-functions-in-javascript" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="http://javascriptissexy.com/tag/higher-order-functions/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://javascriptissexy.com/tag/higher-order-functions/"><strong>Higher-order Functions - JavaScript Is Sexy</strong><br />
<em>In JavaScript, functions are first-class objects; that is, functions are of the type Object and they can be used in a…</em>javascriptissexy.com</a><a href="http://javascriptissexy.com/tag/higher-order-functions/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://derickbailey.com/2015/10/21/fun-with-higher-order-functions-in-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://derickbailey.com/2015/10/21/fun-with-higher-order-functions-in-javascript/"><strong>Fun With Higher Order Functions In JavaScript</strong><br />
<em>JavaScript is often referred to as a language with functional programming capabilities because of it's "higher order…</em>derickbailey.com</a><a href="https://derickbailey.com/2015/10/21/fun-with-higher-order-functions-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/pedroapfilho/high-order-functions" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/pedroapfilho/high-order-functions"><strong>pedroapfilho/array-methods</strong><br />
<em>Just a reminder on how to use array methods. Contribute to pedroapfilho/array-methods development by creating an…</em>github.com</a><a href="https://github.com/pedroapfilho/high-order-functions" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad"><strong>Understanding Higher-Order Functions in JavaScript</strong><br />
<em>Learn What Higher-Order Functions are and how to use them in JavaScript</em>blog.bitsrc.io</a><a href="https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/nuel_ikwuoma/higher-order-functions-a-pragmatic-approach-51fb" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/nuel_ikwuoma/higher-order-functions-a-pragmatic-approach-51fb"><strong>Higher Order Functions - A pragmatic approach</strong><br />
<em>Its a common saying that functions are the bread and butter of programming, and the basic unit for building reusable…</em>dev.to</a><a href="https://dev.to/nuel_ikwuoma/higher-order-functions-a-pragmatic-approach-51fb" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/recursion-in-javascript-1608032c7a1f" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/recursion-in-javascript-1608032c7a1f"><strong>Recursion in JavaScript</strong><br />
<em>I’m just gonna get this out of the way right up front, because people get really angry otherwise:</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/recursion-in-javascript-1608032c7a1f" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@zfrisch/understanding-recursion-in-javascript-992e96449e03" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@zfrisch/understanding-recursion-in-javascript-992e96449e03"><strong>Understanding Recursion in JavaScript</strong><br />
<em>One of the many things that JavaScript has going for it is the ability to recursively call functions. This feature is…</em>medium.com</a><a href="https://medium.com/@zfrisch/understanding-recursion-in-javascript-992e96449e03" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea"><strong>Learn and Understand Recursion in JavaScript</strong><br />
<em>I’ll walk you through two popular JS recursion examples in 10 minutes so you can finally understand how recursion works…</em>codeburst.io</a><a href="https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.sitepoint.com/recursion-functional-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.sitepoint.com/recursion-functional-javascript/"><strong>Recursion in Functional JavaScript - SitePoint</strong><br />
<em>M. David Green demonstrates the powerful, but dizzying concept of recursion by refactoring normal for and while loops…</em>www.sitepoint.com</a><a href="https://www.sitepoint.com/recursion-functional-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/programming-with-js-recursion-31371e2bf808" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/programming-with-js-recursion-31371e2bf808"><strong>Programming with JS: Recursion</strong><br />
<em>Understanding data structures, algorithms and basic programming concepts is essential for one to become a better…</em>hackernoon.com</a><a href="https://hackernoon.com/programming-with-js-recursion-31371e2bf808" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/simov/anonymous-recursion-in-javascript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/simov/anonymous-recursion-in-javascript"><strong>Anonymous Recursion in JavaScript</strong><br />
<em>Yes, there is such thing, and I thought it would be an interesting example to share. It features: closures…</em>dev.to</a><a href="https://dev.to/simov/anonymous-recursion-in-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://www.jstips.co/en/javascript/recursion-iteration-and-tail-calls-in-js/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://www.jstips.co/en/javascript/recursion-iteration-and-tail-calls-in-js/"><strong>Recursion, iteration and tail calls in JS</strong><br />
<em>If you've been on the business for some time, you have, most likely, come across the definition of recursion, for which…</em>www.jstips.co</a><a href="http://www.jstips.co/en/javascript/recursion-iteration-and-tail-calls-in-js/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@newmanbradm/intro-to-recursion-984a8bd50f4b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@newmanbradm/intro-to-recursion-984a8bd50f4b"><strong>Intro to Recursion</strong><br />
<em>Recursion can be a difficult concept to wrap your head around, but its definition is rather simple: recursion is when a…</em>medium.com</a><a href="https://medium.com/@newmanbradm/intro-to-recursion-984a8bd50f4b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.datadriveninvestor.com/accio-recursion-your-new-favorite-javascript-spell-7e10d3125fb3" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.datadriveninvestor.com/accio-recursion-your-new-favorite-javascript-spell-7e10d3125fb3"><strong>Accio Recursion!: Your New Favorite JavaScript Spell</strong><br />
<em>The spell “Accio” allows a witch or wizard to summon something to them. Casting Accio is just like accessing a value in…</em>medium.datadriveninvestor.com</a><a href="https://medium.datadriveninvestor.com/accio-recursion-your-new-favorite-javascript-spell-7e10d3125fb3" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/christinamcmahon/recursion-explained-with-examples-4k1m" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/christinamcmahon/recursion-explained-with-examples-4k1m"><strong>Recursion Explained (with Examples)</strong><br />
<em>"To understand recursion, one must first understand recursion" - Unknown Recursion is a method of solving problems…</em>dev.to</a><a href="https://dev.to/christinamcmahon/recursion-explained-with-examples-4k1m" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator"><strong>Generator - JavaScript | MDN</strong><br />
<em>This object cannot be instantiated directly. Instead, a Generator instance can be returned from a generator function…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hacks.mozilla.org/2015/06/es6-in-depth-collections/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hacks.mozilla.org/2015/06/es6-in-depth-collections/"><strong>ES6 In Depth: Collections - Mozilla Hacks - the Web developer blog</strong><br />
<em>ES6 In Depth is a series on new features being added to the JavaScript programming language in the 6th Edition of the…</em>hacks.mozilla.org</a><a href="https://hacks.mozilla.org/2015/06/es6-in-depth-collections/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.sitepoint.com/es6-collections-map-set-weakmap-weakset/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.sitepoint.com/es6-collections-map-set-weakmap-weakset/"><strong>ES6 Collections: Using Map, Set, WeakMap, WeakSet - SitePoint</strong><br />
<em>Most major programming languages have several types of data collections. Python has lists, tuples, and dictionaries…</em>www.sitepoint.com</a><a href="https://www.sitepoint.com/es6-collections-map-set-weakmap-weakset/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://alligator.io/js/maps-introduction/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://alligator.io/js/maps-introduction/"><strong>Introduction to Maps in JavaScript | DigitalOcean</strong><br />
<em>While this tutorial has content that we believe is of great benefit to our community, we have not yet tested or edited…</em>alligator.io</a><a href="https://alligator.io/js/maps-introduction/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.info/map-set-weakmap-weakset" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.info/map-set-weakmap-weakset"><strong>Map and Set</strong><br />
<em>Till now, we've learned about the following complex data structures: Objects are used for storing keyed collections…</em>javascript.info</a><a href="https://javascript.info/map-set-weakmap-weakset" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/mildrenben/maps-in-es6---a-quick-guide-35pk" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/mildrenben/maps-in-es6---a-quick-guide-35pk"><strong>Maps in ES6 - A Quick Guide</strong><br />
<em>Maps and Sets often get lumped together in articles. They're both new ES6 collection types with similar interfaces but…</em>dev.to</a><a href="https://dev.to/mildrenben/maps-in-es6---a-quick-guide-35pk" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/front-end-weekly/es6-set-vs-array-what-and-when-efc055655e1a" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/front-end-weekly/es6-set-vs-array-what-and-when-efc055655e1a"><strong>ES6 — Set vs Array — What and when?</strong><br />
<em>What is Set and what is Array?</em>medium.com</a><a href="https://medium.com/front-end-weekly/es6-set-vs-array-what-and-when-efc055655e1a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/front-end-weekly/es6-map-vs-object-what-and-when-b80621932373" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/front-end-weekly/es6-map-vs-object-what-and-when-b80621932373"><strong>ES6 — Map vs Object — What and when?</strong><br />
<em>You may wonder — why Map vs Object but not Map vs Array, or Object vs Set? Well, you can also compare between any of…</em>medium.com</a><a href="https://medium.com/front-end-weekly/es6-map-vs-object-what-and-when-b80621932373" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://www.deadcoderising.com/es6-working-with-sets-in-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://www.deadcoderising.com/es6-working-with-sets-in-javascript/"><strong>ES6: Working with Sets in JavaScript</strong><br />
<em>In this post we're continuing to look at features introduced in ES6. Amongst all the cool things happening in ES6, we…</em>www.deadcoderising.com</a><a href="http://www.deadcoderising.com/es6-working-with-sets-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/array-vs-set-vs-map-vs-object-real-time-use-cases-in-javascript-es6-47ee3295329b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/array-vs-set-vs-map-vs-object-real-time-use-cases-in-javascript-es6-47ee3295329b"><strong>Array vs Set vs Map vs Object — Real-time use cases in Javascript (ES6/ES7)</strong><br />
<em>The internet is a great place to find information, but there is one teeny-tiny problem. You are on a boat in the middle…</em>codeburst.io</a><a href="https://codeburst.io/array-vs-set-vs-map-vs-object-real-time-use-cases-in-javascript-es6-47ee3295329b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/claireparker/how-to-create-an-array-of-unique-values-in-javascript-using-sets-5dg6" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/claireparker/how-to-create-an-array-of-unique-values-in-javascript-using-sets-5dg6"><strong>How to create an array of unique values in JavaScript using Sets</strong><br />
<em>Sorry for the verbose title - sometimes things can be explained better with a code example. Imagine you have a…</em>dev.to</a><a href="https://dev.to/claireparker/how-to-create-an-array-of-unique-values-in-javascript-using-sets-5dg6" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/what-you-should-know-about-es6-maps-dc66af6b9a1e" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/what-you-should-know-about-es6-maps-dc66af6b9a1e"><strong>What You Should Know About ES6 Maps</strong><br />
<em>JavaScript ES6 introduces a new data structure, called maps. Maps are designed as an alternative to using Object…</em>hackernoon.com</a><a href="https://hackernoon.com/what-you-should-know-about-es6-maps-dc66af6b9a1e" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://ponyfoo.com/articles/es6-maps-in-depth" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://ponyfoo.com/articles/es6-maps-in-depth"><strong>ES6 Maps in Depth</strong><br />
<em>A very common abuse case of JavaScript objects is hash-maps, where we map string keys to arbitrary values.</em>ponyfoo.com</a><a href="https://ponyfoo.com/articles/es6-maps-in-depth" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/what-are-javascript-generators-and-how-to-use-them-c6f2713fd12e" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/what-are-javascript-generators-and-how-to-use-them-c6f2713fd12e"><strong>What are JavaScript Generators and how to use them</strong><br />
<em>In this article, we’re going to take a look at the generators that were introduced in ECMAScript 6. We’ll see what it…</em>codeburst.io</a><a href="https://codeburst.io/what-are-javascript-generators-and-how-to-use-them-c6f2713fd12e" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5"><strong>Understanding Generators in ES6 JavaScript with Examples</strong><br />
<em>ES6 introduced a new way of working with functions and iterators in the form of Generators (or generator functions). A…</em>codeburst.io</a><a href="https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://davidwalsh.name/es6-generators" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://davidwalsh.name/es6-generators"><strong>The Basics Of ES6 Generators</strong><br />
<em>One of the most exciting new features coming in JavaScript ES6 is a new breed of function, called a generator. The name…</em>davidwalsh.name</a><a href="https://davidwalsh.name/es6-generators" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/kallaugher/an-introduction-to-javascript-generators-1224" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/kallaugher/an-introduction-to-javascript-generators-1224"><strong>An Introduction to JavaScript Generators</strong><br />
<em>One of the fundamentals of JavaScript is that it is single-threaded, meaning that two pieces of code cannot run at the…</em>dev.to</a><a href="https://dev.to/kallaugher/an-introduction-to-javascript-generators-1224" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"><strong>Promise - JavaScript | MDN</strong><br />
<em>The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://scotch.io/tutorials/javascript-promises-for-dummies" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://scotch.io/tutorials/javascript-promises-for-dummies"><strong>Understanding JavaScript Promises | DigitalOcean</strong><br />
<em>Javascript Promises can be challenging to understand. Therefore, I would like to write down the way I understand…</em>scotch.io</a><a href="https://scotch.io/tutorials/javascript-promises-for-dummies" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1"><strong>Understanding Promises in JavaScript</strong><br />
<em>An in-depth look at creating and handling Promises</em>hackernoon.com</a><a href="https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261"><strong>Master the JavaScript Interview: What is a Promise?</strong><br />
<em>“Master the JavaScript Interview” is a series of posts designed to prepare candidates for common questions they are…</em>medium.com</a><a href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.sitepoint.com/overview-javascript-promises/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.sitepoint.com/overview-javascript-promises/"><strong>An Overview of JavaScript Promises - SitePoint</strong><br />
<em>This article explores JavaScript's new Promises API, showing how you can leverage promises in your JavaScript…</em>www.sitepoint.com</a><a href="https://www.sitepoint.com/overview-javascript-promises/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/promises-in-javascript-explained-277b98850de" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/promises-in-javascript-explained-277b98850de"><strong>How to use Promises in JavaScript</strong><br />
<em>Promises in JavaScript are a way to handle async calls. Before Promises were introduced in JavaScript ES6, async calls…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/promises-in-javascript-explained-277b98850de" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/how-to-implement-promises-in-javascript-1ce2680a7f51" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/how-to-implement-promises-in-javascript-1ce2680a7f51"><strong>Implementing Promises In JavaScript</strong><br />
<em>The thing I love most about programming is the aha! moment when you start to fully understand a concept. Even though it…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/how-to-implement-promises-in-javascript-1ce2680a7f51" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/javascript-promises-explained-with-simple-real-life-analogies-dd6908092138" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/javascript-promises-explained-with-simple-real-life-analogies-dd6908092138"><strong>JavaScript: Promises explained with simple real life analogies</strong><br />
<em>Talking about promises in layman terms</em>codeburst.io</a><a href="https://codeburst.io/javascript-promises-explained-with-simple-real-life-analogies-dd6908092138" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://exploringjs.com/es6/ch_promises.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://exploringjs.com/es6/ch_promises.html"><strong>25. Promises for asynchronous programming</strong><br />
<em>This chapter is an introduction to asynchronous programming via Promises in general and the ECMAScript 6 Promise API in…</em>exploringjs.com</a><a href="http://exploringjs.com/es6/ch_promises.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.codeanalogies.com/2018/08/26/javascript-promises-explained-by-gambling-at-a-casino/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.codeanalogies.com/2018/08/26/javascript-promises-explained-by-gambling-at-a-casino/"><strong>JavaScript Promises Explained By Gambling At A Casino</strong><br />
<em>We all love the asynchronous capabilities of JavaScript. In fact, we love them so much that sometimes, we overindulge…</em>blog.codeanalogies.com</a><a href="https://blog.codeanalogies.com/2018/08/26/javascript-promises-explained-by-gambling-at-a-casino/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/datafire-io/es6-promises-patterns-and-anti-patterns-bbb21a5d0918" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/datafire-io/es6-promises-patterns-and-anti-patterns-bbb21a5d0918"><strong>ES6 Promises: Patterns and Anti-Patterns</strong><br />
<em>When I first got started with NodeJS a few years ago, I was mortified by what is now affectionately known as “callback…</em>medium.com</a><a href="https://medium.com/datafire-io/es6-promises-patterns-and-anti-patterns-bbb21a5d0918" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://codeburst.io/a-simple-guide-to-es6-promises-d71bacd2e13a" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/a-simple-guide-to-es6-promises-d71bacd2e13a"><strong>A Simple Guide to ES6 Promises</strong><br />
<em>The woods are lovely, dark and deep. But I have promises to keep, and miles to go before I sleep. — Robert Frost</em>codeburst.io</a><a href="https://codeburst.io/a-simple-guide-to-es6-promises-d71bacd2e13a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/the-es6-promises-87a979ab27e4" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/the-es6-promises-87a979ab27e4"><strong>The ES6 Promises</strong><br />
<em>A very helpful feature in ES6</em>codeburst.io</a><a href="https://codeburst.io/the-es6-promises-87a979ab27e4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://ponyfoo.com/articles/es6-promises-in-depth" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://ponyfoo.com/articles/es6-promises-in-depth"><strong>ES6 Promises in Depth</strong><br />
<em>Promises are a very involved paradigm, so we'll take it slow. Here's a table of contents with the topics we'll cover in…</em>ponyfoo.com</a><a href="https://ponyfoo.com/articles/es6-promises-in-depth" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/playing-with-javascript-promises-a-comprehensive-approach-25ab752c78c3" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/playing-with-javascript-promises-a-comprehensive-approach-25ab752c78c3"><strong>Javascript Promises: An In-Depth Approach</strong><br />
<em>“Write down the syntax for promises on this sheet of paper”, is enough to give nightmares to a lot of junior and even…</em>codeburst.io</a><a href="https://codeburst.io/playing-with-javascript-promises-a-comprehensive-approach-25ab752c78c3" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/how-to-write-a-javascript-promise-4ed8d44292b8" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/how-to-write-a-javascript-promise-4ed8d44292b8"><strong>How to Write a JavaScript Promise</strong><br />
<em>What is a promise?</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/how-to-write-a-javascript-promise-4ed8d44292b8" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/swlh/a-coding-writers-guide-an-introduction-to-es6-promises-9ff9f9e88f6c" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/swlh/a-coding-writers-guide-an-introduction-to-es6-promises-9ff9f9e88f6c"><strong>A Coding Writer’s Guide: An Introduction To ES6 Promises</strong><br />
<em>Welcome back to the ‘A Coding Writer’s Guide’ series! If you have been keeping up with this series, you’d know that I…</em>medium.com</a><a href="https://medium.com/swlh/a-coding-writers-guide-an-introduction-to-es6-promises-9ff9f9e88f6c" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/itnext/reverse-engineering-understand-promises-1jfc" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/itnext/reverse-engineering-understand-promises-1jfc"><strong>Reverse engineering - Understanding Promises in JavaScript</strong><br />
<em>We will reverse engineer Promises in JavaScript together with some 90s nostalgia. Tagged with showdev, tutorial…</em>dev.to</a><a href="https://dev.to/itnext/reverse-engineering-understand-promises-1jfc" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/zellwk/converting-callbacks-to-promises-nhn" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/zellwk/converting-callbacks-to-promises-nhn"><strong>Converting callbacks to promises</strong><br />
<em>It's easier to work with Promises (or Async/await) compared to callbacks. This is especially true when you work in…</em>dev.to</a><a href="https://dev.to/zellwk/converting-callbacks-to-promises-nhn" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/dailyjs/javascript-promises-zero-to-hero-plus-cheat-sheet-64d75051cffa" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/dailyjs/javascript-promises-zero-to-hero-plus-cheat-sheet-64d75051cffa"><strong>JavaScript Promises: Zero To Hero Plus Cheat Sheet</strong><br />
<em>It’s time, friend. Native JavaScript promises explained how I wish they were explained to me — plus a handy cheat…</em>medium.com</a><a href="https://medium.com/dailyjs/javascript-promises-zero-to-hero-plus-cheat-sheet-64d75051cffa" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/boywithsilverwings/promises-javascript-concepts-293c" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/boywithsilverwings/promises-javascript-concepts-293c"><strong>Promises - JavaScript concepts</strong><br />
<em>This is part of a series where I try to explain through each of 33 JS Concepts. This part corresponds to Promises…</em>dev.to</a><a href="https://dev.to/boywithsilverwings/promises-javascript-concepts-293c" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/iggredible/javascript-promise-101-3idl" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/iggredible/javascript-promise-101-3idl"><strong>Javascript Promise 101</strong><br />
<em>Knowing how Promise works in javascript will boost your development skill exponentially. Here I will share: I promise…</em>dev.to</a><a href="https://dev.to/iggredible/javascript-promise-101-3idl" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/sunnysingh/simplify-javascript-promises-4djb" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/sunnysingh/simplify-javascript-promises-4djb"><strong>Simplify JavaScript Promises</strong><br />
<em>I love promises. Not from people, but from JavaScript. Tweet Quote I love promises. Not from people, but from…</em>dev.to</a><a href="https://dev.to/sunnysingh/simplify-javascript-promises-4djb" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/madhash/the-low-down-on-promises-af4a96bbb95f" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/madhash/the-low-down-on-promises-af4a96bbb95f"><strong>The Lowdown on Promises</strong><br />
<em>A quick and concise guide on how Promises work in JavaScript</em>medium.com</a><a href="https://medium.com/madhash/the-low-down-on-promises-af4a96bbb95f" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke"><strong>⭐️🎀 JavaScript Visualized: Promises &amp; Async/Await</strong><br />
<em>Ever had to deal with JS code that just... didn't run the way you expected it to? Maybe it seemed like functions got…</em>dev.to</a><a href="https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/peterklingelhofer/promises-in-javascript-3h5k" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/peterklingelhofer/promises-in-javascript-3h5k"><strong>Promises in JavaScript</strong><br />
<em>Callbacks are functions that run after something happens or something completes. If you have to make an asynchronous…</em>dev.to</a><a href="https://dev.to/peterklingelhofer/promises-in-javascript-3h5k" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/somedood/best-practices-for-es6-promises-36da" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/somedood/best-practices-for-es6-promises-36da"><strong>Best Practices for ES6 Promises</strong><br />
<em>ES6 promises are great! Yet... they are still quite painful to deal with. In this article, I share the best practices I…</em>dev.to</a><a href="https://dev.to/somedood/best-practices-for-es6-promises-36da" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.info/async-await" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.info/async-await"><strong>Async/await</strong><br />
<em>There's a special syntax to work with promises in a more comfortable fashion, called "async/await". It's surprisingly…</em>javascript.info</a><a href="https://javascript.info/async-await" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://eloquentjavascript.net/11_async.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://eloquentjavascript.net/11_async.html"><strong>Asynchronous Programming :: Eloquent JavaScript</strong><br />
<em>Who can wait quietly while the mud settles?Who can remain still until the moment of action? Laozi, Tao Te Ching The…</em>eloquentjavascript.net</a><a href="https://eloquentjavascript.net/11_async.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://exploringjs.com/es6/ch_async.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://exploringjs.com/es6/ch_async.html"><strong>24. Asynchronous programming (background)</strong><br />
<em>This chapter explains foundations of asynchronous programming in JavaScript. It provides background knowledge for the…</em>exploringjs.com</a><a href="http://exploringjs.com/es6/ch_async.html" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/understanding-async-await-in-javascript-1d81bb079b2c" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/understanding-async-await-in-javascript-1d81bb079b2c"><strong>Understanding async-await in JavaScript</strong><br />
<em>Rules of thumb and examples for when and how to use async and await</em>hackernoon.com</a><a href="https://hackernoon.com/understanding-async-await-in-javascript-1d81bb079b2c" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://alligator.io/js/async-functions/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://alligator.io/js/async-functions/"><strong>Exploring Async/Await Functions in JavaScript | DigitalOcean</strong><br />
<em>Promises give us an easier way to deal with asynchrony in our code in a sequential manner. Considering that our brains…</em>alligator.io</a><a href="https://alligator.io/js/async-functions/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://scotch.io/tutorials/asynchronous-javascript-using-async-await" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://scotch.io/tutorials/asynchronous-javascript-using-async-await"><strong>Asynchronous Javascript using Async - Await</strong><br />
<em>Async/await is a relatively new way to write asynchronous code in Javascript. Before we used callbacks and promises…</em>scotch.io</a><a href="https://scotch.io/tutorials/asynchronous-javascript-using-async-await" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://flaviocopes.com/javascript-async-await/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://flaviocopes.com/javascript-async-await/"><strong>Modern Asynchronous JavaScript with Async and Await</strong><br />
<em>JavaScript evolved in a very short time from callbacks to promises (ES2015), and since ES2017 asynchronous JavaScript…</em>flaviocopes.com</a><a href="https://flaviocopes.com/javascript-async-await/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.toptal.com/javascript/asynchronous-javascript-async-await-tutorial" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.toptal.com/javascript/asynchronous-javascript-async-await-tutorial"><strong>Asynchronous JavaScript: From Callback Hell to Async and Await</strong><br />
<em>One of the keys to writing a successful web application is being able to make dozens of AJAX calls per page. This is a…</em>www.toptal.com</a><a href="https://www.toptal.com/javascript/asynchronous-javascript-async-await-tutorial" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@_bengarrison/javascript-es8-introducing-async-await-functions-7a471ec7de8a" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@_bengarrison/javascript-es8-introducing-async-await-functions-7a471ec7de8a"><strong>Javascript — ES8 Introducing `async/await` Functions</strong><br />
<em>To gain some perspective on why folks are so excited about the ES8 async/await functions, you have to be familiar with…</em>medium.com</a><a href="https://medium.com/@_bengarrison/javascript-es8-introducing-async-await-functions-7a471ec7de8a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/avoiding-the-async-await-hell-c77a0fb71c4c" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/avoiding-the-async-await-hell-c77a0fb71c4c"><strong>How to escape async/await hell</strong><br />
<em>async/await freed us from callback hell, but people have started abusing it — leading to the birth of async/await hell.</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/avoiding-the-async-await-hell-c77a0fb71c4c" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://ponyfoo.com/articles/understanding-javascript-async-await" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://ponyfoo.com/articles/understanding-javascript-async-await"><strong>Understanding JavaScript's async await</strong><br />
<em>Let's suppose we had code like the following. Here I'm wrapping an HTTP request in a Promise. The promise fulfills with…</em>ponyfoo.com</a><a href="https://ponyfoo.com/articles/understanding-javascript-async-await" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://techbrij.com/javascript-async-await-parallel-sequence" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://techbrij.com/javascript-async-await-parallel-sequence"><strong>JavaScript Async/Await: Serial, Parallel and Complex Flow - TechBrij</strong><br />
<em>If you have experience on ASP.NET MVC then probably you are familiar with async/await keywords in C#. The same thing is…</em>techbrij.com</a><a href="https://techbrij.com/javascript-async-await-parallel-sequence" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://blog.pusher.com/promises-async-await/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.pusher.com/promises-async-await/"><strong>From JavaScript Promises to Async/Await: why bother?</strong><br />
<em>In this tutorial, we will cover why we need async/await when we could achieve the same fit with JavaScript Promises, to…</em>blog.pusher.com</a><a href="https://blog.pusher.com/promises-async-await/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.sitepoint.com/flow-control-callbacks-promises-async-await/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.sitepoint.com/flow-control-callbacks-promises-async-await/"><strong>Flow Control in Modern JS: Callbacks to Promises to Async/Await - SitePoint</strong><br />
<em>JavaScript is regularly claimed to be asynchronous. What does that mean? How does it affect development? How has the…</em>www.sitepoint.com</a><a href="https://www.sitepoint.com/flow-control-callbacks-promises-async-await/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dzone.com/articles/javascript-promises-and-why-asyncawait-wins-the-ba" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dzone.com/articles/javascript-promises-and-why-asyncawait-wins-the-ba"><strong>JavaScript: Promises and Why Async/Await Wins the Battle - DZone Performance</strong><br />
<em>Calling the validatePassword() function: The code snippet below shows a full end to end check for validating a password…</em>dzone.com</a><a href="https://dzone.com/articles/javascript-promises-and-why-asyncawait-wins-the-ba" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/improve-your-asynchronous-javascript-code-with-async-and-await-c02fc3813eda" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/improve-your-asynchronous-javascript-code-with-async-and-await-c02fc3813eda"><strong>How to Improve Your Asynchronous JavaScript Code With Async and Await</strong><br />
<em>If you’ve had the chance to observe modern JavaScript code, there are high chances that you’ve seen the async and await…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/improve-your-asynchronous-javascript-code-with-async-and-await-c02fc3813eda" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@micksheridan.24/making-fetches-easy-with-async-await-8a1246efa1f6" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@micksheridan.24/making-fetches-easy-with-async-await-8a1246efa1f6"><strong>Making Fetches Easy With Async Await</strong><br />
<em>Asynchronous requests are the source of many common and frustrating bugs in otherwise clean code. Because most of…</em>medium.com</a><a href="https://medium.com/@micksheridan.24/making-fetches-easy-with-async-await-8a1246efa1f6" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/gafi/7-reasons-to-always-use-async-await-over-plain-promises-tutorial-4ej9" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/gafi/7-reasons-to-always-use-async-await-over-plain-promises-tutorial-4ej9"><strong>7 Reasons Why JavaScript Async/Await Is Better Than Plain Promises (Tutorial)</strong><br />
<em>Async/await was introduced in NodeJS 7.6 and is currently supported in all modern browsers. I believe it has been the…</em>dev.to</a><a href="https://dev.to/gafi/7-reasons-to-always-use-async-await-over-plain-promises-tutorial-4ej9" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/jscrambler/asynchronous-operations-in-javascript-2p6b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/jscrambler/asynchronous-operations-in-javascript-2p6b"><strong>Asynchronous Operations in JavaScript</strong><br />
<em>JavaScript comes from a legacy of peril with asynchronous operations. It began with callbacks to make Ajax calls for…</em>dev.to</a><a href="https://dev.to/jscrambler/asynchronous-operations-in-javascript-2p6b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/joeyhub/async-await-a-slight-design-flaw-2h2j" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/joeyhub/async-await-a-slight-design-flaw-2h2j"><strong>Async/await: A slight design flaw.</strong><br />
<em>My experience with async/await is that it's amazing for simple cases and fulfils expectations. If your use cases are…</em>dev.to</a><a href="https://dev.to/joeyhub/async-await-a-slight-design-flaw-2h2j" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://betterprogramming.pub/should-i-use-promises-or-async-await-126ab5c98789" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://betterprogramming.pub/should-i-use-promises-or-async-await-126ab5c98789"><strong>JavaScript: Promises or async-await</strong><br />
<em>A set of rules for when to use which</em>betterprogramming.pub</a><a href="https://betterprogramming.pub/should-i-use-promises-or-async-await-126ab5c98789" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/zhiyuanamos/async-await-from-zero-to-hero-a22" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/zhiyuanamos/async-await-from-zero-to-hero-a22"><strong>Async / Await: From Zero to Hero</strong><br />
<em>I had absolutely no idea what async / await was and learning it was hard as: There's 27 minutes worth of text to read…</em>dev.to</a><a href="https://dev.to/zhiyuanamos/async-await-from-zero-to-hero-a22" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/siliconwat/data-structures-in-javascript-1b9aed0ea17c" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/siliconwat/data-structures-in-javascript-1b9aed0ea17c"><strong>Data Structures in JavaScript</strong><br />
<em>For Frontend Software Engineers</em>medium.com</a><a href="https://medium.com/siliconwat/data-structures-in-javascript-1b9aed0ea17c" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://itnext.io/algorithms-and-data-structures-in-javascript-a71548f902cb" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://itnext.io/algorithms-and-data-structures-in-javascript-a71548f902cb"><strong>Algorithms and Data Structures in JavaScript</strong><br />
<em>Algorithms and data structures implemented in JavaScript with explanations and links to further readings and YouTube…</em>itnext.io</a><a href="https://itnext.io/algorithms-and-data-structures-in-javascript-a71548f902cb" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://scotch.io/courses/10-need-to-know-javascript-concepts/data-structures-objects-and-arrays" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://scotch.io/courses/10-need-to-know-javascript-concepts/data-structures-objects-and-arrays"><strong>Data Structures: Objects and Arrays</strong><br />
<em>Ever seen some data in square brackets and curly brackets in JavaScript? These are Arrays and Objects respectively. //…</em>scotch.io</a><a href="https://scotch.io/courses/10-need-to-know-javascript-concepts/data-structures-objects-and-arrays" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://blog.benoitvallon.com/data-structures-in-javascript/data-structures-in-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://blog.benoitvallon.com/data-structures-in-javascript/data-structures-in-javascript/"><strong>Data structures in JavaScript</strong><br />
<em>The #data-structures series is a collection of posts about reimplemented data structures in JavaScript. If you are not…</em>blog.benoitvallon.com</a><a href="http://blog.benoitvallon.com/data-structures-in-javascript/data-structures-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.cloudboost.io/playing-with-data-structures-in-javascript-stack-a55ebe50f29d" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.cloudboost.io/playing-with-data-structures-in-javascript-stack-a55ebe50f29d"><strong>Playing with data structures in Javascript — Stack</strong><br />
<em>Javascript is evolving each day. With the rapid growth of frameworks and platforms like React, Angular, Vue, NodeJS…</em>blog.cloudboost.io</a><a href="https://blog.cloudboost.io/playing-with-data-structures-in-javascript-stack-a55ebe50f29d" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/the-little-guide-of-queue-in-javascript-4f67e79260d9" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/the-little-guide-of-queue-in-javascript-4f67e79260d9"><strong>The Little Guide of Queue in JavaScript</strong><br />
<em>A queue is a simple data structure that allows elements to be inserted from one end, called the rear (also called…</em>hackernoon.com</a><a href="https://hackernoon.com/the-little-guide-of-queue-in-javascript-4f67e79260d9" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/barretlee/algorithms" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/barretlee/algorithms"><strong>barretlee/algorithms</strong><br />
<em>Detail &amp; Discusion (讨论和细节) All algorithms writing with JavaScript in book ' Algorithms Fourth Edition'. Run…</em>github.com</a><a href="https://github.com/barretlee/algorithms" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/nzakas/computer-science-in-javascript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/nzakas/computer-science-in-javascript"><strong>humanwhocodes/computer-science-in-javascript</strong><br />
<em>Collection of classic computer science paradigms, algorithms, and approaches written in JavaScript. …</em>github.com</a><a href="https://github.com/nzakas/computer-science-in-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/jamiebuilds/itsy-bitsy-data-structures" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/jamiebuilds/itsy-bitsy-data-structures"><strong>jamiebuilds/itsy-bitsy-data-structures</strong><br />
<em>Welcome to Itsy Bitsy Data Structures! In here are super simplified examples of many of the common data structures…</em>github.com</a><a href="https://github.com/jamiebuilds/itsy-bitsy-data-structures" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/miku86/series/3259" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/miku86/series/3259"><strong>About DEV - DEV Community</strong><br />
<em>DEV is a community of software developers getting together to help one another out. The software industry relies on…</em>dev.to</a><a href="https://dev.to/miku86/series/3259" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.plainenglish.io/data-structures-understanding-graphs-82509d35e6b5" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.plainenglish.io/data-structures-understanding-graphs-82509d35e6b5"><strong>Data Structures: Understanding Graphs</strong><br />
<em>What is a graph? Graphs are used to represents relationships and hierarchies and are composed of nodes and edges.</em>javascript.plainenglish.io</a><a href="https://javascript.plainenglish.io/data-structures-understanding-graphs-82509d35e6b5" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/freddieduffield/data-structures-two-ways-linked-list-2n61" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/freddieduffield/data-structures-two-ways-linked-list-2n61"><strong>Data Structures Two Ways: Linked List (Pt 1)</strong><br />
<em>I work primarily with JavaScript, but the place I work is using Java on the backend. Always being fascinated with…</em>dev.to</a><a href="https://dev.to/freddieduffield/data-structures-two-ways-linked-list-2n61" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/freddieduffield/data-structures-two-ways-linked-list-pt2-2i60" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/freddieduffield/data-structures-two-ways-linked-list-pt2-2i60"><strong>Data Structures Two Ways: Linked List (Pt2)</strong><br />
<em>If you are new- well hello! check out part one if you like to start at the beginning or just jump straight in Right on…</em>dev.to</a><a href="https://dev.to/freddieduffield/data-structures-two-ways-linked-list-pt2-2i60" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/amejiarosario/graph-data-structures-for-beginners-5edn" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/amejiarosario/graph-data-structures-for-beginners-5edn"><strong>Graph Data Structures Explained in JavaScript</strong><br />
<em>In this post, we are going to explore non-linear data structures like graphs. Also, we'll cover the central concepts…</em>dev.to</a><a href="https://dev.to/amejiarosario/graph-data-structures-for-beginners-5edn" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/cesars-tech-insights/big-o-notation-javascript-25c79f50b19b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/cesars-tech-insights/big-o-notation-javascript-25c79f50b19b"><strong>Big O Notation in Javascript</strong><br />
<em>Get ready for your tech job interview</em>medium.com</a><a href="https://medium.com/cesars-tech-insights/big-o-notation-javascript-25c79f50b19b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/javascript-scene/time-complexity-big-o-notation-1a4310c3ee4b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/javascript-scene/time-complexity-big-o-notation-1a4310c3ee4b"><strong>Time Complexity/Big O Notation</strong><br />
<em>Scaling Algorithms Instead of Applications</em>medium.com</a><a href="https://medium.com/javascript-scene/time-complexity-big-o-notation-1a4310c3ee4b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@gmedina229/big-o-in-javascript-36ff67766051" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@gmedina229/big-o-in-javascript-36ff67766051"><strong>Big O in JavaScript</strong><br />
<em>Like many new developers before me, Big O went straight over my head the first time I heard about it. It was a topic…</em>medium.com</a><a href="https://medium.com/@gmedina229/big-o-in-javascript-36ff67766051" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://www.bradoncode.com/blog/2012/04/big-o-algorithm-examples-in-javascript.html" class="markup--anchor markup--p-anchor">http://www.bradoncode.com/blog/2012/04/big-o-algorithm-examples-in-javascript.html</a>

<a href="https://www.jenniferbland.com/time-complexity-analysis-in-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.jenniferbland.com/time-complexity-analysis-in-javascript/"><strong>Time Complexity Analysis in JavaScript</strong><br />
<em>An algorithm is a self-contained step-by-step set of instructions to solve a problem. It takes time for these steps to…</em>www.jenniferbland.com</a><a href="https://www.jenniferbland.com/time-complexity-analysis-in-javascript/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/time-is-complex-but-priceless-f0abd015063c" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/time-is-complex-but-priceless-f0abd015063c"><strong>Algorithms in plain English: time complexity and Big-O notation</strong><br />
<em>Every good developer has time on their mind. They want to give their users more of it, so they can do all those things…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/time-is-complex-but-priceless-f0abd015063c" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/lofiandcode/an-introduction-to-big-o-notation-210o" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/lofiandcode/an-introduction-to-big-o-notation-210o"><strong>An Introduction to Big O Notation</strong><br />
<em>Big O notation is a big topic, and its universal importance stems from the fact that it describes the efficiency of…</em>dev.to</a><a href="https://dev.to/lofiandcode/an-introduction-to-big-o-notation-210o" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/Crizstian/data-structure-and-algorithms-with-ES6" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/Crizstian/data-structure-and-algorithms-with-ES6"><strong>Crizstian/data-structure-and-algorithms-with-ES6</strong><br />
<em>Num Type Exercises Description 10.- Graph Data Structure 2 A graph consists of a set of vertices and a set of edges. A…</em>github.com</a><a href="https://github.com/Crizstian/data-structure-and-algorithms-with-ES6" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/trekhleb/javascript-algorithms" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/trekhleb/javascript-algorithms"><strong>trekhleb/javascript-algorithms</strong><br />
<em>This repository contains JavaScript based examples of many popular algorithms and data structures. Each algorithm and…</em>github.com</a><a href="https://github.com/trekhleb/javascript-algorithms" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://www.thatjsdude.com/interview/js1.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://www.thatjsdude.com/interview/js1.html"><strong>JS: Algorithm</strong><br />
<em>More Questions CSS Interview Questions , HTML Interview Questions if you are little more comfortable or claim to be…</em>www.thatjsdude.com</a><a href="http://www.thatjsdude.com/interview/js1.html" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038"><strong>Algorithms in JavaScript</strong><br />
<em>40 Problems, Solutions, and Explanations</em>medium.com</a><a href="https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/javascript-objects-square-brackets-and-algorithms-e9a2916dc158" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/javascript-objects-square-brackets-and-algorithms-e9a2916dc158"><strong>JavaScript Objects, Square Brackets and Algorithms</strong><br />
<em>One of the most powerful aspects of JavaScript is being able to dynamically refer to properties of objects. In this…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/javascript-objects-square-brackets-and-algorithms-e9a2916dc158" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/felipernb/algorithms.js" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/felipernb/algorithms.js"><strong>felipernb/algorithms.js</strong><br />
<em>Classic algorithms and data structures implemented in JavaScript, you know... FOR SCIENCE.</em>github.com</a><a href="https://github.com/felipernb/algorithms.js" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/yangshun/lago" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/yangshun/lago"><strong>yangshun/lago</strong><br />
<em>📕 Data Structures and Algorithms library in TypeScript - yangshun/lago</em>github.com</a><a href="https://github.com/yangshun/lago" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/idosela/algorithms-in-javascript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/idosela/algorithms-in-javascript"><strong>idosela/algorithms-in-javascript</strong><br />
<em>Collection of computer science algorithms and data structures written in JavaScript. Run the sort performence test…</em>github.com</a><a href="https://github.com/idosela/algorithms-in-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/trekhleb/algorithms-and-data-structures-in-javascript-49i3" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/trekhleb/algorithms-and-data-structures-in-javascript-49i3"><strong>Algorithms and Data Structures in JavaScript</strong><br />
<em>Hello Readers! I've recently launched JavaScript Algorithms and Data Structures repository on GitHub with a collection…</em>dev.to</a><a href="https://dev.to/trekhleb/algorithms-and-data-structures-in-javascript-49i3" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance"><strong>Inheritance in JavaScript - Learn web development | MDN</strong><br />
<em>This article has covered the remainder of the core OOJS theory and syntax that we think you should know now. At this…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.info/class-inheritance" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.info/class-inheritance"><strong>Class inheritance</strong><br />
<em>Class inheritance is a way for one class to extend another class. So we can create new functionality on top of the…</em>javascript.info</a><a href="https://javascript.info/class-inheritance" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@happymishra66/inheritance-in-javascript-21d2b82ffa6f" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@happymishra66/inheritance-in-javascript-21d2b82ffa6f"><strong>Inheritance in JavaScript</strong><br />
<em>Detailed walk thorough of inheritance in JavaScript</em>medium.com</a><a href="https://medium.com/@happymishra66/inheritance-in-javascript-21d2b82ffa6f" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.sitepoint.com/simple-inheritance-javascript/" class="markup--anchor markup--p-anchor">https://www.sitepoint.com/simple-inheritance-javascript/</a>

<a href="https://codeburst.io/javascript-inheritance-25fe61ab9f85" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/javascript-inheritance-25fe61ab9f85"><strong>JavaScript — Inheritance, delegation patterns and Object linking</strong><br />
<em>Learn about inheritance in JavaScript (prototypal inheritance), behavior/object delegation pattern and objects linked…</em>codeburst.io</a><a href="https://codeburst.io/javascript-inheritance-25fe61ab9f85" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.knoldus.com/object-oriented-javascript-polymorphism-with-examples/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.knoldus.com/object-oriented-javascript-polymorphism-with-examples/"><strong>Object Oriented JavaScript: Polymorphism with examples</strong><br />
<em>Again this is not the advance topic of JavaScript but it relies under Object Oriented JavaScript &amp; polymorphism is one…</em>blog.knoldus.com</a><a href="https://blog.knoldus.com/object-oriented-javascript-polymorphism-with-examples/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/yld-blog/program-like-proteus-a-beginners-guide-to-polymorphism-in-javascript-867bea7c8be2" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/yld-blog/program-like-proteus-a-beginners-guide-to-polymorphism-in-javascript-867bea7c8be2"><strong>Program Like Proteus — A beginner’s guide to polymorphism in Javascript</strong><br />
medium.com</a><a href="https://medium.com/yld-blog/program-like-proteus-a-beginners-guide-to-polymorphism-in-javascript-867bea7c8be2" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/"><strong>Object-oriented JavaScript: A Deep Dive into ES6 Classes - SitePoint</strong><br />
<em>Often we need to represent an idea or concept in our programs - maybe a car engine, a computer file, a router, or a…</em>www.sitepoint.com</a><a href="https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://addyosmani.com/resources/essentialjsdesignpatterns/book/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://addyosmani.com/resources/essentialjsdesignpatterns/book/"><strong>Learning JavaScript Design Patterns</strong><br />
<em>An open-source book on JavaScript Design Patterns</em>addyosmani.com</a><a href="https://addyosmani.com/resources/essentialjsdesignpatterns/book/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know"><strong>JavaScript Design Patterns | DigitalOcean</strong><br />
<em>There are many times when one part of the application changes, other parts needs to be updated. In AngularJS, if the…</em>scotch.io</a><a href="https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://betterprogramming.pub/javascript-design-patterns-25f0faaaa15" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://betterprogramming.pub/javascript-design-patterns-25f0faaaa15"><strong>JavaScript Design Patterns</strong><br />
<em>The ultimate guide to the most useful design patterns</em>betterprogramming.pub</a><a href="https://betterprogramming.pub/javascript-design-patterns-25f0faaaa15" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/front-end-weekly/javascript-design-patterns-ed9d4c144c81" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/front-end-weekly/javascript-design-patterns-ed9d4c144c81"><strong>JavaScript Design Patterns</strong><br />
<em>Constructor Pattern</em>medium.com</a><a href="https://medium.com/front-end-weekly/javascript-design-patterns-ed9d4c144c81" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://seesparkbox.com/foundry/javascript_design_patterns" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://seesparkbox.com/foundry/javascript_design_patterns"><strong>Javascript Design Patterns: What They Are &amp; How To Use Them</strong><br />
<em>Developers often encounter coding problems in JavaScript that can be solved by using well-established design patterns…</em>seesparkbox.com</a><a href="https://seesparkbox.com/foundry/javascript_design_patterns" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.bitsrc.io/understanding-design-patterns-in-javascript-13345223f2dd" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.bitsrc.io/understanding-design-patterns-in-javascript-13345223f2dd"><strong>Understanding Design Patterns in JavaScript</strong><br />
<em>Learn About Various Design Patterns in JavaScript</em>blog.bitsrc.io</a><a href="https://blog.bitsrc.io/understanding-design-patterns-in-javascript-13345223f2dd" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/fbeline/Design-Patterns-JS" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/fbeline/Design-Patterns-JS"><strong>fbeline/design-patterns-JS</strong><br />
<em>Here you will find the 23 (GoF) design patterns implemented in JavaScript using both prototype and ES6 classes. You can…</em>github.com</a><a href="https://github.com/fbeline/Design-Patterns-JS" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://betterprogramming.pub/the-power-of-the-module-pattern-in-javascript-3c73f7cd10e8" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://betterprogramming.pub/the-power-of-the-module-pattern-in-javascript-3c73f7cd10e8"><strong>The Power of the Module Pattern in JavaScript</strong><br />
<em>Embellish your app with the module pattern</em>betterprogramming.pub</a><a href="https://betterprogramming.pub/the-power-of-the-module-pattern-in-javascript-3c73f7cd10e8" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/omensah/design-patterns-for-developers-using-javascript----part-one--b3e" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/omensah/design-patterns-for-developers-using-javascript----part-one--b3e"><strong>Design Patterns for Developers using JavaScript - Part One</strong><br />
<em>Most developers using JavaScript strives to write code that is readable, maintainable, and reusable because writing…</em>dev.to</a><a href="https://dev.to/omensah/design-patterns-for-developers-using-javascript----part-one--b3e" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/omensah/design-patterns-for-developers-using-javascript---part-two--3p39" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/omensah/design-patterns-for-developers-using-javascript---part-two--3p39"><strong>Design Patterns for Developers using JavaScript - Part Two</strong><br />
<em>In the previous article, we had a look at design patterns, its definition, history, and the incorporation into software…</em>dev.to</a><a href="https://dev.to/omensah/design-patterns-for-developers-using-javascript---part-two--3p39" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://levelup.gitconnected.com/design-patterns-in-modern-javascript-development-ec84d8be06ca" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://levelup.gitconnected.com/design-patterns-in-modern-javascript-development-ec84d8be06ca"><strong>Design patterns in modern JavaScript development</strong><br />
<em>Thoughts on effective communication in the design of software projects</em>levelup.gitconnected.com</a><a href="https://levelup.gitconnected.com/design-patterns-in-modern-javascript-development-ec84d8be06ca" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/carlillo/understanding-design-patterns-iterator-using-dev-to-and-medium-social-networks-3bdd" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/carlillo/understanding-design-patterns-iterator-using-dev-to-and-medium-social-networks-3bdd"><strong>Understanding Design Patterns: Iterator using Dev.to and Medium social networks!</strong><br />
<em>There are 23 classic design patterns, which are described in the original book, Design Patterns: Elements of Reusable…</em>dev.to</a><a href="https://dev.to/carlillo/understanding-design-patterns-iterator-using-dev-to-and-medium-social-networks-3bdd" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/kristijanfistrek/javascript-design-patterns-factory-pattern-562p" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/kristijanfistrek/javascript-design-patterns-factory-pattern-562p"><strong>JavaScript Design Patterns - Factory Pattern</strong><br />
<em>Welcome to my new development series where I try my best to explain design patterns by using JavaScript! In software…</em>dev.to</a><a href="https://dev.to/kristijanfistrek/javascript-design-patterns-factory-pattern-562p" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.plainenglish.io/javascript-design-pattern-module-pattern-555737eccecd" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.plainenglish.io/javascript-design-pattern-module-pattern-555737eccecd"><strong>JavaScript Design Pattern — Module Pattern</strong><br />
<em>One of the most common patterns in JavaScript</em>javascript.plainenglish.io</a><a href="https://javascript.plainenglish.io/javascript-design-pattern-module-pattern-555737eccecd" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://betterprogramming.pub/design-patterns-null-object-5ee839e37892" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://betterprogramming.pub/design-patterns-null-object-5ee839e37892"><strong>Design Patterns: Null Object</strong><br />
<em>Avoid conditional complexity using this pattern</em>betterprogramming.pub</a><a href="https://betterprogramming.pub/design-patterns-null-object-5ee839e37892" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/francescoxx/strategy-pattern-5oh" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/francescoxx/strategy-pattern-5oh"><strong>Strategy Pattern</strong><br />
<em>GitHub Link: https://github.com/FrancescoXX/Design-Patterns-Strategy-Javascript The Strategy pattern, also called…</em>dev.to</a><a href="https://dev.to/francescoxx/strategy-pattern-5oh" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/francescoxx/adapter-pattern-5bjk" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/francescoxx/adapter-pattern-5bjk"><strong>Adapter Pattern</strong><br />
<em>Github link: https://github.com/FrancescoXX/Design-Pattern-Adapter-Javascript The Adapter pattern is used to allow a…</em>dev.to</a><a href="https://dev.to/francescoxx/adapter-pattern-5bjk" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/jsmanifest/the-power-of-composite-pattern-in-javascript-2732" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/jsmanifest/the-power-of-composite-pattern-in-javascript-2732"><strong>The Power of Composite Pattern in JavaScript</strong><br />
<em>Find me on medium In this post, we will be going over the Composite Design Pattern in JavaScript. In... Tagged with…</em>dev.to</a><a href="https://dev.to/jsmanifest/the-power-of-composite-pattern-in-javascript-2732" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/bytebodger/in-defense-of-defensive-programming-k45" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/bytebodger/in-defense-of-defensive-programming-k45"><strong>In Defense of Defensive Programming</strong><br />
<em>NOTE: In this article I reference a validation library that I wrote called allow. It's now in an NPM package that can…</em>dev.to</a><a href="https://dev.to/bytebodger/in-defense-of-defensive-programming-k45" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.udacity.com/course/javascript-design-patterns--ud989" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.udacity.com/course/javascript-design-patterns--ud989"><strong>JavaScript Design Patterns | Udacity Free Courses</strong><br />
<em>Free Course Organizing Code in a Disorganized World Start Free Course About this Course This course covers methods for…</em>www.udacity.com</a><a href="https://www.udacity.com/course/javascript-design-patterns--ud989" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/getify/Functional-Light-JS/blob/master/manuscript/ch3.md" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/getify/Functional-Light-JS/blob/master/manuscript/ch3.md"><strong>getify/Functional-Light-JS</strong><br />
<em>Chapter 2 explored the core nature of JS functions, and laid the foundation for what makes a function an FP function…</em>github.com</a><a href="https://github.com/getify/Functional-Light-JS/blob/master/manuscript/ch3.md" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://www.codementor.io/michelre/use-function-composition-in-javascript-gkmxos5mj" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.codementor.io/michelre/use-function-composition-in-javascript-gkmxos5mj"><strong>Use function composition in JavaScript | Codementor</strong><br />
<em>Prerequisite: I use currying in this post, so if you don't know about that, I encourage you to read my previous post…</em>www.codementor.io</a><a href="https://www.codementor.io/michelre/use-function-composition-in-javascript-gkmxos5mj" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.benestudio.co/currying-in-javascript-es6-540d2ad09400" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.benestudio.co/currying-in-javascript-es6-540d2ad09400"><strong>Currying in JavaScript ES6</strong><br />
<em>Currying can give you a deeper understanding to JavaScript. Let’s see how it can be done with arrow functions!</em>blog.benestudio.co</a><a href="https://blog.benestudio.co/currying-in-javascript-es6-540d2ad09400" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@pragyan88/writing-middleware-composition-and-currying-elegance-in-javascript-8b15c98a541b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@pragyan88/writing-middleware-composition-and-currying-elegance-in-javascript-8b15c98a541b"><strong>Writing Middleware —Composition and Currying Elegance in JavaScript</strong><br />
<em>Javascript is an elegant and beautiful language which allows the developers to have the flexibility to move between the…</em>medium.com</a><a href="https://medium.com/@pragyan88/writing-middleware-composition-and-currying-elegance-in-javascript-8b15c98a541b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/hackernoon/javascript-functional-composition-for-every-day-use-22421ef65a10" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/hackernoon/javascript-functional-composition-for-every-day-use-22421ef65a10"><strong>Functional JavaScript: Function Composition For Every Day Use.</strong><br />
<em>Function composition has got to be my favorite part of functional programming. I hope to provide you with a good real…</em>medium.com</a><a href="https://medium.com/hackernoon/javascript-functional-composition-for-every-day-use-22421ef65a10" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/@acparas/what-i-learned-today-july-2-2017-ab9a46dbf85f" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@acparas/what-i-learned-today-july-2-2017-ab9a46dbf85f"><strong>What I Learned Today 💡 July 2, 2017</strong><br />
<em>Functional Composition: compose() and pipe()</em>medium.com</a><a href="https://medium.com/@acparas/what-i-learned-today-july-2-2017-ab9a46dbf85f" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://busypeoples.github.io/post/functional-composing-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://busypeoples.github.io/post/functional-composing-javascript/"><strong>Why The Hipsters Compose Everything: Functional Composing In JavaScript</strong><br />
<em>Lodash and Underscore are everywhere and still there is this one supper efficient method that actually only those…</em>busypeoples.github.io</a><a href="http://busypeoples.github.io/post/functional-composing-javascript/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://jrsinclair.com/articles/2016/gentle-introduction-to-functional-javascript-functions/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://jrsinclair.com/articles/2016/gentle-introduction-to-functional-javascript-functions/"><strong>A Gentle Introduction to Functional JavaScript: Part 3</strong><br />
<em>This is part three of a four-part series introducing 'functional' programming in JavaScript. In the last article we saw…</em>jrsinclair.com</a><a href="https://jrsinclair.com/articles/2016/gentle-introduction-to-functional-javascript-functions/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://jsleao.wordpress.com/2015/02/22/curry-and-compose-why-you-should-be-using-something-like-ramda-in-your-code/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://jsleao.wordpress.com/2015/02/22/curry-and-compose-why-you-should-be-using-something-like-ramda-in-your-code/"><strong>Curry And Compose (why you should be using something like ramda in your code)</strong><br />
<em>When it comes to functional programming, the main cornerstone is composability, the ability to create new functions…</em>jsleao.wordpress.com</a><a href="https://jsleao.wordpress.com/2015/02/22/curry-and-compose-why-you-should-be-using-something-like-ramda-in-your-code/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://vanslaars.io/post/create-pipe-function/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://vanslaars.io/post/create-pipe-function/"><strong>Function Composition in JavaScript with Pipe</strong><br />
<em>December 13, 2016 This post uses ES6 syntax. The same things can be accomplished with ES5, but it would require more…</em>vanslaars.io</a><a href="https://vanslaars.io/post/create-pipe-function/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developer.telerik.com/featured/practical-functional-javascript-ramda/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.telerik.com/featured/practical-functional-javascript-ramda/"><strong>Practical Functional Javascript with Ramda - Telerik Blogs</strong><br />
<em>Article co-authored by: Andrew D'Amelio and Yuri Takhteyev At rangle.io we've been fans of the functional programming…</em>developer.telerik.com</a><a href="https://developer.telerik.com/featured/practical-functional-javascript-ramda/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://hackernoon.com/the-beauty-in-partial-application-currying-and-function-composition-d885bdf0d574" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/the-beauty-in-partial-application-currying-and-function-composition-d885bdf0d574"><strong>The beauty in Partial Application, Currying, and Function Composition.</strong><br />
<em>Story Time</em>hackernoon.com</a><a href="https://hackernoon.com/the-beauty-in-partial-application-currying-and-function-composition-d885bdf0d574" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/javascript-scene/curry-or-partial-application-8150044c78b8" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/javascript-scene/curry-or-partial-application-8150044c78b8"><strong>Curry or Partial Application?</strong><br />
<em>The Difference Between<br />
Partial Application and Curry</em>medium.com</a><a href="https://medium.com/javascript-scene/curry-or-partial-application-8150044c78b8" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://benalman.com/news/2012/09/partial-application-in-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://benalman.com/news/2012/09/partial-application-in-javascript/"><strong>Partial Application in JavaScript</strong><br />
<em>Unless you've used another functional programming language such as ML or Haskell, concepts such as partial application…</em>benalman.com</a><a href="http://benalman.com/news/2012/09/partial-application-in-javascript/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://hackernoon.com/partial-application-of-functions-dbe7d9b80760" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://hackernoon.com/partial-application-of-functions-dbe7d9b80760"><strong>Partial Application of Functions</strong><br />
<em>Providing function with fewer arguments than it expects is called Partial Application of functions.</em>hackernoon.com</a><a href="https://hackernoon.com/partial-application-of-functions-dbe7d9b80760" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://towardsdatascience.com/javascript-currying-vs-partial-application-4db5b2442be8" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://towardsdatascience.com/javascript-currying-vs-partial-application-4db5b2442be8"><strong>Javascript- Currying VS Partial Application</strong><br />
<em>A lot of people get confused in between currying and partial application and many of us do not know what, where and…</em>towardsdatascience.com</a><a href="https://towardsdatascience.com/javascript-currying-vs-partial-application-4db5b2442be8" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="http://raganwald.com/2015/04/01/partial-application.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="http://raganwald.com/2015/04/01/partial-application.html"><strong>Partial Application in ECMAScript 2015</strong><br />
<em>Some of this material originally appeared in What's the difference between Currying and Partial Application? Here it is…</em>raganwald.com</a><a href="http://raganwald.com/2015/04/01/partial-application.html" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://joecortopassi.com/articles/functional-composition-in-javascript/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://joecortopassi.com/articles/functional-composition-in-javascript/"><strong>Functional Composition in Javascript</strong><br />
<em>Functional composition is when you take two or more functions, and make one a single function out of them. When you…</em>joecortopassi.com</a><a href="https://joecortopassi.com/articles/functional-composition-in-javascript/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<a href="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-1-1f15e387e536" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-1-1f15e387e536"><strong>So You Want to be a Functional Programmer (Part 1)</strong><br />
<em>Taking that first step to understanding Functional Programming concepts is the most important and sometimes the most…</em>cscalfani.medium.com</a><a href="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-1-1f15e387e536" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-2-7005682cec4a" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-2-7005682cec4a"><strong>So You Want to be a Functional Programmer (Part 2)</strong><br />
<em>Taking that first step to understanding Functional Programming concepts is the most important and sometimes the most…</em>cscalfani.medium.com</a><a href="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-2-7005682cec4a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-3-1b0fd14eb1a7" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-3-1b0fd14eb1a7"><strong>So You Want to be a Functional Programmer (Part 3)</strong><br />
<em>Taking that first step to understanding Functional Programming concepts is the most important and sometimes the most…</em>cscalfani.medium.com</a><a href="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-3-1b0fd14eb1a7" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-4-18fbe3ea9e49" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-4-18fbe3ea9e49"><strong>So You Want to be a Functional Programmer (Part 4)</strong><br />
<em>Taking that first step to understanding Functional Programming concepts is the most important and sometimes the most…</em>cscalfani.medium.com</a><a href="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-4-18fbe3ea9e49" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-5-c70adc9cf56a" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-5-c70adc9cf56a"><strong>So You Want to be a Functional Programmer (Part 5)</strong><br />
<em>Taking that first step to understanding Functional Programming concepts is the most important and sometimes the most…</em>cscalfani.medium.com</a><a href="https://cscalfani.medium.com/so-you-want-to-be-a-functional-programmer-part-5-c70adc9cf56a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/an-introduction-to-the-basic-principles-of-functional-programming-a2c2a15c84" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/an-introduction-to-the-basic-principles-of-functional-programming-a2c2a15c84"><strong>An Introduction to the basic principles of Functional Programming</strong><br />
<em>After a long time learning and working with object-oriented programming, I took a step back to think about system…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/an-introduction-to-the-basic-principles-of-functional-programming-a2c2a15c84" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/the-renaissance-developer/concepts-of-functional-programming-in-javascript-6bc84220d2aa" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/the-renaissance-developer/concepts-of-functional-programming-in-javascript-6bc84220d2aa"><strong>Concepts of Functional Programming in Javascript</strong><br />
<em>After a long time learning and working with object-oriented programming, I took a step back to think about system…</em>medium.com</a><a href="https://medium.com/the-renaissance-developer/concepts-of-functional-programming-in-javascript-6bc84220d2aa" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/an-introduction-to-functional-programming-style-in-javascript-71fcc050f064" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/an-introduction-to-functional-programming-style-in-javascript-71fcc050f064"><strong>An Introduction to Functional Programming Style in JavaScript</strong><br />
<em>In recent years there has been a tectonic shift happening between traditional programming and Functional Programming…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/an-introduction-to-functional-programming-style-in-javascript-71fcc050f064" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.freecodecamp.org/a-practical-guide-to-writing-more-functional-javascript-db49409f71" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.freecodecamp.org/a-practical-guide-to-writing-more-functional-javascript-db49409f71"><strong>A practical guide to writing more functional JavaScript</strong><br />
<em>Functional programming is great. With the introduction of React, more and more JavaScript front-end code is being…</em>medium.freecodecamp.org</a><a href="https://medium.freecodecamp.org/a-practical-guide-to-writing-more-functional-javascript-db49409f71" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/benlesh/a-simple-explanation-of-functional-pipe-in-javascript-2hbj" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/benlesh/a-simple-explanation-of-functional-pipe-in-javascript-2hbj"><strong>A simple explanation of functional pipe in JavaScript</strong><br />
<em>Sometimes I'm asked why we don't have "dot-chaining" in RxJS anymore, or why RxJS made the switch to use pipe. There…</em>dev.to</a><a href="https://dev.to/benlesh/a-simple-explanation-of-functional-pipe-in-javascript-2hbj" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/ryanmcdermott/clean-code-javascript" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/ryanmcdermott/clean-code-javascript"><strong>ryanmcdermott/clean-code-javascript</strong><br />
<em>Software engineering principles, from Robert C. Martin's book , adapted for JavaScript. This is not a style guide. It's…</em>github.com</a><a href="https://github.com/ryanmcdermott/clean-code-javascript" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://blog.risingstack.com/javascript-clean-coding-best-practices-node-js-at-scale/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://blog.risingstack.com/javascript-clean-coding-best-practices-node-js-at-scale/"><strong>JavaScript Clean Coding Best Practices | @RisingStack</strong><br />
<em>Writing clean code is what you must know and do in order to call yourself a professional developer. There is no…</em>blog.risingstack.com</a><a href="https://blog.risingstack.com/javascript-clean-coding-best-practices-node-js-at-scale/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://kevin-peters.medium.com/function-parameters-in-javascript-clean-code-4caac109159b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://kevin-peters.medium.com/function-parameters-in-javascript-clean-code-4caac109159b"><strong>Function parameters in JavaScript — Clean Code</strong><br />
<em>In my time as a web developer I have to deal a lot with JavaScript Code. I love JavaScript, no question asked. But…</em>kevin-peters.medium.com</a><a href="https://kevin-peters.medium.com/function-parameters-in-javascript-clean-code-4caac109159b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://codeburst.io/keeping-your-code-clean-d30bcffd1a10" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://codeburst.io/keeping-your-code-clean-d30bcffd1a10"><strong>Keeping your code clean</strong><br />
<em>I settled down in my sit, cranking the solution with my team members. “We must win this” I said, burying myself deep…</em>codeburst.io</a><a href="https://codeburst.io/keeping-your-code-clean-d30bcffd1a10" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://www.sitepoint.com/modern-javascript-best-practices/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://www.sitepoint.com/modern-javascript-best-practices/"><strong>Best Practices for Using Modern JavaScript Syntax - SitePoint</strong><br />
<em>This article is featured in our book, Modern JavaScript is evolving quickly to meet the changing needs of new…</em>www.sitepoint.com</a><a href="https://www.sitepoint.com/modern-javascript-best-practices/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://github.com/cross-js/cross-js" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/cross-js/cross-js"><strong>cross-js/cross-js</strong><br />
<em>Adopting CrossJS style means your javascript can work in any environment without being dependent on any core…</em>github.com</a><a href="https://github.com/cross-js/cross-js" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/ganderzz/on-writing-clean-code-57cm" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/ganderzz/on-writing-clean-code-57cm"><strong>Writing Clean Code</strong><br />
<em>We can all agree that writing clean code is important. It makes it easier to work in a team, and even if we're a single…</em>dev.to</a><a href="https://dev.to/ganderzz/on-writing-clean-code-57cm" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/nityeshaga/writing-clean-code-and-the-practice-of-programming-actionable-advice-for-beginners-5f0k" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/nityeshaga/writing-clean-code-and-the-practice-of-programming-actionable-advice-for-beginners-5f0k"><strong>Writing Clean Code and The Practice of Programming: Actionable advice for beginners</strong><br />
<em>"The purpose of style is to make the code easy to read for yourself and others, and good style is crucial to good…</em>dev.to</a><a href="https://dev.to/nityeshaga/writing-clean-code-and-the-practice-of-programming-actionable-advice-for-beginners-5f0k" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/d_ir/clean-code-dirty-code-human-code-6nm" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/d_ir/clean-code-dirty-code-human-code-6nm"><strong>Clean code, dirty code, human code</strong><br />
<em>Last week, Dan Abramov posted a very personal and humbling blog post entitled Goodbye, Clean Code. I saw a tweet about…</em>dev.to</a><a href="https://dev.to/d_ir/clean-code-dirty-code-human-code-6nm" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://dev.to/taillogs/practical-ways-to-write-better-javascript-26d4" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/taillogs/practical-ways-to-write-better-javascript-26d4"><strong>Practical Ways to Write Better JavaScript</strong><br />
<em>Solid methods of improving your JS. Tagged with javascript, webdev, beginners, react.</em>dev.to</a><a href="https://dev.to/taillogs/practical-ways-to-write-better-javascript-26d4" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

≡

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [July 3, 2021](https://medium.com/p/633549469528).

<a href="https://medium.com/@bryanguner/absolutely-everything-you-could-need-to-know-about-how-javascript-works-633549469528" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.

Adding CSS To Your HTML
=======================

For beginners … very picture heavy since CSS is such a visual discipline!

------------------------------------------------------------------------

### Adding CSS To Your HTML

#### For beginners … very picture heavy since CSS is such a visual discipline!

<figure><img src="https://cdn-images-1.medium.com/max/800/1*3hnCIyXstRSHgYO5-z-51g.png" class="graf-image" /></figure>### Getting CSS Into Your HTML

    <!-- example.html -->
    <!DOCTYPE html>
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css"
        />
        <link rel="stylesheet" href="/styles/site.css" />
      </head>
      <body></body>
    </html>

-   <span id="36f1">*To connect your CSS sheet to your HTML page, use the link tag like so.*</span>
-   <span id="f743">Many developers use External pre-written CSS stylesheets for consistent design.</span>
-   <span id="af3f">You can connect multiple stylesheets.</span>

### CSS Selectors

-   <span id="2d5b">`CSS Selector` : Applies styles to a specific DOM element(s), there are various types:</span>
-   <span id="29cd">`Type Selectors` : Matches by node name.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*GOzh0U_yFtsOo9Hq" class="graf-image" /></figure>-   <span id="e624">`Class Selectors` : Matches by class name.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*WMQXdyBA2MeUYoVvY0Kjew.png" class="graf-image" /></figure>-   <span id="8c31">`ID Selectors` : Matches by ID name.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*uyRa6tM8Jlg648Rl" class="graf-image" /></figure>-   <span id="d011">`Universal Selectors` : Selects all HTML elements on a page.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*LfKazZMelOZrcOsp.jpg" class="graf-image" /></figure>-   <span id="e143">`Attribute Selectors` : Matches elements based on the prescence or value of a given attribute. (i.e. a\[title\] will match all a elements with a title attribute)</span>

<!-- -->

    /* Type selector */
    div {
      background-color: #000000;
    }

    /* Class selector */
    .active {
      color: #ffffff;
    }

    /* ID selector */
    #list-1 {
      border: 1px solid gray;
    }

    /* Universal selector */
    * {
      padding: 10px;
    }

    /* Attribute selector */
    a[title] {
      font-size: 2em;
    }

#### **Class Selectors**

-   <span id="45c5">Used to select all elements of a certain class denoted with a `.[class name]`</span>
-   <span id="f9e4">You can assign multiple classes to a DOM element by separating them with a space.</span>

#### **Compound Class Selectors**

<figure><img src="https://cdn-images-1.medium.com/max/800/1*iIOiP-ML_k6g0yTxZQyQ4A.png" class="graf-image" /></figure>-   <span id="bcf1">To get around accidentally selecting elements with multiple classes beyond what we want to grab we can chain dots.</span>
-   <span id="a54c">TO use a compound class selector just append the classes together when referencing them in the CSS.</span>

<!-- -->

    <div class="box yellow"></div>
    <div class="box orange"></div>
    <div class="circle orange"></div>

-   <span id="e8ca">i.e. .box.yellow will select only the first element.</span>
-   <span id="34a4">**KEEP IN MIND** that if you do include a space it will make the selector into a *descendant selector*.</span>

<!-- -->

    h1#heading,
    h2.subheading {
      font-style: italic;
    }

-   <span id="b382">When we want to target all `h1` tags with the id of `heading`.</span>

#### **CSS Combinators**

-   <span id="383a">CSS Combinators are used to combine other selectors into more complex or targeted selectors — they are very powerful!</span>
-   <span id="2805">Be careful not to use too many of them as they will make your CSS far too complex.</span>

#### `Descendant Selectors`

<figure><img src="https://cdn-images-1.medium.com/max/800/1*YPkGcUc4gf2WtJYdf6Yvmg.png" class="graf-image" /></figure>-   <span id="5e1b">Separated by a space.</span>
-   <span id="5d0b">Selects all descendants of a parent container.</span>

#### `Direct Child Selectors`

<figure><img src="https://cdn-images-1.medium.com/max/800/0*SByLFbio2RGGnFHj.jpg" class="graf-image" /></figure>-   <span id="47ef">Indicated with a `>`.</span>
-   <span id="eff3">Different from descendants because it only affects the direct children of an element.</span>

#### CSS:

    .menu > .is-active { background-color: #ffe0b2; }

#### HTML:

    <body> <div class=”menu”> <div class=”is-active”>Belka</div> <div> <div class=”is-active”>Strelka</div> </div> </div> </body> <div class=”is-active”> Laika </div> </body>

-   <span id="b452">Belka would be the only element selected.</span>

#### `Adjacent Sibling Selectors`

<figure><img src="https://cdn-images-1.medium.com/max/800/0*m0yPz3xJPeP3br2C.png" class="graf-image" /></figure>-   <span id="5dca">Uses the `+` symbol.</span>
-   <span id="9063">Used for elements that directly follow one another and who both have the same parent.</span>

<!-- -->

    h1 + h2 { font-style: italic;   }  

    //HTML:

    <h1>Big header</h1> <h2>This one is styled because it is directly adjacent to the H1</h2> <h2>This one is NOT styled because there is no H1 right before it</h2>

    h1 + h2 { font-style: italic;   }  

    <h1>Big header</h1> <h2>This one is styled because it is directly adjacent to the H1</h2> <h2>This one is NOT styled because there is no H1 right before it</h2>

#### **Pseudo-Classes**

<figure><img src="https://cdn-images-1.medium.com/max/800/1*XfxhRpW1_nd02miTi4s_PA.png" alt="courtesy of Pseudo-classes — CSS: Cascading Style Sheets | MDN (mozilla.org)" class="graf-image" /><figcaption>courtesy of <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes" class="markup--anchor markup--figure-anchor">Pseudo-classes — CSS: Cascading Style Sheets | MDN (mozilla.org)</a></figcaption></figure>-   <span id="0b5c">`Pseudo-Class` : Specifies a special state of the seleted element(s) and does not refer to any elements or attributes contained in the DOM.</span>
-   <span id="1c1d">Format is a `Selector:Pseudo-Class Name` or `A:B`</span>

<!-- -->

    a:hover { 
    font-family: "Roboto Condensed", sans-serif; 
    color: #4fc3f7;
    text-decoration: none; 
    border-bottom: 2px solid #4fc3f7;
    }

> Some common pseudo-classes that are frequently used are:

-   <span id="1aac">`active` : 'push down', when elements are activated.</span>
-   <span id="587a">`checked` : applies to things like radio buttons or checkbox inputs.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*wg0YeoQ2mZKHWXaa.gif" class="graf-image" /></figure>-   <span id="cf58">`disabled` : any disabled element.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*KmzLwGMr_FsbHF4u.gif" class="graf-image" /></figure>-   <span id="1b81">`first-child` : first element in a group of children/siblings.</span>
-   <span id="eefb">`focus` : elements that have current focus.</span>
-   <span id="c1da">`hover` : elements that have cursor hovering over it.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*X7-ym7Relt83npDe.gif" class="graf-image" /></figure>-   <span id="128b">`invalid` : any form elements in an invalid state from client-side form validation.</span>
-   <span id="8fe0">`last-child` : last element in a group of children/siblings.</span>
-   <span id="fac8">`not(selector)` : elements that do not match the provided selector.</span>
-   <span id="037a">`required` : form elements that are required.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Cs9Jf4O0FHQB7Okc.gif" class="graf-image" /></figure>-   <span id="2d63">`valid` : form elements in a valid state.</span>
-   <span id="7eaf">`visited` : anchor tags of which the user has already visited the URL that the href points to.</span>

#### `Pseudo-Selectors`

-   <span id="571c">Used to create pseudo-elements as children of the elements to which the property applies.</span>
-   <span id="8995">`::after`</span>
-   <span id="9e9b">`::before`</span>

<!-- -->

    <style>
      p::before {
        background-color: lightblue;
        border-right: 4px solid violet;
        content: ":-) ";
        margin-right: 4px;
        padding-left: 4px;
      }
    </style>
    <p>This is the first paragraph</p>
    <p>This is the second paragraph</p>
    <p>This is the third paragraph</p>

-   <span id="22c4">Will add some blue smiley faces before the p tag elements.</span>

#### **CSS Rules**

-   <span id="66b6">`CSS Rule` : Collection of single or compound selectors, a curly brace, zero or more properties</span>
-   <span id="9ec3">`CSS Rule Specificity` : Sometimes CSS rules will contain multiple elements and may have overlapping properties rules for those same elements - there is an algorithm in CSS that calculates which rule takes precedence.</span>
-   <span id="bc57">`The Four Number Calculation`** : listed in increasing order of importance.**</span>

1.  <span id="c45f">Who has the most IDs? If no one, continue.</span>
2.  <span id="3aff">Who has the most classes? If no one, continue.</span>
3.  <span id="b70b">Who has the most tags? If no one, continue.</span>
4.  <span id="59f0">Last Read in the browser wins.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Z0iSQ0bhAiK5gYhk.png" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*RpC3i4EQM_HDRyUS.png" class="graf-image" /></figure><style>
      .box {
        width: 50px;
        height: 50px;
        border: 1px solid black;
      }
      .orange {
        background-color: orange;
      }
      .yellow {
        background-color: yellow;
        border: 1px solid purple;
      }
    </style>
    <div class="box yellow"></div>
    <div class="box orange"></div>

-   <span id="2b20">Coming back to our example where all the CSS Rules have tied, the last step 4 wins out so our element will have a `purple border`.</span>

### CSS: Type, Properties, and Imports

#### **Typography**

-   <span id="af08">`font-family` : change the font.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*8298p-Vlu15C-pdw.png" class="graf-image" /></figure>-   <span id="9771">Remember that not all computers have the same fonts on them.</span>
-   <span id="d248">You can import web fonts via an api by using</span>
-   <span id="8578">`@import url('https://fonts.googleapis.com/css2?family=Liu+Jian+Mao+Cao&display=swap');` and pasting it st the top of your CSS file.</span>
-   <span id="82b1">And then reference it in your font-family.</span>
-   <span id="c651">`font-size` : Changes the size of your font.</span>
-   <span id="a7dc">Keep in mind the two kind of units CSS uses:</span>
-   <span id="c034">`Absolute` : `Pixels`, Points, Inches, Centimeters.</span>
-   <span id="7221">`Relative` : Em, Rem.</span>
-   <span id="80e1">Em: Calculating the size relative to the previous div (bubbles down)</span>
-   <span id="6c9e">Rem: Calculates relative to the parent element always.</span>
-   <span id="0f35">`font-style` : Used to set a font to italics.</span>
-   <span id="20a3">`font-weight` : Used to make a font bold.</span>
-   <span id="ba17">`text-align` : Used to align your text to the left, center, or right.</span>
-   <span id="e694">`text-decoration` : Use to put lines above, through, or under text. Lines can be solid, dashed, or wavy!</span>
-   <span id="0777">`text-transform` : Used to set text to all lowercase, uppercase, or capitalize all words.</span>

#### **Background-Images**

-   <span id="a7cc">You can use the background-image property to set a background image for an element.</span>

### CSS: Colors, Borders, and Shadows

#### **Colors**

-   <span id="6887">You can set colors in CSS in three popular ways: by name, by hexadecimal RGB value, and by their decimal RGB value.</span>
-   <span id="1d78">rgba() is used to make an rbg value more transparent, the `a` is used to specify the `alpha channel`.</span>
-   <span id="a422">**Color** : Property used to change the color of text.</span>
-   <span id="6bcb">**Background-Color** : Property to change the backgrounf color of an element.</span>

#### **Borders**

-   <span id="cce0">Borders take three values: The width of the border, the style (i.e. solid, dotted, dashed), color of the border.</span>

#### **Shadows**

-   <span id="6391">There are two kinds of shadows in CSS: `box shadows` and `text shadows`.</span>
-   <span id="7fc1">Box refers to HTML elements.</span>
-   <span id="8c59">Text refers to text.</span>
-   <span id="266d">Shadows take values such as, the horizontal & vertical offsets of the shadow, the blur radius of the shadow, the spread radius, and of course the colors.</span>

### My Blog:

<a href="https://bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>my resource sharing and blog site ... centered mostly on web development and just a bit of audio production / generally…</em>bgoonz-blog.netlify.app</a><a href="https://bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Grid Cheat Sheet:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*8cBZz0yj-ND3af2uh7J-dw.png" class="graf-image" /></figure>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [August 22, 2021](https://medium.com/p/3a17ba25ba82).

<a href="https://medium.com/@bryanguner/adding-css-to-your-html-3a17ba25ba82" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.

All The Things You Can Embed In A Medium Article
================================================

I have this innate desire to make everything available all in one place and it’s usually an unnecessary waste of time… but here I will…

------------------------------------------------------------------------

### All The Things You Can Embed In A Medium Article

#### I have this innate desire to make everything available all in one place and it’s usually an unnecessary waste of time… but here I will conduct and ‘experiment’ where I intentionally indulge that tendency.

Here you can see in just the first frame of my blog site 5 different embedded widgets that I inject onto nearly every page of the site using javascript to append my widgets to various anchor points in the html.

<figure><img src="https://cdn-images-1.medium.com/max/1200/1*8Td2sElycsUj67bbm5m_0w.png" class="graf-image" /></figure>

### Update :

### Table with Airtable:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*zost4Lf7pDfZdMf7b_hH4w.png" class="graf-image" /></figure>### Math With <a href="https://math.embed.fun/" class="markup--anchor markup--h3-anchor">https://math.embed.fun/</a>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*zost4Lf7pDfZdMf7b_hH4w.png" class="graf-image" /></figure>### 1.) CodePen:

<figure><img src="https://cdn-images-1.medium.com/max/600/1*ub0xEha5Nrq60qU1FspjAQ.png" class="graf-image" /></figure><a href="https://codepen.io/bgoonz/pen/poPOqEO" class="markup--anchor markup--pullquote-anchor">For this next inclusion I will kill two birds with one stone… I will embed a CodePen…who’s contents are an embedded version of my twitter feed…</a>

#### If you wanna get really meta about it you can also embed your medium articles within a medium article…

<figure><img src="https://cdn-images-1.medium.com/max/800/1*zost4Lf7pDfZdMf7b_hH4w.png" class="graf-image" /></figure>### 2.) Upscribe Form:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*zost4Lf7pDfZdMf7b_hH4w.png" class="graf-image" /></figure>### 3.) Play.ht Medium Article To Voice-Audio Transcription:

-   <span id="66fb">→ <a href="https://play.ht/" class="markup--anchor markup--li-anchor">Link</a></span>

#### Play.ht offers the following services:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*GSZM_XmBIe4sgMtYN3e57A.png" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/1*zost4Lf7pDfZdMf7b_hH4w.png" class="graf-image" /></figure>### 4.) : Repl.it:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*zost4Lf7pDfZdMf7b_hH4w.png" class="graf-image" /></figure>### 5.) :You can also embed a JSFiddle like a code-sandbox.

<a href="https://codesandbox.io/s/bigo-forked-dhpjq" class="markup--anchor markup--p-anchor">bigO (forked) — CodeSandbox</a>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*zost4Lf7pDfZdMf7b_hH4w.png" class="graf-image" /></figure>#### 6.) :GIF :

<figure><img src="https://cdn-images-1.medium.com/max/800/0*S0kSybjoWZP08__p.gif" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/1*zost4Lf7pDfZdMf7b_hH4w.png" class="graf-image" /></figure>### 7.) Dribble:

<a href="https://dribbble.com/shots/15796789-Mihir-Beg-Muisc?utm_source=Clipboard_Shot&amp;utm_campaign=bgoonz4242&amp;utm_content=Mihir%20Beg%20Muisc&amp;utm_medium=Social_Share&amp;utm_source=Clipboard_Shot&amp;utm_campaign=bgoonz4242&amp;utm_content=Mihir%20Beg%20Muisc&amp;utm_medium=Social_Share" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dribbble.com/shots/15796789-Mihir-Beg-Muisc?utm_source=Clipboard_Shot&amp;utm_campaign=bgoonz4242&amp;utm_content=Mihir%20Beg%20Muisc&amp;utm_medium=Social_Share&amp;utm_source=Clipboard_Shot&amp;utm_campaign=bgoonz4242&amp;utm_content=Mihir%20Beg%20Muisc&amp;utm_medium=Social_Share"><strong>Mihir Beg Muisc</strong><br />
<em>Mihir Beg Muisc designed by Bryan Guner. Connect with them on Dribbble; the global community for designers and creative…</em>dribbble.com</a><a href="https://dribbble.com/shots/15796789-Mihir-Beg-Muisc?utm_source=Clipboard_Shot&amp;utm_campaign=bgoonz4242&amp;utm_content=Mihir%20Beg%20Muisc&amp;utm_medium=Social_Share&amp;utm_source=Clipboard_Shot&amp;utm_campaign=bgoonz4242&amp;utm_content=Mihir%20Beg%20Muisc&amp;utm_medium=Social_Share" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*zost4Lf7pDfZdMf7b_hH4w.png" class="graf-image" /></figure>### 8.) SlideShare:

-   <span id="cd54"><a href="https://www.slideshare.net/" class="markup--anchor markup--li-anchor">link</a></span>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*zost4Lf7pDfZdMf7b_hH4w.png" class="graf-image" /></figure>### 9.)Google Forms/Quizzes :

<figure><img src="https://cdn-images-1.medium.com/max/800/1*zost4Lf7pDfZdMf7b_hH4w.png" class="graf-image" /></figure>### 10.) YouTube Videos:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*zost4Lf7pDfZdMf7b_hH4w.png" class="graf-image" /></figure>### 11.) 360 Degree Photos from Kuula.com:

<figure><img src="https://cdn-images-1.medium.com/max/800/1*zost4Lf7pDfZdMf7b_hH4w.png" class="graf-image" /></figure>### 13.) A tweet:

> [](https://twitter.com/bgooonz/status/1423402910843604996?s=20)

### 14.) A Spotify Playlist.

#### And for good measure a SoundCloud track:

### 15.) Infographics:

### TBC…..

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [August 6, 2021](https://medium.com/p/b03a85c65d86).

<a href="https://medium.com/@bryanguner/all-the-things-you-can-embed-in-a-medium-article-b03a85c65d86" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.

An Introduction to Markdown (Bonus Markdown Templates Included)
===============================================================

Basic Syntax Guide

------------------------------------------------------------------------

### An Introduction to Markdown (Bonus Markdown Templates Included)

<figure><img src="https://cdn-images-1.medium.com/max/800/0*oy6szzmI0FdRUiTd.png" class="graf-image" /></figure><a href="https://github.com/bgoonz/Markdown-Templates.git" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz/Markdown-Templates.git"><strong>bgoonz/Markdown-Templates</strong><br />
<em>One Paragraph of project description goes here These instructions will get you a copy of the project up and running on…</em>github.com</a><a href="https://github.com/bgoonz/Markdown-Templates.git" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Basic Syntax Guide

This topic is meant to give you a very basic overview of how Markdown works, showing only some of the most common operations you use most frequently. Keep in mind that you can also use the Edit menus to inject markdown using the toolbar, which serves as a great way to see how Markdown works. However, Markdown’s greatest strength lies in its simplicity and keyboard friendly approach that lets you focus on writing your text and staying on the keyboard.

### What is Markdown

Markdown is very easy to learn and get comfortable with due it’s relatively small set of markup ‘commands’. It uses already familiar syntax to represent common formatting operations. Markdown understands basic line breaks so you can generally just type text.

Markdown also allows for raw HTML inside of a markdown document, so if you want to embed something more fancy than what Markdowns syntax can do you can always fall back to HTML. However to keep documents readable that’s generally not recommended.

### Basic Markdown Syntax

The following are a few examples of the most common things you are likely to do with Markdown while building typical documentation.

### Bold and Italic

    markdown

    This text **is bold**. 
    This text *is italic*.

This text is bold.  
This text *is italic*.

### Header Text

    markdown

    # Header 1
    ## Header 2
    ### Header 3
    #### Header 4
    ##### Header 5
    ###### Header 6

### Header 1

### Header 2

### Header 3

#### Header 4

Header 5Header 6

### Line Continuation

By default Markdown adds paragraphs at double line breaks. Single line breaks by themselves are simply wrapped together into a single line. If you want to have soft returns that break a single line, add two spaces at the end of the line.

    markdown

    This line has a paragraph break at the end (empty line after).

    Theses two lines should display as a single
    line because there's no double space at the end.

    The following line has a soft break at the end (two spaces at end)  
    This line should be following on the very next line.

This line has a paragraph break at the end (empty line after).

Theses two lines should display as a single line because there’s no double space at the end.

The following line has a soft break at the end (two spaces at end)  
This line should be following on the very next line.

### Links

    markdown

    [Help Builder Web Site](http://helpbuilder.west-wind.com/)

<a href="http://helpbuilder.west-wind.com/" class="markup--anchor markup--p-anchor">Help Builder Web Site</a>

If you need additional image tags like targets or title attributes you can also embed HTML directly:

    markdown

    Go the Help Builder sitest Wind site: <a href="http://west-wind.com/" target="_blank">Help Builder Site</a>.

### Images

    markdown

    ![Help Builder Web Site](https://helpbuilder.west-wind.com/images/HelpBuilder_600.png)

<figure><img src="https://cdn-images-1.medium.com/max/800/0*ibU0D-Zr0qDT5h3z.png" class="graf-image" /></figure>### Block Quotes

Block quotes are callouts that are great for adding notes or warnings into documentation.

    markdown

    > ###  Headers break on their own
    > Note that headers don't need line continuation characters 
    as they are block elements and automatically break. Only text
    lines require the double spaces for single line breaks.

> *Headers break on their own*

> *Note that headers don’t need line continuation characters as they are block elements and automatically break. Only text lines require the double spaces for single line breaks.*

### Fontawesome Icons

Help Builder includes a custom syntax for <a href="http://fortawesome.github.io/Font-Awesome/icons/" class="markup--anchor markup--p-anchor">FontAwesome</a> icons in its templates. You can embed a `@ icon-` followed by a font-awesome icon name to automatically embed that icon without full HTML syntax.

    markdown

    Gear:  Configuration

Configuration

### HTML Markup

You can also embed plain HTML markup into the page if you like. For example, if you want full control over fontawesome icons you can use this:

    markdown

    This text can be **embedded** into Markdown:  
    <i class="fa fa-refresh fa-spin fa-lg"></i> Refresh Page

This text can be embedded into Markdown:  
 Refresh Page

### Unordered Lists

    markdown

    * Item 1
    * Item 2
    * Item 3
    This text is part of the third item. Use two spaces at end of the the list item to break the line.

    A double line break, breaks out of the list.

-   <span id="7904">Item 1</span>
-   <span id="1cf1">Item 2</span>
-   <span id="ded6">Item 3  
    This text is part of the third item. Use two spaces at end of the the list item to break the line.</span>

A double line break, breaks out of the list.

### Ordered Lists

    markdown

    1. **Item 1**  
    Item 1 is really something
    2. **Item 2**  
    Item two is really something else

    If you want lines to break using soft returns use two spaces at the end of a line.

1.  <span id="01d6">Item 1 Item 1 is really something</span>
2.  <span id="51ea">Item 2  
    Item two is really something else</span>

If you want to lines to break using soft returns use to spaces at the end of a line.

### Inline Code

If you want to embed code in the middle of a paragraph of text to highlight a coding syntax or class/member name you can use inline code syntax:

    markdown

    Structured statements like `for x =1 to 10` loop structures 
    can be codified using single back ticks.

Structured statements like `for x =1 to 10` loop structures can be codified using single back ticks.

### Code Blocks with Syntax Highlighting

Markdown supports code blocks syntax in a variety of ways:

    markdown

    The following code demonstrates:

        // This is code by way of four leading spaces
        // or a leading tab

    More text here

The following code demonstrates:

    pgsql

    // This is code by way of four leading spaces
    // or a leading tab

More text here

### Code Blocks

You can also use triple back ticks plus an optional coding language to support for syntax highlighting (space injected before last \` to avoid markdown parsing):

    markdown

    `` `csharp
    // this code will be syntax highlighted
    for(var i=0; i++; i < 10)
    {
        Console.WriteLine(i);
    }
    `` `

    csharp

    // this code will be syntax highlighted
    for(var i=0; i++; i < 10)
    {
        Console.WriteLine(i);
    }

Many languages are supported: html, xml, javascript, css, csharp, foxpro, vbnet, sql, python, ruby, php and many more. Use the Code drop down list to get a list of available languages.

You can also leave out the language to get no syntax coloring but the code box:

    markdown

    `` `dos
    robocopy c:\temp\test d:\temp\test
    `` `

    dos

    robocopy c:\temp\test d:\temp\test

To create a formatted block but without formatting use the `txt` format:

    markdown

    `` `txt
    This is some text that will not be syntax highlighted
    but shows up in a code box.
    `` `

which gives you:

    text

    This is some text that will not be syntax highlighted
    but shows up in a code box.

#### If you found this guide helpful feel free to checkout my github/gists where I host similar content:

<a href="https://gist.github.com/bgoonz" class="markup--anchor markup--p-anchor">bgoonz’s gists · GitHub</a>

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz"><strong>bgoonz — Overview</strong><br />
<em>Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python | React | Node.js | Express | Sequelize…</em>github.com</a><a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

Or Checkout my personal Resource Site:

<a href="https://goofy-euclid-1cd736.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://goofy-euclid-1cd736.netlify.app/"><strong>a/A-Student-Resources</strong><br />
<em>Edit description</em>goofy-euclid-1cd736.netlify.app</a><a href="https://goofy-euclid-1cd736.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [March 8, 2021](https://medium.com/p/3497ce56de3).

<a href="https://medium.com/@bryanguner/an-introduction-to-markdown-bonus-markdown-templates-included-3497ce56de3" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.

Array Callback Methods Implemented With For Loops
=================================================

How to implement array callback methods in JavaScript

------------------------------------------------------------------------

### Array Callback Methods Implemented With For Loops

#### How to implement array callback methods in JavaScript

<figure><img src="https://cdn-images-1.medium.com/max/800/0*WpKqOdTsTPhvapuW" class="graf-image" /></figure>#### Functions are called “First Class Objects” in JavaScript because:

-   <span id="1df8">A function is an instance of the Object type</span>
-   <span id="6e67">A function can have properties and has a link back to its constructor method</span>
-   <span id="c7cf">You can store the function in a variable</span>
-   <span id="b709">You can pass the function as a parameter to another function</span>
-   <span id="2c3c">You can return the function from a function</span>

What do you think will be printed in the following:

#### Anonymous callback, a named callback

    function foo(callback) {
        console.log('grape');
        callback();
    }

    function bar() {
        console.log('banana');
    }

    const fruitBasket = function() {
        console.log('apple');
        bar();
        foo(bar);
        foo(function() {
            console.log('orange');
        });
        console.log('pear');
    };

    fruitBasket();

#### Function that takes in a value and two callbacks. The function should return the result of the callback who’s invocation results in a larger value.

    function greaterValue(value, cb1, cb2) {
        // compare cb1 invoked with value to cb2 invoked with value
        // return the greater result

        let res1 = cb1(value);
        let res2 = cb2(value);
        if (res1 > res2) {
            // if this is false, we move out of if statement
            return res1;
        }
        return res2;
    }

    let negate = function(num) {
        return num * -1;
    };

    let addOne = function(num) {
        return num + 1;
    };

    console.log(greaterValue(3, negate, addOne));
    console.log(greaterValue(-2, negate, addOne));

*Note: we do not invoke* `negate` *or* `addOne` *(by using* `()` *to call them), we are passing the function itself.*

#### Write a function, myMap, that takes in an array and a callback as arguments. The function should mimic the behavior of Array.prototype.map.

    function myMap(arr, callback) {
        // iterate through the array, perform the cb on each element
        // return a new array with those new values
        let mapped = [];

        for (let i = 0; i < arr.length; i++) {
            // remember that map passes three args with each element.
            let val = callback(arr[i], i, arr);
            mapped.push(val);
        }

        return mapped;
    }

    let double = function(num) {
        return num * 2;
    };
    console.log(myMap([1, 2, 3], double));

#### Write a function, myFilter, that takes in an array and a callback as arguments. The function should mimic the behavior of Array.prototype.filter.

    function myFilter(arr, callback) {
        let filtered = [];

        for (let i = 0; i < arr.length; i++) {
            let element = arr[i];

            if (callback(element, i, arr)) {
                filtered.push(element);
            }
        }

        return filtered;
    }

#### Write a function, myEvery, that takes in an array and a callback as arguments. The function should mimic the behavior of Array.prototype.every.

    function myEvery(arr, callback) {
        for (let i = 0; i < arr.length; i++) {
            let element = arr[i];

            if (callback(element, i, arr) === false) {
                return false;
            }
        }
        return true;
    }

### Further Examples of the above concepts

    const createMeowValue = () => {
      console.log(this.name);
      let meow = function () {
        console.log(this);
        console.log(this.name + ' meows');
      }
      meow = meow.bind(this);
      return meow;
    };

    const name = 'Fluffy';

    const cat = {
      name: name,
      age: 12,
      createMeow: function () {
        console.log(this.name);
        let meow = () => {
          const hello = 'hello';
          console.log(this.name + ' meows');
        };
        let world = '';
        if (true) {
          world = 'world';
        }
        console.log(world);
        // meow = meow.bind(this);
        return meow;
      }
    };

    cat.newKey = function () {
      const outermostContext = this;
      const innerFunc = () => {
        secondContext = this;
        console.log(secondContext === outermostContext)
        return function () {
          innermostContext = this;
        }
      };
      return innerFunc.bind(outermostContext);
    };

    const meow = cat.createMeow(); // method-style invocation
    meow(); // function-style invocation

    console.log('-------')

    const createMeow = cat.createMeow;
    const globalMeow = createMeow(); // function-style
    globalMeow(); // function-style

    function createSmoothie(ingredient) {
      const ingredients = [ingredient];
      return ingredients;
    }

    // console.log(createSmoothie('banana'));
    // console.log(createSmoothie('apple'));

    // one parameter only
    // first argument is a string
    // return an array
    // DO NOT USE forEach

References:

<a href="https://open.appacademy.io/learn" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://open.appacademy.io/learn"><strong>App Academy Open</strong><br />
<em>App Academy Open is the first free, online web development course that's meant to get you hired as a developer. Get…</em>open.appacademy.io</a><a href="https://open.appacademy.io/learn" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://developer.mozilla.org/en-US/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://developer.mozilla.org/en-US/"><strong>MDN Web Docs</strong><br />
<em>Read more at hacks.mozilla.org Roughly a year ago at Mozilla we started an effort to improve Firefox stability on…</em>developer.mozilla.org</a><a href="https://developer.mozilla.org/en-US/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://javascript.info/callbacks" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://javascript.info/callbacks"><strong>Introduction: callbacks</strong><br />
<em>To demonstrate the use of callbacks, promises and other abstract concepts, we'll be using some browser methods…</em>javascript.info</a><a href="https://javascript.info/callbacks" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

*More content at* <a href="http://plainenglish.io" class="markup--anchor markup--p-anchor"><strong><em>plainenglish.io</em></strong></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [May 27, 2021](https://medium.com/p/d08875df6777).

<a href="https://medium.com/@bryanguner/array-callback-methods-implemented-with-for-loops-d08875df6777" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.

Awesome List Of Github Repositories
===================================

Platforms

------------------------------------------------------------------------

### Awesome List Of Github Repositories

<a href="https://github.com/bgoonz/awesome-4-new-developers" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz/awesome-4-new-developers"><strong>GitHub - bgoonz/awesome-4-new-developers: Top repos for new developers all in one place</strong><br />
<em>Top repos for new developers all in one place. Contribute to bgoonz/awesome-4-new-developers development by creating an…</em>github.com</a><a href="https://github.com/bgoonz/awesome-4-new-developers" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*PcwyXaMACrHUVng8" class="graf-image" /></figure>### Platforms

-   <span id="3a70"><a href="https://github.com/sindresorhus/awesome-nodejs#readme" class="markup--anchor markup--li-anchor" title="https://github.com/sindresorhus/awesome-nodejs#readme">Node.js</a> — Async non-blocking event-driven JavaScript runtime built on Chrome’s V8 JavaScript engine.</span>
-   <span id="598d"><a href="https://github.com/bcoe/awesome-cross-platform-nodejs#readme" class="markup--anchor markup--li-anchor" title="https://github.com/bcoe/awesome-cross-platform-nodejs#readme">Cross-Platform</a> — Writing cross-platform code on Node.js.</span>
-   <span id="2c69"><a href="https://github.com/dypsilon/frontend-dev-bookmarks#readme" class="markup--anchor markup--li-anchor" title="https://github.com/dypsilon/frontend-dev-bookmarks#readme">Frontend Development</a></span>
-   <span id="8cf1"><a href="https://github.com/vsouza/awesome-ios#readme" class="markup--anchor markup--li-anchor" title="https://github.com/vsouza/awesome-ios#readme">iOS</a> — Mobile operating system for Apple phones and tablets.</span>
-   <span id="8995"><a href="https://github.com/JStumpp/awesome-android#readme" class="markup--anchor markup--li-anchor" title="https://github.com/JStumpp/awesome-android#readme">Android</a> — Mobile operating system developed by Google.</span>
-   <span id="90e2"><a href="https://github.com/weblancaster/awesome-IoT-hybrid#readme" class="markup--anchor markup--li-anchor" title="https://github.com/weblancaster/awesome-IoT-hybrid#readme">IoT &amp; Hybrid Apps</a></span>
-   <span id="5e1d"><a href="https://github.com/sindresorhus/awesome-electron#readme" class="markup--anchor markup--li-anchor" title="https://github.com/sindresorhus/awesome-electron#readme">Electron</a> — Cross-platform native desktop apps using JavaScript/HTML/CSS.</span>
-   <span id="ddf1"><a href="https://github.com/busterc/awesome-cordova#readme" class="markup--anchor markup--li-anchor" title="https://github.com/busterc/awesome-cordova#readme">Cordova</a> — JavaScript API for hybrid apps.</span>
-   <span id="721a"><a href="https://github.com/jondot/awesome-react-native#readme" class="markup--anchor markup--li-anchor" title="https://github.com/jondot/awesome-react-native#readme">React Native</a> — JavaScript framework for writing natively rendering mobile apps for iOS and Android.</span>
-   <span id="6fe2"><a href="https://github.com/XamSome/awesome-xamarin#readme" class="markup--anchor markup--li-anchor" title="https://github.com/XamSome/awesome-xamarin#readme">Xamarin</a> — Mobile app development IDE, testing, and distribution.</span>
-   <span id="de7c"><a href="https://github.com/inputsh/awesome-linux#readme" class="markup--anchor markup--li-anchor" title="https://github.com/inputsh/awesome-linux#readme">Linux</a></span>
-   <span id="5845"><a href="https://github.com/Friz-zy/awesome-linux-containers#readme" class="markup--anchor markup--li-anchor" title="https://github.com/Friz-zy/awesome-linux-containers#readme">Containers</a></span>
-   <span id="8f04"><a href="https://github.com/zoidbergwill/awesome-ebpf#readme" class="markup--anchor markup--li-anchor" title="https://github.com/zoidbergwill/awesome-ebpf#readme">eBPF</a> — Virtual machine that allows you to write more efficient and powerful tracing and monitoring for Linux systems.</span>
-   <span id="07e4"><a href="https://github.com/PandaFoss/Awesome-Arch#readme" class="markup--anchor markup--li-anchor" title="https://github.com/PandaFoss/Awesome-Arch#readme">Arch-based Projects</a> — Linux distributions and projects based on Arch Linux.</span>
-   <span id="360a"><a href="https://github.com/iCHAIT/awesome-macOS#readme" class="markup--anchor markup--li-anchor" title="https://github.com/iCHAIT/awesome-macOS#readme">macOS</a> — Operating system for Apple’s Mac computers.</span>
-   <span id="4017"><a href="https://github.com/herrbischoff/awesome-macos-command-line#readme" class="markup--anchor markup--li-anchor" title="https://github.com/herrbischoff/awesome-macos-command-line#readme">Command-Line</a></span>
-   <span id="aeef"><a href="https://github.com/agarrharr/awesome-macos-screensavers#readme" class="markup--anchor markup--li-anchor" title="https://github.com/agarrharr/awesome-macos-screensavers#readme">Screensavers</a></span>
-   <span id="8513"><a href="https://github.com/jaywcjlove/awesome-mac#readme" class="markup--anchor markup--li-anchor" title="https://github.com/jaywcjlove/awesome-mac#readme">Apps</a></span>
-   <span id="8e27"><a href="https://github.com/serhii-londar/open-source-mac-os-apps#readme" class="markup--anchor markup--li-anchor" title="https://github.com/serhii-londar/open-source-mac-os-apps#readme">Open Source Apps</a></span>
-   <span id="d9ed"><a href="https://github.com/yenchenlin/awesome-watchos#readme" class="markup--anchor markup--li-anchor" title="https://github.com/yenchenlin/awesome-watchos#readme">watchOS</a> — Operating system for the Apple Watch.</span>
-   <span id="c161"><a href="https://github.com/deephacks/awesome-jvm#readme" class="markup--anchor markup--li-anchor" title="https://github.com/deephacks/awesome-jvm#readme">JVM</a></span>
-   <span id="08f2"><a href="https://github.com/mailtoharshit/awesome-salesforce#readme" class="markup--anchor markup--li-anchor" title="https://github.com/mailtoharshit/awesome-salesforce#readme">Salesforce</a></span>
-   <span id="6dd7"><a href="https://github.com/donnemartin/awesome-aws#readme" class="markup--anchor markup--li-anchor" title="https://github.com/donnemartin/awesome-aws#readme">Amazon Web Services</a></span>
-   <span id="1cb7"><a href="https://github.com/Awesome-Windows/Awesome#readme" class="markup--anchor markup--li-anchor" title="https://github.com/Awesome-Windows/Awesome#readme">Windows</a></span>
-   <span id="b7a9"><a href="https://github.com/ipfs/awesome-ipfs#readme" class="markup--anchor markup--li-anchor" title="https://github.com/ipfs/awesome-ipfs#readme">IPFS</a> — P2P hypermedia protocol.</span>
-   <span id="cee6"><a href="https://github.com/fuse-compound/awesome-fuse#readme" class="markup--anchor markup--li-anchor" title="https://github.com/fuse-compound/awesome-fuse#readme">Fuse</a> — Mobile development tools.</span>
-   <span id="b042"><a href="https://github.com/ianstormtaylor/awesome-heroku#readme" class="markup--anchor markup--li-anchor" title="https://github.com/ianstormtaylor/awesome-heroku#readme">Heroku</a> — Cloud platform as a service.</span>
-   <span id="ac17"><a href="https://github.com/thibmaek/awesome-raspberry-pi#readme" class="markup--anchor markup--li-anchor" title="https://github.com/thibmaek/awesome-raspberry-pi#readme">Raspberry Pi</a> — Credit card-sized computer aimed at teaching kids programming, but capable of a lot more.</span>
-   <span id="856f"><a href="https://github.com/JesseTG/awesome-qt#readme" class="markup--anchor markup--li-anchor" title="https://github.com/JesseTG/awesome-qt#readme">Qt</a> — Cross-platform GUI app framework.</span>
-   <span id="9407"><a href="https://github.com/fregante/Awesome-WebExtensions#readme" class="markup--anchor markup--li-anchor" title="https://github.com/fregante/Awesome-WebExtensions#readme">WebExtensions</a> — Cross-browser extension system.</span>
-   <span id="9e3f"><a href="https://github.com/motion-open-source/awesome-rubymotion#readme" class="markup--anchor markup--li-anchor" title="https://github.com/motion-open-source/awesome-rubymotion#readme">RubyMotion</a> — Write cross-platform native apps for iOS, Android, macOS, tvOS, and watchOS in Ruby.</span>
-   <span id="08be"><a href="https://github.com/vitalets/awesome-smart-tv#readme" class="markup--anchor markup--li-anchor" title="https://github.com/vitalets/awesome-smart-tv#readme">Smart TV</a> — Create apps for different TV platforms.</span>
-   <span id="1986"><a href="https://github.com/Kazhnuz/awesome-gnome#readme" class="markup--anchor markup--li-anchor" title="https://github.com/Kazhnuz/awesome-gnome#readme">GNOME</a> — Simple and distraction-free desktop environment for Linux.</span>
-   <span id="2069"><a href="https://github.com/francoism90/awesome-kde#readme" class="markup--anchor markup--li-anchor" title="https://github.com/francoism90/awesome-kde#readme">KDE</a> — A free software community dedicated to creating an open and user-friendly computing experience.</span>
-   <span id="b388"><a href="https://github.com/quozd/awesome-dotnet#readme" class="markup--anchor markup--li-anchor" title="https://github.com/quozd/awesome-dotnet#readme">.NET</a></span>
-   <span id="2688"><a href="https://github.com/thangchung/awesome-dotnet-core#readme" class="markup--anchor markup--li-anchor" title="https://github.com/thangchung/awesome-dotnet-core#readme">Core</a></span>
-   <span id="735d"><a href="https://github.com/ironcev/awesome-roslyn#readme" class="markup--anchor markup--li-anchor" title="https://github.com/ironcev/awesome-roslyn#readme">Roslyn</a> — Open-source compilers and code analysis APIs for C\# and <a href="http://VB.NET" class="markup--anchor markup--li-anchor" title="http://VB.NET">VB.NET</a> languages.</span>
-   <span id="d9d6"><a href="https://github.com/miguelmota/awesome-amazon-alexa#readme" class="markup--anchor markup--li-anchor" title="https://github.com/miguelmota/awesome-amazon-alexa#readme">Amazon Alexa</a> — Virtual home assistant.</span>
-   <span id="e5f1"><a href="https://github.com/jonleibowitz/awesome-digitalocean#readme" class="markup--anchor markup--li-anchor" title="https://github.com/jonleibowitz/awesome-digitalocean#readme">DigitalOcean</a> — Cloud computing platform designed for developers.</span>
-   <span id="b080"><a href="https://github.com/Solido/awesome-flutter#readme" class="markup--anchor markup--li-anchor" title="https://github.com/Solido/awesome-flutter#readme">Flutter</a> — Google’s mobile SDK for building native iOS and Android apps from a single codebase written in Dart.</span>
-   <span id="e962"><a href="https://github.com/frenck/awesome-home-assistant#readme" class="markup--anchor markup--li-anchor" title="https://github.com/frenck/awesome-home-assistant#readme">Home Assistant</a> — Open source home automation that puts local control and privacy first.</span>
-   <span id="c8f1"><a href="https://github.com/victorshinya/awesome-ibmcloud#readme" class="markup--anchor markup--li-anchor" title="https://github.com/victorshinya/awesome-ibmcloud#readme">IBM Cloud</a> — Cloud platform for developers and companies.</span>
-   <span id="2bef"><a href="https://github.com/jthegedus/awesome-firebase#readme" class="markup--anchor markup--li-anchor" title="https://github.com/jthegedus/awesome-firebase#readme">Firebase</a> — App development platform built on Google Cloud Platform.</span>
-   <span id="50aa"><a href="https://github.com/fkromer/awesome-ros2#readme" class="markup--anchor markup--li-anchor" title="https://github.com/fkromer/awesome-ros2#readme">Robot Operating System 2.0</a> — Set of software libraries and tools that help you build robot apps.</span>
-   <span id="7de4"><a href="https://github.com/adafruit/awesome-adafruitio#readme" class="markup--anchor markup--li-anchor" title="https://github.com/adafruit/awesome-adafruitio#readme">Adafruit IO</a> — Visualize and store data from any device.</span>
-   <span id="15d4"><a href="https://github.com/irazasyed/awesome-cloudflare#readme" class="markup--anchor markup--li-anchor" title="https://github.com/irazasyed/awesome-cloudflare#readme">Cloudflare</a> — CDN, DNS, DDoS protection, and security for your site.</span>
-   <span id="27c6"><a href="https://github.com/ravirupareliya/awesome-actions-on-google#readme" class="markup--anchor markup--li-anchor" title="https://github.com/ravirupareliya/awesome-actions-on-google#readme">Actions on Google</a> — Developer platform for Google Assistant.</span>
-   <span id="07d6"><a href="https://github.com/agucova/awesome-esp#readme" class="markup--anchor markup--li-anchor" title="https://github.com/agucova/awesome-esp#readme">ESP</a> — Low-cost microcontrollers with WiFi and broad IoT applications.</span>
-   <span id="3240"><a href="https://github.com/denolib/awesome-deno#readme" class="markup--anchor markup--li-anchor" title="https://github.com/denolib/awesome-deno#readme">Deno</a> — A secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust.</span>
-   <span id="d566"><a href="https://github.com/balintkissdev/awesome-dos#readme" class="markup--anchor markup--li-anchor" title="https://github.com/balintkissdev/awesome-dos#readme">DOS</a> — Operating system for x86-based personal computers that was popular during the 1980s and early 1990s.</span>
-   <span id="04ee"><a href="https://github.com/nix-community/awesome-nix#readme" class="markup--anchor markup--li-anchor" title="https://github.com/nix-community/awesome-nix#readme">Nix</a> — Package manager for Linux and other Unix systems that makes package management reliable and reproducible.</span>

### Programming Languages

-   <span id="bb06"><a href="https://github.com/sorrycc/awesome-javascript#readme" class="markup--anchor markup--li-anchor" title="https://github.com/sorrycc/awesome-javascript#readme">JavaScript</a></span>
-   <span id="a6e2"><a href="https://github.com/wbinnssmith/awesome-promises#readme" class="markup--anchor markup--li-anchor" title="https://github.com/wbinnssmith/awesome-promises#readme">Promises</a></span>
-   <span id="0e6d"><a href="https://github.com/standard/awesome-standard#readme" class="markup--anchor markup--li-anchor" title="https://github.com/standard/awesome-standard#readme">Standard Style</a> — Style guide and linter.</span>
-   <span id="b4b6"><a href="https://github.com/bolshchikov/js-must-watch#readme" class="markup--anchor markup--li-anchor" title="https://github.com/bolshchikov/js-must-watch#readme">Must Watch Talks</a></span>
-   <span id="cd70"><a href="https://github.com/loverajoel/jstips#readme" class="markup--anchor markup--li-anchor" title="https://github.com/loverajoel/jstips#readme">Tips</a></span>
-   <span id="70a7"><a href="https://github.com/Kikobeats/awesome-network-js#readme" class="markup--anchor markup--li-anchor" title="https://github.com/Kikobeats/awesome-network-js#readme">Network Layer</a></span>
-   <span id="beb9"><a href="https://github.com/parro-it/awesome-micro-npm-packages#readme" class="markup--anchor markup--li-anchor" title="https://github.com/parro-it/awesome-micro-npm-packages#readme">Micro npm Packages</a></span>
-   <span id="8421"><a href="https://github.com/feross/awesome-mad-science#readme" class="markup--anchor markup--li-anchor" title="https://github.com/feross/awesome-mad-science#readme">Mad Science npm Packages</a> — Impossible sounding projects that exist.</span>
-   <span id="624f"><a href="https://github.com/maxogden/maintenance-modules#readme" class="markup--anchor markup--li-anchor" title="https://github.com/maxogden/maintenance-modules#readme">Maintenance Modules</a> — For npm packages.</span>
-   <span id="72c7"><a href="https://github.com/sindresorhus/awesome-npm#readme" class="markup--anchor markup--li-anchor" title="https://github.com/sindresorhus/awesome-npm#readme">npm</a> — Package manager.</span>
-   <span id="7393"><a href="https://github.com/avajs/awesome-ava#readme" class="markup--anchor markup--li-anchor" title="https://github.com/avajs/awesome-ava#readme">AVA</a> — Test runner.</span>
-   <span id="452a"><a href="https://github.com/dustinspecker/awesome-eslint#readme" class="markup--anchor markup--li-anchor" title="https://github.com/dustinspecker/awesome-eslint#readme">ESLint</a> — Linter.</span>
-   <span id="d045"><a href="https://github.com/stoeffel/awesome-fp-js#readme" class="markup--anchor markup--li-anchor" title="https://github.com/stoeffel/awesome-fp-js#readme">Functional Programming</a></span>
-   <span id="3eba"><a href="https://github.com/sindresorhus/awesome-observables#readme" class="markup--anchor markup--li-anchor" title="https://github.com/sindresorhus/awesome-observables#readme">Observables</a></span>
-   <span id="48bb"><a href="https://github.com/RyanZim/awesome-npm-scripts#readme" class="markup--anchor markup--li-anchor" title="https://github.com/RyanZim/awesome-npm-scripts#readme">npm scripts</a> — Task runner.</span>
-   <span id="32ae"><a href="https://github.com/30-seconds/30-seconds-of-code#readme" class="markup--anchor markup--li-anchor" title="https://github.com/30-seconds/30-seconds-of-code#readme">30 Seconds of Code</a> — Code snippets you can understand in 30 seconds.</span>
-   <span id="df31"><a href="https://github.com/Richienb/awesome-ponyfills#readme" class="markup--anchor markup--li-anchor" title="https://github.com/Richienb/awesome-ponyfills#readme">Ponyfills</a> — Like polyfills but without overriding native APIs.</span>
-   <span id="b36d"><a href="https://github.com/matteocrippa/awesome-swift#readme" class="markup--anchor markup--li-anchor" title="https://github.com/matteocrippa/awesome-swift#readme">Swift</a> — Apple’s compiled programming language that is secure, modern, programmer-friendly, and fast.</span>
-   <span id="56b5"><a href="https://github.com/hsavit1/Awesome-Swift-Education#readme" class="markup--anchor markup--li-anchor" title="https://github.com/hsavit1/Awesome-Swift-Education#readme">Education</a></span>
-   <span id="393c"><a href="https://github.com/uraimo/Awesome-Swift-Playgrounds#readme" class="markup--anchor markup--li-anchor" title="https://github.com/uraimo/Awesome-Swift-Playgrounds#readme">Playgrounds</a></span>
-   <span id="ff30"><a href="https://github.com/vinta/awesome-python#readme" class="markup--anchor markup--li-anchor" title="https://github.com/vinta/awesome-python#readme">Python</a> — General-purpose programming language designed for readability.</span>
-   <span id="bbf7"><a href="https://github.com/timofurrer/awesome-asyncio#readme" class="markup--anchor markup--li-anchor" title="https://github.com/timofurrer/awesome-asyncio#readme">Asyncio</a> — Asynchronous I/O in Python 3.</span>
-   <span id="b46a"><a href="https://github.com/faroit/awesome-python-scientific-audio#readme" class="markup--anchor markup--li-anchor" title="https://github.com/faroit/awesome-python-scientific-audio#readme">Scientific Audio</a> — Scientific research in audio/music.</span>
-   <span id="8a26"><a href="https://github.com/adafruit/awesome-circuitpython#readme" class="markup--anchor markup--li-anchor" title="https://github.com/adafruit/awesome-circuitpython#readme">CircuitPython</a> — A version of Python for microcontrollers.</span>
-   <span id="62db"><a href="https://github.com/krzjoa/awesome-python-data-science#readme" class="markup--anchor markup--li-anchor" title="https://github.com/krzjoa/awesome-python-data-science#readme">Data Science</a> — Data analysis and machine learning.</span>
-   <span id="5028"><a href="https://github.com/typeddjango/awesome-python-typing#readme" class="markup--anchor markup--li-anchor" title="https://github.com/typeddjango/awesome-python-typing#readme">Typing</a> — Optional static typing for Python.</span>
-   <span id="488f"><a href="https://github.com/mcauser/awesome-micropython#readme" class="markup--anchor markup--li-anchor" title="https://github.com/mcauser/awesome-micropython#readme">MicroPython</a> — A lean and efficient implementation of Python 3 for microcontrollers.</span>
-   <span id="c563"><a href="https://github.com/rust-unofficial/awesome-rust#readme" class="markup--anchor markup--li-anchor" title="https://github.com/rust-unofficial/awesome-rust#readme">Rust</a></span>
-   <span id="89d6"><a href="https://github.com/krispo/awesome-haskell#readme" class="markup--anchor markup--li-anchor" title="https://github.com/krispo/awesome-haskell#readme">Haskell</a></span>
-   <span id="6bc0"><a href="https://github.com/passy/awesome-purescript#readme" class="markup--anchor markup--li-anchor" title="https://github.com/passy/awesome-purescript#readme">PureScript</a></span>
-   <span id="2c02"><a href="https://github.com/avelino/awesome-go#readme" class="markup--anchor markup--li-anchor" title="https://github.com/avelino/awesome-go#readme">Go</a></span>
-   <span id="7300"><a href="https://github.com/lauris/awesome-scala#readme" class="markup--anchor markup--li-anchor" title="https://github.com/lauris/awesome-scala#readme">Scala</a></span>
-   <span id="d22f"><a href="https://github.com/tindzk/awesome-scala-native#readme" class="markup--anchor markup--li-anchor" title="https://github.com/tindzk/awesome-scala-native#readme">Scala Native</a> — Optimizing ahead-of-time compiler for Scala based on LLVM.</span>
-   <span id="8593"><a href="https://github.com/markets/awesome-ruby#readme" class="markup--anchor markup--li-anchor" title="https://github.com/markets/awesome-ruby#readme">Ruby</a></span>
-   <span id="eb9b"><a href="https://github.com/razum2um/awesome-clojure#readme" class="markup--anchor markup--li-anchor" title="https://github.com/razum2um/awesome-clojure#readme">Clojure</a></span>
-   <span id="e12f"><a href="https://github.com/hantuzun/awesome-clojurescript#readme" class="markup--anchor markup--li-anchor" title="https://github.com/hantuzun/awesome-clojurescript#readme">ClojureScript</a></span>
-   <span id="748c"><a href="https://github.com/h4cc/awesome-elixir#readme" class="markup--anchor markup--li-anchor" title="https://github.com/h4cc/awesome-elixir#readme">Elixir</a></span>
-   <span id="89b0"><a href="https://github.com/sporto/awesome-elm#readme" class="markup--anchor markup--li-anchor" title="https://github.com/sporto/awesome-elm#readme">Elm</a></span>
-   <span id="b83d"><a href="https://github.com/drobakowski/awesome-erlang#readme" class="markup--anchor markup--li-anchor" title="https://github.com/drobakowski/awesome-erlang#readme">Erlang</a></span>
-   <span id="38d3"><a href="https://github.com/svaksha/Julia.jl#readme" class="markup--anchor markup--li-anchor" title="https://github.com/svaksha/Julia.jl#readme">Julia</a> — High-level dynamic programming language designed to address the needs of high-performance numerical analysis and computational science.</span>
-   <span id="b2f4"><a href="https://github.com/LewisJEllis/awesome-lua#readme" class="markup--anchor markup--li-anchor" title="https://github.com/LewisJEllis/awesome-lua#readme">Lua</a></span>
-   <span id="eb25"><a href="https://github.com/inputsh/awesome-c#readme" class="markup--anchor markup--li-anchor" title="https://github.com/inputsh/awesome-c#readme">C</a></span>
-   <span id="06f4"><a href="https://github.com/fffaraz/awesome-cpp#readme" class="markup--anchor markup--li-anchor" title="https://github.com/fffaraz/awesome-cpp#readme">C/C++</a> — General-purpose language with a bias toward system programming and embedded, resource-constrained software.</span>
-   <span id="b13b"><a href="https://github.com/qinwf/awesome-R#readme" class="markup--anchor markup--li-anchor" title="https://github.com/qinwf/awesome-R#readme">R</a> — Functional programming language and environment for statistical computing and graphics.</span>
-   <span id="8a84"><a href="https://github.com/iamericfletcher/awesome-r-learning-resources#readme" class="markup--anchor markup--li-anchor" title="https://github.com/iamericfletcher/awesome-r-learning-resources#readme">Learning</a></span>
-   <span id="63ef"><a href="https://github.com/dlang-community/awesome-d#readme" class="markup--anchor markup--li-anchor" title="https://github.com/dlang-community/awesome-d#readme">D</a></span>
-   <span id="1cbf"><a href="https://github.com/CodyReichert/awesome-cl#readme" class="markup--anchor markup--li-anchor" title="https://github.com/CodyReichert/awesome-cl#readme">Common Lisp</a> — Powerful dynamic multiparadigm language that facilitates iterative and interactive development.</span>
-   <span id="b926"><a href="https://github.com/GustavBertram/awesome-common-lisp-learning#readme" class="markup--anchor markup--li-anchor" title="https://github.com/GustavBertram/awesome-common-lisp-learning#readme">Learning</a></span>
-   <span id="5e50"><a href="https://github.com/hachiojipm/awesome-perl#readme" class="markup--anchor markup--li-anchor" title="https://github.com/hachiojipm/awesome-perl#readme">Perl</a></span>
-   <span id="20ef"><a href="https://github.com/kdabir/awesome-groovy#readme" class="markup--anchor markup--li-anchor" title="https://github.com/kdabir/awesome-groovy#readme">Groovy</a></span>
-   <span id="75c5"><a href="https://github.com/yissachar/awesome-dart#readme" class="markup--anchor markup--li-anchor" title="https://github.com/yissachar/awesome-dart#readme">Dart</a></span>
-   <span id="327e"><a href="https://github.com/akullpp/awesome-java#readme" class="markup--anchor markup--li-anchor" title="https://github.com/akullpp/awesome-java#readme">Java</a> — Popular secure object-oriented language designed for flexibility to “write once, run anywhere”.</span>
-   <span id="aa9a"><a href="https://github.com/eleventigers/awesome-rxjava#readme" class="markup--anchor markup--li-anchor" title="https://github.com/eleventigers/awesome-rxjava#readme">RxJava</a></span>
-   <span id="44f2"><a href="https://github.com/KotlinBy/awesome-kotlin#readme" class="markup--anchor markup--li-anchor" title="https://github.com/KotlinBy/awesome-kotlin#readme">Kotlin</a></span>
-   <span id="b8b9"><a href="https://github.com/ocaml-community/awesome-ocaml#readme" class="markup--anchor markup--li-anchor" title="https://github.com/ocaml-community/awesome-ocaml#readme">OCaml</a></span>
-   <span id="1850"><a href="https://github.com/seancoyne/awesome-coldfusion#readme" class="markup--anchor markup--li-anchor" title="https://github.com/seancoyne/awesome-coldfusion#readme">ColdFusion</a></span>
-   <span id="8daa"><a href="https://github.com/rabbiabram/awesome-fortran#readme" class="markup--anchor markup--li-anchor" title="https://github.com/rabbiabram/awesome-fortran#readme">Fortran</a></span>
-   <span id="f283"><a href="https://github.com/ziadoz/awesome-php#readme" class="markup--anchor markup--li-anchor" title="https://github.com/ziadoz/awesome-php#readme">PHP</a> — Server-side scripting language.</span>
-   <span id="dc45"><a href="https://github.com/jakoch/awesome-composer#readme" class="markup--anchor markup--li-anchor" title="https://github.com/jakoch/awesome-composer#readme">Composer</a> — Package manager.</span>
-   <span id="cc2b"><a href="https://github.com/Fr0sT-Brutal/awesome-pascal#readme" class="markup--anchor markup--li-anchor" title="https://github.com/Fr0sT-Brutal/awesome-pascal#readme">Pascal</a></span>
-   <span id="504f"><a href="https://github.com/ahkscript/awesome-AutoHotkey#readme" class="markup--anchor markup--li-anchor" title="https://github.com/ahkscript/awesome-AutoHotkey#readme">AutoHotkey</a></span>
-   <span id="0a7f"><a href="https://github.com/J2TeaM/awesome-AutoIt#readme" class="markup--anchor markup--li-anchor" title="https://github.com/J2TeaM/awesome-AutoIt#readme">AutoIt</a></span>
-   <span id="f937"><a href="https://github.com/veelenga/awesome-crystal#readme" class="markup--anchor markup--li-anchor" title="https://github.com/veelenga/awesome-crystal#readme">Crystal</a></span>
-   <span id="dee3"><a href="https://github.com/sfischer13/awesome-frege#readme" class="markup--anchor markup--li-anchor" title="https://github.com/sfischer13/awesome-frege#readme">Frege</a> — Haskell for the JVM.</span>
-   <span id="c660"><a href="https://github.com/onqtam/awesome-cmake#readme" class="markup--anchor markup--li-anchor" title="https://github.com/onqtam/awesome-cmake#readme">CMake</a> — Build, test, and package software.</span>
-   <span id="8f8c"><a href="https://github.com/robinrodricks/awesome-actionscript3#readme" class="markup--anchor markup--li-anchor" title="https://github.com/robinrodricks/awesome-actionscript3#readme">ActionScript 3</a> — Object-oriented language targeting Adobe AIR.</span>
-   <span id="d436"><a href="https://github.com/sfischer13/awesome-eta#readme" class="markup--anchor markup--li-anchor" title="https://github.com/sfischer13/awesome-eta#readme">Eta</a> — Functional programming language for the JVM.</span>
-   <span id="d230"><a href="https://github.com/joaomilho/awesome-idris#readme" class="markup--anchor markup--li-anchor" title="https://github.com/joaomilho/awesome-idris#readme">Idris</a> — General purpose pure functional programming language with dependent types influenced by Haskell and ML.</span>
-   <span id="d7d8"><a href="https://github.com/ohenley/awesome-ada#readme" class="markup--anchor markup--li-anchor" title="https://github.com/ohenley/awesome-ada#readme">Ada/SPARK</a> — Modern programming language designed for large, long-lived apps where reliability and efficiency are essential.</span>
-   <span id="5d52"><a href="https://github.com/ebraminio/awesome-qsharp#readme" class="markup--anchor markup--li-anchor" title="https://github.com/ebraminio/awesome-qsharp#readme">Q#</a> — Domain-specific programming language used for expressing quantum algorithms.</span>
-   <span id="309c"><a href="https://github.com/koolamusic/awesome-imba#readme" class="markup--anchor markup--li-anchor" title="https://github.com/koolamusic/awesome-imba#readme">Imba</a> — Programming language inspired by Ruby and Python and compiles to performant JavaScript.</span>
-   <span id="8e89"><a href="https://github.com/desiderantes/awesome-vala#readme" class="markup--anchor markup--li-anchor" title="https://github.com/desiderantes/awesome-vala#readme">Vala</a> — Programming language designed to take full advantage of the GLib and GNOME ecosystems, while preserving the speed of C code.</span>
-   <span id="68fe"><a href="https://github.com/coq-community/awesome-coq#readme" class="markup--anchor markup--li-anchor" title="https://github.com/coq-community/awesome-coq#readme">Coq</a> — Formal language and environment for programming and specification which facilitates interactive development of machine-checked proofs.</span>
-   <span id="0d5c"><a href="https://github.com/vlang/awesome-v#readme" class="markup--anchor markup--li-anchor" title="https://github.com/vlang/awesome-v#readme">V</a> — Simple, fast, safe, compiled language for developing maintainable software.</span>

### Front-End Development

-   <span id="59c2"><a href="https://github.com/addyosmani/es6-tools#readme" class="markup--anchor markup--li-anchor" title="https://github.com/addyosmani/es6-tools#readme">ES6 Tools</a></span>
-   <span id="c665"><a href="https://github.com/davidsonfellipe/awesome-wpo#readme" class="markup--anchor markup--li-anchor" title="https://github.com/davidsonfellipe/awesome-wpo#readme">Web Performance Optimization</a></span>
-   <span id="95a9"><a href="https://github.com/lvwzhen/tools#readme" class="markup--anchor markup--li-anchor" title="https://github.com/lvwzhen/tools#readme">Web Tools</a></span>
-   <span id="e1c6"><a href="https://github.com/awesome-css-group/awesome-css#readme" class="markup--anchor markup--li-anchor" title="https://github.com/awesome-css-group/awesome-css#readme">CSS</a> — Style sheet language that specifies how HTML elements are displayed on screen.</span>
-   <span id="e515"><a href="https://github.com/addyosmani/critical-path-css-tools#readme" class="markup--anchor markup--li-anchor" title="https://github.com/addyosmani/critical-path-css-tools#readme">Critical-Path Tools</a></span>
-   <span id="64f0"><a href="https://github.com/davidtheclark/scalable-css-reading-list#readme" class="markup--anchor markup--li-anchor" title="https://github.com/davidtheclark/scalable-css-reading-list#readme">Scalability</a></span>
-   <span id="82b1"><a href="https://github.com/AllThingsSmitty/must-watch-css#readme" class="markup--anchor markup--li-anchor" title="https://github.com/AllThingsSmitty/must-watch-css#readme">Must-Watch Talks</a></span>
-   <span id="f6e0"><a href="https://github.com/AllThingsSmitty/css-protips#readme" class="markup--anchor markup--li-anchor" title="https://github.com/AllThingsSmitty/css-protips#readme">Protips</a></span>
-   <span id="85d1"><a href="https://github.com/troxler/awesome-css-frameworks#readme" class="markup--anchor markup--li-anchor" title="https://github.com/troxler/awesome-css-frameworks#readme">Frameworks</a></span>
-   <span id="bb01"><a href="https://github.com/enaqx/awesome-react#readme" class="markup--anchor markup--li-anchor" title="https://github.com/enaqx/awesome-react#readme">React</a> — App framework.</span>
-   <span id="880b"><a href="https://github.com/expede/awesome-relay#readme" class="markup--anchor markup--li-anchor" title="https://github.com/expede/awesome-relay#readme">Relay</a> — Framework for building data-driven React apps.</span>
-   <span id="246a"><a href="https://github.com/glauberfc/awesome-react-hooks#readme" class="markup--anchor markup--li-anchor" title="https://github.com/glauberfc/awesome-react-hooks#readme">React Hooks</a> — A new feature that lets you use state and other React features without writing a class.</span>
-   <span id="ae23"><a href="https://github.com/mateusortiz/webcomponents-the-right-way#readme" class="markup--anchor markup--li-anchor" title="https://github.com/mateusortiz/webcomponents-the-right-way#readme">Web Components</a></span>
-   <span id="ac3c"><a href="https://github.com/Granze/awesome-polymer#readme" class="markup--anchor markup--li-anchor" title="https://github.com/Granze/awesome-polymer#readme">Polymer</a> — JavaScript library to develop Web Components.</span>
-   <span id="6308"><a href="https://github.com/PatrickJS/awesome-angular#readme" class="markup--anchor markup--li-anchor" title="https://github.com/PatrickJS/awesome-angular#readme">Angular</a> — App framework.</span>
-   <span id="79fa"><a href="https://github.com/sadcitizen/awesome-backbone#readme" class="markup--anchor markup--li-anchor" title="https://github.com/sadcitizen/awesome-backbone#readme">Backbone</a> — App framework.</span>
-   <span id="aac9"><a href="https://github.com/diegocard/awesome-html5#readme" class="markup--anchor markup--li-anchor" title="https://github.com/diegocard/awesome-html5#readme">HTML5</a> — Markup language used for websites & web apps.</span>
-   <span id="c128"><a href="https://github.com/willianjusten/awesome-svg#readme" class="markup--anchor markup--li-anchor" title="https://github.com/willianjusten/awesome-svg#readme">SVG</a> — XML-based vector image format.</span>
-   <span id="fb8a"><a href="https://github.com/raphamorim/awesome-canvas#readme" class="markup--anchor markup--li-anchor" title="https://github.com/raphamorim/awesome-canvas#readme">Canvas</a></span>
-   <span id="6081"><a href="https://github.com/dnbard/awesome-knockout#readme" class="markup--anchor markup--li-anchor" title="https://github.com/dnbard/awesome-knockout#readme">KnockoutJS</a> — JavaScript library.</span>
-   <span id="a121"><a href="https://github.com/petk/awesome-dojo#readme" class="markup--anchor markup--li-anchor" title="https://github.com/petk/awesome-dojo#readme">Dojo Toolkit</a> — JavaScript toolkit.</span>
-   <span id="8c2c"><a href="https://github.com/NoahBuscher/Inspire#readme" class="markup--anchor markup--li-anchor" title="https://github.com/NoahBuscher/Inspire#readme">Inspiration</a></span>
-   <span id="1a6c"><a href="https://github.com/ember-community-russia/awesome-ember#readme" class="markup--anchor markup--li-anchor" title="https://github.com/ember-community-russia/awesome-ember#readme">Ember</a> — App framework.</span>
-   <span id="7121"><a href="https://github.com/wasabeef/awesome-android-ui#readme" class="markup--anchor markup--li-anchor" title="https://github.com/wasabeef/awesome-android-ui#readme">Android UI</a></span>
-   <span id="7921"><a href="https://github.com/cjwirth/awesome-ios-ui#readme" class="markup--anchor markup--li-anchor" title="https://github.com/cjwirth/awesome-ios-ui#readme">iOS UI</a></span>
-   <span id="46de"><a href="https://github.com/Urigo/awesome-meteor#readme" class="markup--anchor markup--li-anchor" title="https://github.com/Urigo/awesome-meteor#readme">Meteor</a></span>
-   <span id="9292"><a href="https://github.com/sturobson/BEM-resources#readme" class="markup--anchor markup--li-anchor" title="https://github.com/sturobson/BEM-resources#readme">BEM</a></span>
-   <span id="2582"><a href="https://github.com/afonsopacifer/awesome-flexbox#readme" class="markup--anchor markup--li-anchor" title="https://github.com/afonsopacifer/awesome-flexbox#readme">Flexbox</a></span>
-   <span id="c947"><a href="https://github.com/deanhume/typography#readme" class="markup--anchor markup--li-anchor" title="https://github.com/deanhume/typography#readme">Web Typography</a></span>
-   <span id="82a1"><a href="https://github.com/brunopulis/awesome-a11y#readme" class="markup--anchor markup--li-anchor" title="https://github.com/brunopulis/awesome-a11y#readme">Web Accessibility</a></span>
-   <span id="64c2"><a href="https://github.com/sachin1092/awesome-material#readme" class="markup--anchor markup--li-anchor" title="https://github.com/sachin1092/awesome-material#readme">Material Design</a></span>
-   <span id="e5f8"><a href="https://github.com/wbkd/awesome-d3#readme" class="markup--anchor markup--li-anchor" title="https://github.com/wbkd/awesome-d3#readme">D3</a> — Library for producing dynamic, interactive data visualizations.</span>
-   <span id="247e"><a href="https://github.com/jonathandion/awesome-emails#readme" class="markup--anchor markup--li-anchor" title="https://github.com/jonathandion/awesome-emails#readme">Emails</a></span>
-   <span id="7d6a"><a href="https://github.com/petk/awesome-jquery#readme" class="markup--anchor markup--li-anchor" title="https://github.com/petk/awesome-jquery#readme">jQuery</a> — Easy to use JavaScript library for DOM manipulation.</span>
-   <span id="7d64"><a href="https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know#readme" class="markup--anchor markup--li-anchor" title="https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know#readme">Tips</a></span>
-   <span id="5626"><a href="https://github.com/notthetup/awesome-webaudio#readme" class="markup--anchor markup--li-anchor" title="https://github.com/notthetup/awesome-webaudio#readme">Web Audio</a></span>
-   <span id="7a0d"><a href="https://github.com/pazguille/offline-first#readme" class="markup--anchor markup--li-anchor" title="https://github.com/pazguille/offline-first#readme">Offline-First</a></span>
-   <span id="0559"><a href="https://github.com/agarrharr/awesome-static-website-services#readme" class="markup--anchor markup--li-anchor" title="https://github.com/agarrharr/awesome-static-website-services#readme">Static Website Services</a></span>
-   <span id="13d8"><a href="https://github.com/cyclejs-community/awesome-cyclejs#readme" class="markup--anchor markup--li-anchor" title="https://github.com/cyclejs-community/awesome-cyclejs#readme">Cycle.js</a> — Functional and reactive JavaScript framework.</span>
-   <span id="1016"><a href="https://github.com/dok/awesome-text-editing#readme" class="markup--anchor markup--li-anchor" title="https://github.com/dok/awesome-text-editing#readme">Text Editing</a></span>
-   <span id="a5e6"><a href="https://github.com/fliptheweb/motion-ui-design#readme" class="markup--anchor markup--li-anchor" title="https://github.com/fliptheweb/motion-ui-design#readme">Motion UI Design</a></span>
-   <span id="35a0"><a href="https://github.com/vuejs/awesome-vue#readme" class="markup--anchor markup--li-anchor" title="https://github.com/vuejs/awesome-vue#readme">Vue.js</a> — App framework.</span>
-   <span id="f894"><a href="https://github.com/sadcitizen/awesome-marionette#readme" class="markup--anchor markup--li-anchor" title="https://github.com/sadcitizen/awesome-marionette#readme">Marionette.js</a> — App framework.</span>
-   <span id="9c1a"><a href="https://github.com/aurelia-contrib/awesome-aurelia#readme" class="markup--anchor markup--li-anchor" title="https://github.com/aurelia-contrib/awesome-aurelia#readme">Aurelia</a> — App framework.</span>
-   <span id="9ce5"><a href="https://github.com/zingchart/awesome-charting#readme" class="markup--anchor markup--li-anchor" title="https://github.com/zingchart/awesome-charting#readme">Charting</a></span>
-   <span id="4f20"><a href="https://github.com/candelibas/awesome-ionic#readme" class="markup--anchor markup--li-anchor" title="https://github.com/candelibas/awesome-ionic#readme">Ionic Framework 2</a></span>
-   <span id="5c6e"><a href="https://github.com/ChromeDevTools/awesome-chrome-devtools#readme" class="markup--anchor markup--li-anchor" title="https://github.com/ChromeDevTools/awesome-chrome-devtools#readme">Chrome DevTools</a></span>
-   <span id="502e"><a href="https://github.com/jdrgomes/awesome-postcss#readme" class="markup--anchor markup--li-anchor" title="https://github.com/jdrgomes/awesome-postcss#readme">PostCSS</a> — CSS tool.</span>
-   <span id="b854"><a href="https://github.com/nikgraf/awesome-draft-js#readme" class="markup--anchor markup--li-anchor" title="https://github.com/nikgraf/awesome-draft-js#readme">Draft.js</a> — Rich text editor framework for React.</span>
-   <span id="28c2"><a href="https://github.com/TalAter/awesome-service-workers#readme" class="markup--anchor markup--li-anchor" title="https://github.com/TalAter/awesome-service-workers#readme">Service Workers</a></span>
-   <span id="279c"><a href="https://github.com/TalAter/awesome-progressive-web-apps#readme" class="markup--anchor markup--li-anchor" title="https://github.com/TalAter/awesome-progressive-web-apps#readme">Progressive Web Apps</a></span>
-   <span id="f72c"><a href="https://github.com/choojs/awesome-choo#readme" class="markup--anchor markup--li-anchor" title="https://github.com/choojs/awesome-choo#readme">choo</a> — App framework.</span>
-   <span id="5fd2"><a href="https://github.com/brillout/awesome-redux#readme" class="markup--anchor markup--li-anchor" title="https://github.com/brillout/awesome-redux#readme">Redux</a> — State container for JavaScript apps.</span>
-   <span id="3c7b"><a href="https://github.com/webpack-contrib/awesome-webpack#readme" class="markup--anchor markup--li-anchor" title="https://github.com/webpack-contrib/awesome-webpack#readme">webpack</a> — Module bundler.</span>
-   <span id="f9b0"><a href="https://github.com/browserify/awesome-browserify#readme" class="markup--anchor markup--li-anchor" title="https://github.com/browserify/awesome-browserify#readme">Browserify</a> — Module bundler.</span>
-   <span id="2d82"><a href="https://github.com/Famolus/awesome-sass#readme" class="markup--anchor markup--li-anchor" title="https://github.com/Famolus/awesome-sass#readme">Sass</a> — CSS preprocessor.</span>
-   <span id="f5fb"><a href="https://github.com/websemantics/awesome-ant-design#readme" class="markup--anchor markup--li-anchor" title="https://github.com/websemantics/awesome-ant-design#readme">Ant Design</a> — Enterprise-class UI design language.</span>
-   <span id="2d5c"><a href="https://github.com/LucasBassetti/awesome-less#readme" class="markup--anchor markup--li-anchor" title="https://github.com/LucasBassetti/awesome-less#readme">Less</a> — CSS preprocessor.</span>
-   <span id="36ba"><a href="https://github.com/sjfricke/awesome-webgl#readme" class="markup--anchor markup--li-anchor" title="https://github.com/sjfricke/awesome-webgl#readme">WebGL</a> — JavaScript API for rendering 3D graphics.</span>
-   <span id="d23e"><a href="https://github.com/preactjs/awesome-preact#readme" class="markup--anchor markup--li-anchor" title="https://github.com/preactjs/awesome-preact#readme">Preact</a> — App framework.</span>
-   <span id="7058"><a href="https://github.com/jbmoelker/progressive-enhancement-resources#readme" class="markup--anchor markup--li-anchor" title="https://github.com/jbmoelker/progressive-enhancement-resources#readme">Progressive Enhancement</a></span>
-   <span id="fc54"><a href="https://github.com/unicodeveloper/awesome-nextjs#readme" class="markup--anchor markup--li-anchor" title="https://github.com/unicodeveloper/awesome-nextjs#readme">Next.js</a> — Framework for server-rendered React apps.</span>
-   <span id="6d2a"><a href="https://github.com/web-padawan/awesome-lit-html#readme" class="markup--anchor markup--li-anchor" title="https://github.com/web-padawan/awesome-lit-html#readme">lit-html</a> — HTML templating library for JavaScript.</span>
-   <span id="314d"><a href="https://github.com/automata/awesome-jamstack#readme" class="markup--anchor markup--li-anchor" title="https://github.com/automata/awesome-jamstack#readme">JAMstack</a> — Modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt markup.</span>
-   <span id="a4d8"><a href="https://github.com/henrikwirth/awesome-wordpress-gatsby#readme" class="markup--anchor markup--li-anchor" title="https://github.com/henrikwirth/awesome-wordpress-gatsby#readme">WordPress-Gatsby</a> — Web development technology stack with WordPress as a back end and Gatsby as a front end.</span>
-   <span id="ac24"><a href="https://github.com/myshov/awesome-mobile-web-development#readme" class="markup--anchor markup--li-anchor" title="https://github.com/myshov/awesome-mobile-web-development#readme">Mobile Web Development</a> — Creating a great mobile web experience.</span>
-   <span id="333f"><a href="https://github.com/lauthieb/awesome-storybook#readme" class="markup--anchor markup--li-anchor" title="https://github.com/lauthieb/awesome-storybook#readme">Storybook</a> — Development environment for UI components.</span>
-   <span id="c2e9"><a href="https://github.com/AdrienTorris/awesome-blazor#readme" class="markup--anchor markup--li-anchor" title="https://github.com/AdrienTorris/awesome-blazor#readme">Blazor</a> — .NET web framework using C\#/Razor and HTML that runs in the browser with WebAssembly.</span>
-   <span id="2cf9"><a href="https://github.com/csabapalfi/awesome-pagespeed-metrics#readme" class="markup--anchor markup--li-anchor" title="https://github.com/csabapalfi/awesome-pagespeed-metrics#readme">PageSpeed Metrics</a> — Metrics to help understand page speed and user experience.</span>
-   <span id="82e6"><a href="https://github.com/aniftyco/awesome-tailwindcss#readme" class="markup--anchor markup--li-anchor" title="https://github.com/aniftyco/awesome-tailwindcss#readme">Tailwind CSS</a> — Utility-first CSS framework for rapid UI development.</span>
-   <span id="0177"><a href="https://github.com/seed-rs/awesome-seed-rs#readme" class="markup--anchor markup--li-anchor" title="https://github.com/seed-rs/awesome-seed-rs#readme">Seed</a> — Rust framework for creating web apps running in WebAssembly.</span>
-   <span id="bb96"><a href="https://github.com/pajaydev/awesome-web-performance-budget#readme" class="markup--anchor markup--li-anchor" title="https://github.com/pajaydev/awesome-web-performance-budget#readme">Web Performance Budget</a> — Techniques to ensure certain performance metrics for a website.</span>
-   <span id="0fd0"><a href="https://github.com/sergey-pimenov/awesome-web-animation#readme" class="markup--anchor markup--li-anchor" title="https://github.com/sergey-pimenov/awesome-web-animation#readme">Web Animation</a> — Animations in the browser with JavaScript, CSS, SVG, etc.</span>
-   <span id="3453"><a href="https://github.com/jetli/awesome-yew#readme" class="markup--anchor markup--li-anchor" title="https://github.com/jetli/awesome-yew#readme">Yew</a> — Rust framework inspired by Elm and React for creating multi-threaded frontend web apps with WebAssembly.</span>
-   <span id="8f7f"><a href="https://github.com/nadunindunil/awesome-material-ui#readme" class="markup--anchor markup--li-anchor" title="https://github.com/nadunindunil/awesome-material-ui#readme">Material-UI</a> — Material Design React components for faster and easier web development.</span>
-   <span id="f696"><a href="https://github.com/componently-com/awesome-building-blocks-for-web-apps#readme" class="markup--anchor markup--li-anchor" title="https://github.com/componently-com/awesome-building-blocks-for-web-apps#readme">Building Blocks for Web Apps</a> — Standalone features to be integrated into web apps.</span>
-   <span id="580f"><a href="https://github.com/TheComputerM/awesome-svelte#readme" class="markup--anchor markup--li-anchor" title="https://github.com/TheComputerM/awesome-svelte#readme">Svelte</a> — App framework.</span>
-   <span id="9d9f"><a href="https://github.com/klaufel/awesome-design-systems#readme" class="markup--anchor markup--li-anchor" title="https://github.com/klaufel/awesome-design-systems#readme">Design systems</a> — Collection of reusable components, guided by rules that ensure consistency and speed.</span>
-   <span id="91dd"><a href="https://github.com/innocenzi/awesome-inertiajs#readme" class="markup--anchor markup--li-anchor" title="https://github.com/innocenzi/awesome-inertiajs#readme">Inertia.js</a> — Make single-page apps without building an API.</span>
-   <span id="43e0"><a href="https://github.com/mdbootstrap/awesome-mdbootstrap#readme" class="markup--anchor markup--li-anchor" title="https://github.com/mdbootstrap/awesome-mdbootstrap#readme">MDBootstrap</a> — Templates, layouts, components, and widgets to rapidly build websites.</span>

### Back-End Development

-   <span id="69b3"><a href="https://github.com/mjhea0/awesome-flask#readme" class="markup--anchor markup--li-anchor" title="https://github.com/mjhea0/awesome-flask#readme">Flask</a> — Python framework.</span>
-   <span id="09bc"><a href="https://github.com/veggiemonk/awesome-docker#readme" class="markup--anchor markup--li-anchor" title="https://github.com/veggiemonk/awesome-docker#readme">Docker</a></span>
-   <span id="aec1"><a href="https://github.com/iJackUA/awesome-vagrant#readme" class="markup--anchor markup--li-anchor" title="https://github.com/iJackUA/awesome-vagrant#readme">Vagrant</a> — Automation virtual machine environment.</span>
-   <span id="1db6"><a href="https://github.com/uralbash/awesome-pyramid#readme" class="markup--anchor markup--li-anchor" title="https://github.com/uralbash/awesome-pyramid#readme">Pyramid</a> — Python framework.</span>
-   <span id="4a3f"><a href="https://github.com/PerfectCarl/awesome-play1#readme" class="markup--anchor markup--li-anchor" title="https://github.com/PerfectCarl/awesome-play1#readme">Play1 Framework</a></span>
-   <span id="c093"><a href="https://github.com/friendsofcake/awesome-cakephp#readme" class="markup--anchor markup--li-anchor" title="https://github.com/friendsofcake/awesome-cakephp#readme">CakePHP</a> — PHP framework.</span>
-   <span id="3d7a"><a href="https://github.com/sitepoint-editors/awesome-symfony#readme" class="markup--anchor markup--li-anchor" title="https://github.com/sitepoint-editors/awesome-symfony#readme">Symfony</a> — PHP framework.</span>
-   <span id="d500"><a href="https://github.com/pehapkari/awesome-symfony-education#readme" class="markup--anchor markup--li-anchor" title="https://github.com/pehapkari/awesome-symfony-education#readme">Education</a></span>
-   <span id="9131"><a href="https://github.com/chiraggude/awesome-laravel#readme" class="markup--anchor markup--li-anchor" title="https://github.com/chiraggude/awesome-laravel#readme">Laravel</a> — PHP framework.</span>
-   <span id="fab8"><a href="https://github.com/fukuball/Awesome-Laravel-Education#readme" class="markup--anchor markup--li-anchor" title="https://github.com/fukuball/Awesome-Laravel-Education#readme">Education</a></span>
-   <span id="0143"><a href="https://github.com/blade-ui-kit/awesome-tall-stack#readme" class="markup--anchor markup--li-anchor" title="https://github.com/blade-ui-kit/awesome-tall-stack#readme">TALL Stack</a> — Full-stack development solution featuring libraries built by the Laravel community.</span>
-   <span id="bc45"><a href="https://github.com/gramantin/awesome-rails#readme" class="markup--anchor markup--li-anchor" title="https://github.com/gramantin/awesome-rails#readme">Rails</a> — Web app framework for Ruby.</span>
-   <span id="9591"><a href="https://github.com/hothero/awesome-rails-gem#readme" class="markup--anchor markup--li-anchor" title="https://github.com/hothero/awesome-rails-gem#readme">Gems</a> — Packages.</span>
-   <span id="0eb4"><a href="https://github.com/phalcon/awesome-phalcon#readme" class="markup--anchor markup--li-anchor" title="https://github.com/phalcon/awesome-phalcon#readme">Phalcon</a> — PHP framework.</span>
-   <span id="b168"><a href="https://github.com/phanan/htaccess#readme" class="markup--anchor markup--li-anchor" title="https://github.com/phanan/htaccess#readme">Useful </a>`.htaccess` <a href="https://github.com/phanan/htaccess#readme" class="markup--anchor markup--li-anchor" title="https://github.com/phanan/htaccess#readme">Snippets</a></span>
-   <span id="5664"><a href="https://github.com/fcambus/nginx-resources#readme" class="markup--anchor markup--li-anchor" title="https://github.com/fcambus/nginx-resources#readme">nginx</a> — Web server.</span>
-   <span id="c8c5"><a href="https://github.com/stve/awesome-dropwizard#readme" class="markup--anchor markup--li-anchor" title="https://github.com/stve/awesome-dropwizard#readme">Dropwizard</a> — Java framework.</span>
-   <span id="62b8"><a href="https://github.com/ramitsurana/awesome-kubernetes#readme" class="markup--anchor markup--li-anchor" title="https://github.com/ramitsurana/awesome-kubernetes#readme">Kubernetes</a> — Open-source platform that automates Linux container operations.</span>
-   <span id="1d48"><a href="https://github.com/unicodeveloper/awesome-lumen#readme" class="markup--anchor markup--li-anchor" title="https://github.com/unicodeveloper/awesome-lumen#readme">Lumen</a> — PHP micro-framework.</span>
-   <span id="3a99"><a href="https://github.com/pmuens/awesome-serverless#readme" class="markup--anchor markup--li-anchor" title="https://github.com/pmuens/awesome-serverless#readme">Serverless Framework</a> — Serverless computing and serverless architectures.</span>
-   <span id="3829"><a href="https://github.com/PhantomYdn/awesome-wicket#readme" class="markup--anchor markup--li-anchor" title="https://github.com/PhantomYdn/awesome-wicket#readme">Apache Wicket</a> — Java web app framework.</span>
-   <span id="451f"><a href="https://github.com/vert-x3/vertx-awesome#readme" class="markup--anchor markup--li-anchor" title="https://github.com/vert-x3/vertx-awesome#readme">Vert.x</a> — Toolkit for building reactive apps on the JVM.</span>
-   <span id="2262"><a href="https://github.com/shuaibiyy/awesome-terraform#readme" class="markup--anchor markup--li-anchor" title="https://github.com/shuaibiyy/awesome-terraform#readme">Terraform</a> — Tool for building, changing, and versioning infrastructure.</span>
-   <span id="43ef"><a href="https://github.com/Cellane/awesome-vapor#readme" class="markup--anchor markup--li-anchor" title="https://github.com/Cellane/awesome-vapor#readme">Vapor</a> — Server-side development in Swift.</span>
-   <span id="4916"><a href="https://github.com/ucg8j/awesome-dash#readme" class="markup--anchor markup--li-anchor" title="https://github.com/ucg8j/awesome-dash#readme">Dash</a> — Python web app framework.</span>
-   <span id="cbc1"><a href="https://github.com/mjhea0/awesome-fastapi#readme" class="markup--anchor markup--li-anchor" title="https://github.com/mjhea0/awesome-fastapi#readme">FastAPI</a> — Python web app framework.</span>
-   <span id="e871"><a href="https://github.com/kolomied/awesome-cdk#readme" class="markup--anchor markup--li-anchor" title="https://github.com/kolomied/awesome-cdk#readme">CDK</a> — Open-source software development framework for defining cloud infrastructure in code.</span>
-   <span id="2426"><a href="https://github.com/kdeldycke/awesome-iam#readme" class="markup--anchor markup--li-anchor" title="https://github.com/kdeldycke/awesome-iam#readme">IAM</a> — User accounts, authentication and authorization.</span>

### Computer Science

-   <span id="338f"><a href="https://github.com/prakhar1989/awesome-courses#readme" class="markup--anchor markup--li-anchor" title="https://github.com/prakhar1989/awesome-courses#readme">University Courses</a></span>
-   <span id="9eda"><a href="https://github.com/academic/awesome-datascience#readme" class="markup--anchor markup--li-anchor" title="https://github.com/academic/awesome-datascience#readme">Data Science</a></span>
-   <span id="35c4"><a href="https://github.com/siboehm/awesome-learn-datascience#readme" class="markup--anchor markup--li-anchor" title="https://github.com/siboehm/awesome-learn-datascience#readme">Tutorials</a></span>
-   <span id="5a39"><a href="https://github.com/josephmisiti/awesome-machine-learning#readme" class="markup--anchor markup--li-anchor" title="https://github.com/josephmisiti/awesome-machine-learning#readme">Machine Learning</a></span>
-   <span id="84c4"><a href="https://github.com/ujjwalkarn/Machine-Learning-Tutorials#readme" class="markup--anchor markup--li-anchor" title="https://github.com/ujjwalkarn/Machine-Learning-Tutorials#readme">Tutorials</a></span>
-   <span id="e5db"><a href="https://github.com/arbox/machine-learning-with-ruby#readme" class="markup--anchor markup--li-anchor" title="https://github.com/arbox/machine-learning-with-ruby#readme">ML with Ruby</a> — Learning, implementing, and applying Machine Learning using Ruby.</span>
-   <span id="8670"><a href="https://github.com/likedan/Awesome-CoreML-Models#readme" class="markup--anchor markup--li-anchor" title="https://github.com/likedan/Awesome-CoreML-Models#readme">Core ML Models</a> — Models for Apple’s machine learning framework.</span>
-   <span id="c5ee"><a href="https://github.com/h2oai/awesome-h2o#readme" class="markup--anchor markup--li-anchor" title="https://github.com/h2oai/awesome-h2o#readme">H2O</a> — Open source distributed machine learning platform written in Java with APIs in R, Python, and Scala.</span>
-   <span id="a5bd"><a href="https://github.com/SE-ML/awesome-seml#readme" class="markup--anchor markup--li-anchor" title="https://github.com/SE-ML/awesome-seml#readme">Software Engineering for Machine Learning</a> — From experiment to production-level machine learning.</span>
-   <span id="ec21"><a href="https://github.com/georgezouq/awesome-ai-in-finance#readme" class="markup--anchor markup--li-anchor" title="https://github.com/georgezouq/awesome-ai-in-finance#readme">AI in Finance</a> — Solving problems in finance with machine learning.</span>
-   <span id="db29"><a href="https://github.com/n2cholas/awesome-jax#readme" class="markup--anchor markup--li-anchor" title="https://github.com/n2cholas/awesome-jax#readme">JAX</a> — Automatic differentiation and XLA compilation brought together for high-performance machine learning research.</span>
-   <span id="fc4c"><a href="https://github.com/altamiracorp/awesome-xai#readme" class="markup--anchor markup--li-anchor" title="https://github.com/altamiracorp/awesome-xai#readme">XAI</a> — Providing insight, explanations, and interpretability to machine learning methods.</span>
-   <span id="5323"><a href="https://github.com/edobashira/speech-language-processing#readme" class="markup--anchor markup--li-anchor" title="https://github.com/edobashira/speech-language-processing#readme">Speech and Natural Language Processing</a></span>
-   <span id="b307"><a href="https://github.com/dav009/awesome-spanish-nlp#readme" class="markup--anchor markup--li-anchor" title="https://github.com/dav009/awesome-spanish-nlp#readme">Spanish</a></span>
-   <span id="c414"><a href="https://github.com/arbox/nlp-with-ruby#readme" class="markup--anchor markup--li-anchor" title="https://github.com/arbox/nlp-with-ruby#readme">NLP with Ruby</a></span>
-   <span id="1fcd"><a href="https://github.com/seriousran/awesome-qa#readme" class="markup--anchor markup--li-anchor" title="https://github.com/seriousran/awesome-qa#readme">Question Answering</a> — The science of asking and answering in natural language with a machine.</span>
-   <span id="930b"><a href="https://github.com/tokenmill/awesome-nlg#readme" class="markup--anchor markup--li-anchor" title="https://github.com/tokenmill/awesome-nlg#readme">Natural Language Generation</a> — Generation of text used in data to text, conversational agents, and narrative generation applications.</span>
-   <span id="37d9"><a href="https://github.com/theimpossibleastronaut/awesome-linguistics#readme" class="markup--anchor markup--li-anchor" title="https://github.com/theimpossibleastronaut/awesome-linguistics#readme">Linguistics</a></span>
-   <span id="fba8"><a href="https://github.com/sobolevn/awesome-cryptography#readme" class="markup--anchor markup--li-anchor" title="https://github.com/sobolevn/awesome-cryptography#readme">Cryptography</a></span>
-   <span id="96e8"><a href="https://github.com/pFarb/awesome-crypto-papers#readme" class="markup--anchor markup--li-anchor" title="https://github.com/pFarb/awesome-crypto-papers#readme">Papers</a> — Theory basics for using cryptography by non-cryptographers.</span>
-   <span id="68cf"><a href="https://github.com/jbhuang0604/awesome-computer-vision#readme" class="markup--anchor markup--li-anchor" title="https://github.com/jbhuang0604/awesome-computer-vision#readme">Computer Vision</a></span>
-   <span id="7c95"><a href="https://github.com/ChristosChristofidis/awesome-deep-learning#readme" class="markup--anchor markup--li-anchor" title="https://github.com/ChristosChristofidis/awesome-deep-learning#readme">Deep Learning</a> — Neural networks.</span>
-   <span id="a7b6"><a href="https://github.com/jtoy/awesome-tensorflow#readme" class="markup--anchor markup--li-anchor" title="https://github.com/jtoy/awesome-tensorflow#readme">TensorFlow</a> — Library for machine intelligence.</span>
-   <span id="5143"><a href="https://github.com/aaronhma/awesome-tensorflow-js#readme" class="markup--anchor markup--li-anchor" title="https://github.com/aaronhma/awesome-tensorflow-js#readme">TensorFlow.js</a> — WebGL-accelerated machine learning JavaScript library for training and deploying models.</span>
-   <span id="0a2a"><a href="https://github.com/margaretmz/awesome-tensorflow-lite#readme" class="markup--anchor markup--li-anchor" title="https://github.com/margaretmz/awesome-tensorflow-lite#readme">TensorFlow Lite</a> — Framework that optimizes TensorFlow models for on-device machine learning.</span>
-   <span id="bd9c"><a href="https://github.com/terryum/awesome-deep-learning-papers#readme" class="markup--anchor markup--li-anchor" title="https://github.com/terryum/awesome-deep-learning-papers#readme">Papers</a> — The most cited deep learning papers.</span>
-   <span id="47e6"><a href="https://github.com/guillaume-chevalier/awesome-deep-learning-resources#readme" class="markup--anchor markup--li-anchor" title="https://github.com/guillaume-chevalier/awesome-deep-learning-resources#readme">Education</a></span>
-   <span id="fd0a"><a href="https://github.com/kjw0612/awesome-deep-vision#readme" class="markup--anchor markup--li-anchor" title="https://github.com/kjw0612/awesome-deep-vision#readme">Deep Vision</a></span>
-   <span id="2a4a"><a href="https://github.com/ossu/computer-science#readme" class="markup--anchor markup--li-anchor" title="https://github.com/ossu/computer-science#readme">Open Source Society University</a></span>
-   <span id="e7ad"><a href="https://github.com/lucasviola/awesome-functional-programming#readme" class="markup--anchor markup--li-anchor" title="https://github.com/lucasviola/awesome-functional-programming#readme">Functional Programming</a></span>
-   <span id="1a7d"><a href="https://github.com/dspinellis/awesome-msr#readme" class="markup--anchor markup--li-anchor" title="https://github.com/dspinellis/awesome-msr#readme">Empirical Software Engineering</a> — Evidence-based research on software systems.</span>
-   <span id="2dea"><a href="https://github.com/analysis-tools-dev/static-analysis#readme" class="markup--anchor markup--li-anchor" title="https://github.com/analysis-tools-dev/static-analysis#readme">Static Analysis &amp; Code Quality</a></span>
-   <span id="774a"><a href="https://github.com/harpribot/awesome-information-retrieval#readme" class="markup--anchor markup--li-anchor" title="https://github.com/harpribot/awesome-information-retrieval#readme">Information Retrieval</a> — Learn to develop your own search engine.</span>
-   <span id="108f"><a href="https://github.com/desireevl/awesome-quantum-computing#readme" class="markup--anchor markup--li-anchor" title="https://github.com/desireevl/awesome-quantum-computing#readme">Quantum Computing</a> — Computing which utilizes quantum mechanics and qubits on quantum computers.</span>
-   <span id="28e9"><a href="https://github.com/mostafatouny/awesome-theoretical-computer-science#readme" class="markup--anchor markup--li-anchor" title="https://github.com/mostafatouny/awesome-theoretical-computer-science#readme">Theoretical Computer Science</a> — The interplay of computer science and pure mathematics, distinguished by its emphasis on mathematical rigour and technique.</span>

### Big Data

-   <span id="fe44"><a href="https://github.com/onurakpolat/awesome-bigdata#readme" class="markup--anchor markup--li-anchor" title="https://github.com/onurakpolat/awesome-bigdata#readme">Big Data</a></span>
-   <span id="96a4"><a href="https://github.com/awesomedata/awesome-public-datasets#readme" class="markup--anchor markup--li-anchor" title="https://github.com/awesomedata/awesome-public-datasets#readme">Public Datasets</a></span>
-   <span id="c386"><a href="https://github.com/youngwookim/awesome-hadoop#readme" class="markup--anchor markup--li-anchor" title="https://github.com/youngwookim/awesome-hadoop#readme">Hadoop</a> — Framework for distributed storage and processing of very large data sets.</span>
-   <span id="373e"><a href="https://github.com/igorbarinov/awesome-data-engineering#readme" class="markup--anchor markup--li-anchor" title="https://github.com/igorbarinov/awesome-data-engineering#readme">Data Engineering</a></span>
-   <span id="1bf9"><a href="https://github.com/manuzhang/awesome-streaming#readme" class="markup--anchor markup--li-anchor" title="https://github.com/manuzhang/awesome-streaming#readme">Streaming</a></span>
-   <span id="287a"><a href="https://github.com/awesome-spark/awesome-spark#readme" class="markup--anchor markup--li-anchor" title="https://github.com/awesome-spark/awesome-spark#readme">Apache Spark</a> — Unified engine for large-scale data processing.</span>
-   <span id="b74d"><a href="https://github.com/ambster-public/awesome-qlik#readme" class="markup--anchor markup--li-anchor" title="https://github.com/ambster-public/awesome-qlik#readme">Qlik</a> — Business intelligence platform for data visualization, analytics, and reporting apps.</span>
-   <span id="68e5"><a href="https://github.com/sduff/awesome-splunk#readme" class="markup--anchor markup--li-anchor" title="https://github.com/sduff/awesome-splunk#readme">Splunk</a> — Platform for searching, monitoring, and analyzing structured and unstructured machine-generated big data in real-time.</span>

### Theory

-   <span id="1de7"><a href="https://github.com/papers-we-love/papers-we-love#readme" class="markup--anchor markup--li-anchor" title="https://github.com/papers-we-love/papers-we-love#readme">Papers We Love</a></span>
-   <span id="f12e"><a href="https://github.com/JanVanRyswyck/awesome-talks#readme" class="markup--anchor markup--li-anchor" title="https://github.com/JanVanRyswyck/awesome-talks#readme">Talks</a></span>
-   <span id="ecec"><a href="https://github.com/tayllan/awesome-algorithms#readme" class="markup--anchor markup--li-anchor" title="https://github.com/tayllan/awesome-algorithms#readme">Algorithms</a></span>
-   <span id="c887"><a href="https://github.com/gaerae/awesome-algorithms-education#readme" class="markup--anchor markup--li-anchor" title="https://github.com/gaerae/awesome-algorithms-education#readme">Education</a> — Learning and practicing.</span>
-   <span id="56d6"><a href="https://github.com/enjalot/algovis#readme" class="markup--anchor markup--li-anchor" title="https://github.com/enjalot/algovis#readme">Algorithm Visualizations</a></span>
-   <span id="84bb"><a href="https://github.com/owainlewis/awesome-artificial-intelligence#readme" class="markup--anchor markup--li-anchor" title="https://github.com/owainlewis/awesome-artificial-intelligence#readme">Artificial Intelligence</a></span>
-   <span id="0183"><a href="https://github.com/marcobiedermann/search-engine-optimization#readme" class="markup--anchor markup--li-anchor" title="https://github.com/marcobiedermann/search-engine-optimization#readme">Search Engine Optimization</a></span>
-   <span id="9555"><a href="https://github.com/lnishan/awesome-competitive-programming#readme" class="markup--anchor markup--li-anchor" title="https://github.com/lnishan/awesome-competitive-programming#readme">Competitive Programming</a></span>
-   <span id="d76f"><a href="https://github.com/rossant/awesome-math#readme" class="markup--anchor markup--li-anchor" title="https://github.com/rossant/awesome-math#readme">Math</a></span>
-   <span id="d330"><a href="https://github.com/passy/awesome-recursion-schemes#readme" class="markup--anchor markup--li-anchor" title="https://github.com/passy/awesome-recursion-schemes#readme">Recursion Schemes</a> — Traversing nested data structures.</span>

### Books

-   <span id="55cf"><a href="https://github.com/EbookFoundation/free-programming-books#readme" class="markup--anchor markup--li-anchor" title="https://github.com/EbookFoundation/free-programming-books#readme">Free Programming Books</a></span>
-   <span id="58b9"><a href="https://github.com/dariubs/GoBooks#readme" class="markup--anchor markup--li-anchor" title="https://github.com/dariubs/GoBooks#readme">Go Books</a></span>
-   <span id="1580"><a href="https://github.com/RomanTsegelskyi/rbooks#readme" class="markup--anchor markup--li-anchor" title="https://github.com/RomanTsegelskyi/rbooks#readme">R Books</a></span>
-   <span id="759a"><a href="https://github.com/hackerkid/Mind-Expanding-Books#readme" class="markup--anchor markup--li-anchor" title="https://github.com/hackerkid/Mind-Expanding-Books#readme">Mind Expanding Books</a></span>
-   <span id="6c1d"><a href="https://github.com/TalAter/awesome-book-authoring#readme" class="markup--anchor markup--li-anchor" title="https://github.com/TalAter/awesome-book-authoring#readme">Book Authoring</a></span>
-   <span id="8646"><a href="https://github.com/sger/ElixirBooks#readme" class="markup--anchor markup--li-anchor" title="https://github.com/sger/ElixirBooks#readme">Elixir Books</a></span>

### Editors

-   <span id="1ea8"><a href="https://github.com/dreikanter/sublime-bookmarks#readme" class="markup--anchor markup--li-anchor" title="https://github.com/dreikanter/sublime-bookmarks#readme">Sublime Text</a></span>
-   <span id="061b"><a href="https://github.com/mhinz/vim-galore#readme" class="markup--anchor markup--li-anchor" title="https://github.com/mhinz/vim-galore#readme">Vim</a></span>
-   <span id="91af"><a href="https://github.com/emacs-tw/awesome-emacs#readme" class="markup--anchor markup--li-anchor" title="https://github.com/emacs-tw/awesome-emacs#readme">Emacs</a></span>
-   <span id="49e1"><a href="https://github.com/mehcode/awesome-atom#readme" class="markup--anchor markup--li-anchor" title="https://github.com/mehcode/awesome-atom#readme">Atom</a> — Open-source and hackable text editor.</span>
-   <span id="b43e"><a href="https://github.com/viatsko/awesome-vscode#readme" class="markup--anchor markup--li-anchor" title="https://github.com/viatsko/awesome-vscode#readme">Visual Studio Code</a> — Cross-platform open-source text editor.</span>

### Gaming

-   <span id="4dec"><a href="https://github.com/ellisonleao/magictools#readme" class="markup--anchor markup--li-anchor" title="https://github.com/ellisonleao/magictools#readme">Game Development</a></span>
-   <span id="2b79"><a href="https://github.com/hzoo/awesome-gametalks#readme" class="markup--anchor markup--li-anchor" title="https://github.com/hzoo/awesome-gametalks#readme">Game Talks</a></span>
-   <span id="9adc"><a href="https://github.com/Calinou/awesome-godot#readme" class="markup--anchor markup--li-anchor" title="https://github.com/Calinou/awesome-godot#readme">Godot</a> — Game engine.</span>
-   <span id="baec"><a href="https://github.com/leereilly/games#readme" class="markup--anchor markup--li-anchor" title="https://github.com/leereilly/games#readme">Open Source Games</a></span>
-   <span id="023b"><a href="https://github.com/RyanNielson/awesome-unity#readme" class="markup--anchor markup--li-anchor" title="https://github.com/RyanNielson/awesome-unity#readme">Unity</a> — Game engine.</span>
-   <span id="702e"><a href="https://github.com/hkirat/awesome-chess#readme" class="markup--anchor markup--li-anchor" title="https://github.com/hkirat/awesome-chess#readme">Chess</a></span>
-   <span id="7162"><a href="https://github.com/love2d-community/awesome-love2d#readme" class="markup--anchor markup--li-anchor" title="https://github.com/love2d-community/awesome-love2d#readme">LÖVE</a> — Game engine.</span>
-   <span id="cebb"><a href="https://github.com/pico-8/awesome-PICO-8#readme" class="markup--anchor markup--li-anchor" title="https://github.com/pico-8/awesome-PICO-8#readme">PICO-8</a> — Fantasy console.</span>
-   <span id="59e8"><a href="https://github.com/gbdev/awesome-gbdev#readme" class="markup--anchor markup--li-anchor" title="https://github.com/gbdev/awesome-gbdev#readme">Game Boy Development</a></span>
-   <span id="49b7"><a href="https://github.com/WebCreationClub/awesome-construct#readme" class="markup--anchor markup--li-anchor" title="https://github.com/WebCreationClub/awesome-construct#readme">Construct 2</a> — Game engine.</span>
-   <span id="0344"><a href="https://github.com/stetso/awesome-gideros#readme" class="markup--anchor markup--li-anchor" title="https://github.com/stetso/awesome-gideros#readme">Gideros</a> — Game engine.</span>
-   <span id="13a4"><a href="https://github.com/bs-community/awesome-minecraft#readme" class="markup--anchor markup--li-anchor" title="https://github.com/bs-community/awesome-minecraft#readme">Minecraft</a> — Sandbox video game.</span>
-   <span id="1b64"><a href="https://github.com/leomaurodesenv/game-datasets#readme" class="markup--anchor markup--li-anchor" title="https://github.com/leomaurodesenv/game-datasets#readme">Game Datasets</a> — Materials and datasets for Artificial Intelligence in games.</span>
-   <span id="527f"><a href="https://github.com/Dvergar/awesome-haxe-gamedev#readme" class="markup--anchor markup--li-anchor" title="https://github.com/Dvergar/awesome-haxe-gamedev#readme">Haxe Game Development</a> — A high-level strongly typed programming language used to produce cross-platform native code.</span>
-   <span id="90d7"><a href="https://github.com/rafaskb/awesome-libgdx#readme" class="markup--anchor markup--li-anchor" title="https://github.com/rafaskb/awesome-libgdx#readme">libGDX</a> — Java game framework.</span>
-   <span id="8247"><a href="https://github.com/playcanvas/awesome-playcanvas#readme" class="markup--anchor markup--li-anchor" title="https://github.com/playcanvas/awesome-playcanvas#readme">PlayCanvas</a> — Game engine.</span>
-   <span id="be41"><a href="https://github.com/radek-sprta/awesome-game-remakes#readme" class="markup--anchor markup--li-anchor" title="https://github.com/radek-sprta/awesome-game-remakes#readme">Game Remakes</a> — Actively maintained open-source game remakes.</span>
-   <span id="f182"><a href="https://github.com/flame-engine/awesome-flame#readme" class="markup--anchor markup--li-anchor" title="https://github.com/flame-engine/awesome-flame#readme">Flame</a> — Game engine for Flutter.</span>
-   <span id="81f0"><a href="https://github.com/mhxion/awesome-discord-communities#readme" class="markup--anchor markup--li-anchor" title="https://github.com/mhxion/awesome-discord-communities#readme">Discord Communities</a> — Chat with friends and communities.</span>
-   <span id="3ff7"><a href="https://github.com/tobiasvl/awesome-chip-8#readme" class="markup--anchor markup--li-anchor" title="https://github.com/tobiasvl/awesome-chip-8#readme">CHIP-8</a> — Virtual computer game machine from the 70s.</span>
-   <span id="1109"><a href="https://github.com/michelpereira/awesome-games-of-coding#readme" class="markup--anchor markup--li-anchor" title="https://github.com/michelpereira/awesome-games-of-coding#readme">Games of Coding</a> — Learn a programming language by making games.</span>

### Development Environment

-   <span id="0bd5"><a href="https://github.com/sindresorhus/quick-look-plugins#readme" class="markup--anchor markup--li-anchor" title="https://github.com/sindresorhus/quick-look-plugins#readme">Quick Look Plugins</a> — For macOS.</span>
-   <span id="5c62"><a href="https://github.com/jondot/awesome-devenv#readme" class="markup--anchor markup--li-anchor" title="https://github.com/jondot/awesome-devenv#readme">Dev Env</a></span>
-   <span id="55de"><a href="https://github.com/webpro/awesome-dotfiles#readme" class="markup--anchor markup--li-anchor" title="https://github.com/webpro/awesome-dotfiles#readme">Dotfiles</a></span>
-   <span id="5fdd"><a href="https://github.com/alebcay/awesome-shell#readme" class="markup--anchor markup--li-anchor" title="https://github.com/alebcay/awesome-shell#readme">Shell</a></span>
-   <span id="4292"><a href="https://github.com/jorgebucaran/awsm.fish#readme" class="markup--anchor markup--li-anchor" title="https://github.com/jorgebucaran/awsm.fish#readme">Fish</a> — User-friendly shell.</span>
-   <span id="8eb3"><a href="https://github.com/agarrharr/awesome-cli-apps#readme" class="markup--anchor markup--li-anchor" title="https://github.com/agarrharr/awesome-cli-apps#readme">Command-Line Apps</a></span>
-   <span id="88c3"><a href="https://github.com/unixorn/awesome-zsh-plugins#readme" class="markup--anchor markup--li-anchor" title="https://github.com/unixorn/awesome-zsh-plugins#readme">ZSH Plugins</a></span>
-   <span id="2e19"><a href="https://github.com/phillipadsmith/awesome-github#readme" class="markup--anchor markup--li-anchor" title="https://github.com/phillipadsmith/awesome-github#readme">GitHub</a> — Hosting service for Git repositories.</span>
-   <span id="d849"><a href="https://github.com/stefanbuck/awesome-browser-extensions-for-github#readme" class="markup--anchor markup--li-anchor" title="https://github.com/stefanbuck/awesome-browser-extensions-for-github#readme">Browser Extensions</a></span>
-   <span id="3511"><a href="https://github.com/tiimgreen/github-cheat-sheet#readme" class="markup--anchor markup--li-anchor" title="https://github.com/tiimgreen/github-cheat-sheet#readme">Cheat Sheet</a></span>
-   <span id="e465"><a href="https://github.com/matchai/awesome-pinned-gists#readme" class="markup--anchor markup--li-anchor" title="https://github.com/matchai/awesome-pinned-gists#readme">Pinned Gists</a> — Dynamic pinned gists for your GitHub profile.</span>
-   <span id="abf8"><a href="https://github.com/arslanbilal/git-cheat-sheet#readme" class="markup--anchor markup--li-anchor" title="https://github.com/arslanbilal/git-cheat-sheet#readme">Git Cheat Sheet &amp; Git Flow</a></span>
-   <span id="942f"><a href="https://github.com/git-tips/tips#readme" class="markup--anchor markup--li-anchor" title="https://github.com/git-tips/tips#readme">Git Tips</a></span>
-   <span id="bb00"><a href="https://github.com/stevemao/awesome-git-addons#readme" class="markup--anchor markup--li-anchor" title="https://github.com/stevemao/awesome-git-addons#readme">Git Add-ons</a> — Enhance the `git` CLI.</span>
-   <span id="58b2"><a href="https://github.com/compscilauren/awesome-git-hooks#readme" class="markup--anchor markup--li-anchor" title="https://github.com/compscilauren/awesome-git-hooks#readme">Git Hooks</a> — Scripts for automating tasks during `git` workflows.</span>
-   <span id="820c"><a href="https://github.com/moul/awesome-ssh#readme" class="markup--anchor markup--li-anchor" title="https://github.com/moul/awesome-ssh#readme">SSH</a></span>
-   <span id="b3a4"><a href="https://github.com/tvvocold/FOSS-for-Dev#readme" class="markup--anchor markup--li-anchor" title="https://github.com/tvvocold/FOSS-for-Dev#readme">FOSS for Developers</a></span>
-   <span id="c14a"><a href="https://github.com/bnb/awesome-hyper#readme" class="markup--anchor markup--li-anchor" title="https://github.com/bnb/awesome-hyper#readme">Hyper</a> — Cross-platform terminal app built on web technologies.</span>
-   <span id="7158"><a href="https://github.com/janikvonrotz/awesome-powershell#readme" class="markup--anchor markup--li-anchor" title="https://github.com/janikvonrotz/awesome-powershell#readme">PowerShell</a> — Cross-platform object-oriented shell.</span>
-   <span id="3340"><a href="https://github.com/alfred-workflows/awesome-alfred-workflows#readme" class="markup--anchor markup--li-anchor" title="https://github.com/alfred-workflows/awesome-alfred-workflows#readme">Alfred Workflows</a> — Productivity app for macOS.</span>
-   <span id="1d3d"><a href="https://github.com/k4m4/terminals-are-sexy#readme" class="markup--anchor markup--li-anchor" title="https://github.com/k4m4/terminals-are-sexy#readme">Terminals Are Sexy</a></span>
-   <span id="cccc"><a href="https://github.com/sdras/awesome-actions#readme" class="markup--anchor markup--li-anchor" title="https://github.com/sdras/awesome-actions#readme">GitHub Actions</a> — Create tasks to automate your workflow and share them with others on GitHub.</span>

### Entertainment

-   <span id="53f3"><a href="https://github.com/sindresorhus/awesome-scifi#readme" class="markup--anchor markup--li-anchor" title="https://github.com/sindresorhus/awesome-scifi#readme">Science Fiction</a> — Scifi.</span>
-   <span id="43c7"><a href="https://github.com/RichardLitt/awesome-fantasy#readme" class="markup--anchor markup--li-anchor" title="https://github.com/RichardLitt/awesome-fantasy#readme">Fantasy</a></span>
-   <span id="02b2"><a href="https://github.com/ayr-ton/awesome-geek-podcasts#readme" class="markup--anchor markup--li-anchor" title="https://github.com/ayr-ton/awesome-geek-podcasts#readme">Podcasts</a></span>
-   <span id="ad9d"><a href="https://github.com/zudochkin/awesome-newsletters#readme" class="markup--anchor markup--li-anchor" title="https://github.com/zudochkin/awesome-newsletters#readme">Email Newsletters</a></span>
-   <span id="626a"><a href="https://github.com/victorlaerte/awesome-it-quotes#readme" class="markup--anchor markup--li-anchor" title="https://github.com/victorlaerte/awesome-it-quotes#readme">IT Quotes</a></span>

### Databases

-   <span id="888d"><a href="https://github.com/numetriclabz/awesome-db#readme" class="markup--anchor markup--li-anchor" title="https://github.com/numetriclabz/awesome-db#readme">Database</a></span>
-   <span id="c03a"><a href="https://github.com/shlomi-noach/awesome-mysql#readme" class="markup--anchor markup--li-anchor" title="https://github.com/shlomi-noach/awesome-mysql#readme">MySQL</a></span>
-   <span id="5d02"><a href="https://github.com/dahlia/awesome-sqlalchemy#readme" class="markup--anchor markup--li-anchor" title="https://github.com/dahlia/awesome-sqlalchemy#readme">SQLAlchemy</a></span>
-   <span id="bee5"><a href="https://github.com/mark-rushakoff/awesome-influxdb#readme" class="markup--anchor markup--li-anchor" title="https://github.com/mark-rushakoff/awesome-influxdb#readme">InfluxDB</a></span>
-   <span id="5124"><a href="https://github.com/neueda/awesome-neo4j#readme" class="markup--anchor markup--li-anchor" title="https://github.com/neueda/awesome-neo4j#readme">Neo4j</a></span>
-   <span id="fd86"><a href="https://github.com/ramnes/awesome-mongodb#readme" class="markup--anchor markup--li-anchor" title="https://github.com/ramnes/awesome-mongodb#readme">MongoDB</a> — NoSQL database.</span>
-   <span id="7083"><a href="https://github.com/d3viant0ne/awesome-rethinkdb#readme" class="markup--anchor markup--li-anchor" title="https://github.com/d3viant0ne/awesome-rethinkdb#readme">RethinkDB</a></span>
-   <span id="4390"><a href="https://github.com/mohataher/awesome-tinkerpop#readme" class="markup--anchor markup--li-anchor" title="https://github.com/mohataher/awesome-tinkerpop#readme">TinkerPop</a> — Graph computing framework.</span>
-   <span id="c69c"><a href="https://github.com/dhamaniasad/awesome-postgres#readme" class="markup--anchor markup--li-anchor" title="https://github.com/dhamaniasad/awesome-postgres#readme">PostgreSQL</a> — Object-relational database.</span>
-   <span id="93fb"><a href="https://github.com/quangv/awesome-couchdb#readme" class="markup--anchor markup--li-anchor" title="https://github.com/quangv/awesome-couchdb#readme">CouchDB</a> — Document-oriented NoSQL database.</span>
-   <span id="91f7"><a href="https://github.com/rayokota/awesome-hbase#readme" class="markup--anchor markup--li-anchor" title="https://github.com/rayokota/awesome-hbase#readme">HBase</a> — Distributed, scalable, big data store.</span>
-   <span id="1e16"><a href="https://github.com/erictleung/awesome-nosql-guides#readme" class="markup--anchor markup--li-anchor" title="https://github.com/erictleung/awesome-nosql-guides#readme">NoSQL Guides</a> — Help on using non-relational, distributed, open-source, and horizontally scalable databases.</span>
-   <span id="10b7"><a href="https://github.com/chrislatorres/awesome-contexture#readme" class="markup--anchor markup--li-anchor" title="https://github.com/chrislatorres/awesome-contexture#readme">Contexture</a> — Abstracts queries/filters and results/aggregations from different backing data stores like ElasticSearch and MongoDB.</span>
-   <span id="fd91"><a href="https://github.com/mgramin/awesome-db-tools#readme" class="markup--anchor markup--li-anchor" title="https://github.com/mgramin/awesome-db-tools#readme">Database Tools</a> — Everything that makes working with databases easier.</span>
-   <span id="d966"><a href="https://github.com/vaticle/typedb-awesome#readme" class="markup--anchor markup--li-anchor" title="https://github.com/vaticle/typedb-awesome#readme">TypeDB</a> — Logical database to organize large and complex networks of data as one body of knowledge.</span>
-   <span id="103c"><a href="https://github.com/Anant/awesome-cassandra#readme" class="markup--anchor markup--li-anchor" title="https://github.com/Anant/awesome-cassandra#readme">Cassandra</a> — Open-source, distributed, wide column store, NoSQL database management system.</span>

### Media

-   <span id="75a1"><a href="https://github.com/shime/creative-commons-media#readme" class="markup--anchor markup--li-anchor" title="https://github.com/shime/creative-commons-media#readme">Creative Commons Media</a></span>
-   <span id="d1b3"><a href="https://github.com/brabadu/awesome-fonts#readme" class="markup--anchor markup--li-anchor" title="https://github.com/brabadu/awesome-fonts#readme">Fonts</a></span>
-   <span id="3832"><a href="https://github.com/chrissimpkins/codeface#readme" class="markup--anchor markup--li-anchor" title="https://github.com/chrissimpkins/codeface#readme">Codeface</a> — Text editor fonts.</span>
-   <span id="232b"><a href="https://github.com/neutraltone/awesome-stock-resources#readme" class="markup--anchor markup--li-anchor" title="https://github.com/neutraltone/awesome-stock-resources#readme">Stock Resources</a></span>
-   <span id="e257"><a href="https://github.com/davisonio/awesome-gif#readme" class="markup--anchor markup--li-anchor" title="https://github.com/davisonio/awesome-gif#readme">GIF</a> — Image format known for animated images.</span>
-   <span id="e623"><a href="https://github.com/ciconia/awesome-music#readme" class="markup--anchor markup--li-anchor" title="https://github.com/ciconia/awesome-music#readme">Music</a></span>
-   <span id="4dd9"><a href="https://github.com/44bits/awesome-opensource-documents#readme" class="markup--anchor markup--li-anchor" title="https://github.com/44bits/awesome-opensource-documents#readme">Open Source Documents</a></span>
-   <span id="46ea"><a href="https://github.com/willianjusten/awesome-audio-visualization#readme" class="markup--anchor markup--li-anchor" title="https://github.com/willianjusten/awesome-audio-visualization#readme">Audio Visualization</a></span>
-   <span id="f048"><a href="https://github.com/ebu/awesome-broadcasting#readme" class="markup--anchor markup--li-anchor" title="https://github.com/ebu/awesome-broadcasting#readme">Broadcasting</a></span>
-   <span id="058b"><a href="https://github.com/Siilwyn/awesome-pixel-art#readme" class="markup--anchor markup--li-anchor" title="https://github.com/Siilwyn/awesome-pixel-art#readme">Pixel Art</a> — Pixel-level digital art.</span>
-   <span id="b5d3"><a href="https://github.com/transitive-bullshit/awesome-ffmpeg#readme" class="markup--anchor markup--li-anchor" title="https://github.com/transitive-bullshit/awesome-ffmpeg#readme">FFmpeg</a> — Cross-platform solution to record, convert and stream audio and video.</span>
-   <span id="a9af"><a href="https://github.com/notlmn/awesome-icons#readme" class="markup--anchor markup--li-anchor" title="https://github.com/notlmn/awesome-icons#readme">Icons</a> — Downloadable SVG/PNG/font icon projects.</span>
-   <span id="f520"><a href="https://github.com/stingalleman/awesome-audiovisual#readme" class="markup--anchor markup--li-anchor" title="https://github.com/stingalleman/awesome-audiovisual#readme">Audiovisual</a> — Lighting, audio and video in professional environments.</span>
-   <span id="c860"><a href="https://github.com/mfkl/awesome-vlc#readme" class="markup--anchor markup--li-anchor" title="https://github.com/mfkl/awesome-vlc#readme">VLC</a> — Cross-platform media player software and streaming server.</span>

### Learn

-   <span id="8dd0"><a href="https://github.com/therebelrobot/awesome-workshopper#readme" class="markup--anchor markup--li-anchor" title="https://github.com/therebelrobot/awesome-workshopper#readme">CLI Workshoppers</a> — Interactive tutorials.</span>
-   <span id="b944"><a href="https://github.com/karlhorky/learn-to-program#readme" class="markup--anchor markup--li-anchor" title="https://github.com/karlhorky/learn-to-program#readme">Learn to Program</a></span>
-   <span id="7168"><a href="https://github.com/matteofigus/awesome-speaking#readme" class="markup--anchor markup--li-anchor" title="https://github.com/matteofigus/awesome-speaking#readme">Speaking</a></span>
-   <span id="622c"><a href="https://github.com/lucasviola/awesome-tech-videos#readme" class="markup--anchor markup--li-anchor" title="https://github.com/lucasviola/awesome-tech-videos#readme">Tech Videos</a></span>
-   <span id="9681"><a href="https://github.com/hangtwenty/dive-into-machine-learning#readme" class="markup--anchor markup--li-anchor" title="https://github.com/hangtwenty/dive-into-machine-learning#readme">Dive into Machine Learning</a></span>
-   <span id="98a5"><a href="https://github.com/watson/awesome-computer-history#readme" class="markup--anchor markup--li-anchor" title="https://github.com/watson/awesome-computer-history#readme">Computer History</a></span>
-   <span id="cc7f"><a href="https://github.com/HollyAdele/awesome-programming-for-kids#readme" class="markup--anchor markup--li-anchor" title="https://github.com/HollyAdele/awesome-programming-for-kids#readme">Programming for Kids</a></span>
-   <span id="b6f7"><a href="https://github.com/yrgo/awesome-educational-games#readme" class="markup--anchor markup--li-anchor" title="https://github.com/yrgo/awesome-educational-games#readme">Educational Games</a> — Learn while playing.</span>
-   <span id="c452"><a href="https://github.com/micromata/awesome-javascript-learning#readme" class="markup--anchor markup--li-anchor" title="https://github.com/micromata/awesome-javascript-learning#readme">JavaScript Learning</a></span>
-   <span id="0bc1"><a href="https://github.com/micromata/awesome-css-learning#readme" class="markup--anchor markup--li-anchor" title="https://github.com/micromata/awesome-css-learning#readme">CSS Learning</a> — Mainly about CSS — the language and the modules.</span>
-   <span id="bb85"><a href="https://github.com/dend/awesome-product-management#readme" class="markup--anchor markup--li-anchor" title="https://github.com/dend/awesome-product-management#readme">Product Management</a> — Learn how to be a better product manager.</span>
-   <span id="5131"><a href="https://github.com/liuchong/awesome-roadmaps#readme" class="markup--anchor markup--li-anchor" title="https://github.com/liuchong/awesome-roadmaps#readme">Roadmaps</a> — Gives you a clear route to improve your knowledge and skills.</span>
-   <span id="a80b"><a href="https://github.com/JoseDeFreitas/awesome-youtubers#readme" class="markup--anchor markup--li-anchor" title="https://github.com/JoseDeFreitas/awesome-youtubers#readme">YouTubers</a> — Watch video tutorials from YouTubers that teach you about technology.</span>

### Security

-   <span id="063d"><a href="https://github.com/paragonie/awesome-appsec#readme" class="markup--anchor markup--li-anchor" title="https://github.com/paragonie/awesome-appsec#readme">Application Security</a></span>
-   <span id="852f"><a href="https://github.com/sbilly/awesome-security#readme" class="markup--anchor markup--li-anchor" title="https://github.com/sbilly/awesome-security#readme">Security</a></span>
-   <span id="8b79"><a href="https://github.com/apsdehal/awesome-ctf#readme" class="markup--anchor markup--li-anchor" title="https://github.com/apsdehal/awesome-ctf#readme">CTF</a> — Capture The Flag.</span>
-   <span id="fc74"><a href="https://github.com/rshipp/awesome-malware-analysis#readme" class="markup--anchor markup--li-anchor" title="https://github.com/rshipp/awesome-malware-analysis#readme">Malware Analysis</a></span>
-   <span id="f88e"><a href="https://github.com/ashishb/android-security-awesome#readme" class="markup--anchor markup--li-anchor" title="https://github.com/ashishb/android-security-awesome#readme">Android Security</a></span>
-   <span id="5642"><a href="https://github.com/carpedm20/awesome-hacking#readme" class="markup--anchor markup--li-anchor" title="https://github.com/carpedm20/awesome-hacking#readme">Hacking</a></span>
-   <span id="50cd"><a href="https://github.com/paralax/awesome-honeypots#readme" class="markup--anchor markup--li-anchor" title="https://github.com/paralax/awesome-honeypots#readme">Honeypots</a> — Deception trap, designed to entice an attacker into attempting to compromise the information systems in an organization.</span>
-   <span id="179d"><a href="https://github.com/meirwah/awesome-incident-response#readme" class="markup--anchor markup--li-anchor" title="https://github.com/meirwah/awesome-incident-response#readme">Incident Response</a></span>
-   <span id="cf96"><a href="https://github.com/jaredthecoder/awesome-vehicle-security#readme" class="markup--anchor markup--li-anchor" title="https://github.com/jaredthecoder/awesome-vehicle-security#readme">Vehicle Security and Car Hacking</a></span>
-   <span id="bc7c"><a href="https://github.com/qazbnm456/awesome-web-security#readme" class="markup--anchor markup--li-anchor" title="https://github.com/qazbnm456/awesome-web-security#readme">Web Security</a> — Security of web apps & services.</span>
-   <span id="6585"><a href="https://github.com/fabacab/awesome-lockpicking#readme" class="markup--anchor markup--li-anchor" title="https://github.com/fabacab/awesome-lockpicking#readme">Lockpicking</a> — The art of unlocking a lock by manipulating its components without the key.</span>
-   <span id="f3aa"><a href="https://github.com/fabacab/awesome-cybersecurity-blueteam#readme" class="markup--anchor markup--li-anchor" title="https://github.com/fabacab/awesome-cybersecurity-blueteam#readme">Cybersecurity Blue Team</a> — Groups of individuals who identify security flaws in information technology systems.</span>
-   <span id="9c7a"><a href="https://github.com/cpuu/awesome-fuzzing#readme" class="markup--anchor markup--li-anchor" title="https://github.com/cpuu/awesome-fuzzing#readme">Fuzzing</a> — Automated software testing technique that involves feeding pseudo-randomly generated input data.</span>
-   <span id="dfb4"><a href="https://github.com/fkie-cad/awesome-embedded-and-iot-security#readme" class="markup--anchor markup--li-anchor" title="https://github.com/fkie-cad/awesome-embedded-and-iot-security#readme">Embedded and IoT Security</a></span>
-   <span id="cdd3"><a href="https://github.com/bakke92/awesome-gdpr#readme" class="markup--anchor markup--li-anchor" title="https://github.com/bakke92/awesome-gdpr#readme">GDPR</a> — Regulation on data protection and privacy for all individuals within EU.</span>
-   <span id="8082"><a href="https://github.com/TaptuIT/awesome-devsecops#readme" class="markup--anchor markup--li-anchor" title="https://github.com/TaptuIT/awesome-devsecops#readme">DevSecOps</a> — Integration of security practices into <a href="https://en.wikipedia.org/wiki/DevOps" class="markup--anchor markup--li-anchor" title="https://en.wikipedia.org/wiki/DevOps">DevOps</a>.</span>

### Content Management Systems

-   <span id="b11f"><a href="https://github.com/umbraco-community/awesome-umbraco#readme" class="markup--anchor markup--li-anchor" title="https://github.com/umbraco-community/awesome-umbraco#readme">Umbraco</a></span>
-   <span id="f722"><a href="https://github.com/refinerycms-contrib/awesome-refinerycms#readme" class="markup--anchor markup--li-anchor" title="https://github.com/refinerycms-contrib/awesome-refinerycms#readme">Refinery CMS</a> — Ruby on Rails CMS.</span>
-   <span id="3024"><a href="https://github.com/springload/awesome-wagtail#readme" class="markup--anchor markup--li-anchor" title="https://github.com/springload/awesome-wagtail#readme">Wagtail</a> — Django CMS focused on flexibility and user experience.</span>
-   <span id="b893"><a href="https://github.com/drmonkeyninja/awesome-textpattern#readme" class="markup--anchor markup--li-anchor" title="https://github.com/drmonkeyninja/awesome-textpattern#readme">Textpattern</a> — Lightweight PHP-based CMS.</span>
-   <span id="9b33"><a href="https://github.com/nirgn975/awesome-drupal#readme" class="markup--anchor markup--li-anchor" title="https://github.com/nirgn975/awesome-drupal#readme">Drupal</a> — Extensible PHP-based CMS.</span>
-   <span id="438f"><a href="https://github.com/craftcms/awesome#readme" class="markup--anchor markup--li-anchor" title="https://github.com/craftcms/awesome#readme">Craft CMS</a> — Content-first CMS.</span>
-   <span id="db84"><a href="https://github.com/MartinMiles/Awesome-Sitecore#readme" class="markup--anchor markup--li-anchor" title="https://github.com/MartinMiles/Awesome-Sitecore#readme">Sitecore</a> — .NET digital marketing platform that combines CMS with tools for managing multiple websites.</span>
-   <span id="9e37"><a href="https://github.com/wernerkrauss/awesome-silverstripe-cms#readme" class="markup--anchor markup--li-anchor" title="https://github.com/wernerkrauss/awesome-silverstripe-cms#readme">Silverstripe CMS</a> — PHP MVC framework that serves as a classic or headless CMS.</span>

### Hardware

-   <span id="4c19"><a href="https://github.com/Kiloreux/awesome-robotics#readme" class="markup--anchor markup--li-anchor" title="https://github.com/Kiloreux/awesome-robotics#readme">Robotics</a></span>
-   <span id="61db"><a href="https://github.com/HQarroum/awesome-iot#readme" class="markup--anchor markup--li-anchor" title="https://github.com/HQarroum/awesome-iot#readme">Internet of Things</a></span>
-   <span id="cc29"><a href="https://github.com/kitspace/awesome-electronics#readme" class="markup--anchor markup--li-anchor" title="https://github.com/kitspace/awesome-electronics#readme">Electronics</a> — For electronic engineers and hobbyists.</span>
-   <span id="6f1c"><a href="https://github.com/rabschi/awesome-beacon#readme" class="markup--anchor markup--li-anchor" title="https://github.com/rabschi/awesome-beacon#readme">Bluetooth Beacons</a></span>
-   <span id="51c9"><a href="https://github.com/gitfrage/guitarspecs#readme" class="markup--anchor markup--li-anchor" title="https://github.com/gitfrage/guitarspecs#readme">Electric Guitar Specifications</a> — Checklist for building your own electric guitar.</span>
-   <span id="8d74"><a href="https://github.com/beardicus/awesome-plotters#readme" class="markup--anchor markup--li-anchor" title="https://github.com/beardicus/awesome-plotters#readme">Plotters</a> — Computer-controlled drawing machines and other visual art robots.</span>
-   <span id="b43d"><a href="https://github.com/protontypes/awesome-robotic-tooling#readme" class="markup--anchor markup--li-anchor" title="https://github.com/protontypes/awesome-robotic-tooling#readme">Robotic Tooling</a> — Free and open tools for professional robotic development.</span>
-   <span id="b839"><a href="https://github.com/szenergy/awesome-lidar#readme" class="markup--anchor markup--li-anchor" title="https://github.com/szenergy/awesome-lidar#readme">LIDAR</a> — Sensor for measuring distances by illuminating the target with laser light.</span>

### Business

-   <span id="8a57"><a href="https://github.com/opencompany/awesome-open-company#readme" class="markup--anchor markup--li-anchor" title="https://github.com/opencompany/awesome-open-company#readme">Open Companies</a></span>
-   <span id="bf99"><a href="https://github.com/mmccaff/PlacesToPostYourStartup#readme" class="markup--anchor markup--li-anchor" title="https://github.com/mmccaff/PlacesToPostYourStartup#readme">Places to Post Your Startup</a></span>
-   <span id="2ab8"><a href="https://github.com/domenicosolazzo/awesome-okr#readme" class="markup--anchor markup--li-anchor" title="https://github.com/domenicosolazzo/awesome-okr#readme">OKR Methodology</a> — Goal setting & communication best practices.</span>
-   <span id="c55c"><a href="https://github.com/LappleApple/awesome-leading-and-managing#readme" class="markup--anchor markup--li-anchor" title="https://github.com/LappleApple/awesome-leading-and-managing#readme">Leading and Managing</a> — Leading people and being a manager in a technology company/environment.</span>
-   <span id="32df"><a href="https://github.com/mezod/awesome-indie#readme" class="markup--anchor markup--li-anchor" title="https://github.com/mezod/awesome-indie#readme">Indie</a> — Independent developer businesses.</span>
-   <span id="4dd4"><a href="https://github.com/cjbarber/ToolsOfTheTrade#readme" class="markup--anchor markup--li-anchor" title="https://github.com/cjbarber/ToolsOfTheTrade#readme">Tools of the Trade</a> — Tools used by companies on Hacker News.</span>
-   <span id="efb9"><a href="https://github.com/nglgzz/awesome-clean-tech#readme" class="markup--anchor markup--li-anchor" title="https://github.com/nglgzz/awesome-clean-tech#readme">Clean Tech</a> — Fighting climate change with technology.</span>
-   <span id="c728"><a href="https://github.com/wardley-maps-community/awesome-wardley-maps#readme" class="markup--anchor markup--li-anchor" title="https://github.com/wardley-maps-community/awesome-wardley-maps#readme">Wardley Maps</a> — Provides high situational awareness to help improve strategic planning and decision making.</span>
-   <span id="a8bf"><a href="https://github.com/RayBB/awesome-social-enterprise#readme" class="markup--anchor markup--li-anchor" title="https://github.com/RayBB/awesome-social-enterprise#readme">Social Enterprise</a> — Building an organization primarily focused on social impact that is at least partially self-funded.</span>
-   <span id="bcb6"><a href="https://github.com/kdeldycke/awesome-engineering-team-management#readme" class="markup--anchor markup--li-anchor" title="https://github.com/kdeldycke/awesome-engineering-team-management#readme">Engineering Team Management</a> — How to transition from software development to engineering management.</span>
-   <span id="8848"><a href="https://github.com/agamm/awesome-developer-first#readme" class="markup--anchor markup--li-anchor" title="https://github.com/agamm/awesome-developer-first#readme">Developer-First Products</a> — Products that target developers as the user.</span>
-   <span id="a589"><a href="https://github.com/kdeldycke/awesome-billing#readme" class="markup--anchor markup--li-anchor" title="https://github.com/kdeldycke/awesome-billing#readme">Billing</a> — Payments, invoicing, pricing, accounting, marketplace, fraud, and business intelligence.</span>

### Work

-   <span id="d6fa"><a href="https://github.com/matiassingers/awesome-slack#readme" class="markup--anchor markup--li-anchor" title="https://github.com/matiassingers/awesome-slack#readme">Slack</a> — Team collaboration.</span>
-   <span id="37ba"><a href="https://github.com/filipelinhares/awesome-slack#readme" class="markup--anchor markup--li-anchor" title="https://github.com/filipelinhares/awesome-slack#readme">Communities</a></span>
-   <span id="83be"><a href="https://github.com/lukasz-madon/awesome-remote-job#readme" class="markup--anchor markup--li-anchor" title="https://github.com/lukasz-madon/awesome-remote-job#readme">Remote Jobs</a></span>
-   <span id="1fff"><a href="https://github.com/jyguyomarch/awesome-productivity#readme" class="markup--anchor markup--li-anchor" title="https://github.com/jyguyomarch/awesome-productivity#readme">Productivity</a></span>
-   <span id="5b9f"><a href="https://github.com/tramcar/awesome-job-boards#readme" class="markup--anchor markup--li-anchor" title="https://github.com/tramcar/awesome-job-boards#readme">Niche Job Boards</a></span>
-   <span id="a00e"><a href="https://github.com/DopplerHQ/awesome-interview-questions#readme" class="markup--anchor markup--li-anchor" title="https://github.com/DopplerHQ/awesome-interview-questions#readme">Programming Interviews</a></span>
-   <span id="47a7"><a href="https://github.com/joho/awesome-code-review#readme" class="markup--anchor markup--li-anchor" title="https://github.com/joho/awesome-code-review#readme">Code Review</a> — Reviewing code.</span>
-   <span id="b2a4"><a href="https://github.com/j0hnm4r5/awesome-creative-technology#readme" class="markup--anchor markup--li-anchor" title="https://github.com/j0hnm4r5/awesome-creative-technology#readme">Creative Technology</a> — Businesses & groups that specialize in combining computing, design, art, and user experience.</span>
-   <span id="7807"><a href="https://github.com/lodthe/awesome-internships#readme" class="markup--anchor markup--li-anchor" title="https://github.com/lodthe/awesome-internships#readme">Internships</a> — CV writing guides and companies that hire interns.</span>

### Networking

-   <span id="f15c"><a href="https://github.com/sdnds-tw/awesome-sdn#readme" class="markup--anchor markup--li-anchor" title="https://github.com/sdnds-tw/awesome-sdn#readme">Software-Defined Networking</a></span>
-   <span id="4640"><a href="https://github.com/briatte/awesome-network-analysis#readme" class="markup--anchor markup--li-anchor" title="https://github.com/briatte/awesome-network-analysis#readme">Network Analysis</a></span>
-   <span id="2d06"><a href="https://github.com/caesar0301/awesome-pcaptools#readme" class="markup--anchor markup--li-anchor" title="https://github.com/caesar0301/awesome-pcaptools#readme">PCAPTools</a></span>
-   <span id="8178"><a href="https://github.com/rtckit/awesome-rtc#readme" class="markup--anchor markup--li-anchor" title="https://github.com/rtckit/awesome-rtc#readme">Real-Time Communications</a> — Network protocols for near simultaneous exchange of media and data.</span>

### Decentralized Systems

-   <span id="1abe"><a href="https://github.com/igorbarinov/awesome-bitcoin#readme" class="markup--anchor markup--li-anchor" title="https://github.com/igorbarinov/awesome-bitcoin#readme">Bitcoin</a> — Bitcoin services and tools for software developers.</span>
-   <span id="5360"><a href="https://github.com/vhpoet/awesome-ripple#readme" class="markup--anchor markup--li-anchor" title="https://github.com/vhpoet/awesome-ripple#readme">Ripple</a> — Open source distributed settlement network.</span>
-   <span id="5393"><a href="https://github.com/machinomy/awesome-non-financial-blockchain#readme" class="markup--anchor markup--li-anchor" title="https://github.com/machinomy/awesome-non-financial-blockchain#readme">Non-Financial Blockchain</a> — Non-financial blockchain applications.</span>
-   <span id="0979"><a href="https://github.com/tleb/awesome-mastodon#readme" class="markup--anchor markup--li-anchor" title="https://github.com/tleb/awesome-mastodon#readme">Mastodon</a> — Open source decentralized microblogging network.</span>
-   <span id="e340"><a href="https://github.com/ttumiel/Awesome-Ethereum#readme" class="markup--anchor markup--li-anchor" title="https://github.com/ttumiel/Awesome-Ethereum#readme">Ethereum</a> — Distributed computing platform for smart contract development.</span>
-   <span id="1182"><a href="https://github.com/steven2358/awesome-blockchain-ai#readme" class="markup--anchor markup--li-anchor" title="https://github.com/steven2358/awesome-blockchain-ai#readme">Blockchain AI</a> — Blockchain projects for artificial intelligence and machine learning.</span>
-   <span id="42e9"><a href="https://github.com/DanailMinchev/awesome-eosio#readme" class="markup--anchor markup--li-anchor" title="https://github.com/DanailMinchev/awesome-eosio#readme">EOSIO</a> — A decentralized operating system supporting industrial-scale apps.</span>
-   <span id="f3ce"><a href="https://github.com/chainstack/awesome-corda#readme" class="markup--anchor markup--li-anchor" title="https://github.com/chainstack/awesome-corda#readme">Corda</a> — Open source blockchain platform designed for business.</span>
-   <span id="4a82"><a href="https://github.com/msmolyakov/awesome-waves#readme" class="markup--anchor markup--li-anchor" title="https://github.com/msmolyakov/awesome-waves#readme">Waves</a> — Open source blockchain platform and development toolset for Web 3.0 apps and decentralized solutions.</span>
-   <span id="c033"><a href="https://github.com/substrate-developer-hub/awesome-substrate#readme" class="markup--anchor markup--li-anchor" title="https://github.com/substrate-developer-hub/awesome-substrate#readme">Substrate</a> — Framework for writing scalable, upgradeable blockchains in Rust.</span>
-   <span id="874d"><a href="https://github.com/golemfactory/awesome-golem#readme" class="markup--anchor markup--li-anchor" title="https://github.com/golemfactory/awesome-golem#readme">Golem</a> — Open source peer-to-peer marketplace for computing resources.</span>
-   <span id="f112"><a href="https://github.com/friedger/awesome-stacks-chain#readme" class="markup--anchor markup--li-anchor" title="https://github.com/friedger/awesome-stacks-chain#readme">Stacks</a> — A smart contract platform secured by Bitcoin.</span>

### Higher Education

-   <span id="13b7"><a href="https://github.com/eselkin/awesome-computational-neuroscience#readme" class="markup--anchor markup--li-anchor" title="https://github.com/eselkin/awesome-computational-neuroscience#readme">Computational Neuroscience</a> — A multidisciplinary science which uses computational approaches to study the nervous system.</span>
-   <span id="11ec"><a href="https://github.com/maehr/awesome-digital-history#readme" class="markup--anchor markup--li-anchor" title="https://github.com/maehr/awesome-digital-history#readme">Digital History</a> — Computer-aided scientific investigation of history.</span>
-   <span id="050b"><a href="https://github.com/writing-resources/awesome-scientific-writing#readme" class="markup--anchor markup--li-anchor" title="https://github.com/writing-resources/awesome-scientific-writing#readme">Scientific Writing</a> — Distraction-free scientific writing with Markdown, reStructuredText and Jupyter notebooks.</span>

### Events

-   <span id="d6a1"><a href="https://github.com/danvoyce/awesome-creative-tech-events#readme" class="markup--anchor markup--li-anchor" title="https://github.com/danvoyce/awesome-creative-tech-events#readme">Creative Tech Events</a> — Events around the globe for creative coding, tech, design, music, arts and cool stuff.</span>
-   <span id="15a6"><a href="https://github.com/ildoc/awesome-italy-events#readme" class="markup--anchor markup--li-anchor" title="https://github.com/ildoc/awesome-italy-events#readme">Events in Italy</a> — Tech-related events in Italy.</span>
-   <span id="c456"><a href="https://github.com/awkward/awesome-netherlands-events#readme" class="markup--anchor markup--li-anchor" title="https://github.com/awkward/awesome-netherlands-events#readme">Events in the Netherlands</a> — Tech-related events in the Netherlands.</span>

### Testing

-   <span id="f117"><a href="https://github.com/TheJambo/awesome-testing#readme" class="markup--anchor markup--li-anchor" title="https://github.com/TheJambo/awesome-testing#readme">Testing</a> — Software testing.</span>
-   <span id="6f8c"><a href="https://github.com/mojoaxel/awesome-regression-testing#readme" class="markup--anchor markup--li-anchor" title="https://github.com/mojoaxel/awesome-regression-testing#readme">Visual Regression Testing</a> — Ensures changes did not break the functionality or style.</span>
-   <span id="7fdd"><a href="https://github.com/christian-bromann/awesome-selenium#readme" class="markup--anchor markup--li-anchor" title="https://github.com/christian-bromann/awesome-selenium#readme">Selenium</a> — Open-source browser automation framework and ecosystem.</span>
-   <span id="9796"><a href="https://github.com/SrinivasanTarget/awesome-appium#readme" class="markup--anchor markup--li-anchor" title="https://github.com/SrinivasanTarget/awesome-appium#readme">Appium</a> — Test automation tool for apps.</span>
-   <span id="08eb"><a href="https://github.com/sindresorhus/awesome-tap#readme" class="markup--anchor markup--li-anchor" title="https://github.com/sindresorhus/awesome-tap#readme">TAP</a> — Test Anything Protocol.</span>
-   <span id="e46a"><a href="https://github.com/aliesbelik/awesome-jmeter#readme" class="markup--anchor markup--li-anchor" title="https://github.com/aliesbelik/awesome-jmeter#readme">JMeter</a> — Load testing and performance measurement tool.</span>
-   <span id="43d6"><a href="https://github.com/k6io/awesome-k6#readme" class="markup--anchor markup--li-anchor" title="https://github.com/k6io/awesome-k6#readme">k6</a> — Open-source, developer-centric performance monitoring and load testing solution.</span>
-   <span id="bec0"><a href="https://github.com/mxschmitt/awesome-playwright#readme" class="markup--anchor markup--li-anchor" title="https://github.com/mxschmitt/awesome-playwright#readme">Playwright</a> — Node.js library to automate Chromium, Firefox and WebKit with a single API.</span>
-   <span id="8de7"><a href="https://github.com/fityanos/awesome-quality-assurance-roadmap#readme" class="markup--anchor markup--li-anchor" title="https://github.com/fityanos/awesome-quality-assurance-roadmap#readme">Quality Assurance Roadmap</a> — How to start & build a career in software testing.</span>

### Miscellaneous

-   <span id="0219"><a href="https://github.com/burningtree/awesome-json#readme" class="markup--anchor markup--li-anchor" title="https://github.com/burningtree/awesome-json#readme">JSON</a> — Text based data interchange format.</span>
-   <span id="fea1"><a href="https://github.com/tmcw/awesome-geojson#readme" class="markup--anchor markup--li-anchor" title="https://github.com/tmcw/awesome-geojson#readme">GeoJSON</a></span>
-   <span id="a8cc"><a href="https://github.com/jdorfman/awesome-json-datasets#readme" class="markup--anchor markup--li-anchor" title="https://github.com/jdorfman/awesome-json-datasets#readme">Datasets</a></span>
-   <span id="d3fc"><a href="https://github.com/secretGeek/awesomeCSV#readme" class="markup--anchor markup--li-anchor" title="https://github.com/secretGeek/awesomeCSV#readme">CSV</a> — A text file format that stores tabular data and uses a comma to separate values.</span>
-   <span id="1e86"><a href="https://github.com/AchoArnold/discount-for-student-dev#readme" class="markup--anchor markup--li-anchor" title="https://github.com/AchoArnold/discount-for-student-dev#readme">Discounts for Student Developers</a></span>
-   <span id="195f"><a href="https://github.com/kyleterry/awesome-radio#readme" class="markup--anchor markup--li-anchor" title="https://github.com/kyleterry/awesome-radio#readme">Radio</a></span>
-   <span id="8433"><a href="https://github.com/sindresorhus/awesome#readme" class="markup--anchor markup--li-anchor" title="https://github.com/sindresorhus/awesome#readme">Awesome</a> — Recursion illustrated.</span>
-   <span id="5e63"><a href="https://github.com/onurakpolat/awesome-analytics#readme" class="markup--anchor markup--li-anchor" title="https://github.com/onurakpolat/awesome-analytics#readme">Analytics</a></span>
-   <span id="64eb"><a href="https://github.com/marmelab/awesome-rest#readme" class="markup--anchor markup--li-anchor" title="https://github.com/marmelab/awesome-rest#readme">REST</a></span>
-   <span id="c5a5"><a href="https://github.com/cicdops/awesome-ciandcd#readme" class="markup--anchor markup--li-anchor" title="https://github.com/cicdops/awesome-ciandcd#readme">Continuous Integration and Continuous Delivery</a></span>
-   <span id="c5d8"><a href="https://github.com/mmcgrana/services-engineering#readme" class="markup--anchor markup--li-anchor" title="https://github.com/mmcgrana/services-engineering#readme">Services Engineering</a></span>
-   <span id="d60f"><a href="https://github.com/ripienaar/free-for-dev#readme" class="markup--anchor markup--li-anchor" title="https://github.com/ripienaar/free-for-dev#readme">Free for Developers</a></span>
-   <span id="a18f"><a href="https://github.com/cyberglot/awesome-answers#readme" class="markup--anchor markup--li-anchor" title="https://github.com/cyberglot/awesome-answers#readme">Answers</a> — Stack Overflow, Quora, etc.</span>
-   <span id="b35d"><a href="https://github.com/diessica/awesome-sketch#readme" class="markup--anchor markup--li-anchor" title="https://github.com/diessica/awesome-sketch#readme">Sketch</a> — Design app for macOS.</span>
-   <span id="778d"><a href="https://github.com/melvin0008/awesome-projects-boilerplates#readme" class="markup--anchor markup--li-anchor" title="https://github.com/melvin0008/awesome-projects-boilerplates#readme">Boilerplate Projects</a></span>
-   <span id="297f"><a href="https://github.com/matiassingers/awesome-readme#readme" class="markup--anchor markup--li-anchor" title="https://github.com/matiassingers/awesome-readme#readme">Readme</a></span>
-   <span id="a9e4"><a href="https://github.com/NARKOZ/guides#readme" class="markup--anchor markup--li-anchor" title="https://github.com/NARKOZ/guides#readme">Design and Development Guides</a></span>
-   <span id="30f9"><a href="https://github.com/kilimchoi/engineering-blogs#readme" class="markup--anchor markup--li-anchor" title="https://github.com/kilimchoi/engineering-blogs#readme">Software Engineering Blogs</a></span>
-   <span id="daab"><a href="https://github.com/awesome-selfhosted/awesome-selfhosted#readme" class="markup--anchor markup--li-anchor" title="https://github.com/awesome-selfhosted/awesome-selfhosted#readme">Self Hosted</a></span>
-   <span id="6b36"><a href="https://github.com/DataDaoDe/awesome-foss-apps#readme" class="markup--anchor markup--li-anchor" title="https://github.com/DataDaoDe/awesome-foss-apps#readme">FOSS Production Apps</a></span>
-   <span id="ed4e"><a href="https://github.com/alferov/awesome-gulp#readme" class="markup--anchor markup--li-anchor" title="https://github.com/alferov/awesome-gulp#readme">Gulp</a> — Task runner.</span>
-   <span id="081e"><a href="https://github.com/sindresorhus/amas#readme" class="markup--anchor markup--li-anchor" title="https://github.com/sindresorhus/amas#readme">AMA</a> — Ask Me Anything.</span>
-   <span id="1637"><a href="https://github.com/stoeffel/awesome-ama-answers#readme" class="markup--anchor markup--li-anchor" title="https://github.com/stoeffel/awesome-ama-answers#readme">Answers</a></span>
-   <span id="854d"><a href="https://github.com/ibaaj/awesome-OpenSourcePhotography#readme" class="markup--anchor markup--li-anchor" title="https://github.com/ibaaj/awesome-OpenSourcePhotography#readme">Open Source Photography</a></span>
-   <span id="e5dd"><a href="https://github.com/eug/awesome-opengl#readme" class="markup--anchor markup--li-anchor" title="https://github.com/eug/awesome-opengl#readme">OpenGL</a> — Cross-platform API for rendering 2D and 3D graphics.</span>
-   <span id="74d1"><a href="https://github.com/chentsulin/awesome-graphql#readme" class="markup--anchor markup--li-anchor" title="https://github.com/chentsulin/awesome-graphql#readme">GraphQL</a></span>
-   <span id="47f6"><a href="https://github.com/APA-Technology-Division/urban-and-regional-planning-resources#readme" class="markup--anchor markup--li-anchor" title="https://github.com/APA-Technology-Division/urban-and-regional-planning-resources#readme">Urban &amp; Regional Planning</a> — Concerning the built environment and communities.</span>
-   <span id="6a8f"><a href="https://github.com/CUTR-at-USF/awesome-transit#readme" class="markup--anchor markup--li-anchor" title="https://github.com/CUTR-at-USF/awesome-transit#readme">Transit</a></span>
-   <span id="46b7"><a href="https://github.com/emptymalei/awesome-research#readme" class="markup--anchor markup--li-anchor" title="https://github.com/emptymalei/awesome-research#readme">Research Tools</a></span>
-   <span id="130b"><a href="https://github.com/fasouto/awesome-dataviz#readme" class="markup--anchor markup--li-anchor" title="https://github.com/fasouto/awesome-dataviz#readme">Data Visualization</a></span>
-   <span id="d2db"><a href="https://github.com/vinkla/shareable-links#readme" class="markup--anchor markup--li-anchor" title="https://github.com/vinkla/shareable-links#readme">Social Media Share Links</a></span>
-   <span id="e66e"><a href="https://github.com/mfornos/awesome-microservices#readme" class="markup--anchor markup--li-anchor" title="https://github.com/mfornos/awesome-microservices#readme">Microservices</a></span>
-   <span id="78d1"><a href="https://github.com/jagracey/Awesome-Unicode#readme" class="markup--anchor markup--li-anchor" title="https://github.com/jagracey/Awesome-Unicode#readme">Unicode</a> — Unicode standards, quirks, packages and resources.</span>
-   <span id="6f32"><a href="https://github.com/Codepoints/awesome-codepoints#readme" class="markup--anchor markup--li-anchor" title="https://github.com/Codepoints/awesome-codepoints#readme">Code Points</a></span>
-   <span id="33b2"><a href="https://github.com/MunGell/awesome-for-beginners#readme" class="markup--anchor markup--li-anchor" title="https://github.com/MunGell/awesome-for-beginners#readme">Beginner-Friendly Projects</a></span>
-   <span id="691a"><a href="https://github.com/gamontal/awesome-katas#readme" class="markup--anchor markup--li-anchor" title="https://github.com/gamontal/awesome-katas#readme">Katas</a></span>
-   <span id="bdb1"><a href="https://github.com/drewrwilson/toolsforactivism#readme" class="markup--anchor markup--li-anchor" title="https://github.com/drewrwilson/toolsforactivism#readme">Tools for Activism</a></span>
-   <span id="64c1"><a href="https://github.com/dylanrees/citizen-science#readme" class="markup--anchor markup--li-anchor" title="https://github.com/dylanrees/citizen-science#readme">Citizen Science</a> — For community-based and non-institutional scientists.</span>
-   <span id="1746"><a href="https://github.com/hobbyquaker/awesome-mqtt#readme" class="markup--anchor markup--li-anchor" title="https://github.com/hobbyquaker/awesome-mqtt#readme">MQTT</a> — “Internet of Things” connectivity protocol.</span>
-   <span id="c7b3"><a href="https://github.com/daviddias/awesome-hacking-locations#readme" class="markup--anchor markup--li-anchor" title="https://github.com/daviddias/awesome-hacking-locations#readme">Hacking Spots</a></span>
-   <span id="dd14"><a href="https://github.com/cristianoliveira/awesome4girls#readme" class="markup--anchor markup--li-anchor" title="https://github.com/cristianoliveira/awesome4girls#readme">For Girls</a></span>
-   <span id="d88f"><a href="https://github.com/vorpaljs/awesome-vorpal#readme" class="markup--anchor markup--li-anchor" title="https://github.com/vorpaljs/awesome-vorpal#readme">Vorpal</a> — Node.js CLI framework.</span>
-   <span id="57a5"><a href="https://github.com/vinjn/awesome-vulkan#readme" class="markup--anchor markup--li-anchor" title="https://github.com/vinjn/awesome-vulkan#readme">Vulkan</a> — Low-overhead, cross-platform 3D graphics and compute API.</span>
-   <span id="3b41"><a href="https://github.com/egeerardyn/awesome-LaTeX#readme" class="markup--anchor markup--li-anchor" title="https://github.com/egeerardyn/awesome-LaTeX#readme">LaTeX</a> — Typesetting language.</span>
-   <span id="825b"><a href="https://github.com/antontarasenko/awesome-economics#readme" class="markup--anchor markup--li-anchor" title="https://github.com/antontarasenko/awesome-economics#readme">Economics</a> — An economist’s starter kit.</span>
-   <span id="bbb5"><a href="https://github.com/sublimino/awesome-funny-markov#readme" class="markup--anchor markup--li-anchor" title="https://github.com/sublimino/awesome-funny-markov#readme">Funny Markov Chains</a></span>
-   <span id="2b74"><a href="https://github.com/danielecook/Awesome-Bioinformatics#readme" class="markup--anchor markup--li-anchor" title="https://github.com/danielecook/Awesome-Bioinformatics#readme">Bioinformatics</a></span>
-   <span id="b268"><a href="https://github.com/hsiaoyi0504/awesome-cheminformatics#readme" class="markup--anchor markup--li-anchor" title="https://github.com/hsiaoyi0504/awesome-cheminformatics#readme">Cheminformatics</a> — Informatics techniques applied to problems in chemistry.</span>
-   <span id="1362"><a href="https://github.com/Siddharth11/Colorful#readme" class="markup--anchor markup--li-anchor" title="https://github.com/Siddharth11/Colorful#readme">Colorful</a> — Choose your next color scheme.</span>
-   <span id="08a9"><a href="https://github.com/scholtzm/awesome-steam#readme" class="markup--anchor markup--li-anchor" title="https://github.com/scholtzm/awesome-steam#readme">Steam</a> — Digital distribution platform.</span>
-   <span id="0f7e"><a href="https://github.com/hackerkid/bots#readme" class="markup--anchor markup--li-anchor" title="https://github.com/hackerkid/bots#readme">Bots</a> — Building bots.</span>
-   <span id="8747"><a href="https://github.com/dastergon/awesome-sre#readme" class="markup--anchor markup--li-anchor" title="https://github.com/dastergon/awesome-sre#readme">Site Reliability Engineering</a></span>
-   <span id="9aa8"><a href="https://github.com/KimberlyMunoz/empathy-in-engineering#readme" class="markup--anchor markup--li-anchor" title="https://github.com/KimberlyMunoz/empathy-in-engineering#readme">Empathy in Engineering</a> — Building and promoting more compassionate engineering cultures.</span>
-   <span id="2014"><a href="https://github.com/xen0l/awesome-dtrace#readme" class="markup--anchor markup--li-anchor" title="https://github.com/xen0l/awesome-dtrace#readme">DTrace</a> — Dynamic tracing framework.</span>
-   <span id="c868"><a href="https://github.com/bvolpato/awesome-userscripts#readme" class="markup--anchor markup--li-anchor" title="https://github.com/bvolpato/awesome-userscripts#readme">Userscripts</a> — Enhance your browsing experience.</span>
-   <span id="0065"><a href="https://github.com/tobiasbueschel/awesome-pokemon#readme" class="markup--anchor markup--li-anchor" title="https://github.com/tobiasbueschel/awesome-pokemon#readme">Pokémon</a> — Pokémon and Pokémon GO.</span>
-   <span id="f39b"><a href="https://github.com/exAspArk/awesome-chatops#readme" class="markup--anchor markup--li-anchor" title="https://github.com/exAspArk/awesome-chatops#readme">ChatOps</a> — Managing technical and business operations through a chat.</span>
-   <span id="9876"><a href="https://github.com/kdeldycke/awesome-falsehood#readme" class="markup--anchor markup--li-anchor" title="https://github.com/kdeldycke/awesome-falsehood#readme">Falsehood</a> — Falsehoods programmers believe in.</span>
-   <span id="3992"><a href="https://github.com/heynickc/awesome-ddd#readme" class="markup--anchor markup--li-anchor" title="https://github.com/heynickc/awesome-ddd#readme">Domain-Driven Design</a> — Software development approach for complex needs by connecting the implementation to an evolving model.</span>
-   <span id="603c"><a href="https://github.com/woop/awesome-quantified-self#readme" class="markup--anchor markup--li-anchor" title="https://github.com/woop/awesome-quantified-self#readme">Quantified Self</a> — Self-tracking through technology.</span>
-   <span id="1e78"><a href="https://github.com/hbokh/awesome-saltstack#readme" class="markup--anchor markup--li-anchor" title="https://github.com/hbokh/awesome-saltstack#readme">SaltStack</a> — Python-based config management system.</span>
-   <span id="d2c9"><a href="https://github.com/nicolesaidy/awesome-web-design#readme" class="markup--anchor markup--li-anchor" title="https://github.com/nicolesaidy/awesome-web-design#readme">Web Design</a> — For digital designers.</span>
-   <span id="4190"><a href="https://github.com/terkelg/awesome-creative-coding#readme" class="markup--anchor markup--li-anchor" title="https://github.com/terkelg/awesome-creative-coding#readme">Creative Coding</a> — Programming something expressive instead of something functional.</span>
-   <span id="e36e"><a href="https://github.com/aviaryan/awesome-no-login-web-apps#readme" class="markup--anchor markup--li-anchor" title="https://github.com/aviaryan/awesome-no-login-web-apps#readme">No-Login Web Apps</a> — Web apps that work without login.</span>
-   <span id="5e22"><a href="https://github.com/johnjago/awesome-free-software#readme" class="markup--anchor markup--li-anchor" title="https://github.com/johnjago/awesome-free-software#readme">Free Software</a> — Free as in freedom.</span>
-   <span id="9002"><a href="https://github.com/podo/awesome-framer#readme" class="markup--anchor markup--li-anchor" title="https://github.com/podo/awesome-framer#readme">Framer</a> — Prototyping interactive UI designs.</span>
-   <span id="7231"><a href="https://github.com/BubuAnabelas/awesome-markdown#readme" class="markup--anchor markup--li-anchor" title="https://github.com/BubuAnabelas/awesome-markdown#readme">Markdown</a> — Markup language.</span>
-   <span id="56d9"><a href="https://github.com/mislavcimpersak/awesome-dev-fun#readme" class="markup--anchor markup--li-anchor" title="https://github.com/mislavcimpersak/awesome-dev-fun#readme">Dev Fun</a> — Funny developer projects.</span>
-   <span id="e720"><a href="https://github.com/kakoni/awesome-healthcare#readme" class="markup--anchor markup--li-anchor" title="https://github.com/kakoni/awesome-healthcare#readme">Healthcare</a> — Open source healthcare software for facilities, providers, developers, policy experts, and researchers.</span>
-   <span id="2dc2"><a href="https://github.com/DavidLambauer/awesome-magento2#readme" class="markup--anchor markup--li-anchor" title="https://github.com/DavidLambauer/awesome-magento2#readme">Magento 2</a> — Open Source eCommerce built with PHP.</span>
-   <span id="8bae"><a href="https://github.com/xiaohanyu/awesome-tikz#readme" class="markup--anchor markup--li-anchor" title="https://github.com/xiaohanyu/awesome-tikz#readme">TikZ</a> — Graph drawing packages for TeX/LaTeX/ConTeXt.</span>
-   <span id="50d0"><a href="https://github.com/analyticalmonk/awesome-neuroscience#readme" class="markup--anchor markup--li-anchor" title="https://github.com/analyticalmonk/awesome-neuroscience#readme">Neuroscience</a> — Study of the nervous system and brain.</span>
-   <span id="36e9"><a href="https://github.com/johnjago/awesome-ad-free#readme" class="markup--anchor markup--li-anchor" title="https://github.com/johnjago/awesome-ad-free#readme">Ad-Free</a> — Ad-free alternatives.</span>
-   <span id="04ec"><a href="https://github.com/angrykoala/awesome-esolangs#readme" class="markup--anchor markup--li-anchor" title="https://github.com/angrykoala/awesome-esolangs#readme">Esolangs</a> — Programming languages designed for experimentation or as jokes rather than actual use.</span>
-   <span id="54e2"><a href="https://github.com/roaldnefs/awesome-prometheus#readme" class="markup--anchor markup--li-anchor" title="https://github.com/roaldnefs/awesome-prometheus#readme">Prometheus</a> — Open-source monitoring system.</span>
-   <span id="fa3c"><a href="https://github.com/homematic-community/awesome-homematic#readme" class="markup--anchor markup--li-anchor" title="https://github.com/homematic-community/awesome-homematic#readme">Homematic</a> — Smart home devices.</span>
-   <span id="9db6"><a href="https://github.com/sfischer13/awesome-ledger#readme" class="markup--anchor markup--li-anchor" title="https://github.com/sfischer13/awesome-ledger#readme">Ledger</a> — Double-entry accounting on the command-line.</span>
-   <span id="0699"><a href="https://github.com/thomasbnt/awesome-web-monetization#readme" class="markup--anchor markup--li-anchor" title="https://github.com/thomasbnt/awesome-web-monetization#readme">Web Monetization</a> — A free open web standard service that allows you to send money directly in your browser.</span>
-   <span id="a0ed"><a href="https://github.com/johnjago/awesome-uncopyright#readme" class="markup--anchor markup--li-anchor" title="https://github.com/johnjago/awesome-uncopyright#readme">Uncopyright</a> — Public domain works.</span>
-   <span id="25b4"><a href="https://github.com/Zheaoli/awesome-coins#readme" class="markup--anchor markup--li-anchor" title="https://github.com/Zheaoli/awesome-coins#readme">Crypto Currency Tools &amp; Algorithms</a> — Digital currency where encryption is used to regulate the generation of units and verify transfers.</span>
-   <span id="c1c4"><a href="https://github.com/folkswhocode/awesome-diversity#readme" class="markup--anchor markup--li-anchor" title="https://github.com/folkswhocode/awesome-diversity#readme">Diversity</a> — Creating a more inclusive and diverse tech community.</span>
-   <span id="5801"><a href="https://github.com/zachflower/awesome-open-source-supporters#readme" class="markup--anchor markup--li-anchor" title="https://github.com/zachflower/awesome-open-source-supporters#readme">Open Source Supporters</a> — Companies that offer their tools and services for free to open source projects.</span>
-   <span id="ddd6"><a href="https://github.com/robinstickel/awesome-design-principles#readme" class="markup--anchor markup--li-anchor" title="https://github.com/robinstickel/awesome-design-principles#readme">Design Principles</a> — Create better and more consistent designs and experiences.</span>
-   <span id="91fc"><a href="https://github.com/johnjago/awesome-theravada#readme" class="markup--anchor markup--li-anchor" title="https://github.com/johnjago/awesome-theravada#readme">Theravada</a> — Teachings from the Theravada Buddhist tradition.</span>
-   <span id="5ba8"><a href="https://github.com/inspectit-labs/awesome-inspectit#readme" class="markup--anchor markup--li-anchor" title="https://github.com/inspectit-labs/awesome-inspectit#readme">inspectIT</a> — Open source Java app performance management tool.</span>
-   <span id="ccc7"><a href="https://github.com/nayafia/awesome-maintainers#readme" class="markup--anchor markup--li-anchor" title="https://github.com/nayafia/awesome-maintainers#readme">Open Source Maintainers</a> — The experience of being an open source maintainer.</span>
-   <span id="d978"><a href="https://github.com/xxczaki/awesome-calculators#readme" class="markup--anchor markup--li-anchor" title="https://github.com/xxczaki/awesome-calculators#readme">Calculators</a> — Calculators for every platform.</span>
-   <span id="3b1a"><a href="https://github.com/ZYSzys/awesome-captcha#readme" class="markup--anchor markup--li-anchor" title="https://github.com/ZYSzys/awesome-captcha#readme">Captcha</a> — A type of challenge–response test used in computing to determine whether or not the user is human.</span>
-   <span id="c558"><a href="https://github.com/markusschanta/awesome-jupyter#readme" class="markup--anchor markup--li-anchor" title="https://github.com/markusschanta/awesome-jupyter#readme">Jupyter</a> — Create and share documents that contain code, equations, visualizations and narrative text.</span>
-   <span id="6bd9"><a href="https://github.com/andrewda/awesome-frc#readme" class="markup--anchor markup--li-anchor" title="https://github.com/andrewda/awesome-frc#readme">FIRST Robotics Competition</a> — International high school robotics championship.</span>
-   <span id="1663"><a href="https://github.com/humanetech-community/awesome-humane-tech#readme" class="markup--anchor markup--li-anchor" title="https://github.com/humanetech-community/awesome-humane-tech#readme">Humane Technology</a> — Open source projects that help improve society.</span>
-   <span id="dcd5"><a href="https://github.com/karlhorky/awesome-speakers#readme" class="markup--anchor markup--li-anchor" title="https://github.com/karlhorky/awesome-speakers#readme">Speakers</a> — Conference and meetup speakers in the programming and design community.</span>
-   <span id="7f2e"><a href="https://github.com/edm00se/awesome-board-games#readme" class="markup--anchor markup--li-anchor" title="https://github.com/edm00se/awesome-board-games#readme">Board Games</a> — Table-top gaming fun for all.</span>
-   <span id="1414"><a href="https://github.com/uraimo/awesome-software-patreons#readme" class="markup--anchor markup--li-anchor" title="https://github.com/uraimo/awesome-software-patreons#readme">Software Patreons</a> — Fund individual programmers or the development of open source projects.</span>
-   <span id="2035"><a href="https://github.com/ecohealthalliance/awesome-parasite#readme" class="markup--anchor markup--li-anchor" title="https://github.com/ecohealthalliance/awesome-parasite#readme">Parasite</a> — Parasites and host-pathogen interactions.</span>
-   <span id="f632"><a href="https://github.com/jzarca01/awesome-food#readme" class="markup--anchor markup--li-anchor" title="https://github.com/jzarca01/awesome-food#readme">Food</a> — Food-related projects on GitHub.</span>
-   <span id="801c"><a href="https://github.com/dreamingechoes/awesome-mental-health#readme" class="markup--anchor markup--li-anchor" title="https://github.com/dreamingechoes/awesome-mental-health#readme">Mental Health</a> — Mental health awareness and self-care in the software industry.</span>
-   <span id="2aac"><a href="https://github.com/alexk111/awesome-bitcoin-payment-processors#readme" class="markup--anchor markup--li-anchor" title="https://github.com/alexk111/awesome-bitcoin-payment-processors#readme">Bitcoin Payment Processors</a> — Start accepting Bitcoin.</span>
-   <span id="995f"><a href="https://github.com/nschloe/awesome-scientific-computing#readme" class="markup--anchor markup--li-anchor" title="https://github.com/nschloe/awesome-scientific-computing#readme">Scientific Computing</a> — Solving complex scientific problems using computers.</span>
-   <span id="73b4"><a href="https://github.com/ScaleLeap/awesome-amazon-seller#readme" class="markup--anchor markup--li-anchor" title="https://github.com/ScaleLeap/awesome-amazon-seller#readme">Amazon Sellers</a></span>
-   <span id="a3b0"><a href="https://github.com/brycejohnston/awesome-agriculture#readme" class="markup--anchor markup--li-anchor" title="https://github.com/brycejohnston/awesome-agriculture#readme">Agriculture</a> — Open source technology for farming and gardening.</span>
-   <span id="c965"><a href="https://github.com/matttga/awesome-product-design#readme" class="markup--anchor markup--li-anchor" title="https://github.com/matttga/awesome-product-design#readme">Product Design</a> — Design a product from the initial concept to production.</span>
-   <span id="6cde"><a href="https://github.com/catalinmiron/awesome-prisma#readme" class="markup--anchor markup--li-anchor" title="https://github.com/catalinmiron/awesome-prisma#readme">Prisma</a> — Turn your database into a GraphQL API.</span>
-   <span id="0e12"><a href="https://github.com/simskij/awesome-software-architecture#readme" class="markup--anchor markup--li-anchor" title="https://github.com/simskij/awesome-software-architecture#readme">Software Architecture</a> — The discipline of designing and building software.</span>
-   <span id="d0df"><a href="https://github.com/stevesong/awesome-connectivity-info#readme" class="markup--anchor markup--li-anchor" title="https://github.com/stevesong/awesome-connectivity-info#readme">Connectivity Data and Reports</a> — Better understand who has access to telecommunication and internet infrastructure and on what terms.</span>
-   <span id="0f55"><a href="https://github.com/stackshareio/awesome-stacks#readme" class="markup--anchor markup--li-anchor" title="https://github.com/stackshareio/awesome-stacks#readme">Stacks</a> — Tech stacks for building different apps and features.</span>
-   <span id="5d1e"><a href="https://github.com/cytodata/awesome-cytodata#readme" class="markup--anchor markup--li-anchor" title="https://github.com/cytodata/awesome-cytodata#readme">Cytodata</a> — Image-based profiling of biological phenotypes for computational biologists.</span>
-   <span id="aee6"><a href="https://github.com/davisonio/awesome-irc#readme" class="markup--anchor markup--li-anchor" title="https://github.com/davisonio/awesome-irc#readme">IRC</a> — Open source messaging protocol.</span>
-   <span id="e1cb"><a href="https://github.com/cenoura/awesome-ads#readme" class="markup--anchor markup--li-anchor" title="https://github.com/cenoura/awesome-ads#readme">Advertising</a> — Advertising and programmatic media for websites.</span>
-   <span id="e594"><a href="https://github.com/philsturgeon/awesome-earth#readme" class="markup--anchor markup--li-anchor" title="https://github.com/philsturgeon/awesome-earth#readme">Earth</a> — Find ways to resolve the climate crisis.</span>
-   <span id="4814"><a href="https://github.com/gruhn/awesome-naming#readme" class="markup--anchor markup--li-anchor" title="https://github.com/gruhn/awesome-naming#readme">Naming</a> — Naming things in computer science done right.</span>
-   <span id="11f3"><a href="https://github.com/caufieldjh/awesome-bioie#readme" class="markup--anchor markup--li-anchor" title="https://github.com/caufieldjh/awesome-bioie#readme">Biomedical Information Extraction</a> — How to extract information from unstructured biomedical data and text.</span>
-   <span id="fa7e"><a href="https://github.com/iipc/awesome-web-archiving#readme" class="markup--anchor markup--li-anchor" title="https://github.com/iipc/awesome-web-archiving#readme">Web Archiving</a> — An effort to preserve the Web for future generations.</span>
-   <span id="5350"><a href="https://github.com/schlessera/awesome-wp-cli#readme" class="markup--anchor markup--li-anchor" title="https://github.com/schlessera/awesome-wp-cli#readme">WP-CLI</a> — Command-line interface for WordPress.</span>
-   <span id="12a0"><a href="https://github.com/mourarthur/awesome-credit-modeling#readme" class="markup--anchor markup--li-anchor" title="https://github.com/mourarthur/awesome-credit-modeling#readme">Credit Modeling</a> — Methods for classifying credit applicants into risk classes.</span>
-   <span id="45c8"><a href="https://github.com/KeyboardInterrupt/awesome-ansible#readme" class="markup--anchor markup--li-anchor" title="https://github.com/KeyboardInterrupt/awesome-ansible#readme">Ansible</a> — A Python-based, open source IT configuration management and automation platform.</span>
-   <span id="1af0"><a href="https://github.com/keller-mark/awesome-biological-visualizations#readme" class="markup--anchor markup--li-anchor" title="https://github.com/keller-mark/awesome-biological-visualizations#readme">Biological Visualizations</a> — Interactive visualization of biological data on the web.</span>
-   <span id="ae54"><a href="https://github.com/aureooms/awesome-qr-code#readme" class="markup--anchor markup--li-anchor" title="https://github.com/aureooms/awesome-qr-code#readme">QR Code</a> — A type of matrix barcode that can be used to store and share a small amount of information.</span>
-   <span id="dcba"><a href="https://github.com/sdassow/awesome-veganism#readme" class="markup--anchor markup--li-anchor" title="https://github.com/sdassow/awesome-veganism#readme">Veganism</a> — Making the plant-based lifestyle easy and accessible.</span>
-   <span id="9563"><a href="https://github.com/mbiesiad/awesome-translations#readme" class="markup--anchor markup--li-anchor" title="https://github.com/mbiesiad/awesome-translations#readme">Translations</a> — The transfer of the meaning of a text from one language to another.</span>
-   <span id="705e"><a href="https://github.com/dersvenhesse/awesome-scriptable#readme" class="markup--anchor markup--li-anchor" title="https://github.com/dersvenhesse/awesome-scriptable#readme">Scriptable</a> — An iOS app for automations in JavaScript.</span>

### Related

-   <span id="20ca"><a href="https://github.com/topics/awesome" class="markup--anchor markup--li-anchor" title="https://github.com/topics/awesome">All Awesome Lists</a> — All the Awesome lists on GitHub.</span>
-   <span id="5d40"><a href="https://awesome-indexed.mathew-davies.co.uk" class="markup--anchor markup--li-anchor" title="https://awesome-indexed.mathew-davies.co.uk">Awesome Indexed</a> — Search the Awesome dataset.</span>
-   <span id="94ff"><a href="https://awesomelists.top" class="markup--anchor markup--li-anchor" title="https://awesomelists.top">Awesome Search</a> — Quick search for Awesome lists.</span>
-   <span id="6d5b"><a href="https://github.com/basharovV/StumbleUponAwesome" class="markup--anchor markup--li-anchor" title="https://github.com/basharovV/StumbleUponAwesome">StumbleUponAwesome</a> — Discover random pages from the Awesome dataset using a browser extension.</span>
-   <span id="07c1"><a href="https://github.com/umutphp/awesome-cli" class="markup--anchor markup--li-anchor" title="https://github.com/umutphp/awesome-cli">Awesome CLI</a> — A simple command-line tool to dive into Awesome lists.</span>
-   <span id="5761"><a href="http://awesome.digitalbunker.dev" class="markup--anchor markup--li-anchor" title="http://awesome.digitalbunker.dev">Awesome Viewer</a> — A visualizer for all of the above Awesome lists.</span>
-   <span id="a14d"><a href="https://www.trackawesomelist.com" class="markup--anchor markup--li-anchor" title="https://www.trackawesomelist.com">Track Awesome List</a> — View the latest updates of Awesome lists.</span>

------------------------------------------------------------------------

### All Of My Repositories:

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [August 24, 2021](https://medium.com/p/f1c433e32b17).

<a href="https://medium.com/@bryanguner/awesome-list-of-github-repositories-f1c433e32b17" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.

Awesome Web Development Youtube Video Archive
=============================================

This is going to be a running list of youtube videos and channels that I discover as I learn web development. It will not be strictly…

------------------------------------------------------------------------

### Awesome Web Development Youtube Video Archive

#### This is going to be a running list of youtube videos and channels that I discover as I learn web development. It will not be strictly confined to web development but that will be it’s focus.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*SmvOx9hz2KcF1QP4.gif" class="graf-image" /></figure>Tutorials:

Inspiration:

### Channels:

#### Free Code Camp:

> Our mission: to help people learn to code for free. We accomplish this by creating thousands of videos, articles, and interactive coding lessons — all freely available to the public. We also have thousands of freeCodeCamp study groups around the world.

#### Chris Coyier

> This is the official YouTube channel for CSS-Tricks, a web design community curated by Chris Coyier. <a href="https://css-tricks.com" class="markup--anchor markup--blockquote-anchor">https://css-tricks.com</a>

#### Computer History Museum:

> Welcome to the Computer History Museum channel on YouTube. We’re committed to preserving and presenting the history and stories of the Information Age. Here on YouTube we offer videos of the many lectures and events at the museum and also historic computer films. We also feature video from our well–known Revolutionaries television series. Be sure to check out the Computer History Museum website for even more information including online exhibits, upcoming events and our collection of computing artifacts: <a href="http://www.computerhistory.org." class="markup--anchor markup--blockquote-anchor">http://www.computerhistory.org.</a>

#### Computerphile

> Videos all about computers and computer stuff. Sister channel of Numberphile.

#### <a href="https://www.youtube.com/channel/UCu44AnfqsP-sRxmZHdnhblw" class="markup--anchor markup--h4-anchor">Dave Xiang</a>

> Hello! My name is David Xiang. I am a software developer based in New York City. I am a self-proclaimed micro-influencer, focused on helping software developers understand their industry better. To see what I look like and get a feel for my content, please check out some of my YouTube videos. Besides coding, I also enjoy writing and am lucky enough to have some generous tech friends who have shared their experiences with me. I’ve published their stories — and some of my own — in my book, “Software Developer Life.”

#### Google TechTalks

> Google Tech Talks is a grass-roots program at Google for sharing information of interest to the technical community. At its best, it’s part of an ongoing discussion about our world featuring top experts in diverse fields. Presentations range from the broadest of perspective overviews to the most technical of deep dives, on topics well-established to wildly speculative.

#### mycodeschool

> mycodeschool is an educational initiative. Our aim is to present some core concepts of computer programming through illustrated examples and creative teaching techniques. You can send your feedback to mycodeschool \[at\] gmail \[dot\] com Visit: <a href="http://www.mycodeschool.com" class="markup--anchor markup--blockquote-anchor">www.mycodeschool.com</a> Some good resources to learn and practice programming: TopCoder — <a href="http://community.topcoder.com/tc" class="markup--anchor markup--blockquote-anchor">http://community.topcoder.com/tc</a> Codeforces — <a href="http://codeforces.com/" class="markup--anchor markup--blockquote-anchor">http://codeforces.com/</a> Some good resources to practice for programming interviews: Nice article on how to Ace a coding interview — <a href="https://www.linkedin.com/today/post/article/20141120061048-6976444-ace-the-coding-interview-every-time" class="markup--anchor markup--blockquote-anchor">https://www.linkedin.com/today/post/article/20141120061048-6976444-ace-the-coding-interview-every-time</a> <a href="http://www.geeksforgeeks.org/" class="markup--anchor markup--blockquote-anchor">http://www.geeksforgeeks.org/</a> <a href="http://www.careercup.com/" class="markup--anchor markup--blockquote-anchor">http://www.careercup.com/</a>

#### Siraj Raval

> Hello World, it’s Siraj! I’m a technologist on a mission to spread data literacy. Artificial Intelligence, Mathematics, Science, Technology, I simplify these topics to help you understand how they work. Using this knowledge you can build wealth and live a happier, more meaningful life. I live to serve this community. We are the fastest growing AI community in the world! Co-Founder of Sage Health (www.sage-health.org) Twitter: <a href="http://www.twitter.com/sirajraval" class="markup--anchor markup--blockquote-anchor">http://www.twitter.com/sirajraval</a> Instagram: <a href="https://instagram.com/sirajraval/" class="markup--anchor markup--blockquote-anchor">https://instagram.com/sirajraval/</a> Facebook: <a href="https://www.facebook.com/sirajology/" class="markup--anchor markup--blockquote-anchor">https://www.facebook.com/sirajology/</a>

#### suckerpinch

> This is Tom 7’s youtube!

#### Scaler Academy

> Scaler is a tech-focused upskilling and reskilling platform for all of us that may have written anywhere between zero to a few million lines of code but want to get better. The brainchild of Abhimanyu Saxena and Anshuman Singh, founders of InterviewBit, one of India’s largest interview preparation platforms for top tech companies, started out with Academy, a course for working professionals with more than 1 year of experience, and has now grown to include Edge which is for college students. Scaler’s courses have industry-relevant curriculums which are vetted by CTOs, regular doubt solving support through Teaching Assistants and 1:1 personal mentorship from people who currently work at some top tech companies and startups. True to our mission, we have already empowered thousands of students, with our alumni working in companies such as Google, Microsoft and Amazon. But we believe this is only the beginning. Come along, as we build a future together.

Miscellaneous:

General Learning:

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [August 22, 2021](https://medium.com/p/792a25839143).

<a href="https://medium.com/@bryanguner/awesome-web-development-youtube-video-archive-792a25839143" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.

BASH CHEAT SHEET
================

My Bash Cheatsheet Index:

------------------------------------------------------------------------

### BASH CHEAT SHEET

#### My Bash Cheatsheet Index:

<a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b"><strong>ALLOFMYOTHERARTICLES</strong><br />
bryanguner.medium.com</a><a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

### Table Of Contents:

> One Liners

> Block Bad IPs

> If Statements

> Check if args are passed

> Check if required variables exist

> Check if environment variables exists

> While Loops

> Run for 5 Seconds

> Redirecting Outputs

> Stdout, Stderr

### Commands

### tr command

Remove whitespace:

    $ echo 'foo - bar' | tr -d '[:space:]'
    foo-bar

### One Liners

### Block Bad IPs

Use iptables to block all bad ip addresses:

    $ cat /var/log/maillog | grep 'lost connection after AUTH from unknown' | tail -n 5
    May 10 11:19:49 srv4 postfix/smtpd[1486]: lost connection after AUTH from unknown[185.36.81.145]
    May 10 11:21:41 srv4 postfix/smtpd[1762]: lost connection after AUTH from unknown[185.36.81.164]
    May 10 11:21:56 srv4 postfix/smtpd[1762]: lost connection after AUTH from unknown[175.139.231.129]
    May 10 11:23:51 srv4 postfix/smtpd[1838]: lost connection after AUTH from unknown[185.211.245.170]
    May 10 11:24:02 srv4 postfix/smtpd[1838]: lost connection after AUTH from unknown[185.211.245.170]

Get the data to show only IPs:

    cat /var/log/maillog | grep 'lost connection after AUTH from unknown' | cut -d'[' -f3 | cut -d ']' -f1 | tail -n5
    185.36.81.164
    175.139.231.129
    185.211.245.170
    185.211.245.170
    185.36.81.173

Get the unique IP addresses:

    $ cat /var/log/maillog | grep 'lost connection after AUTH from unknown' | cut -d'[' -f3 | cut -d ']' -f1 | sort | uniq
    103.194.70.16
    112.196.77.202
    113.172.210.19
    113.173.182.119
    139.59.224.234

Redirect the output to iptables:

    $ for ip in $(cat /var/log/maillog | grep 'lost connection after AUTH from unknown' | cut -d'[' -f3 | cut -d ']' -f1 | sort | uniq); do iptables -I INPUT -s ${ip} -p tcp --dport 25 -j DROP; done

### If Statements

### Check if args are passed

    if [[ $# -eq 0 ]] ; then
        echo 'need to pass args'
        exit 0
    fi

### Check if required variables exist

    if [ $1 == "one" ] || [ $1 == "two" ]
    then
      echo "argument 1 has the value one or two"
      exit 0
    else
      echo "I require argument 1 to be one or two"
      exit 1
    fi

### Check if environment variables exists

    if [ -z ${OWNER} ] || [ -z ${NAME} ]
    then
      echo "does not meet requirements of both environment variables"
      exit 1
    else
      echo "required environment variables exists"
    fi

### While Loops

### Run process for 5 Seconds

    set -ex
    count=0
    echo "boot"
    ping localhost &
    while [ $count -le 5 ]
      do
        sleep 1
        count=$((count + 1))
        echo $count
      done
    ps aux | grep ping
    echo "tear down"
    kill $!
    sleep 2

### Redirecting Outputs

### Stdout, Stderr

Redirect stderr to /dev/null:

    grep -irl faker . 2>/dev/null

Redirect stdout to one file and stderr to another file:

    grep -irl faker . > out 2>error

Redirect stderr to stdout (&1), and then redirect stdout to a file:

    grep -irl faker . >out 2>&1

Redirect both to a file:

    grep -irl faker . &> file.log

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [July 14, 2021](https://medium.com/p/d3077114aea7).

<a href="https://medium.com/@bryanguner/bash-d3077114aea7" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.

Bash Commands That Save Me Time and Frustration
===============================================

Here’s a list of bash commands that stand between me and insanity.

------------------------------------------------------------------------

### Bash Commands That Save Me Time and Frustration

#### Here’s a list of bash commands that stand between me and insanity.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*w0J8u6jWTikYVZzW.jpg" class="graf-image" /></figure><a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="markup--anchor markup--p-anchor">https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b</a>

> **This article will be accompanied by the following** <a href="https://github.com/bgoonz/bash-commands-walkthrough" class="markup--anchor markup--pullquote-anchor"><strong>github repository</strong></a> **which will contain all the commands listed as well as folders that demonstrate before and after usage!**

<a href="https://github.com/bgoonz/bash-commands-walkthrough" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz/bash-commands-walkthrough"><strong>bgoonz/bash-commands-walkthrough</strong><br />
<em>to accompany the medium article I am writing. Contribute to bgoonz/bash-commands-walkthrough development by creating an…</em>github.com</a><a href="https://github.com/bgoonz/bash-commands-walkthrough" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

> The <a href="https://github.com/bgoonz/bash-commands-walkthrough#readme" class="markup--anchor markup--pullquote-anchor">readme</a> for this git repo will provide a much more condensed list… whereas this article will break up the commands with explanations… images & links!

**I will include the code examples as both github gists (for proper syntax highlighting) and as code snippets adjacent to said gists so that they can easily be copied and pasted… or … if you’re like me for instance; and like to use an extension to grab the markdown content of a page… the code will be included rather than just a link to the gist!**

<figure><img src="https://cdn-images-1.medium.com/max/1200/1*3m_UcQOAyKtIpHQ6j9JzZw.gif" class="graf-image" /></figure>

### Here’s a Cheatsheet:

### Getting Started (Advanced Users Skip Section):

------------------------------------------------------------------------

#### ✔ Check the Current Directory ➡ `pwd`:

On the command line, it’s important to know the directory we are currently working on. For that, we can use `pwd` command.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*dimzLUrmDI4Ufev6.gif" class="graf-image" /></figure>It shows that I’m working on my Desktop directory.

#### ✔ Display List of Files ➡ `ls`:

To see the list of files and directories in the current directory use `ls` command in your CLI.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*HHzVrK2CtTPwTdYT.gif" class="graf-image" /></figure>Shows all of my files and directories of my Desktop directory.

-   <span id="20cb">To show the contents of a directory pass the directory name to the `ls` command i.e. `ls directory_name`.</span>
-   <span id="5cd8">Some useful `ls` command options:-</span>

OptionDescriptionls -alist all files including hidden file starting with ‘.’ls -llist with the long formatls -lalist long format including hidden files

#### ✔ Create a Directory ➡ `mkdir`:

We can create a new folder using the `mkdir` command. To use it type `mkdir folder_name`.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*m3dDyC9vRJBUZSxR.gif" class="graf-image" /></figure>Use `ls` command to see the directory is created or not.

I created a cli-practice directory in my working directory i.e. Desktop directory.

#### ✔ Move Between Directories ➡ `cd`:

It’s used to change directory or to move other directories. To use it type `cd directory_name`.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*34KGxT2G8oNMDnIc.gif" class="graf-image" /></figure>Can use `pwd` command to confirm your directory name.

Changed my directory to the cli-practice directory. And the rest of the tutorial I’m gonna work within this directory.

#### ✔ Parent Directory ➡ `..`:

We have seen `cd` command to change directory but if we want to move back or want to move to the parent directory we can use a special symbol `..` after `cd` command, like `cd ..`

#### ✔ Create Files ➡ `touch`:

We can create an empty file by typing `touch file_name`. It's going to create a new file in the current directory (the directory you are currently in) with your provided name.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*xu1wtv7gJ2NMvP60.gif" class="graf-image" /></figure>I created a hello.txt file in my current working directory. Again you can use `ls` command to see the file is created or not.

Now open your hello.txt file in your text editor and write *Hello Everyone!* into your hello.txt file and save it.

#### ✔ Display the Content of a File ➡ `cat`:

We can display the content of a file using the `cat` command. To use it type `cat file_name`.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*iKf5w9QFNCeLRv8a.gif" class="graf-image" /></figure>Shows the content of my hello.txt file.

#### ✔ Move Files & Directories ➡ `mv`:

To move a file and directory, we use `mv` command.

By typing `mv file_to_move destination_directory`, you can move a file to the specified directory.

By entering `mv directory_to_move destination_directory`, you can move all the files and directories under that directory.

Before using this command, we are going to create two more directories and another txt file in our cli-practice directory.

`mkdir html css touch bye.txt`

<figure><img src="https://cdn-images-1.medium.com/max/800/0*piaAQz_MQpzo7DPH.gif" class="graf-image" /></figure>Yes, we can use multiple directories & files names one after another to create multiple directories & files in one command.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*5jmj_ZyNz46GuQKz.gif" class="graf-image" /></figure>Moved my bye.txt file into my css directory and then moved my css directory into my html directory.

#### ✔ Rename Files & Directories ➡ `mv`:

`mv` command can also be used to rename a file and a directory.

You can rename a file by typing `mv old_file_name new_file_name` & also rename a directory by typing `mv old_directory_name new_directory_name`.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*WTVu1dd6gr-nmWhD.gif" class="graf-image" /></figure>Renamed my hello.txt file to the hi.txt file and html directory to the folder directory.

#### ✔ Copy Files & Directories ➡ `cp`:

To do this, we use the `cp` command.

-   <span id="62fa">You can copy a file by entering `cp file_to_copy new_file_name`.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*kCLVtKN9oKPbHfRF.gif" class="graf-image" /></figure>Copied my hi.txt file content into hello.txt file. For confirmation open your hello.txt file in your text editor.

-   <span id="9bfc">You can also copy a directory by adding the `-r` option, like `cp -r directory_to_copy new_directory_name`.</span>

*The* `-r` *option for "recursive" means that it will copy all of the files including the files inside of subfolders.*

<figure><img src="https://cdn-images-1.medium.com/max/800/0*MnmzMiioIYCuK92B.gif" class="graf-image" /></figure>Here I copied all of the files from the folder to folder-copy.

#### ✔ Remove Files & Directories ➡ `rm`:

To do this, we use the `rm` command.

-   <span id="487a">To remove a file, you can use the command like `rm file_to_remove`.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*ohCmdthd92_HA6Ze.gif" class="graf-image" /></figure>Here I removed my hi.txt file.

-   <span id="0e9a">To remove a directory, use the command like `rm -r directory_to_remove`.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*voDbzwSpw24A2RjQ.gif" class="graf-image" /></figure>I removed my folder-copy directory from my cli-practice directory i.e. current working directory.

#### ✔ Clear Screen ➡ `clear`:

Clear command is used to clear the terminal screen.

#### ✔ Home Directory ➡ `~`:

The Home directory is represented by `~`. The Home directory refers to the base directory for the user. If we want to move to the Home directory we can use `cd ~` command. Or we can only use `cd` command.

------------------------------------------------------------------------

### MY COMMANDS:

### 1.) Recursively unzip zip files and then delete the archives when finished:

**here is a** <a href="https://github.com/bgoonz/bash-commands-walkthrough/tree/master/steps/1-recursive-unzip" class="markup--anchor markup--p-anchor"><strong>folde</strong></a>**r containing the before and after… I had to change folder names slightly due to a limit on the length of file-paths in a github repo.**

    find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;    

    find . -name "*.zip" -type f -print -delete

------------------------------------------------------------------------

### 2.) Install node modules recursively:

    npm i -g recursive-install  

    npm-recursive-install

------------------------------------------------------------------------

### 3.) Clean up unnecessary files/folders in git repo:

    find . -empty -type f -print -delete #Remove empty files

    # -------------------------------------------------------
    find . -empty -type d -print -delete #Remove empty folders

    # -------------------------------------------------------

    # This will remove .git folders...    .gitmodule files as well as .gitattributes and .gitignore files. 

    find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} + 

    # -------------------------------------------------------

    # This will remove the filenames you see listed below that just take up space if a repo has been downloaded for use exclusively in your personal file system (in which case the following files just take up space)# Disclaimer... you should not use this command in a repo that you intend to use with your work as it removes files that attribute the work to their original creators!

    find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "\*CONTRIBUTING.md" \) -exec rm -rf -- {} +

#### In Action:

The following output from my bash shell corresponds to the directory:

<a href="https://github.com/bgoonz/bash-commands-walkthrough/tree/master/steps/3-clean-up-fluf/DS-ALGO-OFFICIAL-master" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz/bash-commands-walkthrough/tree/master/steps/3-clean-up-fluf/DS-ALGO-OFFICIAL-master"><strong>bgoonz/bash-commands-walkthrough</strong><br />
<em>Deployment github-pages Navigation Big O notation is the language we use for talking about how long an algorithm takes…</em>github.com</a><a href="https://github.com/bgoonz/bash-commands-walkthrough/tree/master/steps/3-clean-up-fluf/DS-ALGO-OFFICIAL-master" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

#### which was created by running the aforementioned commands in in a perfect copy of this directory:

<a href="https://github.com/bgoonz/DS-ALGO-OFFICIAL" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz/DS-ALGO-OFFICIAL"><strong>bgoonz/DS-ALGO-OFFICIAL</strong><br />
<em>Deployment github-pages Navigation Big O notation is the language we use for talking about how long an algorithm takes…</em>github.com</a><a href="https://github.com/bgoonz/DS-ALGO-OFFICIAL" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

> **…..below is the terminal output for the following commands:**

    pwd
    /mnt/c/Users/bryan/Downloads/bash-commands/steps/3-clean-up-fluf/DS-ALGO-OFFICIAL-master

> **After printing the working directory for good measure:**

    find . -empty -type f -print -delete

> **The above command deletes empty files recursively starting from the directory in which it was run:**

    ./CONTENT/DS-n-Algos/File-System/file-utilities/node_modules/line-reader/test/data/empty_file.txt
    ./CONTENT/DS-n-Algos/_Extra-Practice/free-code-camp/nodejs/http-collect.js
    ./CONTENT/Resources/Comments/node_modules/mime/.npmignore
    ./markdown/tree2.md
    ./node_modules/loadashes6/lodash/README.md
    ./node_modules/loadashes6/lodash/release.md
    ./node_modules/web-dev-utils/Markdown-Templates/Markdown-Templates-master/filled-out-readme.md
    |01:33:16|bryan@LAPTOP-9LGJ3JGS:[DS-ALGO-OFFICIAL-master] DS-ALGO-OFFICIAL-master_exitstatus:0[╗___________o>

> **The command seen below deletes empty folders recursively starting from the directory in which it was run:**

    find . -empty -type d -print -delete

> The resulting directories….

    |01:33:16|bryan@LAPTOP-9LGJ3JGS:[DS-ALGO-OFFICIAL-master] DS-ALGO-OFFICIAL-master_exitstatus:0[╗___________o>

    find . -empty -type d -print -delete
    ./.git/branches
    ./.git/objects/info
    ./.git/refs/tags
    |01:33:31|bryan@LAPTOP-9LGJ3JGS:[DS-ALGO-OFFICIAL-master] DS-ALGO-OFFICIAL-master_exitstatus:0[╗___________o>

> **The command seen below deletes .git folders as well as .gitignore, .gitattributes, .gitmodule files**

    find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +

**The command seen below deletes most SECURITY, RELEASE, CHANGELOG, LICENSE, CONTRIBUTING, & HISTORY files that take up pointless space in repo’s you wish to keep exclusively for your own reference.**

### !!!Use with caution as this command removes the attribution of the work from it’s original authors!!!!!

<figure><img src="https://cdn-images-1.medium.com/max/800/0*r5dGhtbeZ4VdO54U" alt="!!!Use with caution as this command removes the attribution of the work from it’s original authors!!!!!" class="graf-image" /><figcaption>!!!Use with caution as this command removes the attribution of the work from it’s original authors!!!!!</figcaption></figure>find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +

------------------------------------------------------------------------

### 4.) Generate index.html file that links to all other files in working directory:

    #!/bin/sh
    # find ./ | grep -i "\.*$" >files
    find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
    listing="files"
    out=""
    html="index.html"
    out="basename $out.html"
    html="index.html"
    cmd() {
      echo '  <!DOCTYPE html>'
      echo '<html>'
      echo '<head>'
      echo '  <meta http-equiv="Content-Type" content="text/html">'
      echo '  <meta name="Author" content="Bryan Guner">'
      echo '<link rel="stylesheet" href="./assets/prism.css">'
      echo ' <link rel="stylesheet" href="./assets/style.css">'
      echo ' <script async defer src="./assets/prism.js"></script>'
      echo "  <title> directory </title>"
      echo ""
      echo '<style>'
    echo '    a {'
    echo '      color: black;'
    echo '    }'
    echo ''
    echo '    li {'
    echo '      border: 1px solid black !important;'
    echo '      font-size: 20px;'
    echo '      letter-spacing: 0px;'
    echo '      font-weight: 700;'
    echo '      line-height: 16px;'
    echo '      text-decoration: none !important;'
    echo '      text-transform: uppercase;'
    echo '      background: #194ccdaf !important;'
    echo '      color: black !important;'
    echo '      border: none;'
    echo '      cursor: pointer;'
    echo '      justify-content: center;'
    echo '      padding: 30px 60px;'
    echo '      height: 48px;'
    echo '      text-align: center;'
    echo '      white-space: normal;'
    echo '      border-radius: 10px;'
    echo '      min-width: 45em;'
    echo '      padding: 1.2em 1em 0;'
    echo '      box-shadow: 0 0 5px;'
    echo '      margin: 1em;'
    echo '      display: grid;'
    echo '      -webkit-border-radius: 10px;'
    echo '      -moz-border-radius: 10px;'
    echo '      -ms-border-radius: 10px;'
    echo '      -o-border-radius: 10px;'
    echo '    }'
    echo '  </style>'
      echo '</head>'
      echo '<body>'
      echo ""
      # continue with the HTML stuff
      echo ""
      echo ""
      echo "<ul>"
      awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</a></li>"}' $listing
      # awk '{print "<li>"};
      #  {print " <a href=\""$1"\">",$1,"</a></li>&nbsp;"}' \ $listing
      echo ""
      echo "</ul>"
      echo "</body>"
      echo "</html>"
    }
    cmd $listing --sort=extension >>$html

#### In Action:

**I will use this copy of my Data Structures Practice Site to demonstrate the result:**

<a href="https://github.com/side-projects-42/DS-Bash-Examples-Deploy" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/side-projects-42/DS-Bash-Examples-Deploy"><strong>side-projects-42/DS-Bash-Examples-Deploy</strong><br />
<em>Deployment github-pages Navigation Big O notation is the language we use for talking about how long an algorithm takes…</em>github.com</a><a href="https://github.com/side-projects-42/DS-Bash-Examples-Deploy" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*PuuDTUviX5G6mja-5eKUIw.png" class="graf-image" /></figure>#### The result is a index.html file that contains a list of links to each file in the directory:

> here is a link to and photo of the resulting html file:

<a href="https://quirky-meninsky-4181b5.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://quirky-meninsky-4181b5.netlify.app/"><strong>index.html</strong><br />
<em>CONTENT/DS-n-Algos/</em>quirky-meninsky-4181b5.netlify.app</a><a href="https://quirky-meninsky-4181b5.netlify.app/" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*AOYbWvUGN9yJ4ceNzAGGsw.png" class="graf-image" /></figure>

------------------------------------------------------------------------

### 5.) Download all links to a files of a specified extension on a user provided (url) webpage:

    wget -r -A.pdf https://overapi.com/gitwget --wait=2 --level=inf --limit-rate=20K --recursive --page-requisites --user-agent=Mozilla --no-parent --convert-links --adjust-extension --no-clobber -e robots=off

> The result is stored in <a href="https://github.com/bgoonz/bash-commands-walkthrough/tree/master/steps/5-download-all-pdf" class="markup--anchor markup--blockquote-anchor">this directory:</a>

<figure><img src="https://cdn-images-1.medium.com/max/1200/1*8evVPO_z-_TATzkcDTp15Q.png" class="graf-image" /></figure>

------------------------------------------------------------------------

### 6.)Recursively remove lines of text containing the string badFolder from files in the working directory.

    find . -type f -exec sed -i '/badFolder/d' ./* {} \;

    # OR

    find . -name 'result.md'  -type f -exec sed -i '/badFolder/d' ./* {} \;

**As an example I will run this command on a file containing the text:**

    Hacks Blog

    Read more at hacks.mozilla.org

    badFolder

    badFolder Implementing Private Fields for JavaScript

    When implementing a language feature for JavaScript, an implementer must make decisions about how the language in the specification maps to the implementation. Private fields is an example of where the specification language and implementation reality diverge, at least in SpiderMonkey– the JavaScript engine which powers Firefox. To understand more, I’ll explain what private fields are, a couple of models for thinking about them, and explain why our implementation diverges from the specification language.The post Implementing Private Fields for JavaScript appeared first on Mozilla Hacks - the Web developer blog.

    Posted Tuesday, June 8, 2021 by Matthew Gaudet

    Looking fine with Firefox 89

    Firefox 89 has smartened up and brings with it a slimmed-down, slightly more minimalist interface.badFolder Along with this new look, we get some great styling features including a force-colours feature for media queries and better control over how fonts are displayed. The long-awaited top-level await keyword for JavaScript modules is now enabled, as well as the PerformanceEventTiming interface, which is another addition to the performance suite of APIs: 89 really has been working out!The post Looking fine with Firefox 89 appeared first on Mozilla Hacks - the Web developer blog.

    badFolder

    Posted Tuesday, June 1, 2021 by Chris Mills

    badFolder

    Improving Firefox stability on Linux

    Roughly a year ago at Mozilla we started an effort to improve Firefox stability on Linux. This effort quickly became an example of good synergies between FOSS projects.The post Improving Firefox stability on Linux appeared first on Mozilla Hacks - the Web developer blog.

    Posted Wednesday, May 19, 2021 by Gabriele Svelto badFolder

    Introducing Firefox’s new Site Isolation Security Architecture

    Like any web browser, Firefox loads code from untrusted and potentially hostile websites and runs it on your computer. To protect you against new types of attacks from malicious sites and to meet the security principles of Mozilla, we set out to redesign Firefox on desktop.The post Introducing Firefox’s new Site Isolation Security Architecture appeared first on Mozilla Hacks - the Web developer blog.

    Posted Tuesday, May 18, 2021 by Anny Gakhokidze

    Pyodide Spin Out and 0.17 Release

    We are happy to announce that Pyodide has become an independent and community-driven project. We are also pleased to announce the 0.17 release for Pyodide with many new features and improvements. Pyodide consists of the CPython 3.8 interpreter compiled to WebAssembly which allows Python to run in the browser.The post Pyodide Spin Out and 0.17 Release appeared first on Mozilla Hacks - the Web developer blog. badFolder

    Posted Thursday, April 22, 2021 by Teon Brooks

***I modified the command slightly to apply only to files called ‘result.md’:***

> The result is :

    Hacks Blog

    Read more at hacks.mozilla.org

    When implementing a language feature for JavaScript, an implementer must make decisions about how the language in the specification maps to the implementation. Private fields is an example of where the specification language and implementation reality diverge, at least in SpiderMonkey– the JavaScript engine which powers Firefox. To understand more, I’ll explain what private fields are, a couple of models for thinking about them, and explain why our implementation diverges from the specification language.The post Implementing Private Fields for JavaScript appeared first on Mozilla Hacks - the Web developer blog.

    Posted Tuesday, June 8, 2021 by Matthew Gaudet

    Looking fine with Firefox 89

    Posted Tuesday, June 1, 2021 by Chris Mills

    Improving Firefox stability on Linux

    Roughly a year ago at Mozilla we started an effort to improve Firefox stability on Linux. This effort quickly became an example of good synergies between FOSS projects.The post Improving Firefox stability on Linux appeared first on Mozilla Hacks - the Web developer blog.

    Introducing Firefox’s new Site Isolation Security Architecture

    Like any web browser, Firefox loads code from untrusted and potentially hostile websites and runs it on your computer. To protect you against new types of attacks from malicious sites and to meet the security principles of Mozilla, we set out to redesign Firefox on desktop.The post Introducing Firefox’s new Site Isolation Security Architecture appeared first on Mozilla Hacks - the Web developer blog.

    Posted Tuesday, May 18, 2021 by Anny Gakhokidze

    Pyodide Spin Out and 0.17 Release

    Posted Thursday, April 22, 2021 by Teon Brooks

<figure><img src="https://cdn-images-1.medium.com/max/1200/1*Up5as-MkHcHbvI_qX1AqPw.png" class="graf-image" /></figure>

**the test.txt and result.md files can be found here:**

<a href="https://github.com/bgoonz/bash-commands-walkthrough/tree/master/steps/6-remove-lines-contaning-bad-text" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz/bash-commands-walkthrough/tree/master/steps/6-remove-lines-contaning-bad-text"><strong>bgoonz/bash-commands-walkthrough</strong><br />
<em>to accompany the medium article I am writing. Contribute to bgoonz/bash-commands-walkthrough development by creating an…</em>github.com</a><a href="https://github.com/bgoonz/bash-commands-walkthrough/tree/master/steps/6-remove-lines-contaning-bad-text" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

------------------------------------------------------------------------

### 7.) Execute command recursively:

**Here I have modified the command I wish to run recursively to account for the fact that the ‘find’ command already works recursively, by appending the -maxdepth 1 flag…**

> **I am essentially removing the recursive action of the find command…**

**That way, if the command affects the more deeply nested folders we know the outer RecurseDirs function we are using to run the *find/pandoc* line once in every subfolder of the working directory… is working properly!**

<figure><img src="https://cdn-images-1.medium.com/max/600/1*5C_uzLnuCSlTiioi2EtnUA.png" class="graf-image" /></figure>**Run in the folder shown to the left… we would expect every .md file to be accompanied by a newly generated html file by the same name.**

**The results of said operation can be found in the** <a href="https://github.com/bgoonz/bash-commands-walkthrough/tree/master/steps/7-recursive-run" class="markup--anchor markup--p-anchor"><strong>following directory</strong></a>

#### In Action:

🢃 Below 🢃

<figure><img src="https://cdn-images-1.medium.com/max/1200/1*k9c1QRKY07TLJnp9Se89lQ.gif" class="graf-image" /></figure>

#### The final result is:

<figure><img src="https://cdn-images-1.medium.com/max/1200/1*jqrjNeBuRmTrDt3vmQ50LQ.png" class="graf-image" /></figure>

*If you want to run any bash script recursively all you have to do is substitue out line \#9 with the command you want to run once in every sub-folder.*

    function RecurseDirs ()
    {
        oldIFS=$IFS
        IFS=$'\n'
        for f in "$@"
        do

    #Replace the line below with your own command!

    #find ./ -iname "*.md" -maxdepth 1 -type f -exec sh -c 'pandoc --standalone "${0}" -o "${0%.md}.html"' {} \;

    #####################################################
    # YOUR CODE BELOW!

    #####################################################

    if [[ -d "${f}" ]]; then
                cd "${f}"
                RecurseDirs $(ls -1 ".")
                cd ..
            fi
        done
        IFS=$oldIFS
    }
    RecurseDirs "./"

------------------------------------------------------------------------

### TBC….

**Here are some of the other commands I will cover in greater detail… at a later time:**

### 9. Copy any text between &lt;script&gt; tags in a file called example.html to be inserted into a new file: out.js

    sed -n -e '/<script>/,/<\/script>/p' example.html >out.js

------------------------------------------------------------------------

### 10. Recursively Delete node\_modules folders

    find . -name 'node_modules' -type d -print -prune -exec rm -rf '{}' +

------------------------------------------------------------------------

### 11. Sanatize file and folder names to remove illegal characters and reserved words.

    sanitize() {
      shopt -s extglob;

      filename=$(basename "$1")
      directory=$(dirname "$1")

      filename_clean=$(echo "$filename" | sed -e 's/[\\/:\*\?"<>\|\x01-\x1F\x7F]//g' -e 's/^\(nul\|prn\|con\|lpt[0-9]\|com[0-9]\|aux\)\(\.\|$\)//i' -e 's/^\.*$//' -e 's/^$/NONAME/')

      if (test "$filename" != "$filename_clean")
      then
        mv -v "$1" "$directory/$filename_clean"
      fi
    }

    export -f sanitize

    sanitize_dir() {
      find "$1" -depth -exec bash -c 'sanitize "$0"' {} \;

    }

    sanitize_dir '/path/to/somewhere'

------------------------------------------------------------------------

### 12. Start postgresql in terminal

    sudo -u postgres psql

------------------------------------------------------------------------

### 13. Add closing body and script tags to each html file in working directory.

    for f in * ; do
      mv "$f" "$f.html"
    doneecho "<form>
     <input type="button" value="Go back!" onclick="history.back()">
    </form>
      </body></html>" | tee -a *.html

------------------------------------------------------------------------

### 14. Batch Download Videos

    #!/bin/bash

    link="#insert url here#"
    #links were a set of strings with just the index of the video as the variable

    num=3
    #first video was numbered 3 - weird.

    ext=".mp4"

    while [ $num -le 66 ]
    do
          wget $link$num$ext -P ~/Downloads/
          num=$(($num+1))
    done

------------------------------------------------------------------------

### 15. Change File Extension from ‘.txt’ to .doc for all files in working directory.

    sudo apt install rename

    rename 's/\.txt$/.doc/' *.txt

### 16. Recursivley change any file with extension .js.download to .js

    find . -name "*.\.js\.download" -exec rename 's/\.js\.download$/.js/' '{}' +

------------------------------------------------------------------------

### 17. Copy folder structure including only files of a specific extension into an ouput Folder

    find . -name '*.md' | cpio -pdm './../outputFolder'

------------------------------------------------------------------------

### Discover More:

<a href="https://bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…</em>bgoonz-blog.netlify.app</a><a href="https://bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Part 2 of this series:

<a href="https://medium.com/@bryanguner/life-saving-bash-scripts-part-2-b40c8ee22682" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/@bryanguner/life-saving-bash-scripts-part-2-b40c8ee22682"><strong>Medium</strong><br />
<em>Continued!!!medium.com</em></a><a href="https://medium.com/@bryanguner/life-saving-bash-scripts-part-2-b40c8ee22682" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

------------------------------------------------------------------------

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [June 29, 2021](https://medium.com/p/920fb6ab9d0a).

<a href="https://medium.com/@bryanguner/bash-commands-that-save-time-920fb6ab9d0a" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.

Bash Proficiency In Under 15 Minutes
====================================

Cheat sheet and in-depth explanations located below main article contents… The UNIX shell program interprets user commands, which are…

------------------------------------------------------------------------

### Bash Proficiency In Under 15 Minutes

#### Cheat sheet and in-depth explanations located below main article contents… The UNIX shell program interprets user commands, which are either directly entered by the user, or which can be read from a file called the shell script or shell program. Shell scripts are interpreted, not compiled. The shell reads commands from the script line per line and searches for those commands on the system while a compiler converts a program into machine readable form, an executable file.

------------------------------------------------------------------------

### LIFE SAVING PROTIP:

### A nice thing to do is to add on the first line

    #!/bin/bash -x

------------------------------------------------------------------------

> I will go deeper into the explanations behind some of these examples at the bottom of this article.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*QkQexW5Lg0NYrtuD" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/600/0*gtmOR8KLGdLcUwPt.gif" class="graf-image" /></figure>

#### Here’s some previous articles I’ve written for more advanced users.

<a href="https://medium.com/geekculture/bash-commands-that-save-time-920fb6ab9d0a" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/geekculture/bash-commands-that-save-time-920fb6ab9d0a"><strong>Bash Commands That Save Me Time and Frustration</strong><br />
<em>Here’s a list of bash commands that stand between me and insanity.</em>medium.com</a><a href="https://medium.com/geekculture/bash-commands-that-save-time-920fb6ab9d0a" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/geekculture/life-saving-bash-scripts-part-2-b40c8ee22682" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/geekculture/life-saving-bash-scripts-part-2-b40c8ee22682"><strong>Life Saving Bash Scripts Part 2</strong><br />
<em>I am not saying they’re in any way special compared with other bash scripts… but when I consider that you can never…</em>medium.com</a><a href="https://medium.com/geekculture/life-saving-bash-scripts-part-2-b40c8ee22682" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/what-are-bash-aliases-and-why-should-you-be-using-them-30a6cfafdfeb" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/what-are-bash-aliases-and-why-should-you-be-using-them-30a6cfafdfeb"><strong>What Are Bash Aliases And Why Should You Be Using Them!</strong><br />
<em>A Bash alias is a method of supplementing or overriding Bash commands with new ones. Bash aliases make it easy for…</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/what-are-bash-aliases-and-why-should-you-be-using-them-30a6cfafdfeb" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

------------------------------------------------------------------------

### What is Bash?

> Apart from passing commands to the kernel, the main task of a shell is providing a user environment through which they can issue the computer commands via a command line instead of the graphical user interfaces most software consumers are familiar with.

------------------------------------------------------------------------

<figure><img src="https://cdn-images-1.medium.com/max/800/0*7qlctJzV2Jv3F0cr.gif" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/600/0*oQWiki9YceuZc9h_.jpeg" alt="fire meme" class="graf-image" /><figcaption>fire meme</figcaption></figure>

#### Here’s a REPL with some examples for you to practice….

> ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ below motivational monologue ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

***Remember: learning is an effortful activity… it’s not comfortable… practice might be unpleasant but if you don’t you might as well skip reading too because without application… reading articles just provides a false sense of accomplishment….***

> <a href="https://resume.github.io/?bgoonz" class="markup--anchor markup--blockquote-anchor">quote by: … <strong>me</strong> 1 minute ago</a> (inspired by veritasium….)

### Aforementioned Repl:

------------------------------------------------------------------------

### <a href="https://egghead.io/lessons/bash-navigate-the-filesystem-in-bash" class="markup--anchor markup--h3-anchor">Navigate the file system</a>

#### Change bash’s current working directory

    cd <file path here>
    # to go up a directory from your current directory
    cd ..

#### List a directory’s contents

    ls
    # for more details, add -l (long)
    ls -l
    # this will output something like this:
    # -rw-r--r--  1 cameronnokes  staff  1237 Jun  2 22:46 index.js
    # in order, those columns are:
    #   permissions for you, your group, all
    #   number of links (hardlinks & softlinks)
    #   owner user
    #   owner group
    #   file size
    #   last modified time
    #   file name

    # to see hidden files/folders (like .git or .npmignore)
    ls -a
    # Note, flags can be combined like so
    ls -la

### <a href="https://egghead.io/lessons/bash-view-files-and-folders-in-bash" class="markup--anchor markup--h3-anchor">View files and folders in bash</a>

#### Output a file to the screen (stdout)

    cat <file name>
    # shows it with line numbers
    cat -n <file name>

#### View a file in bash

    # view the file without dumping it all onto your screen
    less <file name>
    # Some useful shortcuts in less
    #   Shift+g   (jump to end)
    #   g         (go back to top)
    #   /         (search)
    #   q         (quit/close)

#### View file/folder in default application associated with it

    open <file/folder name>
    # view current directory in Finder
    open .
    # specify an application to use
    open <file name> -a TextEdit

<figure><img src="https://cdn-images-1.medium.com/max/800/0*LKzjKI9gdjBFE851.png" alt="folder structure" class="graf-image" /><figcaption>folder structure</figcaption></figure>### <a href="https://egghead.io/lessons/bash-create-and-delete-files-and-folders-in-bash" class="markup--anchor markup--h3-anchor">Create and delete files and folders</a>

#### Create a file

    touch <file name>

#### Set or append to a file

    # set the file's contents
    echo 'hi' > file.txt
    # append to file's contents
    echo 'hi' >> file.txt
    # note that if you pass a file name that doesn't exist, it'll get created on the fly

#### Create a directory

    mkdir <folder name>
    # make intermediary directories as needed
    mkdir -p parent/child/grandchild

#### Remove a file

    # Note, this permanently deletes a file
    rm <file name>
    # Remove a folder and it's contents, recursively
    rm -rf <folder name>

### <a href="https://egghead.io/lessons/bash-move-and-copy-files-and-folders-with-bash" class="markup--anchor markup--h3-anchor">Move and Copy Files and Folders with bash</a>

#### Move a file

    mv <target> <destination>
    # for example, to rename a file
    mv a.js b.js
    # move all files in a folder to another folder
    mv lib/* src

#### Copy a file

    cp <target> <destination>
    # copy everything recursively from one folder to another
    cp -R src/* lib

### <a href="https://egghead.io/lessons/bash-find-files-and-folders-with-find-in-bash" class="markup--anchor markup--h3-anchor">Find Files and Folders with</a> `find` <a href="https://egghead.io/lessons/bash-find-files-and-folders-with-find-in-bash" class="markup--anchor markup--h3-anchor">in bash</a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*3hXVYnYPTLCQHe0f.jpg" alt="find" class="graf-image" /><figcaption>find</figcaption></figure># find all the PNGs in a folder
    find <path> -name "*.png"
    # find all the JPGs (case insensitive) in a folder
    find <path> -iname "*.jpg"
    # find only directories
    find <path> -type d
    # delete all matching files
    find <path> -name "*.built.js" -delete
    # execute an arbitrary action on each match
    # remember `{}` will be replaced with the file name
    find <path> -name "*.png" -exec pngquant {} \;

### <a href="https://egghead.io/lessons/grep-search-for-text-with-grep" class="markup--anchor markup--h3-anchor">Search for text with </a>`grep`

    # Basic usage
    grep <pattern> <target file or glob>
    # Useful flags
    # --color     (colorizes matches)
    # -n          (show line numbers)
    # -C <number> (show N lines above/below match for context)
    # -e          (regex search)

### <a href="https://egghead.io/lessons/http-make-http-requests-in-bash-with-curl" class="markup--anchor markup--h3-anchor">Make HTTP requests in bash with </a>`curl`

<figure><img src="https://cdn-images-1.medium.com/max/800/0*YmLsGKSXYDZ_vzMp.png" alt="http" class="graf-image" /><figcaption>http</figcaption></figure>The test server is available in the `curl-practice-server` directory. Run `npm install && npm start` to run it.

    curl <url>
    # Useful flags
    # -i    (show response headers only)
    # -L    (follow redirects)
    # -H    (header flag)
    # -X    (set HTTP method)
    # -d    (request body)
    # -o    (output to a file)

    # to POST JSON
    # (technically you don't need -X POST because -d will make it POST automatically, but I like to be explicit)
    curl -X POST -H "Content-Type: application/json" -d '{ "title": "Curling" }' http://localhost:3000/api/posts

    # POST a url encoded form
    curl -X POST --data-urlencode title="Curling again" http://localhost:3000/api/posts

    # multiline curl (applies to any bash command)
    curl -i -X PUT \
    -d '{ "title": "Changed title" }' \
    -H "Content-Type: application/json" \
    http://localhost:3000/api/posts

    # pretty print JSON with jsome
    curl https://swapi.co/api/people/1/ | jsome

Here’s the <a href="https://www.npmjs.com/package/jsome" class="markup--anchor markup--p-anchor">jsome</a> package that pretty prints JSON

### <a href="https://egghead.io/lessons/bash-create-and-run-bash-scripts" class="markup--anchor markup--h3-anchor">Create and run bash scripts</a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*AC9okBRPVFBSHpwv.png" alt="bash scripting" class="graf-image" /><figcaption>bash scripting</figcaption></figure>echo 'echo Hello World' > script.sh
    chmod u+x script.sh
    ./script.sh

The `init-js.sh` script for scaffolding a JS project

    echo "Initializing JS project at $(pwd)"
    git init
    npm init -y # create package.json with all the defaults
    mkdir src
    touch index.js
    code .

One way to add that script to your `$PATH`:

    cp init-js.sh /usr/local/bin/init-js

### <a href="https://egghead.io/lessons/bash-store-and-use-values-with-bash-variables" class="markup--anchor markup--h3-anchor">Store and Use Values with bash Variables</a>

    # no spaces between name, =, and value
    var=123
    echo $var
    # to make it accessible to all child processes of current shell, export it
    export var
    # this deletes the variable
    unset var

To see all environment variables

    env

`clone-to-temp.sh` script:

    temp=$(mktemp -d)
    git clone --branch $1 $PWD $temp
    echo "branch $1 cloned to $temp"
    # run some tasks, tests, etc here

### <a href="https://egghead.io/lessons/bash-understand-and-use-functions-in-bash" class="markup--anchor markup--h3-anchor">Understand and use functions in bash</a>

    greet() {
      echo "$1 world"
    }

    greeting=$(greet "howdy")

    echo "the greeting is $greeting"

    global=123

    test() {
      echo "global = $global"
      local local_var="i'm a local"
      echo "local_var = $local_var"
    }

    test

    echo "global = $global"
    echo "local_var = $local_var" # will be empty because it's out of scope

### <a href="https://egghead.io/lessons/bash-understand-exit-statuses-in-bash" class="markup--anchor markup--h3-anchor">Understand exit statuses in bash</a>

Get the last run command’s exit status

    ls
    # will be 0 if it ran successfully, 1 - 255 for an error
    echo $?

Exit statuses and functions. `script.sh`

    ok() {
      return 0
    }

    fail() {
      return 1
    }

    fail
    ok

    ./script.sh
    echo $? # exit status is same as the last run function/command

### <a href="https://egghead.io/lessons/bash-use-conditional-statements-in-bash" class="markup--anchor markup--h3-anchor">Use Conditional Statements in bash</a>

Basic form

    # Some conditional primaries that can be used in the if expression:
    #   =, !=      string (in)equality
    #   -eq, -ne   numeric (in)equality
    #   -lt, -gt   less/greater than
    #   -z         check variable is not set
    #   -e         check file/folder exists

    if [[ $USER = 'cameronnokes' ]]; then
      echo "true"
    else
      echo "false"
    fi

Conditionals can be used inline in a more ternary-like format

    [[ $USER = 'cameronnokes' ]] && echo "yes" || echo "no"

`check-status.sh` for checking a URL is responding with a 200

    check_status() {
      local status=$(curl -ILs $1 | head -n 1 | cut -d ' ' -f 2)
      if [[ $status -lt 200 ]] || [[ $status -gt 299 ]]; then
        echo "$1 failed with a $status"
        return 1
      else
        echo "$1 succeeded with a $status"
      fi
    }

    check_status https://example.org
    check_status https://example.org/404

### <a href="https://egghead.io/lessons/bash-chain-commands-with-pipes-and-redirect-output-in-bash" class="markup--anchor markup--h3-anchor">Chain Commands with Pipes and Redirect Output in bash</a>

Pipes

    # ps ax will list all running processes
    ps ax | grep Chrome | less
    # get the file size after uglify + gzip
    uglifyjs -c -m -- index.js | gzip -9 | wc -c

Redirection

    # redirect stdout to a file
    ls > ls.txt
    # append stdout to a file
    echo "hi" >> ls.txt

------------------------------------------------------------------------

### Update(Utility Commands):

***Find files that have been modified on your system in the past 60 minutes***

    find / -mmin 60 -type f

***Find all files larger than 20M***

    find / -type f -size +20M

***Find duplicate files (based on MD5 hash)***

    find -type f -exec md5sum '{}' ';' | sort | uniq --all-repeated=separate -w 33

***Change permission only for files***

    cd /var/www/site && find . -type f -exec chmod 766 {} \;
    cd /var/www/site && find . -type f -exec chmod 664 {} +

***Change permission only for directories***

    cd /var/www/site && find . -type d -exec chmod g+x {} \;
    cd /var/www/site && find . -type d -exec chmod g+rwx {} +

***Find files and directories for specific user/group***

    # User:
    find . -user <username> -print
    find /etc -type f -user <username> -name "*.conf"

    # Group:
    find /opt -group <group>
    find /etc -type f -group <group> -iname "*.conf"

***Find files and directories for all without specific user/group***

    # User:
    find . \! -user <username> -print

    # Group:
    find . \! -group <group>

***Looking for files/directories that only have certain permission***

    # User
    find . -user <username> -perm -u+rw # -rw-r--r--
    find /home -user $(whoami) -perm 777 # -rwxrwxrwx

    # Group:
    find /home -type d -group <group> -perm 755 # -rwxr-xr-x

***Delete older files than 60 days***

    find . -type f -mtime +60 -delete

***Recursively remove all empty sub-directories from a directory***

    find . -depth  -type d  -empty -exec rmdir {} \;

***How to find all hard links to a file***

    find </path/to/dir> -xdev -samefile filename

***Recursively find the latest modified files***

    find . -type f -exec stat --format '%Y :%y %n' "{}" \; | sort -nr | cut -d: -f2- | head

***Recursively find/replace of a string with sed***

    find . -not -path '*/\.git*' -type f -print0 | xargs -0 sed -i 's/foo/bar/g'

***Recursively find/replace of a string in directories and file names***

    find . -depth -name '*test*' -execdir bash -c 'mv -v "$1" "${1//foo/bar}"' _ {} \;

***Recursively find suid executables***

    find / \( -perm -4000 -o -perm -2000 \) -type f -exec ls -la {} \;

------------------------------------------------------------------------

### Additional learning resources

-   <span id="8e12">You can view a command’s documentation right in bash with `man <command name>`.</span>
-   <span id="9b41"><a href="https://www.gnu.org/software/bash/manual/bash.html" class="markup--anchor markup--li-anchor">Official bash manual</a></span>
-   <span id="40a7"><a href="http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html" class="markup--anchor markup--li-anchor">TLDP bash programming intro, basic</a></span>
-   <span id="6515"><a href="http://www.tldp.org/LDP/abs/html/" class="markup--anchor markup--li-anchor">TLDP bash programming intro, advanced</a></span>

------------------------------------------------------------------------

### Here’s My Github & Website … feel free to reach out!

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz"><strong>bgoonz - Overview</strong><br />
<em>Web Developer, Electrical Engineer https://bryanguner.medium.com/ https://bg-portfolio.netlify.app/ - bgoonz</em>github.com</a><a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…</em>bgoonz-blog.netlify.app</a><a href="https://bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Explanations:

### Pipes

Pipes let you use the output of a program as the input of another one

### simple pipe with sed

This is very simple way to use pipes.

    ls -l | sed -e "s/[aeio]/u/g"

Here, the following happens: first the command ls -l is executed, and it’s output, instead of being printed, is sent (piped) to the sed program, which in turn, prints what it has to.

### an alternative to ls -l \*.txt

Probably, this is a more difficult way to do ls -l \*.txt, but this is for educational purposes.

    ls -l | grep "\.txt$"

> Here, the output of the program ls -l is sent to the grep program, which, in turn, will print lines which match the regex “\\.txt$”.

### Variables

You can use variables as in any programming languages. There are no data types. A variable in bash can contain a number, a character, a string of characters.

You have no need to declare a variable, just assigning a value to its reference will create it.

### Hello World! using variables

    #!/bin/bash          
                STR="Hello World!"
                echo $STR

Line 2 creates a variable called STR and assigns the string “Hello World!” to it. Then the VALUE of this variable is retrieved by putting the ‘$’ in at the beginning. Please notice (try it!) that if you don’t use the ‘$’ sign, the output of the program will be different, and probably not what you want it to be.

### A very simple backup script (little bit better)

    #!/bin/bash          
               OF=/var/my-backup-$(date +%Y%m%d).tgz
               tar -cZf $OF /home/me/

> This script introduces another thing. First of all, you should be familiarized with the variable creation and assignation on line 2. Notice the expression ‘$(date +%Y%m%d)’. If you run the script you’ll notice that it runs the command inside the parenthesis, capturing its output.

> Notice that in this script, the output filename will be different every day, due to the format switch to the date command(+%Y%m%d). You can change this by specifying a different format.

**examples**:

*echo ls*

*echo $(ls)*

### Local variables

Local variables can be created by using the keyword *local*.

    #!/bin/bash
                    HELLO=Hello 
                    function hello {
                            local HELLO=World
                            echo $HELLO
                    }
                    echo $HELLO
                    hello
                    echo $HELLO

### Basic conditional example if .. then

<figure><img src="https://cdn-images-1.medium.com/max/800/0*V2XDOXCJO2I8qYBK.jpg" class="graf-image" /></figure>#!/bin/bash
                if [ "foo" = "foo" ]; then
                   echo expression evaluated as true
                fi

*The code to be executed if the expression within braces is true can be found after the ‘then’ word and before ‘fi’ which indicates the end of the conditionally executed code.*

### Basic conditional example if .. then … else

    #!/bin/bash
                if [ "foo" = "foo" ]; then
                   echo expression evaluated as true
                else
                   echo expression evaluated as false
                fi

### Conditionals with variables

    #!/bin/bash
                T1="foo"
                T2="bar"
                if [ "$T1" = "$T2" ]; then
                    echo expression evaluated as true
                else
                    echo expression evaluated as false
                fi

### Loops

-   <span id="15f6">***for***</span>
-   <span id="4000">***while***</span>

> (there’s another loop called until but I don’t use it so you can look it up if you’d like)

> ***The until loop is almost equal to the while loop, except that the code is executed while the*** <a href="https://www.cs.fsu.edu/~myers/c++/notes/control1.html" class="markup--anchor markup--blockquote-anchor"><strong><em>control expression</em></strong></a> ***evaluates to false.***

The **for** loop is a little bit different from other programming languages. Basically, it let’s you iterate over a series of ‘words’ within a string.

The **while** executes a piece of code if the control expression is true, and only stops when it is false …or a explicit break is found within the executed code.

### For

    #!/bin/bash
            for i in $( ls ); do
                echo item: $i
            done

> On the second line, we declare i to be the variable that will take the different values contained in $( ls ).

> The third line could be longer if needed, or there could be more lines before the done (4).

> ‘done’ (4) indicates that the code that used the value of $i has finished and $i can take a new value.

> A more useful way to use the for loop would be to use it to match only certain files on the previous example

### While

    #!/bin/bash 
             COUNTER=0
             while [  $COUNTER -lt 10 ]; do
                 echo The counter is $COUNTER
                 let COUNTER=COUNTER+1 
             done

### Functions

As in almost any programming language, you can use functions to group pieces of code in a more logical way or practice the divine art of recursion.

Declaring a function is just a matter of writing function my\_func { my\_code }.

Calling a function is just like calling another program, you just write its name.

### Functions ex.)

    #!/bin/bash 
               function quit {
                   exit
               }
               function hello {
                   echo Hello!
               }
               hello
               quit
               echo foo

> Lines 2–4 contain the ‘quit’ function. Lines 5–7 contain the ‘hello’ function If you are not absolutely sure about what this script does, please try it!.

> Notice that a functions don’t need to be declared in any specific order.

> When running the script you’ll notice that first: the function ‘hello’ is called, second the ‘quit’ function, and the program never reaches line 10.

### Functions with parameters

    #!/bin/bash 
                    function quit {
                       exit
                    }  
                    function e {
                        echo $1 
                    }  
                    e Hello
                    e World
                    quit
                    echo foo

### Backup Directory Script:

    #!/bin/bash          
                SRCD="/home/"
                TGTD="/var/backups/"
                OF=home-$(date +%Y%m%d).tgz
                tar -cZf $TGTD$OF $SRCD

### File Renamer:

### Bonus Commands:

#### Included in a gist below (so you can see them syntax highlighted..) I am also including them in text so that they might turn up as a result of google searches … I have a hunch that google’s SEO rankings don’t put much emphasis on the content of github gists.

### Example

    #!/usr/bin/env bash

    NAME="John"
    echo "Hello $NAME!"

### Variables

    NAME="John"
    echo $NAME
    echo "$NAME"
    echo "${NAME}!"

### String quotes

    NAME="John"
    echo "Hi $NAME"  #=> Hi John
    echo 'Hi $NAME'  #=> Hi $NAME

### Shell execution

    echo "I'm in $(pwd)"
    echo "I'm in `pwd`"
    # Same

See <a href="http://wiki.bash-hackers.org/syntax/expansion/cmdsubst" class="markup--anchor markup--p-anchor">Command substitution</a>

### Conditional execution

    git commit && git push
    git commit || echo "Commit failed"

### Functions

{: id=’functions-example’}

    get_name() {
      echo "John"
    }

    echo "You are $(get_name)"

See: <a href="https://bryanguner.medium.com/media/2ab9392fe0f579fca234dcdc71259b1c#functions" class="markup--anchor markup--p-anchor">Functions</a>

### Conditionals

{: id=’conditionals-example’}

    if [[ -z "$string" ]]; then
      echo "String is empty"
    elif [[ -n "$string" ]]; then
      echo "String is not empty"
    fi

See: <a href="https://bryanguner.medium.com/media/2ab9392fe0f579fca234dcdc71259b1c#conditionals" class="markup--anchor markup--p-anchor">Conditionals</a>

### Strict mode

    set -euo pipefail
    IFS=$'\n\t'

See: <a href="http://redsymbol.net/articles/unofficial-bash-strict-mode/" class="markup--anchor markup--p-anchor">Unofficial bash strict mode</a>

### Brace expansion

    echo {A,B}.js

ExpressionDescription`{A,B}`Same as `A B{A,B}.js`Same as `A.js B.js{1..5}`Same as `1 2 3 4 5`

See: <a href="http://wiki.bash-hackers.org/syntax/expansion/brace" class="markup--anchor markup--p-anchor">Brace expansion</a>

### Parameter expansions

{: .-three-column}

### Basics

    name="John"
    echo ${name}
    echo ${name/J/j}    #=> "john" (substitution)
    echo ${name:0:2}    #=> "Jo" (slicing)
    echo ${name::2}     #=> "Jo" (slicing)
    echo ${name::-1}    #=> "Joh" (slicing)
    echo ${name:(-1)}   #=> "n" (slicing from right)
    echo ${name:(-2):1} #=> "h" (slicing from right)
    echo ${food:-Cake}  #=> $food or "Cake"

    length=2
    echo ${name:0:length}  #=> "Jo"

See: <a href="http://wiki.bash-hackers.org/syntax/pe" class="markup--anchor markup--p-anchor">Parameter expansion</a>

    STR="/path/to/foo.cpp"
    echo ${STR%.cpp}    # /path/to/foo
    echo ${STR%.cpp}.o  # /path/to/foo.o
    echo ${STR%/*}      # /path/to

    echo ${STR##*.}     # cpp (extension)
    echo ${STR##*/}     # foo.cpp (basepath)

    echo ${STR#*/}      # path/to/foo.cpp
    echo ${STR##*/}     # foo.cpp

    echo ${STR/foo/bar} # /path/to/bar.cpp

    STR="Hello world"
    echo ${STR:6:5}   # "world"
    echo ${STR: -5:5}  # "world"

    SRC="/path/to/foo.cpp"
    BASE=${SRC##*/}   #=> "foo.cpp" (basepath)
    DIR=${SRC%$BASE}  #=> "/path/to/" (dirpath)

### Substitution

CodeDescription`${FOO%suffix}`Remove suffix`${FOO#prefix}`Remove prefix------`${FOO%%suffix}`Remove long suffix`${FOO##prefix}`Remove long prefix------`${FOO/from/to}`Replace first match`${FOO//from/to}`Replace all------`${FOO/%from/to}`Replace suffix`${FOO/#from/to}`Replace prefix

### Comments

    # Single line comment

    : '
    This is a
    multi line
    comment
    '

### Substrings

ExpressionDescription`${FOO:0:3}`Substring *(position, length)*`${FOO:(-3):3}`Substring from the right

### Length

ExpressionDescription`${#FOO}`Length of `$FOO`

### Manipulation

    STR="HELLO WORLD!"
    echo ${STR,}   #=> "hELLO WORLD!" (lowercase 1st letter)
    echo ${STR,,}  #=> "hello world!" (all lowercase)

    STR="hello world!"
    echo ${STR^}   #=> "Hello world!" (uppercase 1st letter)
    echo ${STR^^}  #=> "HELLO WORLD!" (all uppercase)

### Default values

ExpressionDescription`${FOO:-val}$FOO`, or `val` if unset (or null)`${FOO:=val}`Set `$FOO` to `val` if unset (or null)`${FOO:+val}val` if `$FOO` is set (and not null)`${FOO:?message}`Show error message and exit if `$FOO` is unset (or null)

Omitting the `:` removes the (non)nullity checks, e.g. `${FOO-val}` expands to `val` if unset otherwise `$FOO`.

### Loops

{: .-three-column}

### Basic for loop

    for i in /etc/rc.*; do
      echo $i
    done

### C-like for loop

    for ((i = 0 ; i < 100 ; i++)); do
      echo $i
    done

### Ranges

    for i in {1..5}; do
        echo "Welcome $i"
    done

#### With step size

    for i in {5..50..5}; do
        echo "Welcome $i"
    done

### Reading lines

    cat file.txt | while read line; do
      echo $line
    done

### Forever

    while true; do
      ···
    done

### Functions

{: .-three-column}

### Defining functions

    myfunc() {
        echo "hello $1"
    }

    # Same as above (alternate syntax)
    function myfunc() {
        echo "hello $1"
    }

    myfunc "John"

### Returning values

    myfunc() {
        local myresult='some value'
        echo $myresult
    }

    result="$(myfunc)"

### Raising errors

    myfunc() {
      return 1
    }

    if myfunc; then
      echo "success"
    else
      echo "failure"
    fi

### Arguments

ExpressionDescription`$#`Number of arguments`$*`All postional arguments (as a single word)`$@`All postitional arguments (as separate strings)`$1`First argument`$_`Last argument of the previous command

**Note**: `$@` and `$*` must be quoted in order to perform as described. Otherwise, they do exactly the same thing (arguments as separate strings).

See <a href="http://wiki.bash-hackers.org/syntax/shellvars#special_parameters_and_shell_variables" class="markup--anchor markup--p-anchor">Special parameters</a>.

### Conditionals

{: .-three-column}

### Conditions

Note that `[[` is actually a command/program that returns either `0` (true) or `1` (false). Any program that obeys the same logic (like all base utils, such as `grep(1)` or `ping(1)`) can be used as condition, see examples.

ConditionDescription`[[ -z STRING ]]`Empty string`[[ -n STRING ]]`Not empty string`[[ STRING == STRING ]]`Equal`[[ STRING != STRING ]]`Not Equal------`[[ NUM -eq NUM ]]`Equal`[[ NUM -ne NUM ]]`Not equal`[[ NUM -lt NUM ]]`Less than`[[ NUM -le NUM ]]`Less than or equal`[[ NUM -gt NUM ]]`Greater than`[[ NUM -ge NUM ]]`Greater than or equal------`[[ STRING =~ STRING ]]`Regexp------`(( NUM < NUM ))`Numeric conditions

#### More conditions

ConditionDescription`[[ -o noclobber ]]`If OPTIONNAME is enabled------`[[ ! EXPR ]]`Not`[[ X && Y ]]`And\`\[\[ X

### File conditions

ConditionDescription`[[ -e FILE ]]`Exists`[[ -r FILE ]]`Readable`[[ -h FILE ]]`Symlink`[[ -d FILE ]]`Directory`[[ -w FILE ]]`Writable`[[ -s FILE ]]`Size is &gt; 0 bytes`[[ -f FILE ]]`File`[[ -x FILE ]]`Executable------`[[ FILE1 -nt FILE2 ]]`1 is more recent than 2`[[ FILE1 -ot FILE2 ]]`2 is more recent than 1`[[ FILE1 -ef FILE2 ]]`Same files

### Example

    # String
    if [[ -z "$string" ]]; then
      echo "String is empty"
    elif [[ -n "$string" ]]; then
      echo "String is not empty"
    else
      echo "This never happens"
    fi

    # Combinations
    if [[ X && Y ]]; then
      ...
    fi

    # Equal
    if [[ "$A" == "$B" ]]

    # Regex
    if [[ "A" =~ . ]]

    if (( $a < $b )); then
       echo "$a is smaller than $b"
    fi

    if [[ -e "file.txt" ]]; then
      echo "file exists"
    fi

### Arrays

### Defining arrays

    Fruits=('Apple' 'Banana' 'Orange')

    Fruits[0]="Apple"
    Fruits[1]="Banana"
    Fruits[2]="Orange"

### Working with arrays

    echo ${Fruits[0]}           # Element #0
    echo ${Fruits[-1]}          # Last element
    echo ${Fruits[@]}           # All elements, space-separated
    echo ${#Fruits[@]}          # Number of elements
    echo ${#Fruits}             # String length of the 1st element
    echo ${#Fruits[3]}          # String length of the Nth element
    echo ${Fruits[@]:3:2}       # Range (from position 3, length 2)
    echo ${!Fruits[@]}          # Keys of all elements, space-separated

### Operations

    Fruits=("${Fruits[@]}" "Watermelon")    # Push
    Fruits+=('Watermelon')                  # Also Push
    Fruits=( ${Fruits[@]/Ap*/} )            # Remove by regex match
    unset Fruits[2]                         # Remove one item
    Fruits=("${Fruits[@]}")                 # Duplicate
    Fruits=("${Fruits[@]}" "${Veggies[@]}") # Concatenate
    lines=(`cat "logfile"`)                 # Read from file

### Iteration

    for i in "${arrayName[@]}"; do
      echo $i
    done

### Dictionaries

{: .-three-column}

### Defining

    declare -A sounds

    sounds[dog]="bark"
    sounds[cow]="moo"
    sounds[bird]="tweet"
    sounds[wolf]="howl"

Declares `sound` as a Dictionary object (aka associative array).

### Working with dictionaries

    echo ${sounds[dog]} # Dog's sound
    echo ${sounds[@]}   # All values
    echo ${!sounds[@]}  # All keys
    echo ${#sounds[@]}  # Number of elements
    unset sounds[dog]   # Delete dog

### Iteration

#### Iterate over values

    for val in "${sounds[@]}"; do
      echo $val
    done

#### Iterate over keys

    for key in "${!sounds[@]}"; do
      echo $key
    done

### Options

### Options

    set -o noclobber  # Avoid overlay files (echo "hi" > foo)
    set -o errexit    # Used to exit upon error, avoiding cascading errors
    set -o pipefail   # Unveils hidden failures
    set -o nounset    # Exposes unset variables

### Glob options

    shopt -s nullglob    # Non-matching globs are removed  ('*.foo' => '')
    shopt -s failglob    # Non-matching globs throw errors
    shopt -s nocaseglob  # Case insensitive globs
    shopt -s dotglob     # Wildcards match dotfiles ("*.sh" => ".foo.sh")
    shopt -s globstar    # Allow ** for recursive matches ('lib/**/*.rb' => 'lib/a/b/c.rb')

Set `GLOBIGNORE` as a colon-separated list of patterns to be removed from glob matches.

### History

### Commands

CommandDescription`history`Show history`shopt -s histverify`Don't execute expanded result immediately

### Expansions

ExpressionDescription`!$`Expand last parameter of most recent command`!*`Expand all parameters of most recent command`!-n`Expand `n`th most recent command`!n`Expand `n`th command in history`!<command>`Expand most recent invocation of command `<command>`

### Operations

CodeDescription`!!`Execute last command again`!!:s/<FROM>/<TO>/`Replace first occurrence of `<FROM>` to `<TO>` in most recent command`!!:gs/<FROM>/<TO>/`Replace all occurrences of `<FROM>` to `<TO>` in most recent command`!$:t`Expand only basename from last parameter of most recent command`!$:h`Expand only directory from last parameter of most recent command

`!!` and `!$` can be replaced with any valid expansion.

### Slices

CodeDescription`!!:n`Expand only `n`th token from most recent command (command is `0`; first argument is `1`)`!^`Expand first argument from most recent command`!$`Expand last token from most recent command`!!:n-m`Expand range of tokens from most recent command`!!:n-$`Expand `n`th token to last from most recent command

`!!` can be replaced with any valid expansion i.e. `!cat`, `!-2`, `!42`, etc.

### Miscellaneous

### Numeric calculations

    $((a + 200))      # Add 200 to $a

    $(($RANDOM%200))  # Random number 0..199

### Subshells

    (cd somedir; echo "I'm now in $PWD")
    pwd # still in first directory

### Redirection

    python hello.py > output.txt   # stdout to (file)
    python hello.py >> output.txt  # stdout to (file), append
    python hello.py 2> error.log   # stderr to (file)
    python hello.py 2>&1           # stderr to stdout
    python hello.py 2>/dev/null    # stderr to (null)
    python hello.py &>/dev/null    # stdout and stderr to (null)

    python hello.py < foo.txt      # feed foo.txt to stdin for python

### Inspecting commands

    command -V cd
    #=> "cd is a function/alias/whatever"

### Trap errors

    trap 'echo Error at about $LINENO' ERR

or

    traperr() {
      echo "ERROR: ${BASH_SOURCE[1]} at about ${BASH_LINENO[0]}"
    }

    set -o errtrace
    trap traperr ERR

### Case/switch

    case "$1" in
      start | up)
        vagrant up
        ;;

      *)
        echo "Usage: $0 {start|stop|ssh}"
        ;;
    esac

### Source relative

    source "${0%/*}/../share/foo.sh"

### printf

    printf "Hello %s, I'm %s" Sven Olga
    #=> "Hello Sven, I'm Olga

    printf "1 + 1 = %d" 2
    #=> "1 + 1 = 2"

    printf "This is how you print a float: %f" 2
    #=> "This is how you print a float: 2.000000"

### Directory of script

    DIR="${0%/*}"

### Getting options

    while [[ "$1" =~ ^- && ! "$1" == "--" ]]; do case $1 in
      -V | --version )
        echo $version
        exit
        ;;
      -s | --string )
        shift; string=$1
        ;;
      -f | --flag )
        flag=1
        ;;
    esac; shift; done
    if [[ "$1" == '--' ]]; then shift; fi

### Heredoc

    cat <<END
    hello world
    END

### Reading input

    echo -n "Proceed? [y/n]: "
    read ans
    echo $ans

    read -n 1 ans    # Just one character

### Special variables

ExpressionDescription`$?`Exit status of last task`$!`PID of last background task`$$`PID of shell`$0`Filename of the shell script

See <a href="http://wiki.bash-hackers.org/syntax/shellvars#special_parameters_and_shell_variables" class="markup--anchor markup--p-anchor">Special parameters</a>.

### Go to previous directory

    pwd # /home/user/foo
    cd bar/
    pwd # /home/user/foo/bar
    cd -
    pwd # /home/user/foo

### Check for command’s result

    if ping -c 1 google.com; then
      echo "It appears you have a working internet connection"
    fi

### Grep check

    if grep -q 'foo' ~/.bash_history; then
      echo "You appear to have typed 'foo' in the past"
    fi

### Also see

{: .-one-column}

-   <span id="4581"><a href="http://wiki.bash-hackers.org/" class="markup--anchor markup--li-anchor">Bash-hackers wiki</a> *(bash-hackers.org)*</span>
-   <span id="b6a2"><a href="http://wiki.bash-hackers.org/syntax/shellvars" class="markup--anchor markup--li-anchor">Shell vars</a> *(bash-hackers.org)*</span>
-   <span id="a5d4"><a href="https://learnxinyminutes.com/docs/bash/" class="markup--anchor markup--li-anchor">Learn bash in y minutes</a> *(learnxinyminutes.com)*</span>
-   <span id="007b"><a href="http://mywiki.wooledge.org/BashGuide" class="markup--anchor markup--li-anchor">Bash Guide</a> *(mywiki.wooledge.org)*</span>
-   <span id="f2db"><a href="https://www.shellcheck.net/" class="markup--anchor markup--li-anchor">ShellCheck</a> *(shellcheck.net)*</span>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [August 9, 2021](https://medium.com/p/3ec9d4e2e65).

<a href="https://medium.com/@bryanguner/bash-proficiency-in-under-15-minutes-3ec9d4e2e65" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.

Basic React Tutorial
====================

Random Things to Remember

------------------------------------------------------------------------

### Basic React Tutorial

#### Random Things to Remember

<a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b"><strong>A list of all of my articles to link to future posts</strong><br />
<br />
<em>You should probably skip this one… seriously it’s just for internal use!</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

#### Using `()` implicitly returns components.Role of `index.js` is to *render* your application.The reference to `root` comes from a div in the body of your public html file.State of a component is simply a regular JS Object.Class Components require `render()` method to return JSX.Functional Components directly return JSX.`Class` is `className` in React.When parsing for an integer just chain `Number.parseInt("123")`

<figure><img src="https://cdn-images-1.medium.com/max/800/0*16IltJu5wXjzgXyU.gif" class="graf-image" /></figure>\- <span id="3b86">\*\*Use ternary operator if you want to make a conditional inside a fragment.\*\*</span>

    { x === y ? <div>Naisu</div> : <div>Not Naisu</div>; }

    Purpose of React.Fragment is to allow you to create groups of children without adding an extra dom element.

-   <span id="5cbe">**React** manages the creation and updating of DOM nodes in your Web page.</span>

-   <span id="d253">All it does is dynamically render stuff into your DOM.</span>

-   <span id="093c">What it doesn’t do:</span>

-   <span id="bd7d">Ajax</span>

-   <span id="7f06">Services</span>

-   <span id="b1b9">Local Storage</span>

-   <span id="47a9">Provide a CSS framework</span>

-   <span id="57d1">**React** is unopinionated</span>

-   <span id="b277">Just contains a few rules for developers to follow, and it just works.</span>

-   <span id="dafd">**JSX** : Javascript Extension is a language invented to help write React Applications (looks like a mixture of JS and HTML)</span>

-   <span id="fc46">Here is an overview of the difference between rendering out vanilla JS to create elements, and JSX:</span>

-   <span id="eec2">This may seem like a lot of code but when you end up building many components, it becomes nice to put each of those functions/classes into their own files to organize your code.  
    **Using tools with React**</span>

-   <span id="6c32">`React DevTools` : New tool in your browser to see ow React is working in the browser</span>

-   <span id="3f86">`create-react-app` : Extensible command-line tool to help generate standard React applications.</span>

-   <span id="da3c">`Webpack` : In between tool for dealing with the extra build step involved.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*4O0NPGEa-1NcDOIA.png" class="graf-image" /></figure>\- <span id="9d53">\*\*HMR\*\* : (Hot Module Replacement) When you make changes to your source code the changes are delivered in real-time.</span> - <span id="8d5b">React Developers created something called \`Flux Architecture\` to moderate how their web page consumes and modifies data received from back-end API's.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*hXODC_ZsM-egMFI4.png" class="graf-image" /></figure>\- <span id="97a3">\*\*Choosing React\*\*</span> - <span id="1589">Basically, React is super important to learn and master.</span>

### React Concepts and Features

There are many benefits to using React over just Vanilla JS.

-   <span id="6bac">`Modularity`</span>
-   <span id="3fc9">To avoid the mess of many event listeners and template strings, React gives you the benefit of a lot of modularity.</span>
-   <span id="20d5">`Easy to start`</span>
-   <span id="8e3e">No specials tools are needed to use Basic React.</span>
-   <span id="f1a2">You can start working directly with `createElement` method in React.</span>
-   <span id="2a43">`Declarative Programming`</span>
-   <span id="c587">React is declarative in nature, utilizing either it’s build in createElement method or the higher-level language known as JSX.</span>
-   <span id="866d">`Reusability`</span>
-   <span id="eff3">Create elements that can be re-used over and over.  
    **One-flow of data**</span>
-   <span id="5c6e">React apps are built as a combination of parent and child components.</span>
-   <span id="5a30">Parents can have one or more child components, all children have parents.</span>
-   <span id="d6c8">Data is never passed from child to the parent.</span>
-   <span id="dc54">`Virtual DOM` : React provides a Virtual DOM that acts as an agent between the real DOM and the developer to help debug, maintain, and provide general use.</span>
-   <span id="90bf">Due to this usage, React handles web pages much more intelligently; making it one of the speediest Front End Libraries available.</span>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [July 1, 2021](https://medium.com/p/647ba595e607).

<a href="https://medium.com/@bryanguner/react-tutorial-from-basics-647ba595e607" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.

Basic Web Development Environment Setup
=======================================

Windows Subsystem for Linux (WSL) and Ubuntu

------------------------------------------------------------------------

### Basic Web Development Environment Setup

#### Windows Subsystem for Linux (WSL) and Ubuntu

‌

<figure><img src="https://cdn-images-1.medium.com/max/800/0*aqKP1drNHmNm34zz.jpg" class="graf-image" /></figure>Test if you have Ubuntu installed by typing “Ubuntu” in the search box in the bottom app bar that reads “Type here to search”. If you see a search result that reads **“Ubuntu 20.04 LTS”** with “App” under it, then you have it installed.

‌

1.  <span id="110a">In the application search box in the bottom bar, type “PowerShell” to find the application named “Windows PowerShell”</span>
2.  <span id="54fd">Right-click on “Windows PowerShell” and choose “Run as administrator” from the popup menu</span>
3.  <span id="a018">In the blue PowerShell window, type the following: `Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux`</span>
4.  <span id="6269">Restart your computer</span>
5.  <span id="6dd9">In the application search box in the bottom bar, type “Store” to find the application named “Microsoft Store”</span>
6.  <span id="eb4e">Click “Microsoft Store”</span>
7.  <span id="74c1">Click the “Search” button in the upper-right corner of the window</span>
8.  <span id="9d35">Type in “Ubuntu”</span>
9.  <span id="4205">Click “Run Linux on Windows (Get the apps)”</span>
10. <span id="1799">Click the orange tile labeled **“Ubuntu”** Note that there are 3 versions in the Microsoft Store… you want the one just entitled ‘Ubuntu’</span>
11. <span id="edec">Click “Install”</span>
12. <span id="2935">After it downloads, click “Launch”</span>
13. <span id="a859">If you get the option, pin the application to the task bar. Otherwise, right-click on the orange Ubuntu icon in the task bar and choose “Pin to taskbar”</span>
14. <span id="669c">When prompted to “Enter new UNIX username”, type your first name with no spaces</span>
15. <span id="e9c1">When prompted, enter and retype a password for this UNIX user (it can be the same as your Windows password)</span>
16. <span id="4217">Confirm your installation by typing the command `whoami ‘as in who-am-i'`followed by Enter at the prompt (it should print your first name)</span>
17. <span id="48fe">You need to update your packages, so type `sudo apt update` (if prompted for your password, enter it)</span>
18. <span id="d12f">You need to upgrade your packages, so type `sudo apt upgrade` (if prompted for your password, enter it)</span>

### Git

Git comes with Ubuntu, so there’s nothing to install. However, you should configure it using the following instructions.

‌Open an Ubuntu terminal if you don’t have one open already.

1.  <span id="8cfe">You need to configure Git, so type `git config --global user.name "Your Name"` with replacing "Your Name" with your real name.</span>
2.  <span id="0e0d">You need to configure Git, so type `git config --global user.email your@email.com` with replacing "<a href="mailto:your@email.com" class="markup--anchor markup--li-anchor">your@email.com</a>" with your real email.</span>

**Note: if you want git to remember your login credentials type:**

    $ git config --global credential.helper store

‌

### Google Chrome

Test if you have Chrome installed by typing “Chrome” in the search box in the bottom app bar that reads “Type here to search”. If you see a search result that reads “Chrome” with “App” under it, then you have it installed. Otherwise, follow these instructions to install Google Chrome.

‌

1.  <span id="578c">Open Microsoft Edge, the blue “e” in the task bar, and type in <a href="http://chrome.google.com/" class="markup--anchor markup--li-anchor">http://chrome.google.com</a>. Click the “Download Chrome” button. Click the “Accept and Install” button after reading the terms of service. Click “Save” in the “What do you want to do with ChromeSetup.exe” dialog at the bottom of the window. When you have the option to “Run” it, do so. Answer the questions as you’d like. Set it as the default browser.</span>
2.  <span id="40db">Right-click on the Chrome icon in the task bar and choose “Pin to taskbar”.</span>

### Node.js

Test if you have Node.js installed by opening an Ubuntu terminal and typing `node --version`. If it reports "Command 'node' not found", then you need to follow these directions.

1.  <span id="9098">In the Ubuntu terminal, type `sudo apt update` and press Enter</span>
2.  <span id="806b">In the Ubuntu terminal, type `sudo apt install build-essential` and press Enter</span>
3.  <span id="5f3a">In the Ubuntu terminal, type `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash` and press Enter</span>
4.  <span id="2abd">In the Ubuntu terminal, type `. ./.bashrc` and press Enter</span>
5.  <span id="3c16">In the Ubuntu terminal, type `nvm install --lts` and press Enter</span>
6.  <span id="d567">Confirm that **node** is installed by typing `node --version` and seeing it print something that is not "Command not found"!</span>

### Unzip

You will often have to download a zip file and unzip it. It is easier to do this from the command line. So we need to install a linux unzip utility.

‌In the Ubuntu terminal type: `sudo apt install unzip` and press Enter

‌Mocha.js

Test if you have Mocha.js installed by opening an Ubuntu terminal and typing `which mocha`. If it prints a path, then you're good. Otherwise, if it prints nothing, install Mocha.js by typing `npm install -g mocha`.

‌

### Python 3

Ubuntu does not come with Python 3. Install it using the command `sudo apt install python3`. Test it by typing `python3 --version` and seeing it print a number.

‌

### Note about WSL

‌

As of the time of writing of this document, WSL has an issue renaming or deleting files if Visual Studio Code is open. So before doing any linux commands which manipulate files, make sure you **close** Visual Studio Code before running those commands in the Ubuntu terminal.

‌

### Some other common instillations

    # Installing build essentials
    sudo apt-get install -y build-essential libssl-dev
    # Nodejs and NVM
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
    source ~/.profile
    sudo nvm install 7.10.0
    sudo nvm use 7.10.0
    node -v
    #nodemon
    sudo npm install -g nodemon
    sudo npm install -g loopback-cli
    # Forever to run nodejs scripts forever
    sudo npm install forever -g
    # Git - a version control system
    sudo apt-get update
    sudo apt-get install -y git xclip
    # Grunt - an automated task runner
    sudo npm install -g grunt-cli
    # Bower - a dependency manager
    sudo npm install -g bower
    # Yeoman - for generators
    sudo npm install -g yo
    # maven
    sudo apt-get install maven -y
    # Gulp - an automated task runner
    sudo npm install -g gulp-cli
    # Angular FullStack - My favorite MEAN boilerplate (MEAN = MongoDB, Express, Angularjs, Nodejs)
    sudo npm install -g generator-angular-fullstack
    # Vim, Curl, Python - Some random useful stuff
    sudo apt-get install -y vim curl python-software-properties
    sudo apt-get install -y python-dev, python-pip
    sudo apt-get install -y libkrb5-dev
    # Installing JDK and JRE
    sudo apt-get install -y default-jre
    sudo apt-get install -y default-jdk
    # Archive Extractors
    sudo apt-get install -y unace unrar zip unzip p7zip-full p7zip-rar sharutils rar uudeview mpack arj cabextract file-roller
    # FileZilla - a FTP client
    sudo apt-get install -y filezilla

#### If you found this guide helpful feel free to checkout my github/gists where I host similar content:

<a href="https://gist.github.com/bgoonz" class="markup--anchor markup--p-anchor">bgoonz’s gists · GitHub</a>

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz"><strong>bgoonz - Overview</strong><br />
<em>Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python | React | Node.js | Express | Sequelize…</em>github.com</a><a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

Or Checkout my personal Resource Site:

<a href="https://bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…</em>bgoonz-blog.netlify.app</a><a href="https://bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [February 27, 2021](https://medium.com/p/9f36c3f15afe).

<a href="https://medium.com/@bryanguner/basic-web-development-environment-setup-9f36c3f15afe" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.

Beginner’s Guide To React Part 2
================================

As I learn to build web applications in React I will blog about it in this series in an attempt to capture the questions that a complete…

------------------------------------------------------------------------

### Beginner’s Guide To React Part 2

As I learn to build web applications in React I will blog about it in this series in an attempt to capture the questions that a complete beginner might encounter that a more seasoned developer would take for granted!

#### For more resources visit:

<a href="https://github.com/bgoonz/React_Notes_V3" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz/React_Notes_V3"><strong>bgoonz/React_Notes_V3</strong><br />
<em>A JavaScript library for building user interfaces React makes it painless to create interactive UIs. Design simple…</em>github.com</a><a href="https://github.com/bgoonz/React_Notes_V3" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://gist.github.com/bgoonz/e07d9e7917ae9e98807358d1e7cc4a67" class="markup--anchor markup--p-anchor">Use this appendix to get any prerequisite concepts and terminology under your belt:</a>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*bZjlAJDEmP6yfpKI.gif" class="graf-image" /></figure>

------------------------------------------------------------------------

<span class="graf-dropCap">H</span>ere I will walk through a demo…. skip down below for more fundamental examples and resources…

### React Demo

-   <span id="91c8">ex1 — A Basic React Component</span>
-   <span id="78f6">ex2 — A Basic React Class Component</span>
-   <span id="1e73">ex3 — A Class Component with State</span>
-   <span id="ba57">ex4 — A Class Component that Updates State</span>
-   <span id="203a">ex5 — A Class Component that Iterates through State</span>
-   <span id="8087">ex6 — An Example of Parent and Child Components</span>

With regards to converting an existing HTML, CSS, and JS site into React, first you’ll want to think about how to break up your site into components,

-   <span id="694c">as well as think about what the general hierarchical component structure of your site will look like.</span>
-   <span id="fdf0">From there, it’s a simple matter of copying the relevant HTML for that component and throwing it into the **render method of your component file.**</span>
-   <span id="ec78">*Any methods that are needed for that component to function properly can added onto your new component.*</span>

Once you’ve refactored your HTML components into React components, you’ll want to lay them out in the desired hierarchical structure

-   <span id="227c">with children components being rendered by their parents, as well as ensuring that the parent components are passing down the necessary data as props to their children components.</span>

ex.)

    <!-- Hello world -->
    <div class="awesome" style="border: 1px solid red">
      <label for="name">Enter your name: </label>
      <input type="text" id="name" />
    </div>
    <p>Enter your HTML here</p>

Is equivalent to:

### A Basic Component

<span class="graf-dropCap">A</span> component is some thing that is being rendered in the browser. It could be a button, a form with a bunch of fields in it…etc.…

React doesn’t place any restrictions on how large or small a component can be.

You *could* have an entire static site encapsulated in a single React component, but that would defeat the purpose of using React.

So the first thing to remember about a component is that a **component must *render* something.**

*If nothing is being rendered from a component, then React will throw an error.*

Inside of `BasicComponent.js` , first import React at the top of the file. Our most basic of components looks like this:

> *This is a component that simply returns a div tag with the words Hello World! inside.*

> *The last line simply exports our component so that it can be imported  
> by another file.*

Notice that this component looks exactly like an anonymous arrow function that we’ve named `BasicComponent` .

In fact, that is literally what this is.

The arrow function then is simply returning the div tag. When a component is written as a function like this one is, it is called a *functional* component.

### A Basic Class Component

The above component is an example of a functional component, which is appropriate since that component is literally nothing more than a function that returns some HTML.

*Functional components are great when all you want a component to do is to render some stuff.*

*Components can also be written as classes (although this paradigm is becoming outdated and you should strive to write your components functionally!*

For this exercise, we’re going to write a class component that does exactly the same thing as the functional component we just wrote.

We’ll again need to import React at the top of the file, but we’ll also need to add a little something. Our import statement will look like this:

    import React, { Component } from 'react';

**So, in addition to importing React, we’re also importing the base Component class that is included in the React library.**

#### React lets you define components as classes or functions.

Components defined as classes currently provide more features . To define a React component class, you need to extend `React.Component`:

    class Welcome extends React.Component {
      render() {
        return <h1>Hello, {this.props.name}</h1>;
      }
    }

**The only method you *must* define in a** `React.Component` **subclass is called** `render()`**.**

### `render()`

The `render()` method is the only required method in a class component.

When called, it should examine `this.props` and `this.state` and return one of the following types:

-   <span id="8e4e">**React elements.** Typically created via <a href="https://reactjs.org/docs/introducing-jsx.html" class="markup--anchor markup--li-anchor">JSX</a>. For example, `<div />` and `<MyComponent />` are React elements that instruct React to render a DOM node, or another user-defined component, respectively.</span>
-   <span id="2c5f">**Arrays and fragments.** Let you return multiple elements from render. See the documentation on <a href="https://reactjs.org/docs/fragments.html" class="markup--anchor markup--li-anchor">fragments</a> for more details.</span>
-   <span id="2e6f">**Portals**. Let you render children into a different DOM subtree. See the documentation on <a href="https://reactjs.org/docs/portals.html" class="markup--anchor markup--li-anchor">portals</a> for more details.</span>
-   <span id="83d1">**String and numbers.** These are rendered as text nodes in the DOM.</span>
-   <span id="5c6a">**Booleans or** `null`. Render nothing. (Mostly exists to support `return test && <Child />` pattern, where `test` is boolean.)</span>

The `render()` function should be pure, meaning that it does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser.

If you need to interact with the browser, perform your work in `componentDidMount()` or the other lifecycle methods instead. Keeping `render()` pure makes components easier to think about.

> *Note*

> `render()` *will not be invoked if* `shouldComponentUpdate()` *returns false.*

The export statement at the bottom of the file also stays, completely unchanged. Our class component will thus look like this:

**Notice that our** `BasicClassComponent` **inherits from the base** `Component` **class that we imported from the React library, by virtue of the 'extends' keyword.**

*That being said, there's nothing in this minimal component that takes advantage of any of those inherited methods.*

**All we have is a method on our component class called** `render` **that returns the same div tag.**

If we really were deciding between whether to use a functional component versus a class component to render a simple div tag, then the functional style is more appropriate to use.

This is because class components are much better suited for handling component state and triggering events based on the component’s <a href="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/" class="markup--anchor markup--p-anchor">lifecycle.</a>

#### The important takeaways at this point are that there are two types of components, functional and class components, and that functional components are well-suited if you’re just looking to render some HTML.

*Class components, on the other hand, are much better suited for handling components that require more complex functionality, need to exhibit more varied behavior, and/or need to keep track of some state that may change throughout said component’s lifecycle.*

### A Class Component with Some State

**Component state is any dynamic data that we want the component to keep track of.**

> For example, let’s say we have a form component. This form has some input fields that we’d like users to fill out. When a user types characters into an input field, how is that input persisted from the point of view of our form component?

**The answer is by using component state!**

There are a few important concepts regarding component state, such as how to update it, pass it to another component, render it, etc.

**Only class components have the ability to persist state, so if at any time you realize that a component needs to keep track of some state, you know that you’ll automatically need a class component instead of a functional component.**

> It is possible to handle state with functional components but that requires the use of something called the <a href="https://reactjs.org/docs/hooks-state.html" class="markup--anchor markup--blockquote-anchor">useState() hook</a>. Hooks were added in React 16.8; prior to this release, there was no mechanism to add state to functional components.

Here’s what the above component looks like as a functional component:

Our class component with state will look a lot like the basic class component we just wrote, but with some exceptions:

**So far, the only new thing going on here is the constructor block. If you recall how classes in JavaScript work, classes need constructors.**

**Additionally, if a class is extending off of another class and wants access to its parent class’s methods and properties, then the** `super` **function needs to be called inside the class's constructor function.**

#### Point being, the constructor function and the call to the `super` function are *not* associated with React, they are associated with all JavaScript classes.

-   <span id="0d56">Then there is the `this.state` **property inside the constructor function that is set as an empty object**.</span>
-   <span id="7b29">We're adding a property called `state` to our class and setting it to an empty object.</span>

#### State objects in React are always just plain old objects.

#### **So why is it that the basic class component we wrote in the previous exercise had no constructor function within its body?**

That is because we had no need for them since all our class component was doing was rendering some HTML.

**The constructor is needed here because that is where we need to initialize our state object.**

**The call to** `super` **is needed because we can't reference** `this` **inside of our constructor without a call to** `super` **first.**

Ok, now let’s actually use this state object.

*One very common application of state objects in React components is to render the data being stored inside them within our component’s render function.*

#### Refactoring our component class to do that:

We added a key-value pair to our state object inside our constructor.

-   <span id="83e8">Then we changed the contents of the render function.</span>
-   <span id="6780">Now, it’s actually rendering the data that we have inside the state object.</span>
-   <span id="eb34">Notice that inside the div tags we’re using a template string literal so that we can access the value of `this.state.someData` straight inside of our rendered content.</span>

**With Reacts newest version, we can actually now add state to a component without explicitly defining a constructor on the class. We can refactor our class component to look like this:**

<figure><img src="https://cdn-images-1.medium.com/max/1200/1*6sYhFUNpUkt6xN9kkn4pJQ.png" class="graf-image" /></figure>

This new syntax is what is often referred to as ‘syntactic sugar’: under the hood, the React library translates this back into the old constructor code that we first started with, so that the JavaScript remains valid to the JavaScript interpreter.

The clue to this is the fact that when we want to access some data from the state object, we still need to call it with `this.state.someData` ; changing it to just `state.someData` does not work.

### Class Component Updating State

Great, so we can render some state that our component persists for us.

However, we said an important use case of component state is to handle *dynamic* data.

A single static number isn’t very dynamic at all.

So now let’s walk through how to update component state.

Notice that we’ve added two methods to our class: `increment` and `decrement` .

`increment` and `decrement` are methods that *we* are adding to our class component.

Unlike the `render` method, `increment` and `decrement` were not already a part of our class component.

This is why `increment` and `decrement` are written as arrow functions, ***so that they are automatically bound to our class component.***

The alternative is using a declaration syntax function with the bind method to bind the context of our methods to the class component.

The more interesting thing is what is going on within the bodies of these methods.

#### Each calls the `setState` function.

-   <span id="df3c">`setState` in fact *is* provided to us by React.</span>

It is the standard way to update a component's state.

It's the *only* way you should ever update a component's state. It may seem more verbose than necessary, but there are good reasons for why you should be doing it this way.

#### So the way to use `setState` to update a component's state is to pass it an object with each of the state keys you wish to update, along with the updated value.

In our `increment` method we said "I would like to update the `aNumber` property on my component state by adding one to it and then setting the new value as my new `aNumber` ".

The same thing happens in our `decrement` method, only we're subtracting instead of adding.

Then the other new concept we’re running into here is how to actually call these methods we’ve added to our class.

<figure><img src="https://cdn-images-1.medium.com/max/600/1*k8t5QBcMvHDX521sd4pC4g.png" class="graf-image" /></figure>We added two HTML button tags within our `render` function, then in their respective `onClick` handlers, we specify the method that should be called whenever this button gets clicked. So whenever we click either of the buttons, our state gets updated appropriately and our component will re-render to show the correct value we're expecting.

### Class Component Iterating State

Another common state pattern you’ll see being used in React components is iterating over an array in our state object and rendering each array element in its own tag.

> This is often used in order to render lists.

Additionally, we want to be able to easily update lists and have React re-render our updated list.

We’ll see how both of these are done and how they work together within a single component in order to create the behavior of a dynamic list.

The first change to note is that our state object now has an ‘ingredients’ array, and a ‘newIngredient’ field that has been initialized to an empty string.

The ingredients array contains the elements that we’ll want to render in our list.

The `addIngredient` and `handleIngredientInput` methods we've added to our class receives a parameter called 'event'.

This event object is part of the browser's API.

When we interact with some DOM element, **such as clicking on an HTML button, the *function that is invoked upon that button being clicked* actually receives the event object.**

-   <span id="3ba1">So when we type some input into an input tag, we're able grab each character that was typed into the input field through the event object parameter.</span>
-   <span id="5de7">The `handleIngredientInput` method is what gets invoked every time the user presses a key to enter text in the input box for adding a new ingredient.</span>
-   <span id="514e">Every character the user types gets persisted in the `newIngredient` field on the state object.</span>

We're able to grab the text in the input box using `event.target.value`

**Which holds the value of the string text that is currently in the input box**.

> We use that to update our `newIngredient` string field.

Breaking down the `addIngredient` method, we see this `event.preventDefault()` invocation.

This is because this method will be used upon submitting a form, and it turns out that submitting a form triggers some default form behavior that we don't want to trigger when we submit the form (**namely refreshing the entire page**).

> `event.preventDefault()` will prevent this default form behavior, meaning our form will only do what we want it to do when it is submitted.

<figure><img src="https://cdn-images-1.medium.com/max/600/1*RN_y7Bk4tb-LLG8vNqGHHA.png" class="graf-image" /></figure>Next, we store a reference to `this.state.ingredients` in a variable called `ingredientsList` .

So we now have a copy of the array that is stored in our state object.

**We want to update the copy of the ingredients array first instead of directly updating the actual array itself in state.**

Now we push whatever value is being stored at our `newIngredient` field onto the `ingredientsList` array so that our `ingredientsList` array is now more up-to-date than our `this.state.ingredients` array.

So all we have to do now is call `setState` appropriately in order to update the value in our state object.

Additionally, we also set the `newIngredient` field back to an empty string in order to clear out the input field once we submit a new ingredient.

Now it's ready to accept more user input!

<figure><img src="https://cdn-images-1.medium.com/max/600/1*LXx7WeP_5wFRfYa45snSEA.png" class="graf-image" /></figure>Looking at our render function, first note the `this.state.ingredients.map` call.

This is looping through each ingredient in our `ingredients` array and returning each one within its own div tag.

This is a very common pattern for rendering everything inside an array.

Then we have an HTML form which contains an input field.

The purpose of this form is to allow a user to add new ingredients to the list. Note that we’re passing our `addIngredient` method to the form's `onSubmit` handler.

This means that our `addIngredient` method gets invoked whenever our form is submitted.

Lastly, the input field has an `onChange` handler that invokes our `handleIngredientInput` method whenever there is some sort of change in the input field, namely when a user types into it.

<figure><img src="https://cdn-images-1.medium.com/max/800/1*S7s9FfaPVlKGyaSwFeId_w.png" class="graf-image" /></figure>Notice that the `value` field in our input tag reads off of `this.state.newIngredient` in order to know what value to display.

So when a user enters text into the input field, the `onChange` handler is invoked every time, which updates our `this.state.newIngredient` field, which the input field and then renders.

### Parent and Child Components

A single isolated component isn’t going to do us much good.

> The beauty of React lies in the fact that it allows us to compose modular components together.

> Let’s start off with the component we just saw, but let’s change its name to `ParentComponent` .

The only two other differences in this component are that we’re importing a `ChildComponent` and then using it inside our `this.state.ingredients.map` call.

`ChildComponent` is another React component.

Notice that we're using it just as if it were any other HTML tag.

**This is how we lay out our component hierarchy: the ChildComponent is rendered within the ParentComponent.**

We can see this to be the case if we open up the developer console and inspect these elements.

<figure><img src="https://cdn-images-1.medium.com/max/1200/1*q_XLnJ2h1L5yZjNnSKzj5w.png" alt="child-left: parent-right" class="graf-image" /><figcaption><strong>child-left: parent-right</strong></figcaption></figure>

Note also that we’re passing each ingredient as a ‘thing’ to the ChildComponent component.

This is how a parent component passes data to a child component. It doesn’t need to be called ‘thing’; you can call it whatever you want.

Conceptually though, **every piece of data that a parent component passes down to a child component is called a ‘prop’ in React lingo.**

Let’s take a look now at the Child Component. It serves two purposes:

1.  <span id="4db5">to render the props data that it gets from a parent component,</span>
2.  <span id="f8e1">to add the ability for a user to click on it and have it toggle a strikethrough, indicating that the item is ‘complete’.</span>

The overall structure of the child component is nothing we haven’t seen. It’s just another class component with its own s**tate object and a method called** `handleClick`** .**

**A component accesses its props via the** `this.props` **object.**

*Any prop a parent component passes down to a child component is accessible inside the child component's* `this.prop` *object.*

So our child component keeps its own state that tracks whether the component has been clicked or not.

Then at the top of the `render` function, it uses a ternary condition to determine whether the div tag that is being rendered should have a strikethrough or not.

The `handleClick` method is then invoked via an `onClick` handler on the div tag; it does the work of toggling the `this.state.clicked` Boolean.

The overall structure of React applications can be represented as a hierarchical tree structure, just like how the DOM itself is structure. There is an overarching root component at the top of the hierarchy that every other component sits underneath. Specifying that a component should be a child of some parent component is as simple as throwing it in the parent component’s render function, just like how we did it in this example

<figure><img src="https://cdn-images-1.medium.com/max/800/0*aqqfHMjBXT8PWYJC" class="graf-image" /></figure>

------------------------------------------------------------------------

<figure><img src="https://cdn-images-1.medium.com/max/800/0*j9aPKza7Y4htBeQ-.gif" class="graf-image" /></figure>### **Core Concepts:**

#### 1. What is react?

#### React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It uses components to update and render as your data changes.

> React manages the **creation and continuous updating of DOM nodes in your Web page**.

-   <span id="c9b6">*It does not handle* <a href="https://skillcrush.com/blog/what-is-ajax/" class="markup--anchor markup--li-anchor"><em>AJAX</em></a> *requests, Local Storage or style your website. IT is just a tool to dynamically render content on a webpage as a result of changes in ‘state’. Because it’s function is so limited in scope you may hear it referred to as a library… (not a framework … like Angular for example) and you may also hear it described as unopinionated.*</span>

#### 2. Why use react?

-   <span id="45da">Works for teams and helps UI workflow patterns</span>
-   <span id="f328">The components can be reusable</span>
-   <span id="ea48">Componentized UI is the future of web dev</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*pFe_v7Ea--vfdmvR3UcunA.png" class="graf-image" /></figure>### Declarative programming

In the same way that you use HTML to *declare* what the user interface should  
look like, React provides the same mechanism in its `createElement` method or the higher-level language known as JSX.

<figure><img src="https://cdn-images-1.medium.com/max/600/0*MW-A5Dp_v1T0BB1s.png" alt="React… like HTML is Declarative" class="graf-image" /><figcaption>React… like HTML is Declarative</figcaption></figure><a href="https://en.wikipedia.org/wiki/Declarative_programming" class="markup--anchor markup--p-anchor">Declarative programming</a> is often defined as any style of programming that is not <a href="https://en.wikipedia.org/wiki/Imperative_programming" class="markup--anchor markup--p-anchor" title="Imperative programming">imperative</a>.

A number of other common definitions attempt to define it by simply contrasting it with imperative programming. For example:

-   <span id="97d7">A high-level program that describes what a computation should perform.</span>
-   <span id="0283">Any programming language that lacks <a href="https://en.wikipedia.org/wiki/Side_effect_%28computer_science%29" class="markup--anchor markup--li-anchor" title="Computation">side effects</a></span>
-   <span id="4173">A language with a clear correspondence to <a href="https://en.wikipedia.org/wiki/Mathematical_logic" class="markup--anchor markup--li-anchor">mathematical logic</a>.<a href="https://en.wikipedia.org/wiki/Declarative_programming#cite_note-5" class="markup--anchor markup--li-anchor">[5]</a></span>

These definitions overlap substantially.

<span class="graf-dropCap">D</span>**eclarative programming is a non-imperative style of programming in which programs describe their desired results without explicitly listing commands or steps that must be performed.**

<a href="https://en.wikipedia.org/wiki/Functional_programming" class="markup--anchor markup--p-anchor" title="Functional programming">Functional</a> and <a href="https://en.wikipedia.org/wiki/Logical_programming" class="markup--anchor markup--p-anchor" title="Logical programming">logical programming</a> languages are characterized by a declarative programming style.

*In a* <a href="https://en.wikipedia.org/wiki/Pure_functional_language" class="markup--anchor markup--p-anchor" title="Pure functional language"><em>pure functional language</em></a>*, such as* <a href="https://en.wikipedia.org/wiki/Haskell_%28programming_language%29" class="markup--anchor markup--p-anchor"><em>Haskell</em></a>*, all functions are* <a href="https://en.wikipedia.org/wiki/Pure_function" class="markup--anchor markup--p-anchor" title="Pure function"><em>without side effects</em></a>*, and state changes are only represented as functions that transform the state, which is explicitly represented as a* <a href="https://en.wikipedia.org/wiki/First-class_citizen" class="markup--anchor markup--p-anchor" title="Mathematical logic"><em>first-class</em></a> *object in the program.*

— Wikipedia

### What is a React pure component?

<a href="https://blog.logrocket.com/react-pure-components-functional/#whatisareactpurecomponent" class="markup--anchor markup--p-anchor">Based on the concept of purity in functional programming paradigms, a function is said to be pure if:</a>

-   <span id="12b8">Its return value is only determined by its input values</span>
-   <span id="c2a4">Its return value is always the same for the same input values</span>

A React component is considered pure if it renders the same output for the same state and props. For class components like this, React provides the `PureComponent` base class. Class components that extend the `React.PureComponent` class are treated as pure components.

Pure components have some performance improvements and render optimizations since React implements the `shouldComponentUpdate()` method for them with a shallow comparison for props and state.

### Are React functional components pure?

Functional components are very useful in React, especially when you want to isolate state management from the component. That’s why they are often called stateless components.

However, functional components cannot leverage the performance improvements and render optimizations that come with `React.PureComponent` since they are not classes by definition.

If you want React to treat a functional component as a pure component, you’ll have to convert the functional component to a class component that extends `React.PureComponent`.

### Reusability

React encourages you to think in terms of reusability as you construct the user  
interface from elements and components that you create. When you  
make a list or a button, you can then reuse those components to show different data ‘state’ in the same UI structure as you have built for different data previously.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*cBLQ5aBP2qihrT59.jpeg" class="graf-image" /></figure>#### Component-Based

Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.

#### Learn Once, Write Anywhere

We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

React can also render on the server using Node and power mobile apps using <a href="https://reactnative.dev/" class="markup--anchor markup--p-anchor">React Native</a>.

### Speed

Due to the use of a virtual DOM, React handles changes to a Web page more  
intelligently than just string manipulation. It is constantly monitors the  
virtual DOM for changes. It very efficiently reconciles changes in the virtual  
DOM with what it has already produced in the real DOM. This is what  
makes React one of the speediest front-end libraries available.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*OdOq6pmpXBJhjj7k.png" class="graf-image" /></figure>#### 3. Who uses react?

-   <span id="76d9">Companies such as Facebook app for android and Instagram</span>
-   <span id="0a90"><a href="https://facebook.github.io/react-native/showcase.html" class="markup--anchor markup--li-anchor">Here</a> is a link to a list of other companies who use react.</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/1*Cn9JvaSmkxdLwgXIO9Y8iQ.png" alt="Who uses react" class="graf-image" /><figcaption>Who uses react</figcaption></figure>#### 4. Setting up react

-   <span id="6864">React can be set up in CodePen for quick practice development by adding react.js, react-dom and babel.</span>
-   <span id="4ce5">It can also be set up by downloading a react starter project from GitHub installing node and following these <a href="https://github.com/hjb23/ReduxSimpleStarter" class="markup--anchor markup--li-anchor">instructions</a>.</span>
-   <span id="ba2e">Alternatively it can be set up through NPM like <a href="https://www.codementor.io/tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr" class="markup--anchor markup--li-anchor">this</a>.</span>

#### 5. Intro to eco system

-   <span id="60f4">Composition, being able to wrap up sections of code into there own containers so they can be re used.</span>
-   <span id="e3e8">How to make a large application? by combining small components to create a larger complex application.</span>

#### 6. Imperative vs Declarative <a href="https://medium.com/trabe/why-is-react-declarative-a-story-about-function-components-aaae83198f79" class="markup--anchor markup--h4-anchor">(React is Declarative)</a>

-   <span id="d48c">**Imperative, ‘telling to computer HOW to do something’ e.g looping over an array of numbers using a for loop.**</span>
-   <span id="8f2d">**Declarative, is concerned about WHAT we want to happen. e.g using a reduce method on an array.**</span>
-   <span id="b625">Benefits of using declarative code:</span>
-   <span id="1164">Reduce side effects</span>
-   <span id="0f09">Minimize mutability</span>
-   <span id="7009">Less Bugs</span>

#### 7. Unidirectional Data Flow

-   <span id="f8de">As the state collects from user interaction, the UI gets updated.</span>

1.  <span id="d6bf">Explicit Mutations</span>
2.  <span id="2a52">Whenever the state needs to be updated in our application setState has to be called.</span>

<!-- -->

    this.setState({
      highlight: !this.state.highlight,
    })

#### 7.1. First component

-   <span id="eb44">Components are the building blocks of React.</span>
-   <span id="ec58">They are similar to a collection of HTML,CSS, JS and data specific to that component.</span>
-   <span id="1ee2">They can be defined in pure JavaScript or JSX.</span>
-   <span id="a2b4">Data is either received from a component’s parent component, or it’s contained in the component itself.</span>
-   <span id="182f">Applications can be separated into smaller components like this…</span>
-   <span id="c153">React components can be created using ES6 class like this.</span>

<!-- -->

    import React from 'react';

    class Hello extends React.Component {
      render () {
        return <h1>Hello, {this.props.name}!</h1>;
      }
    }

    export default Hello;

-   <span id="82a3">At the top with have the code to bring react and react dom libraries in.</span>
-   <span id="3b52">React library is used for the react syntax.</span>
-   <span id="281c">React DOM is used to update the DOM.</span>
-   <span id="8818">We then have the Class section which creates the component.</span>
-   <span id="aad6">Render() describes the specific UI for the component.</span>
-   <span id="2165">Return is used to return the JSX</span>
-   <span id="7757">And Finally ReactDOM.render is used to update the DOM.</span>

#### 8. Data flow with props

Small examples of data flow, see if you can get the code to work.

#### 9. Creating lists with map

The parent component passes down to the child component as props.

Using props to access names and map to loop through each list item. Then passing this by using props.

Checking data to see if Boolean is true then adding detail to the list.

#### 10. Prop types

PropTypes allow you to declare the type (string, number, function, etc) of each prop being passed to a component. Then if a prop passed in isn’t of the declared type you’ll get a warning in the console.

------------------------------------------------------------------------

### Excerpt from the React website:

### React — A JavaScript library for building user interfaces

> *A JavaScript library for building user interfaces*

#### Declarative

React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug.

#### A Simple Component

React components implement a `render()` method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by `render()` via `this.props`.

JSX is optional and not required to use React. Try the <a href="https://babeljs.io/repl/#?presets=react&amp;code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAFgRgD4AJRBEAGhgHcQAnBAEwEJsB6AwgbgChRJY_KAEMAlmDh0YWRiGABXVOgB0AczhQAokiVQAQgE8AkowAUAcjogQUcwEpeAJTjDgUACIB5ALLK6aRklTRBQ0KCohMQk6Bx4gA" class="markup--anchor markup--p-anchor">Babel REPL</a> to see the raw JavaScript code produced by the JSX compilation step.

In addition to taking input data (accessed via `this.props`), a component can maintain internal state data (accessed via `this.state`). When a component’s state data changes, the rendered markup will be updated by re-invoking `render()`.

#### An Application

Using `props` and `state`, we can put together a small Todo application. This example uses `state` to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation.

#### A Component Using External Plugins

React allows you to interface with other libraries and frameworks. This example uses remarkable, an external Markdown library, to convert the `<textarea>`’s value in real time.

------------------------------------------------------------------------

### React Cheat Sheet:

React-Tutorial-1:

<a href="https://replit.com/@bgoonz/react-tutorial-1" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://replit.com/@bgoonz/react-tutorial-1"><strong>react-tutorial-1</strong><br />
<em>A React repl by bgoonz</em>replit.com</a><a href="https://replit.com/@bgoonz/react-tutorial-1" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

React Boilerplate:

<a href="https://replit.com/@bgoonz/Reactjs-Babel-Webpack-Boilerplate#index.js" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://replit.com/@bgoonz/Reactjs-Babel-Webpack-Boilerplate#index.js"><strong>React.js + Babel + Webpack Boilerplate</strong><br />
<em>Created by @eankeen | The ultimate trifecta - React, Babel, and Webpack - complete with hot module reloading and a…</em>replit.com</a><a href="https://replit.com/@bgoonz/Reactjs-Babel-Webpack-Boilerplate#index.js" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

For more resources visit:

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz"><strong>bgoonz - Overview</strong><br />
<em>Web Developer, Electrical Engineer https://bryanguner.medium.com/ https://portfolio42.netlify.app/…</em>github.com</a><a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [May 19, 2021](https://medium.com/p/cda01615a186).

<a href="https://medium.com/@bryanguner/introductory-react-part-2-cda01615a186" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.

Beginners Guide To Python
=========================

My favorite language for maintainability is Python. It has simple, clean syntax, object encapsulation, good library support, and optional…

------------------------------------------------------------------------

### Beginners Guide To Python

#### My favorite language for maintainability is Python. It has simple, clean syntax, object encapsulation, good library support, and optional named parameters.

> Bram Cohen

#### Article on basic web development setup… it is geared towards web but VSCode is an incredibly versatile editor and this stack really could suit just about anyone working in the field of computer science.

<a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b"><strong>A list of all of my articles to link to future posts</strong><br />
<em>You should probably skip this one… seriously it’s just for internal use!</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/a-list-of-all-of-my-articles-to-link-to-future-posts-1f6f88ebdf5b" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://golden-lobe-519.notion.site/PYTHON-cb857bd3fa4b4940928842a94dce856d" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://golden-lobe-519.notion.site/PYTHON-cb857bd3fa4b4940928842a94dce856d"><strong>PYTHON</strong><br />
<em>Keywords: ***and del for is raise assert elif from lambda return break else global not try class except if or while…</em>golden-lobe-519.notion.site</a><a href="https://golden-lobe-519.notion.site/PYTHON-cb857bd3fa4b4940928842a94dce856d" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<figure><img src="https://cdn-images-1.medium.com/max/1200/1*per3wJrNyChrgJtUBySo1Q.png" class="graf-image" /></figure>

<a href="https://levelup.gitconnected.com/basic-web-development-environment-setup-9f36c3f15afe" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://levelup.gitconnected.com/basic-web-development-environment-setup-9f36c3f15afe"><strong>Basic Web Development Environment Setup</strong><br />
<em>Windows Subsystem for Linux (WSL) and Ubuntu</em>levelup.gitconnected.com</a><a href="https://levelup.gitconnected.com/basic-web-development-environment-setup-9f36c3f15afe" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Related Articles:

<a href="https://levelup.gitconnected.com/beginner-python-problems-solutions-dd631e9c3a9f" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://levelup.gitconnected.com/beginner-python-problems-solutions-dd631e9c3a9f"><strong>Python Problems &amp; Solutions For Beginners</strong><br />
<em>Introduction to python taught through example problems. Solutions are included in embedded repl.it at the bottom of…</em>levelup.gitconnected.com</a><a href="https://levelup.gitconnected.com/beginner-python-problems-solutions-dd631e9c3a9f" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://medium.com/webdevhub/notes-i-wish-i-had-when-i-started-learning-python-16ce4244be12" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://medium.com/webdevhub/notes-i-wish-i-had-when-i-started-learning-python-16ce4244be12"><strong>Notes I Wish I Had When I Started Learning Python</strong><br />
<em>Plus resources for learning data structures and algorithms in python at the bottom of this article!</em>medium.com</a><a href="https://medium.com/webdevhub/notes-i-wish-i-had-when-i-started-learning-python-16ce4244be12" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://bryanguner.medium.com/getting-comfortable-with-python-1371581a4971" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bryanguner.medium.com/getting-comfortable-with-python-1371581a4971"><strong>Getting Comfortable With Python:</strong><br />
<em>An introduction by example</em>bryanguner.medium.com</a><a href="https://bryanguner.medium.com/getting-comfortable-with-python-1371581a4971" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

<a href="https://levelup.gitconnected.com/python-study-guide-for-a-native-javascript-developer-5cfdf3d2bdfb" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://levelup.gitconnected.com/python-study-guide-for-a-native-javascript-developer-5cfdf3d2bdfb"><strong>Python Study Guide for a JavaScript Programmer</strong><br />
<em>A guide to commands in Python from what you know in JavaScript</em>levelup.gitconnected.com</a><a href="https://levelup.gitconnected.com/python-study-guide-for-a-native-javascript-developer-5cfdf3d2bdfb" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### The Repository & Live Site Behind This Article:

### About Python(Taken From Tutorial Page Of Docs):

<a href="https://docs.python.org/3/tutorial/appetite.html" class="markup--anchor markup--p-anchor">Python enables programs to be written compactly and readably. Programs written in Python are typically much shorter than equivalent C, C++, or Java programs, for several reasons:</a>

-   <span id="894d">the high-level data types allow you to express complex operations in a single statement;</span>
-   <span id="48ef">statement grouping is done by indentation instead of beginning and ending brackets;</span>
-   <span id="f361">no variable or argument declarations are necessary.</span>

### Installing Python:

### Windows

To determine if your Windows computer already has Python 3:

1.  <span id="4838">Open a command prompt by entering command prompt in the Windows 10 search box and selecting the Command Prompt App in the Best match section of the results.</span>
2.  <span id="f6bc">Enter the following command and then select the Enter key:</span>
3.  <span id="24ec">ConsoleCopy</span>

`python --version`

<figure><img src="https://cdn-images-1.medium.com/max/800/1*59V2ZNbyJfsdGR2N20PM7w.png" class="graf-image" /></figure>1.  <span id="e87f">Running `python --version` may not return a value, or may return an error message stating *'python' is not recognized as an internal or external command, operable program or batch file.* This indicates Python is not installed on your Windows system.</span>
2.  <span id="7c04">If you see the word `Python` with a set of numbers separated by `.` characters, some version of Python is installed.</span>

#### i.e.

> `Python 3.8.0`

**As long as the first number is** `3`, you have Python 3 installed.

> Download Page: <a href="https://www.python.org/downloads/release/python-395/" class="markup--anchor markup--blockquote-anchor">https://www.python.org/downloads/release/python-395/</a>

> Download Link: <a href="https://www.python.org/ftp/python/3.9.5/python-3.9.5-amd64.exe" class="markup--anchor markup--blockquote-anchor">https://www.python.org/ftp/python/3.9.5/python-3.9.5-amd64.exe</a>

------------------------------------------------------------------------

### Python

-   <span id="c462">Python is an interpreted, high-level and general-purpose, dynamically typed programming language</span>
-   <span id="74e1">It is also Object oriented, modular oriented and a scripting language.</span>
-   <span id="6e0e">In Python, everything is considered as an Object.</span>
-   <span id="490d">A python file has an extension of .py</span>
-   <span id="2bd5">Python follows Indentation to separate code blocks instead of flower brackets({}).</span>
-   <span id="6434">We can run a python file by the following command in cmd(Windows) or shell(mac/linux).</span>
-   <span id="b76b">`python <filename.py>`</span>

#### By default, the python doesn’t require any imports to run a python file.

### Create and execute a program

1.  <span id="d7b7">Open up a terminal/cmd</span>
2.  <span id="a7a7">Create the program: nano/cat &gt; <a href="http://nameprogram.py/" class="markup--anchor markup--li-anchor">nameProgram.py</a></span>
3.  <span id="aace">Write the program and save it</span>
4.  <span id="b439">python <a href="http://nameprogram.py/" class="markup--anchor markup--li-anchor">nameProgram.py</a></span>

### Basic Datatypes

<figure><img src="https://cdn-images-1.medium.com/max/800/1*LDLNGnpgmyeWojLU_mKKJw.png" class="graf-image" /></figure>### Keywords

<figure><img src="https://cdn-images-1.medium.com/max/800/1*rMzTksSg1jUZm2ECvvzO_g.png" class="graf-image" /></figure>### Operators

<figure><img src="https://cdn-images-1.medium.com/max/800/1*3ud99ZpJ20AhhApKhjvlqQ.png" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/1*_Chk6-fWKs-i52q2Zx0ZTw.png" class="graf-image" /></figure>### Basic Data Structures

### List

-   <span id="a311">List is a collection which is ordered and changeable. Allows duplicate members.</span>
-   <span id="cd75">Lists are created using square brackets:</span>

<!-- -->

    thislist = ["apple", "banana", "cherry"]

-   <span id="8afd">List items are ordered, changeable, and allow duplicate values.</span>
-   <span id="668d">List items are indexed, the first item has index `[0]`, the second item has index `[1]` etc.</span>
-   <span id="b8c7">The list is changeable, meaning that we can change, add, and remove items in a list after it has been created.</span>
-   <span id="b5f4">To determine how many items a list has, use the `len()` function.</span>
-   <span id="7dff">A list can contain different data types:</span>

<!-- -->

    list1 = ["abc", 34, True, 40, "male"]

-   <span id="9e81">It is also possible to use the list() constructor when creating a new list</span>

<!-- -->

    thislist = list(("apple", "banana", "cherry"))  # note the double round-brackets

### Tuple

-   <span id="50ea">Tuple is a collection which is ordered and unchangeable. Allows duplicate members.</span>
-   <span id="14ac">A tuple is a collection which is ordered and unchangeable.</span>
-   <span id="8cde">Tuples are written with round brackets.</span>

<!-- -->

    thistuple = ("apple", "banana", "cherry")

-   <span id="3e58">Tuple items are ordered, unchangeable, and allow duplicate values.</span>
-   <span id="2f5a">Tuple items are indexed, the first item has index `[0]`, the second item has index `[1]` etc.</span>
-   <span id="6f87">When we say that tuples are ordered, it means that the items have a defined order, and that order will not change.</span>
-   <span id="709a">Tuples are unchangeable, meaning that we cannot change, add or remove items after the tuple has been created.</span>
-   <span id="134b">Since tuple are indexed, tuples can have items with the same value:</span>
-   <span id="2720">Tuples allow duplicate values:</span>

<!-- -->

    thistuple = ("apple", "banana", "cherry", "apple", "cherry")

-   <span id="ddae">To determine how many items a tuple has, use the `len()`function:</span>

<!-- -->

    thistuple = ("apple", "banana", "cherry")
    print(len(thistuple))

-   <span id="2723">To create a tuple with only one item, you have to add a comma after the item, otherwise Python will not recognize it as a tuple.</span>

<!-- -->

    thistuple = ("apple",)
    print(type(thistuple))

    #NOT a tuple
    thistuple = ("apple")
    print(type(thistuple))

-   <span id="4556">It is also possible to use the tuple() constructor to make a tuple.</span>

<!-- -->

    thistuple = tuple(("apple", "banana", "cherry")) # note the double round-brackets
    print(thistuple)

### Set

-   <span id="1991">Set is a collection which is unordered and unindexed. No duplicate members.</span>
-   <span id="d108">A set is a collection which is both unordered and unindexed.</span>

<!-- -->

    thisset = {"apple", "banana", "cherry"}

-   <span id="4098">Set items are unordered, unchangeable, and do not allow duplicate values.</span>
-   <span id="b4d0">Unordered means that the items in a set do not have a defined order.</span>
-   <span id="d081">Set items can appear in a different order every time you use them, and cannot be referred to by index or key.</span>
-   <span id="4f53">Sets are unchangeable, meaning that we cannot change the items after the set has been created.</span>
-   <span id="812b">Duplicate values will be ignored.</span>
-   <span id="3ac9">To determine how many items a set has, use the `len()` method.</span>

<!-- -->

    thisset = {"apple", "banana", "cherry"}

    print(len(thisset))

-   <span id="b34e">Set items can be of any data type:</span>

<!-- -->

    set1 = {"apple", "banana", "cherry"}
    set2 = {1, 5, 7, 9, 3}
    set3 = {True, False, False}
    set4 = {"abc", 34, True, 40, "male"}

-   <span id="2a23">It is also possible to use the `set()` constructor to make a set.</span>

<!-- -->

    thisset = set(("apple", "banana", "cherry")) # note the double round-brackets

### Dictionary

-   <span id="3c14">Dictionary is a collection which is unordered and changeable. No duplicate members.</span>
-   <span id="cf8a">Dictionaries are used to store data values in key:value pairs.</span>
-   <span id="bbb2">Dictionaries are written with curly brackets, and have keys and values:</span>

<!-- -->

    thisdict = {
      "brand": "Ford",
      "model": "Mustang",
      "year": 1964
    }

-   <span id="7f11">Dictionary items are presented in key:value pairs, and can be referred to by using the key name.</span>

<!-- -->

    thisdict = {
      "brand": "Ford",
      "model": "Mustang",
      "year": 1964
    }
    print(thisdict["brand"])

-   <span id="8700">Dictionaries are changeable, meaning that we can change, add or remove items after the dictionary has been created.</span>
-   <span id="ea7e">Dictionaries cannot have two items with the same key.</span>
-   <span id="1ad4">Duplicate values will overwrite existing values.</span>
-   <span id="7582">To determine how many items a dictionary has, use the `len()` function.</span>

<!-- -->

    print(len(thisdict))

-   <span id="305d">The values in dictionary items can be of any data type</span>

<!-- -->

    thisdict = {
      "brand": "Ford",
      "electric": False,
      "year": 1964,
      "colors": ["red", "white", "blue"]
    }

### Conditional branching

    if condition:
            pass
        elif condition2:
            pass
        else:
            pass

### Loops

Python has two primitive loop commands:

1.  <span id="cd2b">while loops</span>
2.  <span id="f858">for loops</span>

#### While loop

-   <span id="e9e1">With the `while` loop we can execute a set of statements as long as a condition is true.</span>
-   <span id="ef71">Example: Print i as long as i is less than 6</span>

<!-- -->

    i = 1
    while i < 6:
      print(i)
      i += 1

-   <span id="5f4a">The while loop requires relevant variables to be ready, in this example we need to define an indexing variable, i, which we set to 1.</span>
-   <span id="2dce">With the `break` statement we can stop the loop even if the while condition is true</span>
-   <span id="371e">With the continue statement we can stop the current iteration, and continue with the next.</span>
-   <span id="3dcf">With the else statement we can run a block of code once when the condition no longer is true.</span>

#### For loop

-   <span id="0fa5">A for loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).</span>
-   <span id="871e">This is less like the for keyword in other programming languages, and works more like an iterator method as found in other object-orientated programming languages.</span>
-   <span id="ca9c">With the for loop we can execute a set of statements, once for each item in a list, tuple, set etc.</span>

<!-- -->

    fruits = ["apple", "banana", "cherry"]
    for x in fruits:
      print(x)

-   <span id="19c1">The for loop does not require an indexing variable to set beforehand.</span>
-   <span id="fb47">To loop through a set of code a specified number of times, we can use the range() function.</span>
-   <span id="f32d">The range() function returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and ends at a specified number.</span>
-   <span id="b8d4">The range() function defaults to increment the sequence by 1, however it is possible to specify the increment value by adding a third parameter: range(2, 30, 3).</span>
-   <span id="cca5">The else keyword in a for loop specifies a block of code to be executed when the loop is finished.  
    A nested loop is a loop inside a loop.</span>
-   <span id="acbb">The “inner loop” will be executed one time for each iteration of the “outer loop”:</span>

<!-- -->

    adj = ["red", "big", "tasty"]
    fruits = ["apple", "banana", "cherry"]

    for x in adj:
      for y in fruits:
        print(x, y)

-   <span id="1bdd">for loops cannot be empty, but if you for some reason have a for loop with no content, put in the pass statement to avoid getting an error.</span>

<!-- -->

    for x in [0, 1, 2]:
      pass

### Function definition

    def function_name():
        return

### Function call

    function_name()

-   <span id="a1ca">We need not to specify the return type of the function.</span>
-   <span id="89e4">Functions by default return `None`</span>
-   <span id="7041">We can return any datatype.</span>

------------------------------------------------------------------------

### Python Syntax

Python syntax was made for readability, and easy editing. For example, the python language uses a `:` and indented code, while javascript and others generally use `{}` and indented code.

### First Program

Lets create a <a href="https://repl.it/languages/python3" class="markup--anchor markup--p-anchor">python 3</a> repl, and call it *Hello World*. Now you have a blank file called *main.py*. Now let us write our first line of code:

    print('Hello world!')

> *Brian Kernighan actually wrote the first “Hello, World!” program as part of the documentation for the BCPL programming language developed by Martin Richards.*

Now, press the run button, which obviously runs the code. If you are not using replit, this will not work. You should research how to run a file with your text editor.

### Command Line

If you look to your left at the console where hello world was just printed, you can see a `>`, `>>>`, or `$` depending on what you are using. After the prompt, try typing a line of code.

    Python 3.6.1 (default, Jun 21 2017, 18:48:35)
    [GCC 4.9.2] on linux
    Type "help", "copyright", "credits" or "license" for more information.
    > print('Testing command line')
    Testing command line
    > print('Are you sure this works?')
    Are you sure this works?
    >

The command line allows you to execute single lines of code at a time. It is often used when trying out a new function or method in the language.

### New: Comments!

Another cool thing that you can generally do with all languages, are comments. In python, a comment starts with a `#`. The computer ignores all text starting after the `#`.

`# Write some comments!`

If you have a huge comment, do **not** comment all the 350 lines, just put `'''` before it, and `'''` at the end. Technically, this is not a comment but a string, but the computer still ignores it, so we will use it.

### New: Variables!

Unlike many other languages, there is no `var`, `let`, or `const` to declare a variable in python. You simply go `name = 'value'`.

Remember, there is a difference between integers and strings. *Remember: String =* `""`*.* To convert between these two, you can put an int in a `str()` function, and a string in a `int()` function. There is also a less used one, called a float. Mainly, these are integers with decimals. Change them using the `float()` command.

<a href="https://repl.it/@bgoonz/second-scr?lite=true&amp;amp;referrer=https%3A%2F%2Fbryanguner.medium.com" class="markup--anchor markup--p-anchor">https://repl.it/@bgoonz/second-scr?lite=true&amp;amp;referrer=https%3A%2F%2Fbryanguner.medium.com</a>

    x = 5
    x = str(x)
    b = '5'
    b = int(b)
    print('x = ', x, '; b = ', str(b), ';') # => x = 5; b = 5;

Instead of using the `,` in the print function, you can put a `+` to combine the variables and string.

### Operators

There are many operators in python:

-   <span id="d553">`+`</span>
-   <span id="a1b3">`-`</span>
-   <span id="f09c">`/`</span>
-   <span id="cd1e">`*`  
    These operators are the same in most languages, and allow for addition, subtraction, division, and multiplicaiton.  
    Now, we can look at a few more complicated ones:</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*oVIDxWdgJXoIt7CI.jpg" class="graf-image" /></figure>*simpleops.py*

    x = 4
    a = x + 1
    a = x - 1
    a = x * 2
    a = x / 2

You should already know everything shown above, as it is similar to other languages. If you continue down, you will see more complicated ones.

*complexop.py*

    a += 1
    a -= 1
    a *= 2
    a /= 2

The ones above are to edit the current value of the variable.  
Sorry to JS users, as there is no `i++;` or anything.

### Fun Fact: The python language was named after Monty Python.

If you really want to know about the others, view <a href="https://www.tutorialspoint.com/python/python_basic_operators.htm" class="markup--anchor markup--p-anchor">Py Operators</a>

### More Things With Strings

Like the title?  
Anyways, a `'` and a `"` both indicate a string, but **do not combine them!**

*quotes.py*

    x = 'hello' # Good
    x = "hello" # Good
    x = "hello' # ERRORRR!!!

*slicing.py*

### String Slicing

You can look at only certain parts of the string by slicing it, using `[num:num]`.  
The first number stands for how far in you go from the front, and the second stands for how far in you go from the back.

    x = 'Hello everybody!'
    x[1] # 'e'
    x[-1] # '!'
    x[5] # ' '
    x[1:] # 'ello everybody!'
    x[:-1] # 'Hello everybod'
    x[2:-3] # 'llo everyb'

### Methods and Functions

Here is a list of functions/methods we will go over:

-   <span id="aaaa">`.strip()`</span>
-   <span id="b3ee">`len()`</span>
-   <span id="c5cc">`.lower()`</span>
-   <span id="3466">`.upper()`</span>
-   <span id="a06d">`.replace()`</span>
-   <span id="57b6">`.split()`</span>

<a href="https://trinket.io/python3/2b693977e7" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://trinket.io/python3/2b693977e7"><strong>Put Python Anywhere on the Web</strong><br />
<em>Python in the browser. No installation required.</em>trinket.io</a><a href="https://trinket.io/python3/2b693977e7" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

### New: Input()

Input is a function that gathers input entered from the user in the command line. It takes one optional parameter, which is the users prompt.

*inp.py*

    print('Type something: ')
    x = input()
    print('Here is what you said: ', x)

If you wanted to make it smaller, and look neater to the user, you could do…

*inp2.py*

    print('Here is what you said: ', input('Type something: '))

Running:  
*inp.py*

    Type something:
    Hello World
    Here is what you said: Hello World

*inp2.py*

    Type something: Hello World
    Here is what you said: Hello World

### New: Importing Modules

Python has created a lot of functions that are located in other .py files. You need to import these **modules** to gain access to the,, You may wonder why python did this. The purpose of separate modules is to make python faster. Instead of storing millions and millions of functions, , it only needs a few basic ones. To import a module, you must write `input <modulename>`. Do not add the .py extension to the file name. In this example , we will be using a python created module named random.

*module.py*

    import random

Now, I have access to all functions in the random.py file. To access a specific function in the module, you would do `<module>.<function>`. For example:

*module2.py*

    import random
    print(random.randint(3,5)) # Prints a random number between 3 and 5

> *Pro Tip:  
> Do* `from random import randint` *to not have to do* `random.randint()`*, just* `randint()`*  
> To import all functions from a module, you could do* `from random import *`

### New: Loops!

Loops allow you to repeat code over and over again. This is useful if you want to print Hi with a delay of one second 100 times.

#### `for` Loop

The for loop goes through a list of variables, making a seperate variable equal one of the list every time.  
Let’s say we wanted to create the example above.

*loop.py*

    from time import sleep
    for i in range(100):
         print('Hello')
         sleep(.3)

This will print Hello with a .3 second delay 100 times. This is just one way to use it, but it is usually used like this:

*loop2.py*

    import time
    for number in range(100):
         print(number)
         time.sleep(.1)

<a href="https://storage.googleapis.com/replit/images/1539649280875_37d22e6d49e8e8fbc453631def345387.pn" class="markup--anchor markup--p-anchor">https://storage.googleapis.com/replit/images/1539649280875_37d22e6d49e8e8fbc453631def345387.pn</a>

#### `while` Loop

The while loop runs the code while something stays true. You would put `while <expression>`. Every time the loop runs, it evaluates if the expression is True. It it is, it runs the code, if not it continues outside of the loop. For example:

*while.py*

    while True: # Runs forever
         print('Hello World!')

Or you could do:

*while2.py*

    import random
    position = '<placeholder>'
    while position != 1: # will run at least once
        position = random.randint(1, 10)
        print(position)

### New: `if` Statement

The if statement allows you to check if something is True. If so, it runs the code, if not, it continues on. It is kind of like a while loop, but it executes **only once**. An if statement is written:

*if.py*

    import random
    num = random.randint(1, 10)
    if num == 3:
         print('num is 3. Hooray!!!')
    if num > 5:
         print('Num is greater than 5')
    if num == 12:
         print('Num is 12, which means that there is a problem with the python language, see if you can figure it out. Extra credit if you can figure it out!')

Now, you may think that it would be better if you could make it print only one message. Not as many that are True. You can do that with an `elif` statement:

*elif.py*

    import random
    num = random.randint(1, 10)
    if num == 3:
        print('Num is three, this is the only msg you will see.')
    elif num > 2:
        print('Num is not three, but is greater than 1')

Now, you may wonder how to run code if none work. Well, there is a simple statement called `else:`

*else.py*

    import random
    num = random.randint(1, 10)
    if num == 3:
        print('Num is three, this is the only msg you will see.')
    elif num > 2:
        print('Num is not three, but is greater than 1')
    else:
        print('No category')

### New: Functions (`def`)

So far, you have only seen how to use functions other people have made. Let use the example that you want to print the a random number between 1 and 9, and print different text every time.  
It is quite tiring to type:

Characters: 389

*nofunc.py*

    import random
    print(random.randint(1, 9))
    print('Wow that was interesting.')
    print(random.randint(1, 9))
    print('Look at the number above ^')
    print(random.randint(1, 9))
    print('All of these have been interesting numbers.')
    print(random.randint(1, 9))
    print("these random.randint's are getting annoying to type")
    print(random.randint(1, 9))
    print('Hi')
    print(random.randint(1, 9))
    print('j')

Now with functions, you can seriously lower the amount of characters:

Characters: 254

*functions.py*

    import random
    def r(t):
         print(random.randint(1, 9))
         print(t)
    r('Wow that was interesting.')
    r('Look at the number above ^')
    r('All of these have been interesting numbers.')
    r("these random.randint's are getting annoying to type")
    r('Hi')
    r('j')

------------------------------------------------------------------------

### Project Based Learning:

The following is a modified version of a tutorial posted By: <a href="https://replit.com/@InvisibleOne" class="markup--anchor markup--p-anchor">InvisibleOne</a>

I would cite the original tutorial it’s self but at the time of this writing I can no longer find it on his repl.it profile and so the only reference I have are my own notes from following the tutorial when I first found it.

### 1. Adventure Story

The first thing you need with an adventure story is a great storyline, something that is exciting and fun. The idea is, that at each pivotal point in the story, you give the player the opportunity to make a choice.  
First things first, let’s import the stuff that we need, like this:

    import os   #very useful for clearing the screen
    import random

Now, we need some variables to hold some of the player data.

    name = input(“Name Please:  “) #We’ll use this to get the name from the user
    nickname = input(“Nickname: “)

Ok, now we have the player’s name and nickname, let’s welcome them to the game

    print(“Hello and welcome “ + name)

Now for the story. The most important part of all stories is the introduction, so let’s print our introduction

    print(“Long ago, there was a magical meal known as Summuh and Spich Atip”) #We can drop a line by making a new print statement, or we can use the escape code \n
    print(“It was said that this meal had the power to save lives, restore peace, and stop evil\nBecuase it was so powerful, it was hidden away on a mountain that could not be climbed\nBut it’s power brought unwanted attention, and a great war broke out.\nFinally, the leaders of the good side chose a single hero to go and find the Summah and Spich Atip, that hero was “ + name + “\n so ” + nickname + ‘ headed out to find this great power, and stop the war…’)

Now, we’ll give the player their first choice

    print(“After hiking through the wastelands for a long time, you come to a massive ravine, there is only a single way across\nA rickety old bridge, taking that could be very dangerous, but… maybe you could jump across?”)
    choice1 = input(“[1]  Take the bridge     [2] Try and jump over”)
    #Now we check to see what the player chose
    If choice1 == ‘1’:
      print(“You slowly walk across the bride, it creakes ominously, then suddenly breaks! You flail through the air before hitting the ground a thousand feet below. Judging by the fact that you hit the ground with the equivalent force of being hit by a cement truck moving at 125 miles an hour, you are dead…”)
      #The player lost, so now we’ll boot them out of the program with the exit command
      exit()
    #Then we check to see if they made the other choice, we can do with with else if, written as elif
    elif choice1 == ‘2’:
      print(“You make the jump! You see a feather hit the bridge, the weight breakes it and sends it to the bottom of the ravine\nGood thing you didn’t use that bridge.”)
    #Now we can continue the story
    print(“A few more hours of travel and you come to the unclimbable mountain.”)
    choice2 == input(“[1]   Give up    [2]    Try and climb the mountain”)
    if choice2 == ‘1’:
      print(“You gave up and lost…”)
      #now we exit them again
      exit()
    elif choice2 == ‘1’:
      print(“you continue up the mountain. Climbing is hard, but finally you reach the top.\nTo your surprise there is a man standing at the top of the mountain, he is very old.”)
      print(“Old Man: Hey “ + nickname)
      print(“You: How do you know my name!?!”)
      print(“Old Man: Because you have a name tag on…”)
      print(“You: Oh, well, were is the Summuh and Spich Atip?”)
      print(“Old Man: Summuh and Spich Atip? You must mean the Pita Chips and Hummus”)
      print(“You: Pita…chips…humus, what power do those have?”)
      print(“Old Man: Pretty simple kid, their organic…”)
      #Now let’s clear the screen
      os.system(‘clear’)
      print(“YOU WON!!!”)

There you have it, a pretty simple choose your own ending story. You can make it as complex or uncomplex as you like.

### 2. TEXT ENCODER

Ever make secret messages as a kid? I used to. Anyways, here’s the way you can make a program to encode messages! It’s pretty simple. First things first, let’s get the message the user wants to encode, we’ll use input() for that:

    message = input(“Message you would like encoded: “)

Now we need to split that string into a list of characters, this part is a bit more complicated.

    #We’ll make a function, so we can use it later
    def split(x):
      return (char for char in x)
    #now we’ll call this function with our text
    L_message = message.lower() #This way we can lower any of their input
    encode = split(l_message)

Now we need to convert the characters into code, well do this with a for loop:

    out = []
    for x in encode:
      if x == ‘a’:
        out.append(‘1’)
      elif x == ‘b’:
        out.append(‘2’)
    #And we’ll continue on though this with each letter of the alphabet

Once we’ve encoded the text, we’ll print it back for the user

    x = ‘ ‘.join(out)
    #this will turn out into a string that we can print
    print(x)

And if you want to decode something, it is this same process but in reverse!

### 3. Guess my Number

Number guessing games are fun and pretty simple, all you need are a few loops. To start, we need to import random.

    import random

That is pretty simple. Now we’ll make a list with the numbers were want available for the game

    num_list = [1,2,3,4,5,6,7,8,9,10]

Next, we get a random number from the list

    num = random.choice(num_list)

Now, we need to ask the user for input, we’ll to this with a while loop

    while True:
      # We could use guess = input(“What do you think my number is?   “), but that would produce a string, and numbers are integers, so we’ll convert the input into an integer
      guess = int(input(“What do you think my number is?   “))
      #Next, we’ll check if that number is equal to the number we picked
      if guess == num:
        break   #this will remove us from the loop, so we can display the win message
      else:
        print(“Nope, that isn’t it”)
    #outside our loop, we’ll have the win message that is displayed if the player gets the correct number. 
    print(“You won!”)

Have fun with this!

### 4. Notes

Here is a more advanced project, but still pretty easy. This will be using a txt file to save some notes. The first thing we need to do is to create a txt file in your repl, name it ‘notes.txt’  
Now, to open a file in python we use open(‘filename’, type) The type can be ‘r’ for read, or ‘w’ for write. There is another option, but we won’t be using that here. Now, the first thing we are going to do is get what the user would like to save:

    message = input(“What would you like to save?”)

Now we’ll open our file and save that text

    o = open(‘notes.txt’, ‘w’)
    o.write(message)
    #this next part is very important, you need to always remember to close your file or what you wrote to it won’t be saved
    o.close()

There we go, now the information is in the file. Next, we’ll retrieve it

    read = open(‘notes.txt’, ‘r’)
    out = read.read()
    # now we need to close the file
    read.close()
    # and now print what we read
    print(out)

There we go, that’s how you can open files and close files with python

### 5. Random Dare Generator

Who doesn’t love a good dare? Here is a program that can generate random dares. The first thing we’ll need to do is as always, import random. Then we’ll make some lists of dares

    import random
    list1 = [‘jump on’, ‘sit on’, ‘rick roll on’, ‘stop on’, ‘swing on’]
    list2 = [‘your cat’, ‘your neighbor’, ‘a dog’, ‘a tree’, ‘a house’]
    list3 = [‘your mom’, ‘your best friend’, ‘your dad’, ‘your teacher’]
    #now we’ll generate a dare
    while True:
      if input() == ‘’: #this will trigger if they hit enter
        print(“I dare you to “ + random.choice(list1) + ‘ ‘ + random.choice(list2) + ‘ in front of ‘  + random.choice(list3)

### Discover More:

<a href="https://bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…</em>bgoonz-blog.netlify.app</a><a href="https://bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [June 4, 2021](https://medium.com/p/e5a59b5bb64d).

<a href="https://medium.com/@bryanguner/beginners-guide-to-python-e5a59b5bb64d" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.

Breaking Down Scope, Context, And Closure In JavaScript In Simple Terms.
========================================================================

“JavaScript’s global scope is like a public toilet. You can’t avoid going in there, but try to limit your contact with surfaces when you…

------------------------------------------------------------------------

### Breaking Down Scope, Context, And Closure In JavaScript In Simple Terms.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*5M3vbTjiEYMUWvLu" alt="Photo by Florian Olivo on Unsplash" class="graf-image" /><figcaption>Photo by <a href="https://unsplash.com/@florianolv?utm_source=medium&amp;utm_medium=referral" class="markup--anchor markup--figure-anchor">Florian Olivo</a> on <a href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral" class="markup--anchor markup--figure-anchor">Unsplash</a></figcaption></figure><span class="graf-dropCap"><span class="graf-dropCapQuote">“</span>J</span>avaScript’s global scope is like a public toilet. You can’t avoid going in there, but try to limit your contact with surfaces when you do.”  
― **Dmitry Baranowski**

Here’s another (much) more simple article I wrote on the subject:

<a href="https://dev.to/bgoonz/closures-in-javascript-1moc" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://dev.to/bgoonz/closures-in-javascript-1moc"><strong>Closures In Javascript</strong><br />
<em>Answer A closure is a function defined inside another function and has access to its lexical scope even when it is…</em>dev.to</a><a href="https://dev.to/bgoonz/closures-in-javascript-1moc" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

I made this website in support of the article… it links to a navigation page as well as the repo where more examples are kept…

<a href="https://scopeclosurecontext.netlify.app/" class="markup--anchor markup--p-anchor">https://scopeclosurecontext.netlify.app/</a>

### Prerequisites

-   <span id="dcbf">creating and initializing a variable</span>
-   <span id="80e3">creating a function</span>
-   <span id="3d43">invoking a function</span>
-   <span id="1291">logging to the console</span>

### further prerequisites:

Quiz yourself with this website I made:

<a href="https://web-dev-interview-prep-quiz-website.netlify.app/index.html" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://web-dev-interview-prep-quiz-website.netlify.app/index.html"><strong>WebDevQuizzes</strong><br />
<em>Resource-sharing-hub</em>web-dev-interview-prep-quiz-website.netlify.app</a><a href="https://web-dev-interview-prep-quiz-website.netlify.app/index.html" class="js-mixtapeImage mixtapeImage mixtapeImage--empty u-ignoreBlock"></a>

### Vocab (most of these will be detailed many times over in this article!)

-   <span id="4f93">**Scope:** “Scope is the set of rules that determines where and how a variable (identifier) can be looked-up.” — Kyle Simpson, You Don’t Know JS: Scope & Closure</span>
-   <span id="ceff">**Function Scope:** Every variable defined in a function, is available for the entirety of that function.</span>
-   <span id="b34e">**Global Scope:** “The scope that is visible in all other scopes.” — MDN</span>
-   <span id="df88">**Global Variable:** A variable defined at the Global Scope.</span>
-   <span id="ae7a">**IIFE:** Imediatly-Invoked Function Expression — a function wrapped in `()` to create an expression, and immediatly followed by a pair of `()` to invoke that function imediatly.</span>
-   <span id="42a6">**Closure:** “Closures are functions that refer to independent (free) variables. In other words, the function defined in the closure ‘remembers’ the environment in which it was created.” — MDN</span>
-   <span id="023f">**Variable Shadowing:** “occurs when a variable declared within a certain scope … has the same name as a variable declared in an outer scope.” — Wikipedia</span>
-   <span id="7ba5">**for statement:** “The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement or a set of statements executed in the loop.” — MDN</span>
-   <span id="6f95">**initialization:** “An expression (including assignment expressions) or variable declaration. Typically used to initialize a counter variable. This expression may optionally declare new variables with the var keyword. These variables are not local to the loop, i.e. they are in the same scope the for loop is in. The result of this expression is discarded.” — MDN</span>
-   <span id="c763">**condition:** “An expression to be evaluated before each loop iteration. If this expression evaluates to true, statement is executed. This conditional test is optional. If omitted, the condition always evaluates to true. If the expression evaluates to false, execution skips to the first expression following the for construct.” — MDN</span>
-   <span id="0954">**final-expression:** “An expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of condition. Generally used to update or increment the counter variable.” — MDN</span>
-   <span id="76ee">**statement:** “A statement that is executed as long as the condition evaluates to true. To execute multiple statements within the loop, use a block statement ({ … }) to group those statements.” — MDN</span>
-   <span id="31bf">**Arrays:** “JavaScript arrays are used to store multiple values in a single variable.” — W3Schools</span>

<figure><img src="https://cdn-images-1.medium.com/max/2560/1*A1vTM5TdeUhUIfWxemwUEw.png" class="graf-image" /></figure>

#### I am going to try something new this article… it’s called **spaced repetition.**

> <a href="https://en.wikipedia.org/wiki/Spaced_repetition" class="markup--anchor markup--blockquote-anchor"><strong>“Spaced repetition</strong></a> is an <a href="https://en.wikipedia.org/wiki/Evidence-based_learning" class="markup--anchor markup--blockquote-anchor">evidence-based learning</a> technique that is usually performed with <a href="https://en.wikipedia.org/wiki/Flashcard" class="markup--anchor markup--blockquote-anchor" title="Flashcard">flashcards</a>. Newly introduced and more difficult flashcards are shown more frequently, while older and less difficult flashcards are shown less frequently in order to exploit the psychological <a href="https://en.wikipedia.org/wiki/Spacing_effect" class="markup--anchor markup--blockquote-anchor" title="Spacing effect">spacing effect</a>. The use of spaced repetition has been proven to increase rate of learning.”

<a href="https://en.wikipedia.org/wiki/Spaced_repetition" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://en.wikipedia.org/wiki/Spaced_repetition"><strong>Spaced repetition — Wikipedia</strong><br />
<em>Spaced repetition is an evidence-based learning technique that is usually performed with flashcards. Newly introduced…</em>en.wikipedia.org</a><a href="https://en.wikipedia.org/wiki/Spaced_repetition" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

------------------------------------------------------------------------

### CodePen For You To Practice With:

Open it in another tab… it will only display the html file that existed when I pasted it into this article… for access to the JavaScript file and the most up to date html page you need to Open the sandbox… feel free to create a fork of it if you like!

------------------------------------------------------------------------

### SCOPE:

-   <span id="8522">The `scope` of a program in JS is the set of variables that are available for use within the program.</span>
-   <span id="dc76">Scope in JavaScript defines which variables and functions you have access to, depending on where you are (a *physical position*) within your code.</span>
-   <span id="1243">The current context of execution. The context in which <a href="https://developer.mozilla.org/en-US/docs/Glossary/Value" class="markup--anchor markup--li-anchor">values</a> and **expressions** are “visible” or can be referenced. If a <a href="https://developer.mozilla.org/en-US/docs/Glossary/Variable" class="markup--anchor markup--li-anchor"><strong>variable</strong></a> or other expression is not “in the current scope,” then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.</span>

<figure><img src="https://cdn-images-1.medium.com/max/600/1*RaM-5KbhUOZ_HoP5j-kNWQ.png" class="graf-image" /></figure>-   <span id="def6">A <a href="https://developer.mozilla.org/en-US/docs/Glossary/Function" class="markup--anchor markup--li-anchor"><strong>function</strong></a> serves as a **closure** in <a href="https://developer.mozilla.org/en-US/docs/Glossary/JavaScript" class="markup--anchor markup--li-anchor">JavaScript</a>, and thus creates a scope, so that (for example) a variable defined exclusively within the function cannot be accessed from outside the function or within other functions:<a href="https://developer.mozilla.org/en-US/docs/Glossary/Scope" class="markup--anchor markup--li-anchor">https://developer.mozilla.org/en-US/docs/Glossary/Scope</a></span>
-   <span id="16a2">In <a href="https://en.wikipedia.org/wiki/Computer_programming" class="markup--anchor markup--li-anchor" title="Computer programming">computer programming</a>, the **scope** of a <a href="https://en.wikipedia.org/wiki/Name_binding" class="markup--anchor markup--li-anchor">name binding</a> — an association of a name to an entity, such as a <a href="https://en.wikipedia.org/wiki/Variable_%28programming%29" class="markup--anchor markup--li-anchor" title="Variable (programming)">variable</a> — is the part of a <a href="https://en.wikipedia.org/wiki/Computer_program" class="markup--anchor markup--li-anchor" title="Computer program">program</a> where the name binding is valid, that is where the name can be used to refer to the entity. In other parts of the program the name may refer to a different entity (it may have a different binding), or to nothing at all (it may be unbound). The scope of a name binding is also known as the **visibility** of an entity, particularly in older or more technical literature — this is from the perspective of the referenced entity, not the referencing name:<a href="https://en.wikipedia.org/wiki/Scope_%28computer_science%29" class="markup--anchor markup--li-anchor">https://en.wikipedia.org/wiki/Scope_(computer_science)</a></span>

**Advantages of utilizing scope**

-   <span id="857d">`Security` : Adds security by ensuring variables can only be access by pre-defined parts of our program.</span>
-   <span id="a55d">`Reduced Variable Name Collisions` : Restricts re-using variable names; helps prevent overwriting variable names.</span>

### Lexical Scope

Lexical scope is the ability of the inner function to access the outer scope in which it is defined.

-   <span id="62b5">`Lexing Time` : When you run a piece of JS code that is parsed before it is run.</span>
-   <span id="9320">*Lexical environment* is a place where variables and functions live during the program execution.</span>

### Different Variables in JavaScript

-   <span id="25bd">*A variable always evaluates to the value it contains no matter how you declare it.*</span>

**The different ways to declare variables**

-   <span id="1cff">`let` : can be re-assigned; block-scoped.</span>
-   <span id="a2e4">`const` : no re-assignment; block scoped.</span>
-   <span id="c933">`var` : May or may not be re-assigned; scoped to a function.</span>

**Hoisting and Scoping with Variables**

`Hoisting` is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

------------------------------------------------------------------------

<figure><img src="https://cdn-images-1.medium.com/max/800/0*Tb-9wd4RBvBCwIR2.jpeg" alt="I am afraid … sometimes… one simply does… at least analogous-ley" class="graf-image" /><figcaption>I am afraid … sometimes… one simply does… at least analogous-ley</figcaption></figure>### !!!Only function declarations are hoisted in JavaScript, function expressions are not hoisted!!!

### &&

### !!! Only variables declared with var are hoisted!!!!

------------------------------------------------------------------------

### Slightly modified excerpt from:

#### <a href="https://ui.dev/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/" class="markup--anchor markup--h4-anchor">source</a> : https://ui.dev/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/

The first *Execution Context* ( a word that we don’t have to worry about the exact meaning of yet) that gets created when the JavaScript engine runs your code is called the “Global Execution Context”.

Initially this Execution Context will consist of two things —

-   <span id="ba1b">**a global object**</span>

> ***and***

-   <span id="bdfe">***a* variable called** `this`.</span>

> By default the`this` keyword will act as a reference to global object which will be `window` if you’re running JavaScript in the browser or `global` if you’re running it in a Node environment.

### REMEMBER:

> Node: `this` references a global object called ***window*** (like the window that comprises the content of a tab in chrome)

> Browsers:`this` references a global object called ***global***

<figure><img src="https://cdn-images-1.medium.com/max/800/0*NMGRtcYlwffqSUSH.png" class="graf-image" /></figure>Above we can see that even without any code, the Global Execution Context will still consist of two things — `window` and `this`. This is the Global Execution Context in its most basic form.

Let’s step things up and see what happens when we start actually adding code to our program. Let’s start with adding a few variables.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*P8DG5hIKJO7thsnz.png" class="graf-image" /></figure><figure><img src="https://cdn-images-1.medium.com/max/800/0*J9juq03-KlcKReSF.png" class="graf-image" /></figure>The key take away is that each Execution Context has two separate phases, a `Creation` phase and an `Execution` phase and each phase has its own unique responsibilities.

------------------------------------------------------------------------

### Exaction Context:

#### Execution Context ≠(NOT EQUAL)≠≠≠Scope

1.  <span id="0fcc">The **global execution context** is created ***before*** any code is executed.</span>
2.  <span id="de32">Whenever a function is *executed* invoked (this means the function is told to run… i.e. after the doSomething function has been declared … calling ‘doSomething()’, a **new execution context** gets created.</span>
3.  <span id="20c3">**Every** execution context provides `this` keyword, which points to an **object** to which the current code that’s being executed belongs.</span>

For more info read about <a href="https://medium.com/@Rahulx1/understanding-event-loop-call-stack-event-job-queue-in-javascript-63dcd2c71ecd" class="markup--anchor markup--p-anchor">Event Queue and Call Stack</a>

------------------------------------------------------------------------

#### More formal definition from: <a href="https://codeburst.io/js-demystified-04-execution-context-97dea52c8ac6" class="markup--anchor markup--h4-anchor">Misa Ogura’s article on the subject</a>

In JavaScript, **execution context** is an abstract concept that holds *information about the environment* within which the current code is being executed.

**Remember**: the JavaScript engine creates the global execution context before it starts to execute any code. From that point on, a new execution context gets created *every time* a function is executed, as the engine parses through your code. In fact, the global execution context is nothing special. It’s just like any other execution context, except that it gets created by default.

------------------------------------------------------------------------

In the Global `Creation` phase, the JavaScript engine will

1.  <span id="0634">Create a global object.</span>
2.  <span id="ed12">Create an object called “this”.</span>
3.  <span id="b1a7">Set up memory space for variables and functions.</span>
4.  <span id="7656">Assign variable declarations a default value of “undefined” while placing any function declarations in memory.</span>

**It’s not until the** `Execution` **phase where the JavaScript engine starts running your code line by line and executing it.**

We can see this flow from `Creation` **phase to** `Execution` **phase** in the GIF **below.** 🠗🠗🠗🠗🠗🠗

<figure><img src="https://cdn-images-1.medium.com/max/800/0*QHJcijvusr0_rqAH.gif" class="graf-image" /></figure>During the `Creation` phase:

**The JavaScript engine said ‘let there be** `window` **and** `this`‘

> and there was `window` and `this`… and it was good

Once the `window` and `this` are created;

Variable declarations are assigned a default value of `undefined`

Any function declarations (`getUser`) are placed entirely into memory.

**Exaction Phase:**

Then once we enter the `Execution` phase, the JavaScript engine starts executing the code line by line and assigns the real values to the variables already living in memory.

------------------------------------------------------------------------

------------------------------------------------------------------------

### **Function-Scoped Variables**

<figure><img src="https://cdn-images-1.medium.com/max/800/1*blt2vI9_uDtV7_pM9Cclkg.png" class="graf-image" /></figure>Function scope means that parameters and variables defined in a function are visible everywhere within the function, but are not visible outside of the function.

Consider the next function that auto-executes, called IIFE.

    (function autoexecute() {
        let x = 1;
    })();

    console.log(x);
    //Uncaught ReferenceError: x is not defined

IIFE stands for Immediately Invoked Function Expression and is a function that runs immediately after its definition.

Variables declared with `var` have only function scope. Even more, variables declared with `var` are hoisted to the top of their scope. This way they can be accessed before being declared. Take a look at the code below:

    function doSomething(){
      console.log(x);
      var x = 1;
    }

    doSomething(); //undefined

This does not happen for `let`. A variable declared with `let` can be accessed only after its definition.

    function doSomething(){
      console.log(x);
      let x = 1;
    }

    doSomething();
    //Uncaught ReferenceError: x is not defined

A variable declared with `var` can be re-declared multiple times in the same scope. The following code is just fine:

    function doSomething(){
      var x = 1
      var x = 2;
      console.log(x);
    }

    doSomething();

Variables declared with `let` or `const` cannot be re-declared in the same scope:

    function doSomething(){
      let x = 1
      let x = 2;
    }
    //Uncaught SyntaxError: Identifier 'x' has already been declared

Maybe we don’t even have to care about this, as `var` has started to become obsolete.

-   <span id="504b">Only the var keyword creates function-scoped variables (however a var declared variable may be globally scoped if it is declared outside of a nested function in the global scope), this means our declared var keyword variable will be confined to the scope of our current function.</span>

Why you shouldn’t use var:

1.  <span id="491f">No error is thrown if you declare the same variable twice using var (conversely, both let and const will throw an error if a variable is declared twice)</span>
2.  <span id="b04e">Variables declared with var are not block scoped (although they are function scoped), while with let and const they are. This is important because what’s the point of block scoping if you’re not going to use it. So using var in this context would require a situation in which a variable declared inside a function would need to be used in the global scope. I’m not able to think of any situations where that would be absolutely necessary, but perhaps they exist.</span>

### REMEMBER:

### Var===🗑🚮👎🏽🤮

<figure><img src="https://cdn-images-1.medium.com/max/800/0*wseqGvDH8TpNBGq9" alt="My response to anyone who might comment in defense of using var" class="graf-image" /><figcaption><strong>My response to anyone who might comment in defense of using var</strong></figcaption></figure>Also on a more serious note… if you have var in your projects in 2021 …hiring managers who peek at your projects to see your code quality will assume it was copy pasted from someone else’s legacy code circa 2014.

<figure><img src="https://cdn-images-1.medium.com/max/800/0*KRoeNth4AXswt_9s.jpg" class="graf-image" /></figure>**Hoisting with function-scoped variables**

    function test() {
      // var hoistedVar;
      console.log(hoistedVar); // =>  undefined
      var hoistedVar = 10;
    }

-   <span id="b52d">Even though we initially declared & initialized our variable underneath the console.log var variables are “hoisted” to the top, but only in declaration (default value undefined until the exaction arrives at the line on which it was initialized.</span>

### Scope Spaced Repetition:

Scope is defined as which variables we currently have access to and where. So far in this course, we have mostly been working in `global` scope, in that we can access any variable we have created, anywhere in our code. There are a couple different levels of scope: `block` level scope is used in `if` statements and `for` loops. In `block` level scope, a variable declared using either `let` or `const` is only available within the statement or loop (like `i` in a `for` loop). Similarly, there is function scope, where `temperature` exists inside the function, but not elsewhere in your code file.

### More on hoisting:

#### source: <a href="https://blog.bitsrc.io/hoisting-in-modern-javascript-let-const-and-var-b290405adfda" class="markup--anchor markup--h4-anchor"><em>Hoisting in Modern JavaScript — let, const, and var</em></a>

    helloWorld();  // prints 'Hello World!' to the consolefunction helloWorld(){
      console.log('Hello World!');
    }

Function declarations are added to the memory during the compile stage, so we are able to access it in our code before the actual function declaration

When the JavaScript engine encounters a call to `helloWorld()`, it will look into the lexical environment, finds the function and will be able to execute it.

### Hoisting Function Expressions

Only function declarations are hoisted in JavaScript, function expressions are not hoisted. For example: this code won’t work.

    helloWorld();  // TypeError: helloWorld is not a functionvar helloWorld = function(){
      console.log('Hello World!');
    }

As JavaScript only hoist declarations, not initializations (assignments), so the `helloWorld `will be treated as a variable, not as a function. Because `helloWorld` is a `var` variable, so the engine will assign is the `undefined` value during hoisting.

So this code will work.

    var helloWorld = function(){
      console.log('Hello World!');  prints 'Hello World!'
    }helloWorld();

### Hoisting var variables:

Let’s look at some examples to understand hoisting in case of `var` variables.

    console.log(a); // outputs 'undefined'
    var a = 3;

We expected `3` but instead got `undefined`. Why?

Remember JavaScript only hoist declarations, not initializations*.* That is, during compile time, JavaScript only stores function and variable declarations in the memory, not their assignments (value).

**But why** `undefined`**?**

When JavaScript engine finds a `var` variable declaration during the compile phase, it will add that variable to the lexical environment and initialize it with `undefined` and later during the execution when it reaches the line where the actual assignment is done in the code, it will assign that value to the variable.

<a href="https://codeburst.io/js-demystified-03-scope-f841ecad5c23" class="markup--anchor markup--p-anchor">https://codeburst.io/js-demystified-03-scope-f841ecad5c23</a> is a really great article… skip down to Hoisting and Scope to pursue this topic further!

------------------------------------------------------------------------

### **Block-Scoped Variables**

Things that create block-scopes:

-   <span id="66e4">If Statements</span>
-   <span id="9a99">While Loops</span>
-   <span id="dc88">Switch Statements</span>
-   <span id="c5fb">For Loops</span>
-   <span id="089b">Curly Boiz **‘{}’ ….. anything between cury brackets is scoped to within those brackets.**</span>

#### **Properties of Const declared variables:**

-   <span id="2c52">**They are block-scoped like let.**</span>
-   <span id="3d0c">JS will enforce constants by raising an error if you try to change them.</span>
-   <span id="67b6">Constants that are assigned to <a href="https://bryanguner.medium.com/fundamental-javascript-concepts-you-should-understand-81c4d839b827" class="markup--anchor markup--li-anchor">Reference Types</a> are <a href="https://doesitmutate.xyz/" class="markup--anchor markup--li-anchor"><strong>mutable</strong></a></span>

**Hoisting with block-scoped variables**

-   <span id="329c">Unlike vars in function scopes,</span>
-   <span id="f15b">let and const in their block scopes **do not get their declarations hoisted.**</span>
-   <span id="a2f6">Instead they are not initialized until their definitions are evaluated instead of undefined we will get an error.</span>
-   <span id="f0c6">`Temporal Dead Zone`** : The time before a let or const variable is declared.**</span>

**Function Scope vs Block Scope**

-   <span id="1764">The downside of the flexibility of var is that it can easily overwrite previously declared variables.</span>
-   <span id="456f">The block-scope limitations of let and const were introduced to easily avoid accidentally overwriting variable values.</span>

### **Global Variables**

-   <span id="f3a2">Any variables declared without a declaration term will be considered `global scope`.</span>
-   <span id="fc02">Every time a variable is declared on the global scope, the change of collision increases.</span>
-   <span id="5c6a">Use the proper declarations to manage your code: Avoid being a sloppy programmer!</span>

<figure><img src="https://cdn-images-1.medium.com/max/800/0*hpZDzz--eVsA-3o7.png" class="graf-image" /></figure>Variables defined outside any function, block, or module scope have global scope. Variables in global scope can be accessed from everywhere in the application.

When a module system is enabled it’s harder to make global variables, but one can still do it. By defining a variable in HTML, outside any function, a global variable can be created:

When there is no module system in place, it is a lot easier to create global variables. A variable declared outside any function, in any file, is a global variable.

Global variables are available for the lifetime of the application.

Another way for creating a global variable is to use the `window` global object anywhere in the application:

    window.GLOBAL_DATA = { value: 1 };

At this point, the `GLOBAL_DATA` variable is visible everywhere.

    console.log(GLOBAL_DATA)

As you can imagine these practices are bad practices.

#### \*Module scope

Before modules, a variable declared outside any function was a global variable. In modules, a variable declared outside any function is hidden and not available to other modules unless it is explicitly exported.

Exporting makes a function or object available to other modules. In the next example, I export a function from the `sequence.js` module file:

    // in sequence.js
    export { sequence, toList, take };

Importing makes a function or object, from other modules, available to the current module.

    import { sequence, toList, toList } from "./sequence";

In a way, we can imagine a module as a self-executing function that takes the import data as inputs and returns the export data.

### Closures

<figure><img src="https://cdn-images-1.medium.com/max/800/0*r5JXVTIjV1nztgKN.jpg" class="graf-image" /></figure><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures" class="markup--anchor markup--p-anchor"><strong><em>Calculating Closures</em></strong></a>

-   <span id="46b0">**Closure** : The combination of a function and the lexical environment within which that function is declared.</span>
-   <span id="0323">**Use** : A closure is when an inner function uses, or changes, variables in an outer function.</span>
-   <span id="05be">Very important for creativity, flexibility, and security of your code.</span>
-   <span id="d71c">`Lexical Environment` : Consists of any variables available within the scope in which a closure was declared (local inner, outer, and global).</span>

### **Closures and Scope** Basic Closure Rules:

<figure><img src="https://cdn-images-1.medium.com/max/600/0*iyFQ5y0LysnsrvOc.png" class="graf-image" /></figure>-   <span id="cb9d">Closures have access to all variables in it’s lexical environment.</span>
-   <span id="f579">A closure will keep reference to all the variables when it was defined **even if the outer function has returned**.</span>

**Applications of Closures**

-   <span id="12de">**Private State**</span>
-   <span id="f3e5">JS does not have a way of declaring a function as exclusively private, however we can use closures to make a private state.</span>
-   <span id="dbf8">**Passing Arguments Implicitly**</span>
-   <span id="f07b">We can use closures to pass down arguments to helper functions.</span>

### OVERVIEW

Let’s look at the Window/Console in a browser/node environment. Type `window` to your chrome console. JavaScript is executed in this context, also known as the `global scope`.

There are two types of scope in javascript, `Global Vs. Local` and that this is important to understand in terms of a computer program written in JavaScript.

When a function is declared and created, a new `scope` is also created. Any variables declared within that function's scope will be `enclosed` in a lexical/private scope that belongs to that function. Also, it is important to remember that functions look `outward` for context. If some variable isn't defined in a function's scope, the function will look outside the scope chain and search for a variable being referenced in the outer scope. This is what closure is all about.

In it’s most simplest of forms this is a closure:

    const foo = 'bar';
    function returnFoo () {
      return foo;
    }
    returnFoo();
    // -> reaches outside its scope to find foo because it doesn't exist inside of return Foo's scope when foo is referenced.

The function body (code inside returnFoo) has access to the outside scope (code outside of returnFoo) and can access that ‘foo’ variable.

Let’s look at another example:

    const lastName = 'Bob';
    function greet() {
      const firstName = 'Jim';
      alert(`The name's ${lastName}, ${firstName} ${lastName}`);
    }
    console.log(lastName);

Not much different than the idea presented above, but the thought remains the same. When ‘greet’ is called, it has no context in its local scope of finding `lastName` so, it looks outside its scope to find it and use the `lastName` that is found there.

Let’s take this a step further. In the given examples, we’ve seen that we have created two environments for our code. The first would be the global environment where `lastName` and `greet` exist. The second would be the local environment where the alert function is called. Let's represent those two environments like this:

<figure><img src="https://cdn-images-1.medium.com/max/800/0*fpIwHvwpDYxatfE9.png" class="graf-image" /></figure>### What is a closure?

A closure is an inner function that has access to the outer (enclosing) function’s variables — scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables.

The inner function has access not only to the outer function’s variables, but also to the outer function’s parameters. Note that the inner function cannot call the outer function’s arguments object, however, even though it can call the outer function’s parameters directly.

You create a closure by adding a