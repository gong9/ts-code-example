import maxProfit from "./index";

describe("买卖股票的最佳时机", () => {
  test("[7,1,5,3,6,4]", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });
  test("[12,3,4]", () => {
    expect(maxProfit([12, 4, 3])).toBe(0);
  });
});
