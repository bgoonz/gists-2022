/**
 * @emails react-core
 */

'use strict';

jest.unmock('keyMirror');

let keyMirror = require('keyMirror');

describe('keyMirror', function() {
  it('should create an object with values matching keys provided', function() {
    let mirror = keyMirror({
      foo: null,
      bar: true,
      "baz": {some: "object"},
      qux: undefined
    });
    expect('foo' in mirror).toBe(true);
    expect(mirror.foo).toBe('foo');
    expect('bar' in mirror).toBe(true);
    expect(mirror.bar).toBe('bar');
    expect('baz' in mirror).toBe(true);
    expect(mirror.baz).toBe('baz');
    expect('qux' in mirror).toBe(true);
    expect(mirror.qux).toBe('qux');
  });

  it('should not use properties from prototypes', function() {
    function Klass() {
      this.useMeToo = true;
    }
    Klass.prototype.doNotUse = true;
    let instance = new Klass();
    instance.useMe = true;

    let mirror = keyMirror(instance);

    expect('doNotUse' in mirror).toBe(false);
    expect('useMe' in mirror).toBe(true);
    expect('useMeToo' in mirror).toBe(true);
  });

  it('should throw when a non-object argument is used', function() {
    [null, undefined, 0, 7, ['uno'], true, "string"].forEach(function(testVal) {
      expect(keyMirror.bind(null, testVal)).toThrow();
    });
  });

  it('should work when "constructor" is a key', function() {
    let obj = {constructor: true};
    expect(keyMirror.bind(null, obj)).not.toThrow();
    let mirror = keyMirror(obj);
    expect('constructor' in mirror).toBe(true);
  });
});
