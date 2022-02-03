// /** 학생이름 배열 */
// var student = ['둘리', '도우너', '또치', '희동'];

// /** 성적표 배열 */
// var grade = [
//     [ 78, 89, 96 ],
//     [ 62, 77, 67 ],
//     [ 54, 90, 80 ],
//     [ 100, 99, 98],
// ]

// // 총점과 평균점수를 저장할 변수
// var sum = 0, avg = 0;

// /** 총점과 평균 구하기 */

// for ( let i=0; i<student.length; i++) {
//     let personal_sum = 0;
//     for( let j=0; j<grade[i][j]; j++) {
//     //sum += grade[i][j];
//     personal_sum += grade[i][j];

//     }

//     const personal_avg = (personal_sum / (grade[i].length)).toFixed(2);
   
//     sum += personal_sum / (grade[i].length);
//     //console.log(sum);
//     avg = sum / student.length;
//    // console.log(avg);

//     console.log("%s의 총점 : %d", student[i], personal_sum,"점, 평균:",personal_avg +"점");
    
// }
//     console.log("반평균=" + avg+"점");


//강사님 풀이
/** 학생이름 배열 */
var student = ['둘리', '도우너', '또치', '희동'];

/** 성적표 배열 */
var grade = [
    [ 78, 89, 96 ],
    [ 62, 77, 67 ],
    [ 54, 90, 80 ],
    [ 100, 99, 98],
];

// 총점과 평균점수를 저장할 변수
var sum = 0, 
    avg = 0;

//학생별 평균점수의 총 합
var class_sum = 0;

// 반평균
var class_avg = 0;

/** 총점과 평균 구하기 */
for (let i=0; i < grade.length; i++) {
    sum = 0;
    
    for (let j = 0; grade[i].length; j++) {
        sum += grade[i][j];
    }
    avg = sum / grade[i].length;
    // toFixed()함수로 소수점을 처리한 결과는 문자열이기 떄문에 숫자 연산이
    // 불가능하므로 toFixed() 함수 적용 전에 반점수를 구해야 한다.

    class_sum += avg;

    avg = avg.toFixed(2);

    console.log(student[i] + '총점: ' + sum + '점, 평균:' + avg + '점');
    
}

class_avg = class_sum / student.length;
class_avg.toFixed(2);
console.log('반평균=' + class_avg + "점");


