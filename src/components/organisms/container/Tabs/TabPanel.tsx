import { FC } from 'react';
import { TabPanelProps } from './interfaces/TabPanelProps';

export const TabPanel: FC<TabPanelProps> = (props) => {
  const { children, index, tabsId, value, ...rest } = props;

  const a11yProps = () => {
    return {
      id: `tabpanel-${tabsId}-${index}`,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'aria-labelledby': `tab-${tabsId}-${index}`,
    };
  };

  return (
    <div role="tabpanel" hidden={value !== index} {...a11yProps} {...rest}>
      {children}
    </div>
  );
};

export default TabPanel;
