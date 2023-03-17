import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { CircularProgress as CircularProgressComponent } from './CircularProgress';
import { CircularProgressProps } from './interfaces/CircularProgressProps';

export default {
  title: 'Atoms/Loading Feedback/CircularProgress',
  component: CircularProgressComponent,
  argTypes: {},
} as Meta;

const CircularProgressTemplate: Story<CircularProgressProps> = (
  args: CircularProgressProps,
): ReactElement => {
  return <CircularProgressComponent {...args} />;
};

export const CircularProgress = CircularProgressTemplate.bind({});

CircularProgress.args = {
  color: 'primary',
  variant: 'determinate',
};
