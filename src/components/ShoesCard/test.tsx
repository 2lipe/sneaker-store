/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import { ShoesCard } from '.';
import { qtdOpt, sizeOpt } from '../../templates/ProductCatalog/options';

const props = {
  img: '/img/sx-sneaker.png',
  title: 'SX Sneaker',
  price: '$ 295.00',
  sizeOptions: sizeOpt,
  qtdOptions: qtdOpt,
  selectSizeLabel: 'Size',
  selectQtdLabel: 'Quantity',
};

describe('<ShoesCard />', () => {
  it('should be render correctly', () => {
    // @ts-ignore
    renderWithTheme(<ShoesCard {...props} />);

    expect(screen.getByRole('heading', { name: props.title })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: props.price })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute('src', props.img);
  });

  it('should be render price in label', () => {
    // @ts-ignore
    renderWithTheme(<ShoesCard {...props} />);

    const price = screen.getByText('$ 295.00');

    expect(price).not.toHaveStyle({ textDecoration: 'line-through' });
  });
});
