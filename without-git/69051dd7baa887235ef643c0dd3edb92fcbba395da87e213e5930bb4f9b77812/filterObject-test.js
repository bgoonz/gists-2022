/**
 * @emails oncall+jsinfra
 */

'use strict';

jest.unmock('filterObject');

let filterObject = require('filterObject');

describe('filterObject', () => {
  let mockObject;
  let mockCallback;

  beforeEach(() => {
    mockObject = {
      foo: 1,
      bar: 2,
      baz: 3
    };
    mockCallback = jest.fn();
  });

  it('should accept null', () => {
    expect(filterObject(null, mockCallback)).toBeNull();
    expect(mockCallback).not.toBeCalled();
  });

  it('should return true to create copy', () => {
    let filtered = filterObject(mockObject, mockCallback.mockImplementation(
      () => true
    ));

    expect(filtered).not.toBe(mockObject);
    expect(filtered).toEqual(mockObject);
  });

  it('should return empty object for a falsey func', () => {
    let filtered = filterObject(mockObject, mockCallback.mockImplementation(
      () => false
    ));

    expect(filtered).toEqual({});
  });

  it('should filter based on value', () => {
    let filtered = filterObject(mockObject, mockCallback.mockImplementation(
      value => value > 1
    ));

    expect(filtered).toEqual({
      bar: 2,
      baz: 3
    });
  });

  it('should filter based on key', () => {
    let filtered = filterObject(mockObject, mockCallback.mockImplementation(
      (value, key) => key[0] === 'b'
    ));

    expect(filtered).toEqual({
      bar: 2,
      baz: 3
    });
  });
});
