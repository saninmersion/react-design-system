import React from "react";
import styled from "styled-components";
import { images } from "config";
import { RoundedButton, Heading, Text } from "components/styled";
import { withAppDetail } from "appDetailProvider";

const Home = ({ appDetail }) => {
  return (
    <Wrapper>
      <Header>
        <img src={images.appLogo} className="Home-logo" alt="logo" />
        <Heading as="h2" light>
          {appDetail.title}
        </Heading>
      </Header>
      <Intro>
        <StorybookDetail>
          <Text size={16}>
            Open Storybook to checkout UI component & guidelines
          </Text>
          <code>npm run storybook</code>
        </StorybookDetail>
        <RoundedButton as="a" href="https://medium.com/p/b2210f24e4fe/">
          Visit Blog
        </RoundedButton>
      </Intro>
    </Wrapper>
  );
};

export default withAppDetail(Home);

const Wrapper = styled.div`
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

const Header = styled.header`
  background-color: ${props => props.theme.primary.primary};
  height: 150px;
  padding: 20px;
`;

const Intro = styled.div`
  color: ${props => props.theme.primary.gray};
  font-size: large;
  padding: 36px 0;

  a {
    color: ${props => props.theme.primary.primary};
    text-decoration: none;
  }
`;

const StorybookDetail = styled.div`
  margin-bottom: 20px;

  > p {
    margin-bottom: 8px;
  }

  > code {
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 3px;
    font-size: 85%;
    margin: 0;
    padding: 0.2em 0.4em;
  }
`;
