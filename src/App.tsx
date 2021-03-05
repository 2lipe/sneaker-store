import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SneakerProvider } from './contexts/Sneaker/sneakerContext';
import { Catalog } from './pages/Catalog';

import GlobalStyles from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <SneakerProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Catalog />
      </ThemeProvider>
    </SneakerProvider>
  );
}

export default App;
