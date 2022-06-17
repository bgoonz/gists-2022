/**
 * @emails oncall+relay
 */

'use strict';

let crc32 = require('crc32');

describe('crc32', () => {
  let samples = [
    {
      input: '1234567890',
      output: 639479525,
    },
    {
      input: 'CRC me!',
      output: 38028046,
    },
    {
      input: '2733338650',
      output: -1561628646,
    },
  ];

  it('computes crc32 correctly', () => {
    samples.forEach(sample => {
      expect(crc32(sample.input)).toBe(sample.output);
    });
  });
});
