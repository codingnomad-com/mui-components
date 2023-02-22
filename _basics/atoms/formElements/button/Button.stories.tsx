/* eslint-disable no-console */
import { Meta, Story } from '@storybook/react';
import React, { ReactElement, MouseEvent } from 'react';

import ButtonComponent from './Button';
import { ButtonProps } from '@/interfaces';

export default {
  title: 'Basic Components/Atoms/Form Elements/Button',
  component: ButtonComponent,
  argTypes: {},
} as Meta;

const ButtonTemplate: Story<ButtonProps> = (
  args: ButtonProps
): ReactElement => <ButtonComponent {...args} />;

export const Button = ButtonTemplate.bind({});

Button.args = {
  buttonLabel: 'Button',
  onClick: (event: MouseEvent) => console.log(`event`, event),
};
