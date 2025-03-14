import {
  GetCategoriesError,
  GetCategoriesResponse,
  GetCategoriesResult,
} from '../../../../src/service';

export const mockResponse: GetCategoriesResponse = [
  { slug: 'category1', name: 'Category 1', url: 'category-1' },
  { slug: 'category2', name: 'Category 2', url: 'category-2' },
];

export const mockResult: GetCategoriesResult = [undefined, mockResponse];

export const mockErrorResult = (
  error: GetCategoriesError,
): GetCategoriesResult => [error, undefined];
