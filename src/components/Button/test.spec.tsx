import React from 'react';

import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import { Button } from '.';

describe('<Button />', () => {
  it('should be render the medium size by default', () => {
    renderWithTheme(<Button>Add to cart</Button>);

    expect(screen.getByRole('button', { name: /Add to cart/i })).toHaveStyle({
      height: '4rem',
      width: '27rem',
    });
  });

  it('should be render the large size', () => {
    renderWithTheme(<Button size="large">Add to cart</Button>);

    expect(screen.getByRole('button', { name: /Add to cart/i })).toHaveStyle({
      height: '4rem',
      width: '30rem',
    });
  });
});
