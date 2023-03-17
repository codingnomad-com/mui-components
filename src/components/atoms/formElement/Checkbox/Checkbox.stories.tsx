import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { Checkbox as CheckboxComponent } from './Checkbox';
import { CheckboxProps } from './interfaces/CheckboxProps';

export default {
  title: 'Atoms/Form Element/Checkbox',
  component: CheckboxComponent,
  argTypes: {},
} as Meta;

const CheckboxTemplate: Story<CheckboxProps> = (
  args: CheckboxProps,
): ReactElement => {
  return <CheckboxComponent {...args} />;
};

export const Checkbox = CheckboxTemplate.bind({});

Checkbox.args = {
  checked: true,
  color: 'success',
  defaultChecked: true,
};
