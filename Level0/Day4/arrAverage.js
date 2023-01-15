/**
 * 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
 * @param {Array} numbers 정수배열
 * @returns
 */
 function arrAverage(numbers) {
  var answer = 0;
  for(let i =0; i < numbers.length; i++){
      answer += numbers[i];
  }
  answer = answer/numbers.length;
  return answer;
}

console.log('arrAverage',arrAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log('arrAverage',arrAverage([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]));

