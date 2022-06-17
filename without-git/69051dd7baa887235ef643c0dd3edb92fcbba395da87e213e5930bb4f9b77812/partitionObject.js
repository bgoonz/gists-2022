/**
 * Copyright 2015-present Facebook. All Rights Reserved.
 *
 * @providesModule partitionObject
 * @typechecks
 * @flow
 */

'use strict';

let forEachObject = require('forEachObject');

/**
 * Partitions an object given a predicate. All elements satisfying the predicate
 * are part of the first returned object, and all elements that don't are in the
 * second.
 */
function partitionObject<Tv>(
  object: {[key: string]: Tv},
  callback: (value: Tv, key: string, object: {[key: string]: Tv}) => boolean,
  context?: any
): [{[key: string]: Tv}, {[key: string]: Tv}] {
  let first = {};
  let second = {};
  forEachObject(object, (value, key) => {
    if (callback.call(context, value, key, object)) {
      first[key] = value;
    } else {
      second[key] = value;
    }
  });
  return [first, second];
}

module.exports = partitionObject;
