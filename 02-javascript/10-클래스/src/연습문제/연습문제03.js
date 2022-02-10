// 문제 3 - 다음을 만족하는 Student 클래스를 작성하시오.

// 1) String형의 학과와 정수형의 학번을 프로퍼티로로 선언후 생성자를 통해 주입
// 2) getter, setter를 정의
// 3) sayHello() 메서드를 통해 "나는 OOOO학과 OO학번 입니다." 를 출력하는 기능을 구현


class Student {
    constructor() {
        this._major =  null;
        this._num = null;

    }

    set major(value) {
        return this._major = value;
    }

    get major() {
        return this._major;
    }

    set num(value) {
        return this._num = value;
    }

    get num() {
        return this._num;
    }

    sayHello() {
         console.log("나는 %s학과 %d학번이다.", this.major, this.num);
    }
}

const stud1 = new Student();
stud1.major = "경영";
stud1.num = "12356";
stud1.sayHello();


// 수정


class Student {
    constructor(major, num) {
        this._major =  major;
        this._num = num;

    }

    set major(major) {
         this._major = major;
    }

    get major() {
        return this._major;
    }

    set num(num) {
         this._num = num;
    }

    get num() {
        return this._num;
    }

    sayHello(major, num) {
         console.log("나는 %s학과 %d학번이다.", this.major, this.num);
    }
}

const stud1 = new Student("경영", 123456);
stud1.sayHello();
