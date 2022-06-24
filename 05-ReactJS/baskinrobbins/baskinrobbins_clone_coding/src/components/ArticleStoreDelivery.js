import React from "react";
import styled from "styled-components";

const StoreWrap = styled.div`
  position: relative;
  width: 1200px;
  margin: 0 auto;
  height: 547px;
  box-sizing: border-box;

  &:after {
    display: table;
    clear: both;
    content: "";
  }

  section {
    float: left;
    width: 50%;

    h3 {
      text-align: center;
      padding: 95px 0 50px;
    }
  }
`;

const ArticleStoreDelivery = () => {
  return (
    <StoreWrap>
      <section>
        <h3>
          <img src={require("../assets/img/h_store.png")} alt="BR STORE" />
        </h3>
        <div>
          <a href="http://www.baskinrobbins.co.kr/store/map.php">
            <img
              src={require("../assets/img/img_store.jpg")}
              alt="내 주변 가장 가까운 배스킨라빈스 매장을 찾아보세요! 다양한 즐거움과 새로움! 우리동네 배스킨라빈스! 매장찾기"
            />
          </a>
        </div>
      </section>

      <section>
        <h3>
          <img
            src={require("../assets/img/h_happyorder_delivery.png")}
            alt="HAPPY ORDER & DELIVERY"
          />
        </h3>
        <div>
          <a href="http://www.baskinrobbins.co.kr/store/catering.php">
            <img
              src={require("../assets/img/img_happyorder_delivery.png")}
              alt="배스킨라빈스 모바일 사전주문 & 배달서비스 - 해피오더 배달 콜센터 1670-3131 주문에서 결제 & 배송까지 간단하게!"
            />
          </a>
        </div>
      </section>
    </StoreWrap>
  );
};

export default ArticleStoreDelivery;
