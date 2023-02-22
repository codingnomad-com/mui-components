/* eslint-disable no-console */
import { Meta, Story } from '@storybook/react';
import React, { ReactElement, useState } from 'react';

import Component from './DatePicker';
import { DatePickerProps } from '@/interfaces';

export default {
  title: 'Basic Components/Atoms/Form Elements/Date Picker',
  component: Component,
  argTypes: {},
} as Meta;

const DatePickerTemplate: Story<DatePickerProps> = (
  args: DatePickerProps
): ReactElement => {
  const [state, setState] = useState<Date>();

  const handleChange = (value: Date) => setState(value);
  return <Component {...args} handleChange={handleChange} value={state} />;
};

export const DatePicker = DatePickerTemplate.bind({});

DatePicker.args = {
  labelProps: {
    label: 'Hallo',
  },
  // value: '2022-01-0222222',
  // handleChange: (date: Date) => console.log('date', date),
};
