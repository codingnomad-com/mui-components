import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import MenuItem from '@mui/material/MenuItem';
import { SelectProps } from './interfaces/SelectProps';
import { Select as SelectComponent } from './Select';

export default {
  title: 'Atoms/Form Element/Select',
  component: SelectComponent,
  argTypes: {},
} as Meta;

const SelectTemplate: Story<SelectProps> = (
  args: SelectProps,
): ReactElement => {
  return (
    <SelectComponent {...args}>
      <MenuItem>Entry one</MenuItem>
      <MenuItem>Entry two</MenuItem>
      <MenuItem>Entry three</MenuItem>
    </SelectComponent>
  );
};

export const Select = SelectTemplate.bind({});

Select.args = {
  color: 'primary',
};
