/**
 * @providesModule distinctArray
 * @flow
 */

/**
 * Returns the distinct elements of an iterable. The result is an array whose
 * elements are ordered by first occurrence.
 */
function distinctArray<T>(xs: Iterable<T>): Array<T> {
  return Array.from(new Set(xs).values());
}

module.exports = distinctArray;
