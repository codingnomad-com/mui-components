import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';

import ButtonComponent from '~/atoms/buttons/Button/Button';
import { ButtonProps } from '~/types';

export default {
  title: 'Atoms/Buttons/Button',
  component: ButtonComponent,
  argTypes: {},
} as Meta;

const ButtonTemplate: Story<ButtonProps> = (
  args: ButtonProps,
): ReactElement => {
  return <ButtonComponent {...args}></ButtonComponent>;
};

export const Button = ButtonTemplate.bind({});

Button.args = {
  color: 'primary',
  label: 'I am a button',
  size: 'medium',
  variant: 'contained',
};
