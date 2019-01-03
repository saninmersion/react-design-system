import styled from "styled-components";
import { css } from "styled-components";
import PropTypes from "prop-types";
import { Colors } from "utils";
const { primary } = Colors;

const ButtonSize = (paddingX, paddingY, fontSize, borderRadius) =>
  css`
    padding: ${paddingX + "px"} ${paddingY + "px"};
    font-size: ${fontSize + "px"};
    border-radius: ${borderRadius + "px"};
  `;
const ButtonVariant = (background, color) => css`
  color: ${color};
  background: ${background};
  cursor: pointer;
  transition: background 0.1s ease-in;

  &:focus,
  &:hover {
  }
`;

export const Button = styled.button`
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 0;
  cursor: pointer;

  &:focus {
    outline: 0;
  }

  ${({ uppercase }) =>
    uppercase &&
    `
  	text-transform: uppercase;
  `};

  ${props =>
    props.bold &&
    `
  	font-weight: 600;
  `};
`;

export const RoundedButton = Button.extend`
  ${ButtonSize(8, 20, 14, 18)};
  ${ButtonVariant(primary.dark, primary.white)};
  font-weight: 600;

  &:hover,
  &:focus,
  &:active {
    background: #01887e;
  }
`;

Button.displayName = "Button";

Button.propTypes = {
  uppercase: PropTypes.bool,
  bold: PropTypes.bool
};

Button.Link = Button.withComponent("a");
Button.Link.displayName = "Button.Link";
