/**
 * @providesModule keyMirror
 * @typechecks static-only
 * @flow
 */

'use strict';

let invariant = require('invariant');

/**
 * Constructs an enumeration with keys equal to their value.
 *
 * For example:
 *
 *   let COLORS = keyMirror({blue: null, red: null});
 *   let myColor = COLORS.blue;
 *   let isColorValid = !!COLORS[myColor];
 *
 * The last line could not be performed if the values of the generated enum were
 * not equal to their keys.
 *
 *   Input:  {key1: val1, key2: val2}
 *   Output: {key1: key1, key2: key2}
 *
 * @param {object} obj
 * @return {object}
 */
let keyMirror = function<T: {}>(obj: T): $ObjMapi<T, <K>(K) => K> {
  let ret = {};
  let key;
  invariant(
    obj instanceof Object && !Array.isArray(obj),
    'keyMirror(...): Argument must be an object.'
  );
  for (key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }
    ret[key] = key;
  }
  return ret;
};

module.exports = keyMirror;
