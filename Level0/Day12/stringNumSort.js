/**
 * 
문자열 정렬하기 (1)
문제 설명
문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

제한사항
1 ≤ my_string의 길이 ≤ 100
my_string에는 숫자가 한 개 이상 포함되어 있습니다.
my_string은 영어 소문자 또는 0부터 9까지의 숫자로 이루어져 있습니다. - - -
 * @param {String} my_string
 * @returns 
 */
function stringNumSort(my_string) {
  var answer = [];
  my_string.split("").map((item) => {
    isNaN(Number(item)) ? false : answer.push(Number(item))
  });
  return answer.sort((a, b) => a - b);
}

console.log(stringNumSort("hi12392")); // [1, 2, 2, 3, 9]
console.log(stringNumSort("p2o4i8gj2")); // [2, 2, 4, 8]
console.log(stringNumSort("abcde0")); // 	[0]
