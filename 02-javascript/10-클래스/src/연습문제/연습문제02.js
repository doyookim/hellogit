
class Rectangle {
    constructor() {
        this._width = null;
        this._height = null;
    }

    set width(value) {
        if (!value) {
            console.log("값을 입력하세요.");
            return;
        }

    this._width = value;
    
    }

    get width() {
        return this._width;
    }

    set height(value) {
        if (!value) {
            console.log("값을 입력하세요.");
            return;
        }

        this._height = value;
    }

    get height() {
        return this._height;
    }

    getAround() {
        return this._width * 2 + this._height * 2;
    }
    
    getArea() {
        return this._width * this._height;
    }

}


const rect = new Rectangle();
rect.width = 10;
rect.height = 5;

console.log("가로가" + rect.width + "이고 세로가"+ rect.height +"인 경우");
console.log('둘레의 길이는 %d이고 넓이는 %d입니다.', rect.getAround(), rect.getArea());


// 강사님 풀이


class Rectangle {
    constructor() {
        this._width = null;
        this._height = null;
    }

    get width() {
        return this._width;
    }

    set width(param) {
        this._width = param;
    }

    get height() {
        return this._height;
    }

    set height(param) {
        this._height = param;
    }

    getAround() {
        return this.width * 2 + this.height * 2;
    }

    getArea() {
        return this.width * this.height;
    }
}


const rect = new Rectangle();
rect.width = 10;
rect.height = 5;

console.log('둘레의 길이는 %d이고 넓이는 %d입니다.', rect.getAround(), rect.getArea());