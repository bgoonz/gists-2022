/**
 * @providesModule concatAllArray
 * @typechecks
 */

let push = Array.prototype.push;

/**
 * Concats an array of arrays into a single flat array.
 *
 * @param {array} array
 * @return {array}
 */
function concatAllArray(array) {
  let ret = [];
  for (let ii = 0; ii < array.length; ii++) {
    let value = array[ii];
    if (Array.isArray(value)) {
      push.apply(ret, value);
    } else if (value != null) {
      throw new TypeError(
        'concatAllArray: All items in the array must be an array or null, ' +
        'got "' + value + '" at index "' + ii + '" instead'
      );
    }
  }
  return ret;
}

module.exports = concatAllArray;
