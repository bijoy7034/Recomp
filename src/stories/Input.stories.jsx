import React, { useState } from "react";
import { RecompCheckbox, RecompInput }from "../../index";
import { BiUser, BiLock } from "react-icons/bi";
import RecompButton from "../components/recomp-button/Button";

export default {
  title: "Components/Input",
  component: RecompInput,
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "The label text displayed above the input field.",
      control: "text",
    },
    placeholder: {
      description: "The placeholder text inside the input field.",
      control: "text",
    },
    icon: {
      description: "An optional icon to be displayed inside the input field.",
      control: "object",
    },
    type: {
      description: "The type of input field (e.g., text, password, email).",
      control: "text",
    },
    description: {
      description: "A small description or helper text below the input field.",
      control: "text",
    },
    alert: {
      description:
        "Displays an alert message below the input field in case of an error.",
      control: "text",
    },
    required: {
      description: "Marks the field as required.",
      control: "boolean",
    },
    validationBehavior: {
      description:
        "Specifies how validation is handled (e.g., 'native' or 'aria').",
      control: { type: "radio" },
      options: ["native", "aria"],
    },
  },
};

// Individual Input Stories
export const Default = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
  },
};

export const WithDescription = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    description: "We'll never share your email with anyone else.",
  },
};

export const WithIcon = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    icon: <BiUser />,
  },
};

export const FullFeature = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    description: "Must be at least 8 characters.",
    icon: <BiLock />,
  },
};

// Form Story
export const LoginForm =  {
  render: ()=>{
    const [alert, setAlert] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlert(null);
    if (formData.password.length < 8) {
      setAlert("Password must be at least 8 characters.");
    } else {
      alert(JSON.stringify(formData, null, 2));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "300px",
      }}
    >
      <RecompInput
        label="Username"
        placeholder="Enter your username"
        icon={<BiUser />}
        value={formData.username}
        onChange={handleChange("username")}
        required
      />
      <RecompInput
        alert={alert}
        label="Password"
        type="password"
        placeholder="Enter your password"
        description={"Must be at least 8 characters."}
        icon={<BiLock />}
        value={formData.password}
        onChange={handleChange("password")}
        required
      />
      <RecompCheckbox label='Remember me'/>
      <RecompButton type="submit" label="Login" />
    </form>
  );
  }
};
