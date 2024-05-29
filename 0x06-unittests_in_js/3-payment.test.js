// 3-payment.test.js

const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
console.log(`sinon is: ${sinon}`);  // testing

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with correct arguments', function() {
    // Create a spy for Utils.calculateNumber
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Assert that Utils.calculateNumber was called with the correct arguments
    sinon.assert.calledWith(calculateNumberSpy, 'SUM', 100, 20);

    // Restore the original method to avoid affecting other tests
    calculateNumberSpy.restore();
  });

  it('should log the correct total', function() {
    // Create a spy for console.log
    const consoleLogSpy = sinon.spy(console, 'log');

    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Assert that console.log was called with the correct message
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 120');

    // Restore the original method to avoid affecting other tests
    consoleLogSpy.restore();
  });
});