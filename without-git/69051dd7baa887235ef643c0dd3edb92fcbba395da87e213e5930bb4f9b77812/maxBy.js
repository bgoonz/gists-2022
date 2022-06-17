/**
 * @providesModule maxBy
 * @flow
 */

let minBy = require('minBy');

let compareNumber = (a, b) => a - b;

/**
 * Returns the maximum element as measured by a scoring function f. Returns the
 * first such element if there are ties.
 */
function maxBy<A, B>(
  as: Iterable<A>,
  f: (a: A) => B,
  compare?: ?((u: B, v: B) => number),
): ?A {
  compare = compare || (compareNumber: any);

  return minBy(as, f, (u, v) => (compare: any)(v, u));
}

module.exports = maxBy;
