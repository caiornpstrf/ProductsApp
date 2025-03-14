import { Request } from '../Request';
import { config } from './config';
import {
  ListProductsError,
  ListProductsResponse,
  ListProductsResult,
  ListProducyByCategoryPayload,
} from './types';

export async function byCategory({
  slug,
  ...rest
}: ListProducyByCategoryPayload): Promise<ListProductsResult> {
  try {
    const response = await new Request<ListProductsResponse>(
      `products/category/${slug}`,
      config(rest),
    ).send();

    return [undefined, response];
  } catch (error) {
    return [ListProductsError.GenericError, undefined];
  }
}
