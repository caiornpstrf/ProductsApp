import React from 'react';
import { Pressable } from 'react-native';

import { ButtonContainer, ButtonText } from './style';

export type PillButtonProps = {
  testID?: string;
  label?: string;
  disabled?: boolean;
  active?: boolean;
  onPress?(): void;
};

export function PillButton({
  testID,
  label,
  disabled,
  active,
  onPress,
}: PillButtonProps) {
  return (
    <Pressable disabled={disabled} testID={testID} onPress={onPress}>
      <ButtonContainer active={active} disabled={disabled}>
        <ButtonText active={active}>{label}</ButtonText>
      </ButtonContainer>
    </Pressable>
  );
}
