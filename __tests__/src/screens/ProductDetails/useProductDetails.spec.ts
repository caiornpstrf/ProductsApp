import { act, waitFor } from '@testing-library/react-native';

import { useProductDetails } from '../../../../src/screens/ProductDetails/useProductDetails';
import {
  GetProductDetailsError,
  getProductDetails,
} from '../../../../src/service';
import { renderGenericHook } from '../../../utils';
import {
  mockResult,
  mockResponse,
  mockErrorResult,
} from '../../service/getProductDetails/mock';

jest.mock('../../../../src/service');

describe('useProductDetails tests', () => {
  const mockGetProductDetails = getProductDetails as jest.MockedFunction<
    typeof getProductDetails
  >;
  const renderHook = () => renderGenericHook(() => useProductDetails(1));

  beforeEach(() => {
    jest.clearAllMocks();
    mockGetProductDetails.mockResolvedValue(mockResult);
  });

  afterEach(() => {
    jest.resetModules();
  });

  it('Should render hook successfully', async () => {
    const { result } = renderHook();

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.product).toEqual(mockResponse);
    });
  });

  it('Should handle error', async () => {
    mockGetProductDetails.mockResolvedValueOnce(
      mockErrorResult(GetProductDetailsError.GenericError),
    );

    const { result } = renderHook();

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.screenError).toBe(
        GetProductDetailsError.GenericError,
      );
    });
  });

  it('Should handle save to calendar error', async () => {
    const { result } = renderHook();

    act(() => {
      result.current.saveToCalendar(new Date(), 'name');
    });

    await waitFor(() => {
      expect(result.current.isCalendarAvailable).toBe(false);
      expect(result.current.screenError).toBe('failedToLoadCalendar');
    });
  });
});
