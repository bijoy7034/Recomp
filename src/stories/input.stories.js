import React from "react";
import RecompInput from "../components/Input/input";
import { Search, Info } from "@mui/icons-material";

export default {
  title: "Data Input/RecompInput",
  component: RecompInput,
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      description: "The text to display inside input",
      defaultValue: "Type text here...",
    },
    type: {
      description: "The input type (text, password, email, etc.)",
      defaultValue: "text",
    },
    disabled: {
      description: "Disables the input field",
      defaultValue: false,
      control: { type: "boolean" },
    },
    error: {
        description: "Display error message",
    },
    icon:{
        description: "Add icons inside input box"
    }
  },
};

export const Normal = {
  args: {
    placeholder: "Type text here...",
  },
};
export const DisabledInput = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
};

export const ErrorInput = {
    args: {
        placeholder: "Type text here...",
        error: "This is an error message to show that the input was not as expected"
    }
}
export const IconInput = {
    args: {
        placeholder: "Type text here...",
        icon: <Search/>
    }
}
