/**
 * @emails oncall+jsinfra
 */

let removeFromArray = require('removeFromArray');

describe('removeFromArray', function() {
  it('should remove numbers from an array', function() {
    let a = [1, 2];

    removeFromArray(a, 1);
    expect(a).toEqual([2]);
    removeFromArray(a, 2);
    expect(a).toEqual([]);
  });

  it('should work when the given value is not in the array', function() {
    let a = [1, 2];
    removeFromArray(a, 3);
    expect(a).toEqual([1, 2]);
  });
});
