import { fireEvent } from '@testing-library/react-native';

import { renderGenericComponent } from '../../../../utils';
import {
  SortModal,
  SortModalProps,
} from '../../../../../src/screens/ProductsList/components/SortModal/SortModal';
import { SortOrder, SortType } from '../../../../../src/service';

describe('SortModal tests', () => {
  const defaultProps: SortModalProps = {
    isVisible: true,
    onClose: jest.fn(),
    onPressSort: jest.fn(),
  };

  const renderComponent = (props: Partial<SortModalProps> = {}) =>
    renderGenericComponent(SortModal, defaultProps, props);

  it('should set selectedOrder to Asc when Asc is pressed', () => {
    const {
      component: { getByTestId },
    } = renderComponent();
    fireEvent.press(getByTestId('sort-modal-button-asc'));
    expect(getByTestId('sort-modal-button-asc').props.selected).toBe(true);
    expect(getByTestId('sort-modal-button-desc').props.selected).toBe(false);
  });

  it('should set selectedOrder to Desc when Desc is pressed', () => {
    const {
      component: { getByTestId },
    } = renderComponent();
    fireEvent.press(getByTestId('sort-modal-button-desc'));
    expect(getByTestId('sort-modal-button-desc').props.selected).toBe(true);
    expect(getByTestId('sort-modal-button-asc').props.selected).toBe(false);
  });

  it('should set selectedType to the first non-default type when order is selected and type is Default', () => {
    const {
      component: { getByTestId },
    } = renderComponent();

    fireEvent.press(getByTestId('sort-modal-radio-button-default'));
    fireEvent.press(getByTestId('sort-modal-button-asc'));

    const firstNonDefaultType = Object.values(SortType)[1];
    const radioButtonCircle = getByTestId(
      `sort-modal-radio-button-${firstNonDefaultType}-circle`,
    );

    expect(getByTestId('sort-modal-button-asc').props.selected).toBe(true);
    expect(radioButtonCircle.props.active).toBe(true);
  });

  it('should set selectedOrder to None when Default type is pressed', () => {
    const {
      component: { getByTestId },
    } = renderComponent();

    fireEvent.press(getByTestId('sort-modal-radio-button-default'));
    expect(getByTestId('sort-modal-button-asc').props.selected).toBe(false);
    expect(getByTestId('sort-modal-button-desc').props.selected).toBe(false);
  });

  it('should set selectedOrder to Asc when non Default type is pressed and order is None', () => {
    const {
      component: { getByTestId },
    } = renderComponent();

    fireEvent.press(getByTestId('sort-modal-radio-button-price'));
    expect(getByTestId('sort-modal-button-asc').props.selected).toBe(true);
    expect(getByTestId('sort-modal-button-desc').props.selected).toBe(false);
  });

  it('should retain selectedOrder when non Default type is pressed and order is Asc', () => {
    const {
      component: { getByTestId },
    } = renderComponent();

    fireEvent.press(getByTestId('sort-modal-button-asc'));

    expect(getByTestId('sort-modal-button-asc').props.selected).toBe(true);
    expect(getByTestId('sort-modal-button-desc').props.selected).toBe(false);

    fireEvent.press(getByTestId('sort-modal-radio-button-price'));

    expect(getByTestId('sort-modal-button-asc').props.selected).toBe(true);
    expect(getByTestId('sort-modal-button-desc').props.selected).toBe(false);
  });

  it('should retain selectedType whend changing order', () => {
    const {
      component: { getByTestId },
    } = renderComponent();

    fireEvent.press(getByTestId('sort-modal-radio-button-price'));

    expect(getByTestId('sort-modal-radio-button-price-circle').props.active).toBe(true);

    fireEvent.press(getByTestId('sort-modal-button-desc'));

    expect(getByTestId('sort-modal-button-desc').props.selected).toBe(true);
    expect(getByTestId('sort-modal-button-asc').props.selected).toBe(false);
    expect(getByTestId('sort-modal-radio-button-price-circle').props.active).toBe(true);
  });

  it('should call onPressSort with selectedType and selectedOrder when button is pressed', () => {
    const {
      component: { getByTestId },
    } = renderComponent();

    fireEvent.press(getByTestId('sort-modal-button'));
    expect(defaultProps.onPressSort).toHaveBeenCalledWith({
      type: SortType.Default,
      order: SortOrder.None,
    });
  });
});
