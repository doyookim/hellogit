# JSON

- JavaScript Object Notation (자바스크립트 객체 표기법)

## #01. Object(객체)의 임시 정의

하나의 변수 안에 다른 하위 변수를 내장하는 특수한 형태의 변수.

하위 데이터에 접근하기 위해서는 점(`.`)으로 구분한다.

```
객체변수이름.하위변수1이름 = 123;
객체변수이름.하위변수2이름 = 456;
객체변수이름.하위변수n이름 = 999;
```

즉, JSON은 어떤 변수 안에 하위 변수를 내장시키기 위한 Javascript의 표기법이다.

## #02. JSON 표기법으로 객체 정의하기

### 1) 변수들의 그룹으로서의 JSON

하나의 변수에 하위 정보들이 포함되어 있는 변수들의 그룹으로 이해할 수 있다.

```javascript
const 객체이름 = { 이름1: 값1, 이름2: 값2, ..., 이름n: 값n };
```

- key 이름을 지정하고 콜론(`:`)으로 구분지은 후 값을 명시한다.
- 두 개 이상의 데이터는 콤마(`,`)로 구분한다.
- 원칙적으로 key 이름은 따옴표로 감싸는 것이 맞지만 key 이름에 띄어쓰기나 대시(`-`)가 없는 경우는 따옴표 처리를 생략해도 무관하다.

### 2) 배열을 포함하는 JSON

JSON의 값에는 지금까지 다룬 모든 형태의 데이터 타입이 지정될 수 있다.

```javascript
const 객체이름 = { 이름1: 숫자, 이름2: 문자열, ..., 이름n: [값1, 값2, 값3 ... 값n] };

console.log(객체이름.이름n[0]);
```

#### 변수그룹
```js
/** 변수들의 그룹으로서의 JSON 정의 */
const student = {
    // key: value, key: value ... 의 형식으로 나열
    // 숫자, boolean, null, undefined는 따옴표 적용 안함
    studno: 10101,
    grade: 1,
    name: "학생1",
    phoneno: "010-1231-2342"
};

// 각 데이터 출력하기
// 데이터에 접근하는 기본적인 방법은 객체이름. 하위정보이름
// --> 90% 이상의 경우에서 이 방식이 사용됨.
console.group("출력 type1");
console.log("학번: " + student.studno);
console.log("학년: " + student.grade);
console.log("이름: " + student.name);
console.log("연락처: " + student.phoneno);
console.groupEnd();

//json의 key이름을 배열의 인덱스처럼 활용
console.group("출력 type2");
console.log("학번: " + student['studno']);
console.log("학년: " + student['grade']);
console.log("이름: " + student['name']);
console.log("연락처: " + student['phoneno']);
console.groupEnd();


// 접근하고자 하는 하위 변수의 이름을 동적으로 설정해야 할 경우 type2가 활용된다.
const keyName = "phoneon";
console.log(student[keyName]);

//json의 key를 배열로 반환하는 명령
const keys = Object.getOwnPropertyNames(student);
console.log(keys);

// 추출한 key의 이름은 배열이므로 반복문 처리가 가능한다.
for (const k of keys) {
    console.group(k);
    // 추출된 key이름값(k)을 활용하여 실 데이터에 동적 접근 가능하다.
    console.log(student[k]);
    console.groupEnd();
}
```
> 실행결과
![변수그룹](img/변수그룹.jpg)



#### 복합자료구조
```js
/** 다양한 데이터 타입을 포함하는 복합 자료 구조 */
const company = {
    name: "(주)굿모닝컴페니",
    since: 2013,
    department: ["기획팀", "디자인팀", "개발팀"]
};

// JSON 데이터에 접근하는 방법(점으로 연결 혹은 배열처럼 접근)
// 점을 통한 접근을 권장
console.log(company.name);                  // 점으로 연결
console.log(company['since']);              // 배열처럼 연결
console.log(company.department[0]);         // 점으로 연결
console.log(company.department[1]);         // 점으로 연결
console.log(company['department'][2]);         // 배열처럼 연결
```
> 실행결과
![복합자료구조](img/복합자료구조.jpg)


### 계층 구조

JSON 표기법의 장점은 복잡한 정보 구조를 계층화 하여 표현할 수 있다는 것이다.

```javascript
const json1 = { ... };
const json2 = { ... };

const json3 = {
    data1: json1,
    data2: json2
};
```

단일 형태의 JSON 구조를 별도로 참조하는 것이 아니라 직접 정의하는 패턴

