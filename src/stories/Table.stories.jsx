import React from "react";
import { RecompTable } from "../..";

export default {
  title: "Data/Table",
  component: RecompTable,
  tags : ['autodocs'],
  argTypes: {
    columns: {
      control: "array",
      description: "An array of column headers",
      table: {
        type: { summary: "string[]" },
      },
    },
    rows: {
      control: "object",
      description: "An array of row objects, where keys match column names",
      table: {
        type: { summary: "Array<{ [key: string]: string }>" },
      },
    },
  },
};

export const Default = {
    tags: ["unstable"],
  args: {
    columns: ["Name", "Type", "Date"],
    rows: [
      { Name: "Games", Type: "File folder", Date: "6/7/2020" },
      { Name: "Program Files", Type: "File folder", Date: "4/7/2021" },
      { Name: "bootmgr", Type: "System file", Date: "11/20/2010" },
      { Name: "log.txt", Type: "Text Document", Date: "1/18/2016" },
    ],
  },
};
