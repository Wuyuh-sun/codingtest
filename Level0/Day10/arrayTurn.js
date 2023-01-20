/**
 * 
배열 회전시키기
문제 설명
정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
3 ≤ numbers의 길이 ≤ 20
direction은 "left" 와 "right" 둘 중 하나입니다.
 * @param {Number[]} numbers
 * @param {String} direction
 * @returns 
 */
function arrayTurn(numbers, direction) {
  var answer = [];

  switch (direction) {
    case "right":
      numbers.unshift(numbers[numbers.length - 1]);
      numbers.pop();
      break;

    case "left":
      numbers.push(numbers[0]);
      numbers.shift();
      break;
  }
  answer = numbers;
  return answer;
}

console.log(arrayTurn([1, 2, 3], "right")); // [3, 1, 2]
console.log(arrayTurn([4, 455, 6, 4, -1, 45, 6], "left")); // [455, 6, 4, -1, 45, 6, 4]
