import React from "react";
import "./ValidationSample.css";

const ValidationSample = () => {
  const [password, setPassword] = React.useState("");
  const [clicked, setClicked] = React.useState(false);
  const [validated, setValidated] = React.useState(false);

  const input = React.useRef();

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

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

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        className={clicked ? (validated ? "success" : "failure") : ""}
        ref={input}
      />
      <button onClick={handleButtonClick}>검증하기</button>
    </div>
  );
};

export default ValidationSample;
