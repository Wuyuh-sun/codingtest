/**
 * 첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1, 두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
 * @param {number} denum1 1번쨰 분수의 분자
 * @param {number} num1 1번쨰 분수의 분모
 * @param {number} denum2 2번쨰 분수의 분자
 * @param {number} num2 2번쨰 분수의 분모
 * @returns
 */
function fraction(denum1, num1, denum2, num2) {
  // 분자
  let topNum = num1 * denum2 + num2 * denum1;
  // 분모
  let botNum = num1 * num2;
  // 최소 공배수
  let maximum = 1;
  // 약분
  for (let i = 1; i <= topNum; i++) {
    if (topNum % i === 0 && botNum % i === 0) {
      maximum = i;
    }
  }
  return [topNum / maximum, botNum / maximum];
}
console.log(fraction(1, 2, 3, 4));
console.log(fraction(9, 2, 1, 3));
