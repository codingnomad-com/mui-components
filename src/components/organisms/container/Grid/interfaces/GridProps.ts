import { GridProps as MuiGridProps } from '@mui/material/Grid';
import { ReactElement } from 'react';
import { GridItem } from '../GridItem';

type GridBaseProps = Pick<
  MuiGridProps,
  'columns' | 'columnSpacing' | 'direction' | 'rowSpacing'
>;

export interface GridProps extends GridBaseProps {
  children: ReactElement<typeof GridItem> | ReactElement<typeof GridItem>[];
}
