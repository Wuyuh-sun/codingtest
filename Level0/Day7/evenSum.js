/**
 * 
정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

제한사항
0 < n ≤ 1000
 * @param {number} n
 * @returns 
 */
function evenSum(n) {
  var answer = 0;
  for (let i = 0; i < n + 1; i++) {
    if (i % 2 === 0) {
      answer += i;
    }
  }
  return answer;
}

console.log(evenSum(10)); // 30
console.log(evenSum(4)); // 6
