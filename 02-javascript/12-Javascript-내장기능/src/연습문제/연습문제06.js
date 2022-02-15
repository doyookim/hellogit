// ## 문제6.

// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 
// 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 
// 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
// 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// ```javascript
// function solution(participant, completion) {
//     var answer = '';
//     return answer;
// }
// ```

// ### 제한사항

// - 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// - completion의 길이는 participant의 길이보다 1 작습니다.
// - 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// - 참가자 중에는 동명이인이 있을 수 없습니다.

// ### 입출력 예

// | participant | completion | return |
// |---|---|---|
// | ["leo", "kiki", "eden"] | ["eden", "kiki"] | "leo" |
// | ["marina", "josipa", "nikola", "vinko", "filipa"] | ["josipa", "filipa", "marina", "nikola"] | "vinko" |
// | ["mislav", "stanko", "steave", "ana"] | ["stanko", "ana", "mislav"] | "steave |

// ```javascript
// // "leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
// // 출력결과: "leo"가 출력
// console.log(solution(["leo", "kiki", "eden"], 
//                      ["eden", "kiki"]));

// // "vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
// // 출력결과: "vinko"가 출력
// console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], 
//                      ["josipa", "filipa", "marina", "nikola"]));

// // "steave"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
// // 출력결과: "steave"가 출력
// console.log(solution(["mislav", "stanko", "steave", "ana"], 
//                      ["stanko", "ana", "mislav"]));
// ```


// function solution(participant, completion) {
//     var answer = '';
//     return answer;
// }


// 인터넷 풀이 hashMap 아직 안배움.

// function solution(participant, completion) {
//     var answer = "";
//     var hashMap = new Map();
  
//     participant.map((el) => {
//       if (!hashMap.get(el)) hashMap.set(el, 1);
//       else hashMap.set(el, hashMap.get(el) + 1);
//     });
  
//     completion.map((el) => {
//       hashMap.set(el, hashMap.get(el) - 1);
//     });
  
//     for (const [key, value] of hashMap) {
//       if (value >= 1) {
//         answer = key;
//         break;
//       }
//     }
  
//     return answer;
//   }


// console.log(solution(["leo", "kiki", "eden"], 
//                      ["eden", "kiki"])+"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.");

// console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], 
//                      ["josipa", "filipa", "marina", "nikola"])+"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.");


// console.log(solution(["mislav", "stanko", "steave", "ana"], 
//                      ["stanko", "ana", "mislav"])+"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.");


// 강사님 풀이 
function solution(participant, completion) {
    var answer = '';

    // participant 원소 중에서 completion에 포함되지 않은 하나의 원소를 찾아서 answer에 저장하는 것이 문제 내용.
    // --> participant의 원소를 탐색하여 completion에 속하지 않음을 확인하면 그 순간 반복 중단

/** 1) for문을 사용하다 탐색하다가 break 사용 */
//     for (let i=0; i<participant.length; i++) {
//         const p = participant[i];
        
//         // i번째 원소가 completion에 들어 있다면?
//         if (!completion.includes(p)) {
//             answer = p;
//             break;
//         }
//     }

//     return answer;
// }


/** 2) 배열의 some함수 사용 */
participant.some((v, i)=>{
        if(!completion.includes(v)) {
            answer = v;
            return true;
        }
    });

    return answer;
}

console.log(solution(["leo", "kiki", "eden"], 
                     ["eden", "kiki"])+"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.");

console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], 
                     ["josipa", "filipa", "marina", "nikola"])+"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.");


console.log(solution(["mislav", "stanko", "steave", "ana"], 
                     ["stanko", "ana", "mislav"])+"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.");




// // 테스트를 위한 배열
// const arr = [10, 20, 30, 40, 50];

// /**
//  * 배열에 대한 반복 처리(2) - 탐색 중단
//  */
//  arr.some((v, i)=>{
//     // some 함수는 콜백함수가 true를 리턴하는 순간 순환을 중단한다.
//     if (i == 3) {
//         console.log(" ~~~반복중단!!!");
//         return true;
//     }
//     console.log("%d번째 원소 ==> %d", i, v);
// });
