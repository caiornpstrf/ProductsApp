const limit = 10;
export const config = ({ page }: { page: number }) => ({
  limit: limit.toString(),
  select: 'id,title,price,images',
  skip: (page * limit).toString(),
});
