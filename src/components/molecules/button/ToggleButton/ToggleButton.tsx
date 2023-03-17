import MuiToggleButton from '@mui/material/ToggleButton';
import { FC } from 'react';
import { ToggleButtonProps } from './interfaces/ToggleButtonProps';

export const ToggleButton: FC<ToggleButtonProps> = (props) => {
  const { children, ...rest } = props;

  return <MuiToggleButton {...rest}>{children}</MuiToggleButton>;
};

export default ToggleButton;
