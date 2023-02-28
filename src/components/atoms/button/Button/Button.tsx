import MuiButton from '@mui/material/Button';
import * as React from 'react';
import { FC } from 'react';
import { ButtonProps } from './interfaces/ButtonProps';

export const Button: FC<ButtonProps> = (props) => {
  const {
    color = 'primary',
    label,
    size = 'medium',
    variant = 'contained',
    onClick,
  } = props;

  return (
    <MuiButton
      color={color}
      size={size}
      variant={variant}
      onClick={onClick ? (event) => onClick(event) : undefined}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
