import type { ViewProps as RNViewProps } from 'react-native';

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

export type ViewProps = SpaceProps &
  BackgroundProps &
  ColorProps &
  BorderProps &
  LayoutProps &
  FlexDirectionProps &
  AlignItemsProps &
  FlexProps &
  JustifyContentProps &
  Partial<Pick<RNViewProps, 'children'>>;

export const View = styled.View<ViewProps>`
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
