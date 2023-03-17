import { SkeletonProps as MuiSkeletonProps } from '@mui/material/Skeleton';
import { ReactElement } from 'react';

type SkeletonBaseProps = Pick<
  MuiSkeletonProps,
  'animation' | 'height' | 'variant' | 'width'
>;

export interface SkeletonProps extends SkeletonBaseProps {
  children: ReactElement;
}
