import styled from 'styled-components/native';
import { SafeAreaView, View } from '..';
import { flex } from 'styled-system';

export const BaseModal = styled.Modal.attrs({
  transparent: true,
  animationType: 'slide',
})``;

export const ModalContainer = styled(View).attrs({
  bg: 'app-opaqueblack',
  flex: 1,
  justifyContent: 'flex-end',
})``;

export const Backdrop = styled.Pressable.attrs({
  flex: 1,
})`
  ${flex}
`;

export const ContentContainer = styled(SafeAreaView).attrs({
  edges: ['top', 'bottom'],
  bg: 'app-white',
  borderTopLeftRadius: 'radius-16',
  borderTopRightRadius: 'radius-16',
  px: 'space-24',
  pt: 'space-24',
})``;
