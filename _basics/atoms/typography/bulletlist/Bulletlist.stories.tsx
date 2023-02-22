import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';

import BulletlistComponent from './Bulletlist';
import { BulletlistProps } from '@/interfaces';

export default {
  title: 'Basic Components/Atoms/Typography/Bulletlist',
  component: BulletlistComponent,
  argTypes: {},
} as Meta;

const BulletlistTemplate: Story<BulletlistProps> = (
  args: BulletlistProps
): ReactElement => <BulletlistComponent {...args} />;

export const Bulletlist = BulletlistTemplate.bind({});

Bulletlist.args = {
  fontWeight: 'normal',
  bulletType: 'bullets',
  bulletColor: 'primary',
  bulletTextColor: 'gray',
  items: [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      iconName: 'quidditch',
    },
    {
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
};
