import { QuickFilterItem } from '@/types';

export const isItemSelected = (
  item: QuickFilterItem,
  clickedItem: QuickFilterItem
): boolean => {
  if (item.value === clickedItem.value && item.name === clickedItem.name) {
    return !clickedItem.selected;
  }

  if (item.name === clickedItem.name) {
    return false;
  }

  return item.selected;
};
