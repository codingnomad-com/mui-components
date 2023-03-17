import { MaterialIconName } from '~/atoms/icon/MaterialIcon/types/MaterialIconName';
import { CreateItem } from './CreateItem';
import { NavigationItem } from './NavigationItem';

export type NavigationCategory = {
  key: string;
  title: string;
  icon?: MaterialIconName;
  defaultOpen?: boolean;
  expandIcon?: MaterialIconName;
  collapseIcon?: MaterialIconName;
  createItemConf?: CreateItem;
  items?: NavigationItem[];
  onClick?: () => {};
};
