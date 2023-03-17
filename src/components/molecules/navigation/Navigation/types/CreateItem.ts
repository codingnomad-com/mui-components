import type { MaterialIconName } from '~/atoms/icon/MaterialIcon/types/MaterialIconName';

export type CreateItem = {
  label: string;
  icon?: MaterialIconName;
  onCreate?: () => {};
};
