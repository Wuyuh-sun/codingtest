/**
 * 
2차원으로 만들기
문제 설명
정수 배열 num_list와 정수 n이 매개변수로 주어집니다. num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.

num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 num_list를 2 * 4 배열로 다음과 같이 변경합니다. 2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다.

num_list	n	result
[1, 2, 3, 4, 5, 6, 7, 8]	2	[[1, 2], [3, 4], [5, 6], [7, 8]]
제한사항
num_list의 길이는 n의 배 수개입니다.
0 ≤ num_list의 길이 ≤ 150
2 ≤ n < num_list의 길이
 * @param {Array} num_list
 * @param {Number} n
 * @returns 
 */
function twoDemension(num_list, n) {
  var answer = [[]];

  var saveArr = [];

  for (let i = 0; i < num_list.length / n; i++) {
    for (let j = i * n; j < i * n + n; j++) {
      saveArr.push(num_list[j]);
    }
    answer[i] = saveArr;
    saveArr = [];
  }

  return answer;
}

console.log(twoDemension([1, 2, 3, 4, 5, 6, 7, 8], 2)); // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log(twoDemension([1, 2, 3, 4, 5, 6], 3)); // [[1, 2, 3], [4, 5, 6]]
