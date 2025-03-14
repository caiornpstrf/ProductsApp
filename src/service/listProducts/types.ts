import { Result } from '../Request';

export enum SortType {
  Default = 'default',
  Rating = 'rating',
  Price = 'price',
}

export enum SortOrder {
  None = 'none',
  Asc = 'asc',
  Desc = 'desc',
}

export type Product = {
  id: number;
  title: string;
  price: number;
  images: string[];
};

export type ListProductsPayload = {
  page: number;
  sort: SortType;
  order: SortOrder;
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
