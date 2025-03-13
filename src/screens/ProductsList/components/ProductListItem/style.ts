import styled from 'styled-components/native';
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
  alignItems: 'flex-start',
})``;

export const Title = styled(Text).attrs({
  fontSize: 'font-14',
  fontWeight: 'bold',
})``;

export const PriceTag = styled(Text).attrs({
  fontSize: 'font-12',
  color: 'app-darkgray',
})``;

export const Chevron = styled(Icon.Solid).attrs({
  name: 'chevron-right',
  fontSize: 'font-16',
})``;

export const Thumbnail = styled(Icon.Brand).attrs({
  name: 'react',
  fontSize: 'font-40',
  color: 'app-primary',
})``;
