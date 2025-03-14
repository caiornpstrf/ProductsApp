import styled from 'styled-components/native';
import { theme } from '../../theme';

export const ImageBackground = styled.ImageBackground`
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.ActivityIndicator.attrs({
  size: 'small',
  color: theme.colors['app-primary'],
})``;
