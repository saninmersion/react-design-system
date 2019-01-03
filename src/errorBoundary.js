import React, { Component } from "react";
import styled from "styled-components";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Wrapper>
          <h4>Something went wrong</h4>

          <p>Please try again in few moments.</p>
        </Wrapper>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

const Wrapper = styled.div`
  max-width: 600px;
  margin: 80px auto;

  h4 {
    font-size: 32px;
  }
`;
