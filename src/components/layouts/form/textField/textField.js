import React from "react";
import PropTypes from "prop-types";

const TextField = ({ type, value, placeholder, onChange }) => {
  return (
    <div>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
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
