/**
 * 
가장 큰 수 찾기
문제 설명
정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ array의 길이 ≤ 100
0 ≤ array 원소 ≤ 1,000
array에 중복된 숫자는 없습니다.
 * @param {Number[]} array
 * @returns 
 */
function biggestNumFind(array) {
  var answer = [];
  var sort = [...array].sort((a,b)=>a-b);
  answer.push(sort[sort.length - 1]);
  answer.push(array.indexOf(sort[sort.length - 1]));
  return answer;

  // return [Math.max(...array), array.indexOf(Math.max(...array))]
}

console.log(biggestNumFind([1, 8, 3])); // [8, 1]
console.log(biggestNumFind([9, 10, 11, 8])); // [11, 2]
