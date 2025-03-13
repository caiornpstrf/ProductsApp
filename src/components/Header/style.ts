import styled from 'styled-components/native';
import { Text, View } from '..';

export const MainContainer = styled(View).attrs({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: 60,
  px: 24,
  bg: 'primary',
})``;

export const Title = styled(Text).attrs({
  color: 'text-light',
  fontSize: 24,
  fontWeight: 'bold',
})``;
