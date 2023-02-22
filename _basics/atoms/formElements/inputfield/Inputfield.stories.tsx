import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';

import InputfieldComponent from './Inputfield';
import { InputfieldProps } from '@/interfaces';

export default {
  title: 'Basic Components/Atoms/Form Elements/Inputfield',
  component: InputfieldComponent,
  argTypes: {},
} as Meta;

const InputfieldTemplate: Story<InputfieldProps> = (
  args: InputfieldProps
): ReactElement => (
  <div style={{ marginTop: 20 }}>
    <InputfieldComponent {...args} />
  </div>
);

export const Inputfield = InputfieldTemplate.bind({});

Inputfield.args = {
  fieldTextColor: 'primary',
  icon: 'search',
  isTouched: false,
  isValid: false,
  placeholder: 'Placeholder',
  type: 'text',
  inputProps: {
    placeholder: 'senf',
  },
};
