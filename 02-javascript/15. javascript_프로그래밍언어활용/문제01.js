// 【문항1】 주민번호의 앞 부분과 뒷 부분의 첫 번째 글자 아래와 같이 변수에 저장하시오. (15분/5점)
// ssn = “9203211”
// 그 값을 통해 아래와 같은 출력 결과를 만드시오.
// ssn당신은 30세 남자입니다.

const ssn = '9203211';

let yy = parseInt(ssn.substring(0, 2));
let gen = parseInt(ssn.substring(6, 7));

const date = new Date();
const now_year = date.getFullYear();
yy = (gen > 2) ? yy+2000 : yy+1900;
//console.log(yy);
const age = now_year - yy + 1;
//console.log(age);
const sex = (gen % 2) ? "남자" : "여자";
//console.log(sex);

console.log("당신은 %d세 %s입니다.", age, sex);