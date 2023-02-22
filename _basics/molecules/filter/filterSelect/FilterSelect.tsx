import React, { FC, ReactElement } from 'react';

import Select from '@basics/atoms/formElements/select/Select';
import { SelectOption, FilterSelectProps } from '@/interfaces';
import { isItemSelected } from './helper';

const FilterSelect: FC<FilterSelectProps> = (props): ReactElement => {
  const {
    handleChange,
    id,
    isMulti,
    items,
    labelColor,
    labelText,
    name,
    placeholder,
    placeholderColor,
    textColor,
  } = props;

  const handleSelectChange = (
    selectedOptions: SelectOption | SelectOption[],
  ) => {
    const updatedItems = items.map((item) => ({
      ...item,
      selected: isItemSelected(selectedOptions, item, isMulti),
    }));

    if (handleChange) handleChange(updatedItems, id);
  };

  const selectOptions = items.map((item) => ({
    value: item.value,
    label: item.label || '',
  }));

  const selectSelectedOptions: string[] = items
    .filter((item) => item.selected)
    .map((item) => item.value);

  return (
    <Select
      selectName={name}
      selectLabel={labelText}
      selectLabelColor={labelColor}
      selectLabelIndent="0px"
      selectTextColor={textColor}
      selectPlaceholder={placeholder}
      selectPlaceholderTextColor={placeholderColor}
      handleSelectChange={handleSelectChange}
      selectOptions={selectOptions}
      selectSelectedOptions={selectSelectedOptions}
      isMulti={isMulti}
    />
  );
};

export default FilterSelect;
