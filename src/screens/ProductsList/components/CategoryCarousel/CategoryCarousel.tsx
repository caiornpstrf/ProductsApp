import React, { useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { PillButton, View } from '../../../../components';
import { Category } from '../../../../service';
import { Spacer } from './style';

export type CategoryCarouselProps = {
  data: Category[];
  onPressItem(category: Category): void;
  testID?: string;
};

export function CategoryCarousel({
  data,
  onPressItem,
  testID,
}: CategoryCarouselProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>(data[0]);

  const onPress = (category: Category) => {
    setSelectedCategory(category);
    onPressItem(category);
  };

  const renderItem: ListRenderItem<Category> = ({ item }) => {
    return (
      <PillButton
        testID={`category-carousel-${item.slug}`}
        label={item.name}
        active={item.slug === selectedCategory.slug}
        onPress={() => onPress(item)}
      />
    );
  };

  return (
    <View testID={testID}>
      <FlatList<Category>
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.slug}
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={Spacer}
      />
    </View>
  );
}
