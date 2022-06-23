# The Basics

### Anonymous Closures
```javascript
(function () {
	// ... all vars and functions are in this scope only
	// still maintains access to all globals
}());
```


### Global Import
```javascript
(function ($, YAHOO) {
	// now have access to globals jQuery (as $) and YAHOO in this code
}(jQuery, YAHOO));
```

### Module Export
```javascript
var MODULE = (function () {
	var my = {},
		privateVariable = 1;

	function privateMethod() {
		// ...
	}

	my.moduleProperty = 1;
	my.moduleMethod = function () {
		// ...
	};

	return my;
}());

```

# Advanced Patterns
### Augmentation
```javascript
var MODULE = (function (my) {
	my.anotherMethod = function () {
		// added method...
	};

	return my;
}(MODULE));

```


### Loose Augmentation
In this pattern, the var statement is always necessary. Note that the import will create the module if it does not already exist. This means you can use a tool like LABjs and load all of your module files in parallel, without needing to block.

```javascript
var MODULE = (function (my) {
	// add capabilities...

	return my;
}(MODULE || {}));

```

### Tight Augmentation
Here we’ve overridden MODULE.moduleMethod, but maintain a reference to the original method, if needed.

```javascript
var MODULE = (function (my) {
	var old_moduleMethod = my.moduleMethod;

	my.moduleMethod = function () {
		// method override, has access to old through old_moduleMethod...
	};

	return my;
}(MODULE));

```

### Cloning and Inheritance
```javascript
var MODULE_TWO = (function (old) {
	var my = {},
		key;

	for (key in old) {
		if (old.hasOwnProperty(key)) {
			my[key] = old[key];
		}
	}

	var super_moduleMethod = old.moduleMethod;
	my.moduleMethod = function () {
		// override method on the clone, access to super through super_moduleMethod
	};

	return my;
}(MODULE));

```

### Cross-File Private State
```javascript
var MODULE = (function (my) {
	var _private = my._private = my._private || {},
		_seal = my._seal = my._seal || function () {
			delete my._private;
			delete my._seal;
			delete my._unseal;
		},
		_unseal = my._unseal = my._unseal || function () {
			my._private = _private;
			my._seal = _seal;
			my._unseal = _unseal;
		};

	// permanent access to _private, _seal, and _unseal

	return my;
}(MODULE || {}));

```

### Sub-modules
```javascript
MODULE.sub = (function () {
	var my = {};
	// ...

	return my;
}());

```
