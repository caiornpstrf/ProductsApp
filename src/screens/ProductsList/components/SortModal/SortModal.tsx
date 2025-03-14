import React, { useState } from 'react';

import { SortOrder, SortType } from '../../../../service';
import { Button, Modal, ModalProps, RadioButton } from '../../../../components';
import { useStringHandler } from '../../../../locale';
import { Pressable, SortContainer, SortLabel, VerticalSpacer } from './style';

export type SortItem = {
  type: SortType;
  order: SortOrder;
};

export type SortModalProps = Omit<ModalProps, 'children'> & {
  onPressSort: (sortItem: SortItem) => void;
};

export function SortModal({ onPressSort, ...rest }: SortModalProps) {
  const { text } = useStringHandler('productsList');
  const [selectedType, setSelectedType] = useState<SortType>(SortType.Default);
  const [selectedOrder, setSelectedOrder] = useState<SortOrder>(SortOrder.None);

  const handleTypeSelection = (type: SortType) => {
    setSelectedType(type);
    if (type === SortType.Default) {
      setSelectedOrder(SortOrder.None);
      return;
    }
    if (selectedOrder === SortOrder.None) {
      setSelectedOrder(SortOrder.Asc);
    }
  };

  const handleOrderSelection = (order: SortOrder) => {
    if (selectedType === SortType.Default) {
      setSelectedType(Object.values(SortType)[1]);
    }
    setSelectedOrder(order);
  };

  return (
    <Modal {...rest}>
      <SortContainer>
        <Pressable onPress={() => handleOrderSelection(SortOrder.Asc)}>
          <SortLabel selected={selectedOrder === SortOrder.Asc}>
            {text('sort.asc')}
          </SortLabel>
        </Pressable>
        <VerticalSpacer />
        <Pressable onPress={() => handleOrderSelection(SortOrder.Desc)}>
          <SortLabel selected={selectedOrder === SortOrder.Desc}>
            {text('sort.desc')}
          </SortLabel>
        </Pressable>
      </SortContainer>
      {Object.values(SortType).map(type => (
        <RadioButton
          key={type}
          label={text(`sort.${type}`)}
          active={selectedType === type}
          onPress={() => handleTypeSelection(type)}
        />
      ))}
      <Button
        label={text('sortLabel')}
        onPress={() =>
          onPressSort({ type: selectedType, order: selectedOrder })
        }
      />
    </Modal>
  );
}
