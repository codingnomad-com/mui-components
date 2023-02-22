/* eslint-disable no-console */
import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';
import { TabsProps } from '@/interfaces';

import TabsComponent from './Tabs';

export default {
  title: 'Basic Components/Molecules/Navigation/Tabs',
  component: TabsComponent,
  argTypes: {},
} as Meta;

const handleClick = (value: string) => {
  console.log(`value`, value);
};

const TabsTemplate: Story<TabsProps> = (args: TabsProps): ReactElement => (
  <TabsComponent {...args} />
);

export const Tabs = TabsTemplate.bind({});

const items = [
  {
    label: 'Cashback',
    value: '1',
    linkType: 'href',
    href: 'https://www.google.com',
    targetBlank: 'blank',
  },
  {
    label: 'Regio Cashback',
    value: '2',
    linkType: 'href',
    href: 'http://www.web.de',
  },
  { label: 'Reisen', value: '3', linkType: 'callback' },
  { label: 'Events', value: '4', linkType: 'callback' },
];

Tabs.args = {
  tabItems: items,
  textColor: 'primary',
  activeTextColor: 'white',
  backgroundColor: 'white',
  activeBackgroundColor: 'primary',
  size: 'medium',
  borderColor: 'primary',
  buttonSpacing: 'md',
  activeTab: items[1].value,
  handleClick,
};
