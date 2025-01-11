const calculateNumber = require("./0-calcul");
const assert = require("assert");

describe("calculateNumber", function() {
	it("should return the sum of rounded positive integers", function() {
    assert.equal(calculateNumber(1, 3), 4);
  });

  it("should return the sum of rounded positive floats", function() {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });

    it("should return the sum of rounded negative floats", function() {
    assert.equal(calculateNumber(-1.5, -3.7), -5);
  });

  it("should round up when the decimal is .5 or greater", function() {
    assert.equal(calculateNumber(1.5, 3), 5);
  });

  it("should round down when the decimal is less than .5", function() {
    assert.equal(calculateNumber(1.2, 3), 4);
  });

    it("should handle negative numbers correctly", function() {
        assert.equal(calculateNumber(-1.2, -3.7), -5);
    });

    it("should handle zero correctly", function() {
        assert.equal(calculateNumber(0, 0), 0);
    });

        it("should handle one zero correctly", function() {
        assert.equal(calculateNumber(0, 3), 3);
    });
});
