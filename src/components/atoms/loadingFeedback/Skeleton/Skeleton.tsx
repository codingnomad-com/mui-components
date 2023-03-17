import MuiSkeleton from '@mui/material/Skeleton';
import { FC } from 'react';
import { SkeletonProps } from './interfaces/SkeletonProps';

export const Skeleton: FC<SkeletonProps> = (props) => {
  const { children, ...rest } = props;

  return <MuiSkeleton {...rest}>{children}</MuiSkeleton>;
};

export default Skeleton;
