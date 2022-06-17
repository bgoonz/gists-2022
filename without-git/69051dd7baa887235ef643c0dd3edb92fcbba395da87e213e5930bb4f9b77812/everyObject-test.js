/**
 * @emails oncall+jsinfra
 */

'use strict';

jest.unmock('everyObject');

let everyObject = require('everyObject');

describe('everyObject', function() {
  let mockObject;
  let mockCallback;

  beforeEach(() => {
    mockObject = {foo: 1, bar: 2, baz: 3};
    mockCallback = jest.fn();
  });

  it('handles null', () => {
    everyObject(null, mockCallback);

    expect(mockCallback).not.toBeCalled();
  });

  it('returns true if all properties pass the test', () => {
    mockCallback.mockImplementation(() => true);
    let result = everyObject(mockObject, mockCallback);

    expect(result).toBeTruthy();
    expect(mockCallback.mock.calls).toEqual([
      [1, 'foo', mockObject],
      [2, 'bar', mockObject],
      [3, 'baz', mockObject]
    ]);
  });

  it('returns false if any of the properties fail the test', () => {
    mockCallback.mockImplementation(() => false);
    let result = everyObject(mockObject, mockCallback);

    expect(result).toBeFalsy();
    expect(mockCallback).toBeCalled();
  });

  it('returns immediately upon finding a property that fails the test', () => {
    mockCallback.mockImplementation(() => false);
    let result = everyObject(mockObject, mockCallback);

    expect(result).toBeFalsy();
    expect(mockCallback.mock.calls.length).toEqual(1);
  });
});
