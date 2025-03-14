import React from 'react';
import { Text } from 'react-native';
import { fireEvent } from '@testing-library/react-native';

import { renderGenericComponent } from '../../utils';
import { Modal, ModalProps } from '../../../src/components';

describe('Modal tests', () => {
  const defaultProps: ModalProps = {
    isVisible: true,
    onClose: jest.fn(),
    children: <Text>Test Content</Text>,
    testID: 'modal',
  };

  const renderComponent = (props: Partial<ModalProps> = {}) =>
    renderGenericComponent(Modal, defaultProps, props);

  it('should render the Modal when visible', () => {
    const {
      component: { getByTestId },
    } = renderComponent();
    expect(getByTestId('modal')).toBeDefined();
  });

  it('should not render the Modal when not visible', () => {
    const {
      component: { queryByTestId },
    } = renderComponent({ isVisible: false });
    expect(queryByTestId('modal')).toBeNull();
  });

  it('should call onClose when backdrop is pressed', () => {
    const onCloseMock = jest.fn();
    const {
      component: { getByTestId },
    } = renderComponent({ onClose: onCloseMock });
    fireEvent.press(getByTestId('modal-backdrop'));
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('should render children inside the Modal', () => {
    const {
      component: { getByText },
    } = renderComponent();
    expect(getByText('Test Content')).toBeDefined();
  });
});
