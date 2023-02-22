import React, { FC, ReactElement } from 'react';
import { IframeProps } from '@/interfaces';
import { StyledIframe } from './Iframe.styles';

const Iframe: FC<IframeProps> = (props): ReactElement => {
  const { src, style = {} } = props;

  return <StyledIframe src={src} style={style} />;
};

export default Iframe;
