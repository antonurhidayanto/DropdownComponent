import React from 'react';
import MultiSelectDropdown from '../components/DropdownComponent';

export default {
  title: 'Components/MultiSelectDropdown',
  component: MultiSelectDropdown,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'The placeholder text that appears within the dropdown when no option is selected.'
    },
    searchEnabled: {
      control: 'boolean',
      description: 'Enable or disable the search functionality within the dropdown.'
    },
    selectAllEnabled: {
      control: 'boolean',
      description: 'Allow users to select all options with one click.'
    },
    maxSelections: {
      control: { type: 'number', min: 0, max: 10 },
      description: 'The maximum number of items that can be selected.'
    },
    label: {
      control: 'text',
      description: 'The label that appears next to the dropdown.'
    },
    filterOptions: {
      control: 'boolean',
      description: 'Enable or disable filtering of options based on search text.'
    },
    isMultiple: {
      control: 'boolean',
      description: 'Set to true to allow multiple selections. False for single selection.'
    },
    outline: {
      control: 'boolean',
      description: 'Enable or disable the outline styling for the dropdown.'
    },
  },
};

export const DropdownComponent = {
  args: {
    options: [
      { label: 'Option 1', value: 'Option 1' },
      { label: 'Option With Icon', value: 'Option With Icon' },
      { label: 'Long Long Option 3', value: 'Long Long Option 3' },
      { label: 'Long Long Long Option 4', value: 'Long Long Long Option 4' },
      { label: 'Long Long Long Long Option 5', value: 'Long Long Long Long Option 5' },
      { label: 'Long Long Long Long Long Option 6', value: 'Long Long Long Long Long Option 6' },
    ],
    placeholder: "",
    searchEnabled: true,
    selectAllEnabled: false,
    maxSelections: 6,
    label: "Label",
    filterOptions: false,
    isMultiple: true,
    outline: true
  },
};

