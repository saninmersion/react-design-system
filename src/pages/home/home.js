import React from "react";
import styled from "styled-components";
import { images } from "config";
import { RoundedButton, Heading, Text } from "components/styled";

const Home = () => (
  <HomeWrapper>
    <HomeHeader>
      <img src={images.appLogo} className="Home-logo" alt="logo" />
      <Heading as="h2" light>
        Design System in React
      </Heading>
      <Text light>React is awesome</Text>
    </HomeHeader>
    <HomeIntro>
      <RoundedButton as="a" href="https://medium.com/p/b2210f24e4fe/">
        Visit Blog
      </RoundedButton>
    </HomeIntro>
  </HomeWrapper>
);

export default Home;

const HomeWrapper = styled.div`
  text-align: center;
  .Home-logo {
    animation: Home-logo-spin infinite 20s linear;
    height: 80px;
  }
  .Home-title {
    font-size: 1.5em;
  }

  @keyframes Home-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const HomeHeader = styled.header`
  background-color: ${props => props.theme.primary.primary};
  height: 150px;
  padding: 20px;
`;

const HomeIntro = styled.div`
  color: ${props => props.theme.primary.gray};
  font-size: large;
  padding: 36px 0;

  a {
    color: ${props => props.theme.primary.primary};
    text-decoration: none;
  }
`;
