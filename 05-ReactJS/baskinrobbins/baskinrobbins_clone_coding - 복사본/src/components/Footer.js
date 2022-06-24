import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
import off from "../assets/img/family_size_off.png";
//import on from "../assets/img/family_size_on.png";

const FooterWrap = styled.footer`
  min-width: 1200px;
  padding-bottom: 60px;
  border-top: 1px solid #feaf2b;

  .inner_footer nav {
    width: 1200px;
    margin: 0 auto;
    padding: 0 80px;
    height: 77px;
    line-height: 77px;
    box-sizing: border-box;

    ul li {
      float: left;
      width: 12%;
      text-align: center;

      a {
        color: #726454;
        font-size: 14px;
      }
    }

    ul > li:nth-child(5) {
      width: 15%;

      a {
        color: #ff7c98;
        font-weight: bold;
      }
    }

    ul > li:nth-child(6) {
      width: 20%;
    }

    ul > li:nth-child(7) {
      width: 17%;
    }

    ul:after {
      display: table;
      clear: both;
      content: "";
    }
  }
`;

const BrandFamily = styled.div`
  background-color: #f9f8f7;

  .inner {
    width: 1200px;
    margin: 0 auto;
    position: relative;
    height: 75px;
  }

  .brand ul {
    padding: 22px 0 0 222px;

    li {
      float: left;
    }

    &:after{
    display: table;
    clear: both;
    content: "";
    }
  }



  .brand {
    .li_1 
    width: 111px;
  
    .li_2 {
      width: 118px;
    }

    .li_3 {
          width: 182px;
    }

    .li_4 {
      padding-right: 9px;
    }
    .li_5 {
      padding-right: 9px;
     
      img{
        width: 31px;
      }
    }
  }

    .familysite {
    position: absolute;
    top: 21px;
    right: 196px;
    width: 150px;
    background-color: #fff;


    .btn_family {
      width: 100%;
      height: 32px;
      padding-left: 11px;
      border-radius: 5px;
      border: 1px solid #d1cecc;
      color: #b1ab9f;
      font-size: 11px;
      text-align: left;
      background-color:transparent;
   

      &:after {
        border:0;
      }
    }

    .drop_menu{
      width:100%;

      .dropdown-item-edit {
        display: block;
        height: 25px;
        padding-left: 15px;
        color: #726454;
        line-height: 25px;
        font-size: 13px;

        &:hover { 
          background: #efefef;
        }
      }

    }
  }


`;

const Info = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-top: 48px;
  color: #635b56;
  font-size: 11px;
  text-align: center;

  .logo {
    padding-bottom: 35px;
  }

  div p {
    display: inline-block;
    padding-bottom: 3px;
    padding-right: 15px;
  }

  div address {
    display: inline-block;
    padding-bottom: 3px;
  }

  .copyright {
    padding-top: 12px;
    color: #b1adab;
    font-size: 11px;
  }
