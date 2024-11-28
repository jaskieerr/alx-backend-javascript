const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', function () {
  it('verifies that Utils.calculateNumber is called correctly', function () {
    const calculateStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWithExactly(calculateStub, 'SUM', 100, 20);
    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 10');

    calculateStub.restore();
    consoleSpy.restore();
  });
});
