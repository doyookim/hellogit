import React from "react";
import styled from "styled-components";
import axios from "axios";
import SnsBoxImg from "./SnsBoxImg";

const SnsBox = styled.section`
  position: relative;
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  border: 0px;

  .title {
    text-align: center;
    padding-bottom: 26px;
  }

  .sns {
    width: 400px;
    margin: 0 auto;
    padding-bottom: 35px;

    ul li {
      float: left;
      padding: 0 9px;
    }

    ul:after {
      display: table;
      clear: both;
      content: "";
    }
  }

  h4 {
    text-align: center;
    padding: 26px 0 0;
    margin-bottom: -14px;
  }

  h4.title:before {
    position: absolute;
    top: 177px;
    left: 0;
    display: inline-block;
    text-align: center;
    content: "";
    width: 100%;
    height: 1px;
    background: #dcd7d1;
  }

  h4.title a {
    position: absolute;
    margin-left: -149px;
    display: inline-block;
    width: 298px;
    height: 13px;
    text-align: center;
    z-index: 9;
  }
`;

const AttracttContainer = styled.div`
  margin-top: 20px;
  padding-top: 30px;
  position: relative;
`;

const ArticleSnsBox = () => {
  // 화면에 표시할 상태값(ajax 연동 결과로 받아올 json) -> 초기값을 빈 배열로 정의
  const [snsImage, setSnsImage] = React.useState([]);
  /** 페이지가 처음 열렸을 때 실행할 hook */
  React.useEffect(() => {
    //Ajax 로딩 시작을 알림
    (async () => {
      // ajax 처리 결과가 저장될 변수
      let json = null;

      try {
        const response = await axios.get("http://localhost:3001/snsimagedata");
        json = response.data;
      } catch (e) {
        console.error(e);
        alert("Ajax 연동 실패");
      }

      // ajax 연동결과가 있다면 그 결과를 상태값에 적용함
      if (json != null) {
        setSnsImage(json);
      }
    })();
  }, []);

  return (
    <SnsBox>
      <h3 className="title">
        <img src={require("../assets/img/h_sns.png")} alt="SNS" />
      </h3>
      <nav className="sns">
        <ul>
          <li>
            <a href="https://www.facebook.com/baskinrobbins.kr/">
              <img
                src={require("../assets/img/sns_facebook.png")}
                alt="FACEBOOK"
              />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/BaskinrobbinsKR">
              <img
                src={require("../assets/img/sns_twitter.png")}
                alt="TWITTER"
              />
            </a>
          </li>
          <li>
            <a href="http://blog.naver.com/brgirl31">
              <img src={require("../assets/img/sns_blog.png")} alt="BLOG" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/baskinrobbinskorea/">
              <img
                src={require("../assets/img/sns_instagram.png")}
                alt="INSTAGRAM"
              />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/user/baskinrobbinskorea">
              <img
                src={require("../assets/img/sns_youtube.png")}
                alt="YOUTUBE"
              />
            </a>
          </li>
        </ul>
      </nav>
      <h4 className="title">
        <a href="https://www.instagram.com/baskinrobbinskorea/">
          <img
            src={require("../assets/img/tit_sns.png")}
            alt="BASKINROBBINS INSTAGRAM"
          />
        </a>
      </h4>
      <AttracttContainer>
        {snsImage.map((v, i) => (
          <SnsBoxImg key={i} item={v} />
        ))}
      </AttracttContainer>
    </SnsBox>
  );
};

export default ArticleSnsBox;
