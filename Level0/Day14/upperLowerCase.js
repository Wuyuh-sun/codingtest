/**
 * 
대문자와 소문자
문제 설명
문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string의 길이 ≤ 1,000
my_string은 영어 대문자와 소문자로만 구성되어 있습니다.
 * @param {String} my_string
 * @returns 
 */
function upperLowerCase(my_string) {
  var answer = "";

  my_string.split("").map((item) => {
    item === item.toUpperCase()
      ? (answer += item.toLowerCase())
      : (answer += item.toUpperCase());
  });

  return answer;
}

console.log(upperLowerCase("cccCCC")); // "CCCccc"
console.log(upperLowerCase("abCdEfghIJ")); // "ABcDeFGHij"
