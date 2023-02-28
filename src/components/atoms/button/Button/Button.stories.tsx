import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';

import { Button as ButtonComponent } from './Button';
import { ButtonProps } from './interfaces/ButtonProps';

export default {
  title: 'Atoms/Buttons/Button',
  component: ButtonComponent,
  argTypes: {},
} as Meta;

const ButtonTemplate: Story<ButtonProps> = (
  args: ButtonProps,
): ReactElement => {
  return <ButtonComponent {...args} />;
};

export const Button = ButtonTemplate.bind({});

Button.args = {
  color: 'primary',
  label: 'I am a button',
  size: 'medium',
  variant: 'contained',
};
