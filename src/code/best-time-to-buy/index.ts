/**
题目描述:
给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。
注意：你不能在买入股票前卖出股票。
 */

// 转移公式：max(arr[i] - min(arr.slice(0,i-1)))
const maxProfit = (arr: number[]) => {
  let price = 0

  for (let i = 0; i < arr.length; i++) {
    const min = i === 0 ? arr[0] : Math.min(...arr.slice(0, i))
    if (price < arr[i] - min)
      price = arr[i] - min
  }

  return price
}

// 简化时间复杂度
// const maxProfit2 = (arr: number[]) => {
//   let price = 0
//   let min = arr[0]

//   for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i])
//       min = arr[i]

//     if (price < arr[i] - min)
//       price = arr[i] - min
//   }

//   return price
// }

// const maxProfit3 = (arr: number[]) => {
//   let pre = arr[0]
//   let price = 0
//   for (let i = 1; i < arr.length; i++) {
//     if (pre <= arr[i])
//       price = price + arr[i] - pre

//     pre = arr[i]
//   }
// }

export default maxProfit

