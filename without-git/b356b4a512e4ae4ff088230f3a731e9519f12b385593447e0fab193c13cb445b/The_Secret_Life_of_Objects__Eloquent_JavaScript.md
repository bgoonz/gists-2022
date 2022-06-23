[◀](https://eloquentjavascript.net/05_higher_order.html "previous chapter") [◆](https://eloquentjavascript.net/index.html "cover") [▶](https://eloquentjavascript.net/07_robot.html "next chapter")

> [](https://eloquentjavascript.net/06_object.html#p_gDFRhOpA5B)An abstract data type is realized by writing a special kind of program \[…\] which defines the type in terms of the operations which can be performed on it.

![Picture of a rabbit with its proto-rabbit](https://eloquentjavascript.net/img/chapter_picture_6.jpg)

[](https://eloquentjavascript.net/06_object.html#p_KkunxYMaeO)[Chapter 4](https://eloquentjavascript.net/04_data.html) introduced JavaScript’s objects. In programming culture, we have a thing called _object-oriented programming_, a set of techniques that use objects (and related concepts) as the central principle of program organization.

[](https://eloquentjavascript.net/06_object.html#p_iS8mjYhuYY)Though no one really agrees on its precise definition, object-oriented programming has shaped the design of many programming languages, including JavaScript. This chapter will describe the way these ideas can be applied in JavaScript.

## [](https://eloquentjavascript.net/06_object.html#h_hn18MBjoh2)Encapsulation

[](https://eloquentjavascript.net/06_object.html#p_76wqEvwMj/)The core idea in object-oriented programming is to divide programs into smaller pieces and make each piece responsible for managing its own state.

[](https://eloquentjavascript.net/06_object.html#p_Ww3ymqEfW3)This way, some knowledge about the way a piece of the program works can be kept _local_ to that piece. Someone working on the rest of the program does not have to remember or even be aware of that knowledge. Whenever these local details change, only the code directly around it needs to be updated.

[](https://eloquentjavascript.net/06_object.html#p_m1XIFUcUIg)Different pieces of such a program interact with each other through _interfaces_, limited sets of functions or bindings that provide useful functionality at a more abstract level, hiding their precise implementation.

[](https://eloquentjavascript.net/06_object.html#p_n3o8Ctd3cn)Such program pieces are modeled using objects. Their interface consists of a specific set of methods and properties. Properties that are part of the interface are called _public_. The others, which outside code should not be touching, are called _private_.

[](https://eloquentjavascript.net/06_object.html#p_RExXHtzJn1)Many languages provide a way to distinguish public and private properties and prevent outside code from accessing the private ones altogether. JavaScript, once again taking the minimalist approach, does not—not yet at least. There is work underway to add this to the language.

[](https://eloquentjavascript.net/06_object.html#p_h9lEzfGlTT)Even though the language doesn’t have this distinction built in, JavaScript programmers _are_ successfully using this idea. Typically, the available interface is described in documentation or comments. It is also common to put an underscore (`_`) character at the start of property names to indicate that those properties are private.

[](https://eloquentjavascript.net/06_object.html#p_ysFjuxKxY0)Separating interface from implementation is a great idea. It is usually called _encapsulation_.

## [](https://eloquentjavascript.net/06_object.html#h_fkrGgDyRWc)Methods

[](https://eloquentjavascript.net/06_object.html#p_DKj01h8Gzf)Methods are nothing more than properties that hold function values. This is a simple method:

edit & run code by clicking it

[](https://eloquentjavascript.net/06_object.html#c_BYfVVcFY2P)let rabbit \= {};
rabbit.speak \= function(line) {
  console.log(\`The rabbit says '${line}'\`);
};

rabbit.speak("I'm alive.");

[](https://eloquentjavascript.net/06_object.html#p_N+6e0UGvFo)Usually a method needs to do something with the object it was called on. When a function is called as a method—looked up as a property and immediately called, as in `object.method()`—the binding called `this` in its body automatically points at the object that it was called on.

[](https://eloquentjavascript.net/06_object.html#c_cXuIwPt+3C)function speak(line) {
  console.log(\`The ${this.type} rabbit says '${line}'\`);
}
let whiteRabbit \= {type: "white", speak};
let hungryRabbit \= {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whiskers, " +
                  "how late it's getting!");

hungryRabbit.speak("I could use a carrot right now.");

[](https://eloquentjavascript.net/06_object.html#p_llBwR5t6LB)You can think of `this` as an extra parameter that is passed in a different way. If you want to pass it explicitly, you can use a function’s `call` method, which takes the `this` value as its first argument and treats further arguments as normal parameters.

[](https://eloquentjavascript.net/06_object.html#c_9lDr0S2nEw)speak.call(hungryRabbit, "Burp!");

[](https://eloquentjavascript.net/06_object.html#p_8ZeOAlGKXe)Since each function has its own `this` binding, whose value depends on the way it is called, you cannot refer to the `this` of the wrapping scope in a regular function defined with the `function` keyword.

[](https://eloquentjavascript.net/06_object.html#p_C4AqzW0fAV)Arrow functions are different—they do not bind their own `this` but can see the `this` binding of the scope around them. Thus, you can do something like the following code, which references `this` from inside a local function:

[](https://eloquentjavascript.net/06_object.html#c_wg++tcauWw)function normalize() {
  console.log(this.coords.map(n \=> n / this.length));
}
normalize.call({coords: \[0, 2, 3\], length: 5});

[](https://eloquentjavascript.net/06_object.html#p_YkWiHcMuVP)If I had written the argument to `map` using the `function` keyword, the code wouldn’t work.

## [](https://eloquentjavascript.net/06_object.html#h_SumMlRB7yn)Prototypes

[](https://eloquentjavascript.net/06_object.html#p_hi1TWnD/2p)Watch closely.

[](https://eloquentjavascript.net/06_object.html#c_P0GVdA5c8J)let empty \= {};
console.log(empty.toString);

console.log(empty.toString());

[](https://eloquentjavascript.net/06_object.html#p_NUxqIXvg/G)I pulled a property out of an empty object. Magic!

[](https://eloquentjavascript.net/06_object.html#p_bJubL+gx0p)Well, not really. I have simply been withholding information about the way JavaScript objects work. In addition to their set of properties, most objects also have a _prototype_. A prototype is another object that is used as a fallback source of properties. When an object gets a request for a property that it does not have, its prototype will be searched for the property, then the prototype’s prototype, and so on.

[](https://eloquentjavascript.net/06_object.html#p_XPuG8mFwbT)So who is the prototype of that empty object? It is the great ancestral prototype, the entity behind almost all objects, `Object.prototype`.

[](https://eloquentjavascript.net/06_object.html#c_7Q/HaNra3M)console.log(Object.getPrototypeOf({}) \==
            Object.prototype);

console.log(Object.getPrototypeOf(Object.prototype));

[](https://eloquentjavascript.net/06_object.html#p_GfVMu4b4D+)As you guess, `Object.getPrototypeOf` returns the prototype of an object.

[](https://eloquentjavascript.net/06_object.html#p_4S0XbM8aBm)The prototype relations of JavaScript objects form a tree-shaped structure, and at the root of this structure sits `Object.prototype`. It provides a few methods that show up in all objects, such as `toString`, which converts an object to a string representation.

[](https://eloquentjavascript.net/06_object.html#p_j+MLWf3JXr)Many objects don’t directly have `Object.prototype` as their prototype but instead have another object that provides a different set of default properties. Functions derive from `Function.prototype`, and arrays derive from `Array.prototype`.

[](https://eloquentjavascript.net/06_object.html#c_NgntUaXZ1S)console.log(Object.getPrototypeOf(Math.max) \==
            Function.prototype);

console.log(Object.getPrototypeOf(\[\]) \==
            Array.prototype);

[](https://eloquentjavascript.net/06_object.html#p_1fIXMD62Nu)Such a prototype object will itself have a prototype, often `Object.prototype`, so that it still indirectly provides methods like `toString`.

[](https://eloquentjavascript.net/06_object.html#p_H2XhzSHHJP)You can use `Object.create` to create an object with a specific prototype.

[](https://eloquentjavascript.net/06_object.html#c_gSGrvGTpkW)let protoRabbit \= {
  speak(line) {
    console.log(\`The ${this.type} rabbit says '${line}'\`);
  }
};
let killerRabbit \= Object.create(protoRabbit);
killerRabbit.type \= "killer";
killerRabbit.speak("SKREEEE!");

[](https://eloquentjavascript.net/06_object.html#p_eBm7AuQUBb)A property like `speak(line)` in an object expression is a shorthand way of defining a method. It creates a property called `speak` and gives it a function as its value.

[](https://eloquentjavascript.net/06_object.html#p_y8kzFoQw1W)The “proto” rabbit acts as a container for the properties that are shared by all rabbits. An individual rabbit object, like the killer rabbit, contains properties that apply only to itself—in this case its type—and derives shared properties from its prototype.

## [](https://eloquentjavascript.net/06_object.html#h_7RhGr+474h)Classes

[](https://eloquentjavascript.net/06_object.html#p_iYbDLfqSFW)JavaScript’s prototype system can be interpreted as a somewhat informal take on an object-oriented concept called _classes_. A class defines the shape of a type of object—what methods and properties it has. Such an object is called an _instance_ of the class.

[](https://eloquentjavascript.net/06_object.html#p_GhnffIpINq)Prototypes are useful for defining properties for which all instances of a class share the same value, such as methods. Properties that differ per instance, such as our rabbits’ `type` property, need to be stored directly in the objects themselves.

[](https://eloquentjavascript.net/06_object.html#p_hflVCtYTKN)So to create an instance of a given class, you have to make an object that derives from the proper prototype, but you _also_ have to make sure it, itself, has the properties that instances of this class are supposed to have. This is what a _constructor_ function does.

[](https://eloquentjavascript.net/06_object.html#c_oOKUeIzSVa)function makeRabbit(type) {
  let rabbit \= Object.create(protoRabbit);
  rabbit.type \= type;
  return rabbit;
}

[](https://eloquentjavascript.net/06_object.html#p_j8irpNziDb)JavaScript provides a way to make defining this type of function easier. If you put the keyword `new` in front of a function call, the function is treated as a constructor. This means that an object with the right prototype is automatically created, bound to `this` in the function, and returned at the end of the function.

[](https://eloquentjavascript.net/06_object.html#p_svyxVljkeg)The prototype object used when constructing objects is found by taking the `prototype` property of the constructor function.

[](https://eloquentjavascript.net/06_object.html#c_p+u3OtMv8K)function Rabbit(type) {
  this.type \= type;
}
Rabbit.prototype.speak \= function(line) {
  console.log(\`The ${this.type} rabbit says '${line}'\`);
};

let weirdRabbit \= new Rabbit("weird");

[](https://eloquentjavascript.net/06_object.html#p_IZA8w6crnz)Constructors (all functions, in fact) automatically get a property named `prototype`, which by default holds a plain, empty object that derives from `Object.prototype`. You can overwrite it with a new object if you want. Or you can add properties to the existing object, as the example does.

[](https://eloquentjavascript.net/06_object.html#p_DJG7BO1oTU)By convention, the names of constructors are capitalized so that they can easily be distinguished from other functions.

[](https://eloquentjavascript.net/06_object.html#p_9bg1buEAma)It is important to understand the distinction between the way a prototype is associated with a constructor (through its `prototype` property) and the way objects _have_ a prototype (which can be found with `Object.getPrototypeOf`). The actual prototype of a constructor is `Function.prototype` since constructors are functions. Its `prototype` _property_ holds the prototype used for instances created through it.

[](https://eloquentjavascript.net/06_object.html#c_KDYP9dCWfS)console.log(Object.getPrototypeOf(Rabbit) \==
            Function.prototype);

console.log(Object.getPrototypeOf(weirdRabbit) \==
            Rabbit.prototype);

## [](https://eloquentjavascript.net/06_object.html#h_hPv1gHC33s)Class notation

[](https://eloquentjavascript.net/06_object.html#p_T5Ghz5me/w)So JavaScript classes are constructor functions with a prototype property. That is how they work, and until 2015, that was how you had to write them. These days, we have a less awkward notation.

[](https://eloquentjavascript.net/06_object.html#c_kqKA+SZ6vS)class Rabbit {
  constructor(type) {
    this.type \= type;
  }
  speak(line) {
    console.log(\`The ${this.type} rabbit says '${line}'\`);
  }
}

let killerRabbit \= new Rabbit("killer");
let blackRabbit \= new Rabbit("black");

[](https://eloquentjavascript.net/06_object.html#p_wpM2aH78Jp)The `class` keyword starts a class declaration, which allows us to define a constructor and a set of methods all in a single place. Any number of methods may be written inside the declaration’s braces. The one named `constructor` is treated specially. It provides the actual constructor function, which will be bound to the name `Rabbit`. The others are packaged into that constructor’s prototype. Thus, the earlier class declaration is equivalent to the constructor definition from the previous section. It just looks nicer.

[](https://eloquentjavascript.net/06_object.html#p_rJ0WbDXCuo)Class declarations currently allow only _methods_—properties that hold functions—to be added to the prototype. This can be somewhat inconvenient when you want to save a non-function value in there. The next version of the language will probably improve this. For now, you can create such properties by directly manipulating the prototype after you’ve defined the class.

[](https://eloquentjavascript.net/06_object.html#p_pp17mMu8If)Like `function`, `class` can be used both in statements and in expressions. When used as an expression, it doesn’t define a binding but just produces the constructor as a value. You are allowed to omit the class name in a class expression.

[](https://eloquentjavascript.net/06_object.html#c_79re+GWcTJ)let object \= new class { getWord() { return "hello"; } };
console.log(object.getWord());

## [](https://eloquentjavascript.net/06_object.html#h_oUlUep3Os8)Overriding derived properties

[](https://eloquentjavascript.net/06_object.html#p_Xbxf2Ooo0z)When you add a property to an object, whether it is present in the prototype or not, the property is added to the object _itself_. If there was already a property with the same name in the prototype, this property will no longer affect the object, as it is now hidden behind the object’s own property.

[](https://eloquentjavascript.net/06_object.html#c_vja6JbO0si)Rabbit.prototype.teeth \= "small";
console.log(killerRabbit.teeth);

killerRabbit.teeth \= "long, sharp, and bloody";
console.log(killerRabbit.teeth);

console.log(blackRabbit.teeth);

console.log(Rabbit.prototype.teeth);

[](https://eloquentjavascript.net/06_object.html#p_HM5YtS3KgJ)The following diagram sketches the situation after this code has run. The `Rabbit` and `Object` prototypes lie behind `killerRabbit` as a kind of backdrop, where properties that are not found in the object itself can be looked up.

![Rabbit object prototype schema](https://eloquentjavascript.net/img/rabbits.svg)

[](https://eloquentjavascript.net/06_object.html#p_or3/lz1DV8)Overriding properties that exist in a prototype can be a useful thing to do. As the rabbit teeth example shows, overriding can be used to express exceptional properties in instances of a more generic class of objects, while letting the nonexceptional objects take a standard value from their prototype.

[](https://eloquentjavascript.net/06_object.html#p_GIhnbh3MdO)Overriding is also used to give the standard function and array prototypes a different `toString` method than the basic object prototype.

[](https://eloquentjavascript.net/06_object.html#c_DrIRvUgeOD)console.log(Array.prototype.toString \==
            Object.prototype.toString);

console.log(\[1, 2\].toString());

[](https://eloquentjavascript.net/06_object.html#p_FYf2A2jS65)Calling `toString` on an array gives a result similar to calling `.join(",")` on it—it puts commas between the values in the array. Directly calling `Object.prototype.toString` with an array produces a different string. That function doesn’t know about arrays, so it simply puts the word _object_ and the name of the type between square brackets.

[](https://eloquentjavascript.net/06_object.html#c_XpqFUrDFJE)console.log(Object.prototype.toString.call(\[1, 2\]));

## [](https://eloquentjavascript.net/06_object.html#h_gAcc11EHzV)Maps

[](https://eloquentjavascript.net/06_object.html#p_5v6QzULS7C)We saw the word _map_ used in the [previous chapter](https://eloquentjavascript.net/05_higher_order.html#map) for an operation that transforms a data structure by applying a function to its elements. Confusing as it is, in programming the same word is also used for a related but rather different thing.

[](https://eloquentjavascript.net/06_object.html#p_++bw9zDmtH)A _map_ (noun) is a data structure that associates values (the keys) with other values. For example, you might want to map names to ages. It is possible to use objects for this.

[](https://eloquentjavascript.net/06_object.html#c_Wu6a8ObZI0)let ages \= {
  Boris: 39,
  Liang: 22,
  Júlia: 62
};

console.log(\`Júlia is ${ages\["Júlia"\]}\`);

console.log("Is Jack's age known?", "Jack" in ages);

console.log("Is toString's age known?", "toString" in ages);

[](https://eloquentjavascript.net/06_object.html#p_EQqc7pcOKT)Here, the object’s property names are the people’s names, and the property values are their ages. But we certainly didn’t list anybody named toString in our map. Yet, because plain objects derive from `Object.prototype`, it looks like the property is there.

[](https://eloquentjavascript.net/06_object.html#p_enf1/9ItBM)As such, using plain objects as maps is dangerous. There are several possible ways to avoid this problem. First, it is possible to create objects with _no_ prototype. If you pass `null` to `Object.create`, the resulting object will not derive from `Object.prototype` and can safely be used as a map.

[](https://eloquentjavascript.net/06_object.html#c_AkRQLQc4AG)console.log("toString" in Object.create(null));

[](https://eloquentjavascript.net/06_object.html#p_jGC2iO9E1x)Object property names must be strings. If you need a map whose keys can’t easily be converted to strings—such as objects—you cannot use an object as your map.

[](https://eloquentjavascript.net/06_object.html#p_nIsq9E5wmZ)Fortunately, JavaScript comes with a class called `Map` that is written for this exact purpose. It stores a mapping and allows any type of keys.

[](https://eloquentjavascript.net/06_object.html#c_dd6KsGgAGP)let ages \= new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);

console.log(\`Júlia is ${ages.get("Júlia")}\`);

console.log("Is Jack's age known?", ages.has("Jack"));

console.log(ages.has("toString"));

[](https://eloquentjavascript.net/06_object.html#p_iIdp+mGl3Y)The methods `set`, `get`, and `has` are part of the interface of the `Map` object. Writing a data structure that can quickly update and search a large set of values isn’t easy, but we don’t have to worry about that. Someone else did it for us, and we can go through this simple interface to use their work.

[](https://eloquentjavascript.net/06_object.html#p_tx3xnowcEp)If you do have a plain object that you need to treat as a map for some reason, it is useful to know that `Object.keys` returns only an object’s _own_ keys, not those in the prototype. As an alternative to the `in` operator, you can use the `hasOwnProperty` method, which ignores the object’s prototype.

[](https://eloquentjavascript.net/06_object.html#c_qBrd35Qiln)console.log({x: 1}.hasOwnProperty("x"));

console.log({x: 1}.hasOwnProperty("toString"));

## [](https://eloquentjavascript.net/06_object.html#h_mJ/JHQRHg9)Polymorphism

[](https://eloquentjavascript.net/06_object.html#p_ozkqUookhO)When you call the `String` function (which converts a value to a string) on an object, it will call the `toString` method on that object to try to create a meaningful string from it. I mentioned that some of the standard prototypes define their own version of `toString` so they can create a string that contains more useful information than `"[object Object]"`. You can also do that yourself.

[](https://eloquentjavascript.net/06_object.html#c_V+CBn0VJnW)Rabbit.prototype.toString \= function() {
  return \`a ${this.type} rabbit\`;
};

console.log(String(blackRabbit));

[](https://eloquentjavascript.net/06_object.html#p_HgUFdFB6vM)This is a simple instance of a powerful idea. When a piece of code is written to work with objects that have a certain interface—in this case, a `toString` method—any kind of object that happens to support this interface can be plugged into the code, and it will just work.

[](https://eloquentjavascript.net/06_object.html#p_qNZih5k+vu)This technique is called _polymorphism_. Polymorphic code can work with values of different shapes, as long as they support the interface it expects.

[](https://eloquentjavascript.net/06_object.html#p_g9W26O8p4+)I mentioned in [Chapter 4](https://eloquentjavascript.net/04_data.html#for_of_loop) that a `for`/`of` loop can loop over several kinds of data structures. This is another case of polymorphism—such loops expect the data structure to expose a specific interface, which arrays and strings do. And we can also add this interface to our own objects! But before we can do that, we need to know what symbols are.

## [](https://eloquentjavascript.net/06_object.html#h_Iq1mTp65i3)Symbols

[](https://eloquentjavascript.net/06_object.html#p_9VjlXGAIAM)It is possible for multiple interfaces to use the same property name for different things. For example, I could define an interface in which the `toString` method is supposed to convert the object into a piece of yarn. It would not be possible for an object to conform to both that interface and the standard use of `toString`.

[](https://eloquentjavascript.net/06_object.html#p_v6ZgtFDNeP)That would be a bad idea, and this problem isn’t that common. Most JavaScript programmers simply don’t think about it. But the language designers, whose _job_ it is to think about this stuff, have provided us with a solution anyway.

[](https://eloquentjavascript.net/06_object.html#p_7p+O+Qr4bN)When I claimed that property names are strings, that wasn’t entirely accurate. They usually are, but they can also be _symbols_. Symbols are values created with the `Symbol` function. Unlike strings, newly created symbols are unique—you cannot create the same symbol twice.

[](https://eloquentjavascript.net/06_object.html#c_/KAipM77Y+)let sym \= Symbol("name");
console.log(sym \== Symbol("name"));

Rabbit.prototype\[sym\] \= 55;
console.log(blackRabbit\[sym\]);

[](https://eloquentjavascript.net/06_object.html#p_PBxnKMHKqV)The string you pass to `Symbol` is included when you convert it to a string and can make it easier to recognize a symbol when, for example, showing it in the console. But it has no meaning beyond that—multiple symbols may have the same name.

[](https://eloquentjavascript.net/06_object.html#p_n90pM44NAN)Being both unique and usable as property names makes symbols suitable for defining interfaces that can peacefully live alongside other properties, no matter what their names are.

[](https://eloquentjavascript.net/06_object.html#c_I6uO/ojWit)const toStringSymbol \= Symbol("toString");
Array.prototype\[toStringSymbol\] \= function() {
  return \`${this.length} cm of blue yarn\`;
};

console.log(\[1, 2\].toString());

console.log(\[1, 2\]\[toStringSymbol\]());

[](https://eloquentjavascript.net/06_object.html#p_VJSo/GYvCc)It is possible to include symbol properties in object expressions and classes by using square brackets around the property name. That causes the property name to be evaluated, much like the square bracket property access notation, which allows us to refer to a binding that holds the symbol.

[](https://eloquentjavascript.net/06_object.html#c_aZAdJfdSRz)let stringObject \= {
  \[toStringSymbol\]() { return "a jute rope"; }
};
console.log(stringObject\[toStringSymbol\]());

## [](https://eloquentjavascript.net/06_object.html#h_z2tOOXM8qO)The iterator interface

[](https://eloquentjavascript.net/06_object.html#p_gtFNFSvSrt)The object given to a `for`/`of` loop is expected to be _iterable_. This means it has a method named with the `Symbol.iterator` symbol (a symbol value defined by the language, stored as a property of the `Symbol` function).

[](https://eloquentjavascript.net/06_object.html#p_gs0GMX9PA7)When called, that method should return an object that provides a second interface, _iterator_. This is the actual thing that iterates. It has a `next` method that returns the next result. That result should be an object with a `value` property that provides the next value, if there is one, and a `done` property, which should be true when there are no more results and false otherwise.

[](https://eloquentjavascript.net/06_object.html#p_a9jQxjOo3t)Note that the `next`, `value`, and `done` property names are plain strings, not symbols. Only `Symbol.iterator`, which is likely to be added to a _lot_ of different objects, is an actual symbol.

[](https://eloquentjavascript.net/06_object.html#p_wSWGcm7dId)We can directly use this interface ourselves.

[](https://eloquentjavascript.net/06_object.html#c_CKTaBW3WjJ)let okIterator \= "OK"\[Symbol.iterator\]();
console.log(okIterator.next());

console.log(okIterator.next());

console.log(okIterator.next());

[](https://eloquentjavascript.net/06_object.html#p_rqXAzunzIi)Let’s implement an iterable data structure. We’ll build a _matrix_ class, acting as a two-dimensional array.

[](https://eloquentjavascript.net/06_object.html#c_Q128qlROKi)class Matrix {
  constructor(width, height, element \= (x, y) \=> undefined) {
    this.width \= width;
    this.height \= height;
    this.content \= \[\];

    for (let y \= 0; y < height; y++) {
      for (let x \= 0; x < width; x++) {
        this.content\[y \* width + x\] \= element(x, y);
      }
    }
  }

  get(x, y) {
    return this.content\[y \* this.width + x\];
  }
  set(x, y, value) {
    this.content\[y \* this.width + x\] \= value;
  }
}

[](https://eloquentjavascript.net/06_object.html#p_I/q+okK5mh)The class stores its content in a single array of _width_ × _height_ elements. The elements are stored row by row, so, for example, the third element in the fifth row is (using zero-based indexing) stored at position 4 × _width_ + 2.

[](https://eloquentjavascript.net/06_object.html#p_RlDQ7yqK2c)The constructor function takes a width, a height, and an optional `element` function that will be used to fill in the initial values. There are `get` and `set` methods to retrieve and update elements in the matrix.

[](https://eloquentjavascript.net/06_object.html#p_DHPUGxvFrD)When looping over a matrix, you are usually interested in the position of the elements as well as the elements themselves, so we’ll have our iterator produce objects with `x`, `y`, and `value` properties.

[](https://eloquentjavascript.net/06_object.html#c_LtbqF2pl4c)class MatrixIterator {
  constructor(matrix) {
    this.x \= 0;
    this.y \= 0;
    this.matrix \= matrix;
  }

  next() {
    if (this.y \== this.matrix.height) return {done: true};

    let value \= {x: this.x,
                 y: this.y,
                 value: this.matrix.get(this.x, this.y)};
    this.x++;
    if (this.x \== this.matrix.width) {
      this.x \= 0;
      this.y++;
    }
    return {value, done: false};
  }
}

[](https://eloquentjavascript.net/06_object.html#p_yBJg8/BmDJ)The class tracks the progress of iterating over a matrix in its `x` and `y` properties. The `next` method starts by checking whether the bottom of the matrix has been reached. If it hasn’t, it _first_ creates the object holding the current value and _then_ updates its position, moving to the next row if necessary.

[](https://eloquentjavascript.net/06_object.html#p_Iu3bFayPkp)Let’s set up the `Matrix` class to be iterable. Throughout this book, I’ll occasionally use after-the-fact prototype manipulation to add methods to classes so that the individual pieces of code remain small and self-contained. In a regular program, where there is no need to split the code into small pieces, you’d declare these methods directly in the class instead.

[](https://eloquentjavascript.net/06_object.html#c_BmOLk4O5HN)Matrix.prototype\[Symbol.iterator\] \= function() {
  return new MatrixIterator(this);
};

[](https://eloquentjavascript.net/06_object.html#p_+6FbIloB5k)We can now loop over a matrix with `for`/`of`.

[](https://eloquentjavascript.net/06_object.html#c_ek9pXBwNMJ)let matrix \= new Matrix(2, 2, (x, y) \=> \`value ${x},${y}\`);
for (let {x, y, value} of matrix) {
  console.log(x, y, value);
}

## [](https://eloquentjavascript.net/06_object.html#h_3vwredi8nD)Getters, setters, and statics

[](https://eloquentjavascript.net/06_object.html#p_6oukozZJBx)Interfaces often consist mostly of methods, but it is also okay to include properties that hold non-function values. For example, `Map` objects have a `size` property that tells you how many keys are stored in them.

[](https://eloquentjavascript.net/06_object.html#p_SdyGtj5JbS)It is not even necessary for such an object to compute and store such a property directly in the instance. Even properties that are accessed directly may hide a method call. Such methods are called _getters_, and they are defined by writing `get` in front of the method name in an object expression or class declaration.

[](https://eloquentjavascript.net/06_object.html#c_Np05mJ4GVO)let varyingSize \= {
  get size() {
    return Math.floor(Math.random() \* 100);
  }
};

console.log(varyingSize.size);

console.log(varyingSize.size);

[](https://eloquentjavascript.net/06_object.html#p_QwpqNIZOsS)Whenever someone reads from this object’s `size` property, the associated method is called. You can do a similar thing when a property is written to, using a _setter_.

[](https://eloquentjavascript.net/06_object.html#c_7LQG88c1BA)class Temperature {
  constructor(celsius) {
    this.celsius \= celsius;
  }
  get fahrenheit() {
    return this.celsius \* 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius \= (value \- 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value \- 32) / 1.8);
  }
}

let temp \= new Temperature(22);
console.log(temp.fahrenheit);

temp.fahrenheit \= 86;
console.log(temp.celsius);

[](https://eloquentjavascript.net/06_object.html#p_Hf3p+suFR+)The `Temperature` class allows you to read and write the temperature in either degrees Celsius or degrees Fahrenheit, but internally it stores only Celsius and automatically converts to and from Celsius in the `fahrenheit` getter and setter.

[](https://eloquentjavascript.net/06_object.html#p_MwIs1kR0mD)Sometimes you want to attach some properties directly to your constructor function, rather than to the prototype. Such methods won’t have access to a class instance but can, for example, be used to provide additional ways to create instances.

[](https://eloquentjavascript.net/06_object.html#p_zLJ2u9mlXs)Inside a class declaration, methods that have `static` written before their name are stored on the constructor. So the `Temperature` class allows you to write `Temperature.fromFahrenheit(100)` to create a temperature using degrees Fahrenheit.

## [](https://eloquentjavascript.net/06_object.html#h_/a3bnONnws)Inheritance

[](https://eloquentjavascript.net/06_object.html#p_seSalQnLZd)Some matrices are known to be _symmetric_. If you mirror a symmetric matrix around its top-left-to-bottom-right diagonal, it stays the same. In other words, the value stored at _x_,_y_ is always the same as that at _y_,_x_.

[](https://eloquentjavascript.net/06_object.html#p_InrSr2m6Kl)Imagine we need a data structure like `Matrix` but one that enforces the fact that the matrix is and remains symmetrical. We could write it from scratch, but that would involve repeating some code very similar to what we already wrote.

[](https://eloquentjavascript.net/06_object.html#p_kRtvgxF67W)JavaScript’s prototype system makes it possible to create a _new_ class, much like the old class, but with new definitions for some of its properties. The prototype for the new class derives from the old prototype but adds a new definition for, say, the `set` method.

[](https://eloquentjavascript.net/06_object.html#p_a3GMshNFYT)In object-oriented programming terms, this is called _inheritance_. The new class inherits properties and behavior from the old class.

[](https://eloquentjavascript.net/06_object.html#c_uuBcsDdS7D)class SymmetricMatrix extends Matrix {
  constructor(size, element \= (x, y) \=> undefined) {
    super(size, size, (x, y) \=> {
      if (x < y) return element(y, x);
      else return element(x, y);
    });
  }

  set(x, y, value) {
    super.set(x, y, value);
    if (x != y) {
      super.set(y, x, value);
    }
  }
}

let matrix \= new SymmetricMatrix(5, (x, y) \=> \`${x},${y}\`);
console.log(matrix.get(2, 3));

[](https://eloquentjavascript.net/06_object.html#p_RZZzYHZ3d6)The use of the word `extends` indicates that this class shouldn’t be directly based on the default `Object` prototype but on some other class. This is called the _superclass_. The derived class is the _subclass_.

[](https://eloquentjavascript.net/06_object.html#p_mss/w8sDfy)To initialize a `SymmetricMatrix` instance, the constructor calls its superclass’s constructor through the `super` keyword. This is necessary because if this new object is to behave (roughly) like a `Matrix`, it is going to need the instance properties that matrices have. To ensure the matrix is symmetrical, the constructor wraps the `element` function to swap the coordinates for values below the diagonal.

[](https://eloquentjavascript.net/06_object.html#p_9XrYhhYXI8)The `set` method again uses `super` but this time not to call the constructor but to call a specific method from the superclass’s set of methods. We are redefining `set` but do want to use the original behavior. Because `this.set` refers to the _new_ `set` method, calling that wouldn’t work. Inside class methods, `super` provides a way to call methods as they were defined in the superclass.

[](https://eloquentjavascript.net/06_object.html#p_apvJjMYcsg)Inheritance allows us to build slightly different data types from existing data types with relatively little work. It is a fundamental part of the object-oriented tradition, alongside encapsulation and polymorphism. But while the latter two are now generally regarded as wonderful ideas, inheritance is more controversial.

[](https://eloquentjavascript.net/06_object.html#p_CWDhzksvzb)Whereas encapsulation and polymorphism can be used to _separate_ pieces of code from each other, reducing the tangledness of the overall program, inheritance fundamentally ties classes together, creating _more_ tangle. When inheriting from a class, you usually have to know more about how it works than when simply using it. Inheritance can be a useful tool, and I use it now and then in my own programs, but it shouldn’t be the first tool you reach for, and you probably shouldn’t actively go looking for opportunities to construct class hierarchies (family trees of classes).

## [](https://eloquentjavascript.net/06_object.html#h_Fdk67dJHwg)The instanceof operator

[](https://eloquentjavascript.net/06_object.html#p_wnmK5D9foe)It is occasionally useful to know whether an object was derived from a specific class. For this, JavaScript provides a binary operator called `instanceof`.

[](https://eloquentjavascript.net/06_object.html#c_1/4hH+dV3k)console.log(
  new SymmetricMatrix(2) instanceof SymmetricMatrix);

console.log(new SymmetricMatrix(2) instanceof Matrix);

console.log(new Matrix(2, 2) instanceof SymmetricMatrix);

console.log(\[1\] instanceof Array);

[](https://eloquentjavascript.net/06_object.html#p_VtvmEyRrv+)The operator will see through inherited types, so a `SymmetricMatrix` is an instance of `Matrix`. The operator can also be applied to standard constructors like `Array`. Almost every object is an instance of `Object`.

## [](https://eloquentjavascript.net/06_object.html#h_ErccPg/l98)Summary

[](https://eloquentjavascript.net/06_object.html#p_VPlYPbumD2)So objects do more than just hold their own properties. They have prototypes, which are other objects. They’ll act as if they have properties they don’t have as long as their prototype has that property. Simple objects have `Object.prototype` as their prototype.

[](https://eloquentjavascript.net/06_object.html#p_A+dQsxCVz8)Constructors, which are functions whose names usually start with a capital letter, can be used with the `new` operator to create new objects. The new object’s prototype will be the object found in the `prototype` property of the constructor. You can make good use of this by putting the properties that all values of a given type share into their prototype. There’s a `class` notation that provides a clear way to define a constructor and its prototype.

[](https://eloquentjavascript.net/06_object.html#p_AFyYjRH+5G)You can define getters and setters to secretly call methods every time an object’s property is accessed. Static methods are methods stored in a class’s constructor, rather than its prototype.

[](https://eloquentjavascript.net/06_object.html#p_U1iTgKNfyX)The `instanceof` operator can, given an object and a constructor, tell you whether that object is an instance of that constructor.

[](https://eloquentjavascript.net/06_object.html#p_zzr1L1PppY)One useful thing to do with objects is to specify an interface for them and tell everybody that they are supposed to talk to your object only through that interface. The rest of the details that make up your object are now _encapsulated_, hidden behind the interface.

[](https://eloquentjavascript.net/06_object.html#p_NWmKpeeGiT)More than one type may implement the same interface. Code written to use an interface automatically knows how to work with any number of different objects that provide the interface. This is called _polymorphism_.

[](https://eloquentjavascript.net/06_object.html#p_fg/ZL+fqD3)When implementing multiple classes that differ in only some details, it can be helpful to write the new classes as _subclasses_ of an existing class, _inheriting_ part of its behavior.

## [](https://eloquentjavascript.net/06_object.html#h_TcUD2vzyMe)Exercises

### [](https://eloquentjavascript.net/06_object.html#i_zO8FRQBMAy)A vector type

[](https://eloquentjavascript.net/06_object.html#p_YtkHcQdZSH)Write a class `Vec` that represents a vector in two-dimensional space. It takes `x` and `y` parameters (numbers), which it should save to properties of the same name.

[](https://eloquentjavascript.net/06_object.html#p_8DOrtO0lbU)Give the `Vec` prototype two methods, `plus` and `minus`, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (`this` and the parameter) _x_ and _y_ values.

[](https://eloquentjavascript.net/06_object.html#p_F5nP+jpza3)Add a getter property `length` to the prototype that computes the length of the vector—that is, the distance of the point (_x_, _y_) from the origin (0, 0).

[](https://eloquentjavascript.net/06_object.html#c_f3P62tUJWH)

console.log(new Vec(1, 2).plus(new Vec(2, 3)));

console.log(new Vec(1, 2).minus(new Vec(2, 3)));

console.log(new Vec(3, 4).length);

[](https://eloquentjavascript.net/06_object.html#p_jRIa414Yh5)Look back to the `Rabbit` class example if you’re unsure how `class` declarations look.

[](https://eloquentjavascript.net/06_object.html#p_uZnm2ZSaRd)Adding a getter property to the constructor can be done by putting the word `get` before the method name. To compute the distance from (0, 0) to (x, y), you can use the Pythagorean theorem, which says that the square of the distance we are looking for is equal to the square of the x-coordinate plus the square of the y-coordinate. Thus, √(x2 + y2) is the number you want, and `Math.sqrt` is the way you compute a square root in JavaScript.

### [](https://eloquentjavascript.net/06_object.html#i_rpYp9Ou4LG)Groups

[](https://eloquentjavascript.net/06_object.html#p_1TnXiDoyR2)The standard JavaScript environment provides another data structure called `Set`. Like an instance of `Map`, a set holds a collection of values. Unlike `Map`, it does not associate other values with those—it just tracks which values are part of the set. A value can be part of a set only once—adding it again doesn’t have any effect.

[](https://eloquentjavascript.net/06_object.html#p_IBo4QI1mvy)Write a class called `Group` (since `Set` is already taken). Like `Set`, it has `add`, `delete`, and `has` methods. Its constructor creates an empty group, `add` adds a value to the group (but only if it isn’t already a member), `delete` removes its argument from the group (if it was a member), and `has` returns a Boolean value indicating whether its argument is a member of the group.

[](https://eloquentjavascript.net/06_object.html#p_cHm3PZ0L5i)Use the `===` operator, or something equivalent such as `indexOf`, to determine whether two values are the same.

[](https://eloquentjavascript.net/06_object.html#p_CbJ60eqr+J)Give the class a static `from` method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.

[](https://eloquentjavascript.net/06_object.html#c_dNauaecKx+)class Group {
  
}

let group \= Group.from(\[10, 20\]);
console.log(group.has(10));

console.log(group.has(30));

group.add(10);
group.delete(10);
console.log(group.has(10));

[](https://eloquentjavascript.net/06_object.html#p_fQA7KS4poU)The easiest way to do this is to store an array of group members in an instance property. The `includes` or `indexOf` methods can be used to check whether a given value is in the array.

[](https://eloquentjavascript.net/06_object.html#p_2+V8dOgKHs)Your class’s constructor can set the member collection to an empty array. When `add` is called, it must check whether the given value is in the array or add it, for example with `push`, otherwise.

[](https://eloquentjavascript.net/06_object.html#p_GVg0o9XSa+)Deleting an element from an array, in `delete`, is less straightforward, but you can use `filter` to create a new array without the value. Don’t forget to overwrite the property holding the members with the newly filtered version of the array.

[](https://eloquentjavascript.net/06_object.html#p_1KdbI2vH34)The `from` method can use a `for`/`of` loop to get the values out of the iterable object and call `add` to put them into a newly created group.

### [](https://eloquentjavascript.net/06_object.html#i_djD3XDJ27V)Iterable groups

[](https://eloquentjavascript.net/06_object.html#p_azaOoj0ezw)Make the `Group` class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

[](https://eloquentjavascript.net/06_object.html#p_SoL9V7zUCt)If you used an array to represent the group’s members, don’t just return the iterator created by calling the `Symbol.iterator` method on the array. That would work, but it defeats the purpose of this exercise.

[](https://eloquentjavascript.net/06_object.html#p_rLyKomI6vw)It is okay if your iterator behaves strangely when the group is modified during iteration.

[](https://eloquentjavascript.net/06_object.html#c_n6ZNn/zRLj)

for (let value of Group.from(\["a", "b", "c"\])) {
  console.log(value);
}

[](https://eloquentjavascript.net/06_object.html#p_URAzFlYuQP)It is probably worthwhile to define a new class `GroupIterator`. Iterator instances should have a property that tracks the current position in the group. Every time `next` is called, it checks whether it is done and, if not, moves past the current value and returns it.

[](https://eloquentjavascript.net/06_object.html#p_il9bvEkyQT)The `Group` class itself gets a method named by `Symbol.iterator` that, when called, returns a new instance of the iterator class for that group.

### [](https://eloquentjavascript.net/06_object.html#i_wcWSnr9zHV)Borrowing a method

[](https://eloquentjavascript.net/06_object.html#p_HxMI3VGcht)Earlier in the chapter I mentioned that an object’s `hasOwnProperty` can be used as a more robust alternative to the `in` operator when you want to ignore the prototype’s properties. But what if your map needs to include the word `"hasOwnProperty"`? You won’t be able to call that method anymore because the object’s own property hides the method value.

[](https://eloquentjavascript.net/06_object.html#p_nxOrPKy+Ky)Can you think of a way to call `hasOwnProperty` on an object that has its own property by that name?

[](https://eloquentjavascript.net/06_object.html#c_LtMKqqkY0Q)let map \= {one: true, two: true, hasOwnProperty: true};

console.log(map.hasOwnProperty("one"));

[](https://eloquentjavascript.net/06_object.html#p_Pg/cWjUrKm)Remember that methods that exist on plain objects come from `Object.prototype`.

[](https://eloquentjavascript.net/06_object.html#p_wCf1aBfcJA)Also remember that you can call a function with a specific `this` binding by using its `call` method.

[◀](https://eloquentjavascript.net/05_higher_order.html "previous chapter") [◆](https://eloquentjavascript.net/index.html "cover") [▶](https://eloquentjavascript.net/07_robot.html "next chapter")