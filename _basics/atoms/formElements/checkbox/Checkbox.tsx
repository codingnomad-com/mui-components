import React, { FC, ReactElement, ChangeEvent } from 'react';
import slugify from 'limax';

import Label from '@basics/atoms/formElements/label/Label';

import { CheckboxOption, CheckboxProps } from '@/interfaces';
import {
  StyledCheckbox,
  StyledCheckboxContainer,
  StyledCheckboxGroupWrapper,
} from './Checkbox.styles';

const Checkbox: FC<CheckboxProps> = (props): ReactElement => {
  const { options, textColor, handleClick } = props;

  return (
    <StyledCheckboxGroupWrapper {...props}>
      {options.map((option: CheckboxOption, key: number) => (
        <StyledCheckboxContainer key={key} {...props}>
          <StyledCheckbox
            checked={option.selected}
            id={
              typeof option.label === 'string'
                ? slugify(option.label)
                : slugify(option.value.toString())
            }
            onChange={(event: ChangeEvent) =>
              handleClick(
                option.value,
                (event.target as HTMLInputElement).checked,
              )
            }
          />

          <Label
            label={option.label}
            labelFor={
              typeof option.label === 'string'
                ? option.label
                : option.value.toString()
            }
            onClick={() => {
              handleClick(option.value, true);
            }}
            labelColor={textColor}
          />
        </StyledCheckboxContainer>
      ))}
    </StyledCheckboxGroupWrapper>
  );
};

export default Checkbox;
