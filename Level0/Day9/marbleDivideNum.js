/**
 * 
구슬을 나누는 경우의 수
문제 설명
머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다. 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

제한사항
1 ≤ balls ≤ 30
1 ≤ share ≤ 30
구슬을 고르는 순서는 고려하지 않습니다.
share ≤ balls
 * @param {Number} balls
 * @param {Number} share
 * @returns 
 */
function rockpaperscissors(balls, share) {
  var answer = 0;

  var factorial = (n) =>{
    var result = BigInt(1);
    for(let i = n; i > 0; i--){
      result *= BigInt(i);
    }
    return result;
  }

  return factorial(balls) / (factorial(balls - share) * factorial(share));
}

console.log(rockpaperscissors(3, 2)); // 3
console.log(rockpaperscissors(5, 3)); // 10

// 재귀함수 풀이법

// const 팩토리얼 = (num) => num === 0 ? 1 : num * 팩토리얼(num - 1)

// function solution(balls, share) {
//   return Math.round(팩토리얼(balls) / 팩토리얼(balls - share) / 팩토리얼(share))
// }