import React, { ReactNode, ElementType } from 'react';
import styled from 'styled-components/native';
import { Text } from '../components';

export type Component = ElementType | null | undefined;

const DefaultBoldComponent = styled(Text).attrs({
  fontWeight: 'bold',
})``;

/**
 * A function that takes a string and checks for ## patterns to bold the text
 * Any text between ## will be bolded and the ## will be removed
 * The final result is an array of ReactNode components, be it raw string or bold text components
 * @returns A ReactNode array with the bold text components
 */
export const getBoldText = (
  rawString: string,
  CustomBoldComponent?: Component,
): ReactNode[] => {
  const boldStringPattern = /##(.*?)##/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;

  const BoldText = CustomBoldComponent ?? DefaultBoldComponent;

  rawString.replace(boldStringPattern, (match, match1, offset) => {
    if (offset > lastIndex) {
      parts.push(rawString.substring(lastIndex, offset));
    }

    // For each match, add the bold text component
    parts.push(<BoldText key={offset}>{match1}</BoldText>);
    lastIndex = offset + match.length;
    return match;
  });

  if (lastIndex < rawString.length) {
    parts.push(rawString.substring(lastIndex));
  }

  return parts;
};
