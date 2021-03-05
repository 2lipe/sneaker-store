import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { PaymentCard, PaymentCardProps } from '.';

export default {
  title: 'PaymentCard',
  component: PaymentCard,
  args: {
    title: 'Online Banking',
    img: '/img/online-banking.png',
  },
  argTypes: {
    onClick: { action: 'clicked' },
    ribbon: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<PaymentCardProps> = args => (
  <div
    style={{
      height: '50rem',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
    }}>
    <PaymentCard {...args} />
  </div>
);

export const WithRibbon: Story<PaymentCardProps> = args => (
  <div
    style={{
      height: '50rem',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
    }}>
    <PaymentCard {...args} />
  </div>
);

WithRibbon.args = {
  ribbon: 'SAVE 20%',
};
