import styled from 'styled-components/native';
import { Text, View } from '..';

export const MainContainer = styled(View).attrs({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: 60,
  px: 'space-24',
})``;

export const Title = styled(Text).attrs({
  color: 'app-black',
  fontSize: 'font-24',
  fontWeight: 'bold',
})``;
