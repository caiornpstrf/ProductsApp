import { Request } from '../Request';
import {
  GetProductDetailsError,
  GetProductDetailsPayload,
  GetProductDetailsResponse,
  GetProductDetailsResult,
} from './types';

export async function getProductDetails({
  id,
}: GetProductDetailsPayload): Promise<GetProductDetailsResult> {
  try {
    const response = await new Request<GetProductDetailsResponse>(
      `products/${id}`,
    ).send();

    return [undefined, response];
  } catch (error) {
    return [GetProductDetailsError.GenericError, undefined];
  }
}
