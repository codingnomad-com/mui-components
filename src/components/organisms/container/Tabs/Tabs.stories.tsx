import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { Button } from '../../../atoms/button/Button/Button';
import { TabsProps } from './interfaces/TabsProps';
import { Tabs as TabsComponent } from './Tabs';

export default {
  title: 'Organisms/Container/Tabs',
  component: TabsComponent,
  argTypes: {},
} as Meta;

const TabsTemplate: Story<TabsProps> = (args: TabsProps): ReactElement => {
  const tabs = [
    {
      label: 'Tab 1',
      children: (
        <>
          <Button label="Button tab 1" />

          <div>Test</div>
        </>
      ),
    },
    {
      label: 'Tab 2',
      children: <Button label="Button tab 2" />,
    },
    {
      label: 'Tab 3',
      children: <Button label="Button tab 3" />,
    },
  ];

  return <TabsComponent {...args} tabs={tabs} />;
};

export const Tabs = TabsTemplate.bind({});

Tabs.args = {};
