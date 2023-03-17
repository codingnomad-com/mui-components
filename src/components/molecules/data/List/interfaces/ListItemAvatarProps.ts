import { ListItemAvatarProps as MuiListItemAvatarProps } from '@mui/material/ListItemAvatar';
import { ReactElement } from 'react';
import type { Avatar } from '~/atoms/image/Avatar/Avatar';

type ListItemAvatarBaseProps = Pick<MuiListItemAvatarProps, 'sx'>;

export interface ListItemAvatarProps extends ListItemAvatarBaseProps {
  children: ReactElement<typeof Avatar>;
}
