import { SelectOption } from '@/interfaces';
import { FilterSelectItem } from '@/types';

export const isItemSelected = (
  selectedOptions: SelectOption | SelectOption[],
  item: FilterSelectItem,
  isMulti?: boolean
): boolean => {
  if (isMulti) {
    return (selectedOptions as SelectOption[]).some(
      (option) => item.value === option.value
    );
  }

  return (
    (selectedOptions as SelectOption).value === item.value && !item.selected
  );
};
