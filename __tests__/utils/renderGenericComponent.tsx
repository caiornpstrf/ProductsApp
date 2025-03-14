import React from 'react';
import { render } from '@testing-library/react-native';
import { AppProvider } from './Provider';

export function renderGenericComponent<ComponentProps extends object>(
  Component: React.FC<ComponentProps>,
  defaultProps: ComponentProps,
  _props?: Partial<ComponentProps>,
) {
  const props: ComponentProps = {
    ...defaultProps,
    ..._props,
  };
  return {
    component: render(<Component {...props} />, {
      wrapper: rest => (
        <AppProvider {...rest} />
      ),
    }),
    props,
  };
}
