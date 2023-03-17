import MuiIconButton from '@mui/material/IconButton';
import { FC } from 'react';
import { IconButtonProps } from './interfaces/IconButtonProps';

export const IconButton: FC<IconButtonProps> = (props) => {
  const { children, ...rest } = props;

  return <MuiIconButton {...rest}>{children}</MuiIconButton>;
};

export default IconButton;
