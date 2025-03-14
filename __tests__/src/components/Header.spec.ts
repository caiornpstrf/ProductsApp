import { fireEvent } from '@testing-library/react-native';

import { renderGenericComponent } from '../../utils';
import { Header, HeaderProps } from '../../../src/components';

describe('Header tests', () => {
  const defaultProps: HeaderProps = {
    title: 'Test Title',
    onPressBack: jest.fn(),
    rightIcon: {
      name: 'test-icon',
      onPress: jest.fn(),
    },
  };

  const renderComponent = (props: Partial<HeaderProps> = {}) =>
    renderGenericComponent(Header, defaultProps, props);

  it('should render the title', () => {
    const {
      component: { getByTestId },
    } = renderComponent();
    expect(getByTestId('header-center-text')).toHaveTextContent('Test Title');
  });

  it('should call onPressBack when back icon is pressed', () => {
    const onPressBackMock = jest.fn();
    const {
      component: { getByTestId },
    } = renderComponent({ onPressBack: onPressBackMock });
    fireEvent.press(getByTestId('header-left-icon'));
    expect(onPressBackMock).toHaveBeenCalled();
  });

  it('should render the right icon and call onPress when pressed', () => {
    const onPressRightIconMock = jest.fn();
    const {
      component: { getByTestId },
    } = renderComponent({
      rightIcon: { name: 'test-icon', onPress: onPressRightIconMock },
    });
    fireEvent.press(getByTestId('header-left-right'));
    expect(onPressRightIconMock).toHaveBeenCalled();
  });

  it('should not render the back icon if onPressBack is not provided', () => {
    const {
      component: { queryByTestId },
    } = renderComponent({ onPressBack: undefined });
    expect(queryByTestId('header-left-icon')).toBeNull();
  });

  it('should not render the right icon if rightIcon is not provided', () => {
    const {
      component: { queryByTestId },
    } = renderComponent({ rightIcon: undefined });
    expect(queryByTestId('header-left-right')).toBeNull();
  });
});
