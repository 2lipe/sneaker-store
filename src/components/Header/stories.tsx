import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Header, HeaderProps } from '.';

export default {
  title: 'Header',
  component: Header,
  args: {
    title: 'Sneakers',
    avatar: '/img/avatar.png',
  },
} as Meta;

export const Default: Story<HeaderProps> = args => <Header {...args} />;

export const WithBackButton: Story<HeaderProps> = args => <Header {...args} />;

WithBackButton.args = {
  title: 'Sneakers',
  avatar: '/img/avatar.png',
  back: true,
};
