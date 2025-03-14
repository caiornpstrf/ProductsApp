import React from 'react';
import { Pressable } from 'react-native';

import {
  MainContainer,
  Side,
  Title,
  BackIcon,
  RightIcon,
  Center,
} from './style';

export type HeaderProps = {
  title: string;
  onPressBack?(): void;
  rightIcon?: {
    name: string;
    onPress(): void;
  };
};

export function Header({ title, onPressBack, rightIcon }: HeaderProps) {
  return (
    <MainContainer>
      <Side justifyContent="flex-start">
        {onPressBack && (
          <Pressable onPress={onPressBack}>
            <BackIcon />
          </Pressable>
        )}
      </Side>
      <Center>
        <Title>{title}</Title>
      </Center>
      <Side justifyContent="flex-end">
        {rightIcon && (
          <Pressable onPress={rightIcon.onPress}>
            <RightIcon name={rightIcon.name} />
          </Pressable>
        )}
      </Side>
    </MainContainer>
  );
}
