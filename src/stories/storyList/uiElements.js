import React from "react";
import { storiesOf } from "@storybook/react";
import { Modal, Burger, ReactSelect } from "components/layouts";
import { AutoComplete } from "../../components/layouts";
import Menu from "../../components/layouts/menu/menu";

storiesOf("UI Elements", module)
  .add("Modal", () => (
    <Modal headerTitle="React Design System">
      Building Design System with React is pretty cool
    </Modal>
  ))
  .add("Burger", () => <Burger />)
  .add("ReactSelect", () => (
    <ReactSelect
      defaultSelection={{ text: "2075-76", id: 2076 }}
      items={[{ text: "2075-76", id: 2076 }, { text: "2056-57", id: 2056 }]}
      selectChange={val => {
        console.log(val);
      }}
      hasBorderSelection
    />
  ))
  .add("Menu", () => (
    <Menu title="Menu" options={[{ text: "About" }, { text: "Contact" }]} />
  ))
  .add("Auto complete", () => (
    <AutoComplete
      options={[
        "Papaya",
        "Persimmon",
        "Paw Paw",
        "Prickly Pear",
        "Peach",
        "Pomegranate",
        "Pineapple"
      ]}
    />
  ));
