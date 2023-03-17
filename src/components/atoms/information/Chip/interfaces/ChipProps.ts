import { ChipProps as MuiChipProps } from '@mui/material/Chip';
import { ReactElement } from 'react';
import type { Avatar } from '~/atoms/image/Avatar/Avatar';

type ChipBaseProps = Pick<
  MuiChipProps,
  | 'clickable'
  | 'color'
  | 'disabled'
  | 'icon'
  | 'label'
  | 'onDelete'
  | 'size'
  | 'skipFocusWhenDisabled'
  | 'variant'
>;

export interface ChipProps extends ChipBaseProps {
  avatar: ReactElement<typeof Avatar>;
}
