// these sizes are arbitrary and you can set them to whatever you wish
import { css } from "styled-components";

const sizes = {
  hg: 1440,
  ls: 1170,
  md: 992,
  sm: 768,
  xs: 480
};

// iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label];
  accumulator[label] = (...args) => css`
    @media screen and (min-width: ${emSize}px) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default media;

// const Container = styled.div`
//   color: #333;
//   ${media.desktop`padding: 0 20px;`}
//   ${media.tablet`padding: 0 10px;`}
//   ${media.phone`padding: 0 5px;`}
// `
