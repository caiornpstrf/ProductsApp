import { fireEvent } from '@testing-library/react-native';

import { renderGenericComponent } from '../../utils';
import { Button, ButtonProps } from '../../../src/components';

describe('Button tests', () => {
  const defaultProps: ButtonProps = {
    label: 'Test Button',
    onPress: jest.fn(),
    testID: 'button',
  };

  const renderComponent = (props: Partial<ButtonProps> = {}) =>
    renderGenericComponent(Button, defaultProps, props);

  it('should render the Button', () => {
    const {
      component: { getByTestId },
    } = renderComponent();
    expect(getByTestId('button')).toBeDefined();
  });

  it('should render the label inside the Button', () => {
    const {
      component: { getByText },
    } = renderComponent();
    expect(getByText('Test Button')).toBeDefined();
  });

  it('should call onPress when the Button is pressed', () => {
    const onPressMock = jest.fn();
    const {
      component: { getByTestId },
    } = renderComponent({ onPress: onPressMock });
    fireEvent.press(getByTestId('button'));
    expect(onPressMock).toHaveBeenCalled();
  });

  it('should not call onPress when the Button is disabled', () => {
    const onPressMock = jest.fn();
    const {
      component: { getByTestId },
    } = renderComponent({ onPress: onPressMock, disabled: true });
    fireEvent.press(getByTestId('button'));
    expect(onPressMock).not.toHaveBeenCalled();
  });
});
