import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SneakerProvider } from './contexts/Sneaker/sneakerContext';
import { Routes } from './routes/routes';

import GlobalStyles from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <SneakerProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </SneakerProvider>
  );
}

export default App;
