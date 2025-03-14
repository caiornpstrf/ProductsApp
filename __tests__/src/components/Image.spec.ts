import { ImageProps } from 'react-native';
import { fireEvent } from '@testing-library/react-native';

import { renderGenericComponent } from '../../utils';
import { Image } from '../../../src/components';

describe('Image tests', () => {
  const defaultProps: ImageProps = {
    source: { uri: 'https://example.com/image.jpg' },
    onLoad: jest.fn(),
    testID: 'image',
  };

  const renderComponent = (props: Partial<ImageProps> = {}) =>
    renderGenericComponent(Image, defaultProps, props);

  it('should render the Image', () => {
    const {
      component: { getByTestId },
    } = renderComponent();
    expect(getByTestId('image')).toBeDefined();
  });

  it('should call onLoad when image is loaded', () => {
    const onLoadMock = jest.fn();
    const {
      component: { getByTestId },
    } = renderComponent({ onLoad: onLoadMock });
    fireEvent(getByTestId('image'), 'load');
    expect(onLoadMock).toHaveBeenCalled();
  });

  it('should show Spinner while image is loading', () => {
    const {
      component: { getByTestId },
    } = renderComponent();
    expect(getByTestId('image-spinner')).toBeDefined();
  });

  it('should hide Spinner when image is loaded', () => {
    const {
      component: { getByTestId },
    } = renderComponent();
    fireEvent(getByTestId('image'), 'load');
    expect(getByTestId('image-spinner').props.animating).toBe(false);
  });
});
