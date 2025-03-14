import styled from 'styled-components/native';
import { space, variant } from 'styled-system';

import { View } from '../View';
import { Text } from '../Text';

export const MainContainer = styled(View).attrs({
  flexDirection: 'row',
  alignItems: 'center',
  py: 'space-8',
})``;

export const RadioButtonContainer = styled(View).attrs({
  width: '20px',
  height: '20px',
  borderRadius: 'radius-32',
  borderWidth: 'border-2',
  borderColor: 'app-black',
  alignItems: 'center',
  justifyContent: 'center',
})`
  ${variant({
    prop: 'active',
    variants: {
      true: {
        borderColor: 'app-primary',
      },
    },
  })}
`;

export const RadioButtonInner = styled(View).attrs({
  width: '10px',
  height: '10px',
  borderRadius: 'radius-32',
  bg: 'transparent',
})`
  ${variant({
    prop: 'active',
    variants: {
      true: {
        bg: 'app-primary',
      },
    },
  })}
`;

export const Label = styled(Text).attrs({
  fontSize: 'font-14',
  fontWeight: 'bold',
  color: 'app-black',
  ml: 'space-16',
})`
  ${space}
`;
