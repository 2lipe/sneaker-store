import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack';

import { Chip, ChipProps } from '.';

export default {
  title: 'Chip',
  component: Chip,
  args: {
    text: 'Back',
  },
  argTypes: {
    text: {
      type: 'string',
    },

    icon: {
      type: '',
    },
  },
} as Meta;

export const Default: Story<ChipProps> = args => <Chip {...args} />;

export const WithIcon: Story<ChipProps> = args => <Chip {...args} />;

WithIcon.args = {
  text: 'Back',
  icon: <ArrowBack />,
};
