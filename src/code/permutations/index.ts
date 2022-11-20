/**
 *
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * 输入：nums = [1,2,3]
  输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */

const permute = function (nums: number[]) {
  const res: number[][] = []
  const backtrack = (path: number[]) => {
    if (path.length === nums.length) {
      res.push(path)
      return
    }
    nums.forEach((n) => {
      if (path.includes(n))
        return
      backtrack(path.concat(n))
    })
  }
  backtrack([])
  return res
}

const permutations = (arr: number[]) => {
  const res: number[][] = []

  const dfs = (path: number[]) => {
    if (path.length === arr.length) {
      res.push(path)
      return
    }
    arr.forEach((n) => {
      if (path.includes(n))
        return
      dfs(path.concat(n))
    })
    // for (let i = 0; i < arr.length; i++) {
    //   if (path.includes(arr[i])) return;
    //   dfs(path.concat(arr[i]));
    // }
  }

  dfs([])
  return res
}

export {
  permute,
  permutations,
}

