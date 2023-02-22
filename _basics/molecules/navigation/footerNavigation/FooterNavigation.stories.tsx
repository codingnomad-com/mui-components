/* eslint-disable no-console */

import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import FooterNavigationComponent from './FooterNavigation';
import { FooterNavigationProps } from '@/interfaces';

export default {
  title: 'Basic Components/Molecules/Navigation/Footer Navigation',
  component: FooterNavigationComponent,
  argTypes: {},
} as Meta;

const FooterNavigationTemplate: Story<FooterNavigationProps> = (
  args: FooterNavigationProps
): ReactElement => (
  <Router>
    <FooterNavigationComponent {...args}></FooterNavigationComponent>
  </Router>
);

export const FooterNavigation = FooterNavigationTemplate.bind({});

FooterNavigation.args = {
  footerNavigationItems: [
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
