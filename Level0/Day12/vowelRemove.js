/**
 * 
모음 제거
문제 설명
영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

제한사항
my_string은 소문자와 공백으로 이루어져 있습니다.
1 ≤ my_string의 길이 ≤ 1,000

 * @param {String} my_string
 * @returns 
 */
function vowelRemove(my_string) {
  var answer = "";
  my_string.split("").map((item)=>{
    if(item === "a" || item === "e" || item === "i" || item === "o" || item === "u"){
      false
    } else {
      answer += item;
    }
  });
  
  return answer;
}

console.log(vowelRemove("bus")); // "bs"
console.log(vowelRemove("nice to meet you")); // "nc t mt y"
