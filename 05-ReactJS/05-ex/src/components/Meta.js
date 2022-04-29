import React from "react";
import { Helmet } from "react-helmet";

const Meta = (props) => {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <title>{props.title}</title>
      {/* SEO 태그 */}
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords} />
      <meta name="author" content={props.author} />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?
family=Gugi&family=Noto+Sans+KR:wght@100;300;400;500&display=swap"
        rel="stylesheet"
      ></link>
    </Helmet>
  );
};

export default Meta;

Meta.defaultProps = {
  title: "연습문제5",
  description: "연습문제5 풀이입니다.",
  keywords: "React",
  author: "김도유",
  url: window.location.href,
};
