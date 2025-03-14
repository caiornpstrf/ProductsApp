import React from 'react';
import { Pressable } from 'react-native';

import {
  Label,
  MainContainer,
  RadioButtonContainer,
  RadioButtonInner,
} from './style';

export type RadioButtonProps = {
  active?: boolean;
  label: string | React.ReactNode;
  onPress(): void;
  testID?: string;
};

export function RadioButton({
  active,
  label,
  onPress,
  testID,
}: RadioButtonProps) {
  return (
    <Pressable testID={testID} onPress={onPress}>
      <MainContainer>
        <RadioButtonContainer testID={`${testID}-circle`} active={active}>
          <RadioButtonInner testID={`${testID}-circle-inner`} active={active} />
        </RadioButtonContainer>
        <Label>{label}</Label>
      </MainContainer>
    </Pressable>
  );
}
