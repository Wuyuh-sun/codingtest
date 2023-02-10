/**
 * 
문자열 정렬하기 (2)
문제 설명
영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때, my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.

제한사항
0 < my_string 길이 < 100
 * @param {String} my_string
 * @returns 
 */
function strSplit(my_string) {
  var answer = "";

  var strArr = my_string.split("");

  strArr.map((item, i)=>{
    strArr[i] = item.toLocaleLowerCase();
  })

  strArr.sort().map((item)=>{
    answer += item;
  })

  return answer;
}

console.log(strSplit("Bcad")); // "abcd"
console.log(strSplit("heLLo")); // "ehllo"
console.log(strSplit("Python")); // "hnopty"
