/**
 * @providesModule keyMirrorRecursive
 * @flow weak
 * @typechecks
 */

'use strict';

let invariant = require('invariant');

/**
 * Constructs an enumeration with keys equal to their value. If the value is an
 * object, the method is run recursively, including the parent key as a suffix.
 * An optional prefix can be provided that will be prepended to each value.
 *
 * For example:
 *
 *   let ACTIONS = keyMirror({FOO: null, BAR: { BAZ: null, BOZ: null }}});
 *   ACTIONS.BAR.BAZ = 'BAR.BAZ';
 *
 *   Input:  {key1: null, key2: { nested1: null, nested2: null }}}
 *   Output: {key1: key1, key2: { nested1: nested1, nested2: nested2 }}}
 *
 *   let CONSTANTS = keyMirror({FOO: {BAR: null}}, 'NameSpace');
 *   console.log(CONSTANTS.FOO.BAR); // NameSpace.FOO.BAR
 */
function keyMirrorRecursive<T>(obj: T, prefix?: ?string): T {
  return keyMirrorRecursiveInternal(obj, prefix);
}

function keyMirrorRecursiveInternal(
  /*object*/ obj,
  /*?string*/ prefix
) /*object*/ {
  let ret = {};
  let key;

  invariant(
    isObject(obj),
    'keyMirrorRecursive(...): Argument must be an object.'
  );

  for (key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }

    let val = obj[key];

    let newPrefix = prefix ? prefix + '.' + key : key;

    if (isObject(val)) {
      val = keyMirrorRecursiveInternal(val, newPrefix);
    } else {
      val = newPrefix;
    }

    ret[key] = val;
  }
  return ret;
}

function isObject(obj) /*boolean*/ {
  return obj instanceof Object && !Array.isArray(obj);
}

module.exports = keyMirrorRecursive;
