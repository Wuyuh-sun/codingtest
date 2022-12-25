/**
 * 머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요
 * @param {Number} n 사람 수
 * @returns
 */
 function splitPizza2(n) {

  /**
   * 최대 공약수 구하기
   * @param {number} A 사람수 
   * @param {number} B 피자 조각수
   * @returns 최대 공약수
   */
  function gcd(A, B = 6){
    if(A % B === 0) {
      return B;
    } else{
      return A === 0 ? B : gcd(B, A % B);
    }
  }

  /**
   * 최소 공배수 구하기
   * @param {number} A 사람수 
   * @param {number} B 피자 조각수
   * @returns 최소 공배수
   */
  function lcm(A, B = 6){
    return A * B / gcd(A);
  }

  function answer(A, B){
    return  A / B
  }
  return answer(n, gcd(n));

}
console.log(splitPizza2(6)); // 1
console.log(splitPizza2(10)); // 5
console.log(splitPizza2(4)); // 2