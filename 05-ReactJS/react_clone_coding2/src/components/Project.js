import React from "react";
import styled from "styled-components";

import data from "../data";

const ProjectText = styled.div`
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

  h3 {
    border-bottom: 1px solid #ccc !important;
    padding-top: 16px !important;
    padding-bottom: 16px !important;
    border-color: #f1f1f1 !important;
  }

  .imgWrap {
    padding: 0 8px;

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
  }
`;

const ProImgWrap = styled.div`
  padding-top: 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  div {
    position: relative;
    flex-basis: 24.99999%;
    padding: 8px;

    div {
      position: absolute;

      padding: 8px 16px !important;
      color: #fff !important;
      background-color: #000 !important;
    }

    img {
      border-style: none;
      vertical-align: middle;
      width: 100%;
    }
  }
`;

const Project = () => {
  const { project } = data;

  return (
    <ProjectText>
      <h3>Projects</h3>
      <div className="imgWrap">
        <ProImgWrap>
          {project.map((v, i) => {
            return (
              <div>
                <div>{v.subject}</div>
                <img src={v.img} alt={v.subject} />
              </div>
            );
          })}
        </ProImgWrap>
      </div>
    </ProjectText>
  );
};

export default Project;
