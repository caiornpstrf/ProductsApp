import { getProductDetails } from '../../../../src/service/getProductDetails/getProductDetails';
import { Request } from '../../../../src/service/Request';
import {
  GetProductDetailsError,
  GetProductDetailsPayload,
} from '../../../../src/service/getProductDetails/types';
import { mockErrorResult, mockResponse, mockResult } from './mock';

jest.mock('../../../../src/service/Request');

describe('getProductDetails tests', () => {
  const mockSend = jest.spyOn(Request.prototype, 'send');

  it('should return product details when request is successful', async () => {
    const payload: GetProductDetailsPayload = { id: 123 };
    mockSend.mockResolvedValue(mockResponse);

    const result = await getProductDetails(payload);

    expect(result).toEqual(mockResult);
    expect(mockSend).toHaveBeenCalled();
  });

  it('should return an error when request fails', async () => {
    const payload: GetProductDetailsPayload = { id: 123 };

    mockSend.mockRejectedValue(new Error('Request failed'));

    const result = await getProductDetails(payload);

    expect(result).toEqual(
      mockErrorResult(GetProductDetailsError.GenericError),
    );
    expect(mockSend).toHaveBeenCalled();
  });
});
