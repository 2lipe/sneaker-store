import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import { PaymentCardMobile, PaymentCardMobileProps } from '.';

export default {
  title: 'PaymentCardMobile',
  component: PaymentCardMobile,
  args: {
    id: '2839u512401',
    image: '/img/sx-sneaker.png',
    sneaker: 'SS Sneaker',
    color: 'Green',
    price: '$ 100.00',
  },
} as Meta;

export const Default: Story<PaymentCardMobileProps> = args => (
  <div style={{ maxWidth: '400px' }}>
    <PaymentCardMobile {...args} />
  </div>
);
