import React from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import nextarrow from "../assets/img/btn_banner_next.png";
import prevarrow from "../assets/img/btn_banner_prev.png";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "absolute",
        background: `url(${nextarrow}) no-repeat`,
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "absolute",
        background: `url(${prevarrow}) no-repeat`,
      }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  autoplaySpeed: 1500,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const BannerWrap = styled.div`
  position: relative;
  min-width: 1200px;
  margin: 0 auto;

  .banner_ul {
    list-style: none;
    &:after {
      display: table;
      clear: both;
      content: "";
    }
    li {
      width: 1263.33px;
      left: 0px;

      img {
        width: 100%;
      }
    }
  }

  .test-css {
    position: absolute;
    top: 510px;
    width: 100%;
    list-style: none;
    text-align: center;
    padding: 0;
  }

  .test-css li {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 30px;
    /*margin: 1px;*/
    padding: 0;
    cursor: pointer;
  }

  .test-css li button {
    font-size: 0;
    line-height: 0;
    display: block;
    width: 30px;
    height: 30px;
    padding: 5px;
    cursor: pointer;
    color: transparent;
    border: 0;
    outline: 0;
    background: 0 0;
  }

  .test-css li button:before {
    font-size: 4rem;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    content: "•";
    text-align: center;
    opacity: 0.75;
    color: #ffffff;
  }

  .test-css li.slick-active button:before {
    opacity: 0.75;
    color: #000;
  }

  .slick-next {
    right: -20px;
    width: 150px;
    height: 150px;

    &:before {
      font-size: 0px;
    }
  }

  .slick-prev {
    left: 15px;
    width: 150px;
    height: 150px;
    z-index: 99999;

    &:before {
      font-size: 0px;
    }
  }
`;

const ArticleBannerSlide = () => {
  return (
    <BannerWrap>
      <Slider className="banner_ul" {...settings} dotsClass="test-css">
        <li>
          <a
            href="http://www.baskinrobbins.co.kr/menu/fom.php#area4"
            style={{ backgroundColor: `#FDD827` }}
          >
            <img src={require("../assets/img/1714824551.jpg")} alt="" />
          </a>
        </li>
        <li>
          <a
            href="http://www.baskinrobbins.co.kr/event/view.php?flag=&seq=10704"
            style={{ backgroundColor: `#DBEFFB` }}
          >
            <img src={require("../assets/img/1649133684.png")} alt="" />
          </a>
        </li>
        <li>
          <a
            href="http://www.baskinrobbins.co.kr/event/view.php?flag=&seq=10684"
            style={{ backgroundColor: `#EFB5B1` }}
          >
            <img src={require("../assets/img/1714816944.png")} alt="" />
          </a>
        </li>
        <li>
          <a
            href="http://www.baskinrobbins.co.kr/event/view.php?flag=&seq=10664"
            style={{ backgroundColor: `#5EB640` }}
          >
            <img src={require("../assets/img/1714808856.png")} alt="" />
          </a>
        </li>
        <li>
          <a
            href="http://www.baskinrobbins.co.kr/event/view.php?flag=&seq=10344"
            style={{ backgroundColor: `#F6F8F8` }}
          >
            <img src={require("../assets/img/1667440402.png")} alt="" />
          </a>
        </li>
        <li>
          <a
            href="http://www.baskinrobbins.co.kr/event/view.php?flag=&seq=10104"
            style={{ backgroundColor: `#ffe103` }}
          >
            <img src={require("../assets/img/1667383155.png")} alt="" />
          </a>
        </li>
        <li>
          <a
            href="http://www.baskinrobbins.co.kr/event/view.php?flag=&seq=8624"
            style={{ backgroundColor: `#fb637e` }}
          >
            <img src={require("../assets/img/1643869369.png")} alt="" />
          </a>
        </li>
        <li>
          <a
            href="http://www.baskinrobbins.co.kr/event/view.php?flag=&seq=10744"
            style={{ backgroundColor: `#FFFFFF` }}
          >
            <img src={require("../assets/img/1664934495.png")} alt="" />
          </a>
        </li>
        <li>
          <a
            href="http://www.baskinrobbins.co.kr/event/view.php?flag=&seq=10724"
            style={{ backgroundColor: `#060B33` }}
          >
            <img src={require("../assets/img/1649140992.png")} alt="" />
          </a>
        </li>
        <li>
          <a
            href="http://www.baskinrobbins.co.kr/event/view.php?flag=&seq=10564"
            style={{ backgroundColor: `#E5E5E5` }}
          >
            <img src={require("../assets/img/1670146295.png")} alt="" />
          </a>
        </li>
        <li>
          <a
            href="http://www.baskinrobbins.co.kr/event/view.php?flag=&seq=10544"
            style={{ backgroundColor: `#F16C83` }}
          >
            <img src={require("../assets/img/1667539209.png")} alt="" />
          </a>
        </li>
      </Slider>
    </BannerWrap>
  );
};

export default ArticleBannerSlide;
