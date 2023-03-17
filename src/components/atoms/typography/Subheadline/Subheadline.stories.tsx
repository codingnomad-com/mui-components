import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { SubheadlineProps } from './interfaces/SubheadlineProps';
import { Subheadline as SubheadlineComponent } from './Subheadline';

export default {
  title: 'Atoms/Typography/Subheadline',
  component: SubheadlineComponent,
  argTypes: {},
} as Meta;

const SubheadlineTemplate: Story<SubheadlineProps> = (
  args: SubheadlineProps,
): ReactElement => {
  return <SubheadlineComponent {...args} />;
};

export const Subheadline = SubheadlineTemplate.bind({});

Subheadline.args = {
  align: 'left',
  label: 'I am a Subheadline',
};
