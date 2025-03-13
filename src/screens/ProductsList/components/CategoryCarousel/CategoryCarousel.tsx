import React, { useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { PillButton, View } from '../../../../components';
import { Spacer } from './style';

type Category = {
  slug: string;
  name: string;
  url: string;
};
export type CategoryCarouselProps = {
  data: Category[];
  onPressItem(category: Category): void;
};

export function CategoryCarousel({ data, onPressItem }: CategoryCarouselProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>(data[0]);

  const onPress = (category: Category) => {
    setSelectedCategory(category);
    onPressItem(category);
  };

  const renderItem: ListRenderItem<Category> = ({ item }) => {
    return (
      <PillButton
        label={item.name}
        active={item.slug === selectedCategory.slug}
        onPress={() => onPress(item)}
      />
    );
  };

  return (
    <View>
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
