import MuiGrid from '@mui/material/Grid';
import * as React from 'react';
import { FC } from 'react';
import { GridItemProps } from './interfaces/GridItemProps';

export const GridItem: FC<GridItemProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <div>
      <MuiGrid item {...rest}>
        {children}
      </MuiGrid>
    </div>
  );
};

export default GridItem;
