/* eslint-disable no-console */
import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';

import BacklinkComponent from './Backlink';
import { BacklinkProps } from '@/interfaces';

export default {
  title: 'Basic Components/Molecules/Navigation/Backlink',
  component: BacklinkComponent,
  argTypes: {},
} as Meta;

const BacklinkTemplate: Story<BacklinkProps> = (
  args: BacklinkProps
): ReactElement => <BacklinkComponent {...args} />;

export const Backlink = BacklinkTemplate.bind({});

Backlink.args = {
  buttonLabel: 'zurück zur Übersicht',
  buttonSize: 'small',
  buttonSpacing: '0px',
  buttonColor: 'transparent',
  buttonBorderColor: 'transparent',
  buttonBorderRadius: '0px',
  buttonTextColor: 'primary',
  iconName: 'angle-left',
  iconStyle: 'light',
};
