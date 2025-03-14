import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { SafeAreaView, Text, View, Image as BaseImage } from '../../components';
import { flex, space } from 'styled-system';

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

export const InfoContainer = styled(View).attrs({
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  py: 'space-16',
})``;

export const VerticalSpacer = styled(View).attrs({
  width: '1px',
  height: '32px',
  bg: 'app-lightgray',
})``;

export const LoadingContainer = styled(View).attrs({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
})``;

export const Image = styled(BaseImage).attrs({
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
  mt: 'space-4',
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

export const Info = styled(Text).attrs({
  fontSize: 'font-12',
  color: 'app-darkgray',
  flex: 1,
  textAlign: 'center',
})`
  ${flex}
`;
