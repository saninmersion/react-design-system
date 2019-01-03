import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Home } from "./pages";
import Router from "./router";
import { ThemeProvider } from "styled-components";
import registerServiceWorker from "./registerServiceWorker";
import theme from "utils/theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>,

  document.getElementById("root")
);
registerServiceWorker();
