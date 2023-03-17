import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { Radio as RadioComponent } from '~/atoms/formElement/Radio/Radio';
import { RadioProps } from './interfaces/RadioProps';

export default {
  title: 'Atoms/Form Element/Radio',
  component: RadioComponent,
  argTypes: {},
} as Meta;

const RadioTemplate: Story<RadioProps> = (args: RadioProps): ReactElement => {
  return <RadioComponent {...args} />;
};

export const Radio = RadioTemplate.bind({});
