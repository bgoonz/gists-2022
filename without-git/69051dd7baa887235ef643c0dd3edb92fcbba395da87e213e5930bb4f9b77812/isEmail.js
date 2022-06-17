/**
 * @providesModule isEmail
 */

// good approximation of RFC 2822
// http://www.regular-expressions.info/email.html
let re = /^[\w!#\$%&'\*\+\/\=\?\^`\{\|\}~\-]+(:?\.[\w!#\$%&'\*\+\/\=\?\^`\{\|\}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i;

function isEmail(email) {
  return re.test(email);
}

module.exports = isEmail;
