# CSS, SCSS, SASS의 차이

요약

SCSS와 SASS는 CSS를 편리하게 이용할 수 있도록 도와주며 추가 기능도 있는 확장판 ( CSS를 확장하는 스크립팅언어 )이다.

​

예시

만약 HTML코드가 아래와 같을때,
```html
<ul class='list'>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</div>
```
   
- CSS
```html
.list {
  width: 100px;
  float: left;
  }
li {
  color: red;
  background: url("./image.jpg");
  }
li:last-child {
  margin-right: -10px;
  }
 ``` 
    
- SCSS 


```html
.list {
  width: 100px;
  float: left;
  li {
    color: red;
    background: url("./image.jpg");
    &:last-child {
      margin-right: -10px;
    }
  }
}
```



- SASS : 괄호와 ;가 사라진다.

```html
.list
  width: 100px
  float: left
  li
    color: red
    background: url("./image.jpg")
    &:last-child
      margin-right: -10px;
```

## 사용 이유

### 1. CSS는 작업이 크고 고도화 될수록 불편함이 생긴다.

- 불필요한 선택자(Selector)많아짐

- 연산 기능의 한계

- 구문의 부재

​

### 2. SCSS와 SASS는 작업을 쉽게 해준다.

- 가독성과 재사용성을 높여주어 유지보수가 쉬워지게 도와준다.

- CSS보다 심플한 표기법으로 CSS를 구조화하여 표현할 수 있다.

- 스킬 레벨이 다른 팀원들과의 작업 시 발생할 수 있는 구문의 수준 차이를 평준화할 수 있다.

​

### SASS는 CSS의 태생적 한계를 보완하기 위해 아래와 같은 추가기능과 유용한 도구들을 제공한다.

- 변수의 사용

- 조건문과 반복문

- Import

- Nesting

- Mixin

- Extend/Inheritance

​

​

### SASS와 SCSS의 차이

SASS = Syntactically Awesome Style Sheets = 문법적으로 멋진 스타일 시트..

SCSS = Sassy CSS = 멋진 CSS

​

결론적으론 SCSS가 더 좋다.

더 나중에 나왔고, 더 넓은 범용성과 CSS의 호환성 등의 이유가 있다.   
[출처] CSS, SCSS, SASS의 차이|작성자 evanmacmillan
> https://blog.naver.com/PostView.nhn?blogId=evanmacmillan&logNo=222326930282


## VSCode extension으로 SASS/SCSS를 사용해보자.
> https://okayoon.tistory.com/entry/VSCode-extension%EC%9C%BC%EB%A1%9C-SASSSCSS%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EC%9E%90

추가 코드 :
```settings.json
 "liveSassCompile.settings.autoprefix": [],
    "liveSassCompile.settings.formats": [
        {
            "extensionName": ".min.css",
            "format": "compressed",
            "savePath": "~/../css"
        }
    ],
```