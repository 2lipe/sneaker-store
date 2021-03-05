import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import { Progress } from '.';

describe('<Progress />', () => {
  it('should be render correctly', () => {
    renderWithTheme(<Progress data-testid="progress" />);

    expect(screen.getByTestId('progress')).toBeInTheDocument();
  });
});
