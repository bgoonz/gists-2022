/**
 *

 *

 *
 * This module wraps and augments the minimally ES6-compliant Promise
 * implementation provided by the promise npm package.
 *
 */

'use strict';

let Promise = require('promise/setimmediate/es6-extensions');
require('promise/setimmediate/done');

/**
 * Handle either fulfillment or rejection with the same callback.
 */
Promise.prototype.finally = function(onSettled) {
  return this.then(onSettled, onSettled);
};

module.exports = Promise;
