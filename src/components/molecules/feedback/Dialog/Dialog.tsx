import MuiDialog from '@mui/material/Dialog';
import { FC } from 'react';
import { DialogProps } from './interfaces/DialogProps';

export const Dialog: FC<DialogProps> = (props) => {
  const { children, ...rest } = props;

  return <MuiDialog {...rest}>{children}</MuiDialog>;
};

export default Dialog;
