// ## 문제1.

// 아래의 형태로 출력하는 함수를 구현하시오.

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


function printStar(max) {
    var star = "";

    for (let i=0; i<max; i++){

            star += "*";
            console.log(star);
        
    }

}

printStar(5);


function printStar(max) {
    
    // 반복문이 중첩되었을 때 바깥의 반복문은 행을 의미
    // max는 행의 수를 의미하므로 바깥 반복문의 조건식에서 활용해야 한다.
    for (let i=0; i<max; )
}


printStar(5);