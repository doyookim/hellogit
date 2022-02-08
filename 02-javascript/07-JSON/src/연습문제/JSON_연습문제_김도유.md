# 김도유_JSON 연습문제

> 2021-02-07

JSON에 대한 이해가 부족했던 것 같습니다.   
문제에 대한 접근자체가 불가했습니다ㅠ_ㅠ...   

풀이과정에 대해 적긴 했지만, 옳은 답은 아님에도 불구하고   
올립니다.  

이 부분에 대해서는 더 공부하여 보충하도록 하겠습니다. 



## 문제1.

다음은 10명의 학생들에 대한 혈액형 데이터이다.

```
['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O']
```

아래와 같은 JSON을 정의하고, 각 혈액형별 학생수를 아래의 json의 각 key에 대한 value에 저장하시오. (혈액형별 학생 수를 for문을 활용하여 산출해야 합니다.)

```js
const result = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0};
```

---


```javascript
const bloodType = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O'];

let Atype = 0;
let Btype = 0;
let ABtype = 0
let Otype = 0;

for (let i=0; i<bloodType.length; i++) {
    if (bloodType[i] == 'A'){
        Atype++;
       // console.log(Atype);
    } else if (bloodType[i] == 'B'){
        Btype++;
       // console.log(Btype);
    }  else if (bloodType[i] == 'AB') {
        ABtype++;
      //  console.log(ABtype);
    } else {
        Otype++;
      //  console.log(Otype);
    }

    //console.log("A:"+ Atype + "B:" + Btype + "AB:" + ABtype +"O:" + Otype);
}

//console.log("A:"+ Atype + " B:" + Btype + " AB:" + ABtype +" O:" + Otype);

const result = {"A" : Atype, "B" : Btype, "AB" : ABtype, "O" : Otype};

console.log(result);
```

![Alt text](연습문제01.png)



## 문제2.

다음의 JSON은 어느 학급의 중간고사 성적을 나타낸다.

```js
const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
}
```

### 2-1.

위 데이터에서 학생별 총점과 평균을 구하시오.

#### 출력결과

```
철수의 총점은 341점 이고 평균은 85.25점 입니다.
민영의 총점은 369점 이고 평균은 92.25점 입니다.
남철의 총점은 257점 이고 평균은 64.25점 입니다.
혜진의 총점은 322점 이고 평균은 80.5점 입니다.
```


```javascript
const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
}

//const studenName = Object.getOwnPropertyNames(exam);
//console.log(studenName);


let sum = 0;

// for (let i=0; i<exam.철수.length; i++) {
//     console.log(exam.철수[i]);
//     sum += exam.철수[i];
// }

// console.log(sum); 

let avg = 0;

//철수의 총점은 341점 이고 평균은 85.25점 입니다.

for (let j in exam) {
    for(let i=0; i<exam[j].length; i++) {
       // console.log(exam[j]);
        for (let k=0; exam[j].length; k++){
            sum += parseInt(exam[j]);
        }
        //sum += exam[j];
        console.log(sum);
        avg = sum / 4;
    }
    console.log("%s, %d, %d", j, sum, avg);
}


// 08. JSON반복문 참고

// // 예제를 위한 임의의 JSON 정의
// const student = {
//     stuno: 10101,
//     grade: 1,
//     nmae: "학생1",
//     phoneno: "010-1231-2342"
// };

// // JSON이나 멤버변수를 갖는 객체에 대한 반복문
// // --> 변수로 선언한 key가 순차적으로 저장된다.

// for (let k in student){
//     console.log("%s : %s", k, student[k]);
// }

```



출력결과 : X

### 2-2.

위 문제의 점수가 순서대로 국어, 영어, 수학, 과학일 경우 수학에 대한 모든 학생의 총점과 평균을 구하시오.

#### 출력결과

```
모든 학생의 수학 총점은 325점 이고 평균은 81.25점 입니다.
```

---

## 문제3.

아래의 데이터는 2021년 01월 25일부터 02월 01일까지의 Covid19 일별 확진자 수를 표현한 자료구조다.

```json
covid19 = [
    {'0125': 426}, {'0126': 343}, {'0127': 547}, {'0128': 490}, 
    {'0129': 460}, {'0130': 443}, {'0131': 338}, {'0201': 299}
]
```

### 3-1.

1월 25일부터 2월 1일까지의 누적 확진자 수와 일 평균 확진자 수를 구하시오.

#### 출력결과

```
426
343
547
490
460
443
338
299
누적 확진자 수: 3346
평균 확진자 수: 418.25
```


```javascript
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
```

### 3-2

1월 25일부터 2월 1일까지 중에서 확진자가 가장 많이 나타난 날짜는 언제인가?

#### 출력결과

```
확진자가 가장 많이 나타난 날: 0127
```

