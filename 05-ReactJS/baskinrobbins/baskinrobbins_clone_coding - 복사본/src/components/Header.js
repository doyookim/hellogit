import React from "react";
import styled from "styled-components";
import bgheader from "../assets/img/bg_header.gif";
import logo from "../assets/img/logo_baskinrobbins.png";
import searchbtn from "../assets/img/icon_search.png";
import SearchWrap from "./SearchWrap";
import MenuArea from "./MenuArea";

const HeaderWrap = styled.header`
  min-width: 1200px;
  border-top: 3px solid #ff7c98;
  border-bottom: 1px solid #3f291a;
  background: url(../assets/img/bg_header.gif) 50% 0 repeat-x;

  .top_area {
    border-bottom: 1px solid #e2d9d6;

    .inner {
      position: relative;
      width: 1200px;
      height: 114px;
      padding-top: 21px;
      margin: 0 auto;
    }
  }

  .logo {
    width: 92px;
    height: 92px;
    margin: 0 auto;

    a {
      display: block;
      width: 100%;
      height: 100%;
      text-indent: -9999em;
    }
  }

  .sns {
    position: absolute;
    top: 50px;
    left: 0;

    ul:after {
      display: table;
      clear: both;
      content: "";
    }

    li {
      float: left;
      padding-right: 10px;
    }
  }

  .etc {
    position: absolute;
    top: 39px;
    right: 0;
    height: 54px;
    line-height: 54px;

    ul:after {
      display: table;
      clear: both;
      content: "";
    }

    li {
      float: left;
      padding-left: 20px;
      font-size: 11px;
    }

    .search {
      padding-left: 26px;

      a {
        color: #4a3d39;
        display: inline-block;
        width: 54px;
        height: 54px;
        text-indent: -9999em;
      }
    }
  }
`;

const Header = () => {
  const HandyTooltip = () => {
    return <SearchWrap />;
  };

  const [active, setActive] = React.useState(false);

  const toggleTooltip = () => {
    setActive(!active);
  };
  return (
    <HeaderWrap style={{ background: `url(${bgheader}) 50% 0 repeat-x` }}>
      <div className="inner_header">
        <div className="top_area">
          <div className="inner">
            <h1 className="logo">
              <a
                href="/"
                style={{ background: `url(${logo}) no-repeat center` }}
              >
                baskin robbins
              </a>
            </h1>
            {/* nav-sns */}
            <nav className="sns">
              <ul>
                <li>
                  <a href="https://www.facebook.com/baskinrobbins.kr/">
                    <img
                      src={require("../assets/img/icon_facebook.png")}
                      alt="FACEBOOK"
                    />
                  </a>
                </li>

                <li>
                  <a href="https://twitter.com/BaskinrobbinsKR">
                    <img
                      src={require("../assets/img/icon_twitter.png")}
                      alt="TWITTER"
                    />
                  </a>
                </li>
                <li>
                  <a href="http://blog.naver.com/brgirl31">
                    <img
                      src={require("../assets/img/icon_blog.png")}
                      alt="BLOG"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/baskinrobbinskorea/">
                    <img
                      src={require("../assets/img/icon_instgram.png")}
                      alt="INSTAGRAM"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/user/baskinrobbinskorea">
                    <img
                      src={require("../assets/img/icon_youtube.png")}
                      alt="YOUTUBE"
                    />
                  </a>
                </li>
              </ul>
            </nav>
            {/* nav-sns */}
            {/* nav-etc */}
            <nav className="etc">
              <ul>
                <li>
                  <a href="http://www.baskinrobbins.co.kr/customer/ccm.php">
                    고객센터
                  </a>
                </li>
                <li>
                  <a href="http://www.baskinrobbins.co.kr/about/contact_us.php">
                    CONTACT US
                  </a>
                </li>
                <li className="search">
                  <a
                    onClick={toggleTooltip}
                    href="#modal_search"
                    style={{ background: `url(${searchbtn}) no-repeat` }}
                  >
                    search
                  </a>
                </li>
              </ul>
            </nav>
            {/* nav-etc */}
          </div>
        </div>
        <MenuArea />
      </div>
      {active && <HandyTooltip />}
    </HeaderWrap>
  );
};

export default Header;
