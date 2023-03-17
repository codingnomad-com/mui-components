import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { Headline as HeadlineComponent } from './Headline';
import { HeadlineProps } from './interfaces/HeadlineProps';

export default {
  title: 'Atoms/Typography/Headline',
  component: HeadlineComponent,
  argTypes: {},
} as Meta;

const HeadlineTemplate: Story<HeadlineProps> = (
  args: HeadlineProps,
): ReactElement => {
  return <HeadlineComponent {...args} />;
};

export const Headline = HeadlineTemplate.bind({});

Headline.args = {
  label: 'I am a Headline',
  variant: 'h1',
  align: 'left',
};
