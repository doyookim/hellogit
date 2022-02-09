/** 
## 문제1. 

국어, 영어, 수학 점수를 생성자 파라미터로 입력받아서 합계와 평균을 구하는 클래스 Student를 작성하시오.

이 때 Stuent 클래스는 합계를 리턴하는 메서드인 `sum()`과 평균을 리턴하는 `avg()`를 제공합니다.

작성된 클래스를 활용하여 아래 표에 대한 학생별 합계 점수와 평균점수를 출력하시오.

클래스는 JSON 형식으로 작성되어야 합니다.

| 이름 | 국어 | 영어 | 수학 |
|---|---|---|---|
| 철수 | 92 | 81 | 77 |
| 영희 | 72 | 95 | 98 |
| 민혁 | 80 | 86 | 84 |


#### 출력결과

```
철수의 총점은 249점 이고 평균은 83점 입니다.
영희의 총점은 251점 이고 평균은 83.66666666666667점 입니다.
민혁의 총점은 264점 이고 평균은 88점 입니다.
```
*/

function Student(name, kor, eng, mat){
    this._name = name;
    this._kor = kor;
    this._eng = eng;
    this._mat = mat;
}


var studSum = 0;
var studAvg = 0;

Student.prototype = {
    get name() {
        return this._name;
    },

    set name(param) {
        this._name = param;
    },

    get kor() {
        return this._kor;
    },

    set kor(param) {
        this._kor = param;
    },

    get eng() {
        return this._eng;
    },

    set eng(param) {
        this._eng = param;
    },

    get mat() {
        return this._mat;
    },

    set mat(param) {
        this._mat = param;
    },


    sum: function(){
        studSum = this.kor + this.eng + this.mat;
        console.log(stud1.name+"의 총점은"+ studSum +"이고");
    },

    avg: function(){
        studAvg = studSum / 3;
        console.log("평균은"+ studAvg+ "입니다.");
 }      
};



const stud1 = new Student('철수', 92, 81, 77);
const stud2 = new Student('영희', 72, 95, 98);
const stud3 = new Student('민혁', 80, 86, 84);


stud1.sum();
stud1.avg();

stud2.sum();
stud2.avg();

stud3.sum();
stud3.avg();

// 강사님 풀이

function Student(kor, eng, math) {
    this._kor = kor;
    this._eng = eng;
    this._math = math;

}

Student.prototype = {
    sum : function() {
        return this._kor +  this._eng  + this._math;
    },

    avg : function() {
        return this.sum() / 3;
    }
};


console.group("반복문 안에서 객체 활용");
const grade = [
    ["철수", 92, 81, 77],
    ["영희", 72, 95, 98],
    ["민혁", 80, 86, 84]
];

for (const item of grade) {
    const s = new Student(item[1], item[2], item[3]);
    console.log("%s의 총점은 %d점 이고 평균은 %d점 입니다.", item[0], s.sum(), s.avg());
}
console.groupEnd();

console.group("하드코딩");
const s1 = new Student(92, 81, 77);
const s2 = new Student(72, 95, 98);
const s3 = new Student(80, 86, 84);
console.log("철수의 총점은 %d점 이고 평균은 %d점 입니다.", s1.sum(), s1.avg());
console.log("영희의 총점은 %d점 이고 평균은 %d점 입니다.", s2.sum(), s2.avg());
console.log("민혁의 총점은 %d점 이고 평균은 %d점 입니다.", s3.sum(), s3.avg());