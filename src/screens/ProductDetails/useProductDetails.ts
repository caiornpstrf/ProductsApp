import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { GetProductDetailsResponse, getProductDetails } from '../../service';
import { Calendar } from '../../specs';

enum ScreenErrors {
  CalendarNotAvailable = 'failedToLoadCalendar',
}

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

  const saveToCalendar = (date: Date, name: string) => {
    if (Calendar) {
      Calendar.setReminder(date.getTime(), name);
      return;
    }
    setScreenError(ScreenErrors.CalendarNotAvailable);
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
    isCalendarAvailable: !!Calendar,
    saveToCalendar,
  };
}
