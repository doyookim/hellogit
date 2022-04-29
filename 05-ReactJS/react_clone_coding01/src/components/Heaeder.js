import React from "react";
import styled from "styled-components";

import imgHambuer from "../img/hamburger.jpg";

const HeaderWrap = styled.header`
  position: relative;
  letter-spacing: 4px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1600px;
  min-width: 500px;

  img {
    max-width: 100%;
    height: auto;
  }

  div {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 12px 24px;
    opacity: 0.6;

    h1 {
      font-size: 36px;
    }
  }
`;

const Heaeder = () => {
  return (
    <HeaderWrap>
      <img src={imgHambuer} alt="Hamburger Catering" />
      <div>
        <h1>Le Catering</h1>
      </div>
    </HeaderWrap>
  );
};

export default Heaeder;
