/**
 * @providesModule clamp
 * @flow
 * @typechecks
 */

 /**
  * Clamps (or clips or confines) the value to be between min and max.
  */
function clamp(value: number, min: number, max: number): number {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}

module.exports = clamp;
