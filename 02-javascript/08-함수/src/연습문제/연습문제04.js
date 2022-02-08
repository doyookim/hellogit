


// ## 문제4

// 문제1번을 재귀함수 기법으로 다시 구현해 보세요.

// ```js
// // max는 최대 행 수, current는 현재 출력중인 행의 위치
// function printStar(max, current=1) {
//     ... 구현하세요 ...
// }

// printStar(5);
// ```


// ```js
// // max는 출력해야 할 최대 라인 수
// function printStar(max) {
//     ... 구현하세요 ...
// }

// printStar(5)
// ```

// #### 출력결과

// ```
// *
// **
// ***
// ****
// *****
// ```


// 문제1번을 화살표 함수가 적용된 재귀함수 기법으로 다시 구현해 보세요.


function printStar(max, current=1) {
   if (max > 5){
       return;
   } else {
       for (let i=0; i<max; i++) {
           for (let j=0; j<i+1; j++){
            max = "";
            current = "";
            console.log(max+"*"+current+"*");
            printStar(max, current+"*");
           }
       }
   }
}

printStar(5);



// 강사님 풀이

function printStar(max, current=1){
    
    // max는 최대 행의 수, current는 현재 행의 수를 의미하므로,
    // 현재 행의 수가 최대 행보다 크다면 처리 중단을 위해  return 함
    if (current > max){
        return;
    } else {
        /** 한 줄을 출력하기 위한 코드 구성 */
        let star = "";

        for (let j=0; j<current; j++){
            star += "*";
        }
        console.log(star);
        printStar(max, current+1);
    }
}

printStar(5);



