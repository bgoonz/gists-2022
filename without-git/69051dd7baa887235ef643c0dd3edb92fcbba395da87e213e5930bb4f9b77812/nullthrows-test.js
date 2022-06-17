/**
 * @emails oncall+flow
 * @flow
 */

jest.disableAutomock();
let nullthrows = require('nullthrows');

describe('nullthrows', () => {
  it('exists', () => expect(typeof nullthrows).toBe('function'));

  it("Doesn't throw on non-nulls", () => {
    let obj = {};
    expect(nullthrows(0)).toBe(0);
    expect(nullthrows("")).toBe("");
    expect(nullthrows(obj)).toBe(obj);
  });

  it("throws on null", () => {
    expect(() => nullthrows(null)).toThrow();
  });

  it("throws on undefined", () => {
    expect(() => nullthrows(undefined)).toThrow();
  });

});
