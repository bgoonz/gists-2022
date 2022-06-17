/**
 * @providesModule flatMapArray
 * @flow
 * @typechecks
 */

let push = Array.prototype.push;

/**
 * Applies a function to every item in an array and concatenates the resulting
 * arrays into a single flat array.
 *
 * @param {array} array
 * @param {function} fn
 * @return {array}
 */
function flatMapArray<TValue, TNext>(
  array: Array<TValue>,
  fn: (value: TValue, index: number) => Array<TNext>,
): Array<TNext> {
  let ret = [];
  for (let ii = 0; ii < array.length; ii++) {
    let result = fn.call(array, array[ii], ii);
    if (Array.isArray(result)) {
      push.apply(ret, result);
    } else if (result != null) {
      throw new TypeError(
        'flatMapArray: Callback must return an array or null, ' +
        'received "' + result + '" instead'
      );
    }
  }
  return ret;
}

module.exports = flatMapArray;
