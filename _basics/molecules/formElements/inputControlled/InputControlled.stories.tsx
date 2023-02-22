import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';

import InputComponent from './InputControlled';
import { InputControlledProps } from '@/interfaces';

export default {
  title: 'Basic Components/Molecules/Form Elements/InputControlled',
  component: InputComponent,
  argTypes: {},
} as Meta;

const InputTemplate: Story<InputControlledProps> = (
  args: InputControlledProps
): ReactElement => <InputComponent {...args} />;

export const Input = InputTemplate.bind({});

Input.args = {
  type: 'text',
  required: false,
  labelProps: {
    label: 'Inputlabel',
    labelColor: 'black',
  },
  inputProps: {
    value: 'test',
    placeholder: 'Inputplaceholder',
  },
  fieldTextColor: 'black',
  handleValueChange: () => null,
};
