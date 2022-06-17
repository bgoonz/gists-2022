/**
 * @emails oncall+relay
 */

'use strict';

let Deferred = require('Deferred');
let fetch = require('fetch');

describe('fetchMock', () => {
  it('has a corresponding `Deferred` for each call to `fetch`', () => {
    expect(fetch.mock.calls.length).toBe(0);
    expect(fetch.mock.deferreds.length).toBe(0);
    let promise = fetch('//localhost', {});
    expect(fetch.mock.calls.length).toBe(1);
    expect(fetch.mock.deferreds.length).toBe(1);
    let deferred = fetch.mock.deferreds[0];
    expect(deferred instanceof Deferred).toBe(true);
    let mockCallback = jest.fn();
    let mockResult = {};
    expect(mockCallback).not.toBeCalled();
    promise.then(mockCallback);
    deferred.resolve(mockResult);
    jest.runAllTimers();
    expect(mockCallback).toBeCalledWith(mockResult);
  });
});
