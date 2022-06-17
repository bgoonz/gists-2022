/**
 * @emails oncall+jsinfra
 */

'use strict';

describe('memoizeStringOnly', function() {
  let memoizeStringOnly;

  beforeEach(function() {
    jest.resetModuleRegistry();
    memoizeStringOnly = require('memoizeStringOnly');
  });

  it('should be transparent to callers', function() {
    const callback = function(string) {
      return string;
    };
    const memoized = memoizeStringOnly(callback);

    expect(memoized('foo')).toEqual(callback('foo'));
  });
});
