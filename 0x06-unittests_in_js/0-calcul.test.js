const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should correctly round and return -4 when inputs are -1 and -2.7', () => {
    assert.strictEqual(calculateNumber(-1, -2.7), -4);
  });

  it('should correctly round and return -4 when inputs are -1.7 and -2', () => {
    assert.strictEqual(calculateNumber(-1.7, -2), -4);
  });

  it('should correctly round and return 5 when inputs are 2.4 and 2.6', () => {
    assert.strictEqual(calculateNumber(2.4, 2.6), 5);
  });

  it('should correctly round and return 3 when inputs are 1.5 and 1.4', () => {
    assert.strictEqual(calculateNumber(1.5, 1.4), 3);
  });

  it('should handle cases where inputs are integers without rounding', () => {
    assert.strictEqual(calculateNumber(3, 2), 5);
  });

  it('should return 0 when both inputs are 0', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should correctly handle inputs with different signs', () => {
    assert.strictEqual(calculateNumber(1.4, -2.6), -1);
  });
});