`;

const Footer = () => {
  return (
    <FooterWrap>
      <div className="inner_footer">
        <nav>
          <ul>
            <li>
              <a href="http://www.baskinrobbins.co.kr/about/br_system.php">
                점포개설문의
              </a>
            </li>
            <li>
              <a href="http://www.baskinrobbins.co.kr/about/jobs.php">
                채용문의
              </a>
            </li>
            <li>
              <a href="https://www.spc.co.kr/share/right-mng/spc-operation/">
                윤리신고센터
              </a>
            </li>
            <li>
              <a href="https://www.happypointcard.com/page/customer/term.spc">
                이용약관
              </a>
            </li>
            <li>
              <a href="http://www.baskinrobbins.co.kr/customer/policy.php">
                개인정보처리방침
              </a>
            </li>
            <li>
              <a href="http://www.baskinrobbins.co.kr/customer/policy_cctv.php">
                영상정보처리기기운영관리방침
              </a>
            </li>
            <li>
              <a href="http://http://happy.spc.co.kr/indexframe.jsp">
                거래희망회사 사전등록
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <BrandFamily>
        <div className="inner">
          <nav className="brand">
            <ul>
              <li className="li_1">
                <a href="http://www.happypointcard.com">
                  <img
                    src={require("../assets/img/btn_happypoint.png")}
                    alt="HAPPY POINT"
                  />
                </a>
              </li>
              <li className="li_2">
                <a href="http://m.celectory.com">
                  <img
                    src={require("../assets/img/btn_happymarket.png")}
                    alt="HAPPY MARKET"
                  />
                </a>
              </li>
              <li className="li_3">
                <a href="http://www.spc.co.kr/contributionAll">
                  <img
                    src={require("../assets/img/btn_spc_story.png")}
                    alt="SPC그룹 사회공헌활동 SPC 행복한 이야기"
                  />
                </a>
              </li>
              <li className="li_4">
                <a href="https://sealinfo.verisign.com/splash?form_file=fdf/splash.fdf&dn=WWW.BASKINROBBINS.CO.KR&lang=ko">
                  <img
                    src={require("../assets/img/btn_norton.gif")}
                    alt="Norton SECURED"
                  />
                </a>
              </li>
              <li className="li_5">
                <a href="http://www.kca.go.kr/ccm/">
                  <img
                    src={require("../assets/img/btn_ccm_2.png")}
                    alt="소비자중심경영 인증제도"
                  />
                </a>
              </li>
              <li>
                <a href="http://knqa.ksa.or.kr/knqa/2276/subview.do">
                  <img
                    src={require("../assets/img/btn_ksa.png")}
                    alt="국가품질상 - KSA 한국표준협회"
                  />
                </a>
              </li>
            </ul>
          </nav>

          <Dropdown className="familysite" drop="up">
            <Dropdown.Toggle
              className="btn_family"
              style={{ background: `transparent url(${off}) no-repeat 100% 0` }}
            >
              FAMILY SITE
            </Dropdown.Toggle>
            <Dropdown.Menu className="drop_menu">
              <Dropdown.Item href="#" className="dropdown-item-edit">
                배스킨 스쿨
              </Dropdown.Item>
              <Dropdown.Item href="#" className="dropdown-item-edit">
                SPC그룹사이트
              </Dropdown.Item>
              <Dropdown.Item href="#" className="dropdown-item-edit">
                SPC MAGAZINE
              </Dropdown.Item>
              <Dropdown.Item href="#" className="dropdown-item-edit">
                BR코리아
              </Dropdown.Item>
              <Dropdown.Item href="#" className="dropdown-item-edit">
                해피포인트카드
              </Dropdown.Item>
              <Dropdown.Item href="#" className="dropdown-item-edit">
                파스쿠찌
              </Dropdown.Item>
              <Dropdown.Item href="#" className="dropdown-item-edit">
                삼립
              </Dropdown.Item>
              <Dropdown.Item href="#" className="dropdown-item-edit">
                파리바게트
              </Dropdown.Item>
              <Dropdown.Item href="#" className="dropdown-item-edit">
                던킨도너츠
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </BrandFamily>
      <Info>
        <h1 className="logo">
          <img
            src={require("../assets/img/footer_logo.png")}
            alt="baskin robbins"
          />
        </h1>
        <div>
          <p>사업자 등록번호 : 303-81-09535</p>
          <p>비알코리아(주) 대표이사 도세호</p>
          <address>
            서울특별시 서초구 남부순환로 2620(양재동 11-149번지)
          </address>
        </div>
        <div>
          <p>TEL : 080-555-3131</p>
          <p>개인정보관리책임자 : 김경우</p>
        </div>
        <p className="copyright">
          Copyright ⓒ 2016 BRKOREA Company. All Rights Reserved.
        </p>
      </Info>
    </FooterWrap>
  );
};

export default Footer;
