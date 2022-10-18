const arr:[string,number?,boolean?]=['1',1,false]
// ?问题： 向上面这行代码可读性不好，只能知道当前元组中的元素是什么类型，并不能知道它们分别代表了什么含义
// ! ts4.0 提供具名元组

const tuple_example_01:[name:string,age:number]=['xiaogongtongxue',18]

// ?问题： 元组和数组的区别
// ! 数组的数量不定，元组数量是确定的