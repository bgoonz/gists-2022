/**
 * @emails oncall+jsinfra
 * @flow
 */

jest
  .unmock('countDistinct');

let Immutable = require('immutable');
let countDistinct = require('countDistinct');

describe('countDistinct', () => {
  it('does not include duplicate items in the count', () => {
    let originalArray = [{id: 1}, {id: 2}, {id: 3}, {id: 1}, {id: 2}];
    let count = countDistinct(originalArray, i => i.id);
    expect(count).toBe(3);
  });

  it('defaults to identity selector', () => {
    let originalArray = [1, 2, 3, 4, 1, 2, 3];
    let count = countDistinct(originalArray);
    expect(count).toBe(4);
  });

  it('works with immutable iterables', () => {
    let iterable = Immutable.Iterable([1, 2, 3, 4, 1, 2, 3]);
    let count = countDistinct(iterable);
    expect(count).toBe(4);
  });
});
