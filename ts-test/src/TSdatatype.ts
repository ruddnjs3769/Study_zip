// 타입 종류

//문자
// let str: string;
// let red: string = "Red";
// let green: string = "Green";
// let myColor: string = `My favorite color is ${red}.`;
// let yourColor: string = "Your color is " + green;

//숫자
// let num: number;
// let integer: number = 6;
// let float: number = 3.14;
// let infinity: number = Infinity;
// let nan: number = NaN;

//불린
// let isBoolean: boolean;
// let isDone: boolean = false;

//Null / Undefined
// let nul: null
// let und: undefined
// nul = null;
// let num: number
// console.log(nul)
// console.log(und)
// console.log(num)

//배열
// const fruits: string[] = ["Apple", "Banana", "Orange"];
// const numbers: number[] = [1, 2, 3];
// const union: (string | number)[] = ["Apple", 1, 2, "Banana", 3, "Orange"];
// const Array: [] = []

//객체
// const obj: object = {};
// const arr: object = [];
// const func: object = function () {}; //===> 엄격하지 않아서 잘 사용하지 않음

// interface User {
//   name: string;
//   age: number;
//   isValid: boolean;
// }
// const userA: User = {
//   name: "Heropy",
//   age: 85,
//   isValid: true,
// };
// const userB: User = {
//   name: "Neo",
//   age: 22,
//   isValid: false,
// };

//함수
// const add: (x: number, y: number) => number =
// const add = function (x: number, y: number): number {
//   return x + y;
// };
// const a: number = add(1, 2);

// // const hello: () => void =
// const hello = function (): void {
//   console.log("Hello World~!");
// };
// const h: void = hello();

//Any
// let hello: any = 'Hello world'
// hello = 123
// hello = false
// hello = null
// hello = {}
// hello = []
// hello = function () {}

//Unknown
// const a: any = 123;
// const u: unknown = 123;

// const any: any = u;
// const boo: boolean = u;
// const num: number = u;
// const arr: string[] = u;
// const obj: { x: string; y: number } = u;
// console.log(obj);

//Tuple
// const tuple: [string, number, boolean] = ["a", 1, false]; // 순서와 타입이 중요하다!
// const users: [number, string, boolean][] = [
//   [1, "Neo", true],
//   [2, "Evan", false],
//   [3, "Momo", true],
// ];

//Void
// function hello(msg: string): void {
//   console.log(`Hello ${msg}!`);
// }
// const hi: void = hello("World");
//Never
// const nev: [] = []
// nev.push(3)

//Union
// let union: (string | number | boolean)[] ;
// union = ["Hi"];
// union = [123];
// union = [false];

//Intersection
// interface User {
//   name: string;
//   age: number;
// }
// interface Validation {
//   isValid: boolean;
// }
// const heropy: User & Validation = {
//   name: 'Neo',
//   age: 85
// } // | 를 쓰면 둘 다 가능하다.
