import React from "react";
import RecompButton from "../components/Button/button";
import { fn } from "@storybook/test";

export default {
  title: "Components/RecompButton",
  component: RecompButton,
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "The text to display on the button",
      defaultValue: "Click Me",
    },
    onClick: {
      description: "Callback function to trigger on button click",
    },
    variant: {
      description: "You can change the color",
      defaultValue: { summary: "primary" },
    },
    disabled: {
      description: "Whether the button is disabled",
    },
    size: {
      description: "You can enter your size",
      defaultValue: { summary: "s" },
    },
    style: {
      description: "",
    },
  },
};

export const Primary = {
  args: {
    label: "Primary",
    variant: "primary",
    onclick: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: "This is the primary variant of the button.",
      },
    },
  },
};

export const AllButtons = () => {
  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <RecompButton label="Success" variant="success" />
      <RecompButton label="Warning" variant="warning" />
      <RecompButton label="Danger" variant="danger" />
      <RecompButton label="Primary" variant="primary" />
    </div>
  );
};

AllButtons.parameters = {
  docs: {
    description: {
      story: "This story displays all button variants in a row.",
    },
  },
};

export const Success = {
  args: {
    label: "Success",
    variant: "success",
    onclick: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: "This is the success variant of the button, usually used for success messages.",
      },
    },
  },
};

export const Disabled = {
  args: {
    label: "Disabled",
    variant: "primary",
    onclick: fn(),
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "This button is disabled and cannot be clicked.",
      },
    },
  },
};

export const Size = {
  args: {
    label: "Large",
    variant: "primary",
    onclick: fn(),
    size: "l",
  },
  parameters: {
    docs: {
      description: {
        story: "This story showcases a button with a larger size.",
      },
    },
  },
};
