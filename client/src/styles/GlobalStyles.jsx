import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Lato', sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme.dark};
        color: ${(props) => props.theme.light};
    }
`;

export default GlobalStyles;
