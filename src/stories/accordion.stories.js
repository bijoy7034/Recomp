import React from "react";
import RecompAccordion from '../components/Accordion/accordion'
import { ArrowDropDown } from "@mui/icons-material";

export default {
  title: "Components/RecompAccordion",
  component: RecompAccordion,
  tags: ["autodocs"],
  argTypes: {
    data: {
      description: "Data for the accordion sections, including summary and topics",
    },
    icon: {
      description: "Icon displayed next to the accordion summary",
    },
  },
};

export const BasicAccordion = {
  args: {
    data: [
      {
        summary: "Introduction",
        topics: [
          { title: "What is React?", content: "React is a JavaScript library for building user interfaces." },
        ],
      },
      {
        summary: "Advanced Topics",
        topics: [
          { title: "Hooks", content: "Hooks allow you to use state and other React features without writing a class." },
        ],
      },
    ],
    icon: <ArrowDropDown />,
  },
  description: "A basic accordion with multiple sections. Only one topic (the first one) will be shown per section.",
};


export const AccordionWithMultipleTopics = {
  args: {
    data: [
      {
        summary: "React Basics",
        topics: [
          { title: "JSX", content: "JSX is a syntax extension that allows you to write HTML-like code in JavaScript." },
          { title: "Components", content: "React apps are built using components that can manage their own state." },
        ],
      },
      {
        summary: "React Advanced",
        topics: [
          { title: "State Management", content: "State management in React can be handled with Context API, Redux, or Zustand." },
          { title: "Suspense", content: "Suspense is a React feature for managing asynchronous rendering." },
        ],
      },
    ],
    icon: <ArrowDropDown />,
  },
  description: "Accordion with multiple topics in each section. Only the first topic of each section will be visible when expanded.",
};



export const AccordionWithoutIcon = {
  args: {
    data: [
      {
        summary: "JavaScript Fundamentals",
        topics: [
          { title: "Variables", content: "Variables store data in JavaScript, and they can be declared using let, const, or var." },
        ],
      },
      {
        summary: "JavaScript Advanced",
        topics: [
          { title: "Async/Await", content: "Async/Await is used to handle asynchronous operations in JavaScript more cleanly." },
        ],
      },
    ],
    icon: null,
  },
  description: "Accordion without any icon displayed next to the section summary.",
};
