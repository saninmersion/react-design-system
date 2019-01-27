import React from "react";
import PropTypes from "prop-types";

const TextField = ({ type, value, placeholder, errorMessage, onChange }) => {
  return (
    <div>
      <input
        type={type}
        value={value}
        name={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};

export default TextField;

TextField.defaultProps = {
  type: "text",
  placeholder: ""
};

TextField.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string
};
