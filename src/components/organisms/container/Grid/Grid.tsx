import MuiGrid from '@mui/material/Grid';
import * as React from 'react';
import { FC } from 'react';
import { GridProps } from './interfaces/GridProps';

export const Grid: FC<GridProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <MuiGrid container {...rest}>
      {children}
    </MuiGrid>
  );
};

export default Grid;
