import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';

import Fontawesome from '@basics/atoms/icons/fontawesome/Fontawesome';
import HiddenComponent from './Hidden';
import { HiddenProps } from '@/interfaces';

export default {
  title: 'Basic Components/Shared/Layout/Hidden',
  component: HiddenComponent,
  argTypes: {},
} as Meta;

const HiddenTemplate: Story<HiddenProps> = (
  args: HiddenProps
): ReactElement => (
  <HiddenComponent {...args}>
    <Fontawesome iconName="beer" iconStyle="regular" iconColor="primary" />
  </HiddenComponent>
);

export const Hidden = HiddenTemplate.bind({});

Hidden.args = {
  hidden: false,
  lgDown: false,
  lgUp: false,
  mdDown: false,
  mdUp: false,
  smDown: false,
  smUp: false,
  xlDown: false,
  xlUp: false,
  xsDown: false,
  xsUp: false,
};
