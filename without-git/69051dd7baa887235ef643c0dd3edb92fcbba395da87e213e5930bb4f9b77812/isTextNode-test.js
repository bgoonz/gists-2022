/**
 * @emails oncall+ui_infra@fb.com
 */

let isTextNode = require('isTextNode');

describe('isTextNode', () => {
  it('should reject strings', () => {
    expect(isTextNode('')).toBe(false);
    expect(isTextNode('a real string')).toBe(false);
  });
  it('should accept text nodes from DOM', () => {
    let span = document.createElement('span');
    span.innerHTML = '<b>some text</b>';
    document.body.appendChild(span);
    let textnode = document.body.lastChild.firstChild.firstChild;
    try {
      expect(isTextNode(textnode)).toBe(true);
    } finally {
      document.body.removeChild(span);
    }
  });
  it('should accept dynamically created text nodes', () => {
    let textnode = document.createTextNode('some more text');
    expect(isTextNode(textnode)).toBe(true);
  });
});
