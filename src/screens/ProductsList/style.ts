import styled from 'styled-components/native';
import { SafeAreaView, View } from '../../components';

export const MainContainer = styled(SafeAreaView).attrs({
  edges: ['top', 'bottom'],
  flex: 1,
  bg: 'app-white',
})``;

export const ContentContainer = styled(View).attrs({
  flex: 1,
  px: 'space-24',
})``;

export const LoadingContainer = styled(View).attrs({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
})``;

export const ListEndContainer = styled(View).attrs({
  height: 200,
  justifyContent: 'flex-end',
  alignItems: 'center',
  p: 'space-16',
})``;

export const Spacer = styled(View).attrs({
  height: 1,
  my: 'space-12',
  bg: 'app-lightgray',
})``;
