import React from "react";
import styled from "styled-components";

const FooterWrap = styled.footer`
  text-align: center !important;
  padding-top: 16px !important;
  padding-bottom: 16px !important;
  color: #fff !important;
  background-color: #000 !important;

  a {
    &:hover {
      color: #4caf50 !important;
    }
  }
`;
const Footer = () => {
  return (
    <FooterWrap>
      <p>
        Powered by&nbsp;
        <a href="https://www.w3schools.com/w3css/default.asp">w3.css</a>
      </p>
    </FooterWrap>
  );
};

export default Footer;
