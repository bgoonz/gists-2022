/** @emails oncall+ui_infra
 */

'use strict';

jest
  .unmock('distinctArray');

let distinctArray = require('distinctArray');

describe('distinctArray', () =>
  it('returns the correct result', () => {
    expect(
      distinctArray([1, 2, 3])
    ).toEqual(
      [1, 2, 3]
    );

    expect(
      distinctArray([1, 1, 1, 2, 3])
    ).toEqual(
      [1, 2, 3]
    );

    expect(
      distinctArray([1, 2, 3, 1, 1])
    ).toEqual(
      [1, 2, 3]
    );

    expect(
      distinctArray([1, 1, 1])
    ).toEqual(
      [1]
    );

    expect(
      distinctArray([])
    ).toEqual(
      []
    );

    expect(
      distinctArray(['a', 'b', 'c' ,'a', 1, 2, 'a', 1])
    ).toEqual(
      ['a', 'b', 'c', 1, 2]
    );
  })
);
