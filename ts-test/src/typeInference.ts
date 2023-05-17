// 타입 추론(Inference)
// '추론' = 어떠한 판단을 근거로 삼아 다른 판단을 이끌어 냄

//근거 -->
// 1) 초기화 된 변수
// 2) 기본값이 설정된 매개 변수
// 3) 반환 값이 있는 함수

// let num = 12
// num = 'hi'

//초기화 된 변수 `num`
// let num = 12

// //기본값이 지정된 매개 변수 'b' + 반환 값이 확실한 함수 `add`
// function add(a: number, b = 2) {
//   return a + b
// }