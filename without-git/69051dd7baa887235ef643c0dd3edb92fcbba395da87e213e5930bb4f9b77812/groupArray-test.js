/**
 * @emails oncall+jsinfra
 */

jest.unmock('groupArray');

let groupArray = require('groupArray');

describe('groupArray', () => {
  it('should handle empty arrays', () => {
    let result = groupArray([], item => 'lol');
    expect(Object.keys(result).length).toBe(0);
  });

  it('should handle every item being in one group', () => {
    let items = ['hello', 'world', 'foo', 'bar'];
    let groupFn = item => 'lol';

    let result = groupArray(items, groupFn);

    expect(Object.keys(result).length).toBe(1);
    expect(result.lol).toEqual(items);
  });

  it('should handle every item being in a different group', () => {
    let items = ['hello', 'world', 'foo', 'bar'];
    let groupFn = item => 'group_' + item;

    let result = groupArray(items, groupFn);

    expect(Object.keys(result).length).toBe(items.length);
    expect(result.group_hello).toEqual(['hello']);
    expect(result.group_world).toEqual(['world']);
    expect(result.group_foo).toEqual(['foo']);
    expect(result.group_bar).toEqual(['bar']);
  });

  it('should handle two items in the same group', () => {
    let items = ['hello', 'world', 'test'];
    let groupFn = item => item.length;

    let result = groupArray(items, groupFn);

    expect(Object.keys(result).length).toBe(2);
    expect(result[5]).toEqual(['hello', 'world']);
    expect(result[4]).toEqual(['test']);
  });
});
