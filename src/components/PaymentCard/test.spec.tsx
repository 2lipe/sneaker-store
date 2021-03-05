import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import { PaymentCard } from '.';

describe('<PaymentCard />', () => {
  it('should be render card correctly', () => {
    renderWithTheme(<PaymentCard title="Banking Payment" img="card" />);

    expect(screen.getByText(/Banking Payment/i)).toBeInTheDocument();
  });

  it('should be render card with promotionBorder', () => {
    renderWithTheme(<PaymentCard title="Banking Payment" img="card" promotionBorder />);

    expect(screen.getByText(/Banking Payment/i)).toHaveStyle({
      border: '2px solid #61CB46;',
    });
  });
});
