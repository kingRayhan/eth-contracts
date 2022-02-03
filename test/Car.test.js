const asset = require("assert");

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;

describe("Testing of sum", () => {
  it("1 + 2 = 3", () => {
    asset.equal(sum(1, 2), 3);
  });

  it("4 + 6 = 10", () => {
    asset.equal(sum(4, 6), 10);
  });
});

describe("Testing of sub", () => {
  it("1 - 2 = -1", () => {
    asset.equal(sub(1, 2), -1);
  });

  it("4 - 6 = -2", () => {
    asset.equal(sub(4, 6), -2);
  });
});
