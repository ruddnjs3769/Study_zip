// 인터페이스(Interface)

// 선택적 속성 - ?
// 읽기전용 속성 - readonly

interface User {
  name: string;
  readonly age: number;
  isValid?: boolean;
}
const heropy: User = {
  name: "Heropy",
  age: 85,
  isValid: true,
};
heropy.isValid = false;
// heropy.age = 22; // 불가능
const leo: User = {
  name: "Leo",
  age: 102,
};

//함수 타입 - 호출 시그니처(Call Signature)
// 인덱스 가능 타입 - 인덱스 시그니처(Index Signature)
// 확장(상속)
