import React, { FC, ReactElement } from 'react';

import { LabelProps } from '@/interfaces';
import { StyledLabel } from './Label.styles';

const Label: FC<LabelProps> = (props): ReactElement => {
  const {
    label,
    labelColor,
    isValid,
    isTouched,
    focused,
    labelFor,
    clickable,
    onClick,
    required,
  } = props;

  return (
    <StyledLabel
      color={labelColor}
      isValid={isValid}
      isTouched={isTouched}
      focused={focused}
      htmlFor={labelFor}
      onClick={onClick}
      clickable={clickable}
    >
      {/* TODO: make proper label */}
      {label}
      {required ? ' *' : ''}
    </StyledLabel>
  );
};

export default Label;
