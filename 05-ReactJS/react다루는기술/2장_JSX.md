# 2장 JSX

# 2.1 코드 이해하기

```jsx
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

![디렉터리](001.png)

프로젝트 생성 과정에서 node_modules 디렉터리에 react모듈이 설치됨. import(다른 JS 불러오기) 구문을 통해 리액트를 불러와서 사용. 원래 브라우저에는 없던 기능. Node.js에서 지원하는 기능.  
일반 JS에서는 import(X).

분할된 JS를 import해서 조립 -> 번들러(webpack을 뜻함)를 사용하여 파일을 묶듯이 연결.

> 코드 번들링
> ![코드번들링](code_bundling.png)

바벨이라는 도구를 사용하여 ES5 문법으로 변환

작성 : ES6 (Node용) ->(webpack) -> 병합 ->(바벨) -> 변환(ES5)<웹브라우저 >

위의 과정을 `create react-app`이 대신 해주기 때문에 별도의 설정을 할 필요가 없음.

# 2.2 JSX란?

JSX는 자바스크립트의 확장 문법. 이로 작성한 코드는 브라우저에서 실행되기 전에 코드가 번들링 되는 과정에서 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환됨.

> JSX는 공식적인 자바스크립트 문법은 아님. 개발자들이 임의로 만든 문법.

# 2.3 JSX의 장점

## 2.3.1 보기 쉽고 익숙하다

## 2.3.2 더욱 높은 활용도

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

> <b>ReactDOM.render는 무엇인가요?</b>  
> 컴포넌트를 페이지에 렌더링하는 역할, 여기서는 id가 root인 요소 안에 렌더링하도록 설정. 이 요소는 public/index.html 파일을 열어보면 있음.

# 2.4 JSX 문법

## 2.4.1 감싸인 요소

컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸야 함.

요소 여러 개를 왜 하나의 요소로 꼭 감싸 주어야 하는 이유는, Virtual DOM에서 컴포넌트 변화를 감지해 낼 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙이 있기 때문.

```jsx
function App() {
  return (
    <>
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </>
  );
}

export default App;
```

![helo-react](hello-react%20001.png)

## 2.4.2 자바스크립트 표현

JSX안에서는 자바스크립트 표현식을 쓸 수 있음. JSX 내부에서 코드를 { }로 감싸면 됨.

```jsx
function App() {
  const name = "리액트";
  return (
    <>
      <h1>{name} 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </>
  );
}

export default App;
```

## 2.4.3 If 문 대신 조건문 연산자

JSX 내부의 자바스크립트 표현식에서 if문을 사용할 수 없음. 하지만 조건에 따라 다른 애용을 렌더링해야 할 때는 JSX 밖에서 if 문을 사용하여 사전에 값을 설정하거나, { } 안에 조건부 연산자를 사용하면 됨.

```jsx
function App() {
  const name = "리액트";
  return (
    <div>
      {name === "리액트" ? (
        <h1>리액트 입니다.</h1>
      ) : (
        <h2>리액트가 아닙니다.</h2>
      )}
    </div>
  );
}

export default App;
```

![JSX1](hello-react%20002.png)

```jsx
function App() {
  const name = "뤼액트";
  return (
    <div>
      {name === "리액트" ? (
        <h1>리액트 입니다.</h1>
      ) : (
        <h2>리액트가 아닙니다.</h2>
      )}
    </div>
  );
}

export default App;
```

![JSX2](hello-react%20003.png)

## 2.4.4 AND 연산자(&&)를 사용한 조건부 렌더링

특정 조건을 만족할 때 내용을 보여주고, 만족하지 않을 때 아예 아무것도 렌더링 하지 않아야 하는 상황.

```jsx
function App() {
  const name = "뤼액트";
  return <div>{name === "리액트" ? <h1>리액트 입니다.</h1> : null}</div>;
}

export default App;
```

&&연산자를 사용한 조건부 렌더링 : 조건이 참인 경우만 실행함.

```jsx
function App() {
  const name = "뤼액트";
  return <div>{name === "리액트" && <h1>리액트 입니다.</h1>}</div>;
}

export default App;
```

&& 연산자로 조건부 렌더링을 할 수 있는 이유는 리액트에서 false를 렌더링할 때는 null과 마찬가지로 아무것도 나타나지 않기 때문.<strong> 그러나 0은 예외적으로 화면에 나타남.</strong>

```jsx
function App() {
  const number = 0;
  return number && <div>내용</div>;
}

