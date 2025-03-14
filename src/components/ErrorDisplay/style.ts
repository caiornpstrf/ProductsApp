import styled from 'styled-components/native';
import { space } from 'styled-system';

import { View } from '../View';
import { Text } from '../Text';
import { Icon } from '../Icon';

export const MainContainer = styled(View).attrs({
  flex: 1,
  px: 'space-24',
})``;

export const TextContainer = styled(View).attrs({
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
})``;

export const ErrorIcon = styled(Icon.Solid).attrs({
  name: 'triangle-exclamation',
  fontSize: 'font-48',
  color: 'app-primary',
})``;

export const Title = styled(Text).attrs({
  fontSize: 'font-24',
  fontWeight: 'bold',
  color: 'app-black',
  mt: 'space-16',
  textAlign: 'center',
})`
  ${space}
`;

export const Description = styled(Text).attrs({
  fontSize: 'font-16',
  color: 'app-gray',
  mt: 'space-8',
  textAlign: 'center',
})`
  ${space}
`;
