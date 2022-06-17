/**
 * @emails oncall+jsinfra
 */

'use strict';

jest.unmock('equalsSet');

let equalsSet = require('equalsSet');

describe('equalsSet', () => {
  it('returns true for empty sets', () => {
    let one = new Set();
    let two = new Set();
    expect(equalsSet(one, two)).toBe(true);
    expect(equalsSet(two, one)).toBe(true);
  });

  it('returns true for sets that are equal', () => {
    let one = new Set(['a', 'b', 'c']);
    let two = new Set(['c', 'b', 'a', 'a']);
    expect(equalsSet(one, two)).toBe(true);
    expect(equalsSet(two, one)).toBe(true);
  });

  it('returns true for sets that are equal with object values', () => {
    let foo = {};
    let bar = {bar: 'bar'};
    let one = new Set([foo, bar]);
    let two = new Set([bar, foo]);
    expect(equalsSet(one, two)).toBe(true);
    expect(equalsSet(two, one)).toBe(true);
  });

  it('returns false for sets that have different lengths', () => {
    let one = new Set(['a']);
    let two = new Set(['a', 'b']);
    expect(equalsSet(one, two)).toBe(false);
    expect(equalsSet(two, one)).toBe(false);
  });

  it('returns false for single element sets with different values', () => {
    let foo = {};
    let bar = {};
    let one = new Set([foo]);
    let two = new Set([bar]);
    expect(equalsSet(one, two)).toBe(false);
    expect(equalsSet(two, one)).toBe(false);
  });

  it('returns false for multi element sets with different values', () => {
    let one = new Set(['a', 'b']);
    let two = new Set(['b', 'c']);
    expect(equalsSet(one, two)).toBe(false);
    expect(equalsSet(two, one)).toBe(false);
  });
});
