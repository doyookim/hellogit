import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";

import noimg from "../assets/img/noImg.png";

const ListItemContainer = styled.li`
  -webkin-font-smoothing: antialiased;
  border-top: 1px solid #eee;

  &:last-child {
    border-bottom: 1px solid #eee;
  }

  .list-item-link {
    box-sizing: border-box;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    padding: 5px 10px;
    text-decoration: none;
    color: #000;
    transition: all 0.1s;

    &:hover {
      background-color: #eeeeee55;
    }

    .thumbnail {
      width: 135px;
      height: 135px;
      display: block;
      margin-right: 20px;
      object-fit: cover;
      flex: none;
    }

    .content {
      flex: 0 1 auto;
      padding: 5px 0;

      display: flex;
      flex-direction: column;
      justify-content: center;

      h3 {
        box-sizing: border-box;
        font-size: 17px;
        font-weight: bold;
        margin: 0;
        margin-bottom: 10px;

        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }

      p {
        font-size: 14px;
        margin: 0;
        margin-bottom: 8px;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          display: inline-block;
          font-size: 12px;
          margin: 0;

          &:after {
            content: "|";
            display: inline-block;
            color: #555;
            padding: 0 5px;
          }

          &:after {
            content: "|";
            display: inline-block;
            color: #555;
            padding: 0 5px;
          }

          &:last-child-after {
            content: "";
          }

          &.price {
            font-weight: bold;
            font-size: 14px;
          }
        }
      }
    }
  }
`;

const Listitem = ({
  type,
  item: {
    title,
    contents,
    url,
    datetime,
    blogname,
    cafename,
    thumbnail,
    authors,
    publisher,
    price,
    sale_price,
  },
  inview,
}) => {
  return (
    <ListItemContainer>
      <a
        className="list-item-link"
        href={url}
        target="_blank"
        rel="noreferrer"
        ref={inview}
      >
        {type !== "web" && (
          <img className="thumbnail" src={thumbnail || noimg} alt={title} />
        )}
        <div className="content">
          {/* 제목과 상세 내용은 HTML태그가 포함되어 있기 떄문에 dangerouslySetinnerHTML을 사용해서 출력*/}

          <h3 dangerouslySetInnerHTML={{ __html: title }} />
          <p dangerouslySetInnerHTML={{ __html: contents }} />
          <ul>
            {/* 가격정보가 있을 경우에만 출력하는 영역 (for 책검색) */}
            {price && (
              <li className="price">
                정가: <span>{price}</span>
              </li>
            )}
            {sale_price && (
              <li className="price">
                정가: <span>{sale_price}</span>
              </li>
            )}
            {authors && <li>{authors.join(",")}</li>}
            {publisher && <li>{publisher}</li>}
            {cafename && <li>{cafename}</li>}
            {blogname && <li>{blogname}</li>}
            {datetime && (
              <li className="date">
                {dayjs(datetime).format("YYYY-MM-DD hh:mm")}
              </li>
            )}
          </ul>
        </div>
      </a>
    </ListItemContainer>
  );
};

// React.memo()를 사용하여 함수형 컴포넌트의 리렌더링 성능을 최적화
export default React.memo(Listitem);
