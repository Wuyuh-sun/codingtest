/**
 * 머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다. 피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때, n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
 * @param {Number} slice 피자 조각 수
 * @param {Number} n 사람 수
 * @returns
 */
function splitPizza3(slice, n) {
  var answer = Math.ceil(n/slice);
  return answer;
}
console.log(splitPizza3(7, 10)); // 2
console.log(splitPizza3(4, 12)); // 3
