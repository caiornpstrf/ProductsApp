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
  title: string | React.ReactNode;
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
          <Pressable testID="header-left-icon" onPress={onPressBack}>
            <BackIcon />
          </Pressable>
        )}
      </Side>
      <Center>
        <Title testID="header-center-text">{title}</Title>
      </Center>
      <Side justifyContent="flex-end">
        {rightIcon && (
          <Pressable onPress={rightIcon.onPress}>
            <RightIcon testID="header-left-right" name={rightIcon.name} />
          </Pressable>
        )}
      </Side>
    </MainContainer>
  );
}
