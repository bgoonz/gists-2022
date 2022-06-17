/**
 * @emails oncall+unicode, oncall+jsinfra
 */

jest.disableAutomock();

let Dir = require('UnicodeBidiDirection');
let UnicodeBidiService = require('UnicodeBidiService');

describe('UnicodeBidiService', function() {

  let sEmpty        = '';
  let sAsciiPuncts  = '([{}])';
  let sAsciiDigits  = '1234567890';
  let sAsciiLetters = 'ascii';
  let sFrench  = 'Fran\u00E7ais';
  let sHebrew  = '\u05D0\u05DC\u05E4\u05D1\u05D9\u05EA';
  let sArabic  = '\u0639\u0631\u0628\u064A';
  let sKorean  = '\uD55C\uAD6D\uC5B4';

  describe('ctor', function() {

    it('should set default dir from global direction', function() {
      new UnicodeBidiService();
    });

    it('should accept strong default directions', function() {
      new UnicodeBidiService(Dir.LTR);
      new UnicodeBidiService(Dir.RTL);
    });

  });

  describe('reset', function() {

    it('should reset to default direction (LTR)', function() {
      let bidiService = new UnicodeBidiService(Dir.LTR);
      expect(bidiService.getDirection(sEmpty)).toBe(Dir.LTR);
      expect(bidiService.getDirection(sHebrew)).toBe(Dir.RTL);
      expect(bidiService.getDirection(sEmpty)).toBe(Dir.RTL);

      bidiService.reset();
      expect(bidiService.getDirection(sEmpty)).toBe(Dir.LTR);

      bidiService.reset();
      expect(bidiService.getDirection(sArabic)).toBe(Dir.RTL);

      bidiService.reset();
      expect(bidiService.getDirection(sEmpty)).toBe(Dir.LTR);
    });

    it('should reset to default direction (RTL)', function() {
      let bidiService = new UnicodeBidiService(Dir.RTL);
      expect(bidiService.getDirection(sEmpty)).toBe(Dir.RTL);
      expect(bidiService.getDirection(sFrench)).toBe(Dir.LTR);
      expect(bidiService.getDirection(sEmpty)).toBe(Dir.LTR);

      bidiService.reset();
      expect(bidiService.getDirection(sEmpty)).toBe(Dir.RTL);

      bidiService.reset();
      expect(bidiService.getDirection(sKorean)).toBe(Dir.LTR);

      bidiService.reset();
      expect(bidiService.getDirection(sEmpty)).toBe(Dir.RTL);
    });

  });

  describe('getDirection', function() {
    it('should remember the last direction', function() {
      let bidiService = new UnicodeBidiService();

      expect(bidiService.getDirection(sAsciiLetters)).toBe(Dir.LTR);
      expect(bidiService.getDirection(sEmpty)).toBe(Dir.LTR);
      expect(bidiService.getDirection(sAsciiPuncts)).toBe(Dir.LTR);
      expect(bidiService.getDirection(sAsciiDigits)).toBe(Dir.LTR);

      expect(bidiService.getDirection(sHebrew)).toBe(Dir.RTL);
      expect(bidiService.getDirection(sEmpty)).toBe(Dir.RTL);
      expect(bidiService.getDirection(sAsciiPuncts)).toBe(Dir.RTL);
      expect(bidiService.getDirection(sAsciiDigits)).toBe(Dir.RTL);

      expect(bidiService.getDirection(sFrench)).toBe(Dir.LTR);
      expect(bidiService.getDirection(sEmpty)).toBe(Dir.LTR);

      expect(bidiService.getDirection(sArabic)).toBe(Dir.RTL);
      expect(bidiService.getDirection(sEmpty)).toBe(Dir.RTL);

      expect(bidiService.getDirection(sKorean)).toBe(Dir.LTR);
      expect(bidiService.getDirection(sEmpty)).toBe(Dir.LTR);
    });
  });

});
