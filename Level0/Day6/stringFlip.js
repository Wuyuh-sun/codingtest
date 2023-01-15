/**
 * 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
 * @param {String} my_string 문자
 * @returns
 */
function stringFlip(my_string) {
  var answer = "";
  var stringSplit = my_string.split("");
  var stringSplitFlip = [];

  for (let i = stringSplit.length - 1; i >= 0; i--) {
    stringSplitFlip.push(stringSplit[i]);
  }
  for (let i = 0; i < stringSplitFlip.length; i++) {
    answer += stringSplitFlip[i];
  }
  return answer;
}
console.log(stringFlip("jaron")); // "noraj"
console.log(stringFlip("bread")); // "daerb"



