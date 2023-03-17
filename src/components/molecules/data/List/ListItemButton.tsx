import MuiListItemButton from '@mui/material/ListItemButton';
import { FC } from 'react';
import { ListItemButtonProps } from './interfaces/ListItemButtonProps';

export const ListItemButton: FC<ListItemButtonProps> = (props) => {
  const { children, ...rest } = props;

  return <MuiListItemButton {...rest}>{children}</MuiListItemButton>;
};

export default ListItemButton;
