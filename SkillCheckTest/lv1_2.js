/**
 * 
함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

제한 조건
n은 1이상 8000000000 이하인 자연수입니다.
 * @param {number} n 
 * @returns
 */
function lv1_2(n) {
  var answer = "";
  var nSplit = String(n).split("");

  nSplit.sort((a, b) => {
    if (a > b) return -1;
    else if (b > a) return 1;
    else return 0;
  });

  nSplit.map((item) => (answer += item));
  return Number(answer);
}
console.log(lv1_2(118372));