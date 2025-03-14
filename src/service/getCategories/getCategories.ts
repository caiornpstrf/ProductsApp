import { Request } from '../Request';
import {
  GetCategoriesError,
  GetCategoriesResponse,
  GetCategoriesResult,
} from './types';

export async function getCategories(): Promise<GetCategoriesResult> {
  try {
    const response = await new Request<GetCategoriesResponse>(
      'products/categories',
    ).send();

    return [undefined, response];
  } catch (error) {
    return [GetCategoriesError.GenericError, undefined];
  }
}
