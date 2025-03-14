import * as Hook from '../../../../src/screens/ProductDetails/useProductDetails';
import { ProductDetails } from '../../../../src/screens/ProductDetails';
import { renderGenericComponent } from '../../../utils';
import { mockResponse } from '../../service/getProductDetails/mock';

jest.mock('../../../../src/screens/ProductDetails/useProductDetails');

describe('ProductDetails tests', () => {
  const useProductDetailsMock = jest.spyOn(Hook, 'useProductDetails');
  const renderComponent = () =>
    renderGenericComponent(ProductDetails, { route: { params: { id: 1 } } });

  beforeEach(() => {
    useProductDetailsMock.mockReturnValue({
      isLoading: false,
      screenError: undefined,
      product: mockResponse,
      goBack: jest.fn(),
      retry: jest.fn(),
    });
  });

  it('should render ProductDetails correctly', () => {
    const {
      component: { getByTestId },
    } = renderComponent();
    expect(getByTestId('product-details')).toBeDefined();
  });

  it('should render loading screen', () => {
    useProductDetailsMock.mockReturnValue({
      isLoading: true,
      screenError: undefined,
      product: undefined,
      goBack: jest.fn(),
      retry: jest.fn(),
    });
    const {
      component: { getByTestId },
    } = renderComponent();
    expect(getByTestId('product-details-loading')).toBeDefined();
  });

  it('should render error screen', () => {
    useProductDetailsMock.mockReturnValue({
      isLoading: false,
      screenError: 'genericError',
      product: undefined,
      goBack: jest.fn(),
      retry: jest.fn(),
    });
    const {
      component: { getByTestId },
    } = renderComponent();
    expect(getByTestId('product-details-error')).toBeDefined();
  });
});
