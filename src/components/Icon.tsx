import React from 'react';
import RNIcon from '@react-native-vector-icons/fontawesome6';

import styled from 'styled-components/native';
import { FontSizeProps, color, compose, fontSize } from 'styled-system';

type BaseProps = React.ComponentProps<typeof RNIcon>;

export const Base = styled(RNIcon).attrs((props: BaseProps) => ({
  color: props.color || 'text-dark',
}))`
  ${compose(color, fontSize)}
`;

type IconProps = Omit<BaseProps, 'iconStyle'> & FontSizeProps;

export const Icon = {
  Regular: (props: IconProps) => <Base iconStyle="regular" {...props} />,
  Solid: (props: IconProps) => <Base iconStyle="solid" {...props} />,
  Brand: (props: IconProps) => <Base iconStyle="brand" {...props} />,
};
