import { ListItemButtonProps as MuiListItemButtonProps } from '@mui/material/ListItemButton';
import { ReactNode } from 'react';

type ListItemButtonBaseProps = Pick<
  MuiListItemButtonProps,
  | 'alignItems'
  | 'dense'
  | 'disabled'
  | 'disableGutters'
  | 'divider'
  | 'onClick'
  | 'selected'
  | 'sx'
>;

export interface ListItemButtonProps extends ListItemButtonBaseProps {
  children: ReactNode | ReactNode[];
}
