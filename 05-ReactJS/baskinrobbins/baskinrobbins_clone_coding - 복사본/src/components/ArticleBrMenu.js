import React from "react";
import styled from "styled-components";
import background from "../assets/img/bg_menu.jpg";
import menulist from "../assets/img/img_menu_list_220429.png";

const Brmenu = styled.section`
  position: relative;
  height: 1157px;

  h3 {
    text-align: center;
    padding-top: 78px;
  }

  div {
    position: relative;
    margin: 0 auto;
    height: 1066px;
    margin-top: 50px;

    div {
      position: absolute;

      a {
        display: block;
        background-color: #000;
        opacity: 0;

        .sr_only {
          overflow: hidden;
          position: absolute;
          width: 1px;
          height: 1px;
          margin: -1px;
          padding: 0;
          border: 0;
          clip: rect(0, 0, 0, 0);
        }
      }
    }

    .icecream {
      top: 50px;
      left: 319px;

      a {
        width: 276px;
        height: 472px;
      }
    }

    .icecreamcake {
      top: 50px;
      left: 752px;

      a {
        width: 276px;
        height: 472px;
      }
    }

    .baverage {
      top: 390px;
      left: 117px;

      a {
        width: 230px;
        height: 366px;
      }
    }

    .coffee {
      top: 390px;
      left: 385px;

      a {
        width: 329px;
        height: 292px;
      }
    }

    .dessert {
      top: 721px;
      left: 385px;

      a {
        width: 329px;
        height: 177px;
      }
    }

    .gift {
      top: 560px;
      left: 752px;

      a {
        width: 276px;
        height: 183px;
      }
    }
  }
`;

const ArticleBrMenu = () => {
  return (
    <Brmenu style={{ background: `url(${background}) 50% 0 no-repeat` }}>
      <h3>
        <img src={require("../assets/img/h_menu.png")} alt="BR MENU" />
      </h3>
      <div style={{ background: `url(${menulist}) 50% 0 no-repeat` }}>
        <div className="icecream">
          <a href="http://www.baskinrobbins.co.kr/menu/list.php?top=A">
            <div className="sr_only">
              <h4>ICECREAM</h4>
              <p>프리미엄 아이스크림의 기준, 배스킨라빈스</p>
            </div>
          </a>
        </div>

        <div className="icecreamcake">
          <a href="http://www.baskinrobbins.co.kr/menu/list.php?top=B">
            <div className="sr_only">
              <h4>ICECREAM CAKE</h4>
              <p>
                아이와 어른이 좋아하는 아이스크림을 하나의 케이크에서 모두
                즐기세요!
              </p>
            </div>
          </a>
        </div>

        <div className="baverage">
          <a href="http://www.baskinrobbins.co.kr/menu/list.php?top=C">
            <div className="sr_only">
              <h4>BAVERAGE</h4>
              <p>아이스크림으로 즐기는 배스킨라빈스만의 음료!</p>
            </div>
          </a>
        </div>

        <div className="coffee">
          <a href="http://www.baskinrobbins.co.kr/menu/list.php?top=D">
            <div className="sr_only">
              <h4>COFFEE</h4>
              <p>배스킨라빈스만의 부드러운 촉감과 달콤한 풍키</p>
            </div>
          </a>
        </div>

        <div className="dessert">
          <a href="http://www.baskinrobbins.co.kr/menu/list.php?top=E">
            <div className="sr_only">
              <h4>DESSERT</h4>
              <p>아이스크림을 더욱 재미있게! 간편하게 즐기는 방법!</p>
            </div>
          </a>
        </div>

        <div className="gift">
          <a href="http://www.baskinrobbins.co.kr/store/catering2.php">
            <div className="sr_only">
              <h4>GIFT</h4>
            </div>
          </a>
        </div>
      </div>
    </Brmenu>
  );
};

export default ArticleBrMenu;
