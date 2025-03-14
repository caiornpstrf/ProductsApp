import { Request } from '../../../../src/service/Request';
import { GetCategoriesError, getCategories } from '../../../../src/service';
import { mockErrorResult, mockResponse, mockResult } from './mock';

jest.mock('../../../../src/service/Request');

describe('getCategories tests', () => {
  const mockSend = jest.spyOn(Request.prototype, 'send');

  it('should return categories when request is successful', async () => {
    mockSend.mockResolvedValue(mockResponse);

    const result = await getCategories();

    expect(result).toEqual(mockResult);
    expect(mockSend).toHaveBeenCalled();
  });

  it('should return an error when request fails', async () => {
    mockSend.mockRejectedValue(new Error('Request failed'));

    const result = await getCategories();

    expect(result).toEqual(mockErrorResult(GetCategoriesError.GenericError));
    expect(mockSend).toHaveBeenCalled();
  });
});
