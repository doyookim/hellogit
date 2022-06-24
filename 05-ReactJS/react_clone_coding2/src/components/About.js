import React from "react";
import styled from "styled-components";

import data from "../data";

const AboutText = styled.div`
  padding: 0.01em 16px;
  padding-top: 32px !important;
  padding-bottom: 32px !important;

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

  .border_on {
    border-bottom: 1px solid #ccc !important;
    padding-top: 16px !important;
    padding-bottom: 16px !important;
    border-color: #f1f1f1 !important;
  }

  div {
    padding: 0 8px;
    filter: grayscale(75%);

    &before {
      content: "";
      display: table;
      clear: both;
    }

    &:after {
      content: "";
      display: table;
      clear: both;
    }
  }
`;

const AboutImgStyle = styled.div`
  float: left;
  margin-bottom: 16px !important;

  padding: 0 8px;
  display: flex;

  img {
    border-style: none;
    vertical-align: middle;
    width: 100%;
  }

  .position {
    opacity: 0.6;
  }

  button {
    border: none;
    padding: 8px 16px;
    vertical-align: middle;
    overflow: hidden;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;
    display: block;
    width: 100%;
    color: #000 !important;
    background-color: #f1f1f1 !important;

    &:hover {
      color: #000 !important;
      background-color: #ccc !important;
    }
  }
`;
const About = () => {
  const { about } = data;
  const { content, member } = about;
  //console.log(member.map);

  return (
    <AboutText>
      <h3 className="border_on">About</h3>
      <p>{content}</p>
      <AboutImgStyle>
        {member.map((v, index) => {
          return (
            <div key={index}>
              <img src={v.img} alt={v.name} />
              <h3>{v.name}</h3>
              <p>{v.position}</p>
              <p>{v.desc}</p>
              <p>
                <button>Contract</button>
              </p>
            </div>
          );
        })}
      </AboutImgStyle>
    </AboutText>
  );
};

export default About;
