import React from "react";
import MyPropsTypesSub from "../components/MyPropsTypesSub";
import Meta from "../components/Meta";

const MyPropTypes = () => {
  return (
    <div>
      {/* Route처리를 적용받는 페이지에서 이 컴포넌트를 중복 사용시 App.js에서의 설정을 덮어쓰게 된다. */}
      <Meta
        title="MyPropTypes.js"
        description="여기는 MyPropTypes.js 파일입니다."
        url={window.location.href}
      />

      <h2>MyPropTypes</h2>

      {/* 문자열이 아닌 형식은 {}로 감싸야 한다. */}
      <MyPropsTypesSub name="민호" age={20} hobby="사진찍기" />
      <MyPropsTypesSub name="수영" age="스물한살" hobby="영화보기" />
      <MyPropsTypesSub name="철민" age={22} />
    </div>
  );
};

export default MyPropTypes;
