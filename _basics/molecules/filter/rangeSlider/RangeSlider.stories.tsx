/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Meta, Story } from '@storybook/react';
import React, { ReactElement, useState } from 'react';
import { RangeSliderProps } from '@/interfaces';

import RangeSliderComponent from './RangeSlider';

export default {
  title: 'Basic Components/Molecules/Filter/RangeSlider',
  component: RangeSliderComponent,
  argTypes: {},
} as Meta;

const RangeSliderTemplate: Story<RangeSliderProps> = (): ReactElement => {
  const [values, setValues] = useState({ minValue: 100, maxValue: 500 });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (vals: any) => {
    setValues(vals);
  };

  const props: RangeSliderProps = {
    id: 'prs',
    label: 'Preis filtern',
    type: 'rangeSlider',
    name: 'priceRamge',
    minValue: values.minValue,
    maxValue: values.maxValue,
    minLabel: 'von',
    maxLabel: 'bis',
    highestPossible: 1300,
    handleChange,
  };

  return (
    <div onClick={() => console.log('values', values)}>
      <RangeSliderComponent {...props} />
    </div>
  );
};

export const RangeSlider = RangeSliderTemplate.bind({});

RangeSlider.args = {};