```javascript
const myjson = {
    data1: {        
        ...
    },
    data2: {
        ...
    }
};
```
#### 계층구조
```js
/** 1) 다른 JSON 객체를 value로 포함하는 경우 */

// 단일 형태의 JSON
var centerPoint = {
    x : 5,                  // x좌표
    y: 10                   // y좌표
};

// 다른 JSON을 포함하는 JSON
var circle1 = {
    center: centerPoint,        // 중심의 좌표
    radius: 5.10                // 반지름
};

console.group("circle1");
console.log("원의 중점: (%d, %d)", circle1.center.x, circle1.center.y);
console.log("원의 반지름: %d", circle1.radius);
console.groupEnd();

/** 2) 계층적으로 정의된 경우 */
var circle2 = {
    center: {           // 중심의 좌표
        x: 5,           // x좌표
        y: 10           // y좌표
    },
    radius: 5.10        // 반지름
};

console.group("circle2");
console.log("원의 중점: (%d, %d)", circle2.center.x, circle2.center.y);
console.log("원의 반지름: %d", circle1.radius);
console.groupEnd();
```
> 실행결과
![계층구조](img/계층구조.jpg)


### 목록 구조

JSON의 value가 배열로 정의되어 있으면서, 각 배열의 원소가 또 다른 JSON 형식인 경우.

단, 이 경우 배열의 원소로 포함되는 JSON 끼리는 동일한 구조를 갖는다.

```javascript
const 객체이름 = {
    key : [ {
        key: value, key: value...
    }, {
        key: value, key: value...
    }, {
        key: value, key: value...
    }, {
        key: value, key: value...
    } ]
}
```

#### 목록구조1
```js
/** 목록의 아이템으로 사용될 JSON 객체 정의하기 */
const student1 = {
    stuno: 10101,
    grade: 1,
    name: "학생1"
};

const student2 = {
    stuno: 20202,
    grade: 2,
    name: "학생"
};


/** 목록 구조를 갖는 JSON 객체 */
const classRoom = {
    student : [student1, student2]
}

console.log(classRoom);


/** 배열의 기본 특성을 활용하여 반복문으로 접근할 수 있다. */
for (let i=0; i<classRoom.student.length; i++) {
    console.group(i + "번쨰 학생");
    console.log(" >> 학번:" + classRoom.student[i].stuno);
    console.log(" >> 학년:" + classRoom.student[i].grade);
    console.log(" >> 이름:" + classRoom.student[i].name);
    console.groupEnd();
}

// for~of문을 사용할 경우 몇 번째 항목인지를 알기 위해서는 반복묵 시작전에
// 별도의 초기식과 반복문 안에 별도의 증감식을 추가해야 한다.

let i = 0; // 초기식
for (const s of classRoom.student) {
    console.group(i + "번쨰 학생");
    console.log(" >> 학번:" + classRoom.student[i].stuno);
    console.log(" >> 학년:" + classRoom.student[i].grade);
    console.log(" >> 이름:" + classRoom.student[i].name);
    console.groupEnd();
    i++; // 증감식
}
```
> 실행결과
![목록구조1](img/목록구조1.jpg)


#### 목록구조2
```js
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
```
> 실행결과
![목록구조2](img/목록구조2.jpg)

#### 목록구조3
```js
/** 가장 일반적인 형태의 목록 구조 */
// 목록을 구성하는 배열 외에 목록을 설명하기 위한 부가 정보도 함께 포함
const bbs = {
    title: "공지사항",
    count: 4,
    item: [
        {id: 1, subject: '첫 번쨰 게시물 제목'},
        {id: 2, subject: '두 번쨰 게시물 제목'},
        {id: 3, subject: '세 번쨰 게시물 제목'},
        {id: 4, subject: '네 번쨰 게시물 제목'}
    ] 
};

console.log("게시판이름:" + bbs.title);
console.log("전체 게시물 수: "+ bbs.count);

// 일반 for문
console.group("일반 for문");
for (let i=0; i<bbs.item.length; i++) {
    console.log("[" + bbs.item[i].id + "] " + bbs.item[i].subject);
}
console.groupEnd();


// for-of문
console.group("for-of문");
for (let k of bbs.item) {
    console.log("[" +k.id + "] " + k.subject);
}
console.groupEnd();
```
> 실행결과
![목록구조3](img/목록구조3.jpg)



## #03. JSON 구조의 확장

### 1) 존재하지 않는 key를 사용하는 경우

존재하지 않는 key에 대해 출력하거나 다른 변수에 대입할 경우 `undefined`로 처리된다.

