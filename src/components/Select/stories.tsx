import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Select, SelectProps } from '.';

export default {
  title: 'Select',
  component: Select,
} as Meta;

const opt = [
  { value: '38', label: '38' },
  { value: '39', label: '39' },
  { value: '40', label: '40' },
  { value: '41', label: '41' },
  { value: '42', label: '42' },
  { value: '43', label: '43' },
];

export const Default: Story<SelectProps> = args => <Select {...args} />;

Default.args = {
  name: 'sizes',
  label: 'Size',
  options: opt,
};
