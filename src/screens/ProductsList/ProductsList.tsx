import React from 'react';
import { ContentContainer, MainContainer, Spacer } from './style';
import { Header, View } from '../../components';
import { useStringHandler } from '../../locale';
import { FlatList, ListRenderItem } from 'react-native';
import { useProductsList } from './useProductsList';
import {
  CategoryCarousel,
  ProductListItem,
  ProductListItemProps,
} from './components';

export function ProductsList() {
  const { text } = useStringHandler('productsList');

  const { categories, goToProductDetails } = useProductsList();

  const renderItem: ListRenderItem<ProductListItemProps> = ({ item }) => {
    return (
      <ProductListItem
        title={item.title}
        price={item.price}
        onPress={() => goToProductDetails(item)}
      />
    );
  };

  return (
    <MainContainer>
      <Header title={text('title')} />
      <ContentContainer>
        <CategoryCarousel
          data={categories}
          onPressItem={category => console.log(category)}
        />
        <View mt="space-16" />
        <FlatList<any>
          data={new Array(10).fill({ title: 'Product', price: 100 })}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
          ItemSeparatorComponent={Spacer}
          showsVerticalScrollIndicator={false}
        />
      </ContentContainer>
    </MainContainer>
  );
}
