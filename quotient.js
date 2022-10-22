/**
 * 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.
 * @param {number} num1 숫자1
 * @param {number} num2 숫자2
 * @returns
 */
function quotient(num1, num2) {
  var answer = Math.floor(num1 / num2);
  return answer;
}
console.log(quotient(10, 5));
