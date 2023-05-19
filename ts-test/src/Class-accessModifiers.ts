// 클래스

// 접근 제어자(Access Modifiers)
// / public - 어디서나 자유롭게 접근 가능, 클래스 바디에서 생략 가능
// / protected - 나와 파생된 후손 클래스 내에서 접근 가능
// / private - 내 클래스에서만 접근 가능

// class UserA {
//   // public first: string = "";
//   // private last: string = "";
//   // protected age: number = 0;
//   constructor(
//     public first: string = "",
//     public last: string = "",
//     public age: number = 0
//   ) {
//     //매게변수 부분에서는 접근 제어자를 생략 불가함.
//     this.first = first;
//     this.last = last;
//     this.age = age;
//   }
//   protected getAge() {
//     return `${this.first} ${this.last} is ${this.age} years old`;
//   }
// }

// class UserB extends UserA {
//   getAge() {
//     return `${this.first} ${this.last} is ${this.age} years old`;
//   }
// }
// class UserC extends UserB {
//   getAge() {
//     return `${this.first} ${this.last} is ${this.age} years old`;
//   }
// }

// const neo = new UserA("Neo", "Anderson", 102);
// console.log(neo.first);
// console.log(neo.last);
// console.log(neo.age);
// neo.getAge();
