import { css } from "styled-components";

const base = css`
  * {
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${props => props.theme.fontSize.sm}px;
  }
`;

export default base;
