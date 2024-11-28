const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi', function () {
  let logSpy;

  beforeEach(function () {
    logSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    sinon.restore();
  });

  it('logs "The total is: 120" for arguments 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnceWithExactly(logSpy, 'The total is: 120');
  });

  it('logs "The total is: 20" for arguments 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledOnceWithExactly(logSpy, 'The total is: 20');
  });
});
