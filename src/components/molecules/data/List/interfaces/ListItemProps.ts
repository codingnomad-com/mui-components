import { ListItemProps as MuiListItemProps } from '@mui/material/ListItem';
import { ReactElement } from 'react';

type ListItemBaseProps = Pick<
  MuiListItemProps,
  | 'alignItems'
  | 'dense'
  | 'disableGutters'
  | 'disablePadding'
  | 'divider'
  | 'secondaryAction'
  | 'sx'
>;

export interface ListItemProps extends ListItemBaseProps {
  children: ReactElement | ReactElement[];
}
