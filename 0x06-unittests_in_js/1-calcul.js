/**
 * Calculate the sum of rounded values of two integers.
 * @param {string} type operation to execute
 * @param {number} a The first integer.
 * @param {number} b The second integer
 * @returns {(number|string)} The sum of a and b.
 */
function calculateNumber(type, a, b) {
    types = ['SUM', 'SUBTRACT', 'DIVIDE'];
    if (!types.includes(type)) {
      return 'Error';
    }
    r_a = Math.round(a);
    r_b = Math.round(b);
    result = NaN;
    switch (type) {
      case 'SUM':
        result = r_a + r_b;
        break;
      case 'SUBTRACT':
        result = r_a - r_b;
        break;
      case 'DIVIDE':
        if (r_b === 0) {
          return 'Error'; // zerodivision error
        }
        result = r_a / r_b;
        break;
    }
    return result;
  }
  
  module.exports = calculateNumber;