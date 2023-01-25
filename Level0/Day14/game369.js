/**
 * 
369게임
문제 설명
머쓱이는 친구들과 369게임을 하고 있습니다. 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다. 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ order ≤ 1,000,000
 * @param {Number} order
 * @returns 
 */
function game369(order) {
  var answer = 0;
  String(order)
    .split("")
    .map((item) => {
      if (item === "3" || item === "6" || item === "9") {
        answer += 1;
      }
    });
  return answer;
}

console.log(game369(3)); // 1
console.log(game369(29423)); // 2
