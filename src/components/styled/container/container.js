import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  max-width: ${props => (props.width ? props.width + "px" : "1200px")};
  margin: 0 auto;
  padding: 0 18px;
  width: 100%;
`;

Container.displayName = "Container";

Container.propTypes = {
  width: PropTypes.number
};

export default Container;
