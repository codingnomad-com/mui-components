import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';
import { TextfieldProps } from '@/interfaces';

import TextfieldComponent from './Textfield';

export default {
  title: 'Basic Components/Atoms/Form Elements/Textfield',
  component: TextfieldComponent,
  argTypes: {},
} as Meta;

const TextfieldTemplate: Story<TextfieldProps> = (
  args: TextfieldProps
): ReactElement => <TextfieldComponent {...args} />;

export const Textfield = TextfieldTemplate.bind({});

Textfield.args = {
  placeholder: 'Placeholder',
  height: '250px',
  textColor: 'primary',
  isTouched: false,
  isValid: false,
};
