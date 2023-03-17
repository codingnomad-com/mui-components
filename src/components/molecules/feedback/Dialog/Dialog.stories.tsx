import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { Dialog as DialogComponent } from './Dialog';
import { DialogProps } from './interfaces/DialogProps';

export default {
  title: 'Molecules/Feedback/Dialog',
  component: DialogComponent,
  argTypes: {},
} as Meta;

const DialogTemplate: Story<DialogProps> = (
  args: DialogProps,
): ReactElement => {
  return <DialogComponent {...args} />;
};

export const Dialog = DialogTemplate.bind({});

Dialog.args = {
  // TODO: Add args
};
