import matchBracket from './index'

describe('matchBracket', () => {
  test('normal', () => {
    expect(matchBracket('123({234})')).toBe(true)
  })
  test('not normal', () => {
    expect(matchBracket('123({(234}))')).toBe(false)
  })
  test('boundary test', () => {
    expect(matchBracket('')).toBe(true)
  })
  test('normal but add \')\'', () => {
    expect(matchBracket('123({234}))')).toBe(false)
  })
})
