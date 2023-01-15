/**
 * 
문제 설명
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, lv1_1을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

제한 사항
s는 길이 1 이상, 길이 8 이하인 문자열입니다.
s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.
 * @param {string} s 
 * @returns 
 */
function lv1_1(s) {
  var answer = true;

  var stringArr = s.split("");
  stringArr.map((item) => {
    isNaN(Number(item)) === true ? (answer = false) : false;
  });

  return answer;
}

console.log(lv1_1("a234")); // false
console.log(lv1_1("1234")); // true
