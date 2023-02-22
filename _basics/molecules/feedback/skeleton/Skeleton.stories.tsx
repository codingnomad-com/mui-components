import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';
import { SkeletonProps } from '@/interfaces';

import SkeletonComponent from './Skeleton';

export default {
  title: 'Basic Components/Molecules/Feedback/Skeleton/Skeleton',
  component: SkeletonComponent,
  argTypes: {},
} as Meta;

const SkeletonTemplate: Story<SkeletonProps> = (
  args: SkeletonProps
): ReactElement => <SkeletonComponent {...args} />;

export const Skeleton = SkeletonTemplate.bind({});

Skeleton.args = {
  skeletonType: 'paragraph',
};
