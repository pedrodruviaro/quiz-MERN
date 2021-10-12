import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ThemeProvider } from "styled-components";
import { primaryTheme } from "./styles/Themes";
import ResetStyles from "./styles/ResetStyles";
import GlobalStyles from "./styles/GlobalStyles";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={primaryTheme}>
            <ResetStyles />
            <GlobalStyles />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
