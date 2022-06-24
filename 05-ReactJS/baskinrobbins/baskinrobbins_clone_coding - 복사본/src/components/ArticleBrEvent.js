import React from "react";
import styled from "styled-components";
import axios from "axios";
import EventItem from "./EventItem";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 4,
};

const EventWrap = styled.section`
  position: relative;
  width: 1200px;
  margin: 0 auto;
  height: 721px;

  h3 {
    text-align: center;
    padding: 100px 0 50px;
    color: #2f231c;
    font-size: 17px;
    line-height: 23px;
  }

  .event_ul {
    margin-left: -16px;
    list-style: none;
    &:after {
      display: table;
      clear: both;
      content: "";
    }
  }
`;

const ArticleBrEvent = () => {
  const [evenList, setEventList] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      let json = null;

      try {
        const response = await axios.get("http://localhost:3001/eventlist");
        json = response.data;
      } catch (e) {
        console.error(e);
        alert("Ajax 연동 실패");
      }

      if (json != null) {
        setEventList(json);
      }
    })();
  }, []);

  return (
    <EventWrap>
      <h3>
        <img src={require("../assets/img/h_event.png")} alt="BR EVENT" />
      </h3>

      <Slider className="event_ul" {...settings}>
        {evenList.map((v, i) => (
          <EventItem key={i} item={v} />
        ))}
      </Slider>
    </EventWrap>
  );
};

export default ArticleBrEvent;
