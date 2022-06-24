import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

// 이 경로에 적절한 이미지를 직접 배치해야 한다.
import sample from "./assets/img/reactjs.jpg";

const Meta = (props) => {
  return (
    <HelmetProvider>
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
        <meta property="og:image" content={props.image} />
        <meta property="og:url" content={props.url} />

        <link rel="shortcut icon" href={props.image} type="image/jpg" />
        <link rel="icon" href={props.image} type="image/jpg" />

        {/* 추가적으로 적용해야할 외부 js나 css로 여기서 명시할 수 있다 . */}
      </Helmet>
    </HelmetProvider>
  );
};

Meta.defaultProps = {
  title: "covid19",
  description: "React.js로 만든 Redux활용 covid19현황 문제입니다.",
  keywords: "React, Redux",
  author: "김도유",
  image: sample,
  url: window.location.href,
};

export default Meta;
