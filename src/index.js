import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Router from "./router";
import ErrorBoundary from "./errorBoundary";
import { ThemeProvider } from "styled-components";
import registerServiceWorker from "./registerServiceWorker";
import theme from "utils/theme";
import GlobalStyle from "components/styled/global/index";

ReactDOM.render(
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Router />
      </Fragment>
    </ThemeProvider>
  </ErrorBoundary>,

  document.getElementById("root")
);
registerServiceWorker();
