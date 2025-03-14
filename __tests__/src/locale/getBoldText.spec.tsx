import React from 'react';

import { getBoldText } from '../../../src/locale/getBoldText';
import { Text } from '../../../src/components';
import { renderGenericComponent } from '../../utils';

describe('getBoldText', () => {
  it('should return an array of ReactNode with bold text components', () => {
    const rawString = 'This is a ##bold## text';
    const result = getBoldText(rawString);

    expect(result.length).toBe(3);
  });

  it('should make sure the string is intact when bold pattern is at the end of the string', () => {
    const rawString = 'This is a ##bold##';
    const result = getBoldText(rawString);

    expect(result.length).toBe(2);
  });

  it('should make sure the string is intact when bold pattern is at the beginning of the string', () => {
    const rawString = '##bold## text';
    const result = getBoldText(rawString);

    expect(result.length).toBe(2);
  });

  it('should handle multiple bold patterns', () => {
    const rawString = 'This is ##bold## and ##another bold## text';
    const result = getBoldText(rawString);

    expect(result.length).toBe(5);
  });

  it('should handle no bold patterns', () => {
    const rawString = 'This is a plain text';
    const result = getBoldText(rawString);

    expect(result.length).toBe(1);
  });

  it('should handle empty string', () => {
    const rawString = '';
    const result = getBoldText(rawString);

    expect(result).toEqual([]);
  });

  it('should use custom bold component if provided', () => {
    const CustomBoldComponent = ({
      children,
    }: {
      children: React.ReactNode;
    }) => <Text fontWeight="900">{children}</Text>;
    const rawString = 'This is a ##bold## text';
    const result = getBoldText(rawString, CustomBoldComponent);

    const {
      component: { getByText },
    } = renderGenericComponent(() => <>{result}</>, {});

    expect(getByText('bold').props.style).toEqual({
      color: 'text-dark',
      fontWeight: '900',
    });
  });
});
