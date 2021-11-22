import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body, div, main, section, label, a, input, button, 
        strong, h1, h2, p, form, header, span, figure, img, nav, article, textarea{
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 100%;
        font-weight: normal;
        color: black;
        text-decoration: none;
        outline: none;
    }
    .root{
        overflow: hidden;
    }
`;

export default GlobalStyle;
