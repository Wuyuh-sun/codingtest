/**
 * 
7의 개수
문제 설명
머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ array의 길이 ≤ 100
0 ≤ array의 원소 ≤ 100,000
 * @param {Number[]} array
 * @returns 
 */
function sevenCnt(array) {
  var answer = 0;

  array
    .join("")
    .split("")
    .map((item) => {
      item === "7" ? (answer += 1) : false;
    });

  // array.map((item)=>{
  //   const seven = String(item).split("");
  //   seven.map((item2)=>{
  //     if(item2 === "7"){
  //       answer += 1;
  //     }
  //   })
  // })

  return answer;
}

console.log(sevenCnt([7, 77, 17])); // 4
console.log(sevenCnt([10, 29])); // 0
