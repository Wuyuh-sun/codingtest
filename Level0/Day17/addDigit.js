/**
 * 
자릿수 더하기
문제 설명
정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

제한사항
0 ≤ n ≤ 1,000,000

 * @param {Number} n
 * @returns 
 */
function addDigit(n) {
  var answer = 0;

  String(n).split("").map((item,i)=>{
    answer += Number(item);
  })

  return answer;
}

console.log(addDigit(1234)); // 10
console.log(addDigit(930211)); // 16
