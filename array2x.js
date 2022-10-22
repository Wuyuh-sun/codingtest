/**
 * 정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.
 * @param {Array} numbers 배열
 * @returns
 */
function array2x(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2;
  }
  return numbers;
}
console.log(array2x([1, 2, 3, 4, 5]));
console.log(array2x([1, 2, 100, -99, 1, 2, 3]));
