/**
 * Determines whether the given value is empty or not.
 *
 * @function isEmpty
 * @param {string | number | object} value - The value to check for emptiness.
 * @returns {boolean} true if the value is empty, false otherwise.
 */
export const isEmpty = (value: string | number | object): boolean => {
  if (value === null || typeof value === 'undefined') {
    return true;
  }
  if (typeof value === 'number' && isNaN(value)) {
    return true;
  }
  if (typeof value === 'string' && value.trim().length === 0) {
    return true;
  }
  if (typeof value === 'object' && Object.keys(value).length === 0) {
    return true;
  }
  return false;
};
