import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { OverlineProps } from './interfaces/OverlineProps';
import { Overline as OverlineComponent } from './Overline';

export default {
  title: 'Atoms/Typography/Overline',
  component: OverlineComponent,
  argTypes: {},
} as Meta;

const OverlineTemplate: Story<OverlineProps> = (
  args: OverlineProps,
): ReactElement => {
  return <OverlineComponent {...args} />;
};

export const Overline = OverlineTemplate.bind({});

Overline.args = {
  align: 'left',
  label: 'I am a Overline',
};
