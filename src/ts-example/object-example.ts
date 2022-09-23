// ? 需要定义对象结构数据的哪些内容呢
// ! 对象中每一个属性都要定义其类型





//! 两种修饰符 1.可选修饰符 2.只读修饰符

interface ExamObj01 {
  readonly name: string;
  age?: number;
}

const obj_example_01: ExamObj01 = {
  name: "小宫同学",
  age: 18,
};
// obj_example_01.name='张三' 🙅




//? 数组元组有只读修饰符么
//! 有，但是只是针对整体来说的

type ExamReadonlyArr = readonly string[];
const arr_example_01: ExamReadonlyArr = ["1", "2"];
// arr_example_01.push('3')  🙅: 类型“ExamReadonlyArr”上不存在属性“push”。ts(2339)


//? object、Object 以及 { }
//! ts中，Object可以理解为是包含了所有类型