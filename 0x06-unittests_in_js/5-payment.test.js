const sinon = require("sinon");
const { expect } = require("chai");
const sendPaymentRequestToApi = require("./5-payment");

describe("sendPaymentRequestToApi", () => {
  let consoleSpy;

  // Hook to set up the spy before each test
  beforeEach(() => {
    consoleSpy = sinon.spy(console, "log");
  });

  // Hook to restore the spy after each test
  afterEach(() => {
    consoleSpy.restore();
  });

  it("should log the correct total for inputs 100 and 20", () => {
    sendPaymentRequestToApi(100, 20);

    // Assertions
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith("The total is: 120")).to.be.true;
  });

  it("should log the correct total for inputs 10 and 10", () => {
    sendPaymentRequestToApi(10, 10);

    // Assertions
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith("The total is: 20")).to.be.true;
  });
});
