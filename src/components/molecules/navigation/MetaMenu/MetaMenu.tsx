import MuiMetaMenu from '@mui/material/Menu';
import { FC } from 'react';
import { MetaMenuProps } from './interfaces/MetaMenuProps';

export const MetaMenu: FC<MetaMenuProps> = (props) => {
  const { children, open, ...rest } = props;

  return (
    <MuiMetaMenu open={open} {...rest}>
      {children}
    </MuiMetaMenu>
  );
};

export default MetaMenu;
