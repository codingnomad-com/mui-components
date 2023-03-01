import { ReactElement } from 'react';

export interface TabPanelProps {
  children: ReactElement | ReactElement[];
  index: number;
  tabsId: string;
  value: number;
}
