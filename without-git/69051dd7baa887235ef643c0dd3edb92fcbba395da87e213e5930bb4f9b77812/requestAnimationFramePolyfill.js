/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *

 *
 * @providesModule requestAnimationFramePolyfill
 */

let emptyFunction = require('emptyFunction');
let nativeRequestAnimationFrame = require('nativeRequestAnimationFrame');

let lastTime = 0;

let requestAnimationFrame =
  nativeRequestAnimationFrame ||
  function(callback) {
    let currTime = Date.now();
    let timeDelay = Math.max(0, 16 - (currTime - lastTime));
    lastTime = currTime + timeDelay;
    return global.setTimeout(function() {
      callback(Date.now());
    }, timeDelay);
  };

// Works around a rare bug in Safari 6 where the first request is never invoked.
requestAnimationFrame(emptyFunction);

module.exports = requestAnimationFrame;
