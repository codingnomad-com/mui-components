import { MenuItemProps as MuiMenuItemProps } from '@mui/material/MenuItem';
import { ReactElement } from 'react';
import type { SvgIcon } from '~/atoms/icon/SvgIcon/SvgIcon';

type MenuItemBaseProps = Pick<
  MuiMenuItemProps,
  'selected' | 'divider' | 'dense' | 'onClick'
>;

export interface MenuItemProps extends MenuItemBaseProps {
  label: string;
  startIcon?: ReactElement<typeof SvgIcon>;
}
