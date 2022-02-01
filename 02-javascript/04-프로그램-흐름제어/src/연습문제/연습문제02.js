
let x = 1;

while (x <=10){
   const i = 2 ** x;
   console.log("이진수 %d개는 %d개의 정보를 표시가능", x, i);
   x++;
}


// 강사님 풀이

let bit = 1;         // 누적된 곱셈에 대한 초기갑은 1부터 시작
let i = 1;           // 초기식

while ( i <= 10 ) {  // 조건식
   bit *= 2;
   console.log('이진수 %d개는 %d개의 정보를 표시가능', i, bit);
   i++;              // 증감식
}