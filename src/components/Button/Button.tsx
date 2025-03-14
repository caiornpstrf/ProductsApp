import React from 'react';
import { ButtonContainer, ButtonText, Pressable } from './style';

export type ButtonProps = {
  testID?: string;
  label?: string | React.ReactNode;
  disabled?: boolean;
  onPress?(): void;
};

export function Button({ testID, label, disabled, onPress }: ButtonProps) {
  return (
    <Pressable disabled={disabled} testID={testID} onPress={onPress}>
      <ButtonContainer disabled={disabled}>
        <ButtonText>{label}</ButtonText>
      </ButtonContainer>
    </Pressable>
  );
}
