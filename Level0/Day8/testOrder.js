/**
 * 
문제 설명
외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
중복된 원소는 없습니다.
1 ≤ emergency의 길이 ≤ 10
1 ≤ emergency의 원소 ≤ 100
 * @param {Array} emergency
 * @returns 
 */
function testOrder(emergency) {
  var answer = [];

  let order = new Map();

  let desc = [...emergency].sort((a, b) => b-a);

  desc.map((item, i) => {
    order.set(item, i + 1);
  });

  [...emergency].map((item) => {
    answer.push(order.get(item));
  });

  return answer;
}

console.log(testOrder([3, 76, 24])); // 	[3, 1, 2]
console.log(testOrder([1, 2, 3, 4, 5, 6, 7])); // 	[7, 6, 5, 4, 3, 2, 1]
console.log(testOrder([30, 10, 23, 6, 100])); // [2, 4, 3, 5, 1]
