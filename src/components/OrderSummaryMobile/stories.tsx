import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import { OrderSummaryMobile, OrderSummaryMobileProps } from '.';

export default {
  title: 'OrderSummaryMobile',
  component: OrderSummaryMobile,
  args: {
    id: '2839u512401',
    image: '/img/sx-sneaker.png',
    sneaker: 'SS Sneaker',
    color: 'Green',
  },
} as Meta;

export const Default: Story<OrderSummaryMobileProps> = args => <OrderSummaryMobile {...args} />;
