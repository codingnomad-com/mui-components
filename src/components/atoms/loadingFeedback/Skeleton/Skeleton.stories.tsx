import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { SkeletonProps } from './interfaces/SkeletonProps';
import { Skeleton as SkeletonComponent } from './Skeleton';

export default {
  title: 'Atoms/LoadingFeedback/Skeleton',
  component: SkeletonComponent,
  argTypes: {},
} as Meta;

const SkeletonTemplate: Story<SkeletonProps> = (
  args: SkeletonProps,
): ReactElement => {
  return (
    <SkeletonComponent {...args}>
      <div style={{ width: '100px', height: '200px' }}></div>
    </SkeletonComponent>
  );
};

export const Skeleton = SkeletonTemplate.bind({});

Skeleton.args = {
  animation: 'pulse',
  variant: 'text',
};
