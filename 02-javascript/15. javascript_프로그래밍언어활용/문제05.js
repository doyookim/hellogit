// 【문항5】 어느 학급의 중간고사 평균 성적이 아래의 표와 같았다.    
//  셀2|제목 셀3|제목 셀4|제목 셀5|

// |민수|철영|나영|수철|영민|
// |---|---|---|---|--|
// |82|76|91|98|64|


// 학생의 성적에 대해 아래의 요구사항을 충족하는 Student 클래스를 작성하고 각 메서드의 
// 실행결과를 제시시오. (60분/50점)\

// 요구사항
// 1. 생성자에서 원소가 0개인 빈 배열 grade를 생성합니다. 
// 2. setter에 학생 한명의 점수를 주입하면 grade의 원소로 추가됩니다. getter는 제공되지 않습니다. 
// 3. 주입된 점수의 총점과 평균을 배열로 리턴하는 getSumAvg() 함수를 제공합니다. 
// 4. 주입된 점수 중에서 최하점과 최고점을 JSON으로 리턴하는 getMinMax() 함수를 제공합니다. 
// 5. 주입된 점수에 대한 분산을 리턴하는 getVar() 함수를 제공합니다. 
// 6. 주입된 점수에 대한 표준편차를 리턴하는 getStd() 함수를 제공합니다.

// Javascript에서 제곱근은 Math.sqrt(input)을 사용하여 리턴받을 수 있다

let sum = 0;
let avg = 0;
let devTotal = 0;   /* 편차값의 합계 */
let minmax = {};
let variance = 0;
let std = 0;
let tmp1 = 0;
let tmp2 =0;

class Student{
    constructor(){
        const grade = new Array();
    }
    set grade(grade) {
        this._grade = grade;
    }

    getSumAvg() {
        sum += parseInt(grade);
        avg += sum/grade.length;
        return [sum, avg];
    }

    getMinMax() {

        for (let i=0; i<grade.length-1; i++) {
            for (let j=i+1; j<grade.length; j++) {

                if (grade[i] > grade[j]) {
                    tmp1 = grade[i];
                    grade[i] = grade[j];
                    grade[j] = tmp1;
        
                }
                //console.log(grade[j])
        }
    }
        for (let i=0; i<grade.length-1; i++) {

            for (let j=i+1; j<grade.length; j++) {

                if (grade[i] < grade[j]) {
                    tmp2 = grade[i];
                    grade[i] = grade[j];
                    grade[j] = tmp2;
        
                }
        }
    }
        return {max : tmp1, min: tmp2};
    }

    getVar() {

        for (let i=0; i < grade.length; i++){
            let dev = grade[i] - avg;
            devTotal += dev * dev;
        }
        return variance = devTotal/grade.length;
    }

    getStd(){
        return std = Math.sqrt(sum/(grade.length-1));
    }
}


const grade =[82, 76, 91, 98, 64];


for (const item of grade) {
    const s = new Student();
    console.log(s.getSumAvg());
    console.log(s.getMinMax());
    console.log(s.getVar());
    console.log(s.getStd());
}

// 풀이 

class Student{
    constructor(){
        this._grade = [];
    }

    set grade(v) {
        this._grade.push(v);
    }

    getSumAvg() {
        let sum = 0;
        for (const i of this._grade) {
            sum += i;
        }
        return [sum, sum/this._grade.length];
    }


    getMinMax() {
        let min = this._grade[0];
        let max = this._grade[0];

        for (let i=0; i<this._grade.length; i++) {
            const x = this._grade[i];
            if (min > x) { min = x; }
            if (max < x) { max = x; }
        }
        return {"min":min, "max": max };

    }

    getVar() {
        const avg = this.getSumAvg()[1];
        let dev_sum = 0;
        for (const x of this._grade) {
            const y = avg - x;
            dev_sum += y * y;
        }
        return dev_sum / this._grade.length;
    }

    getStd() {
        return Math.sqrt(this.getVar());
    }

}


const student = new Student();
student.grade = 82;
student.grade = 76;
student.grade = 91;
student.grade = 98;
student.grade = 64;

console.log(student.getSumAvg());
console.log(student.getMinMax());
console.log(student.getVar());
console.log(student.getStd());
