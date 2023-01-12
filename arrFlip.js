/**
 * 정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.
 * @param {Array} num_list 정수가 들어 있는 배열
 * @returns
 */
 function arrFlip(num_list) {

  var answer = [...num_list].reverse();
  return answer;
}
console.log(arrFlip([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(arrFlip([1, 1, 1, 1, 1, 2])); // [2, 1, 1, 1, 1, 1]
console.log(arrFlip([1, 0, 1, 1, 1, 3, 5])); // [5, 3, 1, 1, 1, 0, 1]
