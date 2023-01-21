/**
 * 
숨어있는 숫자의 덧셈 (1)
문제 설명
문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string의 길이 ≤ 1,000
my_string은 소문자, 대문자 그리고 한자리 자연수로만 구성되어있습니다.

 * @param {String} my_string
 * @returns 
 */
function hiddenNumAdd(my_string) {
  var answer = 0;

  my_string.replace(/[^0-9]/g, "").split("").map((item)=>{
    answer += Number(item);
  });

  return answer;
}

console.log(hiddenNumAdd("aAb1B2cC34oOp")); // 10
console.log(hiddenNumAdd("1a2b3c4d123")); // 16
