import MuiListItemAvatar from '@mui/material/ListItemAvatar';
import { FC } from 'react';
import { ListItemAvatarProps } from './interfaces/ListItemAvatarProps';

export const ListItemAvatar: FC<ListItemAvatarProps> = (props) => {
  const { children, ...rest } = props;

  return <MuiListItemAvatar {...rest}>{children}</MuiListItemAvatar>;
};

export default ListItemAvatar;
