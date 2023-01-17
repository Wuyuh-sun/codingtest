/**
 * 
문제 설명
1와 0로 채워진 표(board)가 있습니다. 표 1칸은 1 x 1 의 정사각형으로 이루어져 있습니다. 표에서 1로 이루어진 가장 큰 정사각형을 찾아 넓이를 return 하는 solution 함수를 완성해 주세요. (단, 정사각형이란 축에 평행한 정사각형을 말합니다.)

예를 들어

1	2	3	4
0	1	1	1
1	1	1	1
1	1	1	1
0	0	1	0
가 있다면 가장 큰 정사각형은

1	2	3	4
0	1	1	1
1	1	1	1
1	1	1	1
0	0	1	0
가 되며 넓이는 9가 되므로 9를 반환해 주면 됩니다.

제한사항
표(board)는 2차원 배열로 주어집니다.
표(board)의 행(row)의 크기 : 1,000 이하의 자연수
표(board)의 열(column)의 크기 : 1,000 이하의 자연수
표(board)의 값은 1또는 0으로만 이루어져 있습니다.
 * @param {Array} board 
 * @returns 
 */
function lv2_1(board) {
  let answer = 0;
  let row = board.length;
  let col = board[0].length;

  // 행 또는 열이 1이면 정사각형의 넓이를 1로 반환.
  if (row < 2 || col < 2) return 1;

  // 그 외의 경우엔 루프를 돌며 계산을 수행
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      // 만약 자신의 위치(현재 인덱스)의 값이 1이상일 경우
      if (board[i][j] !== 0) {
        // 왼쪽상단(↖︎), 위쪽(↑), 왼쪽(←)의 최솟값을 구한 후
        let min = Math.min(
          board[i - 1][j - 1],
          board[i - 1][j],
          board[i][j - 1]
        );
        // 자신의 위치에 최솟값 + 1을 할당한다.
        board[i][j] = min + 1;
      }
      // 할당한 값의 최댓값을 answer에 할당해주고
      if (answer < board[i][j]) answer = board[i][j];
    }
  }
  // 정사각형의 넓이를 구한다.
  return answer * answer;
}

console.log(
  lv2_1([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
  ])
); // 9
console.log(
  lv2_1([
    [0, 0, 1, 1],
    [1, 1, 1, 1],
  ])
); // 4
