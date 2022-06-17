\
Search 7,000+ tutorials

[![freeCodeCamp.org](https://www.freecodecamp.org/news/content/images/2019/11/fcc_primary_large_24X210.svg)](https://www.freecodecamp.org/news)

[Forum](https://forum.freecodecamp.org/) [Donate](https://www.freecodecamp.org/donate/)

[

Learn to code --- free 3,000-hour curriculum

](https://www.freecodecamp.org/)

OCTOBER 25, 2021/[#REACT](https://www.freecodecamp.org/news/tag/react/)

React Hooks Tutorial -- useState, useEffect, and How to Create Custom Hooks
==========================================================================

![Ihechikara Vincent Abba](https://www.freecodecamp.org/news/content/images/size/w100/2021/10/Ihechikara.png)

[Ihechikara Vincent Abba](https://www.freecodecamp.org/news/author/ihechikara/)

![React Hooks Tutorial -- useState, useEffect, and How to Create Custom Hooks](https://www.freecodecamp.org/news/content/images/size/w2000/2021/10/g199.png)

Hooks were first introduced in React 16.8. And they're great because they let you use more of React's features -- like managing your component's state, or performing an after effect when certain changes occur in state(s) without writing a class.

In this article, you will learn how to use Hooks in React and how to create your own custom Hooks. Just keep in mind that you can use hooks solely for functional components.

What is the useState Hook?
--------------------------

The state of your application is bound to change at some point. This could be the value of a variable, an object, or whatever type of data exists in your component.

To make it possible to have the changes reflected in the DOM, we have to use a React hook called `useState`. It looks like this:

```
import { useState } from "react";

function App() {
  const [name, setName] = useState("Ihechikara");
  const changeName = () => {
    setName("Chikara");
  };

  return (
    <div>
      <p>My name is {name}</p>
      <button onClick={changeName}> Click me </button>
    </div>
  );
}

export default App;

```

Let's look a bit more closely at what's going on in the code above.

```
import { useState } from "react";
```

To be able to use this hook, you have to import the `useState` hook from React. We are using a functional component called `app`.

```
const [name, setName] = useState("Ihechikara");
```

After that, you have to create your state and give it an initial value (or initial state) which is "Ihechikara". The state variable is called `name`, and `setName` is the function for updating its value.

Having a good understanding of some of the ES6 features will help you grasp the basic functionalities of React. Above, we used the destructuring assignment to assign an initial name value to the state in `useState("Ihechikara")`.

```
return (
    <div>
      <p>My name is {name}</p>
      <button onClick={changeName}> Click me </button>
    </div>
  );
}

```

Next, the DOM has a paragraph containing the name variable and a button which fires a function when clicked. The `changeName()` function calls the `setName()` function which then changes the value of the name variable to the value passed in to the `setName()` function.

The values of your state must not be hard coded. In the next section, you will see how to use the `useState` hook in forms.

For React beginners, note that you create your functions and variables before the return statement.

How to Use the useState Hook in Forms
-------------------------------------

This section will help you understand how to create state values for your forms and update them when you need to do so. The process is not so different from what we saw in the previous section.

As always, import the `useState` hook:

```
import { useState } from "react";

```

We will create the initial state like we did before. But in this case it is going to be an empty string since we are dealing with the value of an input element. Hard coding the value means the input will have that value whenever the page is reloaded. That is:

```
  const [name, setName] = useState("");

```

Now that we've created the state, let's create the input element in the DOM and assign the name variable as its initial value. It looks like this:

```
return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />
        <p>{name}</p>
      </form>
    </div>
  );
```

You will notice that we didn't create a function above the return statement to update the value of the state -- but it is still okay if you decide to use that method.

Here, we use the `onChange` event listener which waits for any value change in the input field. Whenever there is a change, an anonymous function (which takes in the event object as a parameter) is fired which in turn calls the `setName()` function to update the name variable with the current value of the input field.

Here's what the final code looks like:

```
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />
        <p>{name}</p>
      </form>
    </div>
  );
}

export default App;

```

What is the useEffect Hook?
---------------------------

The Effect Hook, just like the name implies, carries out an effect each time there is a state change. By default, it runs after the first render and every time the state is updated.

In the example below, we create a state variable `count` with an initial value of zero. A button in the DOM will increase the value of this variable by one every time it is clicked. The useEffect hook will run every time the `count` variable changes and then log out some information to the console.

```
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`You have clicked the button ${count} times`)
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;

```

The first line of code where you import the required hook(s) is always important if you are going to "hook" into this React feature. We imported the two hooks we used above:

```
import React, { useState, useEffect } from "react";

```

Note that you can use the useEffect hook to achieve various effects like fetching data from an external API (which you will see in another section of this article), changing the DOM in your component, and so on.

### useEffect Dependencies

But what happens if you want your effect to run only after the first render, or if you have multiple states and only want an after effect attached to one of the states?

We can do this by using a dependency array which is passed in as a second argument in the `useEffect` hook.

#### How to run an effect once

For the first example, we'll pass in an array that allows the useEffect hook to run only once. Here's an example of how that works:

```
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`You have clicked the button ${count} times`)
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;

```

The code above is the same as in the previous section, except that the useEffect hook accepts an empty array `[]` as a second argument. When we leave the array empty, the effect will only run once irrespective of the changes to the state it is attached to.

#### How to attach an effect to a particular state

```
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`You have clicked the first button ${count} times`);
  }, [count]);

  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log(`You have clicked the second button ${count2} times`)
  }, [count2]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount2(count2 + 1)}>Click me</button>
    </div>
  );
}

export default App;

```

In the code above, we created two states and two useEffect hooks. Each state has an after effect attached to it by passing the name of the state `[count]` and `[count2]` to the corresponding useEffect array dependency.

So when the state of `count` changes, the useEffect hook responsible for watching these changes will carry out any after effect assigned to it. Same applies to `count2`.

How to Create Your Own Hooks
----------------------------

Now that you have seen some of the built-in hooks in React (check the [documentation](https://reactjs.org/docs/hooks-reference.html) to see more hooks), it is time to create our own custom hook.

There are lots of possibilities for what your hook can do. In this section, we will create a hook that fetches data from an external API and outputs the data to the DOM. This saves you the stress of recreating the same logic over and over again across different components.

### Step 1 -- Create your file

When creating a new file for a custom hook, always make sure the name of the file starts with "use". I will call mine `useFetchData.js`.

### Step 2 -- Create the hook's functionalities

As stated before, we'll use this hook to fetch data from external APIs. It is going to be dynamic so nothing has to be hard coded. Here's how we'll do that:

```
import { useState, useEffect} from 'react'

function useFetchData(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(`Error: ${err}`));
    }, [url]);

    return { data };
}

export default useFetchData

```

To explain what happened above:

-   We import the hooks: `import { useState, useEffect} from 'react'`.
-   We create a state to hold the data that will be returned -- the initial state will be null: `const [data, setData] = useState(null);`. The data returned will update the value of the `data` variable using the `setData()` function.
-   We create an effect that runs on first render and every time the `url` parameter changes:

```
useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(`Error: ${err}`));
    }, [url]);
```

-   We return the data variable: `return { data };`

### Step 3 -- Create a new file and import the custom hook

So we've created our custom hook. Now let's create a new component and see how we can use the `useFetchData` hook in it:

```
import useFetchData from './useFetchData'

function Users() {
    const { data } = useFetchData("https://api.github.com/users");

  return (
      <div>
          {data && (
            data.map((user) =>(
                <div className="text-white" key={user.id}>
                    <h1> {user.login} </h1>
                    <p> { user.type } </p>
                </div>
            ))
          )}
      </div>
  )
}

export default Users;
```

Let's break it down:

-   We named the component `Users.js` because it will be used for fetching user data from the GitHub API (it can be any API).
-   We imported a custom hook: `import useFetchData from './useFetchData'`.
-   We referenced the hook before the return statement and passed in the URL: `const { data } = useFetchData("https://api.github.com/users");`. An API request will be sent to whatever URL you pass in.
-   Using the `&&` operator, the DOM will only get updated when the data variable has been updated with data from the API request -- that is, when `data != null`.
-   We looped through the data returned and output it to the DOM.

Conclusion
----------

If you have followed up to this point then you should have a good understanding of what hooks are in React, how to use them, and how to create your own custom Hooks. And the best way to fully understand this is to practice so don't just read through.

This article covers the core areas of hooks, but it won't teach you all there is to know about hooks. So make sure you check out the [React JS documentation](https://reactjs.org/docs/hooks-intro.html) so you can learn more about them.