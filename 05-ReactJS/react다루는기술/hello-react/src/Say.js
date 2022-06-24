import React from "react";
import { useState } from "react";

const Say = () => {
  // message:변수, setMessage:변수에 대한 setter, (''): 변수 초기값, 배열을 리턴
  const [message, setMessage] = useState("");
  const onClickEvent = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히 가세요!");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEvent}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      {/* setter에 의해 값이 변경되면 실시간으로 화면이 갱신됨. */}
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>
    </div>
  );
};

export default Say;
