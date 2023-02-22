import React, { FC, ReactElement, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Label from '@basics/atoms/formElements/label/Label';
import { FormFieldProps } from '@/interfaces';
import Theme from '@/theme/themeTypes';

import { StyledError } from './FormField.styles';

// eslint-disable-next-line @typescript-eslint/naming-convention

const FormField: FC<FormFieldProps> = (props): ReactElement => {
  const {
    item: { label = '', customError } = {},
    children,
    error,
    style = {},
  } = props;

  const { content: { formFieldError = '' } = {} } = useContext(
    ThemeContext,
  ) as Theme;

  return (
    <div style={style}>
      <Label label={label} style={label ? {} : { visibility: 'hidden' }} />

      {children}

      <StyledError style={error ? {} : { visibility: 'hidden' }}>
        {customError || formFieldError}
      </StyledError>
    </div>
  );
};

export default FormField;
