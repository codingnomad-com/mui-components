import { ListItemIconProps as MuiListItemIconProps } from '@mui/material/ListItemIcon';
import { ReactElement } from 'react';

type ListItemIconBaseProps = Pick<MuiListItemIconProps, 'sx'>;

export interface ListItemIconProps extends ListItemIconBaseProps {
  children: ReactElement | undefined;
}
