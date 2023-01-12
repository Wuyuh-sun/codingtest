/**
 * 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.
 * @param {Number} price 구매한 옷의 가격
 * @returns
 */
function clothesSales(price) {
  var answer;
  if (price >= 100000 && price < 300000) {
    answer = price - (price * 5) / 100;
  } else if (price >= 300000 && price < 500000) {
    answer = price - (price * 10) / 100;
  } else if (price >= 500000 && price <= 1000000) {
    answer = price - (price * 20) / 100;
  } else {
    answer = price;
  }
  return Math.floor(answer);
}
console.log(clothesSales(150000)); // 142500
console.log(clothesSales(580000)); // 464000
