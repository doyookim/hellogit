import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Meta = (props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf8" />
        {/* SEO 태그 */}
        <title>{props.title}</title>
        <meta name="description" content="{props.description}" />
        <meta name="keywords" content="{props.keywords}" />
        <meta name="author" content="{props.author}" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="{props.title}" />
        <meta property="og:description" content="{props.description}" />
        <meta property="og:url" content="{props.url}" />
        {/* <meta property='og:image' content={props.image}/> */}

        {/* Helmet 안에서 CSS 적용하기 */}
        <style type="text/css">
          {`
                html {
                 box-sizing: border-box;
                }

                *,
                *:before,
                *:after {
                    box-sizing: inherit;
                }

                h1 {
                    font-size: 36px;
                }

                h2 {
                    font-size: 30px;
                }

                h3 {
                    font-size: 24px;
                }

                h4 {
                    font-size: 20px;
                }

                h5 {
                    font-size: 18px;
                }

                h6 {
                    font-size: 16px;
                }

                html,
                body {
                    font-family: Verdana, sans-serif;
                    font-size: 15px;
                    line-height: 1.5;
                    margin: 0;
                }

                html {
                    overflow-x: hidden;
                }

                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                    font-family: "Segoe UI", Arial, sans-serif;
                    font-weight: 400;
                    margin: 10px 0;
                }

                hr {
                    border: 0;
                    border-top: 1px solid #eee;
                    margin: 20px 0;
                }

                img {
                    vertical-align: middle;
                }

                a {
                    color: inherit;
                }

                b {
                    font-weight: bolder;
                }

                button,
                input {
                    font: inherit;
                    margin: 0;
                    overflow: visible;
                }

                button {
                    text-transform: none;
                }

                  `}
        </style>
      </Helmet>
    </HelmetProvider>
  );
};

Meta.defaultsProps = {
  title: "React Clone Coding02",
  description: "React Clone Coding 02 입니다..",
  keywords: "React",
  author: "도유킴",
  // image: '기본이미지변수적용',
  url: window.location.href,
};

export default Meta;
