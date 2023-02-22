import React, { FC, ReactElement } from 'react';

import Label from '@basics/atoms/formElements/label/Label';
import Errormessage from '@basics/atoms/formElements/errormessage/Errormessage';

import { SimpleCheckboxProps } from '@/interfaces';
import {
  StyledSimpleCheckbox,
  StyledSimpleCheckboxContainer,
} from './SimpleCheckbox.styles';

const SimpleCheckbox: FC<SimpleCheckboxProps> = (props): ReactElement => {
  const { labelProps, inputProps, errorMessage } = props;

  return (
    <>
      <StyledSimpleCheckboxContainer>
        <StyledSimpleCheckbox
          id={inputProps?.name || 'checkbox'}
          {...inputProps}
          type="checkbox"
        />

        <Label
          labelFor={inputProps?.name || 'checkbox'}
          required={inputProps?.required}
          {...labelProps}
        />
      </StyledSimpleCheckboxContainer>
      {/* TODO: make errormessage conditional (only show on validation errors) */}
      {errorMessage && <Errormessage message={errorMessage} />}
    </>
  );
};

export default SimpleCheckbox;
