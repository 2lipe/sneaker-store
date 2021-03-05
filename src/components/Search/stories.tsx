import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Search, SearchProps } from '.';

export default {
  title: 'Search',
  component: Search,
} as Meta;

export const Default: Story<SearchProps> = args => <Search {...args} />;
