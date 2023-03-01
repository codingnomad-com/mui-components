import { TabPanelProps } from './TabPanelProps';

type TabPanelBaseProps = Pick<TabPanelProps, 'children'>;

export interface TabProps extends TabPanelBaseProps {
  label: string;
}
