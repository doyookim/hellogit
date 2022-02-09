/** 
## 문제2.

가로(`width`), 세로(`height`)정보를 getter, setter로 관리하는 Rectangle 클래스를 정의하시오.

이 클래스는 생성자의 파라미터가 없으며 둘레의 길이를 구해 리턴하는 getAround() 메서드와 넓이를 구해 리턴하는 gerArea() 메서드를 제공합니다.

클래스는 JSON 형식으로 작성되어야 합니다.


#### 출력결과

가로가 10이고 세로가 5인 경우

```
둘레의 길이는 30이고 넓이는 50입니다.
```
*/


function Rectangle() {
    this._width = null;
    this._height = null;
}
var recArea = 0;
var recAround = 0;


Rectangle.prototype = {
    get width() {
        return this._width;
    },

    set width(param) {
        this._width = param;
    },

    get height() {
        return this._height;
    },

    set height(param) {
        this._height = param;
    },

    getAround: function() {
       recAround =  this.height * 2 + this.width * 2 
      
      
    },

    getArea: function(){
        recArea = this.height * this.width
  
    }

    
};




const rectangel1 = new Rectangle();
rectangel1.width = 10;
rectangel1.height = 5;
rectangel1.getAround();
rectangel1.getArea();



console.log("가로가" + rectangel1.width + "이고 세로가"+ rectangel1.height +"인 경우");
console.log("둘레의 길이는"+recAround +"이고"+ recArea +"넓이는입니다.")

// 강사님 풀이

function  Rectangle() {
    this._width = null;
    this._height = null;
}

Rectangle.prototype = {
    get width() {
        return this._width;
    },
    set width(param){
        this._width = param;
    },
    get height() {
        return this._height;
    },
    set height(param){
        this._height = param;
    },
    getAround : function () {
        return this.width * 2 +  this.height * 2;
    },
    getArea : function () {
        return this.width * this.height;
    },
};


const rect  = new Rectangle();
rect.width = 10;
rect.height = 5;

console.log('둘레의 길이는 %d이고 넓이는 %d입니다.', rect.getAround(), rect.getArea());