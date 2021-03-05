import React from 'react';
import { screen } from '@testing-library/react';
import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack';

import { renderWithTheme } from '../../utils/tests/helpers';

import { Chip } from '.';

describe('<Chip />', () => {
  it('should be render the button with text', () => {
    const { container } = renderWithTheme(<Chip text="Back" />);

    expect(screen.getByText(/Back/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be render an icon version', () => {
    renderWithTheme(<Chip icon={<ArrowBack data-testid="icon" />} text="Back" />);

    expect(screen.getByText(/Back/i)).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
