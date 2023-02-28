import { GridProps as MuiGridProps } from '@mui/material/Grid';

type GridBaseProps = Pick<
  MuiGridProps,
  | 'children'
  | 'columns'
  | 'columnSpacing'
  | 'direction'
  | 'rowSpacing'
  | 'spacing'
  | 'lg'
  | 'md'
  | 'sm'
  | 'xl'
>;

export type GridItemProps = GridBaseProps;
