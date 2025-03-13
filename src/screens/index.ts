import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Screens } from '../navigation';
import { theme } from '../theme';
import { ProductsList } from './ProductsList';

const RootStack = createNativeStackNavigator({
  screens: {
    [Screens.ProductsList]: ProductsList,
  },
  screenOptions: {
    headerShown: false,
    headerShadowVisible: false,
    headerTintColor: theme.colors['app-black'],
    headerStyle: {
      backgroundColor: theme.colors['app-white'],
    },
  },
});

export const StaticStack = createStaticNavigation(RootStack);
