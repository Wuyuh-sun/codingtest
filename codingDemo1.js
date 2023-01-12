/**
 * 직사각형을 만드는 데 필요한 4개의 점 중 3개의 좌표가 주어질 때, 나머지 한 점의 좌표를 구하려고 합니다. 점 3개의 좌표가 들어있는 배열 v가 매개변수로 주어질 때, 직사각형을 만드는 데 필요한 나머지 한 점의 좌표를 return 하도록 solution 함수를 완성해주세요. 단, 직사각형의 각 변은 x축, y축에 평행하며, 반드시 직사각형을 만들 수 있는 경우만 입력으로 주어집니다.
 * @param {Array} v 배열
 * @returns
 */
function codingDemo1(v) {
  var answer = [[]];
  answer[0] = v[0][0] ^ v[1][0] ^ v[2][0];
  answer[1] = v[0][1] ^ v[1][1] ^ v[2][1];
  return answer;
}
// console.log(codingDemo1([[1, 4], [3, 4], [3, 10]]));
// console.log(codingDemo1([[1, 1], [2, 2], [1, 2]]));

console.log(1 ^ 3 ^ 3)
// 0001
// 0011
// 0011
// return 0001 = 1
console.log(4 ^ 4 ^ 10)
// 0100
// 0100
// 1010
// return 1010 = 10


