/* eslint-disable no-console */

import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainNavigationProps } from '@/interfaces';

import MainNavigationComponent from './MainNavigation';

export default {
  title: 'Basic Components/Molecules/Navigation/Main Navigation',
  component: MainNavigationComponent,
  argTypes: {},
} as Meta;

const MainNavigationTemplate: Story<MainNavigationProps> = (
  args: MainNavigationProps
): ReactElement => (
  <Router>
    <MainNavigationComponent {...args}></MainNavigationComponent>
  </Router>
);

export const MainNavigation = MainNavigationTemplate.bind({});

MainNavigation.args = {
  mainNavigationItems: [
    {
      title: 'Dashboard',
      link: '/dashboard',
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
  highlightActiveItem: true,
};
