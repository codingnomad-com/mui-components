import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { SnackbarProps } from './interfaces/SnackbarProps';
import { Snackbar as SnackbarComponent } from './Snackbar';

export default {
  title: 'Molecules/Feedback/Snackbar',
  component: SnackbarComponent,
  argTypes: {},
} as Meta;

const SnackbarTemplate: Story<SnackbarProps> = (
  args: SnackbarProps,
): ReactElement => {
  return <SnackbarComponent {...args} />;
};

export const Snackbar = SnackbarTemplate.bind({});

Snackbar.args = {
  // TODO: Add args
};
