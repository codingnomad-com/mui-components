import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';

import Paragraph from '@basics/atoms/typography/paragraph/Paragraph';
import TwoColumnsComponent from './TwoColumns';
import { TwoColumnsProps } from '@/interfaces';

export default {
  title: 'Basic Components/Templates/Columns/Two Columns',
  component: TwoColumnsComponent,
  argTypes: {},
} as Meta;

const TwoColumnsTemplate: Story<TwoColumnsProps> = (
  args: TwoColumnsProps
): ReactElement => (
  <TwoColumnsComponent
    leftColumnChildren={<Paragraph>Left Column</Paragraph>}
    rightColumnChildren={<Paragraph>Right Column</Paragraph>}
    {...args}
  ></TwoColumnsComponent>
);

export const TwoColumns = TwoColumnsTemplate.bind({});

TwoColumns.args = {
  columnsRatio: '3:1',
};
