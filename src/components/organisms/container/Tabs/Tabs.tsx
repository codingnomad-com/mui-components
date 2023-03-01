import MuiTab from '@mui/material/Tab';
import MuiTabs from '@mui/material/Tabs';
import * as React from 'react';
import { FC, SyntheticEvent, useState } from 'react';
import { TabProps } from './interfaces/TabProps';
import { TabsProps } from './interfaces/TabsProps';
import { TabPanel } from './TabPanel';

export const Tabs: FC<TabsProps> = (props) => {
  const { tabs } = props;

  const [value, setValue] = useState(0);

  const tabsId = `tabs-${Date.now()}`;

  const handleTabsChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const a11yProps = (index: number) => {
    return {
      id: `tab-${tabsId}-${index}`,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'aria-controls': `tabpanel-${tabsId}-${index}`,
    };
  };

  return (
    <div>
      <MuiTabs value={value} onChange={handleTabsChange} aria-label="Tabs">
        {tabs.map((tab: TabProps, key: number) => {
          const { label } = tab;

          return <MuiTab label={label} {...a11yProps(key)} key={key} />;
        })}
      </MuiTabs>

      {tabs.map((tab: TabProps, key: number) => {
        const { children } = tab;

        return (
          <TabPanel index={key} key={key} tabsId={tabsId} value={value}>
            {children}
          </TabPanel>
        );
      })}
    </div>
  );
};

export default Tabs;
