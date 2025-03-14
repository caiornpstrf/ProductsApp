import { fireEvent } from '@testing-library/react-native';

import { renderGenericComponent } from '../../../../utils';
import {
  CategoryCarousel,
  CategoryCarouselProps,
} from '../../../../../src/screens/ProductsList/components';
import { Category } from '../../../../../src/service';

describe('CategoryCarousel tests', () => {
  const mockCategories: Category[] = [
    { name: 'Category 1', slug: 'category-1', url: '' },
    { name: 'Category 2', slug: 'category-2', url: '' },
  ];

  const defaultProps: CategoryCarouselProps = {
    data: mockCategories,
    onPressItem: jest.fn(),
  };

  const renderComponent = (props: Partial<CategoryCarouselProps> = {}) =>
    renderGenericComponent(CategoryCarousel, defaultProps, props);

  it('should render the CategoryCarousel with categories', () => {
    const {
      component: { getByText },
    } = renderComponent();
    expect(getByText('Category 1')).toBeDefined();
    expect(getByText('Category 2')).toBeDefined();
  });

  it('should call onPressItem with the selected category when a category is pressed', () => {
    const onPressItemMock = jest.fn();
    const {
      component: { getByText },
    } = renderComponent({ onPressItem: onPressItemMock });

    fireEvent.press(getByText('Category 2'));
    expect(onPressItemMock).toHaveBeenCalledWith(mockCategories[1]);
  });

  it('should set the selected category when a category is pressed', () => {
    const {
      component: { getByText },
    } = renderComponent();

    fireEvent.press(getByText('Category 2'));
    expect(getByText('Category 2').props.active).toBe(true);
    expect(getByText('Category 1').props.active).toBe(false);
  });

  it('should render the first category as selected by default', () => {
    const {
      component: { getByText },
    } = renderComponent();

    expect(getByText('Category 1').props.active).toBe(true);
    expect(getByText('Category 2').props.active).toBe(false);
  });
});
