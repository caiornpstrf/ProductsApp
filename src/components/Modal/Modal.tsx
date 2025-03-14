import React from 'react';
import { Backdrop, ContentContainer, BaseModal, ModalContainer } from './style';

export type ModalProps = {
  isVisible: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

export function Modal({ isVisible, onClose, children }: ModalProps) {
  return (
    <BaseModal visible={isVisible} onRequestClose={onClose}>
      <ModalContainer>
        <Backdrop onPress={onClose} />
        <ContentContainer>{children}</ContentContainer>
      </ModalContainer>
    </BaseModal>
  );
}
