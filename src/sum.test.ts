import { sum } from "./sum";

describe("sum", () => {
  it("should return correct result", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
