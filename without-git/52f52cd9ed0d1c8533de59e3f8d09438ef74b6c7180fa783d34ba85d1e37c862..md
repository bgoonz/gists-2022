
Understanding Data Structures is helpful in all aspects of programming, you don’t need to have a particular use case where you’ll use a Tree or a Graph to have to consider learning about them. In fact, I don’t think I’ve ever implemented a proper Tree structure in my 15 years of software development, however, understanding how they work has helped me several times in the past.

The knowledge about them and about their structure and behavior can be extrapolated to other areas within our field. Say you have a Graph, and now think about how a microservice-base architecture can be described. Now look at the following image:

![](https://miro.medium.com/max/60/1*Bt9d7nUAUUflpQJCzxI1QQ.png?q=20)

![](https://miro.medium.com/max/1386/1*Bt9d7nUAUUflpQJCzxI1QQ.png)

See where I’m going with this? Even a weighted graph can still be considered as the representation of architecture, considering the weight of those edges as if it were the time it takes data to travel from one service to the other.

And the same could be said about the other structures we’ll be covering here, so even if you don’t feel like you’ll ever implement one of these in your day-to-day tasks, take the time to understand them, that knowledge might come in handy in the future.

And finally, a note about implementation: some of these structures can easily be represented by Arrays at its most basics, but you need to look a bit further in order to understand it’s full potential. A data structure is not just the way you structure your data, but also the logic associated with it. The way you insert data, what happens to it inside of it, and even the way you take data out of your structure. That, is where the real magic of data structures resides and the whole point for their existence. Otherwise, we would all be using Arrays for everything.

**Tip:** Use [**Bit**](https://bit.dev/) ([Github](https://github.com/teambit/bit)) to share, document, and manage reusable JS components from different projects. It’s a great way to increase code reuse, speed up development, and build apps that scale.

[Bit](https://bit.dev/) supports NodeJS, TypeScript, React, Vue, Angular, and many others.

[

![](https://miro.medium.com/max/1400/0*7fuDj6JzXnjBUn2V.gif)

](https://bit.dev/)

Example: exploring shared React components on [Bit.dev](https://bit.dev/)

If you need to handle a list of tasks that need to be executed in order of creation, you can take advantage of the inner workings of Queues. These are very basic structures in which you can insert elements into and take them out following the FIFO approach: First In First Out.

In other words, just like you would handle a normal queue waiting at the supermarket, the first person getting in the queue will be the first to be served.

![](https://miro.medium.com/max/1220/1*tR-bTyUa8bvdHTdOjnsTug.png)

As you can see from the diagram above, the structure itself is very simple, and the implementation itself is also quite straightforward, especially if you go with Arrays as a basic data structure.

The two main methods from this implementation are the `enqueue` and `dequeue` methods. With the first one, you can add elements to the queue while with the latter you remove them.

As you can see I went with an array for the basic data structure, because it greatly simplifies both methods. Enqueuing is just the same as pushing an element into the array and dequeuing is resolved with a simple call to `shift`, which removes the first element and it also returns it.

The generator function was added as an extra cherry on top to allow for operations such as the one shown below:

Other than the simple queue I’m showing you here, you can also find:

-   Priority queues, which have their elements internally sorted by a priority value.
-   Circular queues, which have their last element pointing to the first one.
-   And a Double Ended Queue, which allows you to add and remove elements both from the front and the back (something that, if you ask me, sounds like cheating!).

I’m adding stacks as second on the list because honestly, they look a lot like queues, so much so that sometimes they get confused with each other.

You can think of this data structure as a stack of books if you start putting one on top of the other, once you want to get one, you’ll have to remove all the books on top of it. This way of handling data is known as FILO, or First In, Last Out.

In other words, the first book you put on your table, will be the last one you’ll retrieve, considering you have to get all the ones on top of it first.

![](https://miro.medium.com/max/1068/1*8CLQiyyREi6olszpNr5w4A.png)

Stacks are useful for thing such as reversing the order of a list, since you can traverse your list from first to last and store each element into a stack, then you’ll start popping them out (taking the out following the FILO pattern) and the last one out will the original list’s first element.

Another interesting use case is one we’ve seen countless times without actually realizing it: undo. If you want to undo something, you’re either trying to undo your last action or you’re trying to undo several actions in order to undo one that happened a while ago. In either case, you’re literally popping elements off of a stack of actions.

Let’s first look at an undo stack example:

You can see how we’re using a custom stack, one that makes use of a traditional one but also keeps track of a parallel value. The operations are represented as classes, all of them having two methods: `apply` which makes the operation effective and `undo` which represents the opposite operation. Our custom stack also has the `undo` method, which takes advantage of the stack structure where all operations are stored and is capable of undoing their effects, one by one. The result of executing the above code is:

Current value:  4  
Final value:  1

And as you’ve probably guessed, the implementation of the stack is almost identical to the queue class from before:

Can you spot the only difference? Check outline 27, luckily for us, the Array class from JavaScript also provides us with the `pop` method, which does what we’d expect: it removes the last added item on the array and returns it.

Stacks and Queues are cool, but let’s look at something a bit more complex, yet a lot more powerful and versatile as well, shall we?

There is **a lot of theory** behind Trees to define what they are, how they’re formed and for what they can be used. I’m not going to get into that, because honestly, if you want theory, just hit [Wikipedia](https://en.wikipedia.org/wiki/Tree_(data_structure)) or one of the many books that cover them in detail.

Instead, I’m going to give you the abbreviated version so you get a taste of what these bad boys can do, and if you end up liking them, you can digg as deep as you’d like.

A tree is basically a recursively defined structure formed by a parent node and a number of child nodes connected to one parent. Like I said, this is a recursive definition in the sense that each of those child nodes can at the same time, be parent nodes to other children.

![](https://miro.medium.com/max/1400/1*jWPB6pgyUvkqNlXVBhWc5w.png)

Take the above diagram shows how the tree grows, there are a few interesting things to note:

1.  Sibling nodes (i.e nodes with the same parent) don’t connect with each other.
2.  The tree is normally represented growing downwards (as opposed to a normal tree growing up).
3.  Nodes can’t be connected to themselves (I know, it sounds weird but wait until we get to graphs).

Just to clarify the nomenclature for the future, the different sections of the Tree are known as:

-   **Root node / Parent Node:** A node with children under it.
-   **Leaf node**: A node with no children nodes associated with it.
-   **Edge**: The link between two nodes.

![](https://miro.medium.com/max/762/1*upQQ-BSwBiztey0CoR-LFQ.png)

The anatomy of a tree

And from the diagram below, we can also define a few more things:

-   **Path**: A list of nodes required to go from the root node to a destination node.
-   **Height of a tree**: The amount of nodes forming the largest path between the root node and the furthest leaf node.

That being said, there are several different types of trees depending on the logic associated with the data insertion and extraction from the structure:

-   **Binary Trees**: these are trees in which parent nodes can only have up to two children (hence the binary). One potential use case for this type of tree is compression algorithms. They’re also used to create Binary Search Trees.
-   **Binary Search Trees**: a special kind of BT, when inserting an element into the tree, the logic will compare it with the root node’s value and if its less than, it’ll go check on the left child, otherwise it’ll check on the right one. This logic is repeated until you either find a leaf node and link the new value to it as a child, or find an empty spot for a child of a parent. The classic use case for these is to keep a sorted structure of elements with very little effort.
-   **Depth First Search (DFS):** This is a way of combing through a tree looking for something. The way it works is you first traverse the entire left side first and then backtrack to the last visited parent and move on to the right sub-tree.

![](https://miro.medium.com/max/578/1*jLUMB6y76C1CBWVJQexYjQ.png)

DFS Traversal order

Look at the above diagram, if you were to print the value of each node when you get to it, you’d get: A->B->C->D->E. The order of nodes is determined by the DFS method:

1\. Print A  
2\. Go to the left child  
3\. Print B  
4\. No more children, so backtrack to A  
5\. Go to the right child  
6\. Print C  
7\. Go left  
8\. Print D  
9\. No children, so back to C  
10\. Go right  
11\. Print E  
12\. End

You can also traverse it in the reverse order, going right first and then left. This algorithm can be used both with trees and graphs to explore topological representations (amongst other use cases), such as a maze and by trying to find the path between the root node (the entrance) and the one representing the exit.

I know this sounds like I lot, but let me show you an example of how you’d implement a Binary Search Tree (one of my favorite kinds of trees) to see how they’re not that complex and are actually very useful.

But first, let me show you how you’d use our tree structure so you get a better idea on what we’re implementing:

That’s the benefit of a sort on insertion structure, you’re sorting while adding the numbers, so when you want to print them, it’s just a matter of traversing the structure. Look at the implementation:

I know it’s a long wall of code, but the longest and most complex method here is the `add` method. Which is mostly comprised of a `do...while` loop that traverses the tree looking for an empty space to place the new value. There are other operations that you might want to implement such as a `find` or a `remove` method.

The `inorder` method is just a quick recursive implementation of the traversing order (left, then center, then right). You could potentially traverse it in reverse order (or postorder) by switching the left and right children.

Let’s now move on to the older brother of trees: _graphs_.

A graph is a less restricted version of a tree in the sense that there aren’t parents and children, rather any node can be related to any other (including themselves!).

![](https://miro.medium.com/max/562/1*YAJqqu16iG18CLERzhELYQ.png)

Sample graph

Graphs are very versatile since they can be used to represent almost any scenario in which entities are connected with each other. And I’m talking about use cases that range from network layouts to microservice-based architectures, to real-world maps, to anything you can really imagine.

This is so much so, that there are whole database engines that are based around the concept of graphs ([Neo4J](https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiF5bnanOjqAhXEstUKHeVlAHsYABAAGgJ3cw&ohost=www.google.com&cid=CAESQOD2uwLTgekpW-jYCRVnrNcOOEYFP1-DYticn9Wfx201FhI-84m75edTWmxeiP9E6gw-wbHMptyRWpHvS1yNAps&sig=AOD64_2x8irItnfqv4yD7IHunpBrt2bkgg&q&adurl&ved=2ahUKEwj44bHanOjqAhUZ4OAKHWhpCzkQ0Qx6BAgWEAE) for instance is a very popular one). All concepts from Trees we just covered such as edges, nodes, paths and so on are still valid here.

Here is a quick and dirty implementation of a Graph in JavaScript, including a method showing how to implement a Depth First Search traversal (check the Trees section to understand what that is).

Essentially, each Node has a list of “links”, which represent the relationship between two nodes. And in fact, as an added bonus, these are weighted links, which mean you can add value to the relationship representing whatever you want (for instance, the ms delay of a network connection, the amount of traffic between two locations, or literally anything you’d like).

The `dfs` the method will take care of traversing our graph making sure we only visit each node once. Here is an example of how to use it:

The above example represents the graph shown at the start of this section, including G’s relationship with itself! The output should be something like this:

A  
B  
D  
E  
F  
G  
C

In other words, every node visited, only once. You can do more interesting things with Graphs, such as implementing [Dijkstra](https://medium.com/@jpena91/dijkstras-algorithm-finding-the-shortest-path-in-javascript-a7247afe93b2)’s algorithm to find the shortest path between two nodes or going the AI route and [implement a neural network](https://towardsdatascience.com/a-gentle-introduction-to-graph-neural-network-basics-deepwalk-and-graphsage-db5d540d50b3). Imagination is the limit with Graphs, so don’t right them off just yet, give them a chance.

The last data structure I’ll be covering in this article is Hash Map, essentially it allows you to store key-value pairs and retrieve them farely quickly (one would say it has an order of complexity of O(1) best case scenario which is amazing).

Consider this: you have 300 key-value pairs you need to store in memory, you can easily resort to an array for that, the problem? If you need a particular one to be retrieved, you’ll need to traverse the entire array looking for it (this would be worst-case scenario considering the element you’re looking for is the last one). Of course, 300 elements is not a big deal, but consider a theoretical use case where you’d need to look for a single element inside a list of 1.000.000 elements. That would take a while, and if the base number keeps growing, arrays are less and less useful in this case.

Hash maps on the other hand, allow you to create a structure which you can use where the key can be utilized to quickly access the value in constant time. In JavaScript, implementing a hash map is considerably easy given that we have object literals which we can use to add random properties (i.e our keys). Here is a quick implementation for a hashmap that allows numeric keys to be used.

The output from the above script is:

HashMap {  
  map: { '0': \[ 'hello' \], '1': \[ 'world', 'this is a string' \] }  
}

Notice how both `"world"` and `"this is a string"` are associated to the same key, this is what is known as a hash collision. My `hash` method is simply doing a mod 10, to make sure we’re keeping up to 10 keys at any given time, no matter what the original key is. This is helpful if you have a limited amount of memory or for some reason need to keep a tight control over the keys. The way you implement your hashing method will determine how effective your hash map ends up being.

If well implemented this structure is so efficient that it is widely used in scenarios such as database indexing (normally you set fields as indexes when you want a quick lookup operation) and even cache implementations, allowing, again, quick lookup operations in order to retrieve the cached content. As you’ve probably guessed, this is a great structure if you’re looking to have quick and repeated lookups.

Understanding data structures whether you use them on your day-to-day tasks or not is very important because they open up your eyes at patterns that you’re already working with, even if you don’t know it.

Have some fun playing around with the implementations above and try to create your own, maybe in the process you’ll come up with solutions to problems you already have and don’t know how to solve!

Which one is _your_ favorite data structure? Leave a comment down below and share it with everyone!

_Until then, see you at the next one!_
