/* eslint-disable max-len */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import { PaymentMethodCardMobile, PaymentMethodCardMobileprops } from '.';

export default {
  title: 'PaymentMethodCardMobile',
  component: PaymentMethodCardMobile,
  args: {
    price: '$ 100.00',
  },
} as Meta;

export const Default: Story<PaymentMethodCardMobileprops> = args => <PaymentMethodCardMobile {...args} />;
