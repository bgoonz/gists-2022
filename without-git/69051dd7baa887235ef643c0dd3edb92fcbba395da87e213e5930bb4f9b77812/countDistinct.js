/**
 * @providesModule countDistinct
 * @flow
 */

'use strict';

let emptyFunction = require('emptyFunction');

/**
 * Returns the count of distinct elements selected from an array.
 */
function countDistinct<T1, T2>(
  iter: Iterable<T1>,
  selector: (item: T1) => T2,
): number {
  selector = selector || emptyFunction.thatReturnsArgument;

  let set = new Set();
  for (let val of iter) {
    set.add(selector(val));
  }

  return set.size;
}

module.exports = countDistinct;
