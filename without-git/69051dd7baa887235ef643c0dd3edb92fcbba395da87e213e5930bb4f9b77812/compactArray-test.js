/**
 * @emails oncall+jsinfra
 * @flow
 */

jest
  .unmock('compactArray');

let compactArray = require('compactArray');

describe('compactArray', () => {

  it('filters both null and undefined', () => {
    let originalArray: Array<?number> = [1, 2, 3, null, 4, undefined, 5, 6];
    let compactedArray: Array<number> = compactArray(originalArray);
    expect(compactedArray).toEqual(
      [1, 2, 3, 4, 5, 6]
    );
  });

});
