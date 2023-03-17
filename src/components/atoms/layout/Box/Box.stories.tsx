import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { Box as BoxComponent } from './Box';
import { BoxProps } from './interfaces/BoxProps';

export default {
  title: 'Atoms/Layout/Box',
  component: BoxComponent,
  argTypes: {},
} as Meta;

const BoxTemplate: Story<BoxProps> = (args: BoxProps): ReactElement => {
  return <BoxComponent {...args}>I am a Box</BoxComponent>;
};

export const Box = BoxTemplate.bind({});
