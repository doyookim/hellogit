// ## 문제2.

// 임의의 주민번호를 다음과 같이 `*`을 포함하여 변수에 저장하시오.

// ```
// ssn = '020517-3******'
// ```

// 또한 현재 년도를 now_year라는 변수로 저장하시오.

// 이 값을 사용하여 생년월일, 나이, 성별을 출력하시오.

// #### 출력결과

// ```
// 2002년 5월 17일에 태어난 20세 남자 입니다.
// ```

ssn = '020517-3******';
now_year = new Date().getFullYear();
var genType = ssn.substring(7,8);
var age = 0;
var gender_str = "";
var birth_year = parseInt(ssn.substring(0,2));
var birth_month = parseInt(ssn.substring(2,4));
var birth_day = parseInt(ssn.substring(4,6));

if(genType <= 2) {
    age = now_year - (1900 + parseInt(ssn.substring(0,2))) +1 ; // 1,2 일 경우
} else {
    age = now_year - (2000 + parseInt(ssn.substring(0,2))) +1 ; //그 외의 경우
}


if (genType > 2) {
    birth_year = birth_year + 2000;
} else {
    birth_year = birth_year + 1900;
}


if (genType == 1 || 3){
    gender_str = "남자"
} else {
    gender_str ="여자"
}


console.log(birth_year+"년 "+  birth_month +"월 "+  birth_day+"일에 태어난 " +age+"세"+  gender_str+"입니다.");


/// 강사님 풀이
const ssn = '020517-3******';

const date = new Date();
const now_year = date.getFullYear();

let yy = parseInt(ssn.substring(0, 2));
let mm = parseInt(ssn.substring(2, 4));
let dd = parseInt(ssn.substring(4, 6));
let gen = parseInt(ssn.substring(7, 8));

//console.log("%d, %d, %d, %d",yy, mm, dd, gen);

// 2000년도 이전 출생자의 주민번호 뒷자리 -> 1,2
// 2000년도 이후 출생자의 주민번호 뒷자리 -> 3,4


yy = (gen > 2) ? yy+2000 : yy+1900;
//console.log(yy);

// 나이 계산
const age = now_year - yy + 1;
//console.log(age);


// 성별 확인
const sex = (gen % 2) ? "남자" : "여자";
//console.log(sex);
/** 
 * const k = 조건 ? A:B;
 * 조건이 참(true)이면 k에 A가 저장됨 
 * 조건이 거짓(false)이면 k에 B가 저장됨.
 * 
 * true를 숫자로 환산하면 0이 아닌 모든 수.
 * false를 숫자로 환산하면 0
 * 
 * 숫자 % 2 --> 이 연산식의 결과값 범위 0, 1
 */


// if (gen % 2 == 0) {
//     if (gen == 2 || gen == 4) {
//         sex ="여자";
//     } else {
//         sex = "남자";
//     }
// }

console.log("%d년 %d월 %d일에 태어난 %d세 %s 입니다.", yy, mm, dd, age, sex);





