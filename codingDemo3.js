/**
 * 정수 n이 주어질때, 1부터 n까지의 정수를 순서대로 담은 배열을 리턴하도록 solution 함수를 작성했습니다. 이때, 코드가 올바르게 동작할 수 있도록 빈칸을 알맞게 채워주세요.
 * @param {Number} n 정수
 * @returns
 */
function solution(n) {
  var answer = [];
  for(var i=0; i<n; i++){
    answer.push(i+1); //빈칸
  }
  return answer;
}

console.log('solution',solution(3));

