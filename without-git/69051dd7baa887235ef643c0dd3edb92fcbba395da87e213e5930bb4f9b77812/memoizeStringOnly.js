/**
 * @providesModule memoizeStringOnly
 * @flow
 * @typechecks static-only
 */

'use strict';

/**
 * Memoizes the return value of a function that accepts one string argument.
 */
function memoizeStringOnly<T>(callback: (s: string) => T): (s: string) => T {
  const cache = {};
  return function(string) {
    if (!cache.hasOwnProperty(string)) {
      cache[string] = callback.call(this, string);
    }
    return cache[string];
  };
}

module.exports = memoizeStringOnly;
