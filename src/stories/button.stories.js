import React from "react";
import RecompButton from "../components/Button/button";
import { fn } from '@storybook/test';

export default {
  title: 'Components/RecompButton',
  component: RecompButton,
  tags: ['autodocs'],
  argTypes: {
    label: { 
      description: 'The text to display on the button', 
      defaultValue:  'Click Me' 
    },
    onClick: { 
      description: 'Callback function to trigger on button click',  
    },
    type: {
      description: "You can change the color",
      defaultValue: { summary: 'primary' }
    },
    disabled: {
      description: 'Whether the button is disabled',
    },
    size : {
      description : 'You can enter you size',
      defaultValue : {summary : 's'}
    }
  },
};

export const Primary = {
    args: {
      label: 'Primary',
      type: 'primary',
      onclick: fn(),
    },
  };

export const Success = {
  args : {
    label : 'Success',
    type: 'success',
    onclick: fn()
  }
}
export const Disabled = {
  args: {
    label: 'Disabled',
    type: 'primary',
    onclick: fn(),
    disabled: true
  },
};
export const Size = {
  args: {
    label: 'Large',
    type: 'primary',
    onclick: fn(),
    size: 'l'
  },
}