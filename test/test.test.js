const assert = require("assert");

class Car {
  park() {
    return "park";
  }
  drive() {
    return "drive";
  }
}

let car;

beforeEach(() => {
  car = new Car();
});

it("test1", () => {
  assert.equal(car.park(), "park");
});

it("test2", () => {
  assert.equal(car.drive(), "drive");
});
