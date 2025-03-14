import { Request } from '../Request';
import { config } from './constants';
import {
  ListProductsError,
  ListProductsResponse,
  ListProductsResult,
  ListProducyByCategoryPayload,
} from './types';

export async function byCategory({
  slug,
  page,
}: ListProducyByCategoryPayload): Promise<ListProductsResult> {
  try {
    const response = await new Request<ListProductsResponse>(
      `products/category/${slug}`,
      config({ page }),
    ).send();

    return [undefined, response];
  } catch (error) {
    return [ListProductsError.GenericError, undefined];
  }
}
