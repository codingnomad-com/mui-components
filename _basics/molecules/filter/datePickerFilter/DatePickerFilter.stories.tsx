/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Meta, Story } from '@storybook/react';
import React, { ReactElement, useState } from 'react';
import { DatePickerFilterProps } from '@/interfaces';
import Component from './DatePickerFilter';

export default {
  title: 'Basic Components/Molecules/Filter/Date Picker Filter',
  component: Component,
  argTypes: {},
} as Meta;

const DatePickerFilterTemplate: Story<DatePickerFilterProps> = (
  args: DatePickerFilterProps
): ReactElement => {
  const [value, setValue] = useState('');

  const handleChange = (result: string) => {
    setValue(result);
  };

  return <Component {...args} value={value} handleChange={handleChange} />;
};

export const DatePickerFilter = DatePickerFilterTemplate.bind({});

DatePickerFilter.args = {
  label: 'Datum auswaehlen',
};
