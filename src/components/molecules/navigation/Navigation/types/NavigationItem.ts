import { MaterialIconName } from '~/atoms/icon/MaterialIcon/types/MaterialIconName';

export type NavigationItem = {
  key: string;
  title: string;
  bulletIcon?: MaterialIconName;
  onClick?: () => {};
};
