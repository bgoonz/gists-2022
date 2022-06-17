/**
 * @providesModule resolveImmediate
 * @flow
 */

const resolvedPromise = Promise.resolve();

/**
 * An alternative to setImmediate based on Promise.
 */
function resolveImmediate(callback: () => any): void {
  resolvedPromise.then(callback).catch(throwNext);
}

function throwNext(error) {
  setTimeout(() => {
    throw error;
  }, 0);
}

module.exports = resolveImmediate;
