import React from "react";
import Side from "../components/Side";
import Main from "../components/Main";

import styled from "styled-components";

const SectionWrap = styled.section`
  max-width: 1200px;
  margin: auto;
  background-color: #eee;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
`;

const Content = () => {
  return (
    <SectionWrap>
      <Side />
      <Main />
    </SectionWrap>
  );
};

export default Content;
