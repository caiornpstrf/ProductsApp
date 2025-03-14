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
};

export function RadioButton({ active, label, onPress }: RadioButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <MainContainer>
        <RadioButtonContainer active={active}>
          <RadioButtonInner active={active}/>
        </RadioButtonContainer>
        <Label>{label}</Label>
      </MainContainer>
    </Pressable>
  );
}
