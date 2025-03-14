import styled from 'styled-components/native';
import { space, variant } from 'styled-system';

import { View } from '../View';
import { Text } from '../Text';

export const Pressable = styled.TouchableOpacity``;

type ButtonContainerProps = {
  disabled?: boolean;
};

const active = variant({
  prop: 'active',
  variants: {
    true: {
      backgroundColor: 'app-accent',
      borderColor: 'app-secondary',
      borderWidth: 'border-2',
    },
  },
});

const activeText = variant({
  prop: 'active',
  variants: {
    true: {
      color: 'app-darkgray',
    },
  },
});

export const ButtonContainer = styled(View).attrs(
  ({ disabled }: ButtonContainerProps) => ({
    minHeight: 30,
    borderRadius: 'radius-16',
    bg: !disabled ? 'app-primary' : 'disabled',
    justifyContent: 'center',
    alignItems: 'center',
    my: 'space-8',
  }),
)`
  ${active}
`;

export const ButtonText = styled(Text).attrs({
  color: 'text-light',
  fontSize: 'font-14',
  fontWeight: 'bold',
  px: 'space-12',
})`
  ${space}
  ${activeText}
`;
