import React, { FC, ReactElement } from 'react';
import { BoxProps } from '@/interfaces';
import { StyledBox } from './Box.styles';

const Box: FC<BoxProps> = (props): ReactElement => {
  const { children, ...rest } = props;

  return <StyledBox {...rest}>{children}</StyledBox>;
};

export default Box;
