import React, { FC, ReactElement } from 'react';
import { GridProps } from '@/interfaces';
import { StyledGrid } from './Grid.styles';

const Grid: FC<GridProps> = (props): ReactElement => {
  const { children } = props;

  return <StyledGrid {...props}>{children}</StyledGrid>;
};

export default Grid;
