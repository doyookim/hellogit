// 【문항2】 100~200 사이의 임의의 숫자를 number 라는 변수에 저장하고, 1부터 number까지의 수 중에서 3의 
// 배수에 대한 총 합을 구하시오. (범위에는 number가 포함됩니다.) (15분/5점)

function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

let number = random(100, 200);
//console.log(number);

let sum = 0;

for(let i=1; i<=number; i++) {
    //console.log(i);
    if ( i % 3 == 0){
        sum += i;        
       // console.log(sum);
    }
     
}
console.log("임의의 숫자 %d, 3의 배수의 총합: %d", number, sum);   
