import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Progress, ProgressProps } from '.';

export default {
  title: 'Progress',
  component: Progress,
} as Meta;

export const Default: Story<ProgressProps> = args => <Progress {...args} />;
