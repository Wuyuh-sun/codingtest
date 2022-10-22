/**
 * 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.
 * @param {number} num1 숫자1
 * @param {number} num2 숫자2
 * @returns
 */
function compare(num1, num2) {
  var answer = 0;
  if (num1 === num2) {
    answer = 1;
  } else {
    answer = -1;
  }
  return answer === 1 ? true : false;
}
console.log(10, 23, compare(10, 23));
console.log(10, 10, compare(10, 10));
