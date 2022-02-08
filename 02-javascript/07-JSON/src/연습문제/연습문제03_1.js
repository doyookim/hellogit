/**
 ## 문제3.

아래의 데이터는 2021년 01월 25일부터 02월 01일까지의 Covid19 일별 확진자 수를 표현한 자료구조다.

```javascript
covid19 = [
    {date: '0125': active: 426}, 
    {date: '0126': active: 343}, 
    {date: '0127': active: 547}, 
    {date: '0128': active: 490}, 
    {date: '0129': active: 460}, 
    {date: '0130': active: 443}, 
    {date: '0131': active: 338}, 
    {date: '0201': active: 299}
]
```

### 3-1.

1월 25일부터 2월 1일까지의 누적 확진자 수와 일 평균 확진자 수를 구하시오.

#### 출력결과

```
누적 확진자 수: 3346
평균 확진자 수: 418.25
```


### 3-2

1월 25일부터 2월 1일까지 중에서 확진자가 가장 많이 나타난 날짜는 언제인가?

#### 출력결과

```
확진자가 가장 많이 나타난 날: 0127
```
 */


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

// console.log(covid19[0].active);
// console.log(covid19[1].active);

let sum = 0;

// for (let i=0; i<covid19[i].active[j].length; i++){
//     console.log(covid19[i].active);
//     sum += covid19[i].active; 
//     console.log(sum);
// }


for (let i in covid19) {
    for (let j=0; j<covid19[i].active[j]; j++){
        console.log(covid19[i].active[j]);
        sum += covid19[i].active[j];
        console.log(covid19[i][j]);
    }
 
}


//console.log(sum);



// 04. 목록구조1  참고


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

// 전체 확진자 수를 위한 합계 변수
let sum = 0;

for (const j of covid19){
    sum += j.active;
}

console.log("누적 확진자 수: %d", sum);
console.log("평균 확진자 수 : %d", sum / covid19.length);