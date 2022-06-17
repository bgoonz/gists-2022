/**
 * @providesModule getViewportDimensions
 * @flow
 * @typechecks
 */

type ViewportDimensions = {width: number, height: number};

function getViewportWidth(): number {
  let width;
  if (document.documentElement) {
    width = document.documentElement.clientWidth;
  }

  if (!width && document.body) {
    width = document.body.clientWidth;
  }

  return width || 0;
}

function getViewportHeight(): number {
  let height;
  if (document.documentElement) {
    height = document.documentElement.clientHeight;
  }

  if (!height && document.body) {
    height = document.body.clientHeight;
  }

  return height || 0;
}

/**
 * Gets the viewport dimensions including any scrollbars.
 */
function getViewportDimensions(): ViewportDimensions {
  return {
    width: window.innerWidth || getViewportWidth(),
    height: window.innerHeight || getViewportHeight(),
  };
}

/**
 * Gets the viewport dimensions excluding any scrollbars.
 */
getViewportDimensions.withoutScrollbars = function(): ViewportDimensions {
  return {
    width: getViewportWidth(),
    height: getViewportHeight(),
  };
};

module.exports = getViewportDimensions;
