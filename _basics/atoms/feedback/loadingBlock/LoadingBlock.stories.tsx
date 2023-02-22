import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';

import LoadingBlockComponent from './LoadingBlock';

export default {
  title: 'Basic Components/Atoms/Feedback/Loading Block',
  component: LoadingBlockComponent,
  argTypes: {},
} as Meta;

const LoadingBlockTemplate: Story = (): ReactElement => (
  <LoadingBlockComponent />
);

export const LoadingBlock = LoadingBlockTemplate.bind({});
