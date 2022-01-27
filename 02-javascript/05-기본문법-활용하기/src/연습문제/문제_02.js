// while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

let x = 10;

while (x > 0) {
    x--;
    if ( x % 2 != 0 ){
        console.log(x);   
    }
}

// 강사님 풀이

/** [풀이01] */
let i=9;

while (i > -1) {
    if ( i % 2 == 1) {
        console.log(i);
    }
    i--;
}

/** [풀이02] */
let j = 9;

while ( j > -1 ){
    console.log(j);
    j -= 2;
}