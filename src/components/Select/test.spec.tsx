import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import { Select } from '.';

const opt = [
  { value: '38', label: '38' },
  { value: '39', label: '39' },
];

describe('<Select />', () => {
  it('should be render Select correctly', () => {
    renderWithTheme(<Select name="sizes" label="size" options={opt} />);

    expect(screen.getByText(/size/i)).toBeInTheDocument();
  });

  it('should be render Select with other options', () => {
    renderWithTheme(<Select data-testid="select" name="sizes" label="size" options={opt} />);

    expect(screen.getByText(/size/i)).toBeInTheDocument();

    fireEvent.change(screen.getByTestId('select'), {
      target: { value: '39' },
    });
  });
});
