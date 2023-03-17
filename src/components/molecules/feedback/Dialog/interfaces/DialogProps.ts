import { DialogProps as MuiDialogProps } from '@mui/material/Dialog';
import { ReactElement } from 'react';

type DialogBaseProps = Pick<
  MuiDialogProps,
  | 'disableEscapeKeyDown'
  | 'fullScreen'
  | 'fullWidth'
  | 'maxWidth'
  | 'onClose'
  | 'scroll'
  | 'open'
>;

export interface DialogProps extends DialogBaseProps {
  children: ReactElement;
}
