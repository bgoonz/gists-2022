/**
 * @providesModule URI
 * @flow
 */

'use strict';

class URI {
  _uri: string;

  constructor(uri: string) {
    this._uri = uri;
  }

  toString(): string {
    return this._uri;
  }
}

module.exports = URI;
