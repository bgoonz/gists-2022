/**
 * @providesModule emptyObject
 */

'use strict';

const emptyObject = {};

if (__DEV__) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;
