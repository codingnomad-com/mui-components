import React, { FC, ReactElement } from 'react';
import LoadingBlock from '@basics/atoms/feedback/loadingBlock/LoadingBlock';

import { SkeletonProps } from '@/interfaces';
import { StyledSkeleton } from './Skeleton.styles';

const Skeleton: FC<SkeletonProps> = (props): ReactElement => (
  <StyledSkeleton {...props}>
    <LoadingBlock />
  </StyledSkeleton>
);

export default Skeleton;
