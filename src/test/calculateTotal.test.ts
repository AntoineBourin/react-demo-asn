import { calculateTotal } from "./calculateTotal";

describe("calculateTotal", () => {
  it("calculate the correct number with parameters", () => {
    const result = calculateTotal(10, 5);

    expect(result).toBe(50);
  });
});
