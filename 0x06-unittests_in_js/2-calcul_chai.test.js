const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('Test for calculateNumber', function() {
  it('SUM: two integers', function() {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });
  it('SUM: two floats', function() {
    expect(calculateNumber('SUM', 1.3, 3.7)).to.equal(5);
  });
  it('SUM: negative integers', function() {
    expect(calculateNumber('SUM', -1.5, -3.7)).to.equal(-5);
  });

  it('SUBTRACT: two integers', function() {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
  });
  it('SUBTRACT: two floats', function() {
    expect(calculateNumber('SUBTRACT', 1.3, 3.7)).to.equal(-3);
  });
  it('SUBTRACT: negative integers', function() {
    expect(calculateNumber('SUBTRACT', -1.5, -3.7)).to.equal(3);
  });

  it('DIVIDE: two integers', function() {
    expect(calculateNumber('DIVIDE', 1, 3)).to.equal(1 / 3);
  });
  it('DIVIDE: two floats', function() {
    expect(calculateNumber('DIVIDE', 1.3, 3.7)).to.equal(0.25);
  });
  it('DIVIDE: negative integers', function() {
    expect(calculateNumber('DIVIDE', -1.5, -3.7)).to.equal(0.25);
  });

  it('DIVIDE: (integers) zerodivision error', function() {
    expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
  });
  it('DIVIDE: (floats) zerodivision error', function() {
    expect(calculateNumber('DIVIDE', 3.5, 0.3)).to.equal('Error');
  });
});