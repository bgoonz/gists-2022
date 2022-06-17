/**
 * @emails oncall+jsinfra
 */

jest
  .unmock('sprintf');

const sprintf = require('sprintf');

describe('sprintf', function() {

  it('works with %s', function() {
    expect(sprintf('aaa %s bbb %s ccc', '111', '222'))
      .toBe('aaa 111 bbb 222 ccc');
  });

});
