import React, { FC, ReactElement, useState } from 'react';

import Checkbox from '@basics/atoms/formElements/checkbox/Checkbox';
import { CheckboxOption, RadioButtonGroupProps } from '@/interfaces';

const RadioButtonGroup: FC<RadioButtonGroupProps> = (props): ReactElement => {
  const { buttons = [], id, preSelectedValue, handleChange } = props;

  const checkboxOptions = buttons.map((button) => ({
    label: button.label || '',
    selected: button.value === preSelectedValue,
    value: button.value,
  }));

  const [state, setState] = useState<CheckboxOption[]>(checkboxOptions);

  const handleClickCheckbox = (value: string) => {
    if ((state.find(({ selected }) => selected)?.value || '') === value) return;

    const updatedState = state.map((button) => ({
      ...button,
      selected: button.value === value,
    }));

    setState(updatedState);

    if (handleChange) handleChange(value, id);
  };

  return <Checkbox options={state} handleClick={handleClickCheckbox} />;
};

export default RadioButtonGroup;