export default App;
```

![jsx4](hello-react%20004.png)

> <b>JSX는 언제 괄호로 감싸야 하나요? </b>  
> JSX를 작성할 때 `(<div>Hello World</div>)`와 같이 괄호로 감쌀 때도 있고, 감싸지 않을 때도 있음. 주로 JSX를 여러 줄로 작성할 때 괄호로 감싸고, 한 줄로만 표현할 수 있는 JSX는 감싸지 않음. 필수 사항이 아니므로 감싸도 되고 감싸지 않아도 됨.

## 2.4.5 undefined를 렌더링하지 않기

리액트 컴포넌트에서는 함수에서 undefined만 반환하여 렌더링하는 상황을 만들면 안됨.  
=> 현재(22.05.04) 오류 발생 X, 빈화면 출력

```jsx
function App() {
  const name = undefined;
  return name;
}

export default App;
```

OR(||) 연산자를 사용하여 해당 값이 undefined일 때 사요할 값을 지정하여 오류 방지

```jsx
function App() {
  const name = undefined;
  return name || "값이 undefined 입니다";
}

export default App;
```

name 값이 undefined일 때 보여주고 싶은 문구가 있다면 다음과 같이 작성.  
(조건이 false, null, undefined 일 때 출력함)

```jsx
function App() {
  const name = undefined;
  return <div>{name || "리액트"}</div>;
}

export default App;
```

## 2.4.6 인라인 스타일링

리액트에서 `DOM 요소에 스타일을 적용할 때`는 문자열 형태로 넣는 것이 아니라 `객체 형태`로 넣어주어야 함. 스타일의 이름의 경우 -를 없애고 `카멜 표기법(camelCase)`로 작성해야함.

```jsx
function App() {
  const name = "리액트";
  // JSON 객체
  const style = {
    // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px", //font-size ->fontSize
    fontWeigt: "bold", //font-weight ->fontWeight
    padding: 16, // 단위를 생량하면 px로 지정됨.
  };
  return <div style={style}>{name}</div>;
}

export default App;
```

style 객체를 미리 선언하지 않고, 바로 style 값을 지정하고 싶다면 다음과 같이 작성.

```jsx
function App() {
  const name = "리액트";
  // JSON 객체
  return (
    <div
      style={{
        // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성
        backgroundColor: "black",
        color: "aqua",
        fontSize: "48px", //font-size ->fontSize
        fontWeigt: "bold", //font-weight ->fontWeight
        padding: 16, // 단위를 생량하면 px로 지정됨.
      }}
    >
      {name}
    </div>
  );
}

export default App;
```

![jsx5](hello-react%20005.png)

## 2.4.7 class 대신 className

JSX에서는 `class`가 아닌 `className`으로 설정해 주어야 함.

```css
.react {
  background: aqua;
  color: black;
  font-size: 48px;
  font-weight: bold;
  padding: 16px;
}
```

```jsx
import "./App.css";

function App() {
  const name = "리액트";
  return <div className="react">{name}</div>;
}

export default App;
```

![jsx6](hello-react%20006.png)
JSX 작성 시, className이 아닌 class 값을 설정해도 스타일이 적용되긴 함. 하지만 그렇게 사용하면 브라우저 콘솔탭에 경고가 나타남.

## 2.4.8 꼭 닫아야 하는 태그

태그를 닫지 않은 HTML태그(오류가 발생하지 않음)

```html
<form>
  성:<br />
  <input /><br />
  이름:<br />
  <input />
</form>
```

JSX에서는 위 코드처럼 태그를 닫지 않으면 오류가 발생.

```jsx
import "./App.css";

function App() {
  const name = "리액트";
  return (
    <>
      <div className="react">{name}</div>
      <input>
    </>
  );
}

export default App;
```

![jsx7](hello-react%20007.png)

이 오류를 해결 하라면 다음과 같이 닫아주어야 함.

```jsx
import "./App.css";

function App() {
  const name = "리액트";
  return (
    <>
      <div className="react">{name}</div>
      <input></input>
    </>
  );
}

export default App;
```

태그 사이에 별도의 내용이 들어가지 않는 경우에는 self-cloging 태그로 닫아줌.

```jsx
import "./App.css";

function App() {
  const name = "리액트";
  return (
    <>
      <div className="react">{name}</div>
      <input />
    </>
  );
}

export default App;
```

## 2.4.9 주석

```jsx
import "./App.css";

function App() {
  const name = "리액트";
  return (
    <>
      {/* 주석은 이렇게 작성합니다 */}
      <div
        className="react" // 시작 태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성할 수 있습니다.
      >
        {name}
      </div>
      // 하지만 이런 주석이나 /* 이런 주석은 페이지에 그대로 나타나게 됩니다. */
      <input />
    </>
  );
}

export default App;
```

![jsx8](hello-react%20008.png)

# 2.5 ESLint와 Prettier 적용하기

## 2.5.1 ESLint

ESLint는 문법 검사 도구

## 2.5.2 Prettier

Prettier는 코드 스타일 자동 정리 도구

### 2.5.2.1 저장할 때 자동으로 코드 정리하기

파일 > 기본설정 > 설정 - 상단 텍스트 박스에서 format on save 검색하여
체크박스에 체크
![prettier](hello-react%20009.png)
