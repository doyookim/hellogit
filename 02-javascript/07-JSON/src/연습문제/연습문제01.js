/** 
## 문제1.

다음은 10명의 학생들에 대한 혈액형 데이터이다.

```
['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O']
```

아래와 같은 JSON을 정의하고, 각 혈액형별 학생수를 아래의 json의 각 key에 대한 value에 저장하시오.
(혈액형별 학생 수를 for문을 활용하여 산출해야 합니다.)

```js
const result = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0};
```
*/

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

const blood_data = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O'];
const result = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0};

for (const b of blood_data){
  console.log(b);
  result[b]++;
  
}
console.log(result);