/* eslint-disable no-console */
import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';

import PriceSumComponent from './PriceSum';
import { PriceSumProps } from '@/interfaces';

export default {
  title: 'Basic Components/Molecules/Table/PriceSum',
  component: PriceSumComponent,
  argTypes: {},
} as Meta;

const PriceSumTemplate: Story<PriceSumProps> = (
  args: PriceSumProps
): ReactElement => <PriceSumComponent {...args} />;

export const PriceSum = PriceSumTemplate.bind({});

PriceSum.args = {
  netAmount: 100,
  country: 'DE',
};
