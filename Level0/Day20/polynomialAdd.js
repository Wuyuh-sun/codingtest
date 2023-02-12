/**
 * 
다항식 더하기
문제 설명
한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.

제한사항
0 < polynomial에 있는 수 < 100

polynomial에 변수는 'x'만 존재합니다.

polynomial은 0부터 9까지의 정수, 공백, ‘x’, ‘+'로 이루어져 있습니다.

항과 연산기호 사이에는 항상 공백이 존재합니다.

공백은 연속되지 않으며 시작이나 끝에는 공백이 없습니다.

하나의 항에서 변수가 숫자 앞에 오는 경우는 없습니다.

" + 3xx + + x7 + "와 같은 잘못된 입력은 주어지지 않습니다.

"012x + 001"처럼 0을 제외하고는 0으로 시작하는 수는 없습니다.

문자와 숫자 사이의 곱하기는 생략합니다.

polynomial에는 일차 항과 상수항만 존재합니다.

계수 1은 생략합니다.

결괏값에 상수항은 마지막에 둡니다.

0 < polynomial의 길이 < 50
 * @param {String} polynomial
 * @returns 
 */
function polynomialAdd(polynomial) {
  var answer = "";

  var n = 0;
  var num = 0;

  var poly = polynomial.split(" + ");

  for (let item of poly) {
    isNaN(Number(item))
      ? item === "x"
        ? (n += 1)
        : (n += Number(item.slice(0, item.length - 1)))
      : (num += Number(item));
  }

  if (num != 0) {
    if (n === 1) {
      answer = "x + " + String(num);
    } else if (n > 1) {
      answer = String(n) + "x + " + String(num);
    } else {
      answer = String(num);
    }
  } else {
    if (n === 1) {
      answer = "x";
    } else if (n > 1) {
      answer = String(n) + "x";
    } else {
      answer = "0";
    }
  }

  return answer;
}

console.log(polynomialAdd("3x + 7 + x")); // "4x + 7"
console.log(polynomialAdd("x + x + x")); // "3x"
console.log(polynomialAdd("2x + 4x + 5x")); // "11x"
console.log(polynomialAdd("2x + x + x + 7 + 9")); // "4x + 16"
console.log(polynomialAdd("7 + 9")); // "16"
console.log(polynomialAdd("x + 9")); // "x + 9"
console.log(polynomialAdd("x")); // "x"
console.log(polynomialAdd("99x + 99x + 99")); // "198x + 99"

// var polyfilter = polynomial.split(" ").filter((item) => item !== "+")

// var x = 0;
// var num = 0;

// polyfilter.map((item)=>{
//   isNaN(Number(item)) ? item.length >= 2 ? x += Number(item.split("")[0]) : x += 1 : num += Number(item);
// })

// if(x > 1) {
//   answer += x + "x"
// } else if( x === 1){
//   answer = "x"
// } else {
//   false;
// }

// if(num !== 0){
//   if(answer === ""){
//     answer = String(num);
//   } else {
//     answer += " + " + num;
//   }

// }
