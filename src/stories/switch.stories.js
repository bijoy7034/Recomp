import React, { useState } from "react";
import RecompSwitch from "../components/Switch/switch";

export default {
  title: "Data Input/RecompSwitch",
  component: RecompSwitch,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      description: "Determines whether the switch is ON or OFF",
      control: "boolean",
    },
    onChange: {
      description: "Function triggered when switch toggles",
      action: "toggled",
    },
    disabled: {
      description: "Disables the switch if set to true",
      control: "boolean",
    },
    size: {
      description: "Sets the size of the switch",
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
  },
};

const Template = (args) => {
  const [checked, setChecked] = useState(args.checked);
  return <RecompSwitch {...args} checked={checked} onChange={() => setChecked(!checked)} />;
};

export const Default = Template.bind({});
Default.args = {
  checked: false,
  size: "medium",
  onLabel: "ON",
  offLabel: "OFF",
};

Default.story = {
  parameters: {
    docs: {
      description: {
        story: "This is the default switch component with customizable size, labels, and states.",
      },
    },
  },
};

export const Small = Template.bind({});
Small.args = {
  checked: true,
  size: "small",
};

Small.story = {
  parameters: {
    docs: {
      description: {
        story: "A small-sized switch component.",
      },
    },
  },
};

export const Large = Template.bind({});
Large.args = {
  checked: true,
  size: "large",
};

Large.story = {
  parameters: {
    docs: {
      description: {
        story: "A large-sized switch component with custom labels.",
      },
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: false,
  disabled: true,
  size: "medium",

};

Disabled.story = {
  parameters: {
    docs: {
      description: {
        story: "A disabled switch component that cannot be toggled.",
      },
    },
  },
};
