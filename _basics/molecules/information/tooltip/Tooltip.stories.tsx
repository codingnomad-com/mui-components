import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';
import { TooltipProps } from '@/interfaces';

import TooltipComponent from './Tooltip';

export default {
  title: 'Basic Components/Molecules/Information/Tooltip',
  component: TooltipComponent,
  argTypes: {},
} as Meta;

const TooltipTemplate: Story<TooltipProps> = (
  args: TooltipProps
): ReactElement => (
  <div>
    <div style={{ height: '200px' }} />

    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TooltipComponent {...args}>
        <img
          src="https://httpstatusdogs.com/img/100.jpg"
          width="500px"
          alt="jung"
        />
      </TooltipComponent>
    </div>

    <div style={{ height: '200px' }} />
  </div>
);

export const Tooltip = TooltipTemplate.bind({});

Tooltip.args = {
  tooltipText: 'this is a tooltip',
  tooltipColor: 'gray',
  tooltipBackgroundColor: 'primary',
  tooltipPosition: 'bottomCenter',
};
