/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

import { Meta, Story } from '@storybook/react';
import React, { ReactElement, useState } from 'react';
import { SelectProps } from '@/interfaces';

import SelectComponent from './Select';

export default {
  title: 'Basic Components/Atoms/Form Elements/Select',
  component: SelectComponent,
  argTypes: {},
} as Meta;

const SelectTemplate: Story<SelectProps> = (
  args: SelectProps
): ReactElement => {
  const { isMulti, selectSelectedOptions: preSelectedOptions } = args;

  const [selectSelectedOptions, setSelectSelectedOptions] =
    useState(preSelectedOptions);

  const handleSelectChange = (options: any) => {
    if (!isMulti) {
      setSelectSelectedOptions(options.value);
    } else {
      setSelectSelectedOptions(options.map((o: any) => o.value));
      console.log(`options`, options);
    }
  };

  return (
    <SelectComponent
      {...args}
      handleSelectChange={handleSelectChange}
      selectSelectedOptions={selectSelectedOptions}
    />
  );
};

export const Select = SelectTemplate.bind({});

Select.args = {
  selectLabel: 'Sortierung',
  selectOptions: [
    {
      value: '1',
      label: 'senf',
    },
    { value: '2', label: 'mayo' },
    { value: '3', label: 'ketchup' },
  ],
  selectSelectedOption: '3',
  handleSelectChange: (value: string) => console.log('value', value),
};
