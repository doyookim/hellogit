/**
 * @filename: GlobalStyles.js
 * @description: 전역으로 적용될 기본 스타일시트.
 *               이 파일에서 정의한 class는 ReactJSX에서 className속성으로 참조해야 한다.
 * @author: Kim D.Y (howdoyoodoit@gmail.com)
 */

/** 패키지 참조 */
import { createGlobalStyle } from "styled-components";

/**
 * 전역 스타일 시트를 정의한 객체
 * @type {GlobalStyleComponent<{}, DefaultTheme>}
 */
const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box
    }


      body {
        margin: 0;
        padding: 0;
    }
    *,
    *:before,
    *:after {
        box-sizing: inherit
    }

    h1 {
        font-size: 36px
    }

    h2 {
        font-size: 30px
    }

    h3 {
        font-size: 24px
    }

    h4 {
        font-size: 20px
    }

    h5 {
        font-size: 18px
    }

    h6 {
        font-size: 16px
    }

    html,
    body {
        font-family: Verdana, sans-serif;
        font-size: 15px;
        line-height: 1.5
    }

    html {
        overflow-x: hidden
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: "Segoe UI", Arial, sans-serif;
        font-weight: 400;
        margin: 10px 0
    }

    body {
        font-family: "Times New Roman", Georgia, Serif;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: "Playfair Display";
        letter-spacing: 5px;
    }

    hr {
        border: 0;
        border-top: 1px solid #eee;
        margin: 20px 0
    }

    img {
        vertical-align: middle
    }

    a {
        color: inherit
    }

    b {
        font-weight: bolder
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
`;

export default GlobalStyles;
