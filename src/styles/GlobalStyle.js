import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body, div, main{
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
        font-weight: normal;
        text-decoration: none;
        outline: none;
    }
`;

export default GlobalStyle;