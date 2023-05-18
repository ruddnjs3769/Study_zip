function solution(numbers) {
  const numDic = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  let converter = "";
  let result = "";
  for (i = 0; i < numbers.length; i++) {
    converter += numbers[i];
    if (numDic[converter] !== undefined) {
      result += numDic[converter];
      converter = "";
    }
  }
}

solution("onetwothreefourfivesixseveneightnine");
solution("zeroonetwothreefourfivesixseveneightnine");
solution("zeroonetwothreefourfivesixseveneightninezero");
