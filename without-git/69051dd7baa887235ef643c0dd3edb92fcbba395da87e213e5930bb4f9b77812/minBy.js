/**
 * @providesModule minBy
 * @flow
 */

let compareNumber = (a, b) => a - b;

/**
 * Returns the minimum element as measured by a scoring function f. Returns the
 * first such element if there are ties.
 */
function minBy<A, B>(
  as: Iterable<A>,
  f: (a: A) => B,
  compare?: ?((u: B, v: B) => number),
): ?A {
  compare = compare || (compareNumber: any);

  let minA = undefined;
  let minB = undefined;
  let seenFirst = false;
  for (let a of as) {
    let b = f(a);
    if (!seenFirst || compare(b, (minB: any)) < 0) {
      minA = a;
      minB = b;
      seenFirst = true;
    }
  }

  return minA;
}

module.exports = minBy;
