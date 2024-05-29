// 5-payment.test.js Tests

const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
  let consoleLogSpy;

  beforeEach(function() {
    // Create a spy for console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Restore the spy
    consoleLogSpy.restore();
  });

  // Test cases
  it('Total 100 and 20', function() {
    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Assert console is called
    sinon.assert.calledOnce(consoleLogSpy);
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 120');
  });

  it ('Total 10 and 10', function() {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledOnce(consoleLogSpy);
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 20');
  });
});