/**
 * @providesModule cssVar
 */

const fbCSSVars = require('fbjs-css-vars');
const invariant = require('invariant');

/**
 * @param {string} name
 */
function cssVar(name) {
  invariant(
    Object.prototype.hasOwnProperty.call(fbCSSVars, name),
    'Unknown key passed to cssVar: %s.',
    name
  );

  return fbCSSVars[name];
}

module.exports = cssVar;
