import { SnackbarProps as MuiSnackbarProps } from '@mui/material/Snackbar';
import { ReactElement } from 'react';

type SnackbarBaseProps = Pick<
  MuiSnackbarProps,
  | 'action'
  | 'anchorOrigin'
  | 'autoHideDuration'
  | 'message'
  | 'onClose'
  | 'open'
>;

export interface SnackbarProps extends SnackbarBaseProps {
  children: ReactElement;
}
