import MuiSnackbar from '@mui/material/Snackbar';
import { FC } from 'react';
import { SnackbarProps } from './interfaces/SnackbarProps';

export const Snackbar: FC<SnackbarProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <div>
      <MuiSnackbar {...rest}>{children}</MuiSnackbar>
    </div>
  );
};

export default Snackbar;
