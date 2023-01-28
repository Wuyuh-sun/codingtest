/**
 * 
문자열 계산하기
문제 설명
my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.

제한사항
연산자는 +, -만 존재합니다.
문자열의 시작과 끝에는 공백이 없습니다.
0으로 시작하는 숫자는 주어지지 않습니다.
잘못된 수식은 주어지지 않습니다.
5 ≤ my_string의 길이 ≤ 100
my_string을 계산한 결과값은 1 이상 100,000 이하입니다.
my_string의 중간 계산 값은 -100,000 이상 100,000 이하입니다.
계산에 사용하는 숫자는 1 이상 20,000 이하인 자연수입니다.
my_string에는 연산자가 적어도 하나 포함되어 있습니다.
return type 은 정수형입니다.
my_string의 숫자와 연산자는 공백 하나로 구분되어 있습니다.
 * @param {String} my_string
 * @returns 
 */
function stringCalc(my_string) {
  var answer = 0;
  var calcSplit = my_string.split(" ");
  answer = Number(calcSplit[0]);

  calcSplit.map((item, i) => {
    item === "+"
      ? (answer += Number(calcSplit[i + 1]))
      : item === "-"
      ? (answer -= Number(calcSplit[i + 1]))
      : false;
  });
  return answer;
}

// var stringCalc = eval

console.log(stringCalc("3 + 4")); // 7
console.log(stringCalc("1500 - 30")); // 1470
