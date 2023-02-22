/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';
import { ImageProps } from '@/interfaces';

const compName = 'image';

export const StyledImage = styled.img.attrs((props: ImageProps) => ({
  imageHeight: props.imageHeight || 'auto',
  imageWidth: props.imageWidth || '100%',
  imageObjectFit: props.imageObjectFit || 'cover',
}))`
  max-height: 100%;
  max-width: 100%;
  vertical-align: middle;
  height: ${(props) => props.imageHeight};
  width: ${(props) => props.imageWidth};
  object-fit: ${(props) => props.imageObjectFit};

  ${(p) => p.theme.components?.[compName]?.style};
`;
