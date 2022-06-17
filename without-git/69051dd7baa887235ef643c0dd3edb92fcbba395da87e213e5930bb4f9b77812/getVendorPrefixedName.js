/**
 * @providesModule getVendorPrefixedName
 * @typechecks
 */

const ExecutionEnvironment = require('ExecutionEnvironment');
const UserAgent = require('UserAgent');

const camelize = require('camelize');
const invariant = require('invariant');

const memoized = {};
const prefixes = ['Webkit', 'ms', 'Moz', 'O'];
const prefixRegex = new RegExp('^(' + prefixes.join('|') + ')');
const testStyle =
  ExecutionEnvironment.canUseDOM ? document.createElement('div').style : {};

function getWithPrefix(name) {
  for (let i = 0; i < prefixes.length; i++) {
    const prefixedName = prefixes[i] + name;
    if (prefixedName in testStyle) {
      return prefixedName;
    }
  }
  return null;
}

function guessVendorPrefixedNameFromUserAgent(name) {
  switch (name) {
    case 'lineClamp':
      if (UserAgent.isEngine('WebKit >= 315.14.2')) {
        return 'WebkitLineClamp';
      }
      return null;
    default:
      return null;
  }
}

/**
 * @param {string} property Name of a css property to check for.
 * @return {?string} property name supported in the browser, or null if not
 * supported.
 */
function getVendorPrefixedName(property) {
  const name = camelize(property);
  if (memoized[name] === undefined) {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    if (prefixRegex.test(capitalizedName)) {
      invariant(
        false,
        'getVendorPrefixedName must only be called with unprefixed' +
        'CSS property names. It was called with %s', property
      );
    }
    if (ExecutionEnvironment.canUseDOM) {
      memoized[name] =
        (name in testStyle) ? name : getWithPrefix(capitalizedName);
    } else {
      memoized[name] = guessVendorPrefixedNameFromUserAgent(name);
    }
  }
  return memoized[name];
}

module.exports = getVendorPrefixedName;
