// // 제네릭(Generic)
// /// 인터페이스, 제약조건(Constraints)

// interface MyData<T extends string | number> {
//   name: string
//   value: T
// }
// const dataA: MyData<string> = {
//   name: 'Data A',
//   value: 'Hello World'
// }

// const dataB: MyData<number> = {
//   name: 'Data B',
//   value: 1234
// }

// const dataC: MyData<boolean> = {
//   name: 'Data C',
//   value: true
// }
// const dataD: MyData<number[]> = {
//   name: 'Data D',
//   value: [1,2,3,4]
// }
