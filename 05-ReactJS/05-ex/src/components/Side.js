import React from "react";
import styled from "styled-components";

const SideWrap = styled.div`
  width: 360px;
  flex: none;
  border-left: 1px solid #d5d5d5;
  border-right: 1px solid #d5d5d5;

  .container {
    padding: 20px;

    .fake-img {
      background-color: #aaa;
      width: auto;
      padding: 20px;
      height: 60px;
    }

    .fake-img.height200 {
      height: 200px;
    }
  }
`;

const Side = () => {
  return (
    <div>
      <SideWrap>
        <div className="container">
          <h2>About Me</h2>
          <h5>Photo of me:</h5>
          <div className="fake-img height200">Image</div>
          <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
          <h3>More Text</h3>
          <p>Lorem ipsum dolor sit ame.</p>
          <div className="fake-img">Image</div>
          <br />
          <div className="fake-img">Image</div>
          <br />
          <div className="fake-img">Image</div>
        </div>
      </SideWrap>
    </div>
  );
};

export default Side;
