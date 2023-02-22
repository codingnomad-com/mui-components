import React, { FC, ReactElement } from 'react';

import DatePicker from '@basics/atoms/formElements/datePicker/DatePicker';
import { getYYYYMMDDDate } from '@mehrwerk/utilities';
import { DatePickerFilterProps } from '@/interfaces';

const DateFilter: FC<DatePickerFilterProps> = (props): ReactElement => {
  const { value, id, label, handleChange } = props;

  const handleChangeDatePicker = (newValue: Date) => {
    const formattedDate = getYYYYMMDDDate(newValue);
    if (handleChange) handleChange(String(formattedDate), id);
  };

  return (
    <DatePicker
      value={value}
      handleChange={handleChangeDatePicker}
      labelProps={label ? { label } : undefined}
    />
  );
};

export default DateFilter;
