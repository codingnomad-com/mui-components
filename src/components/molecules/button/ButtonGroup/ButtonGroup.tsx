import MuiButtonGroup from '@mui/material/ButtonGroup';
import { FC } from 'react';
import { ButtonGroupProps } from './interfaces/ButtonGroupProps';

export const ButtonGroup: FC<ButtonGroupProps> = (props) => {
  const { children, ...rest } = props;

  return <MuiButtonGroup {...rest}>{children}</MuiButtonGroup>;
};

export default ButtonGroup;
