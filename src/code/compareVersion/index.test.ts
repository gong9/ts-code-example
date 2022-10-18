import compareVersion from './index'

describe('compareVersion',()=>{
    test('前者大',()=>{
        expect(compareVersion('1.1.1','1.0')).toBe(1)
    })
    test('后者大',()=>{
        expect(compareVersion('1.1.1','1.1.3')).toBe(-1)
    })
    test('相等',()=>{
        expect(compareVersion('1.1.1','1.1.1')).toBe(0)
    })
})