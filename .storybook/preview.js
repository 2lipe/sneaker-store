import { ThemeProvider } from 'styled-components';
import { SnackbarProvider } from 'notistack';

import { SneakerProvider } from '../src/contexts/Sneaker/sneakerContext';

import GlobalStyles from '../src/styles/global';
import theme from '../src/styles/theme';

export const decorators = [
  Story => (
    <SneakerProvider>
      <SnackbarProvider maxSnack={3} autoHideDuration={5000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Story />
        </ThemeProvider>
      </SnackbarProvider>
    </SneakerProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
