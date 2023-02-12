/**
 * 
최댓값 만들기 (2)
문제 설명
정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

제한사항
-10,000 ≤ numbers의 원소 ≤ 10,000
2 ≤ numbers 의 길이 ≤ 100
 * @param {Number[]} numbers
 * @returns 
 */
function maxValue2(numbers) {
  var answer = [];

  for(let i = 0; i < numbers.length; i++){
    for(let j = 0; j < numbers.length; j++){
      i === j ? false : answer.push(numbers[i] * numbers[j])
    }
  }

  const result = [...new Set(answer)].sort((a,b)=>a-b);

  return result.at(-1);


  // Math.max() 는 파라미터중 가장 큰 값을 찾는 메소드
  // 따라서 numbers 배열을 먼저 오름차순으로 정렬하고 
  // 젤 작은 두 수인 배열의 첫번째와 두번째 곱한 값과 
  // 젤 큰 두 수인 배열의 마지막 값과 마지막 이전 값을 곱한 값을 비교한다.

  // numbers.sort((a, b) => a - b);
  // return Math.max(numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2]);
}

console.log(maxValue2([1, 2, -3, 4, -5])); // 15
console.log(maxValue2([0, -31, 24, 10, 1, 9])); // 240
console.log(maxValue2([10, 20, 30, 5, 5, 20, 5])); // 600
console.log(maxValue2([-8,2,3])); // 6
console.log(maxValue2([-3,-2,5])); // 6
