import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { Input as InputComponent } from '~/atoms/formElement/Input/Input';
import { InputProps } from './interfaces/InputProps';

export default {
  title: 'Atoms/Form Element/Input',
  component: InputComponent,
  argTypes: {},
} as Meta;

const InputTemplate: Story<InputProps> = (args: InputProps): ReactElement => {
  return <InputComponent {...args} />;
};

export const Input = InputTemplate.bind({});

Input.args = {
  color: 'primary',
  label: 'I am a button',
  size: 'medium',
  variant: 'outlined',
};
