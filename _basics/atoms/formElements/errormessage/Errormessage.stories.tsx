import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';

import ErrormessageComponent from './Errormessage';
import { ErrormessageProps } from '@/interfaces';

export default {
  title: 'Basic Components/Atoms/Form Elements/Errormessage',
  component: ErrormessageComponent,
  argTypes: {},
} as Meta;

const ErrormessageTemplate: Story<ErrormessageProps> = (
  args: ErrormessageProps
): ReactElement => <ErrormessageComponent {...args} />;

export const Errormessage = ErrormessageTemplate.bind({});

Errormessage.args = {
  message: 'Bitte füllen Sie dieses Feld aus.',
  isLoading: false,
};
