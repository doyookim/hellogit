import React from "react";
import styled from "styled-components";

const PostWrap = styled.div`
  float: none !important;
  h4 {
    font-weight: 400;
    margin: 10px 0;
    font-family: "Playfair Display";
    letter-spacing: 5px;
    white-space: nowrap;
  }
  p {
    white-space: nowrap;
    color: #757575;
  }
`;

const Post = ({ children }) => {
  return <PostWrap> {children}</PostWrap>;
};

export default Post;
