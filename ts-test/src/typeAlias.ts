// 타입 별칭(Alias)

// type TypeA = string
// type TypeB = string | number | boolean
// type User = {
//   name: string
//   age: number
//   isValid: boolean
// } | [string, number, boolean]

// const userA: User = {
//   name: 'Neo',
//   age: 85,
//   isValid: true
// }
// const userB: User = ['Evan', 36, false]

// function someFunc(param: TypeB): TypeA {
//   switch (typeof param) {
//     case 'string':
//       return param.toUpperCase()
//     case 'number':
//       return param.toFixed(2)
//     default:
//       return "boolean!";
//   }
// }

// 인터페이스와의 차이
// type TypeUser = { // 할당 연산자가 필요함
//   name: string
//   age: number
//   isValid: boolean
// }
// interface InterfaceUser {
//   name: string
//   age: number
//   isValid: boolean
// }

// const heropy: InterfaceUser = {
//   name: 'heropy',
//   age: 42,
//   isValid: true
// }

// 둘 사이에 큰 차이는 없지만, 굳이 권장하자면,
// interface를 사용하는 것이 좋다.
