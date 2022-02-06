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