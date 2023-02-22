/* eslint-disable no-console */

import { Meta, Story } from '@storybook/react';
import React, { ReactElement, useState, useEffect } from 'react';

import CheckboxComponent from './Checkbox';
import { CheckboxProps } from '@/interfaces';

export default {
  title: 'Basic Components/Atoms/Form Elements/Checkbox',
  component: CheckboxComponent,
  argTypes: {},
} as Meta;

const CheckboxTemplate: Story<CheckboxProps> = (
  args: CheckboxProps
): ReactElement => {
  const { options } = args;
  const [compOptions, setcompOptions] = useState(options);

  useEffect(() => {
    setcompOptions(options);
  }, [options]);

  const handleClick = (value: string, checked: boolean) => {
    const updatedOptions = compOptions.map((option) =>
      option.value === value ? { ...option, selected: checked } : option
    );

    console.log(
      `options`,
      updatedOptions
        .reduce(
          (result, option) =>
            `${result}${option.label}: ${option.selected ? 'jo' : 'no'}, `,
          ''
        )
        .slice(0, -2)
    );

    setcompOptions(updatedOptions);
  };

  const compArgs = {
    ...args,
    options: compOptions,
    handleClick,
  };

  return <CheckboxComponent {...compArgs}></CheckboxComponent>;
};

export const Checkbox = CheckboxTemplate.bind({});

Checkbox.args = {
  options: [
    {
      value: '1',
      label: 'LAAABEL',
      selected: false,
      required: false,
      errorMessage: 'helllo hier ist 1 error',
    },
    {
      value: '2',
      label: 'LAAABEL 2',
      selected: false,
      required: false,
      errorMessage: 'helllo hier ist 2 error',
    },
  ],
  isTouched: true,
  isValid: true,
};
