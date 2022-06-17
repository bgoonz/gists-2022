/**
 * @emails oncall+jsinfra
 */

'use strict';

jest.unmock('someSet');

let someSet = require('someSet');

describe('someSet', () => {
  it('returns false for empty sets', () => {
    let one = new Set();
    let test = () => true;
    expect(someSet(one, test)).toBe(false);
  });

  it('returns true when everything passes', () => {
    let one = new Set(['a', 'b', 'c']);
    let test = (value) => true;
    expect(someSet(one, test)).toBe(true);
  });

  it('returns true when one thing passes', () => {
    let one = new Set(['a', 'b', 'c']);
    let test = (value) => value === 'a';
    expect(someSet(one, test)).toBe(true);
  });

  it('returns false when nothing passes', () => {
    let one = new Set(['a', 'b', 'c']);
    let test = (value) => value === 'd';
    expect(someSet(one, test)).toBe(false);
  });

  it('respects thisArg', () => {
    let one = new Set(['a', 'b', 'c']);
    let testSet = new Set(['b']);
    expect(() => someSet(one, testSet.has)).toThrow();
    expect(someSet(one, testSet.has, testSet)).toBe(true);
  });
});
