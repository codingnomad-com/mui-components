import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { SwitchProps } from './interfaces/SwitchProps';
import { Switch as SwitchComponent } from './Switch';

export default {
  title: 'Atoms/Form Element/Switch',
  component: SwitchComponent,
  argTypes: {},
} as Meta;

const SwitchTemplate: Story<SwitchProps> = (
  args: SwitchProps,
): ReactElement => {
  return <SwitchComponent {...args} />;
};

export const Switch = SwitchTemplate.bind({});

Switch.args = {
  color: 'primary',
};
