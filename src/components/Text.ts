import type { TextProps as RNTextProps } from 'react-native';

import styled from 'styled-components/native';
import {
  ColorProps,
  TextAlignProps,
  FontSizeProps,
  LineHeightProps,
  FontWeightProps,
  SpaceProps,
  fontSize,
  textAlign,
  lineHeight,
  fontWeight,
  compose,
  color,
  space,
} from 'styled-system';

export type TextProps = SpaceProps &
  ColorProps &
  TextAlignProps &
  FontSizeProps &
  LineHeightProps &
  FontWeightProps &
  RNTextProps;

export const Text = styled.Text.attrs(({ color: txtColor }: TextProps) => {
  return { color: txtColor ? txtColor : 'text-dark' };
})<TextProps>`
  ${compose(space, color, fontSize, textAlign, lineHeight, fontWeight)};
`;
