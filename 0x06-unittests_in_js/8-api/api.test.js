const request = require('request');
const { expect } = require('chai');

const port = 7865;
const baseUrl = `http://localhost:${port}`;

describe('Test suite for index page', function() {
  it('Status code', function(done) {
    request(`${baseUrl}`, function(error, response, body) {
      expect(error).to.be.null;
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Body', function(done) {
    request(`${baseUrl}`, function(error, response, body) {
      expect(error).to.be.null;
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Other routes', function(done) {
    request(`${baseUrl}/other-routes`, function(error, response, body) {
      expect(error).to.be.null;
      expect(response.statusCode).to.be.at.least(404);
      done();
    });
  });

  it ('Handle other errors gracefully', function(done) {
    request('http://non-existent-url.com', function(error, response, body) {
      expect(error).to.not.be.null;
      done();
    });
  });
});