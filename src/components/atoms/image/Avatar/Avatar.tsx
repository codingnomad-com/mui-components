import MuiAvatar from '@mui/material/Avatar';
import { FC } from 'react';
import { AvatarProps } from './interfaces/AvatarProps';

export const Avatar: FC<AvatarProps> = (props) => {
  const { ...rest } = props;

  return <MuiAvatar {...rest} />;
};

export default Avatar;
