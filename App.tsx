import React from 'react';
import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components/native';
import { SafeAreaProvider, Metrics } from 'react-native-safe-area-context';

import { theme } from './src/theme';
import { StaticStack } from './src/screens';

const initialMetrics: Metrics = {
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
  frame: { x: 0, y: 0, width: 0, height: 0 },
};

function App() {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={theme.colors.primary}
      />
      <ThemeProvider theme={theme}>
        <SafeAreaProvider initialMetrics={initialMetrics}>
          <StaticStack />
        </SafeAreaProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
