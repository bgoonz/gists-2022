/**
 * @emails oncall+jsinfra
 */

jest.unmock('CircularBuffer');
jest.unmock('invariant');

let CircularBuffer = require('CircularBuffer');

let TEST_LENGTH = 10;

describe('CircularBuffer', function() {
  it('should be a constructor function', () => {
    let buffer = new CircularBuffer(TEST_LENGTH);
    expect(buffer.constructor).toBe(CircularBuffer);
  });

  it('should throw if size is not positive integer', () => {
    expect(() => {
      new CircularBuffer(0);
    }).toThrow();

    expect(() => {
      new CircularBuffer(-1);
    }).toThrow();

    // TODO(catchen, #6147382): Add back this check once Number.isSafeInteger
    // can be used.
    /*expect(() => {
      new CircularBuffer(Math.PI);
    }).toThrow();*/
  });

  it('should write new entry before size is reached', () => {
    let buffer = new CircularBuffer(TEST_LENGTH);

    for (let i = 0; i < TEST_LENGTH; i++) {
      buffer.write(i);
      expect(buffer.read().length).toBe(i + 1);
    }
  });

  it('should overwrite entried after size is reached', () => {
    let buffer = new CircularBuffer(TEST_LENGTH);
    let i;

    for (i = 0; i < TEST_LENGTH; i++) {
      buffer.write(i);
    }

    for (i = 0; i < TEST_LENGTH; i++) {
      buffer.write(i);
      expect(buffer.read().length).toBe(TEST_LENGTH);
    }
  });

  it('should read entries within size limit', () => {
    let buffer = new CircularBuffer(TEST_LENGTH);
    let unlimitedBuffer = [];

    for (let i = 0; i < TEST_LENGTH * 2; i++) {
      buffer.write(i);
      unlimitedBuffer.push(i);
      expect(buffer.read())
        .toEqual(unlimitedBuffer.slice(-buffer.read().length));
    }
  });

  it('can clear entries and reset everything', () => {
    let buffer = new CircularBuffer(TEST_LENGTH);
    let i;

    for (i = 0; i < TEST_LENGTH * 2; i++) {
      buffer.write(i);
    }
    buffer.clear();

    expect(buffer.read().length).toBe(0);

    let unlimitedBuffer = [];

    for (i = 0; i < TEST_LENGTH * 2; i++) {
      buffer.write(i);
      unlimitedBuffer.push(i);
      expect(buffer.read())
        .toEqual(unlimitedBuffer.slice(-buffer.read().length));
    }
  });
});
