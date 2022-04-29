import React from "react";
import styled from "styled-components";

const FooterWrap = styled.div`
  padding: 20px;
  text-align: center;
  background: #ddd;
`;

const Footer = () => {
  return (
    <FooterWrap>
      <h2>Footer</h2>
    </FooterWrap>
  );
};

export default Footer;
