/**
 * @noflow
 */

'use strict';

let Deferred = require.requireActual('Deferred');

const fetch = jest.fn((uri: string, options: Object): Promise => {
  let deferred = new Deferred();
  fetch.mock.deferreds.push(deferred);
  return deferred.getPromise();
});

fetch.mock.deferreds = [];

module.exports = fetch;
