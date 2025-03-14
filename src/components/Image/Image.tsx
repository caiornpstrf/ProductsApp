import React, { useState } from 'react';
import {
  ImageProps,
  NativeSyntheticEvent,
  ImageLoadEventData,
} from 'react-native';

import { ImageBackground, Spinner } from './style';

export function Image({ onLoad, ...rest }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = (event: NativeSyntheticEvent<ImageLoadEventData>) => {
    setLoaded(true);
    onLoad?.(event);
  };

  return (
    <ImageBackground {...rest} onLoad={handleLoad}>
      {true && <Spinner testID="image-spinner" animating={!loaded} />}
    </ImageBackground>
  );
}
