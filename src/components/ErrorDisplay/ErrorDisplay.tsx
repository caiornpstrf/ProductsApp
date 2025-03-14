import React from 'react';

import {
  Description,
  ErrorIcon,
  MainContainer,
  TextContainer,
  Title,
} from './style';
import { Button } from '..';

export type ErrorDisplayProps = {
  title: string;
  description: string;
  buttonLabel?: string;
  onPressButton?(): void;
};

export function ErrorDisplay({
  title,
  description,
  buttonLabel,
  onPressButton,
}: ErrorDisplayProps) {
  return (
    <MainContainer testID="error-display">
      <TextContainer>
        <ErrorIcon />
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextContainer>
      {onPressButton && buttonLabel && (
        <Button
          testID="error-display-button"
          label={buttonLabel}
          onPress={onPressButton}
        />
      )}
    </MainContainer>
  );
}
