import React from "react";
import styled from "styled-components";
import "../assets/scss/SubMenu.css";

const MenuList = styled.div`
  position: absolute;
  top: 165px;
  left: 0;
  z-index: 999;
  width: 100%;
  border-bottom: 1px solid #693337;
  background: #fff;
  margin-right: 32px;
`;

const SubMenu = () => {
  return (
    <MenuList>
      <div>
        <ul className="gnbUl">
          <li>
            <div className="gnbBg">
              <div>
                <img
                  src={require("../assets/img/img_happypoint_app.jpg")}
                  alt=""
                />
              </div>
            </div>
          </li>
          <li>
            <div className="fgnbSub">
              <a href="http://www.baskinrobbins.co.kr/menu/fom.php">
                <img
                  src={require("../assets/img/img_monthly_fom_220429.png")}
                  alt=""
                />
              </a>
            </div>
          </li>
        </ul>
        <ul className="MenuWrap">
          <li>
            <ul className="Menusub">
              <li className="gnbDepth2">
                <a href="http://www.baskinrobbins.co.kr/menu/list.php?top=A">
                  <span>아이스크림</span>
                </a>
              </li>
              <li className="gnbDepth2">
                <a href="http://www.baskinrobbins.co.kr/menu/list.php?top=B">
                  <span>아이스크림케이크</span>
                </a>
              </li>
              <li className="gnbDepth2">
                <a href="http://www.baskinrobbins.co.kr/menu/list.php?top=C">
                  <span>음료</span>
                </a>
              </li>
              <li className="gnbDepth2">
                <a href="http://www.baskinrobbins.co.kr/menu/list.php?top=D">
                  <span>커피</span>
                </a>
              </li>
              <li className="gnbDepth2">
                <a href="http://www.baskinrobbins.co.kr/menu/list.php?top=E">
                  <span>디저트</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <ul className="NutritionSub">
              <li className="gnb_depth2">
                <a href="http://www.baskinrobbins.co.kr/menu/nutrition_new.php?top=A">
                  <span>아이스크림</span>
                </a>
              </li>
              <li className="gnb_depth2">
                <a href="http://www.baskinrobbins.co.kr/menu/nutrition_new.php?top=C">
                  <span>음료</span>
                </a>
              </li>
              <li className="gnb_depth2">
                <a href="http://www.baskinrobbins.co.kr/menu/nutrition_new.php?top=D">
                  <span>커피</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <ul className="Eventsub">
              <li className="gnb_depth2">
                <a href="http://www.baskinrobbins.co.kr/event/list.php">
                  <span>진행중이벤트</span>
                </a>
              </li>
              <li className="gnb_depth2">
                <a href="http://www.baskinrobbins.co.kr/event/winner.php">
                  <span>당첨자발표</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <ul className="Storesub">
              <li className="gnb_depth2">
                <a href="http://www.baskinrobbins.co.kr/store/map.php">
                  <span>매장찾기</span>
                </a>
              </li>
              <li className="gnb_depth2">
                <a href="http://www.baskinrobbins.co.kr/customer/ccm.php">
                  <span>고객센터</span>
                </a>
              </li>
              <li className="gnb_depth2">
                <a href="http://www.baskinrobbins.co.kr/store/catering2.php">
                  <span>단체주문</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <ul className="Aboutsub">
              <li className="gnb_depth2">
                <a href="http://www.baskinrobbins.co.kr/about/notice_list.php">
                  <span>공지사항</span>
                </a>
              </li>
              <li className="gnb_depth2">
                <a href="http://www.baskinrobbins.co.kr/about/press_list.php">
                  <span>보도자료</span>
                </a>
              </li>
              <li className="gnb_depth2">
                <a href="http://www.baskinrobbins.co.kr/about/jobs.php">
                  <span>채용정보</span>
                </a>
              </li>
              <li className="gnb_depth2">
                <a href="http://www.baskinrobbins.co.kr/about/br_system.php">
                  <span>점포개설문의</span>
                </a>
              </li>
              <li className="gnb_depth2">
                <a href="http://www.baskinrobbins.co.kr/about/contact_us.php">
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </MenuList>
  );
};

export default SubMenu;
