import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Router from "./router";
import { ThemeProvider } from "styled-components";
import registerServiceWorker from "./registerServiceWorker";
import theme from "utils/theme";
import GlobalStyle from "components/styled/global/index";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      <Router />
    </Fragment>
  </ThemeProvider>,

  document.getElementById("root")
);
registerServiceWorker();
