import add from './add'

describe('add', () => {
    test('add 1,2', () => {
      expect(add(1,2)).toBe(3);
    })
})