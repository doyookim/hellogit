import React from "react";
import styled from "styled-components";
import AboutSection from "../components/AboutSection";
import MenuSection from "../components/MenuSection";
import ContactSection from "../components/ContactSection";

const MainContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1100px;

  hr {
    top: 1px;
    border: 0.5px solid #eee;
  }
`;
const Main = () => {
  return (
    <MainContainer>
      <AboutSection />
      <hr />
      <MenuSection />
      <hr />
      <ContactSection />
    </MainContainer>
  );
};

export default Main;
