import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ShoesCard, ShoesCardProps } from '.';
import { qtdOpt, sizeOpt } from '../../templates/ProductCatalog/options';

export default {
  title: 'ShoesCard',
  component: ShoesCard,
  args: {
    img: '/img/sx-sneaker.png',
    title: 'SX Sneaker',
    price: '$ 295.00',
    sizeOptions: sizeOpt,
    qtdOptions: qtdOpt,
    selectSizeLabel: 'Size',
    selectQtdLabel: 'Quantity',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<ShoesCardProps> = args => (
  <div style={{ width: '30rem', margin: '0 auto' }}>
    <ShoesCard {...args} />
  </div>
);
