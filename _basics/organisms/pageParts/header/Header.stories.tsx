import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';

import HeaderComponent from './Header';
import { HeaderProps } from '@/interfaces';

export default {
  title: 'Basic Components/Organisms/Page Parts/Header',
  component: HeaderComponent,
  argTypes: {},
} as Meta;

const HeaderTemplate: Story<HeaderProps> = (
  args: HeaderProps
): ReactElement => <HeaderComponent {...args} />;

export const Header = HeaderTemplate.bind({});

Header.args = {
  headerGridBackgroundColor: 'white',
  subNavigationGridBackgroundColor: 'primary',
  hasSubNavigation: true,
  isLoggedIn: false,
  mainNavigationItems: [
    {
      title: 'Dashboard',
      link: '/iframe.html',
      children: [
        {
          title: 'Child 1',
          link: '/',
        },
        {
          title: 'Child 2',
          link: '/iframe.html',
        },
        {
          title: 'Child 3',
          link: '/',
        },
        {
          title: 'Child 4',
          link: '/',
        },
      ],
    },
    {
      title: 'Shops & Produkte',
      link: '/shops',
    },
    {
      title: 'Reisen',
      link: '/travel',
    },
  ],
};
