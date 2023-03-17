import MuiBadge from '@mui/material/Badge';
import { FC } from 'react';
import { BadgeProps } from './interfaces/BadgeProps';

export const Badge: FC<BadgeProps> = (props) => {
  const { children, ...rest } = props;

  return <MuiBadge {...rest}>{children}</MuiBadge>;
};

export default Badge;
