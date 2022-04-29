import React from "react";
import styled from "styled-components";
import tablesetting from "../img/tablesetting2.jpg";

const AboutSectionWrap = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;

  &:before {
    content: "";
    display: table;
    clear: both;
  }

  &:after {
    content: "";
    display: table;
    clear: both;
  }

  div{
    float: left;
      padding: 12px 24px;
      width: 49.99999%;

      img {
        max-width: 100%;
        height: auto;
        opacity: 0.75;
        border-radius: 4px;
        width: 600px;
      }
    }

    div {
      float: left;
      width: 49.99999%;

      h1,
      h5 {
        text-align: center;
      }

      p {
        font-size: 18px;

        span {
          display: inline-block;
          padding-left: 8px;
          padding-right: 8px;
          text-align: center;
          color: #000;
          background-color: #f1f1f1;
        }

        &.grey {
          color: #757575;
        }
      }
    }
  }
`;

const AboutSection = () => {
  return (
    <AboutSectionWrap>
      <div>
        <img src={tablesetting} alt="tablesetting" />
      </div>
      <div>
        <h1>About Catering</h1>
        <br />
        <h5>Tradition since 1889</h5>
        <p>
          The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor
          sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only
          use <span>seasonal</span> ingredients.
        </p>
        <p className="grey">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum consectetur adipiscing
          elit, sed do eiusmod temporincididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </AboutSectionWrap>
  );
};

export default AboutSection;
