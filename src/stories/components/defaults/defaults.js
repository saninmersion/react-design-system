import React from "react";
import Defaults from "utils/defaults";

const mapObject = (object, callback) =>
  Object.keys(object).map(function(key) {
    return callback(key, object[key]);
  });

const renderDefaultGroup = type => (
  <table>
    <tbody>
      {mapObject(Defaults[type], (key, value) => (
        <tr key={key}>
          <td>{key}</td>
          <td>{value}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const DefaultThemeStory = () => (
  <div>
    <div style={{ marginBottom: "24px" }}>
      <h4>Font Family</h4>
      {renderDefaultGroup("fontFamily")}
    </div>

    <div style={{ marginBottom: "24px" }}>
      <h4>Font Size</h4>
      {renderDefaultGroup("fontSize")}
    </div>

    <div style={{ marginBottom: "24px" }}>
      <h4>Font Weight</h4>
      {renderDefaultGroup("fontWeight")}
    </div>

    <div style={{ marginBottom: "24px" }}>
      <h4>Line Height</h4>
      {renderDefaultGroup("lineHeight")}
    </div>

    <div style={{ marginBottom: "24px" }}>
      <h4>Transitions</h4>
      {renderDefaultGroup("transition")}
    </div>
  </div>
);

export default DefaultThemeStory;
