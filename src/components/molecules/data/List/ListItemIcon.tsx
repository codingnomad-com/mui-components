import MuiListItemIcon from '@mui/material/ListItemIcon';
import { FC } from 'react';
import { ListItemIconProps } from './interfaces/ListItemIconProps';

export const ListItemIcon: FC<ListItemIconProps> = (props) => {
  const { children, ...rest } = props;

  return <MuiListItemIcon {...rest}>{children}</MuiListItemIcon>;
};

export default ListItemIcon;
