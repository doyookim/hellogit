import React from "react";
import styled from "styled-components";

import Post from "./Post";

import tablesetting from "../img/tablesetting.jpg";

const MenuSectionWrap = styled.div`
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

  div {
    float: left;
    padding: 12px 24px;
    width: 49.99999%;

    h1 {
      text-align: center;
    }

    img {
      height: auto;
      border-radius: 4px;
      opacity: 0.75;
      width: 100%;
    }
  }
`;

const MenuSection = () => {
  return (
    <MenuSectionWrap>
      <div>
        <h1>Our Menu</h1>
        <Post>
          <h4>Bread Basket</h4>
          <p>Assortment of fresh baked fruit breads and muffins 5.50</p>
        </Post>
        <br />
        <Post>
          <h4>Honey Almond Granola with Fruits</h4>
          <p>
            Natural cereal of honey toasted oats, raisins, almonds and dates
            7.00
          </p>
        </Post>
        <br />
        <Post>
          <h4>Belgian Waffle</h4>
          <p>Vanilla flavored batter with malted flour 7.50</p>
        </Post>
        <br />
        <Post>
          <h4>Scrambled eggs</h4>
          <p>
            Scrambled eggs, roasted red pepper and garlic, with green onions
            7.50
          </p>
        </Post>
        <br />
        <Post>
          <h4>Blueberry Pancakes</h4>
          <p>With syrup, butter and lots of berries 8.50</p>
        </Post>
      </div>

      <div>
        <img src={tablesetting} alt="tablesetting" />
      </div>
    </MenuSectionWrap>
  );
};

export default MenuSection;
