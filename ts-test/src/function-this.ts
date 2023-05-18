// // 함수- 명시적 this

// interface Cat {
//   name: string;
//   age: number;
// }

// const cat: Cat = {
//   name: "Lucy",
//   age: 3,
// };

// function hello(this: Cat, message: string) {
//   // this의 타입을 명시적으로 지정해라.(안하면 any타입으로 암시적으로 들어감)
//   console.log(`Hello ${this.name}, ${message}`);
// }
// hello.call(cat, "you are pretty!!");
