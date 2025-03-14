import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaProvider, Metrics } from 'react-native-safe-area-context';

import { theme } from '../../src/theme';

type ProviderProps = {
  children: React.ReactNode;
};

const initialMetrics: Metrics = {
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
  frame: { x: 0, y: 0, width: 0, height: 0 },
};

export function AppProvider({ children }: ProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider initialMetrics={initialMetrics}>
        {children}
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
