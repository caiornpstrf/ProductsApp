import React from 'react';
import {
  ListRenderItem,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { StaticScreenProps } from '@react-navigation/native';

import { ErrorDisplay, Header, View } from '../../components';
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
  InfoContainer,
  Info,
  VerticalSpacer,
  LoadingContainer,
} from './style';

type ProductDetailsRoute = StaticScreenProps<{
  id: number;
}>;

export function ProductDetails({ route }: ProductDetailsRoute) {
  const { text, bold } = useStringHandler('productDetails');

  const { id } = route.params;
  const { isLoading, screenError, product, goBack, retry } =
    useProductDetails(id);

  if (isLoading) {
    return (
      <MainContainer testID="product-details-loading">
        <LoadingContainer>
          <ActivityIndicator size="large" color="black" />
        </LoadingContainer>
      </MainContainer>
    );
  }

  if (screenError) {
    return (
      <MainContainer testID="product-details-error">
        <Header title={text('title')} onPressBack={goBack} />
        <ErrorDisplay
          title={text(`errors.${screenError}.title`)}
          description={text(`errors.${screenError}.description`)}
          buttonLabel={text(`errors.${screenError}.buttonLabel`)}
          onPressButton={retry}
        />
      </MainContainer>
    );
  }

  const renderItem: ListRenderItem<string> = ({ item }) => {
    return (
      <ImageContainer width={Dimensions.get('screen').width}>
        <Image source={{ uri: item }} />
      </ImageContainer>
    );
  };

  return (
    <MainContainer testID="product-details">
      <Header title={text('title')} onPressBack={goBack} />
      <ScrollContainer>
        <View>
          <FlatList<string>
            horizontal
            automaticallyAdjustsScrollIndicatorInsets
            keyExtractor={(item: string) => item}
            alwaysBounceHorizontal
            data={product?.images}
            renderItem={renderItem}
            pagingEnabled
          />
        </View>
        <Spacer />
        <ContentContainer>
          <InfoContainer>
            <Info>{bold(text('inStock', { stock: product!.stock }))}</Info>
            {product!.brand && (
              <>
                <VerticalSpacer />
                <Info>{bold(text('brand', { brand: product!.brand }))}</Info>
              </>
            )}
          </InfoContainer>
          <Title>{product!.title}</Title>
          <PriceTag>{Currency.format(product!.price)}</PriceTag>
          <Description>{product!.description}</Description>
        </ContentContainer>
      </ScrollContainer>
    </MainContainer>
  );
}
