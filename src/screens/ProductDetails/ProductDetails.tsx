import React from 'react';
import { ListRenderItem, FlatList, Dimensions } from 'react-native';
import { StaticScreenProps } from '@react-navigation/native';

import { Header, View } from '../../components';
import { useStringHandler } from '../../locale';
import { Currency } from '../../handlers';

import { useProductDetails } from './useProductDetails';
import {
  ImageContainer,
  Image,
  MainContainer,
  Spacer,
  Title,
  PriceTag,
  ContentContainer,
  Description,
  ScrollContainer,
} from './style';

type ProductDetailsRoute = StaticScreenProps<{
  id: number;
}>;

export function ProductDetails({ route }: ProductDetailsRoute) {
  const { text } = useStringHandler('productDetails');

  const { id } = route.params;
  const { isLoading, product, goBack } = useProductDetails(id);

  if (isLoading || !product) {
    return null;
  }

  const renderItem: ListRenderItem<string> = ({ item }) => {
    return (
      <ImageContainer width={Dimensions.get('screen').width}>
        <Image source={{ uri: item }} />
      </ImageContainer>
    );
  };

  return (
    <MainContainer>
      <Header title={text('title')} onPressBack={goBack} />
      <ScrollContainer>
        <View>
          <FlatList<string>
            horizontal
            automaticallyAdjustsScrollIndicatorInsets
            keyExtractor={(item: string) => item}
            alwaysBounceHorizontal
            data={product.images}
            renderItem={renderItem}
            pagingEnabled
          />
        </View>
        <Spacer />
        <ContentContainer>
          <Title>{product.title}</Title>
          <PriceTag>{Currency.format(product.price)}</PriceTag>
          <Description>{product.description}</Description>
        </ContentContainer>
      </ScrollContainer>
    </MainContainer>
  );
}
