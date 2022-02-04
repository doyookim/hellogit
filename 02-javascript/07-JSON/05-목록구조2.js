/** 배열의 원소로서 JSON 구조를 직접 명시하기 */
const classRoom = {
     student:  [{
        stuno: 10101,
        grade: 1,
        name: "학생1"
    }, {
        stuno: 20202,
        grade: 2,
        name: "학생"
    }]
    
};

for (let i=0; i<classRoom.student.length; i++) {
    console.group(i + "번쨰 학생");
    console.log(" >> 학번:" + classRoom.student[i].stuno);
    console.log(" >> 학년:" + classRoom.student[i].grade);
    console.log(" >> 이름:" + classRoom.student[i].name);
    console.groupEnd();
}