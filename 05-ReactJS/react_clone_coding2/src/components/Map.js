import React from "react";
import styled from "styled-components";

import MapPic from "../img/map.jpg";

const MapWrap = styled.div`
  padding: 0.01em 16px;

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

  img {
    max-width: 100%;
    height: auto;
    width: 100%;
  }
`;

const Map = () => {
  return (
    <MapWrap>
      <img src={MapPic} />
    </MapWrap>
  );
};

export default Map;
