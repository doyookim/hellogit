import React from "react";
import styled from "styled-components";

const SnsImgItem = styled.div`
  float: left;
  height: auto;
  position: relative;
  box-sizing: border-box;
  padding: 1.5px;
  width: 20%;
  display: block;

  div {
    height: 238.5px;
    position: relative;
    cursor: pointer;
    backface-visibility: hidden;
    background: url(../assets/img/04-img-320.png) no-repeat;
    background-position: center;
    background-size: contain;
    opacity: 1;

    .thumbnail {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-color: #fff;
    }
  }
`;

const SnsBoxImg = ({ item: { title, image } }) => {
  return (
    <SnsImgItem>
      <div>
        <img className="thumbnail" src={image} alt={title} />
      </div>
    </SnsImgItem>
  );
};

export default SnsBoxImg;
