import React from "react";
import Colors from "utils/colors";

const mapObject = (object, callback) =>
  Object.keys(object).map(function(key) {
    return callback(key, object[key]);
  });

const renderColorGroup = type => (
  <ul style={{ listStyle: "none" }}>
    {mapObject(Colors[type], (key, value) => (
      <li
        style={{
          backgroundColor: value
        }}
      >
        {value}
      </li>
    ))}
  </ul>
);

const ColorStory = () => (
  <div class="colors-page">
    <div className="styleguide-block">
      <h4>Primary</h4>
      {renderColorGroup("primary")}
    </div>
    <div className="styleguide-block">
      <h4>Secondary</h4>
      {renderColorGroup("sec")}
    </div>
    <div className="styleguide-block">
      <h4>Neutral</h4>
      {renderColorGroup("neutral")}
    </div>
  </div>
);

export default ColorStory;
