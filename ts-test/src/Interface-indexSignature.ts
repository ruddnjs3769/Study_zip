// 인터페이스 (Interface)
// 인덱스 기능 타입 - 인덱스 시그니처(Index Signature)

// //배열
// interface Fruits {
//   [item: number]: String;
// }
// const fruits: Fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits);

// //객체
// interface User {
//   [key: string]: unknown;
//   name: string;
//   age: number;
// }
// const heropy: User = {
//   name: "Heropy",
//   age: 85,
// };
// heropy["isValid"] = true;
// heropy["emails"] = ["thesecon@gmail.com", "test@gmail.com"];
// console.log(heropy);

// 예제
// interface Payload {
//   [key: string]: unknown;
// }
// function logValues(payload: Payload) {
//   for (const key in payload) {
//     console.log(payload[key]);
//   }
// }

// interface User {
//   [key: string]: unknown;
//   name: string;
//   age: number;
//   isValid: boolean;
// }

// const heropy: User = {
//   name: "Heropy",
//   age: 86,
//   isValid: true,
// };
// logValues(heropy);
