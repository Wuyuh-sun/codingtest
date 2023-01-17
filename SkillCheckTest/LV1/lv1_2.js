// /**
//  *
// 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 제한 조건
// n은 1이상 8000000000 이하인 자연수입니다.
//  * @param {number} n
//  * @returns
//  */
// function lv1_2(n) {
//   var answer = "";
//   var nSplit = String(n).split("");

//   nSplit.sort((a, b) => {
//     if (a > b) return -1;
//     else if (b > a) return 1;
//     else return 0;
//   });

//   nSplit.map((item) => (answer += item));
//   return Number(answer);
// }
// console.log(lv1_2(118372));

/**
 * 
문제 설명
어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

제한사항
absolutes의 길이는 1 이상 1,000 이하입니다.
absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
signs의 길이는 absolutes의 길이와 같습니다.
signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.
 * @param {Array} absolutes 
 * @param {Array} signs 
 * @returns
 */
function lv1_2(absolutes, signs) {
  var answer = 0;

  absolutes.map((item, i)=>{
    signs[i] ? answer += item : answer -= item;
  })

  return answer;
}
console.log(lv1_2([4, 7, 12], [true, false, true])); // 9
console.log(lv1_2([1, 2, 3], [false, false, true])); // 0
