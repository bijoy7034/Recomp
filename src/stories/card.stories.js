import React from "react";
import RecompCard from "../components/Card/card";
import RecompBadge from "../components/Badge/badge"
import RecompButton from "../components/Button/button";



export default {
  title: "Components/RecompCard",
  component: RecompCard,
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "This is the title of the card",
    },
    description: {
      description: "This is the description of the card",
    },
    actions: {
      description: "You can add text, badges, button.."
    },
    footer: {
      description: "This is the footer of the card",
    },
  },
};

export const Normal = {
  args: {
    title: "RecompCard",
    actions: <><RecompBadge text="verified" variant="success"/> </>,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
    footer: <><RecompButton label="View" variant="primary" size='s'/><RecompButton label="Remove" variant="danger" size='s'/></>,
  },
};
