import MuiGrid from '@mui/material/Grid';
import * as React from 'react';
import { FC } from 'react';
import { GridProps } from './interfaces/GridProps';

export const Grid: FC<GridProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <div>
      <MuiGrid container {...rest}>
        {children}
      </MuiGrid>
    </div>
  );
};

export default Grid;
