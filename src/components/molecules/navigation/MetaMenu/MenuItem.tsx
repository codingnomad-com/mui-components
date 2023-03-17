import MuiMenuItem from '@mui/material/MenuItem';
import { FC } from 'react';
import { MenuItemProps } from './interfaces/MenuItemProps';

export const MenuItem: FC<MenuItemProps> = (props) => {
  const { startIcon, label, ...rest } = props;

  return (
    <MuiMenuItem {...rest}>
      {startIcon}

      {label}
    </MuiMenuItem>
  );
};

export default MenuItem;
