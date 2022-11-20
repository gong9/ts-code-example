/**
 * 判断左右括号是否匹配
 * @param right
 * @param left
 */
const isMatched = (right: string, left: string): boolean => {
  if (right === '}' && left === '{')
    return true
  if (right === ']' && left === '[')
    return true
  if (right === ')' && left === '(')
    return true
  return false
}

/**
 * 括号匹配
 * @param {string} s
 */
const matchBracket = (s: string): boolean => {
  if (s.length === 0)
    return true

  const stack = []
  const leftBrackets = '{[('
  const rightBrackets = '}])'

  for (let i = 0; i < s.length; i++) {
    const currentItem = s[i]

    if (leftBrackets.includes(currentItem)) {
      stack.push(currentItem)
    }
    else if (rightBrackets.includes(currentItem)) {
      if (isMatched(currentItem, stack[stack.length - 1]))
        stack.pop()

      else
        return false
    }
  }

  return stack.length === 0
}

export default matchBracket
