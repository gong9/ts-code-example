/**
 * @file 类型比较
 */

interface Foo {
  name: string;
  age: number;
}

interface Bar {
  name: string;
  job: string;
  age: number;
}

declare let foo: Foo;
declare let bar: Bar;

foo = bar;
