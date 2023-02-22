import React, { FC, ReactElement } from 'react';
import { ImageProps } from '@/interfaces';
import { StyledImage } from './Image.styles';

const Image: FC<ImageProps> = (props): ReactElement => {
  const { imageUrl, imageAlt } = props;

  const placeholderUrl =
    'https://via.placeholder.com/600x400.png?text=Bild+folgt';

  const url = imageUrl || placeholderUrl;

  return <StyledImage {...props} src={url} alt={imageAlt} />;
};

export default Image;
