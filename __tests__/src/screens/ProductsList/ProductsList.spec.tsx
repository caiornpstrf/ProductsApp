import React from 'react';
import { View as MockView } from 'react-native';

import { act, fireEvent } from '@testing-library/react-native';
import * as Hook from '../../../../src/screens/ProductsList/useProductsList';
import { ProductsList } from '../../../../src/screens/ProductsList';
import { renderGenericComponent } from '../../../utils';
import { mockResponse as mockCategoriesResponse } from '../../service/getCategories/mock';
import { mockResponse as mockListResponse } from '../../service/listProducts/mock';
import { SortOrder, SortType } from '../../../../src/service';

jest.mock('../../../../src/screens/ProductsList/useProductsList');
jest.mock('../../../../src/screens/ProductsList/components/SortModal', () => ({
  SortModal: (props: any) => <MockView {...props} />,
}));

type HookReturnType = ReturnType<typeof Hook.useProductsList>;

const defaultHookReturnValue: HookReturnType = {
  isLoading: false,
  isProductsLoading: false,
  screenError: undefined,
  productsError: undefined,
  categories: mockCategoriesResponse,
  products: mockListResponse.products,
  goToProductDetails: jest.fn(),
  onChangeCategory: jest.fn(),
  fetchProducts: jest.fn(),
  onSort: jest.fn(),
  retry: jest.fn(),
};

describe('ProductsList tests', () => {
  const useProductsListMock = jest.spyOn(Hook, 'useProductsList');
  const renderComponent = () =>
    renderGenericComponent(ProductsList, {}).component;

  beforeEach(() => {
    useProductsListMock.mockReturnValue(defaultHookReturnValue);
  });

  it('should render component', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('products-list')).toBeDefined();

    fireEvent.press(
      getByTestId(`product-list-item-${mockListResponse.products[0].id}`),
    );
    expect(defaultHookReturnValue.goToProductDetails).toHaveBeenCalledWith(
      mockListResponse.products[0],
    );
  });

  it('should render loading screen', () => {
    useProductsListMock.mockReturnValueOnce({
      ...defaultHookReturnValue,
      isLoading: true,
    });
    const { getByTestId } = renderComponent();
    expect(getByTestId('products-list-loading')).toBeDefined();
  });

  it('should render error screen', async () => {
    useProductsListMock.mockReturnValueOnce({
      ...defaultHookReturnValue,
      screenError: 'genericError',
    });
    const { getByTestId } = renderComponent();
    expect(getByTestId('products-list-error')).toBeDefined();

    fireEvent.press(getByTestId('error-display-button'));
    expect(defaultHookReturnValue.retry).toHaveBeenCalled();
  });

  it('should render products error screen', async () => {
    useProductsListMock.mockReturnValueOnce({
      ...defaultHookReturnValue,
      products: [],
      productsError: 'genericError',
    });
    const { getByTestId } = renderComponent();
    expect(getByTestId('error-display')).toBeDefined();
  });

  it('should interact with modal', () => {
    const { getByTestId } = renderComponent();

    fireEvent.press(getByTestId('header-right-icon'));
    expect(getByTestId('products-list-sort-modal').props.isVisible).toBe(true);

    act(() => {
      getByTestId('products-list-sort-modal').props.onClose();
      getByTestId('products-list-sort-modal').props.onPressSort({
        type: SortType.Default,
        order: SortOrder.None,
      });
    });
    expect(getByTestId('products-list-sort-modal').props.isVisible).toBe(false);
    expect(defaultHookReturnValue.onSort).toHaveBeenCalledWith({
      type: SortType.Default,
      order: SortOrder.None,
    });
  });

  it('should change category', () => {
    const { getByTestId } = renderComponent();
    fireEvent.press(
      getByTestId(`category-carousel-${mockCategoriesResponse[1].slug}`),
    );
    expect(defaultHookReturnValue.onChangeCategory).toHaveBeenCalledWith(
      mockCategoriesResponse[1],
    );
  });

  it('should render no list empty component while fetching products', () => {
    useProductsListMock.mockReturnValueOnce({
      ...defaultHookReturnValue,
      products: [],
      isProductsLoading: true,
    });
    const { getByTestId } = renderComponent();
    expect(getByTestId('products-list-nothing')).toBeDefined();
  });
});
