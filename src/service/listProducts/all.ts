import { Request } from '../Request';
import { config } from './constants';
import {
  ListProductsError,
  ListProductsResponse,
  ListProductsResult,
  ListProductsPayload,
} from './types';

export async function all(
  payload: ListProductsPayload,
): Promise<ListProductsResult> {
  try {
    const response = await new Request<ListProductsResponse>(
      'products',
      config(payload),
    ).send();

    return [undefined, response];
  } catch (error) {
    return [ListProductsError.GenericError, undefined];
  }
}
