/* eslint-disable no-console */

import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SubNavigationProps } from '@/interfaces';

import SubNavigationComponent from './SubNavigation';

export default {
  title: 'Basic Components/Molecules/Navigation/Sub Navigation',
  component: SubNavigationComponent,
  argTypes: {},
} as Meta;

const SubNavigationTemplate: Story<SubNavigationProps> = (
  args: SubNavigationProps
): ReactElement => (
  <Router>
    <SubNavigationComponent {...args}></SubNavigationComponent>
  </Router>
);

export const SubNavigation = SubNavigationTemplate.bind({});

SubNavigation.args = {
  subNavigationItems: [
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
