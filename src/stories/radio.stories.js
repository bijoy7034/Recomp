import React, { useState } from "react";
import RecompRadio from "../components/Radio/radio";

export default {
  title: "Data Input/RecompRadio",
  component: RecompRadio,
  tags: ["autodocs"],
  argTypes: {
    label: { description: "Label for the radio button" },
    checked: { description: "Whether the radio button is selected" },
    disabled: { description: "Disable the radio button" },
    onChange: { action: "clicked", description: "Triggered when clicked" },
    name: { description: "Radio group name" },
    value: { description: "Radio button value" },
  },
};

export const Normal = {
  args: {
    label: "Option 1",
    checked: false,
    name: "example",
    value: "option1",
  },
  parameters: {
    docs: {
      description: {
        story: "A standard radio button that can be selected.",
      },
    },
  },
};

export const Grouped = () => {
  const [selectedValue, setSelectedValue] = useState("option1");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <RecompRadio
        label="Option 1"
        name="group"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={() => setSelectedValue("option1")}
      />
      <RecompRadio
        label="Option 2"
        name="group"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={() => setSelectedValue("option2")}
      />
      <RecompRadio
        label="Option 3"
        name="group"
        value="option3"
        checked={selectedValue === "option3"}
        onChange={() => setSelectedValue("option3")}
      />
    </div>
  );
};

Grouped.parameters = {
  docs: {
    description: {
      story: "A group of radio buttons where only one can be selected at a time.",
    },
  },
};

export const Disabled = {
  args: {
    label: "Disabled Option",
    disabled: true,
    name: "example",
    value: "disabledOption",
  },
  parameters: {
    docs: {
      description: {
        story: "A disabled radio button that cannot be selected.",
      },
    },
  },
};
