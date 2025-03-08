import React from "react";
import { RecompCheckbox } from "../../index";

export default {
    title: "Components/Checkbox",
    component: RecompCheckbox,
    tags: ["autodocs"],
    argTypes: {
        onChange: { action: "changed" },
    },
    parameters :{
        layout : 'centered'
    }
};

export const Default = {
    args: {
        label: "Checkbox",
    },
};

export const Disabled = {
    args: {
        label: "Disabled Checkbox",
        disabled:true
    },
};

export const Checked = {
    args: {
        label: "Checked Checkbox",
        checked: true,
        disabled: false,
    },
};

export const Unchecked = {
    args: {
        label: "Unchecked Checkbox",
        checked: false,
        disabled: false,
    },
};

export const WithDescription = {
    args: {
        label: "With Description",
        checked: false,
        disabled: false,
        description: "This checkbox is checked",
    },
};
