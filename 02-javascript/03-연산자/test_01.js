
const year = new Date().getFullYear();
let age = year - 1986 + 1;

// console.log(year);
// console.log(age);

console.group("문제1");
console.log("나는  %d세 입니다.", age);
console.groupEnd();


// 현재 년도에 대한 값을 'year'라는 상수로 생성
const year = 2022;

// 자신의 나이를 연산한 후 'age'라는 이름의 지역변수에 할당
let age = year - 2000 + 1;

// 이스케이프 문자를 활용하여 출력
console.log("나는 %d세 입니다.", age);