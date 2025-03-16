import * as Hook from '../../../../src/screens/ProductDetails/useProductDetails';
import { ProductDetails } from '../../../../src/screens/ProductDetails';
import { renderGenericComponent } from '../../../utils';
import { mockResponse } from '../../service/getProductDetails/mock';
import { act, fireEvent } from '@testing-library/react-native';

jest.mock('../../../../src/screens/ProductDetails/useProductDetails');

const baseHookProps = {
  isLoading: false,
  screenError: undefined,
  product: mockResponse,
  goBack: jest.fn(),
  retry: jest.fn(),
  isCalendarAvailable: false,
  saveToCalendar: jest.fn(),
};

const mockHookProps = (
  props?: Partial<ReturnType<typeof Hook.useProductDetails>>,
) => ({
  ...baseHookProps,
  ...props,
});

describe('ProductDetails tests', () => {
  const useProductDetailsMock = jest.spyOn(Hook, 'useProductDetails');
  const renderComponent = () =>
    renderGenericComponent(ProductDetails, { route: { params: { id: 1 } } });

  beforeEach(() => {
    jest.clearAllMocks();
    useProductDetailsMock.mockReturnValue(baseHookProps);
  });

  it('should render ProductDetails correctly', () => {
    const {
      component: { getByTestId },
    } = renderComponent();
    expect(getByTestId('product-details')).toBeDefined();
  });

  it('should render loading screen', () => {
    useProductDetailsMock.mockReturnValue(mockHookProps({ isLoading: true }));
    const {
      component: { getByTestId },
    } = renderComponent();
    expect(getByTestId('product-details-loading')).toBeDefined();
  });

  it('should render error screen', () => {
    useProductDetailsMock.mockReturnValue(
      mockHookProps({ screenError: 'genericError' }),
    );
    const {
      component: { getByTestId },
    } = renderComponent();
    expect(getByTestId('product-details-error')).toBeDefined();
  });

  it('should render error screen without retry button', () => {
    useProductDetailsMock.mockReturnValue(
      mockHookProps({ screenError: 'failedToLoadCalendar' }),
    );
    const {
      component: { getByTestId, queryByTestId },
    } = renderComponent();
    expect(getByTestId('product-details-error')).toBeDefined();
    expect(queryByTestId('error-display-button')).toBeNull();
  });

  it('should save to calendar when available', () => {
    useProductDetailsMock.mockReturnValue(
      mockHookProps({ isCalendarAvailable: true }),
    );

    const {
      component: { getByTestId },
    } = renderComponent();

    fireEvent.press(getByTestId('header-right-icon'));
    expect(getByTestId('product-details-date-picker').props.open).toBe(true);

    const date = new Date();
    act(() => {
      getByTestId('product-details-date-picker').props.onConfirm(date);
    });

    expect(getByTestId('product-details-date-picker').props.open).toBe(false);
    expect(baseHookProps.saveToCalendar).toHaveBeenCalledWith(
      date,
      mockResponse.title,
    );
  });

  it('should just close date picker when pressing cancel', () => {
    useProductDetailsMock.mockReturnValue(
      mockHookProps({ isCalendarAvailable: true }),
    );

    const {
      component: { getByTestId },
    } = renderComponent();

    fireEvent.press(getByTestId('header-right-icon'));
    expect(getByTestId('product-details-date-picker').props.open).toBe(true);

    act(() => {
      getByTestId('product-details-date-picker').props.onCancel();
    });

    expect(getByTestId('product-details-date-picker').props.open).toBe(false);
    expect(baseHookProps.saveToCalendar).not.toHaveBeenCalled();
  });
});
