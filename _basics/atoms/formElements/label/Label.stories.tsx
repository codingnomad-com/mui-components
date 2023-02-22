import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';
import { LabelProps } from '@/interfaces';

import LabelComponent from './Label';

export default {
  title: 'Basic Components/Atoms/Form Elements/Label',
  component: LabelComponent,
  argTypes: {},
} as Meta;

const LabelTemplate: Story<LabelProps> = (args: LabelProps): ReactElement => (
  <LabelComponent {...args} />
);

export const Label = LabelTemplate.bind({});

Label.args = {
  label: 'Label',
  focused: false,
  required: true,
  isTouched: false,
  isValid: false,
  isLoading: false,
};
