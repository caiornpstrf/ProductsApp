import { useProductsList } from '../../../../src/screens/ProductsList/useProductsList';
import {
  ListProductsError,
  ListProducts,
  getCategories,
  GetCategoriesError,
  SortOrder,
  SortType,
} from '../../../../src/service';
import { renderGenericHook } from '../../../utils';
import {
  mockResult as mockListResult,
  mockResponse as mockListResponse,
  mockErrorResult as mockListErrorResult,
} from '../../service/listProducts/mock';
import {
  mockResult as mockCategoriesResult,
  mockResponse as mockCategoriesResponse,
  mockErrorResult as mockCategoriesErrorResult,
} from '../../service/getCategories/mock';
import { act, waitFor } from '@testing-library/react-native';
import { navigation } from '../../../__mocks__/@react-navigation/native';
import { Screens } from '../../../../src/navigation';

jest.mock('../../../../src/service');

describe('useProductsList initialProductsState tests', () => {
  const mockGetCategories = getCategories as jest.MockedFunction<
    typeof getCategories
  >;
  const mockListAll = ListProducts.all as jest.MockedFunction<
    typeof ListProducts.all
  >;
  const mockListByCategory = ListProducts.byCategory as jest.MockedFunction<
    typeof ListProducts.byCategory
  >;

  const renderHook = () => renderGenericHook(useProductsList);

  beforeEach(() => {
    jest.clearAllMocks();
    mockListAll.mockResolvedValue(mockListResult);
    mockListByCategory.mockResolvedValue(mockListResult);
    mockGetCategories.mockResolvedValue(mockCategoriesResult);
  });

  it('Should render the default success state', async () => {
    const { result } = renderHook();

    await waitFor(() => {
      expect(result.current.categories).toStrictEqual(mockCategoriesResponse);
      expect(result.current.products).toStrictEqual(mockListResponse.products);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.isProductsLoading).toBe(false);
      expect(mockGetCategories).toHaveBeenCalled();
      expect(mockListAll).toHaveBeenCalled();
      expect(mockListByCategory).not.toHaveBeenCalled();
    });

    act(() => {
      result.current.onChangeCategory({
        name: 'Groceries',
        slug: 'groceries',
        url: '',
      });
    });

    await waitFor(() => {
      expect(result.current.products).toStrictEqual(mockListResponse.products);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.isProductsLoading).toBe(false);
      expect(mockListByCategory).toHaveBeenCalled();
    });

    act(() => {
      result.current.onSort({ order: SortOrder.Asc, type: SortType.Price });
    });

    await waitFor(() => {
      expect(result.current.products).toStrictEqual(mockListResponse.products);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.isProductsLoading).toBe(false);
      expect(mockListByCategory).toHaveBeenCalledTimes(2);
    });
  });

  it('Should handle categories error', async () => {
    mockGetCategories.mockResolvedValue(
      mockCategoriesErrorResult(GetCategoriesError.GenericError),
    );
    const { result } = renderHook();

    await waitFor(() => {
      expect(result.current.screenError).toBe(GetCategoriesError.GenericError);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.isProductsLoading).toBe(false);
    });
  });

  it('Should handle products error', async () => {
    mockListAll.mockResolvedValue(
      mockListErrorResult(ListProductsError.GenericError),
    );
    const { result } = renderHook();

    await waitFor(() => {
      expect(result.current.screenError).toBe(undefined);
      expect(result.current.productsError).toBe(ListProductsError.GenericError);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.isProductsLoading).toBe(false);
    });
  });

  it('Should not change category if already selected', async () => {
    const { result } = renderHook();

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.isProductsLoading).toBe(false);
      expect(mockListAll).toHaveBeenCalled();
    });

    act(() => {
      result.current.onChangeCategory({
        name: 'All',
        slug: '',
        url: '',
      });
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.isProductsLoading).toBe(false);
      expect(mockListAll).toHaveBeenCalledTimes(1);
    });
  });

  it('Should go to product details', async () => {
    const { result } = renderHook();

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.isProductsLoading).toBe(false);
    });

    act(() => {
      result.current.goToProductDetails(mockListResponse.products[0]);
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.isProductsLoading).toBe(false);
      expect(navigation.navigate).toHaveBeenCalledWith(Screens.ProductDetails, {
        id: mockListResponse.products[0].id,
      });
    });
  });

  it('Should not fetch more products if there are no more pages', async () => {
    mockListAll.mockResolvedValue([
      undefined,
      {
        ...mockListResponse,
        total: 2,
      },
    ]);
    const { result } = renderHook();

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.isProductsLoading).toBe(false);
    });

    act(() => {
      result.current.fetchProducts();
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.isProductsLoading).toBe(false);
      expect(mockListAll).toHaveBeenCalledTimes(1);
    });
  });
});
