import { BadgeProps as MuiBadgeProps } from '@mui/material/Badge';
import { ReactElement } from 'react';

type BadgeBaseProps = Pick<
  MuiBadgeProps,
  | 'anchorOrigin'
  | 'color'
  | 'components'
  | 'componentsProps'
  | 'invisible'
  | 'overlap'
  | 'variant'
>;

export interface BadgeProps extends BadgeBaseProps {
  children: ReactElement;
  badgeContent: number;
}
