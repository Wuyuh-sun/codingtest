/**
 * 정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요.
 * @param {number} num1 숫자1
 * @param {number} num2 숫자2
 * @returns
 */
function persent(num1, num2) {
  var answer = num1 % num2;
  return answer;
}
console.log(persent(3, 2));
console.log(persent(10, 5));