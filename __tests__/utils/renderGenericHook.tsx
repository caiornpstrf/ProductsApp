import React from 'react';
import { renderHook } from '@testing-library/react-native';
import { AppProvider } from './Provider';

export function renderGenericHook<Props>(
  hook: () => Props,
  options?: { wrapper?: React.ComponentType },
) {
  return renderHook(hook, {
    wrapper: props => (
      <AppProvider {...props} />
    ),
    ...options,
  });
}
