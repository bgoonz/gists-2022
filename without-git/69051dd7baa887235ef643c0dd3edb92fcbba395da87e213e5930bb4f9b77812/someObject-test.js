/**
 * @emails oncall+jsinfra
 */

'use strict';

jest.unmock('someObject');

let someObject = require('someObject');

describe('someObject', function() {
  let mockObject;
  let mockCallback;

  beforeEach(() => {
    mockObject = {foo: 1, bar: 2, baz: 3};
    mockCallback = jest.fn();
  });

  it('handles null', () => {
    someObject(null, mockCallback);

    expect(mockCallback).not.toBeCalled();
  });

  it('returns false if none of properties pass the test', () => {
    mockCallback.mockImplementation(() => false);
    let result = someObject(mockObject, mockCallback);

    expect(result).toBeFalsy();
    expect(mockCallback.mock.calls).toEqual([
      [1, 'foo', mockObject],
      [2, 'bar', mockObject],
      [3, 'baz', mockObject]
    ]);
  });

  it('returns true if any of the properties passes the test', () => {
    mockCallback.mockImplementation(() => true);
    let result = someObject(mockObject, mockCallback);

    expect(result).toBeTruthy();
    expect(mockCallback).toBeCalled();
  });

  it('returns immediately upon finding a property that passes the test', () => {
    mockCallback.mockImplementation(() => true);
    let result = someObject(mockObject, mockCallback);

    expect(result).toBeTruthy();
    expect(mockCallback.mock.calls.length).toEqual(1);
  });
});
