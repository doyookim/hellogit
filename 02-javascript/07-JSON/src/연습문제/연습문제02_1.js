/**
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

### 2-2.

위 문제의 점수가 순서대로 국어, 영어, 수학, 과학일 경우 수학에 대한 모든 학생의 총점과 평균을 구하시오.

#### 출력결과

```
모든 학생의 수학 총점은 325점 이고 평균은 81.25점 입니다.
```

---
 */

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



// 강사님 풀이 

const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
}

// JSON의 key에 대한 반복 처리
for (const key in exam) {
    //학생별 총점을 위한 변수 초기화
    let sum = 0;

    // exam[key]는 학생 한명의 점수 배열
    // 이 배열의 원소를 스캔하는 반복문을 사용하여 총점 구하기
    for (const p of exam[key]) {




        
        sum += p;
    }
    // 총점을 학생 개개인의 과목수로 나누어 평균 구하기
    let avg = sum / exam[key].length;

    
    console.log("%s의 총점은 %d점 이고 평균은 %d점 입니다.", key, sum, avg);
}


