import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Category,
  ListProducts,
  getCategories,
  Product,
  SortType,
  SortOrder,
} from '../../service';
import { Screens } from '../../navigation';
import { SortItem } from './components';

type ProductsState = {
  category: Category;
  products: Product[];
  hasMorePages: boolean;
  nextPage: number;
  sort: SortType;
  order: SortOrder;
};

const initialProductsState: ProductsState = {
  category: {
    name: 'All',
    slug: '',
    url: '',
  },
  products: [],
  hasMorePages: true,
  nextPage: 0,
  sort: SortType.Default,
  order: SortOrder.None,
};

export function useProductsList() {
  const { navigate } = useNavigation();

  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProductsLoading, setIsProductsLoading] = useState(true);

  const [productsState, setProductsState] =
    useState<ProductsState>(initialProductsState);

  const fetchCategories = async () => {
    const [error, response] = await getCategories();

    if (error) {
      // Handle error
      return;
    }

    setCategories(response);

    return response;
  };

  // Handles pagination internally to fetching more on rerenders
  const fetchProducts = async () => {
    if (!productsState.hasMorePages) {
      return;
    }
    setIsProductsLoading(true);

    const { category, products, nextPage: page, sort, order } = productsState;
    const [error, response] = category.slug
      ? await ListProducts.byCategory({
          slug: category.slug,
          page,
          sort,
          order,
        })
      : await ListProducts.all({ page, sort, order });

    if (error) {
      // Handle error
      return;
    }

    const nextProducts = [...products, ...response.products];
    setProductsState({
      category,
      products: nextProducts,
      hasMorePages: nextProducts.length < response.total,
      nextPage: page + 1,
      sort,
      order,
    });
    setIsProductsLoading(false);
  };

  const resetState = () => {
    setProductsState(initialProductsState);
  };

  const init = async () => {
    setIsLoading(true);
    resetState();
    await fetchCategories();
    setIsLoading(false);
  };

  const goToProductDetails = (product: Product) => {
    navigate(Screens.ProductDetails, { id: product.id });
  };

  const onChangeCategory = (category: Category) => {
    if (productsState.category.slug === category.slug) {
      return;
    }

    setProductsState({
      ...initialProductsState,
      category,
    });
  };

  const onSort = (sortItem: SortItem) => {
    const { type, order } = sortItem;

    setProductsState({
      ...initialProductsState,
      category: productsState.category,
      sort: type,
      order,
    });
  };

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsState.category, productsState.sort, productsState.order]);

  return {
    isLoading,
    isProductsLoading,
    categories,
    products: productsState.products,
    goToProductDetails,
    onChangeCategory,
    onListEndReached: () => fetchProducts(),
    onSort,
  };
}
