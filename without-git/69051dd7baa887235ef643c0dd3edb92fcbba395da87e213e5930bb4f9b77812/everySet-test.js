/**
 * @emails oncall+jsinfra
 */

'use strict';

jest.unmock('everySet');

let everySet = require('everySet');

describe('everySet', () => {
  it('returns true for empty sets', () => {
    let one = new Set();
    let test = () => false;
    expect(everySet(one, test)).toBe(true);
  });

  it('returns true when everything passes', () => {
    let one = new Set(['a', 'b', 'c']);
    let test = (value) => true;
    expect(everySet(one, test)).toBe(true);
  });

  it('returns false when not everything passes', () => {
    let one = new Set(['a', 'b', 'c']);
    let test = (value) => value === 'a';
    expect(everySet(one, test)).toBe(false);
  });

  it('respects thisArg', () => {
    let one = new Set(['a', 'b', 'c']);
    let testSet = new Set(['a', 'b', 'c']);
    expect(() => everySet(one, testSet.has)).toThrow();
    expect(everySet(one, testSet.has, testSet)).toBe(true);
  });
});
