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
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:url" content={props.url} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "React 연습문제",
  description: "연습문제4-1 풀이입니다.",
  keywords: "React",
  author: "김도유",
  url: window.location.href,
};

export default Meta;
