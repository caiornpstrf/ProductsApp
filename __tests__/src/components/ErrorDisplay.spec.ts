import { fireEvent } from '@testing-library/react-native';

import { renderGenericComponent } from '../../utils';
import { ErrorDisplay, ErrorDisplayProps } from '../../../src/components';

describe('ErrorDisplay tests', () => {
  const defaultProps: ErrorDisplayProps = {
    title: 'Error Title',
    description: 'Error Description',
    buttonLabel: 'Retry',
    onPressButton: jest.fn(),
  };

  const renderComponent = (props: Partial<ErrorDisplayProps> = {}) =>
    renderGenericComponent(ErrorDisplay, defaultProps, props);

  it('should render the ErrorDisplay with title and description', () => {
    const {
      component: { getByText },
    } = renderComponent();
    expect(getByText('Error Title')).toBeDefined();
    expect(getByText('Error Description')).toBeDefined();
  });

  it('should render the button when buttonLabel and onPressButton are provided', () => {
    const {
      component: { getByTestId },
    } = renderComponent();
    expect(getByTestId('error-display-button')).toBeDefined();
  });

  it('should not render the button when buttonLabel and onPressButton are not provided', () => {
    const {
      component: { queryByTestId },
    } = renderComponent({ buttonLabel: undefined, onPressButton: undefined });
    expect(queryByTestId('error-display-button')).toBeNull();
  });

  it('should call onPressButton when button is pressed', () => {
    const onPressButtonMock = jest.fn();
    const {
      component: { getByTestId },
    } = renderComponent({ onPressButton: onPressButtonMock });
    fireEvent.press(getByTestId('error-display-button'));
    expect(onPressButtonMock).toHaveBeenCalled();
  });
});
