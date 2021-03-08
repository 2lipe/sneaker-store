import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SnackbarProvider } from 'notistack';

import { SneakerProvider } from './contexts/Sneaker/sneakerContext';
import { Routes } from './routes/routes';

import GlobalStyles from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <SneakerProvider>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3} autoHideDuration={5000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <GlobalStyles />
          <Routes />
        </SnackbarProvider>
      </ThemeProvider>
    </SneakerProvider>
  );
}

export default App;
