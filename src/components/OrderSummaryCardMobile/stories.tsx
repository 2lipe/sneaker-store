/* eslint-disable max-len */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import { OrderSummaryCardMobile, OrderSummaryCardMobileProps } from '.';

export default {
  title: 'OrderSummaryCardMobile',
  component: OrderSummaryCardMobile,
  args: {
    id: '2839u512401',
    image: '/img/sx-sneaker.png',
    sneaker: 'SS Sneaker',
    color: 'Green',
  },
} as Meta;

export const Default: Story<OrderSummaryCardMobileProps> = args => (
  <div style={{ maxWidth: '400px' }}>
    <OrderSummaryCardMobile {...args} />
  </div>
);
