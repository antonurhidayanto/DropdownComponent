import React from 'react';
import MultiSelectDropdown from '../components/DropdownComponent';

export default {
  title: 'Components/MultiSelectDropdown',
  component: MultiSelectDropdown,
  tags: ['autodocs'],
  argTypes: {
    searchEnabled: { control: 'boolean' }, // Bisa diaktifkan/nonaktifkan di UI Storybook
    selectAllEnabled: { control: 'boolean' }, // Bisa diaktifkan/nonaktifkan di UI
    maxSelections: { control: { type: 'number', min: 0, max: 10 } }, // Bisa diatur di UI
    label: { control: 'text' },
    filterOptions: { control: 'boolean' },
    isMultiple: { control: 'boolean' },
    outline: { control: 'boolean' },
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

