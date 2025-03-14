import { useEffect, useState } from 'react';

import { GetProductDetailsResponse, getProductDetails } from '../../service';
import { useNavigation } from '@react-navigation/native';

export function useProductDetails(id: number) {
  const { goBack } = useNavigation();

  const [product, setProduct] = useState<GetProductDetailsResponse>();
  const [isLoading, setIsLoading] = useState(true);
  const [screenError, setScreenError] = useState<string>();

  const fetchProduct = async () => {
    setIsLoading(true);
    const [error, response] = await getProductDetails({ id });

    if (error) {
      setScreenError(error);
      setIsLoading(false);
      return;
    }

    setProduct(response);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    screenError,
    product,
    goBack,
    retry: fetchProduct,
  };
}
