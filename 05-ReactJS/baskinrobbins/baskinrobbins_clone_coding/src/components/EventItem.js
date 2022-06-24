import React from "react";
import styled from "styled-components";

const EventList = styled.li`
  float: left;

  min-height: 465px;
  padding-left: 16px;
  box-sizing: border-box;

  a {
    display: block;

    figure {
      font-size: 18px;
      box-sizing: border-box;

      img {
        width: 286px;
        border-radius: 3px;
        border: 1px solid #eaeaea;
      }
    }

    span {
      display: block;
    }

    .type {
      margin: 22px 0 8px 0;
    }

    .title {
      color: #2f231c;
      font-size: 17px;
      line-height: 23px;
    }

    .period {
      margin: 11px 0;
      font-weight: 300;
      color: #948780;
    }
  }
`;

const EventItem = ({
  item: { url, src, alt, typeImg, typeAlt, title, period },
}) => {
  return (
    <EventList>
      <a href={url}>
        <figure>
          <img src={src} alt={alt} />
        </figure>
        <span className="type">
          <img src={typeImg} alt={typeAlt} />
        </span>
        <span className="title">{title}</span>
        <span className="period">{period}</span>
      </a>
    </EventList>
  );
};

export default EventItem;
