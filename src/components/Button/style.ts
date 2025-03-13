import styled from 'styled-components/native';
import { Text, View } from '..';

export const Pressable = styled.TouchableOpacity``;

type ButtonContainerProps = {
  disabled?: boolean;
};

export const ButtonContainer = styled(View).attrs(
  ({ disabled }: ButtonContainerProps) => ({
    minHeight: 60,
    borderRadius: 'radius-16',
    bg: !disabled ? 'app-black' : 'app-darkgray',
    justifyContent: 'center',
    alignItems: 'center',
    my: 'space-16',
  }),
)``;

export const ButtonText = styled(Text).attrs({
  color: 'app-white',
  fontSize: 'font-16',
  fontWeight: 'bold',
})``;
