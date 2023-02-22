import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';

import InputComponent from './Input';
import { InputProps } from '@/interfaces';

export default {
  title: 'Basic Components/Molecules/Form Elements/Input',
  component: InputComponent,
  argTypes: {},
} as Meta;

const InputTemplate: Story<InputProps> = (args: InputProps): ReactElement => (
  <InputComponent {...args} />
);

export const Input = InputTemplate.bind({});

Input.args = {
  type: 'text',
  required: false,
  validation: 'none',
  label: 'Inputlabel',
  placeholder: 'Inputplaceholder',
  fieldTextColor: 'black',
  labelColor: 'black',
  handleValueChange: () => null,
};
