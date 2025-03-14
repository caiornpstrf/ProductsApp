import { Result } from '../Request';

export type Category = {
  slug: string;
  name: string;
  url: string;
};

export type GetCategoriesResponse = Category[];

export enum GetCategoriesError {
  GenericError = 'genericError',
}

export type GetCategoriesResult = Result<
  GetCategoriesError,
  GetCategoriesResponse
>;
