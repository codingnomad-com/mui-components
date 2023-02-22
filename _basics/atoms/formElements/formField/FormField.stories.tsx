import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';
import { FormFieldProps } from '@/interfaces';

import FormFieldComponent from './FormField';

export default {
  title: 'Basic Components/Atoms/Form Elements/Form Field',
  component: FormFieldComponent,
  argTypes: {},
} as Meta;

const FormFieldTemplate: Story<FormFieldProps> = (
  args: FormFieldProps
): ReactElement => <FormFieldComponent {...args} />;

export const FormField = FormFieldTemplate.bind({});

FormField.args = {
  item: {
    required: true,
    label: 'das ist das Label',
    customError: '',
  },
  children: <input type="text" />,
  error: true,
};
