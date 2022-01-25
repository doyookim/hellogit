
const age = 37;
var year = new Date().getFullYear() - age + 1;

// console.log(age);
// console.log(year);

console.group("문제2");
console.log("나는  %d년도에 태어났습니다.", year);
console.groupEnd();


// 자신의 나이를 의미하는 상수 'age'를 정의
const age = 23;

// 자신이 태어난 년도 'year' 를 전역 변수
var year = 2022 - (23-1);

// 이스케이프 문자를 활용하여 출력
console.log("나는 %d년도에 태어났습니다.", year);