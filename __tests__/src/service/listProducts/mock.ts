import {
  ListProductsError,
  ListProductsResponse,
  ListProductsResult,
} from '../../../../src/service';

export const mockResponse: ListProductsResponse = {
  limit: 10,
  skip: 0,
  total: 20,
  products: [
    {
      id: 0,
      title: '',
      price: 0,
      images: [],
    },
    {
      id: 1,
      title: '',
      price: 0,
      images: [],
    },
  ],
};

export const mockResult: ListProductsResult = [undefined, mockResponse];

export const mockErrorResult = (
  error: ListProductsError,
): ListProductsResult => [error, undefined];
