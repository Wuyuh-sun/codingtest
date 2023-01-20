/**
 * 
최댓값 만들기 (1)
문제 설명
정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

제한사항
0 ≤ numbers의 원소 ≤ 10,000
2 ≤ numbers의 길이 ≤ 100
 * @param {Number[]} numbers
 * @returns 
 */
function maxValue(numbers) {
  var answer = 0;
  numbers.sort((a,b)=> a-b);
  // console.log(numbers[numbers.length - 2])
  answer = numbers[numbers.length - 1] * numbers[numbers.length - 2]
  return answer;
}

console.log(maxValue([1, 2, 3, 4, 5])); // 20
console.log(maxValue([0, 31, 24, 10, 1, 9])); // 744
