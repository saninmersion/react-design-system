import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";

const App = () => (
  <AppWrapper>
    <AppHeader>
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Design System in React</h1>
    </AppHeader>
    <AppIntro>
      Visit this <a href="https://medium.com/p/b2210f24e4fe/">link</a> to learn
      more.
    </AppIntro>
  </AppWrapper>
);

export default App;

const AppWrapper = styled.div`
  text-align: center;
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
    height: 80px;
  }
  .App-title {
    font-size: 1.5em;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const AppHeader = styled.header`
  background-color: ${props => props.theme.primary.primary};
  height: 150px;
  padding: 20px;
  color: white;
`;

const AppIntro = styled.div`
  color: ${props => props.theme.primary.gray};
  font-size: large;
  padding: 36px 0;

  a {
    color: ${props => props.theme.primary.primary};
    text-decoration: none;
  }
`;
