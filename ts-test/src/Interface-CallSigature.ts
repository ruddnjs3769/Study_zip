// 인터페이스(Interface)
// 함수 타입 - 호출 시그니처(Call Signature)

// interface GetName {
//   (message: string): string; // 매개변수 타입과 실행 이후 함수타입을 지정할 수 있다.
// } // 재사용이 필요한 함수일 때 호출 시그니처 방식으로 지정하는게 좋다.
// interface User {
//   name: string;
//   age: number;
//   getName: GetName;
// }

// const heropy: User = {
//   name: "Heropy",
//   age: 85,
//   getName(message: string) {
//     console.log(message);
//     return this.name;
//   },
// };
// heropy.getName("hello");
