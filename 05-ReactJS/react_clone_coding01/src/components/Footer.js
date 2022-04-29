import React from "react";
import styled from "styled-components";

const FooterWrap = styled.footer`
  text-align: center;
  color: #000;
  background-color: #f1f1f1;
  padding-top: 32px;
  padding-bottom: 32px;

  a:hover {
    color: #4caf50;
  }
`;

const Footer = () => {
  return (
    <FooterWrap>
      <p>
        Powered by&nbsp;
        <a
          href="https://www.w3schools.com/w3css/default.asp"
          title="W3.CSS"
          target="_blank"
          rel="noopener noreferrer"
        >
          w3.css
        </a>
      </p>
    </FooterWrap>
  );
};

export default Footer;
