import styled from 'styled-components/native';
import { Text, View } from '../../../../components';
import { flexbox, variant } from 'styled-system';

export const SortContainer = styled(View).attrs({
  flexDirection: 'row',
  alignItems: 'center',
  py: 'space-16',
})``;

export const VerticalSpacer = styled(View).attrs({
  width: '1px',
  height: '32px',
  bg: 'app-lightgray',
})``;

export const Pressable = styled.Pressable.attrs({
  flex: 1,
})`
  ${flexbox}
`;

export const SortLabel = styled(Text).attrs({
  fontSize: 'font-12',
  color: 'app-darkgray',
  flex: 1,
  textAlign: 'center',
})`
  ${flexbox}
  ${variant({
    prop: 'selected',
    variants: {
      true: {
        color: 'app-primary',
      },
    },
  })}
`;
