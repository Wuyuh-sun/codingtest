// /**
//  *
// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, lv1_1을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.
//  * @param {string} s
//  * @returns
//  */
// function lv1_1(s) {
//   var answer = true;

//   var stringArr = s.split("");
//   stringArr.map((item) => {
//     isNaN(Number(item)) === true ? (answer = false) : false;
//   });

//   return answer;
// }

// console.log(lv1_1("a234")); // false
// console.log(lv1_1("1234")); // true

/**
 * 
문제 설명
대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

제한사항
문자열 s의 길이 : 50 이하의 자연수
문자열 s는 알파벳으로만 이루어져 있습니다
 * @param {string} s 
 * @returns 
 */
function lv1_1(s) {
  var answer = true;

  var pCnt = 0;
  var yCnt = 0;

  s.toLowerCase().split("").map((item)=>{
    item === "p" ? pCnt += 1 : item === "y" ? yCnt += 1 : false;
  })

  pCnt === yCnt ? answer = true : answer = false;

  return answer;
}

console.log(lv1_1("pPoooyY")); // true
console.log(lv1_1("Pyy")); // false
