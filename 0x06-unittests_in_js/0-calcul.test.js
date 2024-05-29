const assert = require("assert");
const calculateNumber = require('./0-calcul');

describe("Test for calculateNumber", function() {
  it("sum of integers", function() {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it("integer and float", function() {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it("two floats", function() {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it("two floats with higher approx", function() {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it("negative and positive integers", function() {
    assert.equal(calculateNumber(-1, 3), 2);
  });
  it("two negative integers", function() {
    assert.equal(calculateNumber(-1, -3), -4);
  });
  it("negative (integer and float)", function() {
    assert.equal(calculateNumber(-1, -3.7), -5);
  });
  it("negative (float and float)", function() {
    assert.equal(calculateNumber(-1.2, -3.7), -5);
  });
  it("negative (float and float) with higher approx", function() {
    assert.equal(calculateNumber(-1.5, -3.7), -5);
  });
  it("zeros", function() {
    assert.equal(calculateNumber(0, 0), 0);
  });
});