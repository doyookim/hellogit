// 04. 목록구조1 참고


/** 목록의 아이템으로 사용될 JSON 객체 정의하기 */
// const student1 = {
//   stuno: 10101,
//   grade: 1,
//   name: "학생1"
// };

// const student2 = {
//   stuno: 20202,
//   grade: 2,
//   name: "학생"
// };


// /** 목록 구조를 갖는 JSON 객체 */
// const classRoom = {
//   student : [student1, student2]
// }

// console.log(classRoom);

// let i = 0; // 초기식
// for (const s of classRoom.student) {
//   console.group(i + "번쨰 학생");
//   console.log(" >> 학번:" + classRoom.student[i].stuno);
//   console.log(" >> 학년:" + classRoom.student[i].grade);
//   console.log(" >> 이름:" + classRoom.student[i].name);
//   console.groupEnd();
//   i++; // 증감식
// }


// 강사님 풀이

const covid19 = [
    {date: '0125', active: 426}, 
    {date: '0126', active: 343}, 
    {date: '0127', active: 547}, 
    {date: '0128', active: 490}, 
    {date: '0129', active: 460}, 
    {date: '0130', active: 443}, 
    {date: '0131', active: 338}, 
    {date: '0201', active: 299}
];

let max_active = covid19[0].active;
let max_date = covid19[0].date;

for (const j of covid19) {
    if(max_active < j.active){
        max_active = j.active;
        max_date = j.date;
    }
}

console.log("확진자가 가장 많이 나타난 날: %s", max_date);