import { fn } from "@storybook/test";
import { RecompButton } from '../../index'
import { FiArrowRight, FiCheck } from "react-icons/fi";
import React from "react";

export default {
  title: "Components/Button",
  component: RecompButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onPress: fn() },
  argTypes: {
    label: { description: "Text inside the button" },
    isDisabled: { description: "Disables the button when true", control: "boolean" },
    onPress: { description: "Function triggered on button press", action: "pressed" },
    variant: {
      description: "Defines the button style (primary/secondary)",
      control: "radio",
      options: ["primary", "secondary"],
    },
    icon: { description: "Optional icon element", control: "none" },
    isPending: {
      description: "Displays a loading state when true",
      control: "boolean",
    },
  },
};

export const Primary = {
  args: {
    label: "Primary",
  },
};

export const Disabled = {
  args: {
    label: "Disabled",
    isDisabled: true,
  },
};

export const WithIcon = {
  args: {
    label: "Next",
    icon: <FiArrowRight />,
  },
};

export const Secondary = {
  args: {
    label: "Confirm",
    variant: "secondary",
  },
};

export const Loading = {
  args: {
    label: "Loading...",
    isPending: true,
  },
};
