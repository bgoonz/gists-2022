/**
 */

'use strict';

jest.unmock('getActiveElement');

let getActiveElement = require('getActiveElement');

describe('getActiveElement', () => {
  it('returns body when there is no activeElement', () => {
    let element = getActiveElement();
    expect(element.tagName).toEqual('BODY');
  });

  it('uses optional document parameter when provided', () => {
    let iframe = document.createElement('iframe');
    document.body.appendChild(iframe);
    let iframeDocument = iframe.contentDocument;
    let element = getActiveElement(iframeDocument);
    try {
      expect(element.ownerDocument).toBe(iframeDocument);
      expect(element.ownerDocument).not.toBe(document);
    } finally {
      document.body.removeChild(iframe);
    }
  });
});
