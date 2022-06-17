/**
 * @providesModule performance
 * @typechecks
 */

'use strict';

let ExecutionEnvironment = require('ExecutionEnvironment');

let performance;

if (ExecutionEnvironment.canUseDOM) {
  performance =
    window.performance ||
    window.msPerformance ||
    window.webkitPerformance;
}

module.exports = performance || {};
