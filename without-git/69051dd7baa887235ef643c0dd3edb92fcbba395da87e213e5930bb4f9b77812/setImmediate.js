/**
 * @providesModule setImmediate
 */

'use strict';

// setimmediate adds setImmediate to the global. We want to make sure we export
// the actual function.
require('setimmediate')
module.exports = global.setImmediate;
