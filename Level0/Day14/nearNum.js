/**
 * 
가까운 수
문제 설명
정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ array의 길이 ≤ 100
1 ≤ array의 원소 ≤ 100
1 ≤ n ≤ 100
가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.

 * @param {Number[]} array
* @param {Number} n
 * @returns 
 */
function nearNum(array, n) {
  var answer = 0;
  array.push(n);
  array
    .sort((a, b) => a - b)
    .map((item, i) => {
      if (item === n) {
        if (array[i - 1] === undefined || array[i + 1] === undefined) {
          answer = array[i - 1] ?? array[i + 1];
        } else if (
          Math.abs(array[i] - array[i - 1]) ===
          Math.abs(array[i] - array[i + 1])
        ) {
          answer = array[i - 1];
        } else {
          Math.abs(array[i] - array[i - 1]) < Math.abs(array[i] - array[i + 1])
            ? (answer = array[i - 1])
            : (answer = array[i + 1]);
        }
      }
    });

  return answer;
}

console.log(nearNum([2, 3, 4], 1)); // 2
console.log(nearNum([3, 10, 28], 20)); // 28
console.log(nearNum([10, 11, 12], 13)); // 12
