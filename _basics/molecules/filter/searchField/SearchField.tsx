import React, { FC, ReactElement, KeyboardEvent } from 'react';

import Input from '@basics/molecules/formElements/input/Input';
import { SearchFieldProps } from '@/interfaces';

const SearchField: FC<SearchFieldProps> = (props): ReactElement => {
  const {
    fieldTextColor,
    handleChange,
    handlePressEnter,
    id,
    label = '',
    labelColor,
    placeholder = '',
    minLength,
    value,
  } = props;

  const handleKeyPress = (event: KeyboardEvent) => {
    if (handlePressEnter && event.key === 'Enter') {
      handlePressEnter(value, id);
    }
  };

  // @todo add debouncing for event fire
  const handleValueChange = (val: string) =>
    handleChange && handleChange(val, id);

  return (
    <Input
      {...props}
      type="text"
      validation="none"
      icon="search"
      label={label}
      value={value}
      minLength={minLength}
      placeholder={placeholder}
      handleValueChange={handleValueChange}
      fieldTextColor={fieldTextColor}
      labelColor={labelColor}
      handlePressEnter={handleKeyPress}
    />
  );
};

export default SearchField;
