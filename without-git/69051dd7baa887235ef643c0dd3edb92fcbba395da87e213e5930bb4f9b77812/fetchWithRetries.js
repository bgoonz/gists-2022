/**
 * @noflow
 */

'use strict';

let Deferred = require.requireActual('Deferred');

function fetchWithRetries(...args): Promise {
  let deferred = new Deferred();
  fetchWithRetries.mock.calls.push(args);
  fetchWithRetries.mock.deferreds.push(deferred);
  return deferred.getPromise();
}

fetchWithRetries.mock = {
  calls: [],
  deferreds: [],
};

module.exports = fetchWithRetries;
