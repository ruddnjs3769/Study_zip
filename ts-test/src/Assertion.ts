// 타입 단언(Assertion)
// '단언' - 주저하지 아니하고 딱 잘라 말함.

// 단언 키워드 - as
// Non-null 단언 연산자 - !

// // 1)
// const el = document.querySelector(".title");
// if (el) {
//   el!.textContent = "Hello world?!";
// }

// // 2)
// function getNumber(x: number | null | undefined) {
//   if (x) {
//     return Number(x.toFixed(2));
//   }
// }
// getNumber(3.142121);
// getNumber(null);

// // 3)
// function getValue(x: string | number, isNumber: boolean) {
//   if (isNumber) {
//     return Number((x as number).toFixed(2));
//   }
//   return (x as string).toUpperCase();
// }
// getValue("hello World", false);
// getValue(3.141592, true);

// 할당 단언

let num!: number;
console.log(num);
