import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import MenuImg from "../assets/img/gnb_menu.png";
import SubMenu from "./SubMenu";

const MenuWrap = styled.div`
  height: 46px;

  .inner {
    width: 1200px;
    margin: 0 auto;
  }

  .member {
    float: left;

    ul:after {
      display: table;
      clear: both;
      content: "";
    }

    li {
      float: left;
    }

    .login a {
      float: left;
      display: block;
      padding: 0 23px;
      padding-left: 0;

      span {
        width: 35px;
        display: block;
        height: 46px;
        text-indent: -9999em;
      }
    }

    .join span {
      width: 27px;
      display: block;
      height: 46px;
      text-indent: -9999em;
    }
  }

  .gnb {
    float: right;

    ul li {
      float: left;
    }
  }

  .gnbMain a {
    display: block;
    padding: 0 50px;
  }

  .gnbFlavor .gnbMain a {
    padding-left: 0;
  }

  .gnbFlavor .gnbMain span {
    width: 164px;
  }

  .gnbMain span {
    display: block;
    height: 46px;
    text-indent: -9999em;
    line-height: 46px;
  }

  .gnb_sub {
    overflow: hidden;
    top: 100%;
    left: 0;
    height: 0;
    z-index: 1000;
    font-size: 14px;
    font-weight: 300;
    text-align: center;
  }
`;

const MenuArea = () => {
  const [isMouse, toggleMouse] = React.useState(false);
  const toggleMouseMenu = () => {
    toggleMouse(!isMouse);
  };
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      display: "block",
    },
    exit: {
      opacity: 0,

      display: "none",
    },
  };
  return (
    <MenuWrap className="menu-area">
      <div className="inner">
        <nav className="member">
          <ul>
            <li className="login">
              <a href="http://www.baskinrobbins.co.kr/sso/login.php?returnURL=%2F">
                <span
                  style={{
                    background: `url(${MenuImg}) no-repeat`,
                    backgroundPosition: ` 0px -1px`,
                  }}
                >
                  LOGIN
                </span>
              </a>
            </li>
            <li className="join">
              <a href="https://www.happypointcard.com/member/term.spc">
                <span
                  style={{
                    background: `url(${MenuImg}) no-repeat`,
                    backgroundPosition: ` -97px -1px`,
                  }}
                >
                  JOIN
                </span>
              </a>
            </li>
          </ul>
        </nav>
        <motion.div
          className="menu-item"
          onMouseEnter={toggleMouseMenu}
          onMouseLeave={toggleMouseMenu}
        >
          <nav className="gnb">
            <div className="gngWrap">
              <ul>
                <li className="gnbFlavor">
                  <div className="gnbMain">
                    <a href="http://www.baskinrobbins.co.kr/menu/fom.php">
                      <span
                        style={{
                          background: `url(${MenuImg}) no-repeat`,
                          backgroundPosition: `-133px -3px`,
                        }}
                      >
                        FLAVOR OF THE MONTH
                      </span>
                    </a>
                  </div>
                </li>
                <li className="gnbMenu">
                  <div className="gnbMain">
                    <a href="http://www.baskinrobbins.co.kr/menu/main.php">
                      <span
                        style={{
                          width: `42px`,
                          background: `url(${MenuImg}) no-repeat`,
                          backgroundPosition: `-415px -3px`,
                        }}
                      >
                        MENU
                      </span>
                    </a>
                  </div>
                </li>
                <li className="gnbNutrition">
                  <div className="gnbMain">
                    <a href="http://www.baskinrobbins.co.kr/menu/nutrition_new.php">
                      <span
                        style={{
                          width: `105px`,
                          background: `url(${MenuImg}) no-repeat`,
                          backgroundPosition: `-545px -3px`,
                        }}
                      >
                        영양성분 및 알레르기
                      </span>
                    </a>
                  </div>
                </li>
                <li className="gnbEvent">
                  <div className="gnbMain">
                    <a href="http://www.baskinrobbins.co.kr/event/list.php">
                      <span
                        style={{
                          width: `42px`,
                          background: `url(${MenuImg}) no-repeat`,
                          backgroundPosition: `-737px -3px`,
                        }}
                      >
                        EVENT
                      </span>
                    </a>
                  </div>
                </li>
                <li className="gnbStore">
                  <div className="gnbMain">
                    <a href="http://www.baskinrobbins.co.kr/store/map.php">
                      <span
                        style={{
                          width: `49px`,
                          background: `url(${MenuImg}) no-repeat`,
                          backgroundPosition: `-897px -3px`,
                        }}
                      >
                        STORE
                      </span>
                    </a>
                  </div>
                </li>
                <li className="gnbAbout">
                  <div className="gnbMain">
                    <a href="http://www.baskinrobbins.co.kr/about/notice_list.php">
                      <span
                        style={{
                          width: `49px`,
                          background: `url(${MenuImg}) no-repeat`,
                          backgroundPosition: `-1057px -3px`,
                        }}
                      >
                        ABOUT
                      </span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <motion.div
            className="sub-menu"
            initial="exit"
            animate={isMouse ? "enter" : "exit"}
            variants={subMenuAnimate}
          >
            <div className="gnb_sub">
              <SubMenu />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </MenuWrap>
  );
};
export default MenuArea;
