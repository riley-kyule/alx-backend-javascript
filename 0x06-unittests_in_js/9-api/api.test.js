const request = require('request');
const { expect } = require('chai');

const port = 7865;
const baseUrl = `http://localhost:${port}`;

describe('Test suite for /cart page', function() {
  // Test cases
  it('Status code -> :id is a number', function(done) {
    request(`${baseUrl}/cart/123`, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Body -> :id is a number', function(done) {
    request(`${baseUrl}/cart/123`, function(error, response, body) {
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('Status code -> :id is a not number', function(done) {
    request(`${baseUrl}/cart/abc`, function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('Body -> :id is a not', function(done) {
    request(`${baseUrl}/cart/abc`, function(error, response, body) {
      expect(body).to.equal('Invalid ID. ID must be a number.');
      done();
    });
  });
});