import { fireEvent } from '@testing-library/react-native';
import {
  PillButton,
  PillButtonProps,
} from '../../../src/components/PillButton';
import { renderGenericComponent } from '../../utils';

describe('PillButton tests', () => {
  const defaultProps: PillButtonProps = {
    label: 'Test Label',
    onPress: jest.fn(),
    testID: 'pill-button',
    disabled: false,
    active: false,
  };

  const renderComponent = (props: Partial<PillButtonProps> = {}) =>
    renderGenericComponent(PillButton, defaultProps, props);

  it('should render the PillButton with label', () => {
    const {
      component: { getByTestId },
    } = renderComponent();
    expect(getByTestId('pill-button')).toBeDefined();
    expect(getByTestId('pill-button-text').props.children).toBe('Test Label');
  });

  it('should call onPress when pressed', () => {
    const onPressMock = jest.fn();
    const {
      component: { getByTestId },
    } = renderComponent({ onPress: onPressMock });
    fireEvent.press(getByTestId('pill-button'));
    expect(onPressMock).toHaveBeenCalled();
  });

  it('should render active PillButton', () => {
    const {
      component: { getByTestId },
    } = renderComponent({ active: true });
    expect(getByTestId('pill-button-container').props.active).toBe(true);
    expect(getByTestId('pill-button-text').props.active).toBe(true);
  });

  it('should render inactive PillButton', () => {
    const {
      component: { getByTestId },
    } = renderComponent({ active: false });
    expect(getByTestId('pill-button-container').props.active).toBe(false);
    expect(getByTestId('pill-button-text').props.active).toBe(false);
  });

  it('should render disabled PillButton', () => {
    const {
      component: { getByTestId },
    } = renderComponent({ disabled: true });
    expect(getByTestId('pill-button-container').props.disabled).toBe(true);
  });

  it('should not call onPress when disabled', () => {
    const onPressMock = jest.fn();
    const {
      component: { getByTestId },
    } = renderComponent({ onPress: onPressMock, disabled: true });
    fireEvent.press(getByTestId('pill-button'));
    expect(onPressMock).not.toHaveBeenCalled();
  });
});
