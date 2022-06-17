/**
 * @providesModule joinClasses
 * @flow
 * @typechecks static-only
 */

'use strict';

/**
 * Combines multiple className strings into one.
 */
function joinClasses(className: mixed): string {
  let newClassName = ((className: any): string) || '';
  const argLength = arguments.length;

  if (argLength > 1) {
    for (let index = 1; index < argLength; index++) {
      const nextClass = arguments[index];
      if (nextClass) {
        newClassName = (newClassName ? newClassName + ' ' : '') + nextClass;
      }
    }
  }
  return newClassName;
}

module.exports = joinClasses;
