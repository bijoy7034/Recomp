import React from "react";
import { fn } from "@storybook/test";
import { RecompMenu } from "../../index";

export default {
  title: "Components/Menu",
  component: RecompMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    items: { description: "List of menu items with labels and actions" },
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
      description: "Theme variant of the menu",
    },
  },
};

const sampleItems = [
  { label: "Open", onClick: fn() },
  { label: "Rename", onClick: fn() },
  { label: "Duplicate", onClick: fn() },
  { label: "Share", onClick: fn() },
  { label: "Delete", onClick: fn() },
];

export const DefaultMenu = {
  args: {
    items: sampleItems,
    variant: "primary",
  },
};

export const SecondaryThemeMenu = {
  args: {
    items: sampleItems,
    variant: "secondary",
  },
};

export const ShortMenu = {
  args: {
    items: [
      { label: "Settings", onClick: fn() },
      { label: "Logout", onClick: fn() },
    ],
    variant: "primary",
  },
};

export const LongMenu = {
  args: {
    items: [
      { label: "Dashboard", onClick: fn() },
      { label: "Profile", onClick: fn() },
      { label: "Messages", onClick: fn() },
      { label: "Notifications", onClick: fn() },
      { label: "Security", onClick: fn() },
      { label: "Preferences", onClick: fn() },
      { label: "Help", onClick: fn() },
      { label: "Logout", onClick: fn() },
    ],
    variant: "primary",
  },
};


