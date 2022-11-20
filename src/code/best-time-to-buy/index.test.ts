import maxProfit from "./index";

describe("买卖股票的最佳时机", () => {
  test("[7,1,5,3,6,4]", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });
  test("[12,4,3]", () => {
    expect(maxProfit([12, 4, 3])).toBe(0);
  });
  test("[12,2,3]", () => {
    expect(maxProfit([12, 2, 3])).toBe(1);
  });
});
