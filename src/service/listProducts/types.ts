import { Result } from '../Request';

export type Product = {
  id: number;
  title: string;
  price: number;
  images: string[];
};

export type ListProductsPayload = {
  page: number;
};

export type ListProducyByCategoryPayload = ListProductsPayload & {
  slug: string;
};

export type ListProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export enum ListProductsError {
  GenericError = 'generic.error',
}

export type ListProductsResult = Result<
  ListProductsError,
  ListProductsResponse
>;
