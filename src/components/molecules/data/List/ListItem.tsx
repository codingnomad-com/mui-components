import MuiListItem from '@mui/material/ListItem';
import { FC } from 'react';
import { ListItemProps } from './interfaces/ListItemProps';

export const ListItem: FC<ListItemProps> = (props) => {
  const { children, ...rest } = props;

  return <MuiListItem {...rest}>{children}</MuiListItem>;
};

export default ListItem;
