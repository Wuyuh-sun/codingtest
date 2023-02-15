/**
 * 
안전지대
문제 설명
다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
image.png
지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.
 * @param {Number[]} board
 * @returns 
 */
function safeZone(board) {
  var answer = 0;

  var veryDangerZone = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        veryDangerZone.push([i, j]);
      }
    }
  }

  veryDangerZone.map((item) => {
    board[item[0] - 1] === undefined
      ? false
      : board[item[0] - 1][item[1] - 1] === undefined
      ? false
      : (board[item[0] - 1][item[1] - 1] = 2);
    board[item[0] - 1] === undefined
      ? false
      : board[item[0] - 1][item[1]] === undefined
      ? false
      : (board[item[0] - 1][item[1]] = 2);
    board[item[0] - 1] === undefined
      ? false
      : board[item[0] - 1][item[1] + 1] === undefined
      ? false
      : (board[item[0] - 1][item[1] + 1] = 2);

    board[item[0]] === undefined
      ? false
      : board[item[0]][item[1] - 1] === undefined
      ? false
      : (board[item[0]][item[1] - 1] = 2);
    board[item[0]] === undefined
      ? false
      : board[item[0]][item[1]] === undefined
      ? false
      : (board[item[0]][item[1]] = 2);
    board[item[0]] === undefined
      ? false
      : board[item[0]][item[1] + 1] === undefined
      ? false
      : (board[item[0]][item[1] + 1] = 2);

    board[item[0] + 1] === undefined
      ? false
      : board[item[0] + 1][item[1] - 1] === undefined
      ? false
      : (board[item[0] + 1][item[1] - 1] = 2);
    board[item[0] + 1] === undefined
      ? false
      : board[item[0] + 1][item[1]] === undefined
      ? false
      : (board[item[0] + 1][item[1]] = 2);
    board[item[0] + 1] === undefined
      ? false
      : board[item[0] + 1][item[1] + 1] === undefined
      ? false
      : (board[item[0] + 1][item[1] + 1] = 2);
  });

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] !== 2) {
        answer++;
      }
    }
  }

  return answer;
}

console.log(
  safeZone([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
); // 16
console.log(
  safeZone([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ])
); // 13
console.log(
  safeZone([
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
  ])
); // 0
