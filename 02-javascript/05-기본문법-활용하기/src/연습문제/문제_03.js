let sum = 0;

for (i = 20; i > 0; i--) {
    if( i % 2 == 0 && i % 3 == 0){
        //console.log(i);
        sum += i;
    }
}
console.log(sum);


// 강사님 풀이

//1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.

// 변수의 초기와 - 최초로 값을 할당하는 처리를 의미

// 합계를 구하기 위해서는 0으로 초기화 된 변수가 필요함.

let sum = 0;

for (let i=1; i<20; i++) {
    if (i % 2 == 0 || i % 3 == 0) {
        sum += i;
    }
}

console.log(sum);
