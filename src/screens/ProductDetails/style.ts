import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { SafeAreaView, Text, View } from '../../components';
import { color, layout, space } from 'styled-system';

export const MainContainer = styled(SafeAreaView).attrs({
  edges: ['top', 'bottom'],
  flex: 1,
  bg: 'app-white',
})``;

export const ScrollContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const ContentContainer = styled(View).attrs({
  flex: 1,
  px: 'space-24',
})``;

export const ImageContainer = styled(View).attrs({
  height: 300,
  alignItems: 'center',
  justifyContent: 'center',
})``;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 200px;
  width: 200px;
`;

export const Spacer = styled(View).attrs({
  height: 1,
  bg: 'app-lightgray',
})``;

export const ImageList = styled(FlatList).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  pagingEnabled: true,
})``;

export const Title = styled(Text).attrs({
  fontSize: 'font-20',
  fontWeight: 'bold',
  mt: 'space-24',
})`
  ${space}
`;

export const PriceTag = styled(Text).attrs({
  fontSize: 'font-20',
  fontWeight: 'bold',
  mt: 'space-4',
  color: 'app-primary',
})`
  ${space}
`;

export const Description = styled(Text).attrs({
  fontSize: 'font-12',
  mt: 'space-16',
})`
  ${space}
`;
