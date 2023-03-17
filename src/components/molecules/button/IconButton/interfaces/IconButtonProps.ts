import { IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton';
import { ReactElement } from 'react';

type IconButtonBaseProps = Pick<
  MuiIconButtonProps,
  'color' | 'disabled' | 'edge' | 'size' | 'onClick'
>;

export interface IconButtonProps extends IconButtonBaseProps {
  children: ReactElement;
}
