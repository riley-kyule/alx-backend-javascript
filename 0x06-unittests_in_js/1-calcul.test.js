const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("Test for calculateNumber", function() {
  it("SUM: two integers", function() {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
  });
  it("SUM: two floats", function() {
    assert.equal(calculateNumber('SUM', 1.3, 3.7), 5);
  });
  it("SUM: negative integers", function() {
    assert.equal(calculateNumber('SUM', -1.5, -3.7), -5);
  });

  it("SUBTRACT: two integers", function() {
    assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
  });
  it("SUBTRACT: two floats", function() {
    assert.equal(calculateNumber('SUBTRACT', 1.3, 3.7), -3);
  });
  it("SUBTRACT: negative integers", function() {
    assert.equal(calculateNumber('SUBTRACT', -1.5, -3.7), 3);
  });

  it("DIVIDE: two integers", function() {
    assert.equal(calculateNumber('DIVIDE', 1, 3), 1 / 3);
  });
  it("DIVIDE: two floats", function() {
    assert.equal(calculateNumber('DIVIDE', 1.3, 3.7), 0.25);
  });
  it("DIVIDE: negative integers", function() {
    assert.equal(calculateNumber('DIVIDE', -1.5, -3.7), 0.25);
  });

  it("DIVIDE: (integers) zerodivision error", function() {
    assert.equal(calculateNumber('DIVIDE', 4, 0), 'Error');
  });
  it("DIVIDE: (floats) zerodivision error", function() {
    assert.equal(calculateNumber('DIVIDE', 3.5, 0.3), 'Error');
  });
});