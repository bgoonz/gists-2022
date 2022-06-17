/**
 * @providesModule getByPath
 * @flow
 * @typechecks
 */

'use strict';

/**
 * Get a value from an object based on the given path
 *
 * Usage example:
 *
 *   let obj = {
 *     a : {
 *       b : 123
 *     }
 *   };
 *
 * let result = getByPath(obj, ['a', 'b']); // 123
 *
 * You may also specify the path using an object with a path field
 *
 * let result = getByPath(obj, {path: ['a', 'b']}); // 123
 *
 * If the path doesn't exist undefined will be returned
 *
 * let result = getByPath(obj, ['x', 'y', 'z']); // undefined
 */
function getByPath(
  root: any/*?Object | Error*/,
  path: Array<string>,
  fallbackValue?: any
): any {
  let current = root;
  for (let i = 0; i < path.length; i++) {
    const segment = path[i];
    // Use 'in' to check entire prototype chain since immutable js records
    // use prototypes
    if (current && segment in current) {
      current = current[segment];
    } else {
      return fallbackValue;
    }
  }
  return current;
}

module.exports = getByPath;
