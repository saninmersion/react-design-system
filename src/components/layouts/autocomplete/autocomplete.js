import React, { useState } from "react";
import PropTypes from "prop-types";

const AutoComplete = ({ options }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [activeOption, setActiveOption] = useState(0);

  const handleChange = e => {
    const { value } = e.target;
    const filteredOptions = options.filter(optionName => {
      return optionName.toLowerCase().includes(value.toLowerCase());
    });
    setUserInput(value);
    setFilteredOptions(filteredOptions);
    setShowOptions(true);
  };

  const onOptionClick = e => {
    console.log(e.target.innerText);
    setFilteredOptions([]);
    setUserInput("");
    setUserInput(e.target.innerText);
  };

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      setActiveOption(0);
      setShowOptions(false);
      setUserInput(filteredOptions[activeOption]);
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      setActiveOption(activeOption - 1);
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        return;
      }
      setActiveOption(activeOption + 1);
    }
  };

  return (
    <div>
      <div className="search">
        <input
          value={userInput}
          onChange={handleChange}
          onKeyDown={onKeyDown}
          type="text"
          className="search__field"
        />
        <button className="search__btn">Search</button>
        {showOptions && (
          <>
            {filteredOptions.length ? (
              <ul className="options">
                {filteredOptions.map((option, index) => (
                  <li
                    onClick={onOptionClick}
                    key={index}
                    style={
                      index === activeOption ? { fontWeight: "bold" } : null
                    }
                  >
                    {option}
                  </li>
                ))}
              </ul>
            ) : (
              <div>No result found</div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AutoComplete;

AutoComplete.propTypes = {
  options: PropTypes.array.isRequired
};
