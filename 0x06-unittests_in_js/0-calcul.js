/**
 * Calculate the sum of rounded values of two integers.
 * @param {number} a The first integer.
 * @param {number} b The second integer
 * @returns {number} The sum of a and b.
 */
function calculateNumber(a, b) {
    return Math.round(a) + Math.round(b);
  }
  
  module.exports = calculateNumber;