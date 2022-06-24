import React from "react";
import styled from "styled-components";
import ArticleFlavorMonth from "../components/ArticleFlavorMonth";
import ArticleBannerSlide from "../components/ArticleBannerSlide";
import ArticleBrEvent from "../components/ArticleBrEvent";
import ArticleBrMenu from "../components/ArticleBrMenu";
import ArticleStoreDelivery from "../components/ArticleStoreDelivery";
import ArticleSnsBox from "../components/ArticleSnsBox";

const ArticleWrap = styled.article`
  width: auto;
  min-width: 1200px;
  padding-bottom: 130px;
  margin: 0 auto;
  padding: 0 0 160px;
`;

const Articles = () => {
  return (
    <ArticleWrap>
      <ArticleFlavorMonth />
      <ArticleBannerSlide />
      <ArticleBrEvent />
      <ArticleBrMenu />
      <ArticleStoreDelivery />
      <ArticleSnsBox />
    </ArticleWrap>
  );
};

export default Articles;
