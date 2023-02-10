/**
 * 
문자열안에 문자열
문제 설명
문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ str1의 길이 ≤ 100
1 ≤ str2의 길이 ≤ 100
문자열은 알파벳 대문자, 소문자, 숫자로 구성되어 있습니다.

 * @param {String} str1
 * @param {String} str2
 * @returns 
 */
function strArrInstrArr(str1, str2) {
  var answer = 0;

  str1.split(str2).length === 1 ? answer = 2 : answer = 1;

  return answer;
}

console.log(strArrInstrArr("ab6CDE443fgh22iJKlmn1o", "6CD")); // 1
console.log(strArrInstrArr("ppprrrogrammers", "pppp")); // 2
console.log(strArrInstrArr("AbcAbcA", "AAA")); // 2
