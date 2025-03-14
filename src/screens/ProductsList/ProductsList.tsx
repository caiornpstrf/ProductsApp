import React, { useState } from 'react';
import {
  ContentContainer,
  ListEndContainer,
  LoadingContainer,
  MainContainer,
  Spacer,
} from './style';
import { ErrorDisplay, Header, View } from '../../components';
import { useStringHandler } from '../../locale';
import { Category, Product } from '../../service';
import { ActivityIndicator, FlatList, ListRenderItem } from 'react-native';
import { useProductsList } from './useProductsList';
import { CategoryCarousel, ProductListItem, SortModal } from './components';

export function ProductsList() {
  const { text } = useStringHandler('productsList');
  const [sortModalVisible, setSortModalVisible] = useState(false);

  const {
    isLoading,
    isProductsLoading,
    screenError,
    productsError,
    categories,
    products,
    goToProductDetails,
    onChangeCategory,
    fetchProducts,
    onSort,
    retry,
  } = useProductsList();

  const defaultCategory: Category = {
    name: 'All',
    slug: '',
    url: '',
  };

  if (isLoading) {
    return (
      <MainContainer testID="products-list-loading">
        <LoadingContainer>
          <ActivityIndicator size="large" color="black" />
        </LoadingContainer>
      </MainContainer>
    );
  }

  if (screenError) {
    return (
      <MainContainer testID="products-list-error">
        <ErrorDisplay
          title={text(`errors.${screenError}.title`)}
          description={text(`errors.${screenError}.description`)}
          buttonLabel={text(`errors.${screenError}.buttonLabel`)}
          onPressButton={retry}
        />
      </MainContainer>
    );
  }

  const renderItem: ListRenderItem<Product> = ({ item }) => {
    return (
      <ProductListItem
        testID={`product-list-item-${item.id}`}
        title={item.title}
        price={item.price}
        uri={item.images[0]}
        onPress={() => goToProductDetails(item)}
      />
    );
  };

  const selectListEmptyComponent = () => {
    switch (true) {
      case !!productsError:
        return (
          <ErrorDisplay
            title={text(`errors.products.${productsError}.title`)}
            description={text(`errors.products.${productsError}.description`)}
            buttonLabel={text(`errors.products.${productsError}.buttonLabel`)}
            onPressButton={fetchProducts}
          />
        );
      case isProductsLoading:
        return <View testID="products-list-nothing" />;
      default:
        return (
          <ErrorDisplay
            title={text('errors.products.noProducts.title')}
            description={text('errors.products.noProducts.description')}
          />
        );
    }
  };

  return (
    <MainContainer testID="products-list">
      <Header
        title={text('title')}
        rightIcon={{
          name: 'sort',
          onPress: () => setSortModalVisible(true),
        }}
      />
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
          onEndReached={fetchProducts}
          onEndReachedThreshold={0.0001}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{ flexGrow: 1 }}
          ListEmptyComponent={selectListEmptyComponent()}
        />
      </ContentContainer>
      <SortModal
        testID="products-list-sort-modal"
        isVisible={sortModalVisible}
        onClose={() => setSortModalVisible(false)}
        onPressSort={item => {
          setSortModalVisible(false);
          onSort(item);
        }}
      />
    </MainContainer>
  );
}
