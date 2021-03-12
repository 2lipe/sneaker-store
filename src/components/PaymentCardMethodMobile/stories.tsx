/* eslint-disable max-len */
import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import { PaymentCardMethodMobile, PaymentCardMethodMobileProps } from '.';

export default {
  title: 'PaymentCardMethodMobile',
  component: PaymentCardMethodMobile,
} as Meta;

export const Default: Story<PaymentCardMethodMobileProps> = args => (
  <div style={{ maxWidth: '400px' }}>
    <PaymentCardMethodMobile {...args} />
  </div>
);
