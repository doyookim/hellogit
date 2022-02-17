

const number = 456;
let calcNumber01 = number % 100; 
console.log(calcNumber01);
let calcNuber02;

if ( calcNumber01 != 0 ){
    calcNuber02 =  number - calcNumber01;
}


console.group("문제4");
console.log(calcNuber02);
console.groupEnd();



const number = 457;

// 100e단위에 대한 마너지값을 소수접으로 구하기
const extra = (number % 100) / 100;
console.log(extra);

const result = number / 100;

console.log(result);

const result = ((number / 100) - extra) * 100 ;


console.log(result);