import React from "react";
import { storiesOf } from "@storybook/react";
import { ColorStory } from "stories/components";

storiesOf("Theme", module).add("UI theme", () => <ColorStory />);
