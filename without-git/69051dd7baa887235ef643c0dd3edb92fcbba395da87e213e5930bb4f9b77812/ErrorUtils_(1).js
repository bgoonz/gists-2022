/**
 * @providesModule ErrorUtils
 */

/* jslint unused:false */

if (global.ErrorUtils) {
  module.exports = global.ErrorUtils;
} else {
  let ErrorUtils = {
    applyWithGuard(callback, context, args, onError, name) {
      return callback.apply(context, args);
    },
    guard(callback, name) {
      return callback;
    },
  };

  module.exports = ErrorUtils;
}
