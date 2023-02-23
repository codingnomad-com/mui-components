import MuiButton from '@mui/material/Button';
import * as React from 'react';
import { FC, ReactElement } from 'react';
import { ButtonProps } from '~/interfaces';

const Button: FC<ButtonProps> = (props): ReactElement => {
  const {
    color = 'primary',
    label,
    size = 'medium',
    variant = 'contained',
  } = props;

  return (
    <div>
      <MuiButton color={color} size={size} variant={variant}>
        {label}
      </MuiButton>
    </div>
  );
};

export default Button;
