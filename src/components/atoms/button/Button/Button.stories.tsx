import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

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
  // startIcon: <SvgIcon svgPath="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></SvgIcon>,
};
