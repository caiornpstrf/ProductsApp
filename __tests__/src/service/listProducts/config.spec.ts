import { config } from '../../../../src/service/listProducts/config';
import {
  ListProductsPayload,
  SortOrder,
  SortType,
} from '../../../../src/service/listProducts';

describe('config', () => {
  it('should return default params when sort and order are default', () => {
    const payload: ListProductsPayload = {
      page: 1,
      sort: SortType.Default,
      order: SortOrder.None,
    };

    const result = config(payload);

    expect(result).toEqual({
      limit: '10',
      select: 'id,title,price,images',
      skip: '10',
    });
  });

  it('should include sortBy when sort is not default', () => {
    const payload: ListProductsPayload = {
      page: 1,
      sort: SortType.Price,
      order: SortOrder.None,
    };

    const result = config(payload);

    expect(result).toEqual({
      limit: '10',
      select: 'id,title,price,images',
      skip: '10',
      sortBy: SortType.Price,
    });
  });

  it('should include order when order is not none', () => {
    const payload: ListProductsPayload = {
      page: 1,
      sort: SortType.Default,
      order: SortOrder.Asc,
    };

    const result = config(payload);

    expect(result).toEqual({
      limit: '10',
      select: 'id,title,price,images',
      skip: '10',
      order: SortOrder.Asc,
    });
  });

  it('should include both sortBy and order when both are provided', () => {
    const payload: ListProductsPayload = {
      page: 1,
      sort: SortType.Price,
      order: SortOrder.Desc,
    };

    const result = config(payload);

    expect(result).toEqual({
      limit: '10',
      select: 'id,title,price,images',
      skip: '10',
      sortBy: SortType.Price,
      order: SortOrder.Desc,
    });
  });
});
