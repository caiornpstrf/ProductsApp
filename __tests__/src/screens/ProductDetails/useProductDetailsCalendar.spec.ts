import { act, waitFor } from '@testing-library/react-native';
import { useProductDetails } from '../../../../src/screens/ProductDetails/useProductDetails';
import { renderGenericHook } from '../../../utils';

jest.mock('../../../../src/specs/NativeCalendar', () => ({
  __esModule: true,
  default: {
    setReminder: jest.fn(),
  },
}));

describe('useProductDetailsCalendar tests', () => {
  const renderHook = () => renderGenericHook(() => useProductDetails(1));

  it('Should save to calendar', async () => {
    const { result } = renderHook();

    act(() => {
      result.current.saveToCalendar(new Date(), 'name');
    });

    await waitFor(() => {
      expect(result.current.isCalendarAvailable).toBe(true);
      expect(result.current.screenError).toBeUndefined();
    });
  });
});
