import React, { FC, ReactElement } from 'react';

import Fontawesome from '@basics/atoms/icons/fontawesome/Fontawesome';
import { InputfieldProps } from '@/interfaces';
import { StyledInputfield, StyledInputFieldIcon } from './Inputfield.styles';

const Inputfield: FC<InputfieldProps> = (props): ReactElement => {
  const {
    fieldTextColor,
    hasValidation,
    icon,
    iconColor,
    inputProps,
    isTouched,
    isValid,
    textAlign,
  } = props;

  return (
    <div style={{ position: 'relative' }}>
      <StyledInputfield
        icon={icon}
        isTouched={isTouched}
        isValid={isValid}
        fieldTextColor={fieldTextColor}
        hasValidation={hasValidation}
        textAlign={textAlign}
        {...inputProps}
      />

      {icon && (
        <StyledInputFieldIcon>
          <Fontawesome
            iconColor={iconColor || 'primary'}
            iconName={icon}
            iconSize="normal"
          />
        </StyledInputFieldIcon>
      )}
    </div>
  );
};

export default Inputfield;
