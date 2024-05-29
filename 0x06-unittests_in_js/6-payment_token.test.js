// Asynchronous test
const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');
const util = require('util');

const expect = chai.expect;
describe('getPaymentTokenFromAPI test suite', function() {
  it('Successful API response', function() {
    // Call the asynchronous function under test
    const strictResponse = { data: 'Successful response from the API' };
    return getPaymentTokenFromAPI(true)
      .then(response => {
        // Ensure response is correct
        expect(response).to.deep.equal(strictResponse);
      });
  });
});