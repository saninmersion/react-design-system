/* eslint-disable indent */
import styled from "styled-components";
import PropTypes from "prop-types";

const Heading = styled.span`
  ${props => {
    return `
    color: ${
      props.light ? props.theme.primary.white : props.theme.primary.dark
    };
	   font-weight: ${props.theme.fontWeight.bold}; 
	   font-size: ${props.theme.fontSize.md}px; 
       ${props.uppercase &&
         `
            text-transform: uppercase;
       `} 	   
  `;
  }};
`;

Heading.displayName = "Heading";

Heading.propTypes = {
  light: PropTypes.bool,
  uppercase: PropTypes.bool
};

export default Heading;
