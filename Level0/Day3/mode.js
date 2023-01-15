/**
 * 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.
 * @param {Array} array 배열
 * @returns
 */
function mode(array) {
  let arr = new Map();
  for (let i = 0; i < array.length; i++) {
    arr.set(array[i], (arr.get(array[i]) || 0) + 1);
  }
  let max = Math.max(...[...arr].map((v) => v[1]));
  let count = [...arr].filter((v) => v[1] === max).length;

  var answer = count > 1 ? -1 : [...arr].find((v) => v[1] === max)[0];
  return answer;
}
console.log(mode([1, 2, 3, 3, 3, 4]));
console.log(mode([1, 1, 2, 2]));
console.log(mode([1]));
