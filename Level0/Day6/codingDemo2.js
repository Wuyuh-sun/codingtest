//이 문제에는 표준 입력으로 정수n이 주어집니다. 별(*) 문자를 이용해 높이가 n인 삼각형을 출력해보세요.
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// rl.on("line", (line) => {
//   input = line.split("");
// }).on("close", () => {
//   for(let i = 1; i <= +input[0]; i += 1) console.log('*'.repeat(i));
// });


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    solution(Number(input[0]));
});

function solution(n) {
    for(let i = 1; i < n + 1; i++) {
        console.log('*'.repeat(i));
    }
}
