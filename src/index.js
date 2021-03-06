import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Router from "./router";
import ErrorBoundary from "./errorBoundary";
import { ThemeProvider } from "styled-components";
import { AppDetailProvider } from "appDetailProvider";
import registerServiceWorker from "./registerServiceWorker";
import theme from "utils/theme";
import GlobalStyle from "components/styled/global/index";

ReactDOM.render(
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <AppDetailProvider>
          <Router />
        </AppDetailProvider>
      </Fragment>
    </ThemeProvider>
  </ErrorBoundary>,

  document.getElementById("root")
);
registerServiceWorker();
