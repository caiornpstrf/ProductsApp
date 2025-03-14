import { Request } from '../../../../src/service/Request';
import {
  ListProductsError,
  ListProducyByCategoryPayload,
  ListProducts,
  SortType,
  SortOrder,
} from '../../../../src/service';
import { mockErrorResult, mockResponse, mockResult } from './mock';

jest.mock('../../../../src/service/Request');

describe('listProducts.byCategory tests', () => {
  const mockSend = jest.spyOn(Request.prototype, 'send');

  it('should return products when request is successful', async () => {
    mockSend.mockResolvedValue(mockResponse);

    const payload: ListProducyByCategoryPayload = {
      slug: 'category',
      page: 0,
      sort: SortType.Default,
      order: SortOrder.None,
    };
    const result = await ListProducts.byCategory(payload);

    expect(result).toEqual(mockResult);
    expect(mockSend).toHaveBeenCalled();
  });

  it('should return an error when request fails', async () => {
    mockSend.mockRejectedValue(new Error('Request failed'));

    const payload: ListProducyByCategoryPayload = {
      slug: 'category',
      page: 0,
      sort: SortType.Default,
      order: SortOrder.None,
    };
    const result = await ListProducts.byCategory(payload);

    expect(result).toEqual(mockErrorResult(ListProductsError.GenericError));
    expect(mockSend).toHaveBeenCalled();
  });
});
