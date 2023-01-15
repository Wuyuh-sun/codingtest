/**
 * 머쓱이는 40살인 선생님이 몇 년도에 태어났는지 궁금해졌습니다. 나이 age가 주어질 때, 2022년을 기준 출생 연도를 return 하는 solution 함수를 완성해주세요.
 * @param {Number} age 구매한 옷의 가격
 * @returns
 */
 function ageOutput(age) {
  const result = 2022 - age + 1;
  var answer = result;
  return answer;
}
console.log(ageOutput(40)); // 1983
console.log(ageOutput(23)); // 2000
