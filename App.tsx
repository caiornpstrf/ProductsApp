import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'react-native';

import { theme } from './src/theme';
import { Navigation } from './src/navigation';

function App() {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={theme.colors.primary}
      />
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </>
  );
}

export default App;
