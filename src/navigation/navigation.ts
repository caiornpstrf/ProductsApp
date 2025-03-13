import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Test } from '../screens';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: Test,
  },
  screenOptions: {
    headerShown: false,
  },
});

export const Navigation = createStaticNavigation(RootStack);
