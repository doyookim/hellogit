import React from "react";
import styled from "styled-components";
import background from "../assets/img/1714824579.jpg";

const FlavorWrap = styled.div`
  a {
    display: block;
    text-indent: -9999em;
    height: 150px;
    margin-bottom: 3px;
  }
`;

const ArticleFlavorMonth = () => {
  return (
    <FlavorWrap>
      <a
        href="http://www.baskinrobbins.co.kr/menu/fom.php"
        style={{ background: `url( ${background}) 50% 0 no-repeat #FFD825` }}
      >
        flavor of the month
      </a>
    </FlavorWrap>
  );
};

export default ArticleFlavorMonth;
