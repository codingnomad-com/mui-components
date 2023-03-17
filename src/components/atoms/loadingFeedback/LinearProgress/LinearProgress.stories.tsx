import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { LinearProgressProps } from './interfaces/LinearProgressProps';
import { LinearProgress as LinearProgressComponent } from './LinearProgress';

export default {
  title: 'Atoms/LoadingFeedback/LinearProgress',
  component: LinearProgressComponent,
  argTypes: {},
} as Meta;

const LinearProgressTemplate: Story<LinearProgressProps> = (
  args: LinearProgressProps,
): ReactElement => {
  return <LinearProgressComponent {...args} />;
};

export const LinearProgress = LinearProgressTemplate.bind({});

LinearProgress.args = {
  color: 'primary',
  variant: 'determinate',
};
