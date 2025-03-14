import React from 'react';
import {
  ContentContainer,
  ListEndContainer,
  LoadingContainer,
  MainContainer,
  Spacer,
} from './style';
import { Header, Text, View } from '../../components';
import { useStringHandler } from '../../locale';
import { Category, Product } from '../../service';
import { ActivityIndicator, FlatList, ListRenderItem } from 'react-native';
import { useProductsList } from './useProductsList';
import { CategoryCarousel, ProductListItem } from './components';

export function ProductsList() {
  const { text } = useStringHandler('productsList');

  const {
    isLoading,
    isProductsLoading,
    categories,
    products,
    goToProductDetails,
    onChangeCategory,
    onListEndReached,
  } = useProductsList();

  const defaultCategory: Category = {
    name: 'All',
    slug: '',
    url: '',
  };

  if (isLoading) {
    return (
      <MainContainer>
        <LoadingContainer>
          <ActivityIndicator size="large" color="black" />
        </LoadingContainer>
      </MainContainer>
    );
  }

  const renderItem: ListRenderItem<Product> = ({ item }) => {
    return (
      <ProductListItem
        title={item.title}
        price={item.price}
        uri={item.images[0]}
        onPress={() => goToProductDetails(item)}
      />
    );
  };

  return (
    <MainContainer>
      <Header title={text('title')} />
      <ContentContainer>
        <CategoryCarousel
          data={[defaultCategory, ...categories]}
          onPressItem={category => onChangeCategory(category)}
        />
        <View mt="space-16" />
        <FlatList<Product>
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          ItemSeparatorComponent={Spacer}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <ListEndContainer>
              <ActivityIndicator
                size="small"
                color="black"
                animating={isProductsLoading}
              />
            </ListEndContainer>
          }
          onEndReached={onListEndReached}
          onEndReachedThreshold={0.0001}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{ flexGrow: 1 }}
          ListEmptyComponent={
            !isProductsLoading ? <Text>{text('noProducts')}</Text> : null
          }
        />
      </ContentContainer>
    </MainContainer>
  );
}
