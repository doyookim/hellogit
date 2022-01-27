///for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

for (let x = 10; x > 0; x-- ){
    if ( x % 2 == 1) {
        console.log(x);
    } 
}

// 강사님 풀이
/** [풀이01] */
for ( let i=9; i > -1; i --) {
    if ( i % 2 == 1 ) {
        console.log(i);
    }
}
/** [풀이02] */
for (let i=9; i > -1; i-=2) {
    console.log(i);
}