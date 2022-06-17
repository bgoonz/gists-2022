/**
 * @providesModule cancelAnimationFramePolyfill
 */

/**
 * Here is the native and polyfill version of cancelAnimationFrame.
 * Please don't use it directly and use cancelAnimationFrame module instead.
 */
const cancelAnimationFrame =
  global.cancelAnimationFrame       ||
  global.webkitCancelAnimationFrame ||
  global.mozCancelAnimationFrame    ||
  global.oCancelAnimationFrame      ||
  global.msCancelAnimationFrame     ||
  global.clearTimeout;

module.exports = cancelAnimationFrame;
