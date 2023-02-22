import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';

import BoxComponent from './Box';
import { BoxProps } from '@/interfaces';

export default {
  title: 'Basic Components/Shared/Layout/Box',
  component: BoxComponent,
  argTypes: {},
} as Meta;

const BoxTemplate: Story<BoxProps> = (args: BoxProps): ReactElement => (
  <BoxComponent {...args}>aaa</BoxComponent>
);

export const Box = BoxTemplate.bind({});

Box.args = {};
