const { expect } = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe("getPaymentTokenFromAPI", () => {
  it("should return a resolved promise with correct data when success is true", (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: "Successful response from the API" });
        done(); // Call done to indicate the test has completed
      })
      .catch((error) => done(error)); // Ensure done is called in case of an error
  });

  it("should do nothing when success is false", (done) => {
    const result = getPaymentTokenFromAPI(false);
    expect(result).to.be.undefined;
    done(); // Immediate completion since no promise is returned
  });
});
