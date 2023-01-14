/**
 * 문제 설명
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

제한사항
마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다.하나만 return 하면 됩니다.
 * @param {Array} participant 배열
 * @param {Array} completion 배열
 * @returns
 */
function noFinishName(participant, completion) {
  // participant.sort(); //참가자 배열 정렬
  // completion.sort(); //완주자 배열 정렬

  // for (var i = 0; i < participant.length; i++) {
  //   if (participant[i] !== completion[i]) {
  //     //인덱스 0부터 순차적으로 두 배열 비교
  //     return participant[i];
  //     //비완주자가 참가자 배열에 나올 경우 출력
  //   }
  // }

  participant.find(
    (name) => !completion[name]--,
    completion.map((name) => {
      console.log((completion[name] = (completion[name] | 0) + 1));
    })
  );

  return "";
  // return participant.find(
  //   (name) => !completion[name]--,
  //   completion.map((name) => (completion[name] = (completion[name] | 0) + 1))
  // );
}
// console.log(noFinishName(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo"
// console.log(
//   noFinishName(
//     ["marina", "josipa", "nikola", "vinko", "filipa"],
//     ["josipa", "filipa", "marina", "nikola"]
//   )
// ); // "vinko"
// console.log(
//   noFinishName(
//     ["mislav", "stanko", "mislav", "ana"],
//     ["stanko", "ana", "mislav", "mislav"]
//   )
// ); // "mislav"

var solution = (participant, completion) => {
  completion.map((name) => (completion[name] = (completion[name] | 0) + 1));
  // console.log(completion)
  // return participant.find((name) => !completion[name]--);
  return participant.find((item)=>{
    return !completion[item]--
  })
};

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo"
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
); // "vinko"
console.log(
  solution(
    ["mislav", "stanko", "mislav", "ana"],
    ["stanko", "ana", "mislav"]
  )
); // "mislav"
