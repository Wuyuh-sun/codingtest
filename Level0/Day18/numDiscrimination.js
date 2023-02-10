/**
 * 
제곱수 판별하기
문제 설명
어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ n ≤ 1,000,000
 * @param {Number} n
 * @returns 
 */
function numDiscrimination(n) {
  var answer = 0;

  let i = 1;
  while (true) {
    if (i * i === n) {
      answer = 1;
      break;
    } else if (i > n/2) {
      answer = 2;
      break;
    } else {
      i++;
    }
  }

  return answer;
}

console.log(numDiscrimination(144)); // 1
console.log(numDiscrimination(976)); // 2
