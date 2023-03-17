import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { TooltipProps } from './interfaces/TooltipProps';
import { Tooltip as TooltipComponent } from './Tooltip';

export default {
  title: 'Atoms/Information/Tooltip',
  component: TooltipComponent,
  argTypes: {},
} as Meta;

const TooltipTemplate: Story<TooltipProps> = (
  args: TooltipProps,
): ReactElement => {
  return (
    <TooltipComponent {...args}>
      <span>I have a Tooltip</span>
    </TooltipComponent>
  );
};

export const Tooltip = TooltipTemplate.bind({});

Tooltip.args = {
  arrow: true,
  placement: 'bottom',
  title: 'I am a Tooltip',
};