### 2) 존재하지 않는 key에 대한 대입

그 즉시 객체가 확장된다.

#### 빈 객체 확장하기

아무런 key도 정의되지 않은 빈 json 객체에 점진적으로 내용을 덧붙여 나갈 수 있다.

#### JSON 확장
```js
/** 1) 존재하지 않는 key를 사용하는 경우 */
const foo = {
    name: "자바스크립트",
    age: 19
};

// 존재하지 않는 값에 대한 출력 --> undefined
console.log(foo.email);

// 존재하지 않는 값을 활용한 연산 (age를 aga로 오타가 났다고 가정)
// --> undefined + 1 --> 숫자가 아닌 결과값이 되므로 Not A Number를 의미하는 NaN이 출력됨
const nextAge = foo.aga +1;
console.log(nextAge);

/** 2) 존재하지 않는 key에 대한 대입 */
foo.email = "hello@world.com";
console.log(foo);

/** 3) 빈 객체 확장 */
const myJson = {}; // 빈 객체
console.log(myJson);

for (let i=0; i<10; i++){
    const key = "value" + i;
    myJson[key] = i * 100;
}
console.log(myJson);
```
> 실행결과
![JSON확장](img/JSON확장.jpg)


#### JSON반복문
```js
// 예제를 위한 임의의 JSON 정의
const student = {
    stuno: 10101,
    grade: 1,
    nmae: "학생1",
    phoneno: "010-1231-2342"
};

// JSON이나 멤버변수를 갖는 객체에 대한 반복문
// --> 변수로 선언한 key가 순차적으로 저장된다.

for (let k in student){
    console.log("%s : %s", k, student[k]);
}
```
> 실행결과
![JSON반복문](img/JSON반복문.jpg)


#### 값복사
```js
/** 값복사 --> 일반 변수끼리의 복사 */
let a =100;
let b =a;
console.log("a=" + a + ", b=" + b);

// 일반 변수끼리 복사한 경우 원본이 변경되면 복사본에는 영향이 없다
a++;
console.log("a=" + a + ", b=" + b);
```
> 실행결과
![값복사](img/값복사.jpg)


#### 참조복사 (=얕은복사)
```js
/** 참조복사 (=얕은복사) */
// 배열, JSON, 객체 끼리의 복사는 참조처리된다.
// 원본을 수정하면 복사본도 함계 수정된다. (반대의 경우도 마찬가지)
const user = {
    name: "Lee"
};

const member = user;
console.log(user);
console.log(member);

member.name = "Kim";
console.log(user);
console.log(member);

const d1 = [1, 2, 3];
const d2 = d1;
console.log(d1);
console.log(d2);

d1[0] += 10;
d1[1] += 10;
d1[2] += 10;
console.log(d1);
console.log(d2);
```
> 실행결과
![참조복사 (=얕은복사)](img/참조복사=얕은복사.jpg)


#### 배열끼리의 값복사 방법(=깊은복사) 
```js
/** 배열끼리의 값복사 방법(=깊은복사) */
const a1 = [1, 2, 3];

// 원본과 동일한 길이를 갖는 배열을 생성
const a2 = new Array(a1.length);

// 배열을 온전히 값복사하기 위해서는 원소끼리 개별복사 해야 함
for (let i=0; i<a1.length; i++){
    a2[i] = a1[i];
}

// 배열객체가 갖는 메서드를 활용한 깊은 복사 방법
const a3 = a1.slice();

console.log(a1);
console.log(a2);
console.log(a3);

a1[0] += 100;

console.log(a1);
console.log(a2);
console.log(a3);
```
> 실행결과
![배열끼리의 값복사 방법(=깊은복사)](img/배열끼리의%20값복사%20방법(=깊은복사).jpg)


#### JSON의 깊은 복사
```js
/** JSON의 깊은 복사 */
const addr = {
    city: '서울',
    gu: '서초'
};


/** 깊은 복사를 수행할 빈 JSON객체를 생성 */
const copy = {};

for (let key in addr) {
    // copy.city 와 copy.gu와 동일한 처리
    copy[key] = addr[key];
}

console.log(addr);
console.log(copy);

addr.gu = '강남';

console.log(addr);
console.log(copy);

```
> 실행결과
![JSON의 깊은 복사](img/JSON의%20깊은%20복사.jpg)



