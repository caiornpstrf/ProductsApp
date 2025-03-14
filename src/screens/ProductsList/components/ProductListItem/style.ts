import { Image } from 'react-native';
import styled from 'styled-components/native';
import { flexbox, space } from 'styled-system';

import { Icon, Text, View } from '../../../../components';

export const MainContainer = styled(View).attrs({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
})``;

export const TextContainer = styled(View).attrs({
  ml: 'space-16',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: 0.8,
  alignItems: 'flex-start',
})``;

export const Title = styled(Text).attrs({
  fontSize: 'font-14',
  fontWeight: 'bold',
  flexWrap: 'wrap',
  pr: 'space-16',
})`
  ${flexbox}
  ${space}
`;

export const PriceTag = styled(Text).attrs({
  fontSize: 'font-14',
  color: 'app-primary',
  mt: 'space-4'
})`
  ${space}
`;

export const Chevron = styled(Icon.Solid).attrs({
  name: 'chevron-right',
  fontSize: 'font-16',
  flex: 0.2,
  color: 'app-black',
})`
  ${flexbox}
`;

export const Thumbnail = styled(Image).attrs({
  resizeMode: 'contain',
})`
  width: 70px;
  height: 70px;
`;
