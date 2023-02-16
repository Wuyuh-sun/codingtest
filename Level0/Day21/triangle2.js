/**
 * 
삼각형의 완성조건 (2)
문제 설명
선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.

가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요.

제한사항
sides의 원소는 자연수입니다.
sides의 길이는 2입니다.
1 ≤ sides의 원소 ≤ 1,000
 * @param {Number[]} sides
 * @returns 
 */
function triangle2(sides) {
  var answer = 0;

  sides.sort((a, b) => a - b);

  // 가장 긴 변이 sides의 두 합보다 작은 경우
  for (let i = sides[1] + 1; i < sides[0] + sides[1]; i++) {
    answer++;
  }

  // 가장 긴 변이 sides[1]일 경우
  for (let i = sides[1] - sides[0] + 1; i <= sides[1]; i++) {
    answer++;
  }

  return answer;

  // return Math.min(...sides)*2-1
}

console.log(triangle2([1, 2])); // 1
console.log(triangle2([3, 6])); // 5
console.log(triangle2([11, 7])); // 13
