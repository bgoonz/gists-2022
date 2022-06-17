/**
 * @providesModule fetch
 */

'use strict';

// This hopefully supports the React Native case, which is already bringing along
// its own fetch polyfill. That should exist on `global`. If that doesn't exist
// then we'll try to ponyfill, which might not work correctly in all environments.
if (global.fetch) {
  module.exports = global.fetch.bind(global);
} else {
  module.exports = require('cross-fetch');
}
