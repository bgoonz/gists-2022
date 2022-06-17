/**
 * @providesModule everySet
 * @flow
 * @typechecks
 */

'use strict';

/**
 * The everySet() method tests whether all elements in the given Set pass the
 * test implemented by the provided function.
 */
function everySet<T>(
  set: Set<T>,
  callback: (value: T, key: T, set: Set<T>) => boolean,
  context?: any
): boolean {
  let iterator = set.entries();
  let current = iterator.next();
  while (!current.done) {
    let entry = current.value;
    if (!callback.call(context, entry[1], entry[0], set)) {
      return false;
    }
    current = iterator.next();
  }
  return true;
}

module.exports = everySet;
