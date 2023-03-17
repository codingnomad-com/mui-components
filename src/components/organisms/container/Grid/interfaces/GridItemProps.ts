import { GridProps as MuiGridProps } from '@mui/material/Grid';

type GridBaseProps = Pick<MuiGridProps, 'children' | 'lg' | 'md' | 'sm' | 'xl'>;

export type GridItemProps = GridBaseProps;