#### JS가 제공하는 기능 활용하기
```js
// JS가 제공하는 기능 활용하기

const addr = {
    city: '서울',
    gu: '서초'
};


const copy2 = {};

// addr을 copy2에 깊은 복사 수행하는 JS내장가능
// 복사될 copy2가 비어 있는 json일 경우 복사.
// copy2가 비어있지 않으면 누적
Object.assign(copy2, addr);
console.log(copy2);

```
> 실행결과
![JS가 제공하는 기능 활용하기](img/JS가%20제공하는%20기능%20활용하기.jpg)


#### JSON에 대한 구조분해 (=비구조 할당)
```js
/** 1) JSON에 대한 구조분해 (=비구조 할당) */
const object = { a: 1, b: 2 };

// const a = object.a;
// const b = object.b;
// JSON(혹은 객체)에서 값들을 추출하여 새로운 상수로 만들어 줌
// --> object에는 {}안에 명시된 항목과 동일한 key를 갖는 데이터가 존재해야 함
const {a, b} = object;

console.log(a);
console.log(b);

// 구조분해를 활용하여 필요한 데이터만 추출하기
const data = { name: 'hello', age:20, height:172, weight:85 };
const {name} = data;
console.log(name);


// data안에 있는 height와 weight를 분해하면서 이름을 h와 w로 변경
const { height: h, weight: w} = data;
console.log(h);
console.log(w);
console.log(data);

// 구조분해를 수행한 나머지를 별도로 분리하기
const dummy = { a1: 100, a2: 200, a3: 300, a4: 400 };
const { a1, a2, ...rest_b} = dummy;
console.log(a1);
console.log(a2);
console.log(rest_b);


// 구조분해를 활용하여 기존 데이터와 추가적인 값을 반영한 새로운 객체 생성
const origin = { name: 'javascript', age: 25};
const newdata1 = { ...origin, gender: 'M'};
console.log(newdata1);

// 구조분해를 통한 새로운 데이터 생성시 원보과 동일한 이름의 속성이 있다면 원본 데이터를 수정한다.
const newdata2 = {...origin, age: 30, gender: 'F'};
console.log(newdata2);
```
> 실행결과
![JSON에 대한 구조분해 (=비구조 할당)](img/JSON에%20대한%20구조분해%20(=비구조%20할당).jpg)



#### 배열에 대한 구조분해
```js
/** 2) 배열에 대한 구조분해 */
// 기본 사용
const array = [1, 2];
const [one, two] = array;

console.log(one);
console.log(two);


// 구조분해를 수행한 나머지를 별도로 분리하기
[b1, b2, ...rest_b] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(b1); // 1
console.log(b2); // 2
console.log(rest_b); // [3, 4, 5, 6, 7, 8, 9]
```
> 실행결과
![배열에 대한 구조분해](img/배열에%20대한%20구조분해.jpg)



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

```js
// 강사님 풀이

const blood_data = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O'];
const result = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0};

for (const b of blood_data){
  console.log(b);
  result[b]++;
  
}
console.log(result);
```
> 실행결과
![연습문제1](src/연습문제/연습문제01.jpg)



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

```js


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
    //console.log(key);
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
```
> 실행결과
![연습문제2-1](src/연습문제/연습문제02-1.jpg)


### 2-2.

위 문제의 점수가 순서대로 국어, 영어, 수학, 과학일 경우 수학에 대한 모든 학생의 총점과 평균을 구하시오.

#### 출력결과

```
모든 학생의 수학 총점은 325점 이고 평균은 81.25점 입니다.
```
```js
// 강사님 풀이

const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
}

// 전체 학생에 대한 총점이므로 반복문의 바깥에서 변수 초기화
let sum = 0;

// JSON은 길이를 알 수 없기 때문에 JSON의 원소 하나를 반복문으로 스캔할 때마다
// count 변수를 1씩 증가하여 전체 학생 수를 알아내야 한다.

let student_count = 0 ;

for (const key in exam) {
    sum += exam[key][2];

    // 몇 번째 학생인지 카운트 
    student_count ++;
}

// 학생별 수학 총점 / 학생수 
let avg = sum / student_count;

console.log("모든 학생의 수학 총점은 %d점이고 평균은 %d점 입니다", sum, avg);
```

> 실행결과
![연습문제2-2](src/연습문제/연습문제02-2.jpg)


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

```js
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
```
> 실행결과
![연습문제3-1](src/연습문제/연습문제03-1.jpg)

### 3-2

1월 25일부터 2월 1일까지 중에서 확진자가 가장 많이 나타난 날짜는 언제인가?

#### 출력결과

```
확진자가 가장 많이 나타난 날: 0127
```


```js
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
```
> 실행결과
> ![연습문제3-2](src/연습문제/연습문제03-2.jpg)