# 5장 ref:DOM에 이름 달기

리액트 프로젝트 내부에서 DOM에 이름을 다는 방법 바로 ref(reference의 줄임말)

> 리액트 컴포넌트 안에서는 id사용을 권장하지 않음

# 5.1 ref는 어떤 상황에서 사용해야 할까

<b>DOM을 꼭 직접적으로 건드려야 할 때 </b>

## 5.1.1 예제 컴포넌트 생성

> ValidationSample.css

```jsx
.success {
  background-color: lightgreen;
}
.failure {
  background-color: lightcoral;
}
```

> ValidationSample.js

```jsx
import React from "react";
import "./ValidationSample.css";

const ValidationSample = () => {
  const [password, setPassword] = React.useState("");
  const [clicked, setClicked] = React.useState(false);
  const [validated, setValidated] = React.useState(false);

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleButtonClick = () => {
    setClicked(true);
    setValidated(password === `0000`);
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        className={clicked ? (validated ? "success" : "failure") : ""}
      />
      <button onClick={handleButtonClick}>검증하기</button>
    </div>
  );
};

export default ValidationSample;
```

# 5.1.2 App 컴포넌트에서 예제 컴포넌트 렌더링

> App.js

```jsx
import ValidationSample from "./ValidationSample";

const App = () => {
  return <ValidationSample />;
};

export default App;
```

![05_001](05_001.png)

# 5.1.3 DOM을 꼭 사용해야 하는 상황

state만으로 해결할 수 없는 기능

- 특정 input에 포커스 주기
- 스크롤 박스 조작하기
- Canvas 요소에 그림 그리기 등

이때는 어쩔 수 없이 DOM에 직접적으로 접근해야 하는데, 이를 위해 바로 ref를 사용.

# 5.2 ref 사용

## 5.2.2 React.useRef()를 통한 설정

리액트에 내장되어 있는 React.useRef() 함수를 사용

> useRef() 사용 예시

```jsx
import React from "react";

const RefSample = () => {
  const input = React.useRef();

  const handleFocus = () => {
    input.current.focus();
  };

  return (
    <div>
      <input ref={input} />
    </div>
  );
};

export default RefSample;
```

컴포넌트 내부에서 변수로 React.useRef()를 담아주고, 해당 변수를 ref를 달고자 하는 요소에 ref props로 넣어 주면 ref 설정 완료.  
설정한 뒤 나중에 ref를 설정해 준 DOM에 접근하려면 input.current를 조회하면 됨.

# 5.2.3 적용

# 5.2.3.2 버튼 onClick 이벤트 코드 수정

```jsx
const handleButtonClick = () => {
  setClicked(true);
  setValidated(password === `0000`);
  {
    /* `ref 참조변수.current`는 일반 JS의 HTMLElement 객체와 동일 */
  }
  {
    /* = document.querySelector("...") */
  }
  input.current.focus();
};
```

# 5.3 컴포넌트에 ref 달기

리액트에서는 컴포넌트에도 ref를 달 수 있음. 주로 컴포넌트 내부에 있는 DOM을 컴포넌트 외부에서 사용할 때 씀.

## 5.3.1 사용법

```jsx
<MyComponent ref={참조변수이름명시}>
```

## 5.3.2 컴포넌트 초기 설정

### 5.3.2.1 컴포넌트 파일 생성

```jsx
import React from "react";

const ScrollBox = React.forwardRef((props, ref) => {
  const style = {
    border: "1px solid black",
    height: "300px",
    width: "300px",
    overflow: "auto",
    position: "relative",
  };

  const innerStyle = {
    width: "100%",
    height: "650px",
    background: "linear-gradient(white, black)",
  };

  return (
    <div style={style} ref={ref}>
      <div style={innerStyle} />
    </div>
  );
});

export default ScrollBox;
```

#### 5.3.2.2 App 컴포넌트에서 스크롤 박스 컴포넌트 렌더링

```jsx
import ScrollBox from "./ScrollBox";
const App = () => {
  return (
    <div>
      <ScrollBox />
    </div>
  );
};

export default App;
```

![05_002](05_002.png)

## 5.3.4 컴포넌트에 ref 달고 내부 메서드 사용

```jsx
import React from "react";
import ScrollBox from "./ScrollBox";

const App = () => {
  const scrollBoxRef = React.useRef();

  return (
    <div>
      <ScrollBox ref={scrollBoxRef} />
      <button
        onClick={() => {
          const { scrollHeight, clientHeight } = scrollBoxRef.current; // 부모 div;
          scrollBoxRef.current.scrollTop = scrollHeight - clientHeight; // 스크롤바 맨 끝 이동;
        }}
      >
        맨 밑으로
      </button>
    </div>
  );
};

export default App;
```

![05_003](05_003.png)

# 5.4 정리

컴포넌트 내부에서 DOM에 직접 접근해야 할 때는 ref를 사용. 먼저 ref를 사용하지 않고도 원하는 기능을 구현할 수 있는지 반드시 고려한 후 사용.  
서로 다른 컴포넌트끼리 데이터를 교류할 때 ref를 사용한다면 이는 잘못 사용된 것. (컴포넌트에 ref를 달고 그 ref를 다른 컴포넌트로 전달하고 ... 다른 컴포넌트에서 ref로 전달받은 컴포넌트의 메서드를 실행하고... 이 방법은 어긋난 설계)  
컴포넌트끼리 데이터를 교류할 때는 언제나 데이터를 부모 <-> 자식 흐름으로 교류해야 함.  
후에 리덕스를 사용하여 효율적으로 교류하는 방법을 학습할 것.
