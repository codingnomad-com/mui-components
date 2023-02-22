import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';

import Component from './RadioButtonGroup';
import { RadioButtonGroupProps } from '@/interfaces';

export default {
  title: 'Basic Components/Molecules/Form Elements/Radio Button Group',
  component: Component,
  argTypes: {},
} as Meta;

const RadioButtonGroupTemplate: Story<RadioButtonGroupProps> = (
  args: RadioButtonGroupProps
): ReactElement => <Component {...args} />;

export const RadioButtonGroup = RadioButtonGroupTemplate.bind({});

RadioButtonGroup.args = {
  buttons: [
    {
      value: 'guinea',
      label: 'Meerscheinchen',
    },
    {
      value: 'hamster',
      label: 'Hamster',
    },
    {
      value: 'rabbit',
      label: 'Hoppelhase',
    },
  ],
  preSelectedValue: 'rabbit',
  handleChange: (val: string) => console.log(val),
};
