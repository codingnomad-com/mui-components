import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';

import Paragraph from '@basics/atoms/typography/paragraph/Paragraph';
import SingleColumnComponent from './SingleColumn';
import { SingleColumnProps } from '@/interfaces';

export default {
  title: 'Basic Components/Templates/Columns/Single Column',
  component: SingleColumnComponent,
  argTypes: {},
} as Meta;

const SingleColumnTemplate: Story<SingleColumnProps> = (): ReactElement => (
  <SingleColumnComponent>
    <Paragraph>SingleColumn</Paragraph>
  </SingleColumnComponent>
);

export const SingleColumn = SingleColumnTemplate.bind({});
