/**
 * 
문제 설명
순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다. 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ n ≤ 1,000,000
 * @param {Number} n
 * @returns 
 */
function orderedPair(n) {
  var answer = [];

  for(let i = 1; i <= n; i++){
    if(n % i === 0){
      answer.push([n/i, i]);
    }
  }

  return answer.length;
}

console.log(orderedPair(20)); // 6
console.log(orderedPair(100)); // 9
