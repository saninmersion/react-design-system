import React from "react";
import { configure } from "@storybook/react";

configure(function() {
  require("./storyList/theme");
  require("./storyList/uiElements");
}, module);
