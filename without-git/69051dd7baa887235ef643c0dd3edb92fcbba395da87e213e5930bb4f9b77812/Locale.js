/**
 * @providesModule Locale
 */

const SiteData = require('SiteData');
const ExecutionEnvironment = require('ExecutionEnvironment');

function isRTL() {
  if (!ExecutionEnvironment.canUseDOM) {
    return false;
  } else {
    return SiteData.is_rtl;
  }
}

let Locale = {
  isRTL: isRTL,
};

module.exports = Locale;
