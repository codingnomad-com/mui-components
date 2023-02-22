import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';

import HeadlineComponent from './Headline';
import { HeadlineProps } from '@/interfaces';

export default {
  title: 'Basic Components/Atoms/Typography/Headline',
  component: HeadlineComponent,
  argTypes: {},
} as Meta;

const HeadlineTemplate: Story<HeadlineProps> = (
  args: HeadlineProps
): ReactElement => {
  const { headlineLevel } = args;

  return (
    <>
      <HeadlineComponent {...args}>
        Headline ({headlineLevel})
      </HeadlineComponent>
      <HeadlineComponent {...args}>
        Headline Headline Headline Headline Headline Headline
      </HeadlineComponent>
    </>
  );
};

export const Headline = HeadlineTemplate.bind({});

Headline.args = {
  // headlineLevel: 'h1',
  // color: 'primary',
  // fontWeight: 'normal',
  // textAlign: 'left',
  // uppercase: false,
  // id: 'Headline (h1)',
};
