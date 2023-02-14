/**
 * 
숨어있는 숫자의 덧셈 (2)
문제 설명
문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string의 길이 ≤ 1,000
1 ≤ my_string 안의 자연수 ≤ 1000
연속된 수는 하나의 숫자로 간주합니다.
000123과 같이 0이 선행하는 경우는 없습니다.
문자열에 자연수가 없는 경우 0을 return 해주세요.
 * @param {String} my_string
 * @returns 
 */
function hideNumAdd(my_string) {
  var answer = 0;

  var arr = [];

  var hideNum = "";

  my_string.split("").map((item,i) => {
    isNaN(Number(item)) ? arr[i] = " " : arr[i] = (Number(item));
  });

  arr.map((item)=>{
    hideNum += item;
  })

  hideNum.split(" ").map((item)=>{
    isNaN(Number(item)) ? false : answer += Number(item);
  })

  return answer;

  // 짧은 정답
  // return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}

console.log(hideNumAdd("aAb1B2cC34oOp")); // 37
console.log(hideNumAdd("1a2b3c4d123Z")); // 133
