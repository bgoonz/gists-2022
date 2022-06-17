/**/

'use strict';

let ErrorUtils = jest.genMockFromModule('ErrorUtils');

ErrorUtils.applyWithGuard.mockImplementation(
  (callback, context, args) => callback.apply(context, args)
);

ErrorUtils.guard.mockImplementation(callback => callback);

module.exports = ErrorUtils;
