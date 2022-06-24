import React from "react";
import styled from "styled-components";

import Project from "../components/Project";
import About from "../components/About";
import Contact from "../components/Contact";
import Map from "../components/Map";

const ContentContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 8px 16px !important;
  max-width: 1564px;
`;

const Main = () => {
  return (
    <ContentContainer>
      <Project />
      <About />
      <Contact />
      <Map />
    </ContentContainer>
  );
};

export default Main;
