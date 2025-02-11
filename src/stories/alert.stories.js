import React from "react";
import AlertComponent from "../components/Alert/alert";

export default {
  title: "Components/AlertComponent",
  component: AlertComponent,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["success", "error", "warning", "info"],
    },
    title: { control: "text" },
    message: { control: "text" },
    dismissible: { control: "boolean" },
    autoClose: { control: "number" },
  },
};

const Template = (args) => <AlertComponent {...args} />;

export const SuccessAlert = Template.bind({});
SuccessAlert.args = {
  type: "success",
  title: "Success!",
  message: "Your operation was successful!",
  dismissible: false,
};

export const ErrorAlert = Template.bind({});
ErrorAlert.args = {
  type: "error",
  title: "Error!",
  message: "Something went wrong.",
  dismissible: true,
};

export const WarningAlert = Template.bind({});
WarningAlert.args = {
  type: "warning",
  title: "Warning!",
  message: "Check your input carefully.",
  dismissible: true,
};

export const InfoAlert = Template.bind({});
InfoAlert.args = {
  type: "info",
  title: "Info!",
  message: "This is an informational message.",
  dismissible: true,
};
