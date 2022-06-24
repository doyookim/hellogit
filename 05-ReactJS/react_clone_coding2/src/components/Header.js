import React from "react";

import styled from "styled-components";
import architect from "../img/architect.jpg";

const HeaderWrap = styled.div`
  display: block;
  letter-spacing: 4px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 1500px;

  img {
    border-style: none;
    vertical-align: middle;
    max-width: 100%;
    height: auto;
  }
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center !important;
    margin-top: 16px !important;

    h1 {
      font-size: 36px !important;
      color: #fff !important;

      .background {
        opacity: 0.75;
        padding: 8px 16px !important;
        color: #fff;
        background-color: #000;
      }
      .ligntgrey {
        padding: 8px 16px !important;
        color: #f1f1f1 !important;
        background-color: none !important;
      }
    }
  }
`;
const Header = () => {
  return (
    <HeaderWrap>
      <img src={architect} alt="Architecture" />
      <div>
        <h1>
          <span className="background">
            <b>BR</b>
          </span>
          <span className="ligntgrey">Architects</span>
        </h1>
      </div>
    </HeaderWrap>
  );
};

export default Header;
