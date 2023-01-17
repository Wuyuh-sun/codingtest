/**
 * 문제 설명
점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

제한사항
전체 학생의 수는 2명 이상 30명 이하입니다.
체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
 * @param {number} n 전체 학생 수
* @param {Array} lost 체육복을 도난당한 학생들의 번호가 담긴 배열
* @param {Array} reserve 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열
 * @returns
 */
function gymSuit(n, lost, reserve) {
  var i = 0;

  //여분을 갖고 있는 학생이 도난당했을 경우 빌려주지 못함
  //=>lost와 reserve리스트에서 겹치는 학생을 삭제
  var lost_filter = lost.filter(function (a) {
    return reserve.indexOf(a) === -1;
  });
  var reserve_filter = reserve.filter(function (a) {
    return lost.indexOf(a) === -1;
  });
  //여분이 있는 학생을 오름차순으로 정렬
  reserve_filter.sort((a, b) => a - b);

  //현재 answer(체육수업 들을 수 있는 학생 수): 전체학생(n)-잃어버린학생(lost_filter)
  var answer = n - lost_filter.length;

  //여분이 있는 학생이 자신의 앞번호 먼저 탐색하고 빌려줌 => 뒷번호 탐색하고 빌려줌
  //=>answer(체육수업 들을 수 있는 학생 수)+1
  while (i < reserve_filter.length) {
    if (lost_filter.indexOf(reserve_filter[i] - 1) !== -1) {
      lost.splice(lost_filter.indexOf(reserve_filter[i] - 1), 1);
      answer += 1;
      console.log("-1", "i:", i, "lost:", lost, "answer:", answer);
      i++;
    } else if (lost_filter.indexOf(reserve_filter[i] + 1) !== -1) {
      lost_filter.splice(lost_filter.indexOf(reserve_filter[i] + 1), 1);
      answer += 1;
      console.log("+1", "i:", i, "lost:", lost, "answer:", answer);
      i++;
    } else {
      i++;
    }
  }
  return answer;
}
console.log(gymSuit(5, [2, 4], [1, 3, 5])); // 5
console.log(gymSuit(5, [2, 4], [3])); // 4
console.log(gymSuit(3, [3], [1])); //2
