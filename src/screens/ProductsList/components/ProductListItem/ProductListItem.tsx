import React from 'react';
import { Pressable } from 'react-native';
import { View } from '../../../../components';
import {
  Chevron,
  MainContainer,
  PriceTag,
  TextContainer,
  Thumbnail,
  Title,
} from './style';
import { Currency } from '../../../../handlers';

export type ProductListItemProps = {
  title: string;
  price: number;
  // thumbnail: string;
  onPress(): void;
  testID?: string;
};

export function ProductListItem({
  title,
  price,
  onPress,
  testID,
}: ProductListItemProps) {
  return (
    <Pressable testID={testID} onPress={onPress}>
      <MainContainer>
        <View flexDirection="row" alignItems="center">
          <Thumbnail />
          <TextContainer>
            <Title>{title}</Title>
            <PriceTag>{Currency.format(price)}</PriceTag>
          </TextContainer>
        </View>
        <Chevron />
      </MainContainer>
    </Pressable>
  );
}
