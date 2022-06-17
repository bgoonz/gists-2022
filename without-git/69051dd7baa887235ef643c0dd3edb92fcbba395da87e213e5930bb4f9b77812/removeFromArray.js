/**
 * @providesModule removeFromArray
 * @typechecks
 * @flow
 */

/**
 * Removes an element from an array.
 */
function removeFromArray<T>(array: Array<T>, element: T): void {
  let index = array.indexOf(element);
  if (index !== -1) {
    array.splice(index, 1);
  }
}

module.exports = removeFromArray;
