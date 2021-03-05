import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import { Ribbon } from '.';

describe('<Ribbon />', () => {
  it('should be render the text correctly', () => {
    renderWithTheme(<Ribbon>SAVE 10%</Ribbon>);

    expect(screen.getByText(/SAVE 10%/i)).toBeInTheDocument();
  });
});
