var grade = [75, 82, 91]; // 성적표 배열
var sum = 0,
    avg = 0; // 총점과 평균점수 변수 생성

// 총점 구하기
for (let i = 0; i < grade.length; i++) {
    sum += grade[i];
}
//console.log(sum);

avg = sum / grade.length;
avg = avg.toFixed(2);

//console.log(avg);

console.log("총점: " + sum + "점, 평균점수: " + avg + "점");

// 강사님 풀이 
var grade = [75, 82, 91]; // 성적표 배열
var sum = 0,
    avg = 0; // 총점과 평균점수 변수 생성

// 또다른 반복문 패턴
for (const p of grade) {
    sum += p;
}
avg = sum / grade.length;
avg = avg.toFixed(2);

console.log(avg);

console.log("총점: " + sum + "점, 평균점수: " + avg + "점");