import { fireEvent } from '@testing-library/react-native';
import { RadioButton, RadioButtonProps } from '../../../src/components';
import { renderGenericComponent } from '../../utils';

describe('RadioButton tests', () => {
  const defaultProps: RadioButtonProps = {
    active: false,
    label: 'Test Label',
    onPress: jest.fn(),
    testID: 'radio-button',
  };

  const renderComponent = (props: Partial<RadioButtonProps> = {}) =>
    renderGenericComponent(RadioButton, defaultProps, props);

  it('should render the RadioButton with label', () => {
    const {
      component: { getByTestId },
    } = renderComponent();
    expect(getByTestId('radio-button')).toBeDefined();
  });

  it('should call onPress when pressed', () => {
    const onPressMock = jest.fn();
    const {
      component: { getByTestId },
    } = renderComponent({ onPress: onPressMock });
    fireEvent.press(getByTestId('radio-button'));
    expect(onPressMock).toHaveBeenCalled();
  });

  it('should render active RadioButton', () => {
    const {
      component: { getByTestId },
    } = renderComponent({ active: true });
    expect(getByTestId('radio-button-circle').props.active).toBe(true);
    expect(getByTestId('radio-button-circle-inner').props.active).toBe(true);
  });

  it('should render inactive RadioButton', () => {
    const {
      component: { getByTestId },
    } = renderComponent({ active: false });
    expect(getByTestId('radio-button-circle').props.active).toBe(false);
    expect(getByTestId('radio-button-circle-inner').props.active).toBe(false);
  });
});
