import React from "react";

const App = () => {
  // 결과를 출력할 <div>에 대한 참조변수
  const console = React.useRef();

  // 상태값
  const [rowNum, setRowNum] = React.useState(0);

  // 사용자의 입력값을 상태값에 적용하기 위한 이벤트 리스너
  const onRowNumChange = (e) => {
    setRowNum(e.currentTarget.value);
  };

  // rowNum 상태값이 변경된 경우 실행됨 --> 화면 내용 갱신
  React.useEffect(() => {
    let html = "";
    for (let i = 0; i < rowNum; i++) {
      let str = "";

      for (let j = 0; j < i + 1; j++) {
        str += "*";
      }
      html += str + "<br />";
    }
    console.current.innerHTML = html;
  }, [rowNum]);
  return (
    <div>
      <h1>Exam07</h1>
      <p>useState, useEffect, useRef를 사용한 별찍기 구현</p>
      <hr />

      <div>
        <label htmlfor="rowNum">rowNum: </label>
        <input
          id="rowNum"
          type="text"
          value={rowNum}
          onChange={onRowNumChange}
        />
      </div>

      <hr />

      <div style={{ fontSize: "16px" }} ref={console}></div>
    </div>
  );
};

export default App;
