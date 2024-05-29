/**
 * Simulate fetching data from API
 * @param {boolean} success State of response from server
 * @returns {object} containing data from server else nothing.
 */
function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
      if (success) {
        resolve({data: 'Successful response from the API'});
      } else {
        resolve();
    };
  });
  }
  
  module.exports = getPaymentTokenFromAPI;