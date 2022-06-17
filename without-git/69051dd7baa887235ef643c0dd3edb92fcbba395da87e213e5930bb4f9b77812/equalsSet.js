/**
 * @providesModule equalsSet
 * @flow
 * @typechecks
 */

'use strict';

let everySet = require('everySet');

/**
 * Checks if two sets are equal
 */
function equalsSet<T>(one: Set<T>, two: Set<T>): boolean {
  if (one.size !== two.size) {
    return false;
  }
  return everySet(one, value => two.has(value));
}

module.exports = equalsSet;
