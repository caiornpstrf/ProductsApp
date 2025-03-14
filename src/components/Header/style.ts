import styled from 'styled-components/native';
import { space } from 'styled-system';

import { View } from '../View';
import { Text } from '../Text';
import { Icon } from '../Icon';

export const MainContainer = styled(View).attrs({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  px: 'space-24',
})``;

export const Side = styled(View).attrs({
  flexDirection: 'row',
  alignItems: 'center',
  height: 60,
  width: '25%',
})``;

export const Center = styled(View).attrs({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50%',
  height: 60,
})``;

export const Title = styled(Text).attrs({
  color: 'app-black',
  fontSize: 'font-24',
  fontWeight: 'bold',
})``;

export const BackText = styled(Text).attrs({
  color: 'app-black',
  fontSize: 'font-16',
  fontWeight: 'bold',
})``;

export const BackIcon = styled(Icon.Solid).attrs({
  fontSize: 'font-20',
  name: 'chevron-left',
  px: 'space-8',
  py: 'space-4',
})`
  ${space}
`;

export const RightIcon = styled(Icon.Solid).attrs({
  fontSize: 'font-20',
  px: 'space-8',
  py: 'space-4',
})`
  ${space}
`;
