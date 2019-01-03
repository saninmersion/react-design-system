import React from "react";
import { storiesOf } from "@storybook/react";
import { Modal, Burger } from "components/layouts";

storiesOf("UI Elements", module)
  .add("Modal", () => (
    <Modal headerTitle="React Design System">
      Building Design System with React is pretty cool
    </Modal>
  ))
  .add("Burger", () => <Burger />);
