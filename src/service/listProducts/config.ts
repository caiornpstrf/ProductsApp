import { ListProductsPayload, SortOrder, SortType } from '.';

const limit = 10;
export const config = ({ page, sort, order }: ListProductsPayload) => {
  const params = {
    limit: limit.toString(),
    select: 'id,title,price,images',
    skip: (page * limit).toString(),
  };

  if (sort !== SortType.Default) {
    Object.assign(params, {
      sortBy: sort,
    });
  }

  if (order !== SortOrder.None) {
    Object.assign(params, {
      order,
    });
  }

  return params;
};
