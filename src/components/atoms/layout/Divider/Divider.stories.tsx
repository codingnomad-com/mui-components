import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { Divider as DividerComponent } from './Divider';
import { DividerProps } from './interfaces/DividerProps';

export default {
  title: 'Atoms/Layout/Divider',
  component: DividerComponent,
  argTypes: {},
} as Meta;

const DividerTemplate: Story<DividerProps> = (
  args: DividerProps,
): ReactElement => {
  return <DividerComponent {...args} />;
};

export const Divider = DividerTemplate.bind({});

Divider.args = {
  oriantation: 'horizontal',
};
