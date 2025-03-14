import React from 'react';
import { Backdrop, ContentContainer, BaseModal, ModalContainer } from './style';

export type ModalProps = {
  isVisible: boolean;
  children: React.ReactNode;
  onClose: () => void;
  testID?: string;
};

export function Modal({ isVisible, onClose, children, testID }: ModalProps) {
  return (
    <BaseModal testID={testID} visible={isVisible} onRequestClose={onClose}>
      <ModalContainer>
        <Backdrop testID="modal-backdrop" onPress={onClose} />
        <ContentContainer>{children}</ContentContainer>
      </ModalContainer>
    </BaseModal>
  );
}
