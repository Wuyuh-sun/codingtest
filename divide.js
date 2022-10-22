/**
 * 정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.
 * @param {number} num1 숫자1
 * @param {number} num2 숫자2
 * @returns
 */
function divide(num1, num2) {
  var answer = Math.floor((num1 / num2) * 1000);
  return answer;
}
console.log(divide(100, 23));
