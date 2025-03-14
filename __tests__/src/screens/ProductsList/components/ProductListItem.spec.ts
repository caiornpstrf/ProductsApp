import { fireEvent } from '@testing-library/react-native';
import { renderGenericComponent } from '../../../../utils';
import {
  ProductListItem,
  ProductListItemProps,
} from '../../../../../src/screens/ProductsList/components';

describe('ProductListItem tests', () => {
  const defaultProps: ProductListItemProps = {
    title: 'Test Product',
    price: 100,
    uri: 'https://example.com/image.jpg',
    onPress: jest.fn(),
    testID: 'product-list-item',
  };

  const renderComponent = (props: Partial<ProductListItemProps> = {}) =>
    renderGenericComponent(ProductListItem, defaultProps, props);

  it('should render the ProductListItem with correct title and price', () => {
    const {
      component: { getByText },
    } = renderComponent();
    expect(getByText('Test Product')).toBeDefined();
    expect(getByText('$ 100.00')).toBeDefined();
  });

  it('should call onPress when the item is pressed', () => {
    const onPressMock = jest.fn();
    const {
      component: { getByTestId },
    } = renderComponent({ onPress: onPressMock });
    fireEvent.press(getByTestId('product-list-item'));
    expect(onPressMock).toHaveBeenCalled();
  });

  it('should render the thumbnail with correct uri', () => {
    const {
      component: { getByTestId },
    } = renderComponent();
    const thumbnail = getByTestId('product-list-item-thumbnail');
    expect(thumbnail.props.source.uri).toBe('https://example.com/image.jpg');
  });
});
