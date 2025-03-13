import {
  SafeAreaView as RNSafeAreaView,
  SafeAreaViewProps as RNSafeAreaViewProps,
} from 'react-native-safe-area-context';

import styled from 'styled-components/native';
import type {
  AlignItemsProps,
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexDirectionProps,
  FlexProps,
  JustifyContentProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system';
import {
  alignItems,
  background,
  border,
  color,
  compose,
  flex,
  justifyContent,
  layout,
  space,
} from 'styled-system';

export type SafeAreaViewProps = SpaceProps &
  BackgroundProps &
  ColorProps &
  BorderProps &
  LayoutProps &
  FlexDirectionProps &
  AlignItemsProps &
  FlexProps &
  JustifyContentProps &
  Partial<Pick<RNSafeAreaViewProps, 'children'>>;

export const SafeAreaView = styled(RNSafeAreaView)<SafeAreaViewProps>`
  ${compose(
    space,
    background,
    color,
    border,
    layout,
    flex,
    justifyContent,
    alignItems,
  )};
`;
