/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *

 *
 * @providesModule monitorCodeUse
 */

'use strict';

let invariant = require('invariant');

/**
 * Provides open-source compatible instrumentation for monitoring certain API
 * uses before we're ready to issue a warning or refactor. It accepts an event
 * name which may only contain the characters [a-z0-9_] and an optional data
 * object with further information.
 */

function monitorCodeUse(eventName, data) {
  invariant(
    eventName && !/[^a-z0-9_]/.test(eventName),
    'You must provide an eventName using only the characters [a-z0-9_]'
  );
}

module.exports = monitorCodeUse;
