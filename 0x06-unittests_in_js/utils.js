const Utils = {
  calculateNumber: (type, a, b) => {
    a = Math.round(a);
    b = Math.round(b);
    if (type === "SUM") return a + b;
    if (type === "SUBTRACT") return a - b;
    if (type === "DIVIDE") return b !== 0 ? a / b : "Error";
    throw new Error("Invalid type");
  },
};

module.exports = Utils;
