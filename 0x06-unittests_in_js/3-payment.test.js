const sinon = require("sinon");
const { expect } = require("chai");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi", () => {
  it("should use Utils.calculateNumber with the correct arguments", () => {
    // Create a spy on Utils.calculateNumber
    const spy = sinon.spy(Utils, "calculateNumber");

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Assertions
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith("SUM", 100, 20)).to.be.true;

    // Restore the spy
    spy.restore();
  });
});
