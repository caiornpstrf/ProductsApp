import React from 'react';
import { MainContainer, Title } from './style';

export type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <MainContainer>
      <Title>{title}</Title>
    </MainContainer>
  );
}
