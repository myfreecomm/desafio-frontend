import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --inadimplente: #CC0000;
        --info: #0099CC;
        --selectside: #33b5e5;
        --select: #e1f5fe;
    }
`;

export default GlobalStyle;
