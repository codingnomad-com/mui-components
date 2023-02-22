import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';

import { DividerComponent } from './Divider';

export default {
  title: 'Basic Components/Atoms/Typography/Divider',
  component: DividerComponent,
  argTypes: {},
} as Meta;

const DividerTemplate: Story = (): ReactElement => (
  <>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    <DividerComponent />
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </>
);

export const Divider = DividerTemplate.bind({});

Divider.args = {};
